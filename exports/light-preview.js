import { LitElement, html } from "lit";
import { DefineableMixin } from "web-component-define";
import { buttonStyles, baseStyles } from "./base-styles.js";
import { dedent } from "../internal/dedent.js";

import HighlightJS from 'highlight.js/lib/core';
import HTML from 'highlight.js/lib/languages/xml';
import JavaScript from 'highlight.js/lib/languages/javascript';
import CSS from 'highlight.js/lib/languages/css';
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { theme } from "./light-pen.styles.js";
import { defaultSandboxSettings } from "../internal/default-sandbox-settings.js";
import { previewStyles } from "./light-preview.styles.js";
import { drag } from "../internal/drag.js";
import { clamp } from "../internal/clamp.js";
import { stringMap } from "../internal/string-map.js";


// Then register the languages you need
HighlightJS.registerLanguage('html', HTML);
HighlightJS.registerLanguage('css', CSS);
HighlightJS.registerLanguage('javascript', JavaScript);

const sourceCodeFallback = "Show source code"

/**
 * LightSample is a very lightweight code block editor designed to load your code sample
 *   inside of an iFrame for encapsulated viewing
 */
export default class LightPreview extends DefineableMixin(LitElement) {
  static baseName = "light-preview"

  static styles = [
    baseStyles,
    buttonStyles,
    theme,
    previewStyles
  ]

  /**
   * @param {Event} e
   */
  handleTemplate (e) {
    /**
     * @type {HTMLSlotElement}
     */
    // @ts-expect-error
    const slot = e.target

    const name = slot.getAttribute("name")

    if (["iframe-code", "code"].includes(name || "") === false) return

    const templates = slot.assignedElements({flatten: true})

    const code = templates.map((template) => template.innerHTML).join("\n")

    if (name === "iframe-code") {
      this.iframeCode = code
      return
    }

    if (name === "code") {
      this.code = code
      return
    }
  }

  updateIframeContent () {
    let iframe = this.shadowRoot?.querySelector("iframe")

    if (iframe == null) return

    const clone = iframe.cloneNode(true);
    iframe.replaceWith(clone);

    /**
     * @type {HTMLIFrameElement}
     */
    // @ts-expect-error
    iframe = clone

    if (iframe?.contentWindow == null) return;

    const code = this.unescapeCharacters(this.iframeCode || this.code)

    let page = [`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <base href="${this.baseURL || document.baseURI}">
        </head>
        <body>
          ${code}
        </body>
      </html>`
    ];


    const prevBlobUrl = this.blobUrl

    const blob = new Blob(page, { type: "text/html" })
    const blobUrl = URL.createObjectURL(blob)

    this.blobUrl = blobUrl

    if (iframe) {
	    iframe.src = blobUrl
	  }

    if (prevBlobUrl) {
      setTimeout(() => {
        URL.revokeObjectURL(prevBlobUrl)
      }, 300)
    }
  }

  /**
   * @param {string} text
   */
  escapeCharacters(text) {
    return text.replaceAll(new RegExp("<", "g"), "&lt;").replaceAll(new RegExp(">", "g"), "&gt;")
  }


  /**
   * @param {string} text
   */
  unescapeCharacters (text) {
    return text.replaceAll(/&lt;\/([\w\d\.-_]+)>/g, "</$1>")
  }

  /**
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate (changedProperties) {
    if (["iframeCode", "code", "baseURL"].some((str) => changedProperties.has(str))) {
      if (this._iframeDebounce != null) window.clearTimeout(this._iframeDebounce)
      this._iframeDebounce = setTimeout(() => this.updateIframeContent(), 300)
    }

    if (changedProperties.has("resizePosition")) {
      this.updateResizePosition()
    }

    super.willUpdate(changedProperties)
  }
  static properties = {
    summary: {},
    sandboxSettings: { reflect: true, attribute: "sandbox-settings" },
    codeLanguage: { reflect: true, attribute: "code-language" },
    highlightLanguage: { reflect: true, attribute: "highlight-language" },
    inlinePreview: { type: Boolean, attribute: "inline-preview" },
    disableHighlight: { type: Boolean, attribute: "disable-highlight" },
    open: { reflect: true, type: Boolean },
    baseURL: { reflect: true },
    resizePosition: { reflect: true, type: Number, attribute: "resize-position" },

    // State
    code: { state: true },
    iframeCode: { state: true },

  }

  constructor () {
    super()

    this.sandboxSettings = ""

    this.summary = sourceCodeFallback
    this.codeLanguage = "html"
    this.highlightLanguage = "html"
    this.inlinePreview = false

    this.resizing = false

    /**
     * If disabled, its on you to provide `<pre><code></code></pre>`
     */
    this.disableHighlight = false

