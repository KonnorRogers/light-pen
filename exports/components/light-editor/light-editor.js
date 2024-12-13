// @ts-check
// import { html, LitElement } from "lit";
// import { ref } from "lit/directives/ref.js";
// import { LitTextareaMixin } from "form-associated-helpers/exports/mixins/lit-textarea-mixin.js";

// import { baseStyles } from "../../styles/base-styles.js";
// import { theme } from "../../styles/default-theme.styles.js";
// import { styles } from "./light-editor.styles.js";

// import { LightResizeEvent } from "../../events/light-resize-event.js";

// import { dedent } from "../../../internal/dedent.js";
// import { BaseElement } from "../../../internal/base-element.js";
// import { elementsToString } from "../../../internal/elements-to-strings.js";
// import { createPrismInstance } from "../../../internal/prism-highlight.js";

// import LightCode from "../light-code/light-code.js";

// const newLineRegex = /\r\n?|\n/g;

// /**
//  * A minimal plain text editor with syntax highlighting, line numbers, and line highlighting.
//  *    `<light-editor>` is not intended to replace full solutions like CodeMirror, but it
//  *    is a lightweight alternative using a `<pre>` overlaid on top of a `<textarea>`
//  *    and a few extra divs to make for an enjoyable text editing experience.
//  *
//  * @customElement
//  * @tagname light-editor
//  *
//  * @event {Event} light-input - Re-emits the textarea's "input" event
//  * @event {Event} light-change - Re-emits the textarea's "change" event
//  * @event {Event} light-selectionchange - Re-emits the textarea's "selectionchange" event
//  * @event {Event} light-focus - Re-emits the textarea's "focus" event
//  * @event {Event} light-blur - Re-emits the textarea's "blur" event
//  * @event {Event} light-resize - Is emitting whenever the editor resizes.
//  * @event {Event} light-value-change - Emitted whenever the "value" attribute of the editor changes.
//  *
//  */
// export default class LightEditor extends LitTextareaMixin(BaseElement) {
//   /**
//    * @override
//    */
//   static baseName = "light-editor";

//   /**
//    * @override
//    */
//   static dependencies = { "light-code": LightCode };

//   /**
//    * @override
//    * Without delegatesFocus, we get this fun message:
//    *  "The invalid form control with name='editor' is not focusable."
//    */
//   static shadowRootOptions = {
//     ...LitElement.shadowRootOptions,
//     delegatesFocus: true,
//   };

//   /**
//    * @override
//    */
//   static styles = [baseStyles, styles, theme];

//   /**
//    * @override
//    */
//   static properties = {
//     ...LitTextareaMixin.formProperties,
//     wrap: { reflect: true, state: false },
//     language: { reflect: true },
//     src: {},
//     disableLineNumbers: {
//       type: Boolean,
//       reflect: true,
//       attribute: "disable-line-numbers",
//     },
//     preserveWhitespace: {
//       type: Boolean,
//       reflect: true,
//       attribute: "preserve-whitespace",
//     },
//     hasFocused: {
//       type: Boolean,
//       reflect: true,
//       attribute: "data-has-focused",
//     },
//     currentLineNumber: {
//       attribute: false,
//       state: true,
//       type: Number,
//     },
//     highlighter: {
//       attribute: false,
//       state: true,
//     },
//   };

//   constructor() {
//     super();

//     /**
//      * The language used for highlighting. Default is "html". "css" and "js" also included by default.
//      * @type {string}
//      */
//     this.language = "html";

//     /**
//      * The value to set for the text editor
//      * @type {string}
//      */
//     this.value = "";

//     /**
//      * This is the value attribute. This is used for resetting the form input.
//      * @type {string}
//      */
//     this.defaultValue = "";

//     /**
//      * The underlying textarea
//      * @type {null | HTMLTextAreaElement}
//      */
//     this.textarea = null;

//     /**
//      * Points to a remote file source that should be accessible via `fetch()`
//      * @type {string | null}
//      */
//     this.src = null;

//     /**
//      * @property
//      * @type {"soft" | "hard"}
//      * If `wrap="soft"`, lines will wrap when they reach the edge of their container. If `wrap="hard"`, lines will not wrap instead all the user to scroll horizontally to see more code.
//      */
//     this.wrap = "soft";

