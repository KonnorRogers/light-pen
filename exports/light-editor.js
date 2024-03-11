import { html, render } from "lit";

import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { ref } from "lit/directives/ref.js";

import { LitElement } from "lit";
import { BaseElement } from "../internal/base-element.js";
import { baseStyles } from "./base-styles.js";
import { styles } from "./light-editor.styles.js";
import { theme } from "./default-theme.styles.js";
import { dedent } from "../internal/dedent.js";
import { LightResizeEvent } from "./events/light-resize-event.js";
import { repeat } from "lit/directives/repeat.js";
import { elementsToString } from "../internal/elements-to-strings.js";
import { PrismHighlight, prism } from "../internal/prism-highlight.js";
import { LineNumberPlugin } from "../internal/line-number-plugin.js";
import { Token } from "prism-esm";
import { LitTextareaMixin } from "form-associated-helpers/exports/mixins/lit-textarea-mixin.js";
import LightCode from "./light-code.js";

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
  static dependencies = {"light-code": LightCode}

  /**
   * @override
   * Without delegatesFocus, we get this fun message:
   *  "The invalid form control with name=‘editor’ is not focusable."
   */
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * @override
   */
  static styles = [baseStyles, styles, theme];

  /**
   * @override
   */
  static properties = {
    ...LitTextareaMixin.formProperties,
    wrap: { reflect: true, state: false },
    language: { reflect: true },
    disableLineNumbers: { type: Boolean, reflect: true, attribute: "disable-line-numbers" },
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
      type: Number
    }
  }

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
     * @property
     * @type {"soft" | "hard"}
     * If `wrap="soft"`, lines will wrap when they reach the edge of their container. If `wrap="none"`, lines will not wrap instead all the user to scroll horizontally to see more code.
     */
    this.wrap = "soft";

    /**
     * Whether to strip whitespace before first character, and after the last character.
     * @type {boolean}
     */
    this.preserveWhitespace = false;

    /**
     * @type {boolean}
     */
    this.disableLineNumbers = false

    this.currentLineNumber = 1
  }

  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();

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
  __setGutterWidth () {
    // @ts-expect-error
    const gutterWidth = this.shadowRoot?.querySelector("light-code")?.shadowRoot?.querySelector("[part~='gutter']")?.offsetWidth

    if (gutterWidth) {
      this.style.setProperty("--gutter-width", `${gutterWidth}px`)
      return
    }

    this.style.removeProperty("--gutter-width")
  }

  /**
   * @override
   */
  render() {
    const language = this.language;
    this.syncScroll();

    setTimeout(async () => {
      await this.updateComplete
      this.__setGutterWidth()
    })

    return html`
      <div part="base">
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
          <light-code
            tabindex="-1"
            .language=${this.language}
            .code=${this.value}
            .wrap=${this.wrap}
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
            data-code-lang=${language}
            part="textarea textarea-${language}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            minlength=${this.minLength}
            required=${this.required}
            maxlength=${this.maxLength}
            translate="no"
            .defaultValue=${this.defaultValue}
            .value=${this.value}
            ?disabled=${this.disabled}
            placeholder=${this.placeholder}
            ${ref(this.textareaChanged)}
            @keyup=${this.keyupHandler}
            @keydown=${this.keydownHandler}
            @focus=${() => {
              this.hasFocused = true
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
    const { target } = entries[0];
    const { left, right, top, bottom } = entries[0].contentRect;
    const width = left + right;
    const height = top + bottom;

    /**
     * Fires whenever the editor resizes, usually due to zoom in / out
     */
    this.dispatchEvent(new LightResizeEvent("light-resize", { height, width }));
    this.syncScroll();
  }

  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  updated(changedProperties) {
    super.updated(changedProperties);

    this.syncScroll();
    setTimeout(() => this.setCurrentLineHighlight());
  }

  /**
   * Syncs the `<pre>` element scroll position to the same as the `<textarea>`
   * @internal
   */
  syncScroll() {
    /**
     * @type {undefined | null | HTMLTextAreaElement}
     */
    const textarea = this.textarea;

    if (textarea == null) return;

    const lightCode = this.shadowRoot?.querySelector("light-code")?.shadowRoot?.querySelector("[part~='base']");

    if (lightCode) {
      lightCode.scrollTop = textarea.scrollTop;
      lightCode.scrollLeft = textarea.scrollLeft;
    }
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
    setTimeout(() => this.setCurrentLineHighlight());
    // this.textarea

    // Let's not trap focus. For now.
    // if ('Tab' === evt.key) {
    //   evt.preventDefault()
    //   target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
    //   this.value = target.value
    //   return
    // }
  }

  setCurrentLineHighlight() {
    const currentLineNumber = this.getCurrentLineNumber();

    if (currentLineNumber != null) {
      this.currentLineNumber = currentLineNumber + 1;
    }
  }

  /**
   * @ignore
   * Override this to use a highlighter of your choice.
   * @param {{code: string, language: string}} options
   */
  highlightCode(options) {
    let { code, language } = options;

    code = this.injectNewLine(code);
    code = this.unescapeTags(code);

    code = PrismHighlight(code, prism.languages[language], language, {
      afterTokenize: [
        LineNumberPlugin(),
        (env) => {
          const currentToken = env.tokens[this.currentLineNumber];
          if (!currentToken) return;

          if (currentToken instanceof Token) {
            currentToken.type = currentToken.type + " is-active";
          }
        },
      ],
    });

    /** We use this to wrap every line to perform line counting operations. */
    return code;
  }

  getCurrentLineNumber() {
    const textArea = this.textarea;

    if (!textArea) return;

    const textLines = textArea.value
      .substr(0, textArea.selectionStart)
      .split(newLineRegex);
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
