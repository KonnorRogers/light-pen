// @ts-check
import { html } from "lit";
import { buttonStyles, baseStyles } from "./base-styles.js";

import { when } from "lit/directives/when.js";
import { previewStyles } from "./light-preview.styles.js";
import { drag } from "../internal/drag.js";
import { clamp } from "../internal/clamp.js";
import { stringMap } from "../internal/string-map.js";
import { debounce } from "../internal/debounce.js";
import { resizeIcon } from "../internal/resize-icon.js";
import { BaseElement } from "../internal/base-element.js";
import LightDisclosure from "./light-disclosure.js";
import { elementsToString } from "../internal/elements-to-strings.js";
import { dedent } from "../internal/dedent.js";
import LightCode from "./light-code.js";
import { ifDefined } from "lit/directives/if-defined.js";

const sourceCodeFallback = "Show source code"

/**
 * LightPreview is a very lightweight code previewer designed to load your code sample
 *   inside of an iFrame for encapsulated viewing. `<light-preview>` uses PrismJS as it's
 * @customElement
 * @tagname light-preview
 *
 * @csspart base - The base wrapping element
 * @csspart preview - The wrapper around the iframe / div preview showing your code being run in the browser.
 * @csspart start-panel - The iframe or preview-div
 * @csspart preview-div - used for inline previews
 * @csspart iframe - used for iframe based previews (default)
 * @csspart panel-resizer - The button that resizes the panel
 * @csspart end-panel - The white space when dragging the resizer
 * @csspart source-details - The details element that shows the source code
 * @csspart code-wrapper - The div that wraps the <pre> + <code> elements containing your highlighted code
 * @csspart pre - The <pre> element wrapping the source code
 * @csspart code - The <code>  element wrapping the source code
 * @csspart actions - The buttons at the bottom of the code previewer
 * @csspart source-code-toggle - The button to show the source code
 * @csspart source-code-toggle-icon - The caret icon in the source code toggle
 *
 * @slot resize-icon - The icon to display in the resizer button. Override this to provide your own icon.
 * @slot summary - What to display in source code expander
 * @slot source-code-toggle-icon - Slot in your own icon to override the default caret.
 * @slot actions - Slot in buttons / links to allow for additional actions in the bottom bar.
 * @slot preview-html - If you want to run code that is slightly different from the source code you want to display, slot it into "preview-html"
 * @slot code - Used to display both source code and to power your preview in the iframe. If you slot in "preview-html", then it will only be used to show / highlight your source code.
 */
export default class LightPreview extends BaseElement {
  /**
   * @override
   */
  static baseName = "light-preview"

  /**
   * @override
   */
  static dependencies = {
    "light-disclosure": LightDisclosure,
    "light-code": LightCode
  }

  /**
   * @override
   */
  static styles = [
    baseStyles,
    buttonStyles,
    previewStyles,
  ]

  /**
   * @override
   */
  static properties = {
    summary: {},
    sandboxSettings: { reflect: true, attribute: "sandbox-settings" },
    previewMode: { reflect: true, attribute: "preview-mode" },
    disableHighlight: { type: Boolean, attribute: "disable-highlight" },
    open: { reflect: true, type: Boolean },
    resizePosition: { reflect: true, type: Number, attribute: "resize-position" },
    resizing: { reflect: true, type: Boolean },
    language: { reflect: true },
    unescapeBehavior: { attribute: "unescape-behavior", reflect: true },
    disableLineNumbers: {type: Boolean, reflect: true, attribute: "disable-line-numbers"},
    highlightLines: {attribute: "highlight-lines"},
    insertedLines: {attribute: "inserted-lines"},
    deletedLines: {attribute: "deleted-lines"},
    lineNumberStart: {type: Number, attribute: "line-number-start"},
    scriptScope: {attribute: "script-scope"},
    wrap: {reflect: true},
    code: {},
    previewHtml: { attribute: "preview-html" },
  }