//     /**
//      * Whether to strip whitespace before first character, and after the last character.
//      * @type {boolean}
//      */
//     this.preserveWhitespace = false;

//     /**
//      * @type {boolean}
//      */
//     this.disableLineNumbers = false;

//     /**
//      * Points to an instance of Prism from "prism-esm" for adjusting highlighting, adding plugins, etc.
//      * @type {ReturnType<typeof createPrismInstance>}
//      */
//     this.highlighter = createPrismInstance();

//     /**
//      * @type {number}
//      */
//     this.currentLineNumber = 1;
//   }

//   /**
//    * @override
//    */
//   connectedCallback() {
//     super.connectedCallback();

//     this.value = this.getAttribute("value") || "";
//     this.defaultValue = this.getAttribute("value") || "";

//     if (
//       this.value === this.getAttribute("value") &&
//       this.preserveWhitespace !== true
//     ) {
//       // Remove only lines that are blank with spaces that are blank. trim() removes preceding white-space for the line with characters.
//       // https://stackoverflow.com/questions/14572413/remove-line-breaks-from-start-and-end-of-string#comment104290392_14572494
//       this.value = dedent(
//         this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g, ""),
//       ).trim();
//     }
//   }

//   /**
//    * @override
//    * @param {import("lit").PropertyValues<typeof this>} changedProperties
//    */
//   willUpdate(changedProperties) {
//     if (changedProperties.has("value")) {
//       // Emit events on value updates
//       this.dispatchEvent(
//         new Event("light-value-change", { bubbles: true, composed: true }),
//       );

//       this.dispatchEvent(
//         new Event("change", { bubbles: true, composed: true }),
//       );
//     }

//     if (changedProperties.has("src") && this.src) {
//       fetch(this.src).then(async (response) => {
//         let finalValue = await response.text();

//         if (this.preserveWhitespace !== true) {
//           finalValue = dedent(
//             finalValue.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g, ""),
//           ).trim();
//         }

//         return finalValue;
//       });
//     }

//     super.willUpdate(changedProperties);
//   }

//   /**
//    * @override
//    */
//   click() {
//     if (this.textarea) {
//       this.textarea.click();
//     } else {
//       this.click();
//     }
//   }

//   /**
//    * @override
//    * @param {FocusOptions} [options]
//    */
//   focus(options) {
//     if (this.textarea) {
//       this.textarea.focus(options);
//     } else {
//       this.focus(options);
//     }
//   }

//   /**
//    * @internal
//    */
//   __setGutterWidth() {
//     const gutterWidth = /** @type {undefined | null | HTMLElement} */ (
//       this.shadowRoot
//         ?.querySelector("light-code")
//         ?.shadowRoot?.querySelector("[part~='gutter']")
//     )?.offsetWidth;

//     if (gutterWidth) {
//       this.style.setProperty("--gutter-width", `${gutterWidth}px`);
//       return;
//     }

//     this.style.removeProperty("--gutter-width");
//   }

//   /**
//    * @override
//    */
//   render() {
//     const language = this.language;
//     this.syncScroll();

//     setTimeout(async () => {
//       await this.updateComplete;
//       this.__setGutterWidth();
//     });

//     return html`
//       <div part="base">
//         <!-- This is where the fancy syntax highlighting comes in -->
//         <div part="base-editor">
//           <!-- This bad boy is for measuring cursors -->
//           <pre
//             part="pre"
//             aria-hidden="true"
//             style="
//               position: fixed;
//               top: 0;
//               left: 0;
//               pointer-events: none;
//               visibility: hidden;
//             "
//           ><code part="code"><span id="before-caret"></span><span id="caret">.</span><span id="after-caret">.</span></code></pre>

//           <light-code
//             tabindex="-1"
//             .language=${this.language}
//             .code=${this.value}
//             .wrap=${this.wrap}
//             .highlighter=${this.highlighter}
//             .disableLineNumbers=${this.disableLineNumbers}
//             .preserveWhitespace=${this.preserveWhitespace}
//             .highlightLines=${`{${this.hasFocused ? this.currentLineNumber : ""}}`}
//             @focus=${() => {
//               this.textarea?.focus();
//             }}
//             @touchstart=${(/** @type {Event} */ e) => {
//               // Don't let a user focus on this area.
//               this.textarea?.focus();
//             }}
//             @click=${(/** @type {Event} */ e) => {
//               // Don't let a user focus on this area.
//               this.textarea?.focus();
//             }}
//           ></light-code>

