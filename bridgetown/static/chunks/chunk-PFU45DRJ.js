import {
  LightEditor
} from "/light-pen/bridgetown/static/chunks/chunk-IKHI7KBS.js";
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
  n
} from "/light-pen/bridgetown/static/chunks/chunk-WZLULRUS.js";
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

// ../exports/components/light-pen/light-pen.styles.js
var styles = i`
  [part~="sandbox-iframe"] {
    width: 100%;
    height: 100%;
    border: 1px solid darkgray;
  }

  [part~="sandbox-editor"] {
    padding: 4px;
  }

  [part~="sandbox-editor"]::part(base):focus-within {
    border-color: dodgerblue;
  }

  [part~="sandbox-editor"]::part(base) {
    resize: vertical;
    border: 2px solid gray;
    border-radius: 8px;
  }

  [part~="sandbox"] {
    color: #272727;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, auto) minmax(0, 1fr);
  }

  [part~="summary"] {
    display: inline-block;
    margin: 6px 0px;
  }

  [part~="disclosure"]::part(summary) {
    margin: 6px 0px;
  }

  [part~="base"] {
    word-wrap: break-word;
    color: inherit;
    font-size: 1em;
  }

  [part~="details"] {
    padding: 4px;
  }

  [part~="details"]:not(:first-child) {
  }

  [part~="sandbox"],
  [part~="base"] {
    height: 100%;
  }

  [part~="sandbox-iframe"] {
    aspect-ratio: auto;
    background-color: #fff;
    margin-bottom: 0;
  }

  [part~="base"],
  [part~="pre"],
  [part~="code"],
  [part~="sandbox-iframe"] {
    border-radius: 0.25rem;
  }

  [part~="sandbox-header"],
  [part~="sandbox-console"],
  [part~="sandbox-console-result"] {
    background-color: #343d4d;
    color: #fff;
  }

  [part~="sandbox-header"] {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8125em;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  [part~="sandbox-console"],
  [part~="sandbox-content"] {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    background-color: #e5e5e5;
  }

  [part~="sandbox-controls"] button {
    margin-bottom: 0;
  }

  [part~="sandbox-console-log"] {
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 0.875em;
    min-height: 1.2em;
  }

  .log-warn {
    color: #f9d767;
  }

  .log-error {
    color: #f9c8c8;
  }

  [part~="sandbox-header"],
  [part~="sandbox-code"],
  [part~="sandbox-iframe-wrapper"],
  [part~="sandbox-console"],
  [part~="sandbox-console-result"] {
    padding: 0.5em;
  }

  [part~="sandbox-code"] {
    max-height: 100%;
    overflow-y: auto;
  }

  [part~="sandbox-code"] > *:not(:first-child) {
    margin-top: 6px;
  }

  button[part~="panel-resizer"] {
    height: calc(100% - 0.5em);
    cursor: col-resize;
    background-color: white;
  }

  button[part~="panel-resizer"]:is(:active, :hover, .is-active) {
    cursor: col-resize;
  }

  [resizing],
  [part~="panel-resizer"].is-active {
    cursor: col-resize;
  }

  [part~="sandbox-content"] {
    display: grid;
    grid-template-columns:
      minmax(var(--start-panel-min-width, 30px), var(--start-panel-width, 1fr))
      minmax(0, auto) minmax(var(--end-panel-min-width, 30px), var(--end-panel-width, 1fr));
    grid-template-rows: minmax(0, 1fr);
  }

  [part~="sandbox-console-result"] {
    border-top: 1px solid #1f252f;
    border-bottom-left-radius: 0;
  }
`;