    /**
     * We will take the code, wrap it in `<pre><code></code></pre>` and run it through
     * Highlight.js.
     * If the element has `disableHighlight`, we will not touch their code. Instead they must pass in escapedHTML.
     */
    this.code = ""

    /**
     * The baseURL
     */
    this.baseURL = ""

    /**
     * If `disableHighlight` is true, then you must pass in an element into `iframeCode` to be able to get
     *   the code to run in the previewer.
     */
    this.iframeCode = ""

    /**
     * @property
     * @type {boolean}
     */
    this.open = false

    /**
     * The current position of the resizer. 100 means all the way to right. 0 means all the way to left.
     * @property
     * @type {number}
     */
    this.resizePosition = 100

    /**
     * @prop
     * @type {ResizeObserver}
     */
    this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));

  }

  /**
   * Sets an initial width so we dont need to keep computing getBoundingClientRect
   */
  updateCachedWidth () {
    const { left, right } = this.getBoundingClientRect()
    const width = left + right
    this.cachedWidth = width
  }

  /**
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
    })
  }

  highlight (code = this.code) {
    return HighlightJS.highlight(dedent(this.unescapeCharacters(code)), {language: this.highlightLanguage || this.codeLanguage}).value
  }

  render () {
    const language = this.highlightLanguage || this.codeLanguage
    return html`
      <div part=${stringMap({
          "base": true,
          "base--dragging": this.resizing,
        })}>
        <div part="preview">
          ${when(this.inlinePreview,
              () => html`<div part="preview-div"><slot name="preview">${unsafeHTML(this.code)}</slot></div>`,
              () => html`
                <iframe part="iframe" frameborder="0" sandbox=${this.sandboxSettings || defaultSandboxSettings}></iframe>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16" part="svg">
                <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
              </svg>
            </slot>
          </button>

          <div part="end-panel"></div>
        </div>

        <details ?open=${this.open} part="source-details" aria-labelledby="summary">
          <summary style="display: none;"></summary>
          <div part="code-wrapper">
            ${when(this.highlight,
              () => html`
					      <pre
                  id="pre-${language}"
                  data-code-lang=${language}
                  aria-hidden="true"
                  part="pre pre-${language}"
                  tabindex="0"
                  aria-labelledby="source-code-label"
                  role="region"
                ><code
                    part="code code-${language}"
                    class="language-${language}"
                  >${unsafeHTML(this.highlight())}</code></pre>`,
              () => html`${unsafeHTML(this.code)}`
            )}
          </div>
        </details>

        <div part="actions">
          <button part="source-code-toggle" aria-expanded=${this.open} @click=${() => this.open = !this.open} type="button">
            <slot name="summary">${this.summary || sourceCodeFallback}</slot>
            <slot name="source-code-toggle__icon">
              <svg viewBox="0 0 24 24" height="24" width="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </slot>
          </button>

          <slot name="actions"></slot>
        </div>
      </div>

      <div hidden>
        <slot name="iframe-code" @slotchange=${this.handleTemplate}></slot>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>

      <span class="visually-hidden">Preview source code</span>
    `
  }

  get panelResizer () {
    return this.shadowRoot?.querySelector("[part~='panel-resizer']")
  }


  /** Drag stuff */
  /**
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

  updateResizePosition (resizePosition = this.resizePosition) {
    const startWidth = resizePosition

    if (startWidth != null) {
      const endWidth = 100 - startWidth
      this.style.setProperty("--start-panel-width", `clamp(275px, ${startWidth}%, 100%)`)
      this.style.setProperty("--end-panel-width", `${endWidth}%`)
    }
  }

  /**
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
   * @param {number} pixels
   * @return {number}
   */
  pixelsToPercentage (pixels) {
    // @ts-expect-error
    return (pixels / this.cachedWidth) * 100
  }


}
