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
  static styles = [theme, styles]

  static grammarMap = {
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

  get iframeElem () {
    return this.shadowRoot?.querySelector("iframe")
  }

  /**
   * @param {SupportedLanguages} language
   */
  renderCode (language) {
    let fullLanguage = language.toUpperCase()

    const code = this[`${language}Code`]
    const grammar = /** @type {typeof LightweightCodepen} */ (this.constructor).grammarMap[language]

    const open = this.openLanguages.includes(language)

		return html`
      <details ?open=${open} part="details details-${language}">
				<summary part="summary summary-${language}">
          ${fullLanguage}
        </summary>
				<label for="sandbox-${language}" class="visually-hidden">${fullLanguage} code</label>
				<div class="sandbox-editor" part="editor">
          <!-- This is where the fancy syntax highlighting comes in -->
					<pre class="sandbox-mirror" aria-hidden="true" part="pre pre-${language}"><code part="code code-${language}" id="sandbox-${language}-mirror" class="language-${language}">${code ? unsafeHTML(this.highlightCode({ code, grammar })) : ""}</code></pre>
					<textarea part="textarea textarea-${language}" spellcheck="false" autocorrect="off" autocapitalize="off" translate="no" class="sandbox-text" id="sandbox-${language}"></textarea>
				</div>
			</details>
		`
  }

  /**
   * Override this to use a highlighter of your choice.
   * @param {{code: string, grammar: string}} options
   */
  highlightCode ({ code, grammar }) {
    return HighlightJS.highlight(code, {language: grammar}).value
  }

  updateIframeContent () {
    if (this.iframeElem == null) return

    let clone = this.iframeElem.cloneNode();
    this.iframeElem.replaceWith(clone);

    // this.setupIframeLogging();

    if (this.iframeElem.contentWindow == null) return;

    this.cssCode = this.cssTextArea?.value
    this.htmlCode = this.htmlTextArea?.value
    this.jsCode = this.jsTextArea?.value

    let page = [`
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
    `];

    const blob = new Blob(page,{type:"text/html"});
    let blobUrl = URL.createObjectURL(blob);
    this.shadowRoot?.querySelector("iframe")?.setAttribute("src", blobUrl)
    setTimeout(URL.revokeObjectURL, 5000, blobUrl);
  }

  inputHandler () {
    if (this.debounce != null) {
      clearTimeout(this.debounce)
    }

    this.cssCode = this.cssTextArea?.value
    this.htmlCode = this.htmlTextArea?.value
    this.jsCode = this.jsTextArea?.value

    this.debounce = setTimeout(() => this.updateIframeContent(), 300)
  }

  fallbackToResetValues () {
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

    if (
      target.matches('.sandbox-text') &&
      this.contains(target) &&
      ["Tab", "Escape"].includes(key)
    ) {
      evt.preventDefault()

      if ('Tab' === evt.key) {
        return target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
      }

      if ('Escape' === evt.key) {
        let e = target.closest('details');
        if (!e) return;

        // @ts-expect-error
        e.firstElementChild.focus()
      }
    }
  }

  /**
   * @return {undefined | null | HTMLInputElement}
   */
  get htmlTextArea () {
    return this.shadowRoot?.querySelector("#sandbox-html")
  }

  /**
   * @return {undefined | null | HTMLInputElement}
   */
  get cssTextArea () {
    return this.shadowRoot?.querySelector("#sandbox-css")
  }

  /**
   * @return {undefined | null | HTMLInputElement}
   */
  get jsTextArea () {
    return this.shadowRoot?.querySelector("#sandbox-js")
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

  renderConsole () {
    return html`<div class="sandbox-console-log"></div>`
  }

  render () {
		return html`
      <div class="full-width">
			  <div class="sandbox container container-large">
				  <div class="sandbox-header">
					  <strong class="sandbox-label">Code Sandbox</strong>
					  <span class="sandbox-controls">
						  <button @click=${this.fallbackToResetValues}>Reset</button>
						  ${when(this.console === "enabled", () => html`<button class="btn btn-muted btn-small" data-click="clear">Clear Console</button>`)}
					</span>
				</div>
				<div class="sandbox-content">
					<div class="sandbox-code">
            ${this.renderCode('html')}
            ${this.renderCode('css')}
            ${this.renderCode('js')}
					</div>
					<div class="${ 'iframe' === this.result ? 'sandbox-result' : 'sandbox-console-result' }">
						<iframe
              class="sandbox-iframe"
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
                <summary>Console</summary>
                ${this.consoleText}
              </details>
            `
        )}
        -->

			</div>
		</div>`
	}

  constructor() {
    super()

    /**
     * @type {Array<SupportedLanguages>}
     */
    this.openLanguages = []

    /**
     * @type {Array<SupportedLanguages>}
     */
    this.languages = []

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

    this.addEventListener('input', this.inputHandler)
    this.addEventListener('keydown', this.keydownHandler)
  }

  connectedCallback () {
    super.connectedCallback()

    setTimeout(() => {
      this.htmlReset = this.htmlTextArea?.value || ""
      this.cssReset = this.cssTextArea?.value || ""
      this.jsReset = this.jsTextArea?.value || ""
    })
  }
}
