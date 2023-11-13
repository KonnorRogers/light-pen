import { html, render } from "lit";
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
import { repeat } from "lit/directives/repeat.js";

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

    return html`
			<div class="base" part="base">
        <!-- Super important to not have white space here due to how white space is handled -->
			  <div part="gutter"></div>
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
              this.setCurrentLineHighlight()
              this.dispatchEvent(new Event("light-focus", { bubbles: true, composed: true }))
            }}

            @blur=${() => {
              this.syncScroll()
              this.setCurrentLineHighlight()
              this.dispatchEvent(new Event("light-blur", { bubbles: true, composed: true }))
            }}
            @selectionchange=${/** @param {Event} e */ (e) => {
              this.syncScroll()
              this.setCurrentLineHighlight()
              this.dispatchEvent(new Event("light-selectionchange", { bubbles: true, composed: true }))
            }}
            @input=${/** @param {Event} e */ (e) => {
              this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
              this.injectGutterCells()
              this.setCurrentLineHighlight()
              this.dispatchEvent(new Event("light-input", { bubbles: true, composed: true }))
              this.syncScroll()
            }}
            @change=${/** @param {Event} e */ (e) => {
              this.value = /** @type {HTMLTextAreaElement} */ (e.currentTarget).value
              this.injectGutterCells()
              this.setCurrentLineHighlight()
              this.dispatchEvent(new Event("light-change", { bubbles: true, composed: true }))
              this.syncScroll()
            }}
            @scroll=${/** @param {Event} e */ (e) => {
              this.setCurrentLineHighlight()
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
    this.injectGutterCells()
  }

  /**
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  updated (changedProperties) {
    super.updated(changedProperties)

    this.syncScroll()
    this.injectGutterCells()
    this.setCurrentLineHighlight()
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
    this.setCurrentLineHighlight()
    // this.textarea

    // Let's not trap focus. For now.
    // if ('Tab' === evt.key) {
    //   evt.preventDefault()
    //   target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
    //   this.value = target.value
    //   return
    // }
  }

  setCurrentLineHighlight () {
    const code = this.shadowRoot?.querySelector("code")

    if (!code) return

    const currentLineNumber = this.getCurrentLineNumber()

    if (this.currentLineNumber === currentLineNumber) return

    const prevLineNumber = this.currentLineNumber

    // @ts-expect-error
    this.currentLineNumber = currentLineNumber

    if (currentLineNumber != null && currentLineNumber >= 0) {
      const el = code.children[currentLineNumber]

      if (el) {
        code.children[prevLineNumber]?.classList?.remove("is-active")
        this.currentEl = el
        el.classList.add("is-active")
      }
    }
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
    code = code.split(newLineRegex).map((str, index) => {
      let isActive = false

      if (index === this.currentLineNumber) {
        isActive = true
      }

      // Inset a blank string if it's empty so that it has a height and can get highlighted.
      return `<span class="light-line ${isActive ? "is-active" : ""}">${str || " "}</span>`
    }).join("\n")

    return code
  }

  injectGutterCells () {
    const gutter = this.shadowRoot?.querySelector("[part~='gutter']")

    if (gutter) {
      render(this.renderGutterCells(), /** @type {HTMLElement} */ (gutter))
    }
  }

  getCurrentLineNumber () {
    const textArea = this.textarea

    if (!textArea) return

    const textLines = textArea.value.substr(0, textArea.selectionStart).split("\n");
    const currentLineNumber = textLines.length - 1;
    // const currentColumnIndex = textLines[textLines.length-1].length;
    // console.log("Current Line Number "+ currentLineNumber+" Current Column Index "+currentColumnIndex );

    return currentLineNumber
  }

  renderGutterCells () {
    const lines = this.shadowRoot?.querySelector("pre > code")?.children

    if (!lines) return ``

    const ary = Array.from(lines)

    return repeat(ary, (el, index) => {
      // @ts-expect-error
      const height = /** @type {number} */ (el.offsetHeight)

      return index + height
    }, (el ,index) => {
      const height = /** @type {number} */ (el.getBoundingClientRect().height)

      const isCurrent = index === this.currentLineNumber

      const parts = `gutter-cell ${isCurrent ? "gutter-cell--active" : ""}`
      if (height) {
        return html`<span part=${parts} style="${`height: ${height}px`}">${index}</span>`
      }

      return html`<span part=${parts}>${index}</span>`
    })
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
    if(text === "" || text[text.length-1] === "\n") { // If the last character is a newline character
      text += " "; // Add a placeholder space character to the final line
    }

    return text
  }
}
