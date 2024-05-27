// @ts-check
import { css, html } from "lit";
import { baseStyles } from "./base-styles.js";

import { theme } from './default-theme.styles.js'
import { PrismHighlight, prism } from '../internal/prism-highlight.js';

import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { debounce } from "../internal/debounce.js";
import { BaseElement } from "../internal/base-element.js";
import { elementsToString } from "../internal/elements-to-strings.js";
import { dedent } from "../internal/dedent.js";
import { codeStyles } from "./code-styles.js";
import { LineNumberPlugin } from "../internal/line-number-plugin.js";
import { NumberRange } from "../internal/number-range.js";
import { LineHighlightPlugin, LineHighlightWrapPlugin } from "../internal/line-highlight-plugin.js";

/**
 * LightCode is a minimal wrapper around Prism for displaying code highlighting
 *
 * @customElement
 * @tagname light-code
 *
 * @csspart base - The base wrapping element
 * @csspart pre - The <pre> element wrapping the source code
 * @csspart code - The <code>  element wrapping the source code
 * @csspart gutter - The gutter for line numbers. This is only for the overlay for when the lines dont correspond to size of the code.
 * @csspart gutter-cell - The element that holds line numbers.

 * @slot default - The code to use for highlighting
 */
export default class LightCode extends BaseElement {
  /**
   * @override
   */
  static baseName = "light-code"

  /**
   * @override
   */
  static styles = [
    baseStyles,
    codeStyles,
    theme,
    css`
      [part~="base"] {
        height: 100%;
        position: relative;
	      background: hsl(230, 1%, 98%);
	      color: hsl(230, 8%, 24%);
      }

      [part~="pre"] {
        height: 100%;
      }

      [part~="code"] {
        overflow: auto;
      }

      [part~="gutter"] {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--gutter-cell-width, 40px) + 1px);
        border-inline-end: 1px solid darkgray;
        height: 100%;
        max-height: 100%;
        overflow: hidden;
        pointer-events: none;
      }
    `
  ]

  /**
   * @override
   */
  static properties = {
    summary: {},
    disableHighlight: { type: Boolean, attribute: "disable-highlight" },
    preserveWhitespace: { type: Boolean, attribute: "preserveWhitespace" },
    highlightLines: { attribute: "highlight-lines" },
    insertedLines: { attribute: "inserted-lines" },
    deletedLines: { attribute: "deleted-lines" },
    disableLineNumbers: { type: Boolean, reflect: true, attribute: "disable-line-numbers" },
    lineNumberStart: { type: Number, attribute: "line-number-start" },
    wrap: { reflect: true, attribute: "wrap" },
    language: {},
    code: {},
    highlighter: {attribute: false, state: true},
  }

  constructor () {
    super()

    /**
     * The language to highlight for.
     * @type {string}
     */
    this.language = "html"

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
     * @internal
     * @type {MutationObserverInit}
     */
    this.__mutationObserverConfig = {childList: true, subtree: true, characterData: true }

    /**
     * @internal
     * @type {() => void}
     */
    this.codeDebounce = debounce(() => this.handleMutation("code"), 20)

    /**
     * @property
     * @type {"soft" | "none"}
     * If `wrap="soft"`, lines will wrap when they reach the edge of their container. If `wrap="none"`, lines will not wrap instead all the user to scroll horizontally to see more code.
     */
    this.wrap = "soft"

    /**
     * @property
     * @type {Boolean}
     * Whether or not to preserve white spaces from templates and attempt to dedent and chomp new lines.
     */
    this.preserveWhitespace = false

    /**
     * @type {string} - A string of possible lines to highlight. Example: "{1-9, 16, 18}"
     */
    this.highlightLines = ""

    /**
     * @type {string} - A string of lines that are inserted for diffs. Example: "{1-9, 16, 18}"
     */
    this.insertedLines = ""

    /**
     * @type {string} - A string of lines that are deleted for diffs. Example: "{1-9, 16, 18}"
     */
    this.deletedLines = ""

    /**
     * @type {boolean} whether or not to disable line numbers
     */
    this.disableLineNumbers = false

    /**
     * Where to start counting from indexes. Note, this is only for display purposes in the gutter.
     * @type {number}
     */
    this.lineNumberStart = 1

    /**
     * Highlighter to use for highlighting code. Default is Prism.
     */
    this.highlighter = prism

    this.__resizeObserver = new ResizeObserver(() => this.__setGutterWidth())
  }

  /**
   * @override
   */
  connectedCallback () {
    super.connectedCallback()
    this.__resizeObserver.observe(this)
  }

  /**
   * @override
   */
  disconnectedCallback () {
    super.disconnectedCallback()
    this.__resizeObserver.unobserve(this)
  }

  /**
   * @internal
   * @param {"preview-code" | "code"} variable
   */
  handleMutation (variable) {
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

    let elements = slot.assignedElements({flatten: true})

		let code = this.unescapeTags(elementsToString(...elements))

		if (!this.preserveWhitespace) {
    	code = dedent(code.trim())
    }

    if (name === "code") {
      this.code = code
      return
    }
  }

  /**
   * Only used to unescape things like `&lt;/script>` from slotted content.
   * @internal
   * @param {string} text
   */
  unescapeTags (text) {
    // Replace usages of `&lt;/script>` with `</script>`. Match against
    // `&lt;/` so that other usages of &lt; aren't replaced.
    return text.replaceAll(/&lt;\/([\w\d\.-_]+)>/g, "</$1>")
  }

  /**
   * @public
   * Override this function to use your own highlight function
   */
  highlight (code = this.code) {
    const afterTokenizePlugins = [
      LineNumberPlugin({
        lineNumberStart: this.lineNumberStart,
        disableLineNumbers: this.disableLineNumbers
      }),
      LineHighlightPlugin({
        insertedLinesRange: new NumberRange().parse(this.insertedLines),
        deletedLinesRange: new NumberRange().parse(this.deletedLines),
        highlightLinesRange: new NumberRange().parse(this.highlightLines)
      })
    ]

    // @ts-expect-error
    this.highlighter.hooks.add("wrap", LineHighlightWrapPlugin())

    code = PrismHighlight(code, this.highlighter.languages[this.language], this.language, {
      afterTokenize: afterTokenizePlugins,
    })

    return code
  }

  /**
   * @internal
   */
  __setGutterWidth () {
    // @ts-expect-error
    const gutterWidth = this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth

    if (gutterWidth) {
      this.style.setProperty("--gutter-cell-width", `${gutterWidth}px`)
    }
  }

  /**
   * @override
   */
  render () {
    const language = this.language

    const finalHTML = html`
      <div part="base">
        ${when(!this.disableHighlight,
          () => html`
            <pre
              id="pre-${language}"
              data-code-lang=${language}
              aria-hidden="true"
              part="pre pre-${language}"
              class="diff-highlight language-${language}"
            ><code
                tabindex="0"
                aria-labelledby="source-code-label"
                role="region"
                part="code code-${language}"
                class="language-${language}"
              >${unsafeHTML(this.highlight(this.code))}</code></pre>`,
          () => html`${unsafeHTML(this.code)}`
        )}

        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${when(this.disableLineNumbers,
          () => html``,
          () => html`<div part="gutter"></div>`
        )}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `

    setTimeout(async () => {
      await this.updateComplete
      setTimeout(() => this.__setGutterWidth())
    })

    return finalHTML
  }
}

