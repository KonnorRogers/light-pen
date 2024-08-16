// @ts-check
import { css, html } from "lit";
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { baseStyles } from "../../styles/base-styles.js";
import { theme } from "../../styles/default-theme.styles.js";
import { codeStyles } from "../../styles/code-styles.js";

import {
  PrismHighlight,
  createPrismInstance,
} from "../../../internal/prism-highlight.js";
import { debounce } from "../../../internal/debounce.js";
import { BaseElement } from "../../../internal/base-element.js";
import { elementsToString } from "../../../internal/elements-to-strings.js";
import { dedent } from "../../../internal/dedent.js";
import { LineNumberPlugin } from "../../../internal/line-number-plugin.js";
import { NumberRange } from "../../../internal/number-range.js";
import {
  LineHighlightPlugin,
  LineHighlightWrapPlugin,
} from "../../../internal/line-highlight-plugin.js";

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
  static baseName = "light-code";

  /**
   * @override
   */
  static styles = [
    baseStyles,
    codeStyles,
    theme,
    css`
      :host {
        display: grid;
      }
      [part~="base"] {
        height: 100%;
        position: relative;
        z-index: 0;
        background: hsl(230, 1%, 98%);
        color: hsl(230, 8%, 24%);
        display: grid;
      }

      [part~="pre"] {
        height: 100%;
        display: grid;
        place-items: start;
      }

      [part~="code"] {
        width: 100%;
        height: 100%;
        place-content: start;
        overflow: auto;
      }

      [part~="gutter"] {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--gutter-cell-width, 40px));
        border-inline-end: var(--syntax-gutter-border);
        height: calc(100% - var(--scrollbar-height, 0px));
        max-height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 2;
      }
    `,
  ];

  /**
   * @override
   */
  static properties = {
    disableHighlight: { type: Boolean, attribute: "disable-highlight" },
    preserveWhitespace: { type: Boolean, attribute: "preserve-whitespace" },
    highlightLines: { attribute: "highlight-lines" },
    insertedLines: { attribute: "inserted-lines" },
    deletedLines: { attribute: "deleted-lines" },
    disableLineNumbers: {
      type: Boolean,
      reflect: true,
      attribute: "disable-line-numbers",
    },
    lineNumberStart: { type: Number, attribute: "line-number-start" },
    wrap: { reflect: true, attribute: "wrap" },
    language: {},
    code: {},
    highlighter: { attribute: false, state: true },
    __highlightedCode__: { attribute: false, state: true },
  };

  constructor() {
    super();

    /**
     * The language to highlight for.
     * @type {string}
     */
    this.language = "html";

    /**
     * If disabled, its on you to provide `<pre><code></code></pre>`
     * @type {boolean}
     */
    this.disableHighlight = false;

    /**
     * We will take the code, wrap it in `<pre><code></code></pre>` and run it through
     * PrismJS.
     * If the element has `disableHighlight`, we will not touch their code. Instead they must pass in escapedHTML.
     * @type {string}
     */
    this.code = "";

    /**
     * @internal
     * @type {MutationObserverInit}
     */
    this.__mutationObserverConfig = {
      childList: true,
      subtree: true,
      characterData: true,
    };

    /**
     * @internal
     * @type {() => void}
     */
    this.codeDebounce = debounce(() => this.handleMutation("code"), 20);

    /**
     * @property
     * @type {"soft" | "none"}
     * If `wrap="soft"`, lines will wrap when they reach the edge of their container. If `wrap="none"`, lines will not wrap instead all the user to scroll horizontally to see more code.
     */
    this.wrap = "soft";

    /**
     * @property
     * @type {Boolean}
     * Whether or not to preserve white spaces from templates and attempt to dedent and chomp new lines.
     */
    this.preserveWhitespace = false;

    /**
     * @type {string} - A string of possible lines to highlight. Example: "{1-9, 16, 18}"
     */
    this.highlightLines = "";

    /**
     * @type {string} - A string of lines that are inserted for diffs. Example: "{1-9, 16, 18}"
     */
    this.insertedLines = "";

    /**
     * @type {string} - A string of lines that are deleted for diffs. Example: "{1-9, 16, 18}"
     */
    this.deletedLines = "";

    /**
     * @type {boolean} whether or not to disable line numbers
     */
    this.disableLineNumbers = false;

    /**
     * Where to start counting from indexes. Note, this is only for display purposes in the gutter.
     * @type {number}
     */
    this.lineNumberStart = 1;

    /**
     * Highlighter to use for highlighting code. Default is Prism.
     */
    this.highlighter = createPrismInstance();

    this.__resizeObserver = new ResizeObserver(() =>
      this.__setGutterMeasurements(),
    );

    this.newLineRegex = /\r\n|\r|\n/;
    this.__highlightedCode__ = "";
  }

  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    this.__resizeObserver.observe(this);
  }

  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__resizeObserver.unobserve(this);
  }

  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate(changedProperties) {
    if (
      changedProperties.has("highlighter") ||
      changedProperties.has("language") ||
      changedProperties.has("code")
      // We purposely don't re-highlight on line number changes for performance reasons.
    ) {
      this.__highlightedCode__ = this.highlight(this.code);
    }

    super.willUpdate(changedProperties);
  }

  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  updated(changedProperties) {
    if (
      (changedProperties.has("insertedLines") ||
        changedProperties.has("deletedLines") ||
        changedProperties.has("highlightLines")) &&
      !changedProperties.has("code")
    ) {
      const lines = this.shadowRoot?.querySelectorAll(
        ".light-gutter-cell, .light-line",
      );

      if (lines?.length) {
        const highlightLinesRange = new NumberRange().parse(
          this.highlightLines,
        );
        const insertedLinesRange = new NumberRange().parse(this.insertedLines);
        const deletedLinesRange = new NumberRange().parse(this.deletedLines);

        lines.forEach((el, index) => {
          // We have twice as many lines as line numbers.
          const divisor = index % 2 === 0 ? index : index - 1;
          const lineNumber = divisor / 2 + 1;

          el.classList.toggle(
            "line-highlight",
            highlightLinesRange.includes(lineNumber),
          );
          el.part.toggle(
            "line-highlight",
            highlightLinesRange.includes(lineNumber),
          );

          el.classList.toggle(
            "inserted",
            insertedLinesRange.includes(lineNumber),
          );
          el.part.toggle("inserted", insertedLinesRange.includes(lineNumber));

          el.classList.toggle(
            "deleted",
            deletedLinesRange.includes(lineNumber),
          );
          el.part.toggle("deleted", deletedLinesRange.includes(lineNumber));
        });
      }
    }

    super.updated(changedProperties);
  }

  /**
   * @internal
   * @param {"preview-code" | "code"} variable
   */
  handleMutation(variable) {
    if (variable === "code") {
      this.handleTemplate({ target: this.findSlot("code") });
      return;
    }
  }

  /**
   * @internal
   * @param {string} name
   * @returns {HTMLSlotElement | null | undefined}
   */
  findSlot(name) {
    return this.shadowRoot?.querySelector(`slot[name='${name}']`);
  }

  /**
   * @internal
   * @param {Event | { target?: undefined | null | HTMLSlotElement }} e
   */
  handleTemplate(e) {
    /**
     * @type {HTMLSlotElement | null | undefined}
     */
    // @ts-expect-error
    const slot = e.target;

    if (slot == null) return;

    const name = slot.getAttribute("name");

    if (["preview-code", "code"].includes(name || "") === false) return;

    let elements = slot.assignedElements({ flatten: true });

    let code = this.unescapeTags(elementsToString(...elements));

    if (!this.preserveWhitespace) {
      code = dedent(code.trim());
    }

    if (name === "code") {
      this.code = code;
      return;
    }
  }

  /**
   * Only used to unescape things like `&lt;/script>` from slotted content.
   * @internal
   * @param {string} text
   */
  unescapeTags(text) {
    // Replace usages of `&lt;/script>` with `</script>`. Match against
    // `&lt;/` so that other usages of &lt; aren't replaced.
    return text.replaceAll(/&lt;\/([\w\d\.-_]+)>/g, "</$1>");
  }

  /**
   * @public
   * Override this function to use your own highlight function
   */
  highlight(code = this.code) {
    // const newLineRegex = /\r\n|\r|\n/
    // const CELL_START = `<span class="token light-gutter-cell" part="gutter-cell">`
    // const LINE_START = `</span><span class="token light-line" part="line">`
    // const LINE_END = `</span>`

    // const ESCAPE_STRING_HASH = {
    //   "&": "&amp;",
    //   "<": "&lt;",
    //   ">": "&gt;",
    //   '"': "&quot;",
    //   "'": "&#x27;"
    // }

    // const escapeString = (str) => {
    //   return str
    //     .replaceAll(/&/g, "&amp;")
    //     .replaceAll(/[<>"']/g, (match) => ESCAPE_STRING_HASH[match])
    // }

    // code = code.split(newLineRegex).map((line, index) => {
    //   return CELL_START + (index + 1) + LINE_START + escapeString(line) + LINE_END
    // }).join("\n")

    code = code
      .split(this.newLineRegex)
      .map((str) => {
        if (str === "") {
          return " ";
        }

        return str;
      })
      .join("\n");

    if (!this.highlighter) {
      this.highlighter = createPrismInstance();
    }
    const afterTokenizePlugins = [
      LineNumberPlugin({
        lineNumberStart: this.lineNumberStart,
        disableLineNumbers: this.disableLineNumbers,
      }),
      LineHighlightPlugin({
        insertedLinesRange: new NumberRange().parse(this.insertedLines),
        deletedLinesRange: new NumberRange().parse(this.deletedLines),
        highlightLinesRange: new NumberRange().parse(this.highlightLines),
      }),
    ];

    this.highlighter.hooks.add(
      "wrap",
      /** @type {any} */ (LineHighlightWrapPlugin()),
    );

    code = PrismHighlight(
      code,
      this.highlighter.languages[this.language],
      this.language,
      this.highlighter,
      {
        afterTokenize: afterTokenizePlugins,
      },
    );

    return code;
  }

  /**
   * @internal
   */
  __setGutterMeasurements() {
    const gutterWidth = /** @type {null | undefined | HTMLElement} */ (
      this.shadowRoot?.querySelector("[part~='gutter-cell']")
    )?.offsetWidth;

    if (gutterWidth) {
      this.style.setProperty("--gutter-cell-width", `${gutterWidth}px`);
    }

    const codeEl = this.shadowRoot?.querySelector("[part~='code']");

    if (codeEl) {
      const { offsetHeight, clientHeight } = /** @type {HTMLElement} */ (
        codeEl
      );
      const scrollbarHeight = offsetHeight - clientHeight;
      this.style.setProperty("--scrollbar-height", `${scrollbarHeight}px`);
    }
  }

  /**
   * @override
   */
  render() {
    const language = this.language;

    const finalHTML = html`
      <div part="base">
        ${when(
          !this.disableHighlight,
          () =>
            html` <pre
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
                .innerHTML=${this.__highlightedCode__}
              ></code></pre>`,
          () => html`${unsafeHTML(this.code)}`,
        )}
        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${when(
          this.disableLineNumbers,
          () => html``,
          () => html`<div part="gutter"></div>`,
        )}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;

    setTimeout(async () => {
      await this.updateComplete;
      setTimeout(() => this.__setGutterMeasurements());
    });

    return finalHTML;
  }
}
