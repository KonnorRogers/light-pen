// @ts-check
import { html } from "lit";
import { buttonStyles, baseStyles } from "./base-styles.js";

import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { defaultSandboxSettings } from "../internal/default-sandbox-settings.js";
import { previewStyles } from "./light-preview.styles.js";
import { drag } from "../internal/drag.js";
import { clamp } from "../internal/clamp.js";
import { stringMap } from "../internal/string-map.js";
import { debounce } from "../internal/debounce.js";
import { resizeIcon } from "../internal/resize-icon.js";
import { BaseElement } from "../internal/base-element.js";
import { LightDisclosure } from "./light-disclosure.js";
import { elementsToString } from "../internal/elements-to-strings.js";
import { dedent } from "../internal/dedent.js";

const sourceCodeFallback = "Show source code"

/**
 * LightPreviewBase is not meant to be used directly, rather its the base implementation of
 *   previewing. It comes without a highlight theme or a highlighter. Go to LightPreview for how to
 *   implement your own theme and highlighter.
 * @customElement
 * @tagname light-preview-base
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
 * @slot preview-code - If you want to run code that is slightly different from the source code you want to display, slot it into "preview-code"
 * @slot code - Used to display both source code and to power your preview in the iframe. If you slot in "preview-code", then it will only be used to show / highlight your source code.
 */
export default class LightPreviewBase extends BaseElement {
  static baseName = "light-preview-base"

  static dependencies = {
    "light-disclosure": LightDisclosure
  }

  static styles = [
    baseStyles,
    buttonStyles,
    previewStyles
  ]

  static properties = {
    summary: {},
    sandboxSettings: { reflect: true, attribute: "sandbox-settings" },
    previewMode: { reflect: true, attribute: "preview-mode" },
    disableHighlight: { type: Boolean, attribute: "disable-highlight" },
    open: { reflect: true, type: Boolean },
    resizePosition: { reflect: true, type: Number, attribute: "resize-position" },
    resizing: { reflect: true, type: Boolean },
    language: {},

    // State
    code: { attribute: false },
    previewCode: { attribute: false },
  }

  constructor () {
    super()

    /**
     * The sandbox settings to provide to the <iframe>
     * @type {string}
     */
    this.sandboxSettings = defaultSandboxSettings

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
     * We will take the code, wrap it in `<pre><code></code></pre>` and run it through
     * Highlight.js.
     * If the element has `disableHighlight`, we will not touch their code. Instead they must pass in escapedHTML.
     * @type {string}
     */
    this.code = ""

    /**
     * If `disableHighlight` is true, then you must pass in an element into `previewCode` to be able to get
     *   the code to run in the previewer.
     * @type {string}
     */
    this.previewCode = ""

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
    this.previewCodeDebounce = debounce(() => this.handleMutation("preview-code"), 20)

    /**
     * @internal
     * @type {() => void}
     */
    this.codeDebounce = debounce(() => this.handleMutation("code"), 20)
  }

  /**
   * @internal
   * Reinstalls the mutation on slotted preview-code
   */
  resetIframeCodeMutationObserver () {
    if (this.previewCodeMutationObserver) {
      this.previewCodeMutationObserver.disconnect()
    }
    this.previewCodeMutationObserver = new MutationObserver((..._args) => this.previewCodeDebounce())

    const targets = this.findSlot("preview-code")?.assignedElements({ flatten: true }) || []

    for (const target of targets) {
      this.previewCodeMutationObserver.observe(target, this.__mutationObserverConfig)
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
   * @param {"preview-code" | "code"} variable
   */
  handleMutation (variable) {
    if (variable === "preview-code") {
      this.handleTemplate({ target: this.findSlot("preview-code") })
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

    if (["preview-code", "code"].includes(name || "") === false) return

    let shouldReset = "type" in e && e.type === "slotchange"

    let elements = slot.assignedElements({flatten: true})

    const code = dedent(this.unescapeTags(elementsToString(...elements)).trim())

    if (name === "preview-code") {
      if (shouldReset) this.resetIframeCodeMutationObserver()
      this.previewCode = code
      return
    }

    if (name === "code") {
      if (shouldReset) this.resetCodeMutationObserver()
      this.code = code
      return
    }
  }

  /**
   * @internal
   */
  updateIframeContent () {
    const code = this.previewCode || this.code

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

    iframe.contentWindow?.document.open()
    iframe.contentWindow?.document.writeln(content)
    iframe.contentWindow?.document.close()
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
  unescapeTags (text) {
    // return text.replaceAll(/&lt;\/([\w\d\.-_]+)>/g, "</$1>")
    // @TODO: Find a way to not need to unescape for the editor.
    // return text.replace(/&lt;\//g, '</');
    return text
  }

  /**
   * @internal
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate (changedProperties) {
    if (/** @type {Array<keyof LightPreviewBase>} */ (["previewCode", "code"]).some((str) => changedProperties.has((str)))) {
      if (this._iframeDebounce != null) window.clearTimeout(this._iframeDebounce)
      this._iframeDebounce = setTimeout(() => this.updateIframeContent(), 300)
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

  render () {
    const language = this.language
    return html`
      <div part=${stringMap({
          "base": true,
        })}>
        <div part="preview">
          ${when(this.previewMode === "shadow-dom",
              () => html`<div part="start-panel preview-div">${unsafeHTML(this.code || this.previewCode)}</div>`,
              () => html`
                <iframe part="start-panel iframe" height="auto" frameborder="0"></iframe>
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
            class=${this.resizing ? "is-active" : ""}
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
            ${when(!this.disableHighlight,
              () => html`
					      <pre
                  id="pre-${language}"
                  data-code-lang=${language}
                  aria-hidden="true"
                  part="pre pre-${language}"
                  tabindex="0"
                  aria-labelledby="source-code-label"
                  class="language-${language}"
                  role="region"
                ><code
                    part="code code-${language}"
                    class="language-${language}"
                  >${unsafeHTML(this.highlight())}</code></pre>`,
              () => html`${unsafeHTML(this.code)}`
            )}
          </div>
        </light-disclosure>

        <div part="actions">
          <button part="source-code-toggle" aria-expanded=${this.open} aria-controls="details" @click=${() => this.open = !this.open} type="button">
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
        <slot name="preview-code" @slotchange=${this.handleTemplate}></slot>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `
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
