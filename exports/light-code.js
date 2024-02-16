// @ts-check
import { html } from "lit";
import { baseStyles } from "./base-styles.js";

import { theme } from './default-theme.styles.js'
import { PrismHighlight, prism } from '../internal/prism-highlight.js';

import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { stringMap } from "../internal/string-map.js";
import { debounce } from "../internal/debounce.js";
import { BaseElement } from "../internal/base-element.js";
import { elementsToString } from "../internal/elements-to-strings.js";
import { dedent } from "../internal/dedent.js";
import { codeStyles } from "./code-styles.js";
import { LineNumberPlugin } from "../internal/line-number-plugin.js";

/**
 * LightCode is a minimal wrapper around Prism for displaying code highlighting
 *
 * @customElement
 * @tagname light-code
 *
 * @csspart base - The base wrapping element
 * @csspart pre - The <pre> element wrapping the source code
 * @csspart code - The <code>  element wrapping the source code

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
    theme
  ]

  /**
   * @override
   */
  static properties = {
    summary: {},
    disableHighlight: { type: Boolean, attribute: "disable-highlight" },
    preserveWhitespace: { type: Boolean, attribute: "preserveWhitespace" },
    highlightLines: { attribute: "highlight-lines" },
    addedLines: { attribute: "added-lines" },
    removedLines: { attribute: "removed-lines" },
    lineNumbers: { type: Boolean, attribute: "line-numbers" },
    wrap: { reflect: true, attribute: "wrap" },
    language: {},
    code: {},
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
     * @type {"soft" | "hard"}
     * If `wrap="soft"`, lines will wrap when they reach the edge of their container. If `wrap="none"`, lines will not wrap instead all the user to scroll horizontally to see more code.
     */
    this.wrap = "soft"

    /**
     * @property
     * @type {Boolean}
     * Whether or not to preserve white spaces from templates and attempt to dedent and chomp new lines.
     */
    this.preserveWhitespace = false
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
   * @internal
   * @param {string} text
   */
  escapeCharacters(text) {
    return text
  }

  /**
   * Only used to unescape things like `&lt;/script>` from slotted content.
   * @internal
   * @param {string} text
   */
  unescapeTags (text) {
    // Replace usages of `&lt;/script>` with `</script>`. Match against
    // `&lt;/` so that other usages of &lt; aren't replaced.
    // return text.replace(/&lt;\//g, '</');

    return text.replaceAll(/&lt;\/([\w\d\.-_]+)>/g, "</$1>")
    // return text
  }

  /**
   * @public
   * Override this function to use your own highlighter
   */
  highlight (code = this.code) {
    code = PrismHighlight(code, prism.languages[this.language], this.language, {
      afterTokenize: [
        LineNumberPlugin(),
        // (env) => {
        //   const currentToken = env.tokens[this.currentLineNumber]
        //   if (!currentToken) return
        //
        //   if (currentToken instanceof Token) {
        //     currentToken.type = currentToken.type + " is-active"
        //   }
        // }
      ]
    })
    return code
  }

  /**
   * @override
   */
  render () {
    const language = this.language

    const finalHTML = html`
      <div part=${stringMap({
          "base": true,
        })}>
          ${when(!this.disableHighlight,
            () => html`
					    <pre
                id="pre-${language}"
                data-code-lang=${language}
                aria-hidden="true"
                part="pre pre-${language}"
                tabindex="0"
                aria-labelledby="source-code-label"
                class="language-${language}"
                role="region"
              ><code
                  part="code code-${language}"
                  class="language-${language}"
                >${unsafeHTML(this.highlight(this.code))}</code></pre>`,
            () => html`${unsafeHTML(this.code)}`
          )}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `

    return finalHTML
  }
}
