import { H as HighlightJS, j as javascript, x as xml, c as css, D as DefineableMixin, b as baseStyles, k as buttonStyles, a as theme, l as i, d as dedent, f as x, g as defaultSandboxSettings, n, h as s, o } from './default-sandbox-settings-3aad984d.js';

// Then register the languages you need
HighlightJS.registerLanguage('javascript', javascript);
HighlightJS.registerLanguage('xml', xml);
HighlightJS.registerLanguage('css', css);

const sourceCodeFallback = "Show source code";

/**
 * LightSample is a very lightweight code block editor designed to load your code sample
 *   inside of an iFrame for encapsulated viewing
 */
class LightBlock extends DefineableMixin(s) {
  static baseName = "light-block"

  static styles = [
    baseStyles,
    buttonStyles,
    theme,
    i`
      :host,
      [part~="base"] {
        max-width: 100%;
      }

      [part~="base"] {
        border: 1px solid gray;
        border-radius: 8px;
      }

      [part~="preview"] {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, auto);
      }

      iframe {
        height: 100%;
        width: 100%;
      }

      [part~="pre"] {
        padding: 1rem;
        margin: 0;
      }

      [part~="pre"],
      [part~="code"] {
	      color: #272727;
	      background-color: #f7f7f7;
      }

      [part~="actions"] {
        display: grid;
        align-items: center;
        grid-auto-flow: column;
        grid-template-columns: minmax(0, 1fr) repeat(auto-fill, minmax(0, auto));
      }

      button[part~="source-code-toggle"] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0px;
        border-top-radius-radius: 0px;
      }

      [part~="source-code-toggle"][aria-expanded="true"] svg {
        transform: rotate(180deg);
      }

    `
  ]

  /**
   * @param {Event} e
   */
  handleCode (e) {
    /**
     * @type {HTMLSlotElement}
     */
    // @ts-expect-error
    const slot = e.target;

    const templates = slot.assignedElements({flatten: true});

    const code = templates.map((template) => template.innerHTML).join("\n");

    this.code = code;
  }

  /**
   * @param {Event} e
   */
  handleTemplate (e) {
    /**
     * @type {HTMLSlotElement}
     */
    // @ts-expect-error
    const slot = e.target;

    const name = slot.getAttribute("name");

    if (["iframe-code", "code"].includes(name || "") === false) return

    const templates = slot.assignedElements({flatten: true});

    const code = templates.map((template) => template.innerHTML).join("\n");

    if (name === "iframe-code") {
      this.iframeCode = code;
      return
    }

    if (name === "code") {
      this.code = code;
      return
    }
  }

  updateIframeContent () {
    let iframe = this.shadowRoot?.querySelector("iframe");

    if (iframe == null) return

    const clone = iframe.cloneNode(true);
    iframe.replaceWith(clone);

    /**
     * @type {HTMLIFrameElement}
     */
    // @ts-expect-error
    iframe = clone;

    if (iframe?.contentWindow == null) return;

    const code = this.unescapeCharacters(this.code);


    const prevBlobUrl = this.blobUrl;

    const blob = new Blob([code], { type: "text/html" });
    const blobUrl = URL.createObjectURL(blob);

    this.blobUrl = blobUrl;

    if (iframe) {
	    iframe.src = blobUrl;
	  }

    if (prevBlobUrl) {
      setTimeout(() => {
        URL.revokeObjectURL(prevBlobUrl);
      }, 300);
    }
  }

  /**
   * @param {string} text
   */
  escapeCharacters(text) {
    return text.replaceAll(new RegExp("<", "g"), "&lt;").replaceAll(new RegExp(">", "g"), "&gt;")
  }


  /**
   * @param {string} text
   */
  unescapeCharacters (text) {
    // Update code
    return text.replaceAll("&lt;/script>", "</script>")
  }

  /**
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate (changedProperties) {
    if (["iframeCode", "code"].some((str) => changedProperties.has(str))) {
      if (this._iframeDebounce != null) window.clearTimeout(this._iframeDebounce);
      this._iframeDebounce = setTimeout(() => this.updateIframeContent(), 300);
    }

    super.willUpdate(changedProperties);
  }
  static properties = {
    summary: {},
    sandboxSettings: { reflect: true, attribute: "sandbox-settings" },
    codeLanguage: { reflect: true, attribute: "code-language" },
    highlightLanguage: { reflect: true, attribute: "highlight-language" },
    disablePreview: { type: Boolean, attribute: "disable-preview" },
    disableHighlight: { type: Boolean, attribute: "disable-highlight" },
    open: { reflect: true, type: Boolean },

    // State
    code: { state: true },
    iframeCode: { state: true },
  }

  constructor () {
    super();

    this.sandboxSettings = "";

    this.summary = sourceCodeFallback;
    this.codeLanguage = "html";
    this.highlightLanguage = "xml";
    this.disablePreview = false;
    this.disableHighlight = false;

    /**
     * We will take the code, wrap it in `<pre><code></code></pre>` and run it through
     * Highlight.js.
     * If the element has `disableHighlight`, we will not touch their code. Instead they must pass in escapedHTML.
     */
    this.code = "";

    /**
     * If `disableHighlight` is true, then you must pass in an element into `iframeCode` to be able to get
     *   the code to run in the previewer.
     */
    this.iframeCode = "";

    /**
     * @property
     * @type {boolean}
     */
    this.open = false;
  }

  highlight (code = this.code) {
    return HighlightJS.highlight(dedent(this.unescapeCharacters(code)), {language: this.highlightLanguage || this.codeLanguage}).value
  }

  render () {
    const language = this.highlightLanguage || this.codeLanguage;
    return x`
      <div part="base">
        <div part="preview" ?hidden=${this.disablePreview}>
          <iframe part="iframe" frameborder="0" sandbox=${this.sandboxSettings || defaultSandboxSettings}>
          </iframe>
          <button part="resizer"></button>
        </div>

        <details ?open=${this.open} part="source-details" aria-labelledby="summary">
          <summary style="display: none;"></summary>
          <div part="code">
            ${n(this.highlight,
              () => x`
					      <pre
                  id="pre-${language}"
                  data-code-lang=${language}
                  aria-hidden="true"
                  part="pre pre-${language}"
                  tabindex="0"
                  aria-labelledby="source-code-label"
                  role="region"
                ><code
                    part="code code-${language}"
                    class="language-${language}"
                  >${o(this.highlight())}</code></pre>`,
              () => x`${o(this.code)}`
            )}
          </div>
        </details>

        <div part="actions">
          <button part="source-code-toggle" aria-expanded=${this.open} @click=${() => this.open = !this.open} type="button">
            <slot name="summary">${this.summary || sourceCodeFallback}</slot>
            <slot name="source-code-toggle__icon">
              <svg viewBox="0 0 24 24" height="24" width="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </slot>
          </button>
        </div>
      </div>

      <div hidden>
        <slot name="iframe-code" @slotchange=${this.handleCode}></slot>
        <slot name="code" @slotchange=${this.handleCode}></slot>
      </div>

      <span class="visually-hidden">Preview source code</span>
    `
  }

}

export { LightBlock as default };
