import {
  clamp,
  drag,
  o,
  resizeIcon
} from "/light-pen/bridgetown/static/chunks/chunk-7EEVUFUT.js";
import {
  LightDisclosure
} from "/light-pen/bridgetown/static/chunks/chunk-DBF2DSQP.js";
import {
  LightCode,
  createPrismInstance,
  debounce,
  dedent,
  elementsToString,
  n
} from "/light-pen/bridgetown/static/chunks/chunk-FG3X75B5.js";
import {
  BaseElement,
  baseStyles,
  buttonStyles,
  i,
  x
} from "/light-pen/bridgetown/static/chunks/chunk-VXHTUS4U.js";
import {
  __publicField
} from "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// ../exports/components/light-preview/light-preview.styles.js
var previewStyles = i`
  :host {
    --border-color: lightgray;
  }

  :host,
  [part~="base"] {
    max-width: 100%;
  }

  :host([resizing]) [part=~"base"] {
    cursor: col-resize;
  }

  [part~="base"] {
    border: 1px solid var(--border-color);
    border-radius: 3px;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) repeat(
        3,
        minmax(0, auto)
      );
    height: 100%;
    min-height: inherit;
  }

  [part~="panel-resizer"] {
    display: grid;
    align-content: center;
    border-color: transparent;
    border-radius: 0;
    border-inline-start: 1px solid var(--border-color);
  }

  :host(:not([resize-position="100"])) [part~="panel-resizer"] {
    border-inline-end: 1px solid var(--border-color);
  }

  [part~="preview"] {
    display: grid;
    grid-template-columns:
      minmax(0, var(--start-panel-width, 1fr)) minmax(0, auto)
      minmax(0, var(--end-panel-width, auto));
    overflow: auto;
    resize: vertical;
    min-height: max-content;
    width: 100%;
    max-width: 100%;
  }

  [part~="start-panel"] {
    padding: 1rem;
    min-width: 100%;
    max-width: 100%;
  }

  [part~="end-panel"] {
    background-color: rgba(0, 0, 0, 0.025);
  }

  [part~="code-wrapper"] {
    border-top: 1px solid var(--border-color);
  }

  [part~="actions"] {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-template-columns: minmax(0, auto) minmax(0, 1fr) repeat(
        auto-fill,
        minmax(0, auto)
      );
    grid-template-rows: minmax(0, 1fr);
  }

  button[part~="source-code-toggle"] {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top: 1px solid var(--border-color);
    min-height: 100%;
    font-size: 1em;
    padding: 0.75rem;
  }

  [part~="source-code-toggle"] svg {
    transform-origin: 50% 50%;
    transition: 0.25s transform ease;
  }

  [part~="source-code-toggle"][aria-expanded="true"] svg {
    transform: rotate(180deg);
  }

  [part~="source-details"]::part(summary) {
    display: none;
  }
`;

// ../internal/string-map.js
function stringMap(obj, spacer = " ") {
  let strings = [];
  for (const [key, val] of Object.entries(obj)) {
    if (Boolean(val)) {
      strings.push(key);
    }
  }
  return strings.join(spacer);
}

// ../internal/replace-functions.js
function replaceRange(s, start, end, substitute) {
  return s.substring(0, start) + substitute + s.substring(end);
}
function replaceLast(text, regex) {
  const matches = [...text.matchAll(regex)];
  const lastMatch = matches[matches.length - 1];
  if (!lastMatch) return text;
  if (lastMatch.index == null) return text;
  const { index } = lastMatch;
  const start = index;
  const end = index + lastMatch[0].length;
  const substitution = "</" + lastMatch[1] + ">";
  return replaceRange(text, start, end, substitution);
}