  constructor () {
    super()

    /**
     * The sandbox settings to provide to the <iframe>
     * @type {string}
     */
    this.sandboxSettings = ""

    /**
     * The text to provide in the <details> toggle button
     * @type {string}
     */
    this.summary = sourceCodeFallback

    /**
     * The language to highlight for.
     * @type {string}
     */
    this.language = "html"

    /**
     * Set to true to not use an <iframe> for previewing
     * @type {"iframe" | "shadow-dom"}
     */
    this.previewMode = "iframe"

    /**
     * When the resizer is being dragged, this will be true.
     * @type {boolean}
     */
    this.resizing = false

    /**
     * If disabled, its on you to provide `<pre><code></code></pre>`
     * @type {boolean}
     */
    this.disableHighlight = false


    /**
     * @type {string} - A string of possible lines to highlight. Example: "{1-9, 16, 18}"
     */
    this.highlightLines = ""

    /**
     * @type {string} - A string of lines that are inserted for diffs. Example: "{1-9, 16, 18}"
     */
    this.insertedLines = ""

    /**
     * @type {string} - A string of lines that are deleted for diffs. Example: "{1-9, 16, 18}"
     */
    this.deletedLines = ""

    /**
     * @type {boolean} whether or not to disable line numbers
     */
    this.disableLineNumbers = false

    /**
     * Where to start counting indexes in the gutter. Note, this is purely for display purposes.
     * @type {number}
     */
    this.lineNumberStart = 1

    /**
     * We will take the code, wrap it in `<pre><code></code></pre>` and run it through
     * Prism.js.
     * If the element has `disableHighlight`, we will not touch their code. Instead they must pass in escapedHTML.
     * @type {string}
     */
    this.code = ""

    /**
     * If `disableHighlight` is true, then you must pass in an element into `previewHtml` to be able to get
     *   the code to run in the previewer.
     * @type {string}
     */
    this.previewHtml = ""

    /**
     * Whether or not the source code is being shown
     * @type {boolean}
     */
    this.open = false

    /**
     * The current position of the resizer. 100 means all the way to right. 0 means all the way to left.
     * @type {number}
     */
    this.resizePosition = 100

    /**
     * @internal
     * @type {ResizeObserver}
     */
    this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));

    /**
     * @internal
     * @type {MutationObserverInit}
     */
    this.__mutationObserverConfig = {childList: true, subtree: true, characterData: true }

    /**
     * @internal
     * @type {() => void}
     */
    this.previewHtmlDebounce = debounce(() => this.handleMutation("preview-html"), 20)

    /**
     * @internal
     * @type {() => void}
     */
    this.codeDebounce = debounce(() => this.handleMutation("code"), 20)

    /**
     * @property
     * @type {"soft" | "hard"}
     * If `wrap="soft"`, lines will wrap when they reach the edge of their container. If `wrap="none"`, lines will not wrap instead all the user to scroll horizontally to see more code.
     */
    this.wrap = "soft"


    /**
     * Whether or not to transform `&lt;/script>` into `<script>`
     * If true, will run transform. If false, will leave the code as is.
     *
     * @type {"all" | "last" | "none"}
     */
    this.unescapeBehavior = "last"

    /**
     * When using `preview-mode="shadow-dom"`,
     * There's a funky issue with previews where if you want the location of the shadowRoot
     * you are, you can't get it. As a result, `<light-preview>` supports the idea of a "scriptScope"
     * where `document` is bound to the current shadowRoot instead of the actual top level `document`
     * For more info, check out this GitHub issue:
     * @link {https://github.com/WICG/webcomponents/issues/717#issuecomment-1126786185}
     *
     * @type {"document" | "shadow-dom"}
     */
    this.scriptScope = "document"
  }

  /**
   * @internal
   * Reinstalls the mutation on slotted preview-html
   */
  resetIframeCodeMutationObserver () {
    if (this.previewHtmlMutationObserver) {
      this.previewHtmlMutationObserver.disconnect()
    }
    this.previewHtmlMutationObserver = new MutationObserver((..._args) => this.previewHtmlDebounce())

    const targets = this.findSlot("preview-html")?.assignedElements({ flatten: true }) || []

    for (const target of targets) {
      this.previewHtmlMutationObserver.observe(target, this.__mutationObserverConfig)
    }
  }

  /**
   * @internal
   * Reinstalls the mutation observer on slotted code
   */
  resetCodeMutationObserver () {
    if (this.codeMutationObserver) {
      this.codeMutationObserver.disconnect()
    }
    this.codeMutationObserver = new MutationObserver((..._args) => this.codeDebounce())

    const targets = this.findSlot("code")?.assignedElements({ flatten: true }) || []

    for (const target of targets) {
      this.codeMutationObserver.observe(target, this.__mutationObserverConfig)
    }
  }


  /**
   * @internal
   * @param {"preview-html" | "code"} variable
   */
  handleMutation (variable) {
    if (variable === "preview-html") {
      this.handleTemplate({ target: this.findSlot("preview-html") })
      return
    }

    if (variable === "code") {
      this.handleTemplate({ target: this.findSlot("code") })
      return
    }
  }

  /**
   * @internal
   * @param {string} name
   * @returns {HTMLSlotElement | null | undefined}
   */
  findSlot(name) {
    return this.shadowRoot?.querySelector(`slot[name='${name}']`)
  }

  /**
   * @internal
   * @param {Event | { target?: undefined | null | HTMLSlotElement }} e
   */
  handleTemplate (e) {
    /**
     * @type {HTMLSlotElement | null | undefined}
     */
    // @ts-expect-error
    const slot = e.target

    if (slot == null) return

    const name = slot.getAttribute("name")

    if (["preview-html", "code"].includes(name || "") === false) return

    let shouldReset = "type" in e && e.type === "slotchange"

    let elements = slot.assignedElements({flatten: true})

    const code = dedent(elementsToString(...elements).trim())

    if (name === "preview-html") {
      if (shouldReset) this.resetIframeCodeMutationObserver()
      this.previewHtml = code
      this.requestUpdate("previewHtml")
      return
    }

    if (name === "code") {
      if (shouldReset) this.resetCodeMutationObserver()
      this.code = code
      this.requestUpdate("code")
      return
    }
  }

  /**
   * @internal
   */
  updateIframeContent () {
    const code = this.previewHtml || this.code

    const iframe = this.shadowRoot?.querySelector("iframe")

    if (!iframe) return

    const content = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          ${code}
        </body>
      </html>`

    iframe.srcdoc = content
  }

  /**
   * @internal
   * @param {string} text
   */
  escapeCharacters(text) {
    return text
    // return text.replaceAll(new RegExp("<", "g"), "&lt;").replaceAll(new RegExp(">", "g"), "&gt;")
  }

  /**
   * Only used to unescape things like `&lt;/script>` from slotted content.
   * @internal
   * @param {string} text
   */
  transformTags (text) {
    const unescapeRegex = /&lt;\/([\w\d\.-_]+)>/g
    if (this.unescapeBehavior === "last") {
      return replaceLast(text, unescapeRegex)
    }

    if (this.unescapeBehavior === "all") {
      return text.replaceAll(unescapeRegex, "</$1>");
    }

    return text
  }

  /**
   * @override
   * @internal
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate (changedProperties) {
    if (/** @type {Array<"previewHtml" | "code">} */ (["previewHtml", "code"]).some((str) => changedProperties.has((str)))) {
      if (this._iframeDebounce != null) window.clearTimeout(this._iframeDebounce)
      this._iframeDebounce = setTimeout(() => this.updateIframeContent(), 300)


      if (this.shadowRoot) {
        this.addShadowRootToPreview(this.shadowRoot)
      }
    }

    if (changedProperties.has("resizePosition")) {
      this.updateResizePosition()
    }

    super.willUpdate(changedProperties)
  }

  /**
   * @internal
   * Sets an initial width so we dont need to keep computing getBoundingClientRect
   */
  updateCachedWidth () {
    const { left, right } = this.getBoundingClientRect()
    const width = left + right
    this.cachedWidth = width
  }

  /**
   * @internal
   * @param {ResizeObserverEntry[]} entries
   */
  handleResize (entries) {
    const { left, right } = entries[0].contentRect;

    const width = left + right
    // Resize when a primary panel is set
    this.cachedWidth = width
  }

  /**
   * @override
   */
  connectedCallback () {
    super.connectedCallback()

    this.updateCachedWidth()

    this.updateComplete.then(() => {
      this.resizeObserver.observe(this)

      this.resetIframeCodeMutationObserver()
      this.resetCodeMutationObserver()
    })
  }

  /**
   * @public
   * Override this function to use your own highlighter
   */
  highlight (code = this.code) {
    return code
  }

  /**
   * @private
   * @param {HTMLElement | Element | ShadowRoot} root
   */
  addShadowRootToPreview (root) {
    const previewDiv = root.querySelector("[part~='preview-div']")

    if (!previewDiv) return

    const transformedTags = this.transformTags(this.previewHtml || this.code)

    if (!previewDiv.shadowRoot) {
      previewDiv.attachShadow({ mode: "open" })
    }

    // This shouldnt happen. but :shrug:
    if (!previewDiv.shadowRoot) return

    previewDiv.shadowRoot.innerHTML = transformedTags

    /**
     * @param {HTMLElement} target
     * @param {HTMLElement} source
     */
    function cloneAttributes(target, source) {
      Array.from(source.attributes).forEach(attr => {
        target.setAttribute(attr.nodeName, attr.nodeValue || "")
      })
    }

    previewDiv.shadowRoot?.querySelectorAll("script").forEach((script) => {
      if (script.type === "module" || script.type.trim() === "" || script.type.includes("javascript")) {
        const newScript = document.createElement("script")
        newScript.innerHTML = script.innerHTML

        cloneAttributes(newScript, script)

        if (this.scriptScope !== "shadow-dom") {
          script.replaceWith(newScript)
          return
        }

        script.remove()

        // https://github.com/WICG/webcomponents/issues/717#issuecomment-1126786185
        const host = previewDiv;
        const shadowRoot = previewDiv.shadowRoot
        /** @param {string} script */
        const scopedEval = (script) => Function('document', script).bind(host, shadowRoot, script)();
        scopedEval(newScript.innerHTML)
      }
    })
  }

  /**
   * @override
   */
  render () {
    const finalHTML = html`
      <div part=${stringMap({
          "base": true,
        })}>
        <div part="preview">
          ${when(this.previewMode === "shadow-dom",
              () => html`<div part="start-panel preview-div"></div>`,
              () => html`
                <iframe part="start-panel iframe" height="auto" frameborder="0" sandbox=${ifDefined(this.sandboxSettings ? this.sandboxSettings : null)}></iframe>
              `
           )}
          <button
            id="panel-resizer"
            part="panel-resizer"
            role="separator"
            aria-valuenow=${this.resizePosition}
            aria-valuemin="0"
            aria-valuemax="100"
            @keydown=${this.handleResizerKeydown}
            @pointerdown=${this.handleDrag}
            @touchstart=${this.handleDrag}
            class=${`light-button ${this.resizing ? "is-active" : ""}`}
          >
            <slot name="resize-icon">
              ${resizeIcon}
            </slot>
          </button>

          <div part="end-panel"></div>
        </div>

        <light-disclosure
          id="details"
          ?open=${this.open}
          @light-toggle=${(/** @type {Event} */ e) => this.open = /** @type {LightDisclosure} */ (e.currentTarget).open}
          part="source-details"
          aria-labelledby="summary"
          exportparts="
            summary:source-details__summary
          "
        >
          <div part="code-wrapper">
            <light-code
              .language=${this.language}
              .code=${this.transformTags(this.code)}
              wrap=${this.wrap}
              ?disable-highlight=${this.disableHighlight}
              ?disable-line-numbers=${this.disableLineNumbers}
              .highlightLines=${this.highlightLines}
              .insertedLines=${this.insertedLines}
              .deletedLines=${this.deletedLines}
              .lineNumberStart=${this.lineNumberStart}
            ></light-code>
          </div>
        </light-disclosure>

        <div part="actions">
          <button class="light-button" part="source-code-toggle" aria-expanded=${this.open} aria-controls="details" @click=${() => this.open = !this.open} type="button">
            <slot name="summary">${this.summary || sourceCodeFallback}</slot>
            <slot name="source-code-toggle-icon">
              <svg part="source-code-toggle-icon" viewBox="0 0 24 24" height="24" width="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </slot>
          </button>

          <slot name="actions"></slot>
        </div>
      </div>

      <div hidden>
        <slot name="preview-html" @slotchange=${this.handleTemplate}></slot>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `

    return finalHTML
  }


  /**
   * @internal
   */
  get panelResizer () {
    return this.shadowRoot?.querySelector("[part~='panel-resizer']")
  }


  /** Drag stuff */
  /**
   * @internal
   * @param {PointerEvent} event
   */
  handleDrag (event) {
    // Prevent text selection when dragging
    if (event.cancelable) {
      event.preventDefault();
    }

    const iframe = this.shadowRoot?.querySelector("iframe")
    if (iframe) {
      // We need to disable pointerevents on the iframe to listen for mousemove over the top of it.
      iframe.style.pointerEvents = "none"
    }

    this.resizing = true

    const target = event.currentTarget

    // @ts-expect-error
    const halfWidth = (target?.offsetWidth || 0) / 2

    drag(this, {
      onMove: (x, _y) => {
        let newPositionInPixels = x + halfWidth;

        this.resizePosition = clamp(0, this.pixelsToPercentage(newPositionInPixels), 100);
        this.updateResizePosition()
        this.resizing = true
      },
      onStop: () => {
        const iframe = this.shadowRoot?.querySelector("iframe")
        if (iframe) {
        // Re-enable pointerevents so you can use tab keys etc.
          iframe.style.pointerEvents = "auto"
        }

        this.resizing = false
      },
      initialEvent: event
    });
  }

  /**
   * @internal
   */
  updateResizePosition (resizePosition = this.resizePosition) {
    const startWidth = resizePosition

    if (startWidth != null) {
      const endWidth = 100 - startWidth
      this.style.setProperty("--start-panel-width", `clamp(100px, ${startWidth}%, 100%)`)
      this.style.setProperty("--end-panel-width", `${endWidth}%`)
    }
  }

  /**
   * @internal
   * @param {KeyboardEvent} event
   */
  handleResizerKeydown (event) {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      let newPosition = this.resizePosition;
      const incr = (event.shiftKey ? 10 : 1) * (1);

      event.preventDefault();

      if (event.key === 'ArrowLeft') {
        newPosition -= incr;
      }

      if (event.key === 'ArrowRight') {
        newPosition += incr;
      }

      if (event.key === 'Home') {
        newPosition = 100;
      }

      if (event.key === 'End') {
        newPosition = 0;
      }

      this.resizePosition = clamp(0, newPosition, 100);
    }
  }


  /**
   * @internal
   * @param {number} pixels
   * @return {number}
   */
  pixelsToPercentage (pixels) {
    // @ts-expect-error
    return (pixels / this.cachedWidth) * 100
  }
}

/**
  * @param {string} s - The string to replace
  * @param {number} start - The start index
  * @param {number} end - The end index
  * @param {string} substitute - the substituting string
  */
function replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

/**
 * @param {string} text
 * @param {RegExp} regex
 */
function replaceLast (text, regex) {
  const matches = [...text.matchAll(regex)]

  const lastMatch = matches[matches.length - 1]

  if (!lastMatch) return text
  if (lastMatch.index == null) return text

  const { index } = lastMatch

  const start = index
  const end = index + lastMatch[0].length
  const substitution = "</" + lastMatch[1] + ">"
  return replaceRange(text, start, end, substitution)
}
