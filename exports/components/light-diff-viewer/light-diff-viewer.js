import { html } from "lit";

import { BaseElement } from "../../../internal/base-element.js";
import { baseStyles } from "../../styles/base-styles.js";
import { componentStyles } from "./light-diff-viewer.styles.js";
import LightCode from "../light-code/light-code.js";

import { elementsToString } from "../../../internal/elements-to-strings.js";
import { dedent } from "../../../internal/dedent.js";
import {
  createPrismInstance,
  PrismEnv,
  PrismHighlight,
} from "../../../internal/prism-highlight.js";
import { replaceLast } from "../../../internal/replace-functions.js";
import { diffChars, diffLines, diffWords, diffWordsWithSpace } from "diff";
import { computeLineInformation, DiffType } from "./compute-line-info.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LineNumberPlugin } from "../../../internal/line-number-plugin.js";
import {
  LineHighlightPlugin,
  LineHighlightWrapPlugin,
} from "../../../internal/line-highlight-plugin.js";
import { Token } from "prism-esm";
import { theme } from "../../styles/default-theme.styles.js";
import { codeStyles } from "../../styles/code-styles.js";
import { NumberRange } from "../../../internal/number-range.js";

// import {
//   diffCss,
//   diffJson,
//   diffChars,
//   merge,
//   diffLines,
// diffWords,
//   applyPatch,
//   diffArrays,
//   parsePatch,
//   applyPatches,
//   createPatch,
//   canonicalize,
//   reversePatch,
//   diffSentences,
//   structuredPatch,
//   createTwoFilesPatch,
//   diffWordsWithSpace,
//   diffTrimmedLines,
// } from 'diff';
// import { getDiffableHTML } from '@open-wc/semantic-dom-diff/get-diffable-html.js';

/**
 * @typedef {object} LineDiffData
 * @property {number} length - length of the diff.
 * @property {import("./compute-line-info.js").DiffTypeValues} type - The type of diff
 * @property {number} offset - The offset along the X axis where the diff starts.
 */

