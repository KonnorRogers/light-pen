// @ts-check
import { html, LitElement } from "lit";
import { ref } from "lit/directives/ref.js";
import { LitTextareaMixin } from "form-associated-helpers/exports/mixins/lit-textarea-mixin.js";

import { baseStyles } from "../../styles/base-styles.js";
import { theme } from "../../styles/default-theme.styles.js";
import { styles } from "./light-editor.styles.js";
import { codeStyles } from "../../styles/code-styles.js";

import { LightResizeEvent } from "../../events/light-resize-event.js";

import { dedent } from "../../../internal/dedent.js";
import { BaseElement } from "../../../internal/base-element.js";
import { elementsToString } from "../../../internal/elements-to-strings.js";
import { createPrismInstance } from "../../../internal/prism-highlight.js";

import LightCode from "../light-code/light-code.js";

const newLineRegex = /\r\n?|\n/g;

/**
 * A minimal plain text editor with syntax highlighting, line numbers, and line highlighting.
 *    `<light-editor>` is not intended to replace full solutions like CodeMirror, but it
 *    is a lightweight alternative using a `<pre>` overlaid on top of a `<textarea>`
 *    and a few extra divs to make for an enjoyable text editing experience.
 *
 * @customElement
 * @tagname light-editor
 *
 * @event {Event} light-input - Re-emits the textarea's "input" event
 * @event {Event} light-change - Re-emits the textarea's "change" event
 * @event {Event} light-selectionchange - Re-emits the textarea's "selectionchange" event
 * @event {Event} light-focus - Re-emits the textarea's "focus" event
 * @event {Event} light-blur - Re-emits the textarea's "blur" event
 * @event {Event} light-resize - Is emitting whenever the editor resizes.
 * @event {Event} light-value-change - Emitted whenever the "value" attribute of the editor changes.
 *
 */
export default class LightEditor extends LitTextareaMixin(BaseElement) {
  /**
   * @override
   */
  static baseName = "light-editor";

  /**
   * @override
   */
  static dependencies = { "light-code": LightCode };

  /**
   * @override
   * Without delegatesFocus, we get this fun message:
   *  "The invalid form control with name='editor' is not focusable."
   */
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * @override
   */
  static styles = [
    baseStyles,
    codeStyles,
    styles,
    theme
  ];

  /**
   * @override
   */
  static properties = {
    ...LitTextareaMixin.formProperties,
    wrap: { reflect: true, state: false },
    language: { reflect: true },
    src: {},
    topViewableLine: { type: Number, state: true },
    bottomViewableLine: { type: Number, state: true },
    disableLineNumbers: {
      type: Boolean,
      reflect: true,
      attribute: "disable-line-numbers",
    },
    preserveWhitespace: {
      type: Boolean,
      reflect: true,
      attribute: "preserve-whitespace",
    },
    hasFocused: {
      type: Boolean,
      reflect: true,
      attribute: "data-has-focused",
    },
    currentLineNumber: {
      attribute: false,
      state: true,
      type: Number,
    },
    highlighter: {
      attribute: false,
      state: true,
    },
  };

  constructor() {
    super();

    /**
     * The language used for highlighting. Default is "html". "css" and "js" also included by default.
     * @type {string}
     */
    this.language = "html";

    /**
     * The value to set for the text editor
     * @type {string}
     */
    this.value = "";

    /**
     * This is the value attribute. This is used for resetting the form input.
     * @type {string}
     */
    this.defaultValue = "";

    /**
     * The underlying textarea
     * @type {null | HTMLTextAreaElement}
     */
    this.textarea = null;

    /**
     * Points to a remote file source that should be accessible via `fetch()`
     * @type {string | null}
     */
    this.src = null;

    /**
     * @property
     * @type {"soft" | "hard"}
     * If `wrap="soft"`, lines will wrap when they reach the edge of their container. If `wrap="hard"`, lines will not wrap instead all the user to scroll horizontally to see more code.
     */
    this.wrap = "hard";

    /**
     * Whether to strip whitespace before first character, and after the last character.
     * @type {boolean}
     */
    this.preserveWhitespace = false;

    /**
     * @type {boolean}
     */
    this.disableLineNumbers = false;

    /**
     * Points to an instance of Prism from "prism-esm" for adjusting highlighting, adding plugins, etc.
     * @type {ReturnType<typeof createPrismInstance>}
     */
    this.highlighter = createPrismInstance();

    /**
     * @type {number}
     */
    this.currentLineNumber = 1;
  }

  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();