//           <!-- IMPORTANT! There must be no white-space above. -->
//           <textarea
//             id="textarea-${language}"
//             ${ref(this.textareaChanged)}
//             data-code-lang=${language}
//             part="textarea textarea-${language}"
//             spellcheck="false"
//             autocorrect="off"
//             autocapitalize="off"
//             minlength=${this.minLength}
//             maxlength=${this.maxLength}
//             translate="no"
//             .defaultValue=${this.defaultValue}
//             .value=${this.value}
//             ?disabled=${this.disabled}
//             ?required=${this.required}
//             placeholder=${this.placeholder}
//             @keyup=${this.keyupHandler}
//             @keydown=${this.keydownHandler}
//             @focus=${() => {
//               this.hasFocused = true;
//               this.syncScroll();
//               this.setCurrentLineHighlight();
//               this.dispatchEvent(
//                 new Event("light-focus", { bubbles: true, composed: true }),
//               );
//             }}
//             @blur=${() => {
//               this.setAttribute("data-has-interacted", "");
//               this.syncScroll();
//               this.setCurrentLineHighlight();
//               this.dispatchEvent(
//                 new Event("light-blur", { bubbles: true, composed: true }),
//               );
//             }}
//             @selectionchange=${
//               /** @param {Event} e */ (e) => {
//                 this.syncScroll();
//                 this.setCurrentLineHighlight();
//                 this.dispatchEvent(
//                   new Event("light-selectionchange", {
//                     bubbles: true,
//                     composed: true,
//                   }),
//                 );
//               }
//             }
//             @click=${() => {
//               this.setCurrentLineHighlight();
//             }}
//             @touchstart=${() => {
//               this.setCurrentLineHighlight();
//             }}
//             @touchend=${() => {
//               this.setCurrentLineHighlight();
//             }}
//             @pointerdown=${() => {
//               this.setCurrentLineHighlight();
//             }}
//             @pointerup=${() => {
//               this.setCurrentLineHighlight();
//             }}
//             @input=${
//               /** @param {Event} e */ (e) => {
//                 this.value = /** @type {HTMLTextAreaElement} */ (
//                   e.currentTarget
//                 ).value;
//                 this.setCurrentLineHighlight();
//                 this.dispatchEvent(
//                   new Event("light-input", { bubbles: true, composed: true }),
//                 );
//                 this.dispatchEvent(
//                   new Event("input", { bubbles: true, composed: true }),
//                 );
//                 this.syncScroll();
//               }
//             }
//             @change=${
//               /** @param {Event} e */ (e) => {
//                 this.value = /** @type {HTMLTextAreaElement} */ (
//                   e.currentTarget
//                 ).value;
//                 this.setCurrentLineHighlight();
//                 this.syncScroll();
//               }
//             }
//             @scroll=${
//               /** @param {Event} e */ (e) => {
//                 this.setCurrentLineHighlight();
//                 this.syncScroll();
//               }
//             }
//           ></textarea>
//         </div>
//         <!-- base-editor -->
//       </div>
//       <!-- base -->

//       <!-- Hidden slot for holding content -->
//       <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
//     `;
//   }

//   /**
//    * @ignore
//    * @param {ResizeObserverEntry[]} entries
//    */
//   handleTextAreaResize(entries) {
//     const { target } = entries[0];
//     const { left, right, top, bottom } = entries[0].contentRect;
//     const width = left + right;
//     const height = top + bottom;

//     /**
//      * Fires whenever the editor resizes, usually due to zoom in / out
//      */
//     this.dispatchEvent(new LightResizeEvent("light-resize", { height, width }));
//     this.syncScroll();
//   }

//   /**
//    * @override
//    * @param {import("lit").PropertyValues<this>} changedProperties
//    */
//   updated(changedProperties) {
//     super.updated(changedProperties);