/**
 * @customElement
 * @tagname light-diff-viewer
 * @summary Short summary of the component's intended use.
 * @documentation https://konnorrogers.github.io/light-pen/components/light-diff-viewer
 * @status experimental
 * @since 4.0
 *
 * @event light-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class LightDiffViewer extends BaseElement {
  /**
   * @override
   */
  static baseName = "light-diff-viewer";

  /**
   * @override
   */
  static dependencies = {
    "light-code": LightCode,
  };

  /**
   * @override
   */
  static styles = [
    baseStyles,
    // codeStyles,
    theme,
    componentStyles,
  ];

  /**
   * @override
   */
  static properties = /** @type {const} */ ({
    view: {},
    new: {},
    old: {},

    // <light-code> properties
    disableHighlight: { type: Boolean, attribute: "disable-highlight" },
    preserveWhitespace: { type: Boolean, attribute: "preserve-whitespace" },
    emptyLines: { attribute: "highlight-lines" },
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
  });

  constructor() {
    super();

    this.new = `
      const y = "Hello Moto"
      console.log(y)
    `;

    this.old = `
      const y = "Hello World"
    `;

    /**
     * Side by side is for a typical GitHub like view. "3-way" will show the "old" on the left, the "merged" diff in the middle, and the "new" on the right.
     * @type {"side-by-side" | "3-way"}
     */
    this.view = "side-by-side";

    // Light Code properties to forward

    /**
     * The language to highlight for.
     * Supported languages out of the box are "html", "javascript", "markdown", "css", "js", "ts"
     * For more on how to add additional languages, check out the docs.
     * @type {string}
     */
    this.language = "html";

    /**
     * @type {Boolean}
     * Whether or not to preserve white spaces from templates and attempt to dedent and chomp new lines.
     */
    this.preserveWhitespace = false;

    /**
     * If disabled, its on you to provide `<pre><code></code></pre>`
     * @type {boolean}
     */
    this.disableHighlight = false;

    /**
     * @type {string} - A string of possible lines to highlight. Example: "{1-9, 16, 18}"
     */
    this.emptyLines = "";

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
     * Where to start counting indexes in the gutter. Note, this is purely for display purposes.
     * @type {number}
     */
    this.lineNumberStart = 1;

    /**
     * We will take the code, wrap it in `<pre><code></code></pre>` and run it through
     * Prism.js.
     * If the element has `disableHighlight`, we will not touch their code. Instead they must pass in escapedHTML.
     * @type {string}
     */
    this.code = "";

    /**
     * Points to an instance of Prism from "prism-esm" for adjusting highlighting, adding plugins, etc.
     * @type {ReturnType<typeof createPrismInstance>}
     */
    this.highlighter = createPrismInstance();

    /**
     * @property
     * @type {"soft" | "hard"}
     * If `wrap="soft"`, lines will wrap when they reach the edge of their container. If `wrap="none"`, lines will not wrap instead all the user to scroll horizontally to see more code.
     */
    this.wrap = "hard";

    /**
     * Whether or not to transform `&lt;/script>` into `<script>`
     * If true, will run transform. If false, will leave the code as is.
     *
     * @type {"all" | "last" | "none"}
     */
    this.unescapeBehavior = "last";

    this.newLineRegex = /\r\n|\r|\n/;
  }

  data() {
    return {
      /**
       * @type {Set<number>}
       */
      insertedLines: new Set(),

      /**
       * @type {Set<number>}
       */
      deletedLines: new Set(),

      /**
       * @type {Set<number>}
       */
      emptyLines: new Set(),

      /**
       * @type {Array<string>}
       */
      value: [],
    };
  }

  /**
   * @override
   */
  render() {
    const computedLines = computeLineInformation(this.old, this.new);

    return html`
      <div part="base">
        <pre
          part="pre pre-${this.language}"
          class="diff-highlight language-${this.language}"
          style="overflow: auto; max-width: 100%; min-width: 100%; overflow-wrap: break-word; word-break: break-word; white-space: pre-wrap;"
        ><code
            part="code code-${this.language}"
            class="language-${this.language}"
	    style="white-space: inherit;"><table><tbody>${this.renderDiff(
          computedLines,
        )}</tbody></table></code></pre>
      </div>
    `;
  }

  /**
   * @param {ReturnType<typeof computeLineInformation>} data
   */
  renderDiff(data) {
    /**
     * @type {import("lit").TemplateResult[]}
     */
    const finalHTML = [];

    this.transformLineInformation(data.lineInformation);
    this.syntaxHighlight(data.lineInformation);

    data.lineInformation.forEach((lineInfo, index) => {
      finalHTML.push(html`
        <tr>
          ${this.renderLine(lineInfo.left)} ${this.renderLine(lineInfo.right)}
        </tr>
      `);
    });

    return finalHTML;
  }

  /**
   * @param {import("./compute-line-info.js").DiffInformation} diffInfo
   */
  renderLine(diffInfo) {
    return html`${unsafeHTML(diffInfo.value)}`;
  }

  /**
   * @param {import("./compute-line-info.js").DiffInformation} obj
   */
  renderWord(obj) {
    return obj.value;
  }

  /**
   * @param {import("./compute-line-info.js").DiffInformation} diffInfo - diff info for right or light
   * @param {import("./compute-line-info.js").DiffInformation} diffInfoLine - diffInfo.value for right / left
   * @param {number} index
   * @returns {LineDiffData}
   */
  toWordData(diffInfo, diffInfoLine, index) {
    return {
      length: /** @type {string} */ (diffInfoLine.value).length,
      type: diffInfoLine.type || /** @type {"empty"} */ ("empty"),
      offset:
        /** @type {import("./compute-line-info.js").DiffInformation[]} */ (
          diffInfo.value
        )
          .slice(0, index)
          .map((obj) => obj.value)
          .join("").length,
      y: diffInfo.lineNumber,
      value: diffInfoLine.value,
    };
  }

  lineNumberPlugin() {
    let lineCount = 0;

    return LineNumberPlugin({
      lineNumberStart: this.lineNumberStart,
      disableLineNumbers: this.disableLineNumbers,
      callback: (ary, index, tokens) => {
        // This token won't get used, but makes it easy to render things based on array index.
        const row = new Token("row", []);
        tokens.push(row);

        if (ary.length <= 0) {
          if (!this.disableLineNumbers) {
            // no line numbers for empty values.
            row.content.push(new Token("light-gutter-cell", ""));
          }

          row.content.push(new Token("light-line", ""));
          return;
        }

        const tokensIndex = lineCount++;

        if (!this.disableLineNumbers) {
          const token = new Token(
            "light-gutter-cell",
            (tokensIndex + this.lineNumberStart).toString(),
          );
          // Add line numbers so we can easily add diffs.
          token.lineNumber = tokensIndex + this.lineNumberStart;
          row.content.push(token);
        }

        const token = new Token("light-line", ary);
        // Add line numbers so we can easily add diffs.
        token.lineNumber = tokensIndex + this.lineNumberStart;

        row.content.push(token);
      },
    });
  }

  /**
   * @param {import("./compute-line-info.js").LineInformation[]} lineInfo
   */
  syntaxHighlight(lineInfo) {
    const leftObj = {
      value: [],
      insertedLines: new Set(),
      deletedLines: new Set(),
    };

    const rightObj = {
      value: [],
      insertedLines: new Set(),
      deletedLines: new Set(),
    };

    lineInfo.forEach((line) => {
      const leftLineInfo = line.left.value;
      if (line.left.type === "removed") {
        leftObj.deletedLines.add(line.left.lineNumber);
      }
      leftObj.value.push(leftLineInfo);

      const rightLineInfo = line.right.value;

      if (line.right.type === "added") {
        rightObj.insertedLines.add(line.right.lineNumber);
      }
      rightObj.value.push(rightLineInfo);
    });

    if (!this.highlighter) {
      this.highlighter = createPrismInstance();
    }

    this.highlighter.hooks.add(
      "wrap",
      /** @type {any} */ (
        function (env) {
          if (env.type.includes("light-line")) {
            env.tag = "td";
          }

          if (env.type.includes("light-gutter-cell")) {
            env.tag = "td";
          }
        }
      ),
    );
    this.highlighter.hooks.add(
      "wrap",
      /** @type {any} */ (LineHighlightWrapPlugin()),
    );

    const leftEnv = PrismEnv(
      leftObj.value.join("\n"),
      this.highlighter.languages[this.language],
      this.language,
      this.highlighter,
      {
        afterTokenize: [
          this.lineNumberPlugin(),
          (env) => {
            env.tokens.forEach((wrapperToken) => {
              wrapperToken.content.forEach((token) => {
                if (typeof token === "string") return;

                if (leftObj.deletedLines.has(token.lineNumber)) {
                  token.type += " deleted";
                }
              });
            });
          },
        ],
      },
    );

    leftEnv.tokens.forEach((token, index) => {
      const { data } = lineInfo[index].left;

      if (typeof token === "string") {
        return;
      }

      this.modifyTokens(token, data);

      const line = Token.stringify(
        this.highlighter.util.encode(
          /** @type {import("prism-esm").Token[]} */ (token.content),
        ),
        this.language,
        this.highlighter,
      );
      lineInfo[index].left.value = line;
    });

    const rightEnv = PrismEnv(
      rightObj.value.join("\n"),
      this.highlighter.languages[this.language],
      this.language,
      this.highlighter,
      {
        afterTokenize: [
          this.lineNumberPlugin(),
          (env) => {
            env.tokens.forEach((wrapperToken) => {
              wrapperToken.content.forEach((token) => {
                if (typeof token === "string") return;

                if (rightObj.insertedLines.has(token.lineNumber)) {
                  token.type += " inserted";
                }
              });
            });
          },
        ],
      },
    );

    rightEnv.tokens.forEach((token, index) => {
      const { data } = lineInfo[index].right;

      if (typeof token === "string") {
        return;
      }

      this.modifyTokens(token, data);

      const line = Token.stringify(
        this.highlighter.util.encode(
          /** @type {import("prism-esm").Token[]} */ (token.content),
        ),
        this.language,
        this.highlighter,
      );
      lineInfo[index].right.value = line;
    });
  }

  /**
   * @param {import("./compute-line-info.js").LineInformation[]} lineInformation
   */
  transformLineInformation(lineInformation) {
    const finalRight = [];
    const finalLeft = [];
    lineInformation.forEach((lineInfo) => {
      /**
       * @type {import("./compute-line-info.js").DiffInformation & Partial<{ data: ReturnType<LightDiffViewer["toWordData"]> }>}
       */
      const rightInfo = lineInfo.right;
      rightInfo.data = [];

      if (Array.isArray(rightInfo.value)) {
        rightInfo.value = rightInfo.value
          .map((obj, index) => {
            rightInfo.data.push(this.toWordData(rightInfo, obj, index));
            return this.renderWord(obj);
          })
          .join("");
      } else {
        rightInfo.value = rightInfo.value || "";
      }

      finalRight.push(rightInfo.value);

      /**
       * @type {import("./compute-line-info.js").DiffInformation & Partial<{ data: ReturnType<LightDiffViewer["toWordData"]> }>}
       */
      const leftInfo = lineInfo.left;
      leftInfo.data = [];

      if (Array.isArray(leftInfo.value)) {
        leftInfo.value = leftInfo.value
          .map((obj, index) => {
            leftInfo.data.push(this.toWordData(leftInfo, obj, index));
            return this.renderWord(obj);
          })
          .join("");
      } else {
        leftInfo.value = leftInfo.value || "";
      }

      finalLeft.push(leftInfo.value);
    });
    // Both right and left are now arrays of strings.
  }

  /**
   * Only used to unescape things like `&lt;/script>` from slotted content.
   * @internal
   * @param {string} text
   */
  transformTags(text) {
    const unescapeRegex = /&lt;\/([\w\d\.-_]+)>/g;
    if (this.unescapeBehavior === "last") {
      return replaceLast(text, unescapeRegex);
    }

    if (this.unescapeBehavior === "all") {
      return text.replaceAll(unescapeRegex, "</$1>");
    }

    return text;
  }

  /**
   * @param {Token} token
   * @param {LineDiffData[]} data_array
   */
  modifyTokens(token, data_array) {
    if (data_array.length <= 0) {
      return;
    }

    /**
     * @type {Array<import("./compute-line-info.js").DiffTypeValues>}
     */
    const important_types = ["removed", "added"];

    data_array.forEach((data) => {
      if (!important_types.includes(data.type)) {
        return;
      }

      // We only care about "removed" and "inserted"
      this.modifyToken(token, data);
    });
  }

  /**
   * @param {import("prism-esm/prism-core.js").TokenStreamItem} token
   * @param {LineDiffData} data
   * @param {{ offset: number, count: number }} [currentData={offset: 0, count: 0}] - The current number of characters modified. Once this reaches data.length, terminates.
   */
  modifyToken(token, data, currentData = { offset: 0, count: 0 }) {
    // if (currentData.count >= data.length) { return }
    if (token.type.includes("light-gutter-cell")) {
      return;
    }

    if (typeof token.content === "string") {
      this.modifyTokenContent(
        /** @type {import("prism-esm/prism-core.js").TokenStreamItem & { touched: boolean; touchedIndexes: Set<number>}} */
        (token),
        null,
        data,
        currentData,
      );
      return;
    }

    if (token.content.length <= 0) {
      return;
    }

    for (let i = 0; i < token.content.length; i++) {
      const child_token = token.content[i];

      if (typeof child_token === "string") {
        this.modifyTokenContent(
          /** @type {import("prism-esm/prism-core.js").TokenStreamItem & { touched: boolean; touchedIndexes: Set<number>}} */
          (token),
          i,
          data,
          currentData,
        );
      } else {
        this.modifyToken(child_token, data, currentData);
      }
    }
  }

  /**
   * @param {import("prism-esm/prism-core.js").TokenStreamItem & { touched: boolean; touchedIndexes: Set<number> }} token
   * @param {null | number} index
   * @param {LineDiffData} data
   * @param {*} currentData
   */
  modifyTokenContent(token, index, data, currentData) {
    const content = index == null ? token.content : token.content[index];

    if (typeof content !== "string") {
      return;
    }

    if (token.touchedIndexes == null) {
      token.touchedIndexes = new Set();
    }

    if (index != null && token.touchedIndexes.has(index)) {
      return;
    }

    if (index == null && token.touched) {
      return;
    }

    if (index == null) {
      token.touched = true;
    }

    if (index != null) {
      token.touchedIndexes.add(index);
    }

    const offsetStart = currentData.offset;
    const offsetEnd = currentData.offset + content.length;

    if (offsetStart > data.offset + data.length) {
      currentData.offset += content.length;
      return;
    }

    if (offsetEnd < data.offset) {
      currentData.offset += content.length;
      return;
    }

    const localOffset = Math.max(data.offset - currentData.offset, 0);
    const length = data.length - currentData.count;

    const beforeContent = content.substring(0, localOffset);
    const currentContent = content.substring(localOffset, localOffset + length);
    currentData.count += currentContent.length;
    const afterContent = content.substring(localOffset + currentContent.length);
    currentData.value += currentContent;

    currentData.offset += content.length;

    if (index != null) {
      token.touchedIndexes.add(index + 1);
      token.touchedIndexes.add(index + 2);
    }

    const newToken = new Token(
      `light-diff-viewer--${data.type}`,
      currentContent,
    );
    /** @type {Token & { touched: boolean }} */ (newToken).touched = true;
    const newContent = [beforeContent, newToken, afterContent];

    if (index != null) {
      /** @type {(string | import("prism-esm/prism-core.js").TokenStreamItem)[]} */ (
        token.content
      ).splice(index, 1, ...newContent);
    } else {
      token.content = newContent;
    }
  }
}
