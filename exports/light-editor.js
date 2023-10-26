import { html } from "lit";
import { BaseElement } from "../internal/base-element.js";
import { baseStyles } from "./base-styles.js";
import { styles } from "./light-editor.styles.js";
import { theme } from "./default-theme.styles.js";
import { live } from "lit/directives/live.js";

import HighlightJS from 'highlight.js/lib/core';
import JavaScript from 'highlight.js/lib/languages/javascript';
import HTML from 'highlight.js/lib/languages/xml';
import CSS from 'highlight.js/lib/languages/css';
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { dedent } from "../internal/dedent.js";
import { createRef, ref } from "lit/directives/ref.js";

HighlightJS.registerLanguage('javascript', JavaScript);
HighlightJS.registerLanguage('xml', HTML);
HighlightJS.registerLanguage('css', CSS);

/**
 * A bare bones plain text editor with syntax highlighting.
 * @customElement
 * @tagname light-editor
 *
 */
export default class LightEditor extends BaseElement {
  static baseName = "light-editor"

  static styles = [
    baseStyles,
    styles,
    theme,
  ]

  // One day.
  // static formAssociated = true

  static properties = {
    label: {},
    value: {},
    language: {reflect: true}
  }

  constructor () {
    super()

    /**
     * @type {string}
     */
    this.language = 'xml'

    /**
     * @type {string}
     */
    this.value = ''

    /**
     * @type {null | HTMLTextAreaElement}
     */
    this.textarea = null
  }


  render () {
    const language = this.language

    const highlightedCode = this.value ? unsafeHTML(this.highlightCode({ code: this.value, language })) : ""

    return html`
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
          >${highlightedCode}</code></pre>
        <!-- IMPORTANT! There must be no white-space above. -->
				<textarea
          id="textarea-${language}"
          ${ref(this.textareaChanged)}
          data-code-lang=${language}
          part="textarea textarea-${language}"
          spellcheck="false"
          autocorrect="off"
          autocapitalize="off"
          translate="no"
          @keydown=${this.keydownHandler}
          @selectionchange=${/** @param {Event} e */ (e) => {
            this.dispatchEvent(new Event("light-selectionchange", { bubbles: true, composed: true }))
          }}
          @input=${/** @param {Event} e */ (e) => {
            this.syncScroll(e)
            this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
            this.dispatchEvent(new Event("light-input", { bubbles: true, composed: true }))
          }}
          @change=${/** @param {Event} e */ (e) => {
            this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
            this.dispatchEvent(new Event("light-change", { bubbles: true, composed: true }))
          }}
          @scroll=${this.syncScroll}
          value=${this.value}
        >${this.value}</textarea>
			</div>
		`
  }

  /**
   * @param {Element | undefined} element
   */
  textareaChanged (element) {
    if (!(element instanceof HTMLTextAreaElement)) {
      return
    }

    const textarea = element
    const self = this

    this.textareaObserver = new MutationObserver((mutationRecords) => {
      // for (const mutation of mutationRecords) {
      // }
      this.value = textarea.value
    })

    this.textareaObserver.observe(textarea, {
      characterData: true,
      subtree: true
    })
  }

  /**
   * @param {Event} e
   */
  handleSlotChangeEvent (e) {
    const target = /** @type {HTMLSlotElement} */ (e.target)

    this.currentWatchedElements = target.assignedElements({ flatten: true })
    // @TODO: Attach mutations observers to update value.
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
      target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
      this.value = target.value
      return
    }
  }

  /**
   * Override this to use a highlighter of your choice.
   * @param {{code: string, language: string}} options
   */
  highlightCode (options) {
    let { code, language } = options

    code = this.unescapeCharacters(code)
    // Dedent is nice, but we don't want to do it on user type data.
    // code = dedent(code)
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