// ../exports/components/light-preview/light-preview.js
var sourceCodeFallback = "Show source code";
var LightPreview = class extends BaseElement {
  constructor() {
    super();
    this.sandboxSettings = "";
    this.summary = sourceCodeFallback;
    this.previewMode = "iframe";
    this.resizing = false;
    this.previewHtml = "";
    this.open = false;
    this.resizePosition = 100;
    this.resizeObserver = new ResizeObserver(
      (entries) => this.handleResize(entries)
    );
    this.__mutationObserverConfig = {
      childList: true,
      subtree: true,
      characterData: true
    };
    this.previewHtmlDebounce = debounce(
      () => this.handleMutation("preview-html"),
      20
    );
    this.codeDebounce = debounce(() => this.handleMutation("code"), 20);
    this.scriptScope = "document";
    this.language = "html";
    this.preserveWhitespace = false;
    this.disableHighlight = false;
    this.highlightLines = "";
    this.insertedLines = "";
    this.deletedLines = "";
    this.disableLineNumbers = false;
    this.lineNumberStart = 1;
    this.code = "";
    this.highlighter = createPrismInstance();
    this.wrap = "soft";
    this.unescapeBehavior = "last";
  }
  /**
   * @internal
   * Reinstalls the mutation on slotted preview-html
   */
  resetIframeCodeMutationObserver() {
    if (this.previewHtmlMutationObserver) {
      this.previewHtmlMutationObserver.disconnect();
    }
    this.previewHtmlMutationObserver = new MutationObserver(
      (..._args) => this.previewHtmlDebounce()
    );
    const targets = this.findSlot("preview-html")?.assignedElements({ flatten: true }) || [];
    for (const target of targets) {
      this.previewHtmlMutationObserver.observe(
        target,
        this.__mutationObserverConfig
      );
    }
  }
  /**
   * @internal
   * Reinstalls the mutation observer on slotted code
   */
  resetCodeMutationObserver() {
    if (this.codeMutationObserver) {
      this.codeMutationObserver.disconnect();
    }
    this.codeMutationObserver = new MutationObserver(
      (..._args) => this.codeDebounce()
    );
    const targets = this.findSlot("code")?.assignedElements({ flatten: true }) || [];
    for (const target of targets) {
      this.codeMutationObserver.observe(target, this.__mutationObserverConfig);
    }
  }
  /**
   * @internal
   * @param {"preview-html" | "code"} variable
   */
  handleMutation(variable) {
    if (variable === "preview-html") {
      this.handleTemplate({ target: this.findSlot("preview-html") });
      return;
    }
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
    const slot = e.target;
    if (slot == null) return;
    const name = slot.getAttribute("name");
    if (["preview-html", "code"].includes(name || "") === false) return;
    let shouldReset = "type" in e && e.type === "slotchange";
    let elements = slot.assignedElements({ flatten: true });
    const code = dedent(elementsToString(...elements).trim());
    if (name === "preview-html") {
      if (shouldReset) this.resetIframeCodeMutationObserver();
      this.previewHtml = code;
      this.requestUpdate("previewHtml");
      return;
    }
    if (name === "code") {
      if (shouldReset) this.resetCodeMutationObserver();
      this.code = code;
      this.requestUpdate("code");
      return;
    }
  }
  /**
   * @internal
   */
  updateIframeContent() {
    const code = this.previewHtml || this.code;
    const iframe = this.shadowRoot?.querySelector("iframe");
    if (!iframe) return;
    const content = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          ${code}
        </body>
      </html>`;
    iframe.srcdoc = content;
  }
  /**
   * @internal
   * @param {string} text
   */
  escapeCharacters(text) {
    return text;
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
   * @override
   * @internal
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate(changedProperties) {
    if (
      /** @type {Array<"previewHtml" | "code">} */
      [
        "previewHtml",
        "code"
      ].some((str) => changedProperties.has(str))
    ) {
      if (this._iframeDebounce != null)
        window.clearTimeout(this._iframeDebounce);
      this._iframeDebounce = setTimeout(() => this.updateIframeContent(), 300);
      if (this.shadowRoot) {
        this.addShadowRootToPreview(this.shadowRoot);
      }
    }
    if (changedProperties.has("resizePosition")) {
      this.updateResizePosition();
    }
    super.willUpdate(changedProperties);
  }
  /**
   * @internal
   * Sets an initial width so we dont need to keep computing getBoundingClientRect
   */
  updateCachedWidth() {
    const { left, right } = this.getBoundingClientRect();
    const width = left + right;
    this.cachedWidth = width;
  }
  /**
   * @internal
   * @param {ResizeObserverEntry[]} entries
   */
  handleResize(entries) {
    const { left, right } = entries[0].contentRect;
    const width = left + right;
    this.cachedWidth = width;
  }
  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    this.updateCachedWidth();
    this.updateComplete.then(() => {
      this.resizeObserver.observe(this);
      this.resetIframeCodeMutationObserver();
      this.resetCodeMutationObserver();
    });
  }
  /**
   * @public
   * Override this function to use your own highlighter
   */
  highlight(code = this.code) {
    return code;
  }
  /**
   * @private
   * @param {HTMLElement | Element | ShadowRoot} root
   */
  addShadowRootToPreview(root) {
    const previewDiv = root.querySelector("[part~='preview-div']");
    if (!previewDiv) return;
    const transformedTags = this.transformTags(this.previewHtml || this.code);
    if (!previewDiv.shadowRoot) {
      previewDiv.attachShadow({ mode: "open" });
    }
    if (!previewDiv.shadowRoot) return;
    previewDiv.shadowRoot.innerHTML = transformedTags;
    function cloneAttributes(target, source) {
      Array.from(source.attributes).forEach((attr) => {
        target.setAttribute(attr.nodeName, attr.nodeValue || "");
      });
    }
    previewDiv.shadowRoot?.querySelectorAll("script").forEach((script) => {
      if (script.type === "module" || script.type.trim() === "" || script.type.includes("javascript")) {
        const newScript = document.createElement("script");
        newScript.innerHTML = script.innerHTML;
        cloneAttributes(newScript, script);
        if (this.scriptScope !== "shadow-dom") {
          script.replaceWith(newScript);
          return;
        }
        script.remove();
        const host = previewDiv;
        const shadowRoot = previewDiv.shadowRoot;
        const scopedEval = (script2) => Function("document", script2).bind(host, shadowRoot, script2)();
        scopedEval(newScript.innerHTML);
      }
    });
  }
  /**
   * @override
   */
  render() {
    const finalHTML = x`
      <div
        part=${stringMap({
      base: true
    })}
      >
        <div part="preview">
          ${n(
      this.previewMode === "shadow-dom",
      () => x`<div part="start-panel preview-div"></div>`,
      () => x`
              <iframe
                part="start-panel iframe"
                height="auto"
                frameborder="0"
                sandbox=${o(
        this.sandboxSettings ? this.sandboxSettings : null
      )}
              ></iframe>
            `
    )}
          <button
            id="panel-resizer"
            part="panel-resizer"
            role="separator"
            aria-valuenow=${this.resizePosition}
            aria-valuemin="0"
            aria-valuemax="100"
            @keydown=${this.handleResizerKeydown}
            @pointerdown=${this.handleDrag}
            @touchstart=${this.handleDrag}
            class=${`light-button ${this.resizing ? "is-active" : ""}`}
          >
            <slot name="resize-icon"> ${resizeIcon} </slot>
          </button>

          <div part="end-panel"></div>
        </div>

        <div part="above-expanded-code">
          <slot name="above-expanded-code"></slot>
        </div>
        <light-disclosure
          id="details"
          ?open=${this.open}
          @light-toggle=${(e) => this.open = /** @type {LightDisclosure} */
    e.currentTarget.open}
          part="source-details"
          aria-labelledby="summary"
          exportparts="
            summary:source-details__summary
          "
        >
          <div part="code-wrapper">
            <light-code
              .preserveWhitespace=${this.preserveWhitespace}
              .language=${this.language}
              .code=${this.transformTags(this.code)}
              wrap=${this.wrap}
              ?disable-highlight=${this.disableHighlight}
              ?disable-line-numbers=${this.disableLineNumbers}
              .highlighter=${this.highlighter}
              .highlightLines=${this.highlightLines}
              .insertedLines=${this.insertedLines}
              .deletedLines=${this.deletedLines}
              .lineNumberStart=${this.lineNumberStart}
            ></light-code>
          </div>
        </light-disclosure>
        <div part="after-expanded-code">
          <slot name="after-expanded-code"></slot>
        </div>
        <div part="actions">
          <div><slot name="before-toggle-button"></slot></div>
          <button
            class="light-button"
            part="source-code-toggle"
            aria-expanded=${this.open}
            aria-controls="details"
            @click=${() => this.open = !this.open}
            type="button"
          >
            <slot name="summary">${this.summary || sourceCodeFallback}</slot>
            <slot name="source-code-toggle-icon">
              <svg
                part="source-code-toggle-icon"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </slot>
          </button>
          <slot name="actions"></slot>
        </div>
        <div part="after-actions"><slot name="after-actions"></slot></div>
      </div>

      <div hidden>
        <slot name="preview-html" @slotchange=${this.handleTemplate}></slot>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;
    return finalHTML;
  }
  /**
   * @internal
   */
  get panelResizer() {
    return this.shadowRoot?.querySelector("[part~='panel-resizer']");
  }
  /** Drag stuff */
  /**
   * @internal
   * @param {PointerEvent} event
   */
  handleDrag(event) {
    if (event.cancelable) {
      event.preventDefault();
    }
    const iframe = this.shadowRoot?.querySelector("iframe");
    if (iframe) {
      iframe.style.pointerEvents = "none";
    }
    this.resizing = true;
    const target = event.currentTarget;
    const halfWidth = (target?.offsetWidth || 0) / 2;
    drag(this, {
      onMove: (x2, _y) => {
        let newPositionInPixels = x2 + halfWidth;
        this.resizePosition = clamp(
          0,
          this.pixelsToPercentage(newPositionInPixels),
          100
        );
        this.updateResizePosition();
        this.resizing = true;
      },
      onStop: () => {
        const iframe2 = this.shadowRoot?.querySelector("iframe");
        if (iframe2) {
          iframe2.style.pointerEvents = "auto";
        }
        this.resizing = false;
      },
      initialEvent: event
    });
  }
  /**
   * @internal
   */
  updateResizePosition(resizePosition = this.resizePosition) {
    const startWidth = resizePosition;
    if (startWidth != null) {
      const endWidth = 100 - startWidth;
      this.style.setProperty(
        "--start-panel-width",
        `clamp(100px, ${startWidth}%, 100%)`
      );
      this.style.setProperty("--end-panel-width", `${endWidth}%`);
    }
  }
  /**
   * @internal
   * @param {KeyboardEvent} event
   */
  handleResizerKeydown(event) {
    if ([
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End"
    ].includes(event.key)) {
      let newPosition = this.resizePosition;
      const incr = (event.shiftKey ? 10 : 1) * 1;
      event.preventDefault();
      if (event.key === "ArrowLeft") {
        newPosition -= incr;
      }
      if (event.key === "ArrowRight") {
        newPosition += incr;
      }
      if (event.key === "Home") {
        newPosition = 100;
      }
      if (event.key === "End") {
        newPosition = 0;
      }
      this.resizePosition = clamp(0, newPosition, 100);
    }
  }
  /**
   * @internal
   * @param {number} pixels
   * @return {number}
   */
  pixelsToPercentage(pixels) {
    return pixels / this.cachedWidth * 100;
  }
};
/**
 * @override
 */
