// @ts-check

import { html } from "lit"
import { styles } from "./light-pen.styles.js"
import { when } from "lit/directives/when.js";

import { baseStyles, buttonStyles } from "./base-styles.js";

import { clamp } from '../internal/clamp.js'
import { dedent } from "../internal/dedent.js";
import { drag } from "../internal/drag.js";
// import { defaultSandboxSettings } from "../internal/default-sandbox-settings.js";
import { resizeIcon } from "../internal/resize-icon.js";
import { BaseElement } from "../internal/base-element.js";
import LightEditor from "./light-editor.js";
import { LightDisclosure } from "./light-disclosure.js";

/**
 * @typedef {"html" | "css" | "js"} SupportedLanguages
 * @typedef {HTMLTextAreaElement | HTMLScriptElement | HTMLTemplateElement} SafeTemplateElements
 */


/**
 * A lightweight codepen-like editor. `<light-pen>` is `~15kb` in size. Compared to `~90kb` from CodeMirror and `~160kb` from CodeSandbox. LightPen purposely is small and lightweight and is not intended to replace these tools. But rather
 fill a gap for users who don't need as much power.
 * @customElement
 * @tagname light-pen
 * @slot html - HTML to insert
 * @slot css - CSS to insert
 * @slot js - JavaScript to insert
 * @slot title - The title to appear at the top of the editor
 *
 * @part base - The base wrapper
 * @part sandbox - The wrapper around the editor and the iframe
 * @part sandbox-header - The wrapper around the header area
 */
export default class LightPen extends BaseElement {
  // Static
  /**
   * @override
   */
  static baseName = "light-pen"

  /**
   * @override
   */
  static styles = [baseStyles, buttonStyles, styles]

  /**
   * @override
   */
  static dependencies = {
    'light-editor': LightEditor,
    'light-disclosure': LightDisclosure
  }

  /**
   * @override
   */
  static properties = {
    openLanguages: { reflect: true, attribute: "open-languages" },
    resizePosition: { attribute: "resize-position", reflect: true, type: Number },
    console: { reflect: true },
    // sandboxSettings: { reflect: true, attribute: "sandbox-settings"},
    languages: { attribute: false, type: Array },
    cssCode: { attribute: false },
    htmlCode: { attribute: false },
    jsCode: { attribute: false },
    // cssResetCode: { attribute: false },
    // htmlResetCode: { attribute: false },
    // jsResetCode: { attribute: false },
    htmlResizeObserver: { attribute: false },
    jsResizeObserver: { attribute: false },
    cssResizeObserver: { attribute: false },
    _resizing: { attribute: false },
  }

  // Overrides