// ../exports/components/light-pen/light-pen.js
var LightPen = class extends BaseElement {
  // Overrides
  /**
   * @override
   */
  constructor() {
    super();
    this.resizeObserver = new ResizeObserver(
      (entries) => this.handleResize(entries)
    );
    this.resizePosition = 50;
    this.openLanguages = "";
    this.languages = ["html", "css", "js"];
    this.console = "disabled";
    this.consoleText = "";
    this.cachedWidth = 0;
    this.sandboxSettings = "";
    this._resizing = false;
    this.cssCode = "";
    this.htmlCode = "";
    this.jsCode = "";
    this.preserveWhitespace = false;
  }
  /**
   * @type {undefined | null | LightEditor}
   */
  get jsEditor() {
    return this.shadowRoot?.querySelector("#editor-js");
  }
  /**
   * @type {undefined | null | LightEditor}
   */
  get cssEditor() {
    return this.shadowRoot?.querySelector("#editor-css");
  }
  /**
   * @type {undefined | null | LightEditor}
   */
  get htmlEditor() {
    return this.shadowRoot?.querySelector("#editor-html");
  }
  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    this.updateCachedWidth();
    this.updateComplete.then(() => {
      this.resizeObserver.observe(this);
    });
  }
  /**
   * Sets an initial width so we dont need to keep computing getBoundingClientRect
   */
  updateCachedWidth() {
    const { left, right } = this.getBoundingClientRect();
    const width = left + right;
    this.cachedWidth = width;
  }
  /**
   * @param {ResizeObserverEntry[]} entries
   */
  handleResize(entries) {
    const { left, right } = entries[0].contentRect;
    const width = left + right;
    this.cachedWidth = width;
  }
  /** Getters / Setters */
  /**
   * @returns {null | undefined | HTMLIFrameElement}
   */
  get iframeElem() {
    return this.shadowRoot?.querySelector("iframe");
  }
  updateIframeContent() {
    const iframeElem = this.iframeElem;
    if (iframeElem == null) return;
    let page = `
      <!doctype html><html>
        <head><meta charset="utf-8">
          <style>${this.cssCode}</style>
        </head>
        <body>
          ${this.htmlCode}
          <script type="module">
            ${this.jsCode}
          <\/script>
        </body>
      </html>
    `;
    iframeElem.srcdoc = page;
  }
  /**
   * @override
   * @param {import("lit").PropertyValues} changedProperties
   */
  willUpdate(changedProperties) {
    if (["cssCode", "htmlCode", "jsCode"].some(
      (str) => changedProperties.has(str)
    )) {
      if (this._iframeDebounce != null)
        window.clearTimeout(this._iframeDebounce);
      this._iframeDebounce = setTimeout(() => this.updateIframeContent(), 300);
    }
    if (changedProperties.has("resizePosition")) {
      this.updateResizePosition();
    }
    super.willUpdate(changedProperties);
  }
  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.disconnect();
  }
  /**
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
      this.resizePosition = clamp(newPosition, 0, 100);
    }
  }
  updateResizePosition(resizePosition = this.resizePosition) {
    const startWidth = resizePosition;
    if (startWidth != null) {
      const endWidth = 100 - startWidth;
      this.style.setProperty("--start-panel-width", `${startWidth}%`);
      this.style.setProperty("--end-panel-width", `${endWidth}%`);
    }
  }
  resetValues() {
    this.htmlCode = this.htmlEditor?.getAttribute("value") || "";
    this.cssCode = this.cssEditor?.getAttribute("value") || "";
    this.jsCode = this.jsEditor?.getAttribute("value") || "";
    this.requestUpdate();
  }
  // setupIframeLogging() {
  //   if (!this.console && this.result !== 'console') return;
  //
  //   if (this.iframeElem == null) return
  //   if (this.iframeElem.contentWindow == null) return
  //
  //   this.iframeElem.contentWindow.document.open(),
  //   this.iframeElem.contentWindow.document.writeln(
  //     '<script>\n\t\t\t\tlet __console = Object.assign({}, console);\n\t\t\t\tlet __listener = function () {};\n\t\t\t\tfor (let type in console) {\n\t\t\t\t\tconsole[type] = function (...msg) {\n\t\t\t\t\t\t__listener({source: \'iframe\', msg, type}, \'*\');\n\t\t\t\t\t\t__console[type](...msg);\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t\tconsole.listen = function (callback) {\n\t\t\t\t\t__listener = callback;\n\t\t\t\t};\n\t\t\t<\/script>'
  //   ),
  //   this.iframeElem.contentWindow.document.close();
  //   let e = this;
  //
  //
  //   // @ts-expect-error
  //   this.iframeElem.contentWindow.console.listen(
  //     function (t) {
  //       for (let n of t.msg) {
  //         let a = document.createElement('div');
  //         a.className = `log-${ t.type }`,
  //         a.textContent = this.getConsoleMessage(),
  //         e.loggerElem?.append(a)
  //       }
  //     }
  //   )
  // }
  // Rendering
  renderConsole() {
    return x`<div part="sandbox-console-log"></div>`;
  }
  /**
   * @override
   */
  render() {
    return x` <!-- Where users can declaratively provide templates -->
      <div part="base" ?resizing=${this._resizing}>
        <div part="sandbox">
          <div part="sandbox-header">
            <slot name="title">
              <strong> Code Editor </strong>
            </slot>

            <span part="sandbox-controls">
              <button
                class="light-button"
                part="sandbox-controls-button sandbox-reset"
                @click=${this.resetValues}
              >
                Reset
              </button>

              ${n(
      this.console === "enabled",
      () => x`<button @click="{}">Clear Console</button>`
    )}
            </span>
          </div>
          <div part="sandbox-content">
            <div part="sandbox-code">
              ${this.renderDetails("html")} ${this.renderDetails("css")}
              ${this.renderDetails("js")}
            </div>

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
              class=${`light-button ${this._resizing ? `is-active` : ""}`}
            >
              <slot name="panel-resize-icon"> ${resizeIcon} </slot>
              <span class="visually-hidden"
                >Resize Panel. Pull to left or right to resize.</span
              >
            </button>

            <div part="sandbox-iframe-wrapper">
              <iframe
                part="sandbox-iframe"
                frameborder="0"
                sandbox=${o(
      this.sandboxSettings ? this.sandboxSettings : null
    )}
              ></iframe>
            </div>
          </div>

          <!--
        ${n(
      this.console === "enabled",
      () => x`
              <details class="sandbox-console" ?open=${console}>
                <summary part="summary summary-console" tabindex="0">
                  Console
                </summary>
                ${this.consoleText}
              </details>
            `
    )}
        -->
        </div>
      </div>`;
  }
  /**
   * @param {PointerEvent} event
   */
  handleDrag(event) {
    if (event.cancelable) {
      event.preventDefault();
    }
    if (this.iframeElem) {
      this.iframeElem.style.pointerEvents = "none";
    }
    this._resizing = true;
    drag(this, {
      onMove: (x2, _y) => {
        this._resizing = true;
        let newPositionInPixels = x2;
        this.resizePosition = clamp(
          0,
          this.pixelsToPercentage(newPositionInPixels),
          100
        );
        this.updateResizePosition();
      },
      onStop: () => {
        if (this.iframeElem) {
          this.iframeElem.style.pointerEvents = "auto";
        }
        this._resizing = false;
      },
      initialEvent: event
    });
  }
  /**
   * @internal
   * @param {number} pixels
   * @return {number}
   */
  pixelsToPercentage(pixels) {
    return pixels / this.cachedWidth * 100;
  }
  /**
   * @internal
   * @param {SupportedLanguages} language
   */
  renderEditor(language) {
    return x`
      <light-editor
        id=${`editor-${language}`}
        part=${`sandbox-editor sandbox-editor--${language}`}
        exportparts="
          base:sandbox-editor__base,
          pre:sandbox-editor__pre,
          code:sandbox-editor__code,
          textarea:sandbox-editor__textarea
        "
        language=${language}
        .value=${this[`${language}Code`]}
        ?preserve-whitespace=${this.preserveWhitespace}
        @light-value-change=${(e) => {
      this[`${language}Code`] = /** @type {LightEditor} */
      e.currentTarget.value;
    }}
        ><slot name=${language}></slot
      ></light-editor>
    `;
  }
  /**
   * @internal
   * @param {SupportedLanguages} language
   */
  renderDetails(language) {
    let fullLanguage = language.toUpperCase();
    return x`
      <light-disclosure part="disclosure disclosure-${language}">
        <span part="summary" slot="summary"
          ><slot name=${`summary-${language}`}>${fullLanguage}</slot></span
        >

        ${this.renderEditor(language)}
      </light-disclosure>
    `;
  }
};
// Static
/**
 * @override
 */
