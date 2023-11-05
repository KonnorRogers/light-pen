import { html } from "lit";
import HighlightJS from 'highlight.js/lib/core';
import JavaScript from 'highlight.js/lib/languages/javascript';
import HTML from 'highlight.js/lib/languages/xml';
import CSS from 'highlight.js/lib/languages/css';
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { ref } from "lit/directives/ref.js";

import { BaseElement } from "../internal/base-element.js";
import { baseStyles } from "./base-styles.js";
import { styles } from "./light-editor.styles.js";
import { theme } from "./default-theme.styles.js";
import { LightResizeEvent } from "./events/light-resize-event.js"
import { dedent } from "../internal/dedent.js";

HighlightJS.registerLanguage('javascript', JavaScript);
HighlightJS.registerLanguage('xml', HTML);
HighlightJS.registerLanguage('css', CSS);

/**
 * A bare bones plain text editor with syntax highlighting.
 * @customElement
 * @tagname light-editor
 *
 * @event {Event} light-change - Re-emits the textarea's "change" event
 * @event {Event} light-selectionchange - Re-emits the textarea's "selectionchange" event
 * @event {Event} light-input - Re-emits the textarea's "input" event
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
    language: {reflect: true},
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

  /**
   * @ignore
   * @param {ResizeObserverEntry[]} entries
   */
  handleTextAreaResize (entries) {
    const { target } = entries[0]
    const {
      left, right,
      top, bottom
    } = entries[0].contentRect;
    const width = left + right
    const height = top + bottom

    // @ts-expect-error
    target.parentElement.style.setProperty("--textarea-height", `${height}px`)


    /**
     * Fires whenever the editor resizes
     */
    this.dispatchEvent(new LightResizeEvent("light-resize", {height, width}))
    // One day we'll allow the textarea to resize the width.
    // target.parentElement.style.setProperty("--textarea-width", `${width}px`)
  }

  render () {
    const language = this.language

    const highlightedCode = this.value ? unsafeHTML(this.highlightCode({ code: this.value, language })) : ""

    return html`
			<div class="base" part="base">
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
          data-code-lang=${language}
          part="textarea textarea-${language}"
          spellcheck="false"
          autocorrect="off"
          autocapitalize="off"
          translate="no"
          ${ref(this.textareaChanged)}
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
          .value=${this.value}
        ></textarea>
			</div>

      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`
  }

  /**
   * @ignore
   * @param {Element | undefined} element
   */
  textareaChanged (element) {
    if (!(element instanceof HTMLTextAreaElement)) {
      return
    }

    const textarea = element

    this.textareaResizeObserver = new ResizeObserver((entries) => this.handleTextAreaResize(entries))

    this.textareaResizeObserver.observe(textarea)

    this.textareaMutationObserver = new MutationObserver((mutationRecords) => {
      // We actually don't care about what the mutation is, just update and move on.
      // for (const mutation of mutationRecords) {
      // }
      this.value = textarea.value
    })

    this.textareaMutationObserver.observe(textarea, {
      characterData: true,
      subtree: true
    })
  }

  /**
   * @ignore
   * @param {Event} e
   */
  handleSlotChangeEvent (e) {
    // @TODO: Attach mutations observers to update value.
    /**
     * @type {HTMLSlotElement}
     */
    // @ts-expect-error
    const slot = e.target

    const templates = slot.assignedElements({flatten: true})

    const code = dedent(this.unescapeCharacters(templates.map((template) => template.innerHTML).join("\n")))

    if (code.trim()) {
      this.value = code
      this.dispatchEvent(new Event("light-input", { bubbles: true, composed: true }))
      this.dispatchEvent(new Event("light-change", { bubbles: true, composed: true }))
    }
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

  disconnectedCallback () {
    this.textareaResizeObserver?.disconnect()
    this.textareaMutationObserver?.disconnect()
    super.disconnectedCallback()
  }

  /**
   * @ignore
   * @param {KeyboardEvent} evt
   */
  keydownHandler(evt) {
    /**
     * @type {HTMLTextAreaElement}
     */
    // @ts-expect-error
    const target = evt.target

    // Let's not focus trap. For now.
    // if ('Tab' === evt.key) {
    //   evt.preventDefault()
    //   target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
    //   this.value = target.value
    //   return
    // }
  }

  /**
   * @ignore
   * Override this to use a highlighter of your choice.
   * @param {{code: string, language: string}} options
   */
  highlightCode (options) {
    let { code, language } = options

    code = this.unescapeCharacters(code)
    // Dedent is nice, but we don't want to do it on user typed data.
    // code = dedent(code)
    code = this.injectNewLine(code)

    return HighlightJS.highlight(code, {language}).value
  }

  /**
   * @ignore
   * @param {string} text
   */
  unescapeCharacters (text) {
    // Update code
    return text.replaceAll("&lt;/script>", "</script>")
  }

  /**
   * @ignore
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