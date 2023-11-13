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
import { dedent } from "../internal/dedent.js";
import { LightResizeEvent } from "./events/light-resize-event.js";

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

  render () {
    const language = this.language

    const highlightedCode = unsafeHTML(this.highlightCode({ code: this.value, language }))
    this.syncScroll()

    setTimeout(() => {
      const gutter = this.shadowRoot?.querySelector("[part~='gutter']")

      if (gutter) {
        gutter.innerHTML = this.renderGutters()
      }
    })

    return html`
			<div class="base" part="base">
			  <div part="gutter">
			  </div>
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
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
            @focus=${() => {
              this.syncScroll()
              this.dispatchEvent(new Event("light-focus", { bubbles: true, composed: true }))
            }}
            @blur=${() => {
              this.syncScroll()
              this.dispatchEvent(new Event("light-blur", { bubbles: true, composed: true }))
            }}
            @selectionchange=${/** @param {Event} e */ (e) => {
              this.syncScroll()
              this.getCurrentLineNumber()
              this.dispatchEvent(new Event("light-selectionchange", { bubbles: true, composed: true }))
            }}
            @input=${/** @param {Event} e */ (e) => {
              this.renderGutters()
              this.getCurrentLineNumber()
              this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
              this.dispatchEvent(new Event("light-input", { bubbles: true, composed: true }))
              this.syncScroll()
            }}
            @change=${/** @param {Event} e */ (e) => {
              this.renderGutters()
              this.getCurrentLineNumber()
              this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
              this.dispatchEvent(new Event("light-change", { bubbles: true, composed: true }))
              this.syncScroll()
            }}
            @scroll=${/** @param {Event} e */ (e) => {
              this.getCurrentLineNumber()
              this.syncScroll()
            }}
            .value=${this.value}
          ></textarea>
        </div> <!-- base-editor -->
			</div> <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`
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
    const height = top + bottom;


    /**
     * Fires whenever the editor resizes, usually due to zoom in / out
     */
    this.dispatchEvent(new LightResizeEvent("light-resize", {height, width}));
    this.syncScroll()
    this.renderGutters()
  }

  updated () {
    this.syncScroll()
  }

  /**
   * Syncs the `<pre>` element scroll position to the same as the `<textarea>`
   * @internal
   */
  syncScroll () {
    /**
     * @type {undefined | null | HTMLTextAreaElement}
     */
    const textarea = this.shadowRoot?.querySelector("textarea")

    if (textarea == null) return

    const pre = this.shadowRoot?.querySelector(`pre`)

    if (pre) {
      pre.scrollTop = textarea.scrollTop;
      pre.scrollLeft = textarea.scrollLeft;
    }

    const gutter = this.shadowRoot?.querySelector("[part~='gutter']")

    if (gutter) {
      gutter.scrollTop = textarea.scrollTop;
      gutter.scrollLeft = textarea.scrollLeft;
    }
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
    this.textarea = textarea

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

  disconnectedCallback () {
    this.textareaMutationObserver?.disconnect()
    super.disconnectedCallback()
  }

  /**
   * @ignore
   * @param {KeyboardEvent} evt
   */
  keydownHandler(evt) {
    // this.textarea

    // Let's not trap focus. For now.
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
    code = this.injectNewLine(code)

    code = HighlightJS.highlight(code, {language}).value

    const newLineRegex = /\n(?!$)/
    /** We use this to wrap every line to perform line counting operations. */
    code = code.split(newLineRegex).map((str) => {
      return `<span class="light-line">${str}</span>`
    }).join("\n")

    return code
  }

  injectGutters () {
    const gutter = this.shadowRoot?.querySelector("[part~='gutter']")

    if (gutter) {
      gutter.innerHTML = this.renderGutters()
    }
  }

  getCurrentLineNumber () {
    const textArea = this.textarea

    if (!textArea) return

    const textLines = textArea.value.substr(0, textArea.selectionStart).split("\n");
    const currentLineNumber = textLines.length - 1;
    const currentColumnIndex = textLines[textLines.length-1].length;
    console.log("Current Line Number "+ currentLineNumber+" Current Column Index "+currentColumnIndex );
  }

  /**
    * @param {Element} element
    */
  calculateLineHeight (element) {
    if (!(element instanceof HTMLElement)) {
      return 0
    }

    let lineHeight = parseInt(window.getComputedStyle(element).lineHeight, 10);
    let clone;
    let singleLineHeight;
    let doubleLineHeight;

    if (isNaN(lineHeight)) {
      clone = /** @type {HTMLElement} */ (element.cloneNode());
      clone.innerHTML = '<br>';
      element.appendChild(clone);
      singleLineHeight = clone.offsetHeight;
      clone.innerHTML = '<br><br>';
      doubleLineHeight = clone.offsetHeight;
      element.removeChild(clone);
      lineHeight = doubleLineHeight - singleLineHeight;
    }

    return lineHeight;
  }

  renderGutters () {
    const lines = this.shadowRoot?.querySelector("pre > code")?.children

    if (!lines) return ``

    const lineHeight = this.calculateLineHeight(lines[0])

    return Array.from(lines).map((el, index) => {
      let height = lineHeight

      // @ts-expect-error
      const offsetHeight = /** @type {number} */ (el.offsetHeight)

      if (offsetHeight > lineHeight) {
        height = Math.ceil(offsetHeight / lineHeight) * lineHeight
      }

      if (height) {
        return `<span part="gutter-cell" style="${`height: ${height}px`}">${index}</span>`
      }

      return `<span part="gutter-cell">${index}</span>`
    }).join("")
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
    console.log("TEXT: ", text)
    // Handle final newlines (see article)
    if(text === "" || text[text.length-1] === "\n") { // If the last character is a newline character
      text += " "; // Add a placeholder space character to the final line
    }

    return text
  }
}