__publicField(LightPreview, "baseName", "light-preview");
/**
 * @override
 */
__publicField(LightPreview, "dependencies", {
  "light-disclosure": LightDisclosure,
  "light-code": LightCode
});
/**
 * @override
 */
__publicField(LightPreview, "styles", [baseStyles, buttonStyles, previewStyles]);
/**
 * @override
 */
__publicField(LightPreview, "properties", {
  summary: {},
  sandboxSettings: { reflect: true, attribute: "sandbox-settings" },
  previewMode: { reflect: true, attribute: "preview-mode" },
  open: { reflect: true, type: Boolean },
  resizePosition: {
    reflect: true,
    type: Number,
    attribute: "resize-position"
  },
  resizing: { reflect: true, type: Boolean },
  scriptScope: { attribute: "script-scope" },
  previewHtml: { attribute: "preview-html" },
  unescapeBehavior: { attribute: "unescape-behavior" },
  // <light-code> properties
  disableHighlight: { type: Boolean, attribute: "disable-highlight" },
  preserveWhitespace: { type: Boolean, attribute: "preserve-whitespace" },
  highlightLines: { attribute: "highlight-lines" },
  insertedLines: { attribute: "inserted-lines" },
  deletedLines: { attribute: "deleted-lines" },
  disableLineNumbers: {
    type: Boolean,
    reflect: true,
    attribute: "disable-line-numbers"
  },
  lineNumberStart: { type: Number, attribute: "line-number-start" },
  wrap: { reflect: true, attribute: "wrap" },
  language: {},
  code: {},
  highlighter: { attribute: false, state: true }
});

export {
  LightPreview
};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-SNQDD4IX.js.map