//     this.syncScroll();
//     setTimeout(() => this.setCurrentLineHighlight());
//   }

//   /**
//    * Syncs the `<light-code>` element scroll position to the same as the `<textarea>`
//    * @param {boolean} [syncCaret=false] - Whether or not to sync the caret. This is generally reserved for right / left arrow keys because the gutter is `position: sticky;`.
//    * @internal
//    */
//   syncScroll(syncCaret = false) {
//     // TODO: There's probably a lot of caching we can do here to reduce recomputes.
//     /**
//      * @type {undefined | null | HTMLTextAreaElement}
//      */
//     const textarea = this.textarea;

//     if (textarea == null) return;

//     const lightCode = this.shadowRoot?.querySelector("light-code");
//     const code = lightCode?.shadowRoot?.querySelector("code");

//     if (syncCaret) {
//       const { top, left } = this.getCaretPosition();
//       // textarea.scrollTop = top
//       if (left < 60) {
//         textarea.scrollLeft = Math.min(left, textarea.scrollLeft);
//       }
//     }

//     if (lightCode) {
//       lightCode.scrollTop = textarea.scrollTop;
//     }

//     if (code) {
//       code.scrollLeft = textarea.scrollLeft;
//     }
//   }

//   /**
//    * @ignore
//    * @param {Element | undefined} element
//    */
//   textareaChanged(element) {
//     if (!(element instanceof HTMLTextAreaElement)) {
//       return;
//     }

//     const textarea = element;
//     this.textarea = textarea;
//     this.formControl = textarea;

//     this.textareaResizeObserver = new ResizeObserver((entries) =>
//       this.handleTextAreaResize(entries),
//     );
//     this.textareaResizeObserver.observe(textarea);
//   }

//   /**
//    * @ignore
//    * @param {Event} e
//    */
//   handleSlotChangeEvent(e) {
//     // @TODO: Attach mutations observers to update value.
//     /**
//      * @type {HTMLSlotElement}
//      */
//     // @ts-expect-error
//     const slot = e.target;

//     const templates = slot.assignedElements({ flatten: true });

//     // We only unescape when passed into templates.
//     let code = this.unescapeTags(elementsToString(...templates));

//     if (!this.preserveWhitespace) {
//       code = dedent(code.trim());
//     }

//     if (code) {
//       this.value = code;
//       this.defaultValue = code;
//       setTimeout(() => this.textarea?.setSelectionRange(0, 0));
//       this.dispatchEvent(
//         new Event("light-input", { bubbles: true, composed: true }),
//       );
//       this.dispatchEvent(
//         new Event("light-change", { bubbles: true, composed: true }),
//       );
//     }
//   }

//   /**
//    * @ignore
//    * @param {KeyboardEvent} evt
//    */
//   keyupHandler(evt) {
//     this.setCurrentLineHighlight();
//     // setTimeout is needed for Safari which appears to be "slow" to update selection APIs.
//     setTimeout(() => this.setCurrentLineHighlight());
//   }

//   /**
//    * @ignore
//    * @param {KeyboardEvent} evt
//    */
//   keydownHandler(evt) {
//     this.setCurrentLineHighlight();
//     // setTimeout is needed for Safari which appears to be "slow" to update selection APIs.
//     setTimeout(() => this.setCurrentLineHighlight());
//     this.syncScroll();

//     if (evt.key.startsWith("Arrow") || evt.key === "Backspace") {
//       this.syncScroll(true);
//     }

//     // Let's not trap focus. For now.
//     // if ('Tab' === evt.key) {
//     //   evt.preventDefault()
//     //   target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
//     //   this.value = target.value
//     //   return
//     // }
//   }

//   getCaretPosition() {
//     /* Inspired by https://github.com/component/textarea-caret-position */
//     const beforeCaret = this.shadowRoot?.getElementById("before-caret");
//     const afterCaret = this.shadowRoot?.getElementById("after-caret");
//     const caret = this.shadowRoot?.getElementById("caret");
//     const textarea = this.textarea;

//     const fallback = { top: 0, left: 0 };

//     if (!beforeCaret) {
//       return fallback;
//     }
//     if (!afterCaret) {
//       return fallback;
//     }
//     if (!caret) {
//       return fallback;
//     }
//     if (!textarea) {
//       return fallback;
//     }