    this.handleAnimations = () => {

      setTimeout(() => {
        this.syncScroll();
        this.setCurrentLineHighlight();
      }, 300)
    }
    this.addEventListener("transitionend", this.handleAnimations)
    this.addEventListener("animationend", this.handleAnimations)

    this.value = this.getAttribute("value") || "";
    this.defaultValue = this.getAttribute("value") || "";

    if (
      this.value === this.getAttribute("value") &&
      this.preserveWhitespace !== true
    ) {
      // Remove only lines that are blank with spaces that are blank. trim() removes preceding white-space for the line with characters.
      // https://stackoverflow.com/questions/14572413/remove-line-breaks-from-start-and-end-of-string#comment104290392_14572494
      this.value = dedent(
        this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g, ""),
      ).trim();
    }
  }

  /**
   * @override
   * @param {import("lit").PropertyValues<typeof this>} changedProperties
   */
  willUpdate(changedProperties) {
    if (changedProperties.has("value")) {
      // Emit events on value updates
      this.dispatchEvent(
        new Event("light-value-change", { bubbles: true, composed: true }),
      );

      this.dispatchEvent(
        new Event("change", { bubbles: true, composed: true }),
      );
    }

    if (changedProperties.has("src") && this.src) {
      fetch(this.src).then(async (response) => {
        let finalValue = await response.text();

        if (this.preserveWhitespace !== true) {
          finalValue = dedent(
            finalValue.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g, ""),
          ).trim();
        }

        return finalValue;
      });
    }

    super.willUpdate(changedProperties);
  }

  /**
   * @override
   */
  click() {
    if (this.textarea) {
      this.textarea.click();
    } else {
      this.click();
    }
  }

  /**
   * @override
   * @param {FocusOptions} [options]
   */
  focus(options) {
    if (this.textarea) {
      this.textarea.focus(options);
    } else {
      this.focus(options);
    }
  }

  /**
   * @internal
   */
  __setGutterWidth() {
    const gutterWidth = /** @type {undefined | null | HTMLElement} */ (
      this.shadowRoot
        ?.querySelector("light-code")
        ?.shadowRoot?.querySelector("[part~='gutter']")
    )?.offsetWidth;

    if (gutterWidth) {
      this.style.setProperty("--gutter-width", `${gutterWidth}px`);
      return;
    }

    this.style.removeProperty("--gutter-width");
  }

  /**
   * @override
   */
  render() {
    const language = this.language;
    this.syncScroll();

    setTimeout(async () => {
      await this.updateComplete;
      this.__setGutterWidth();
    });

    return html`
      <div part="base">
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
          <!-- This bad boy is for measuring cursors -->
          <pre
            part="pre"
            aria-hidden="true"
            style="
              position: fixed;
              top: 0;
              left: 0;
              pointer-events: none;
              visibility: hidden;
            "
          ><code part="code"><span id="before-caret"></span><span id="caret">.</span><span id="after-caret">.</span></code></pre>

          <light-code
            tabindex="-1"
            .language=${this.language}
            .code=${this.value}
            wrap=${this.wrap}
            part="light-code"
            exportparts=${`
              gutter:light-code__gutter,
              line-highlight:light-code__line-highlight,
              gutter-cell:light-code__gutter-cell,
              pre:light-code__pre,
              pre-${this.language}:light-code__pre-${this.language},
              code:light-code__code,
              code-${this.language}:light-code__code-${this.language},
              base:light-code__base
            `}
            .lineHighlightStart=${this.topViewableLine}
            .lineHighlightEnd=${this.bottomViewableLine}
            .highlighter=${this.highlighter}
            .disableLineNumbers=${this.disableLineNumbers}
            .preserveWhitespace=${this.preserveWhitespace}
            .highlightLines=${`{${this.hasFocused ? this.currentLineNumber : ""}}`}
            @focus=${() => {
              this.textarea?.focus();
            }}
            @touchstart=${(/** @type {Event} */ e) => {
              // Don't let a user focus on this area.
              this.textarea?.focus();
            }}
            @click=${(/** @type {Event} */ e) => {
              // Don't let a user focus on this area.
              this.textarea?.focus();
            }}
          ></light-code>

          <!-- IMPORTANT! There must be no white-space above. -->
          <textarea
            id="textarea-${language}"
            ${ref(this.textareaChanged)}
            data-code-lang=${language}
            part="textarea textarea-${language}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            minlength=${this.minLength}
            maxlength=${this.maxLength}
            translate="no"
            .defaultValue=${this.defaultValue}
            .value=${this.value}
            ?disabled=${this.disabled}
            ?required=${this.required}
            placeholder=${this.placeholder}
            @keyup=${this.keyupHandler}
            @keydown=${this.keydownHandler}
            @focus=${() => {
              this.hasFocused = true;
              this.syncScroll();
              this.setCurrentLineHighlight();
              this.dispatchEvent(
                new Event("light-focus", { bubbles: true, composed: true }),
              );
            }}
            @blur=${() => {
              this.setAttribute("data-has-interacted", "");
              this.syncScroll();
              this.setCurrentLineHighlight();
              this.dispatchEvent(
                new Event("light-blur", { bubbles: true, composed: true }),
              );
            }}
            @selectionchange=${
              /** @param {Event} e */ (e) => {
                this.syncScroll();
                this.setCurrentLineHighlight();
                this.dispatchEvent(
                  new Event("light-selectionchange", {
                    bubbles: true,
                    composed: true,
                  }),
                );
              }
            }
            @click=${() => {
              this.setCurrentLineHighlight();
            }}
            @touchstart=${() => {
              this.setCurrentLineHighlight();
            }}
            @touchend=${() => {
              this.setCurrentLineHighlight();
            }}
            @pointerdown=${() => {
              this.setCurrentLineHighlight();
            }}
            @pointerup=${() => {
              this.setCurrentLineHighlight();
            }}
            @input=${
              /** @param {Event} e */ (e) => {
                this.value = /** @type {HTMLTextAreaElement} */ (
                  e.currentTarget
                ).value;
                this.setCurrentLineHighlight();
                this.dispatchEvent(
                  new Event("light-input", { bubbles: true, composed: true }),
                );
                this.dispatchEvent(
                  new Event("input", { bubbles: true, composed: true }),
                );
                this.syncScroll();
              }
            }
            @change=${
              /** @param {Event} e */ (e) => {
                this.value = /** @type {HTMLTextAreaElement} */ (
                  e.currentTarget
                ).value;
                this.setCurrentLineHighlight();
                this.syncScroll();
              }
            }
            @scroll=${
              /** @param {Event} e */ (e) => {
                this.setCurrentLineHighlight();
                this.syncScroll();
              }
            }
          ></textarea>
        </div>
        <!-- base-editor -->
      </div>
      <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
    `;
  }

  /**
   * @ignore
   * @param {ResizeObserverEntry[]} entries
   */
  handleTextAreaResize(entries) {
    requestAnimationFrame(() => {
      const { left, right, top, bottom } = entries[0].contentRect;
      const width = left + right;
      const height = top + bottom;

      const textarea = this.textarea
      for (const entry of entries) {
        if (entry.target !== textarea) { return }

        this.textareaHeight = entry.borderBoxSize[0].blockSize
        this.textareaWidth = entry.borderBoxSize[0].inlineSize
      }

      /**
      * Fires whenever the editor resizes, usually due to zoom in / out
      */
      this.dispatchEvent(new LightResizeEvent("light-resize", { height, width }));
      this.syncScroll();
    })
  }

  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  updated(changedProperties) {
    super.updated(changedProperties);

    this.syncScroll();
    setTimeout(() => {
      this.setCurrentLineHighlight()
    });
  }

  get lineHeight () {
    if (!this.__textareaComputedStyle) {
      const textarea = this.textarea
      if (!textarea) { return 24 }
      this.__textareaComputedStyle = getComputedStyle(textarea)
    }
    return Number(this.__textareaComputedStyle?.lineHeight?.split("px")[0]) || 24
  }

  getViewableLines() {
    const textarea = this.shadowRoot?.querySelector("textarea");

    if (!textarea) {
      return { topLine: 0, bottomLine: 0 };
    }

    /** @type {number} */
    let lineHeight = this.lineHeight;

    const visibleLines = Math.ceil((this.textareaHeight || textarea.offsetHeight) / lineHeight) + 3;

    // Because of rounding errors, add 1px to make topLine work when going down via arrow keys.
    const topLine = Math.max(Math.floor((textarea.scrollTop + 1) / lineHeight), 0);
    const bottomLine = Math.ceil(topLine + visibleLines);
    return {
      topLine,
      bottomLine,
    };
  }

  /**
   * Syncs the `<light-code>` element scroll position to the same as the `<textarea>`
   * @param {boolean} [syncCaret=false] - Whether or not to sync the caret. This is generally reserved for right / left arrow keys because the gutter is `position: sticky;`.
   * @internal
   */
  syncScroll(syncCaret = false) {
          // TODO: There's probably a lot of caching we can do here to reduce recomputes.
          const textarea = this.shadowRoot?.querySelector("textarea")

          if (textarea == null) return;

          const viewableLines = this.getViewableLines()
          this.topViewableLine = viewableLines.topLine
          this.bottomViewableLine = viewableLines.bottomLine

          requestAnimationFrame(() => {
            this.__syncScroll = setTimeout(() => {
              if (this.__syncScroll) {
                clearTimeout(this.__syncScroll);
              }

              const lightCode = this.shadowRoot?.querySelector("light-code")
              if (!lightCode) { return }
              const pre = lightCode.shadowRoot?.querySelector("[part~='base']");
              const code = lightCode.shadowRoot?.querySelector("code");
              if (!pre || !code) { return }

              const { top, left } = this.getCaretPosition();

              // const scrollTop = Math.max(textarea.scrollTop, 0)
              code.style.height = `${textarea.scrollHeight}px`

              const { topLine } = this.getViewableLines()
              code.style.top = `${Math.ceil(topLine * this.lineHeight)}px`

              if (syncCaret) {
                if (left < 60) {
                  lightCode.scrollLeft = Math.min(left, lightCode.scrollLeft);
                } else {
                  lightCode.scrollLeft = left;
                }
              }
            }, 10);
        })
  }

  /**
   * @ignore
   * @param {Element | undefined} element
   */
  textareaChanged(element) {
    if (!(element instanceof HTMLTextAreaElement)) {
      return;
    }

    const textarea = element;
    this.textarea = textarea;
    this.formControl = textarea;

    this.textareaResizeObserver = new ResizeObserver((entries) =>
      this.handleTextAreaResize(entries),
    );
    this.textareaResizeObserver.observe(textarea);
  }

  /**
   * @ignore
   * @param {Event} e
   */
  handleSlotChangeEvent(e) {
    // @TODO: Attach mutations observers to update value.
    /**
     * @type {HTMLSlotElement}
     */
    // @ts-expect-error
    const slot = e.target;

    const templates = slot.assignedElements({ flatten: true });

    // We only unescape when passed into templates.
    let code = this.unescapeTags(elementsToString(...templates));

    if (!this.preserveWhitespace) {
      code = dedent(code.trim());
    }

    if (code) {
      this.value = code;
      this.defaultValue = code;
      setTimeout(() => this.textarea?.setSelectionRange(0, 0));
      this.dispatchEvent(
        new Event("light-input", { bubbles: true, composed: true }),
      );
      this.dispatchEvent(
        new Event("light-change", { bubbles: true, composed: true }),
      );
    }
  }

  /**
   * @ignore
   * @param {KeyboardEvent} evt
   */
  keyupHandler(evt) {
    this.setCurrentLineHighlight();
    // setTimeout is needed for Safari which appears to be "slow" to update selection APIs.
    setTimeout(() => this.setCurrentLineHighlight());
  }

  /**
   * @ignore
   * @param {KeyboardEvent} evt
   */
  keydownHandler(evt) {
    this.setCurrentLineHighlight();

    // setTimeout is needed for Safari which appears to be "slow" to update selection APIs.
    setTimeout(() => {
      this.syncScroll(true);
      this.setCurrentLineHighlight()
    });

    if (evt.key.startsWith("Arrow") || evt.key === "Backspace") {
      this.syncScroll(true);
    }

    // Let's not trap focus. For now.
    // if ('Tab' === evt.key) {
    //   evt.preventDefault()
    //   target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
    //   this.value = target.value
    //   return
    // }
  }

  getCaretPosition() {
    /* Inspired by https://github.com/component/textarea-caret-position */
    const beforeCaret = this.shadowRoot?.getElementById("before-caret");
    const afterCaret = this.shadowRoot?.getElementById("after-caret");
    const caret = this.shadowRoot?.getElementById("caret");
    const textarea = this.textarea;

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

    const textLines = this.getLinesToSelectionStart();

    if (!textLines) {
      return fallback;
    }

    const currentLineNumber = textLines.length - 1;
    const beforeCaretText = textLines[currentLineNumber].substring(
      0,
      textarea.selectionStart,
    );
    beforeCaret.textContent = beforeCaretText;

    return {
      top: afterCaret.offsetTop - textarea.scrollTop,
      left: afterCaret.offsetLeft - textarea.scrollLeft,
    };
  }

  setCurrentLineHighlight() {
    const currentLineNumber = this.getCurrentLineNumber();

    if (currentLineNumber != null) {
      this.currentLineNumber = currentLineNumber + 1;
    }
  }

  lines () {
    return this.value.split(newLineRegex);
  }

  getLinesToSelectionStart() {
    const textArea = this.textarea;

    if (!textArea) return;

    const textLines = textArea.value
      .substring(0, textArea.selectionStart)
      .split(newLineRegex);

    return textLines;
  }

  getCurrentLineNumber() {
    const textLines = this.getLinesToSelectionStart();

    if (!textLines) {
      return 0;
    }

    const currentLineNumber = textLines.length - 1;
    // const currentColumnIndex = textLines[textLines.length-1].length;
    // console.log("Current Line Number "+ currentLineNumber+" Current Column Index "+currentColumnIndex );

    return currentLineNumber;
  }

  /**
   * @ignore
   * @param {string} text
   */
  // This gets tricky. We could do this, but it may be unexpected...
  unescapeTags(text) {
    // Replace usages of `&lt;/script>` with `</script>`. Match against
    return text.replaceAll(/&lt;\/([\w\d\.-_]+)>/g, "</$1>");
  }

  /**
   * @ignore
   * Highlighters strip newlines. But you can see new lines in <textarea>, this fixes that.
   * @param {string} text
   */
  injectNewLine(text) {
    // Handle final newlines (see article)
    if (text === "" || text[text.length - 1] === "\n") {
      // If the last character is a newline character
      text += " "; // Add a placeholder space character to the final line
    }

    return text;
  }
}
