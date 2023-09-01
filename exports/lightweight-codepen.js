// @ts-check
import { LitElement, html } from "lit"
import { styles, theme } from "./lightweight-codepen.styles.js"
import { when } from "lit/directives/when.js";

import HighlightJS from 'highlight.js/lib/core';
import JavaScript from 'highlight.js/lib/languages/javascript';
import HTML from 'highlight.js/lib/languages/xml';
import CSS from 'highlight.js/lib/languages/css';
import { unsafeHTML } from "lit/directives/unsafe-html.js";


// Then register the languages you need
HighlightJS.registerLanguage('javascript', JavaScript);
HighlightJS.registerLanguage('xml', HTML);
HighlightJS.registerLanguage('css', CSS);

/**
 * @typedef {"html" | "css" | "js"} SupportedLanguages
 */


export default class LightweightCodepen extends LitElement {
  // Static

  static styles = [theme, styles]

  static languageMap = {
    html: "xml",
    css: "css",
    js: "javascript"
  }

  static properties = {
    languages: { state: true, type: Array },
    openLanguages: { type: Array, reflect: true },
    console: { reflect: true },
    debounce: { state: true },
    iframeUrl: { state: true }
  }

  // Overrides

  /**
   * @override
   */
  constructor() {
    super()

    /**
     * @type {Array<SupportedLanguages>}
     */
    this.openLanguages = []

    /**
     * @type {Array<SupportedLanguages>}
     */
    this.languages = ["html", "css", "js"]

    /**
     * @type {"console" | "iframe"}
     */
    this.result = this.getAttribute('result') === "console" ? 'console' : 'iframe',

    /**
     * @type {"enabled" | "disabled"}
     */
    this.console = "disabled"

    /**
     * @type {string}
     */
    this.consoleText = ""

    /**
     * @type {ReturnType<typeof setTimeout> | null}
     */
    this.debounce = null

    this.htmlReset = ""
    this.cssReset = ""
    this.jsReset = ""

    this.removeAttribute('hidden')
  }

  /**
   * @override
   */
  connectedCallback () {
    super.connectedCallback()

    setTimeout(() => {
      /**
       * Grab reset values so we can reset the inputs
       */
      this.htmlReset = this.htmlTextArea?.value || ""
      this.cssReset = this.cssTextArea?.value || ""
      this.jsReset = this.jsTextArea?.value || ""
    })
  }

  /** Getters / Setters */

  /**
   * @returns {null | undefined | HTMLIFrameElement}
   */
  get iframeElem () {
    return this.shadowRoot?.querySelector("iframe")
  }

  /**
   * @return {undefined | null | HTMLInputElement}
   */
  get htmlTextArea () {
    return this.shadowRoot?.querySelector("[part~='textarea-html']")
  }

  /**
   * @return {undefined | null | HTMLInputElement}
   */
  get cssTextArea () {
    return this.shadowRoot?.querySelector("[part~='textarea-css']")
  }

  /**
   * @return {undefined | null | HTMLInputElement}
   */
  get jsTextArea () {
    return this.shadowRoot?.querySelector("[part~='textarea-js']")
  }

  /**
   * Override this to use a highlighter of your choice.
   * @param {{code: string, language: SupportedLanguages}} options
   */
  highlightCode ({ code, language }) {
    const highlightJsLanguage = /** @type {typeof LightweightCodepen} */ (this.constructor).languageMap[language]

    // code = this.escapeCharacters(code)
    // code = this.injectNewLine(code)

    return HighlightJS.highlight(code, {language: highlightJsLanguage}).value
  }

  /**
   * @param {string} text
   */
  escapeCharacters (text) {
    // Update code
    return text.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<"); /* Global RegExp */
  }

  /**
   * Highlighters strip newlines. But you can see new lines in <textarea>, this fixes that.
   * @param {string} text
   */
  injectNewLine (text) {
    // Handle final newlines (see article)
    if(text[text.length-1] == "\n") { // If the last character is a newline character
      text += "\n"; // Add a placeholder space character to the final line
    }

    return text
  }

  updateIframeContent () {
    if (this.iframeElem == null) return

    let clone = this.iframeElem.cloneNode();
    this.iframeElem.replaceWith(clone);

    // this.setupIframeLogging();

    if (this.iframeElem.contentWindow == null) return;

    this.updateCode()

    let page = `
      <!doctype html><html>
        <head><meta charset="utf-8">
          <style>${this.cssCode}<\/style>
        </head>
        <body>
          ${this.htmlCode}
          <script type="module">
            ${this.jsCode}
          <\/script>
        </body>
      </html>
    `

    const iframe = this.shadowRoot?.querySelector("iframe")
    if (iframe && iframe.contentWindow) {
	    iframe.contentWindow.document.open();
	    iframe.contentWindow.document.writeln(page);
	    iframe.contentWindow.document.close();
	  }
  }