//     if (textarea.selectionStart !== textarea.selectionEnd) {
//       return fallback;
//     }

//     beforeCaret.textContent = "";

//     const textLines = this.getLinesToSelectionStart();

//     if (!textLines) {
//       return fallback;
//     }

//     const currentLineNumber = textLines.length - 1;
//     const beforeCaretText = textLines[currentLineNumber].substring(
//       0,
//       textarea.selectionStart,
//     );
//     beforeCaret.textContent = beforeCaretText;

//     return {
//       top: afterCaret.offsetTop - textarea.scrollTop,
//       left: afterCaret.offsetLeft - textarea.scrollLeft,
//     };
//   }

//   setCurrentLineHighlight() {
//     const currentLineNumber = this.getCurrentLineNumber();

//     if (currentLineNumber != null) {
//       this.currentLineNumber = currentLineNumber + 1;
//     }
//   }

//   getLinesToSelectionStart() {
//     const textArea = this.textarea;

//     if (!textArea) return;

//     const textLines = textArea.value
//       .substring(0, textArea.selectionStart)
//       .split(newLineRegex);

//     return textLines;
//   }

//   getCurrentLineNumber() {
//     const textLines = this.getLinesToSelectionStart();

//     if (!textLines) {
//       return 0;
//     }

//     const currentLineNumber = textLines.length - 1;
//     // const currentColumnIndex = textLines[textLines.length-1].length;
//     // console.log("Current Line Number "+ currentLineNumber+" Current Column Index "+currentColumnIndex );

//     return currentLineNumber;
//   }

//   /**
//    * @ignore
//    * @param {string} text
//    */
//   // This gets tricky. We could do this, but it may be unexpected...
//   unescapeTags(text) {
//     // Replace usages of `&lt;/script>` with `</script>`. Match against
//     return text.replaceAll(/&lt;\/([\w\d\.-_]+)>/g, "</$1>");
//   }

//   /**
//    * @ignore
//    * Highlighters strip newlines. But you can see new lines in <textarea>, this fixes that.
//    * @param {string} text
//    */
//   injectNewLine(text) {
//     // Handle final newlines (see article)
//     if (text === "" || text[text.length - 1] === "\n") {
//       // If the last character is a newline character
//       text += " "; // Add a placeholder space character to the final line
//     }

//     return text;
//   }
// }

import {
  html,
  css,
  LitElement,
} from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
const newLineRegex = /\r\n|\r|\n/;
const CELL_START = `<span class="token light-gutter-cell" part="gutter-cell">`;
const LINE_START = `</span><span class="token light-line" part="line">`;
const LINE_END = `</span>`;

const ESCAPE_STRING_HASH = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
};

/**
 * @param {string} str
 */
function escapeString(str) {
  return str
    .replaceAll(/&/g, "&amp;")
    .replaceAll(/[<>"']/g, (match) => {
      return ESCAPE_STRING_HASH[/** @type {keyof typeof ESCAPE_STRING_HASH} */ (match)]
    });
}

export class LightEditor extends LitElement {
  /**
   * @override
   */
  static styles = css`
    :host,
    *,
    *:after,
    *:before {
      box-sizing: border-box;
    }

    :host {
      display: block;
    }
    :host::part(base) {
      display: grid;
      align-items: start;
      min-height: 300px;
    }

    :host::part(pre),
    :host::part(textarea) {
      /* I don't love this, but it fixes font size inconsistencies on mobile. The alternative is listen for font-size changes, which is...challenging. */
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      text-size-adjust: 100%;

      font-size: inherit;
      font-family: inherit;
      line-height: inherit;
      tab-size: inherit;

      grid-area: 1 / 1 / 2 / 2;
      resize: none;
      tab-size: 2;
      font-size: 1rem;
      white-space: pre;
      word-break: break-all;
      max-height: 300px;
      min-height: 300px;
      font-family: monospace;
      line-height: 24px;
    }
    :host::part(textarea) {
      padding: 0;
      color: transparent;
      /* color: red; */
      color: red;
      background: transparent;
      caret-color: black;
      padding-inline-start: calc(var(--gutter-cell-width, 40px) + 8px);
    }
    :host::part(pre) {
      padding: 0;
      margin: 0;
      /* background: rgba(200, 200, 200) */
      position: relative;
      z-index: 1;
      pointer-events: none;
      padding-inline-start: 0;
      overflow: auto;
      max-height: 300px;
    }

    :host::part(code) {
      display: grid;
      padding-top: 3px;
      align-content: start;
      grid-template-columns: max-content max-content;
      max-height: 100%;
      min-height: 300px;
      position: relative;
    }

    :host::part(gutter-cell) {
      min-width: 40px;
      display: block;
      text-align: end;
      font-variant-numeric: tabular-nums;
      display: inline-block;
      padding-inline-end: 0.5em;
      padding-inline-start: 0.75em;
      user-select: none;
      color: rgba(0, 0, 0, 0.35);
      background-color: lightgray;
      font-variant-numeric: tabular-nums;
      text-align: end;
      position: sticky;
      z-index: 1;
      left: 0px;
      border-inline-end: 1px solid lightgray;
    }

    :host::part(line) {
      color: gray;
      padding-inline-start: 10px;
    }
  `;