  /**
   * @override
   */
  constructor() {
    super()

    /**
     * @property
     * @type {ResizeObserver}
     */
    this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));

    /**
     * @attribute
     * @reflect
     * @type {number}
     */
    this.resizePosition = 50

    /**
     * Languages to have open on initial render
     * Comma separated list of elements to open on initial render "html,css,js" to open all.
     * @attribute
     * @reflect
     * @type {string}
     */
    this.openLanguages = ""

    /**
     * @type {Array<SupportedLanguages>}
     * @property
     */
    this.languages = ["html", "css", "js"]

    /**
     * Not implemented.
     * @property
     * @type {"enabled" | "disabled"}
     */
    this.console = "disabled"

    /**
     * Not implemented.
     * @property
     * @type {string}
     */
    this.consoleText = ""

    /**
     * @property
     * @internal
     * @type {number}
     */
    this.cachedWidth = 0

    /**
     * @property
     * @type {string}
     */
    this.sandboxSettings = ""

    /**
     * @internal
     */
    this._resizing = false

    this.cssCode = ""
    this.htmlCode = ""
    this.jsCode = ""

    // this.cssResetCode = ""
    // this.htmlResetCode = ""
    // this.jsResetCode = ""
  }


  /**
   * @type {undefined | null | LightEditor}
   */
  get jsEditor () {
    return this.shadowRoot?.querySelector("#editor-js")
  }

  /**
   * @type {undefined | null | LightEditor}
   */
  get cssEditor () {
    return this.shadowRoot?.querySelector("#editor-css")
  }

  /**
   * @type {undefined | null | LightEditor}
   */
  get htmlEditor () {
    return this.shadowRoot?.querySelector("#editor-html")
  }

  /**
   * @override
   */
  connectedCallback () {
    super.connectedCallback()

    this.updateCachedWidth()

    this.updateComplete.then(() => {
      this.resizeObserver.observe(this)
    });
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

  /** Getters / Setters */

  /**
   * @returns {null | undefined | HTMLIFrameElement}
   */
  get iframeElem () {
    return this.shadowRoot?.querySelector("iframe")
  }

  updateIframeContent () {
    const iframeElem = this.iframeElem
    if (iframeElem == null) return

    // this.setupIframeLogging();

    let page = `
      <!doctype html><html>
        <head><meta charset="utf-8">
          <style>${this.cssCode}<\/style>
        </head>
        <body>
          ${this.htmlCode}
          <script type="module">
            ${this.jsCode}
          </script>
        </body>
      </html>
    `

    iframeElem.contentWindow?.document.open()
    iframeElem.contentWindow?.document.writeln(page)
    iframeElem.contentWindow?.document.close()
  }

  /**
   * @override
   * @param {import("lit").PropertyValues} changedProperties
   */
  willUpdate (changedProperties) {
    if (["cssCode", "htmlCode", "jsCode"].some((str) => changedProperties.has(str))) {
      if (this._iframeDebounce != null) window.clearTimeout(this._iframeDebounce)
      this._iframeDebounce = setTimeout(() => this.updateIframeContent(), 300)
    }

    if (changedProperties.has("resizePosition")) {
      this.updateResizePosition()
    }

    super.willUpdate(changedProperties)
  }

  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback()
    this.resizeObserver.disconnect()
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

      this.resizePosition = clamp(newPosition, 0, 100);
    }
  }

  updateResizePosition (resizePosition = this.resizePosition) {
    const startWidth = resizePosition

    if (startWidth != null) {
      const endWidth = 100 - startWidth
      this.style.setProperty("--start-panel-width", `${startWidth}%`)
      this.style.setProperty("--end-panel-width", `${endWidth}%`)
    }
  }


  resetValues () {
    this.htmlCode = this.htmlEditor?.getAttribute("value") || ""
    this.cssCode = this.cssEditor?.getAttribute("value") || ""
    this.jsCode = this.jsEditor?.getAttribute("value") || ""

    this.requestUpdate()

  }

  // setupIframeLogging() {
  //   if (!this.console && this.result !== 'console') return;
  //
  //   if (this.iframeElem == null) return
  //   if (this.iframeElem.contentWindow == null) return
  //
  //   this.iframeElem.contentWindow.document.open(),
  //   this.iframeElem.contentWindow.document.writeln(
  //     '<script>\n\t\t\t\tlet __console = Object.assign({}, console);\n\t\t\t\tlet __listener = function () {};\n\t\t\t\tfor (let type in console) {\n\t\t\t\t\tconsole[type] = function (...msg) {\n\t\t\t\t\t\t__listener({source: \'iframe\', msg, type}, \'*\');\n\t\t\t\t\t\t__console[type](...msg);\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t\tconsole.listen = function (callback) {\n\t\t\t\t\t__listener = callback;\n\t\t\t\t};\n\t\t\t</script>'
  //   ),
  //   this.iframeElem.contentWindow.document.close();
  //   let e = this;
  //
  //
  //   // @ts-expect-error
  //   this.iframeElem.contentWindow.console.listen(
  //     function (t) {
  //       for (let n of t.msg) {
  //         let a = document.createElement('div');
  //         a.className = `log-${ t.type }`,
  //         a.textContent = this.getConsoleMessage(),
  //         e.loggerElem?.append(a)
  //       }
  //     }
  //   )
  // }

  // Rendering
  renderConsole () {
    return html`<div part="sandbox-console-log"></div>`
  }

  /**
   * @override
   */
  render () {
		return html`
      <!-- Where users can declaratively provide templates -->
      <div part="base" ?resizing=${this._resizing}>
			  <div part="sandbox">
				  <div part="sandbox-header">
            <slot name="title">
					    <strong>
                Code Editor
              </strong>
            </slot>

					  <span part="sandbox-controls">
						  <button class="light-button" part="sandbox-controls-button sandbox-reset" @click=${this.resetValues}>
                Reset
              </button>

						  ${when(this.console === "enabled", () => html`<button @click={}>Clear Console</button>`)}
					  </span>
				</div>
				<div part="sandbox-content">
					<div part="sandbox-code">
            ${this.renderDetails('html')}
            ${this.renderDetails('css')}
            ${this.renderDetails('js')}
					</div>

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
            class=${`light-button ${this._resizing ? `is-active` : ""}`}
          >
            <slot name="panel-resize-icon">
              ${resizeIcon}
            </slot>
            <span class="visually-hidden">Resize Panel. Pull to left or right to resize.</span>
          </button>

					<div part="sandbox-iframe-wrapper">
						<iframe
              part="sandbox-iframe"
              frameborder="0"
             ></iframe>
					</div>
				</div>

        <!--
        ${when(
            this.console === "enabled",
            () => html`
              <details class="sandbox-console" ?open=${console}>
                <summary part="summary summary-console" tabindex="0">Console</summary>
                ${this.consoleText}
              </details>
            `
        )}
        -->
			</div>
		</div>`
	}

  /**
   * @param {PointerEvent} event
   */
	handleDrag (event) {
    // Prevent text selection when dragging
    if (event.cancelable) {
      event.preventDefault();
    }

    if (this.iframeElem) {
      // We need to disable pointerevents on the iframe to listen for mousemove over the top of it.
      this.iframeElem.style.pointerEvents = "none"
    }

    this._resizing = true

    drag(this, {
      onMove: (x, _y) => {
        this._resizing = true
        let newPositionInPixels = x;

        this.resizePosition = clamp(0, this.pixelsToPercentage(newPositionInPixels), 100);
        this.updateResizePosition()
      },
      onStop: () => {
        if (this.iframeElem) {
        // Re-enable pointerevents so you can use tab keys etc.
          this.iframeElem.style.pointerEvents = "auto"
        }

        this._resizing = false
      },
      initialEvent: event
    });
  }

  /**
   * @internal
   * @param {number} pixels
   * @return {number}
   */
  pixelsToPercentage (pixels) {
    return (pixels / this.cachedWidth) * 100
  }

  /**
   * @internal
   * @param {SupportedLanguages} language
   */
  renderEditor (language) {
    return html`
      <light-editor
        id=${`editor-${language}`}
        part=${`sandbox-editor sandbox-editor--${language}`}
        exportparts="
          base:sandbox-editor__base,
          pre:sandbox-editor__pre,
          code:sandbox-editor__code,
          textarea:sandbox-editor__textarea
        "
        language=${language}
        .value=${this[`${language}Code`]}
        @light-value-change=${(/** @type Event */ e) => {
          this[`${language}Code`] = /** @type {LightEditor} */ (e.currentTarget).value
        }}
      ><slot name=${language}></slot></light-editor>
    `
  }

  /**
   * @internal
   * @param {SupportedLanguages} language
   */
  renderDetails (language) {
    let fullLanguage = language.toUpperCase()

    // const open = this.openLanguages.split(",").includes(language)

		return html`
      <light-disclosure part="disclosure disclosure-${language}">
        <span part="summary" slot="summary"><slot name=${`summary-${language}`}>${fullLanguage}</slot></span>

        ${this.renderEditor(language)}
			</light-disclosure>
		`
  }
}

