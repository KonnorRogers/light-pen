import { html } from "lit";
import { BaseElement } from "../internal/base-element.js";
import { baseStyles } from "./base-styles.js";
import { theme } from "./default-theme.styles.js";
import { live } from "lit/directives/live.js";

import HighlightJS from 'highlight.js/lib/core';
import JavaScript from 'highlight.js/lib/languages/javascript';
import HTML from 'highlight.js/lib/languages/xml';
import CSS from 'highlight.js/lib/languages/css';

HighlightJS.registerLanguage('javascript', JavaScript);
HighlightJS.registerLanguage('xml', HTML);
HighlightJS.registerLanguage('css', CSS);

export default class LightEditor extends BaseElement {
  static styles = [
    baseStyles,
    theme
  ]

  static properties = {
    label: {}
  }

  constructor () {
    super()

    /**
     * @type {string} The label to display above the editor.
     */
    this.label = ''

    /**
     * @type {string}
     */
    this.language = 'html'

    /**
     * @type {string}
     */
    this.value = ''
  }


  render () {
    const language = this.language
    return html`
				<label for="editor" class="visually-hidden">
          <slot name="label">${this.label}</slot>
				</label>
				<div class="editor" part="editor">
          <!-- This is where the fancy syntax highlighting comes in -->
					<pre
            id="pre-${language}"
            data-code-lang=${language}
            aria-hidden="true"
            part="pre pre-${language}"
          ><code
              part="code code-${language}"
              class="language-${language}"
            >${this.value}</code></pre>
          <!-- IMPORTANT! There must be no white-space above. -->
					<textarea
            ${
              // @ts-expect-error
              ref(this[`${language}TextAreaChanged`])
            }
            id="textarea-${language}"
            data-code-lang=${language}
            part="textarea textarea-${language}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            translate="no"
            @keydown=${this.keydownHandler}
            @input=${this.syncScroll}
            @scroll=${this.syncScroll}
            value=${live(this.value)}
          ></textarea>
				</div>
		`
  }

  /**
   * @internal
   * @param {Event} e
   */
  syncScroll (e) {
    /**
     * @type {null | HTMLTextAreaElement}
     */
    // @ts-expect-error
    const textarea = e.target

    if (textarea == null) return

    const pre = this.shadowRoot?.querySelector(`pre`)

    if (pre == null) return

    pre.scrollTop = textarea.scrollTop;
    pre.scrollLeft = textarea.scrollLeft;
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

    if ('Tab' === evt.key) {
      evt.preventDefault()
      return target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
    }
  }

  /**
   * Override this to use a highlighter of your choice.
   * @param {{code: string, language: string}} options
   */
  highlightCode (options) {
    let { code, language } = options

    // const highlightJsLanguage = /** @type {typeof LightPen} */ (this.constructor).languageMap[language]

    code = this.unescapeCharacters(code)
    code = this.injectNewLine(code)

    return HighlightJS.highlight(code, {language}).value
  }

  /**
   * @param {string} text
   */
  unescapeCharacters (text) {
    // Update code
    return text.replaceAll("&lt;/script>", "</script>")
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

}