  /**
   * @override
   */
  static properties = {
    value: { type: String },
    highlightedCode: {},
  };

  constructor() {
    super();
    this.value = "";
    this.textareaResizeObserver = new ResizeObserver((entries) => {
      requestAnimationFrame(() => {
        const textarea = this.textarea
        for (const entry of entries) {
          if (entry.target !== textarea) { return }

          this.textareaHeight = entry.borderBoxSize[0].blockSize
          this.textareaWidth = entry.borderBoxSize[0].inlineSize
        }
      })
    })

    /**
     * TODO: This should really be calculated, and not hard coded. This is used by "getViewableLines()" but may not actually be necessary due to the fake hidden spans.
     */
    this.lineHeight = 24
  }

  get textarea () {
    return this.shadowRoot?.querySelector("textarea");
  }

  /**
   * @override
   */
  connectedCallback () {
    super.connectedCallback()

    let textarea
    if (textarea = this.textarea) {
      this.textareaResizeObserver.observe(textarea)
    } else {
      setTimeout(() => {
        textarea = this.textarea
        if (textarea) {
          this.textareaResizeObserver.observe(textarea)
        }
      })
    }
  }

  lines() {
    return this.value.split(newLineRegex);
  }

  getViewableLines() {
    const textarea = this.textarea

    if (!textarea) {
      return;
    }

    // TODO: Need to get real line heights. We can actually calculate the viewable portions.
    const lineHeight = this.lineHeight;
    const visibleLines = (this.textareaHeight || this.textarea.offsetHeight) / lineHeight;

    const topLine = Math.floor(textarea.scrollTop / lineHeight);

    const bottomLine = Math.ceil(topLine + visibleLines);
    return {
      topLine,
      bottomLine,
    };
  }

  highlight(code = this.value) {
    requestAnimationFrame(() => {
      this.__highlightTimeout = setTimeout(() => {
        if (this.__highlightTimeout) {
          clearTimeout(this.__highlightTimeout);
        }

        const lines = this.lines();

        this.viewableLines = this.getViewableLines()
        if (!this.viewableLines) { return }

        const { topLine, bottomLine } = this.viewableLines;

        const highlightedCode = [];
        for (let i = topLine; i < bottomLine; i++) {
          let line = lines[i];
          if (line == null) {
            continue;
          }
          if (line === "") {
            line = " ";
          }
          highlightedCode.push(
            CELL_START +
              (i + 1) +
              LINE_START +
              escapeString(line) +
              LINE_END,
          );
        }
        this.highlightedCode = highlightedCode.join("\n");
      });
    });

    return code;
  }

  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  updated(changedProperties) {
    if (changedProperties.has("value")) {
      this.highlight();
    }

    if (changedProperties.has("highlightedCode")) {
      this.syncScroll();
    }

    super.updated(changedProperties)
  }