__publicField(LightPen, "baseName", "light-pen");
/**
 * @override
 */
__publicField(LightPen, "styles", [baseStyles, buttonStyles, styles]);
/**
 * @override
 */
__publicField(LightPen, "dependencies", {
  "light-editor": LightEditor,
  "light-disclosure": LightDisclosure
});
/**
 * @override
 */
__publicField(LightPen, "properties", {
  openLanguages: { reflect: true, attribute: "open-languages" },
  resizePosition: {
    attribute: "resize-position",
    reflect: true,
    type: Number
  },
  preserveWhitespace: {
    attribute: "preserve-whitespace",
    type: Boolean,
    reflect: true
  },
  console: { reflect: true },
  sandboxSettings: { reflect: true, attribute: "sandbox-settings" },
  languages: { attribute: false, type: Array },
  cssCode: { attribute: false },
  htmlCode: { attribute: false },
  jsCode: { attribute: false },
  // cssResetCode: { attribute: false },
  // htmlResetCode: { attribute: false },
  // jsResetCode: { attribute: false },
  htmlResizeObserver: { attribute: false },
  jsResizeObserver: { attribute: false },
  cssResizeObserver: { attribute: false },
  _resizing: { attribute: false }
});

export {
  LightPen
};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-PFU45DRJ.js.map