  inputHandler () {
    if (this.debounce != null) {
      clearTimeout(this.debounce)
    }

    this.updateCode()

    this.debounce = setTimeout(() => this.updateIframeContent(), 300)
  }

  /**
   * Lovely helper to scoop up our html, css, and js code
   */
  updateCode () {
    this.cssCode = this.cssTextArea?.value
    this.htmlCode = this.htmlTextArea?.value
    this.jsCode = this.jsTextArea?.value
  }

  resetValues () {
    if (this.htmlTextArea) {
      this.htmlCode = this.htmlReset
      this.htmlTextArea.value = this.htmlReset
    }

    if (this.cssTextArea) {
      this.cssCode = this.cssReset
      this.cssTextArea.value = this.cssReset
    }

    if (this.jsTextArea) {
      this.jsCode = this.jsReset
      this.jsTextArea.value = this.jsReset
    }

    this.requestUpdate()
    this.updateIframeContent()
  }

  /**
   * @param {KeyboardEvent} evt
   */
  keydownHandler(evt) {
    /**
     * @type {HTMLTextAreaElement}
     */
    // @ts-expect-error
    const target = evt.target

    const key = evt.key

    if (["Tab", "Escape"].includes(key)) {
      evt.preventDefault()

      if ('Tab' === evt.key) {
        return target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
      }

      if ('Escape' === evt.key) {
        let e = target.closest('details');
        if (!e) return;

        e.querySelector("summary")?.focus()
      }
    }
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
      <div part="base">
			  <div part="sandbox">
				  <div part="sandbox-header">
            <slot name="title">
					    <strong>
                Code Editor
              </strong>
            </slot>

					  <span part="sandbox-controls">
						  <button part="sandbox-controls-button sandbox-reset" @click=${this.resetValues}>
                Reset
              </button>

						  ${when(this.console === "enabled", () => html`<button @click={}>Clear Console</button>`)}
					  </span>
				</div>
				<div part="sandbox-content">
					<div part="sandbox-code">
            ${this.renderCode('html')}
            ${this.renderCode('css')}
            ${this.renderCode('js')}
					</div>
					<div part="sandbox-iframe-wrapper">
						<iframe
              part="sandbox-iframe"
              frameborder="0"
              scrolling="no"
              ?hidden=${this.result === "console"}
             ></iframe>
						${/* this.result === "console" ? s : */''}
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
   * @param {SupportedLanguages} language
   */
  renderCode (language) {
    let fullLanguage = language.toUpperCase()

    let code = this[`${language}Code`]

    // @ts-expect-error
    code = code ? unsafeHTML(this.highlightCode({ code, language })) : ""
    const open = this.openLanguages.includes(language)

		return html`
      <details ?open=${open} part="details details-${language}">
				<summary part="summary summary-${language}">
          ${fullLanguage}
        </summary>
				<label for="sandbox-${language}" class="visually-hidden">${fullLanguage} code</label>
				<div class="sandbox-editor" part="sandbox-editor">
          <!-- This is where the fancy syntax highlighting comes in -->
					<pre
            id="pre-${language}"
            data-code-lang=${language}
            aria-hidden="true"
            part="pre pre-${language}"
          ><code
              part="code code-${language}"
              class="language-${language}"
          >${code}</code></pre>
          <!-- IMPORTANT! There must be no white-space above. -->
					<textarea
            id="textarea-${language}"
            data-code-lang=${language}
            part="textarea textarea-${language}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off" translate="no" @keydown=${this.keydownHandler} @input=${this.inputHandler} @input=${this.syncScroll} @scroll=${this.syncScroll}></textarea>
				</div>
			</details>
		`
  }

  /**
   * @param {Event} e
   */
  syncScroll (e) {
    /**
     * @type {null | HTMLTextAreaElement}
     */
    // @ts-expect-error
    const textarea = e.target

    if (textarea == null) return

    const lang = textarea.dataset.codeLang

    const pre = this.shadowRoot?.querySelector(`#pre-${lang}`)

    if (pre == null) return

    pre.scrollTop = textarea.scrollTop;
    pre.scrollLeft = textarea.scrollLeft;
  }

}