  getCaretPosition() {
    /* Inspired by https://github.com/component/textarea-caret-position */
    const beforeCaret = this.shadowRoot?.getElementById("before-caret");
    const afterCaret = this.shadowRoot?.getElementById("after-caret");
    const caret = this.shadowRoot?.getElementById("caret");
    const textarea = this.shadowRoot?.querySelector("textarea");

    const fallback = { top: 0, left: 0 };

    if (!beforeCaret) {
      return fallback;
    }
    if (!afterCaret) {
      return fallback;
    }
    if (!caret) {
      return fallback;
    }
    if (!textarea) {
      return fallback;
    }

    if (textarea.selectionStart !== textarea.selectionEnd) {
      return fallback;
    }

    beforeCaret.textContent = "";

    const textLinesToCursor = textarea.value
      .substring(0, textarea.selectionStart)
      .split(newLineRegex);

    if (!textLinesToCursor) {
      return fallback;
    }

    this.currentLineNumber = textLinesToCursor.length - 1;

    const beforeCaretText = this.value.substring(0, textarea.selectionStart).split(/\n/).map((str) => {
      return "<span>" + str + "</span>"
    }).join("\n");
    beforeCaret.textContent = beforeCaretText;

    const pos = {
      top: Math.max(caret.offsetTop - textarea.clientHeight, 0),
      left: caret.offsetLeft - textarea.scrollLeft,
    };

    return pos
  }

  syncScroll(syncCaret = false) {
    // TODO: There's probably a lot of caching we can do here to reduce recomputes.
    const textarea = this.textarea

    if (textarea == null) return;

    requestAnimationFrame(() => {
      this.__syncScroll = setTimeout(() => {
        if (this.__syncScroll) {
          clearTimeout(this.__syncScroll);
        }
        const pre = this.shadowRoot?.querySelector("pre");
        const code = this.shadowRoot?.querySelector("code");

        if (!pre) { return }
        if (!code) { return }

        const { top, left } = this.getCaretPosition();

        const caret = this.shadowRoot?.querySelector("#caret");
        if (!caret) { return }

        const scrollTop = Math.max(textarea.scrollTop, 0)
        console.log({ top, scrollTop })
        code.style.height = `${textarea.scrollHeight}px`

        const viewableLines = this.getViewableLines()
        if (!viewableLines) { return }

        const { topLine } = viewableLines
        code.style.top = `${topLine * this.lineHeight}px`

        if (syncCaret) {
          if (left < 60) {
            pre.scrollLeft = Math.min(left, pre.scrollLeft);
          }
        }

        if (pre) {
          pre.scrollTop = textarea.scrollTop
          pre.scrollLeft = textarea.scrollLeft
        }
      }, 10);
    });
  }

  updateGutterWidth() {
    const code = this.shadowRoot?.querySelector("code");
    if (!code) { return }
    const lastChild = /** @type {HTMLElement} */ (code.children[code.children.length - 2]);
    const width = lastChild.offsetWidth;

    this.style.setProperty("--gutter-cell-width", `${width}px`);
  }

  renderCursorMeasurements() {
    return html`
      <pre
        part="pre"
        aria-hidden="true"
        style="
        position: absolute;
        top: 0;
        left: 0;
        width: 0px;
        height: 0px;
        pointer-events: none;
        visibility: hidden;
        padding-inline-start: calc(var(--gutter-cell-width) + 8px);
        padding-top: 6px;
      "
      ><code part="code" style="display: block;"><span id="before-caret"></span><span id="caret">.</span><span id="after-caret">.</span></code></pre>
    `;
  }

  /**
   * @override
   */
  render() {
    return html`
      <div part="base">
        <pre part="pre"><code part="code">${unsafeHTML(
          this.highlightedCode,
        )}</code></pre>
        ${this.renderCursorMeasurements()}
        <textarea
          part="textarea"
          spellcheck="off"
          autocomplete="off"
          @input=${
            /** @param {Event} e */ (e) => {
              this.value = /** @type {HTMLTextAreaElement} */ (
                e.currentTarget
              ).value;
              this.updateGutterWidth()
            }
          }
          @keydown=${() => {
            this.syncScroll(true);
            this.updateGutterWidth()
          }}
          @scroll=${() => {
            requestAnimationFrame(() => {
              this.highlight()
              this.syncScroll()
            })
          }}
        ></textarea>
      </div>
    `;
  }
}
customElements.define("light-editor", LightEditor);
