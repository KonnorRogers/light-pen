import { i, t, e as e$1, A, H as HighlightJS, j as javascript, x as xml, c as css, D as DefineableMixin, b as baseStyles, a as theme, s as styles, d as clamp, f as dedent, g as x, n as n$2, h as defaultSandboxSettings, k as drag, o as o$1, l as s$1 } from './default-sandbox-settings-d8f2a10a.js';

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return !1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),s(i,t);return !0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===(null==e?void 0:e.size))},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),l(t);}};function n$1(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i;}function h$1(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o(r[i]);else null!=r&&(s(r,!1),o(r));else s(this,i);}const l=i=>{var t$1,s,o,r;i.type==t.CHILD&&(null!==(t$1=(o=i)._$AP)&&void 0!==t$1||(o._$AP=h$1),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=n$1));};class c extends i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(s(this,i),o(this));}setValue(t){if(e(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

const h=new WeakMap,n=e$1(class extends c{render(t){return A}update(t,[s]){var e;const o=s!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=s,this.dt=null===(e=t.options)||void 0===e?void 0:e.host,this.ot(this.lt=t.element)),A}ot(i){var t;if("function"==typeof this.G){const s=null!==(t=this.dt)&&void 0!==t?t:globalThis;let e=h.get(s);void 0===e&&(e=new WeakMap,h.set(s,e)),void 0!==e.get(this.G)&&this.G.call(this.dt,void 0),e.set(this.G,i),void 0!==i&&this.G.call(this.dt,i);}else this.G.value=i;}get rt(){var i,t,s;return "function"==typeof this.G?null===(t=h.get(null!==(i=this.dt)&&void 0!==i?i:globalThis))||void 0===t?void 0:t.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0);}reconnected(){this.ot(this.lt);}});

// @ts-check

// Then register the languages you need
HighlightJS.registerLanguage('javascript', javascript);
HighlightJS.registerLanguage('xml', xml);
HighlightJS.registerLanguage('css', css);

/**
 * @typedef {"html" | "css" | "js"} SupportedLanguages
 * @typedef {HTMLTextAreaElement | HTMLScriptElement | HTMLTemplateElement} SafeTemplateElements
 */


/**
 * @customElement
 * @tagName lit-pen
 * @slot html - HTML to insert
 * @slot css - CSS to insert
 * @slot js - JavaScript to insert
 * @slot title - The title to appear at the top of the editor
 *
 */
class LightPen extends DefineableMixin(s$1) {
  // Static
  static baseName = "light-pen"

  static styles = [baseStyles, theme, styles]

  static languageMap = {
    html: "xml",
    css: "css",
    js: "javascript"
  }

  static properties = {
    openLanguages: { reflect: true, attribute: "open-languages" },
    resizePosition: { attribute: "resize-position", reflect: true, type: Number },
    console: { reflect: true },
    sandboxSettings: { reflect: true, attribute: "sandbox-settings"},
    languages: { state: true, type: Array },
    cssCode: { state: true },
    htmlCode: { state: true },
    jsCode: { state: true },
    htmlResizeObserver: { state: true },
    jsResizeObserver: { state: true },
    cssResizeObserver: { state: true }
  }
  // Overrides

  /**
   * @override
   */
  constructor() {
    super();

    /**
     * @prop
     * @type {ResizeObserver}
     */
    this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));

    this.htmlResizeObserver = new ResizeObserver((entries) => this.handleTextAreaResize(entries));
    this.jsResizeObserver = new ResizeObserver((entries) => this.handleTextAreaResize(entries));
    this.cssResizeObserver = new ResizeObserver((entries) => this.handleTextAreaResize(entries));

    /**
     * @attr
     * @reflect
     * @type {number}
     */
    this.resizePosition = 50;

    /**
     * Languages to have open on initial render
     * Comma separated list of elements to open on initial render "html,css,js" to open all.
     * @reflect
     * @type {string}
     */
    this.openLanguages = "";

    /**
     * @type {Array<SupportedLanguages>}
     */
    this.languages = ["html", "css", "js"];

    /**
     * @reflect
     * @type {"console" | "iframe"}
     */
    this.result = this.getAttribute('result') === "console" ? 'console' : 'iframe',

    /**
     * @property
     * @type {"enabled" | "disabled"}
     */
    this.console = "disabled";

    /**
     * @property
     * @type {string}
     */
    this.consoleText = "";

    /**
     * @property
     * @type {string}
     */
    this.htmlReset = "";

    /**
     * @property
     * @type {string}
     */
    this.cssReset = "";

    /**
     * @property
     * @type {string}
     */
    this.jsReset = "";

    /**
     * @property
     * @type {number}
     */
    this.cachedWidth = 0;

    /**
     * @property
     * @type {string}
     */
    this.sandboxSettings = "";

  }

  /**
   * @override
   */
  connectedCallback () {
    super.connectedCallback();

    this.updateCachedWidth();

    this.updateComplete.then(() => {
      this.resizeObserver.observe(this);

      /**
       * Grab reset values so we can reset the inputs
       */
      this.htmlReset = this.htmlTextArea?.value || "";
      this.cssReset = this.cssTextArea?.value || "";
      this.jsReset = this.jsTextArea?.value || "";
    });
  }

  /**
   * @param {ResizeObserverEntry[]} entries
   */
  handleTextAreaResize (entries) {
    const { target } = entries[0];
    const {
      // left, right,
      top, bottom
    } = entries[0].contentRect;
    // const width = left + right
    const height = top + bottom;

    // @ts-expect-error
    target.parentElement.style.setProperty("--textarea-height", `${height}px`);

    // One day we'll allow the textarea to resize the width.
    // target.parentElement.style.setProperty("--textarea-width", `${width}px`)
  }

  /**
   * Sets an initial width so we dont need to keep computing getBoundingClientRect
   */
  updateCachedWidth () {
    const { left, right } = this.getBoundingClientRect();
    const width = left + right;
    this.cachedWidth = width;
  }

  /**
   * @param {ResizeObserverEntry[]} entries
   */
  handleResize (entries) {
    const { left, right } = entries[0].contentRect;

    const width = left + right;
    // Resize when a primary panel is set
    this.cachedWidth = width;
  }

  /** Getters / Setters */

  /**
   * @returns {null | undefined | HTMLIFrameElement}
   */
  get iframeElem () {
    return this.shadowRoot?.querySelector("iframe")
  }

  /**
   * Override this to use a highlighter of your choice.
   * @param {{code: string, language: SupportedLanguages}} options
   */
  highlightCode ({ code, language }) {
    const highlightJsLanguage = /** @type {typeof LightPen} */ (this.constructor).languageMap[language];

    code = this.unescapeCharacters(code);
    code = this.injectNewLine(code);

    return HighlightJS.highlight(code, {language: highlightJsLanguage}).value
  }

  /**
   * @param {string} text
   */
  unescapeCharacters (text) {
    // Update code
    return text.replaceAll("&lt;/script>", "</script>")
  }

  /**
   * Highlighters strip newlines. But you can see new lines in <textarea>, this fixes that.
   * @param {string} text
   */
  injectNewLine (text) {
    // Handle final newlines (see article)
    if(text[text.length-1] == "\n") { // If the last character is a newline character
      text += "\n"; // Add a placeholder space character to the final line
    }

    return text
  }

  updateIframeContent () {
    if (this.iframeElem == null) return

    let clone = this.iframeElem.cloneNode();
    this.iframeElem.replaceWith(clone);

    // this.setupIframeLogging();

    if (this.iframeElem.contentWindow == null) return;


    let page = `
      <!doctype html><html>
        <head><meta charset="utf-8">
          <style>${this.cssCode}<\/style>
          <base href="${document.baseURI}">
        </head>
        <body>
          ${this.htmlCode}
          <script type="module">
            ${this.jsCode}
          </script>
        </body>
      </html>
    `;

    const iframe = this.shadowRoot?.querySelector("iframe");
    if (iframe) {
      const prevBlobUrl = this.blobUrl;

      const blob = new Blob([page], { type: "text/html" });
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
  }

  inputHandler () {
    this.updateCode();
  }

  /**
   * @param {import("lit").PropertyValues} changedProperties
   */
  willUpdate (changedProperties) {
    if (this.languages.some((str) => changedProperties.has(str + "Code"))) {
      if (this._iframeDebounce != null) window.clearTimeout(this._iframeDebounce);
      this._iframeDebounce = setTimeout(() => this.updateIframeContent(), 300);
    }

    if (changedProperties.has("resizePosition")) {
      this.updateResizePosition();
    }

    super.willUpdate(changedProperties);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.htmlTextArea && this.htmlResizeObserver.disconnect();
    this.cssTextArea && this.cssResizeObserver.disconnect();
    this.jsTextArea && this.jsResizeObserver.disconnect();
  }

  /**
   * @param {HTMLTextAreaElement} textarea
   */
  htmlTextAreaChanged (textarea) {
    if (!textarea) return
    this.htmlTextArea = textarea;
    this.htmlResizeObserver.observe(textarea);
  }

  /**
   * @param {HTMLTextAreaElement} textarea
   */
  cssTextAreaChanged (textarea) {
    if (!textarea) return
    this.cssTextArea = textarea;
    this.cssResizeObserver.observe(textarea);
  }

  /**
   * @param {HTMLTextAreaElement} textarea
   */
  jsTextAreaChanged (textarea) {
    if (!textarea) return
    this.jsTextArea = textarea;
    this.jsResizeObserver.observe(textarea);
  }

  /**
   * @param {KeyboardEvent} event
   */
  handleResizerKeydown (event) {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      let newPosition = this.resizePosition;
      const incr = (event.shiftKey ? 10 : 1) * (1);

      event.preventDefault();

      if (event.key === 'ArrowLeft') {
        newPosition -= incr;
      }

      if (event.key === 'ArrowRight') {
        newPosition += incr;
      }

      if (event.key === 'Home') {
        newPosition = 100;
      }

      if (event.key === 'End') {
        newPosition = 0;
      }

      this.resizePosition = clamp(newPosition, 0, 100);
    }
  }

  updateResizePosition (resizePosition = this.resizePosition) {
    const startWidth = resizePosition;

    if (startWidth != null) {
      const endWidth = 100 - startWidth;
      this.style.setProperty("--start-panel-width", `${startWidth}%`);
      this.style.setProperty("--end-panel-width", `${endWidth}%`);
    }
  }


  /**
   * Lovely helper to scoop up our html, css, and js code
   */
  updateCode () {
    this.cssCode = this.cssTextArea?.value;
    this.htmlCode = this.htmlTextArea?.value;
    this.jsCode = this.jsTextArea?.value;
  }

  resetValues () {
    if (this.htmlTextArea) {
      this.htmlCode = this.htmlReset;
      this.htmlTextArea.value = this.htmlReset;
    }

    if (this.cssTextArea) {
      this.cssCode = this.cssReset;
      this.cssTextArea.value = this.cssReset;
    }

    if (this.jsTextArea) {
      this.jsCode = this.jsReset;
      this.jsTextArea.value = this.jsReset;
    }
  }

  /**
   * @param {KeyboardEvent} evt
   */
  keydownHandler(evt) {
    /**
     * @type {HTMLTextAreaElement}
     */
    // @ts-expect-error
    const target = evt.target;

    const key = evt.key;

    if (["Tab", "Escape"].includes(key)) {
      evt.preventDefault();

      if ('Tab' === evt.key) {
        return target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
      }

      if ('Escape' === evt.key) {
        let e = target.closest('details');
        if (!e) return;

        e.querySelector("summary")?.focus();
      }
    }
  }

  // setupIframeLogging() {
  //   if (!this.console && this.result !== 'console') return;
  //
  //   if (this.iframeElem == null) return
  //   if (this.iframeElem.contentWindow == null) return
  //
  //   this.iframeElem.contentWindow.document.open(),
  //   this.iframeElem.contentWindow.document.writeln(
  //     '<script>\n\t\t\t\tlet __console = Object.assign({}, console);\n\t\t\t\tlet __listener = function () {};\n\t\t\t\tfor (let type in console) {\n\t\t\t\t\tconsole[type] = function (...msg) {\n\t\t\t\t\t\t__listener({source: \'iframe\', msg, type}, \'*\');\n\t\t\t\t\t\t__console[type](...msg);\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t\tconsole.listen = function (callback) {\n\t\t\t\t\t__listener = callback;\n\t\t\t\t};\n\t\t\t</script>'
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

  /**
   * @param {Event} e
   */
  handleTemplate (e) {
    /**
     * @type {HTMLSlotElement}
     */
    // @ts-expect-error
    const slot = e.target;

    const slotName = slot.getAttribute("name");
    if (slotName == null) return

    if (!this.languages.includes(/** @type {SupportedLanguages} */ (slotName))) {
      return
    }

    const codeType = /** @type {SupportedLanguages} */ (slotName);

    const templates = slot.assignedElements({flatten: true});

    const code = dedent(this.unescapeCharacters(templates.map((template) => template.innerHTML).join("\n")));

    this[`${codeType}Code`] = code;

    const textArea = this[`${codeType}TextArea`];

    if (textArea && code) {
      textArea.value = code;
    }
  }

  // Rendering
  renderConsole () {
    return x`<div part="sandbox-console-log"></div>`
  }

  /**
   * @override
   */
  render () {
		return x`
      <!-- Where users can declaratively provide templates -->
      <div style="display: none;">
        <slot name="html" @slotchange=${this.handleTemplate}></slot>
        <slot name="css" @slotchange=${this.handleTemplate}></slot>
        <slot name="js" @slotchange=${this.handleTemplate}></slot>
      </div>

      <div part="base">
			  <div part="sandbox">
				  <div part="sandbox-header">
            <slot name="title">
					    <strong>
                Code Editor
              </strong>
            </slot>

					  <span part="sandbox-controls">
						  <button part="sandbox-controls-button sandbox-reset" @click=${this.resetValues}>
                Reset
              </button>

						  ${n$2(this.console === "enabled", () => x`<button @click={}>Clear Console</button>`)}
					  </span>
				</div>
				<div part="sandbox-content">
					<div part="sandbox-code">
            ${this.renderDetails('html')}
            ${this.renderDetails('css')}
            ${this.renderDetails('js')}
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
          >
            <slot name="panel-resize"></slot>
            <span class="visually-hidden">Resize Panel. Pull to left or right to resize.</span>
          </button>

					<div part="sandbox-iframe-wrapper">
						<iframe
              sandbox=${this.sandboxSettings || defaultSandboxSettings}
              part="sandbox-iframe"
              frameborder="0"
             ></iframe>
					</div>
				</div>

        <!--
        ${n$2(
            this.console === "enabled",
            () => x`
              <details class="sandbox-console" ?open=${console}>
                <summary part="summary summary-console" tabindex="0">Console</summary>
                ${this.consoleText}
              </details>
            `
        )}
        -->
			</div>
		</div>`
	}

  /**
   * @param {PointerEvent} event
   */
	handleDrag (event) {
    // Prevent text selection when dragging
    if (event.cancelable) {
      event.preventDefault();
    }

    if (this.iframeElem) {
      // We need to disable pointerevents on the iframe to listen for mousemove over the top of it.
      this.iframeElem.style.pointerEvents = "none";
    }

    drag(this, {
      onMove: (x, _y) => {
        let newPositionInPixels = x;

        this.resizePosition = clamp(this.pixelsToPercentage(newPositionInPixels), 0, 100);
        this.updateResizePosition();
      },
      onStop: () => {
        if (this.iframeElem) {
        // Re-enable pointerevents so you can use tab keys etc.
          this.iframeElem.style.pointerEvents = "auto";
        }
      },
      initialEvent: event
    });
  }

  /**
   * @param {number} pixels
   * @return {number}
   */
  pixelsToPercentage (pixels) {
    return (pixels / this.cachedWidth) * 100
  }

  /**
   * @param {SupportedLanguages} language
   */
  renderDetails (language) {
    let fullLanguage = language.toUpperCase();

    let code = this[`${language}Code`];

    // @ts-expect-error
    code = code ? o$1(this.highlightCode({ code, language })) : "";
    const open = this.openLanguages.split(",").includes(language);

		return x`
      <details ?open=${open} part="details details-${language}">
				<summary part="summary summary-${language}">
          ${fullLanguage}
        </summary>
				<label for="sandbox-${language}" class="visually-hidden">${fullLanguage} code</label>
				<div class="sandbox-editor" part="sandbox-editor">
          <!-- This is where the fancy syntax highlighting comes in -->
					<pre
            id="pre-${language}"
            data-code-lang=${language}
            aria-hidden="true"
            part="pre pre-${language}"
          ><code
              part="code code-${language}"
              class="language-${language}"
            >${code}</code></pre>
          <!-- IMPORTANT! There must be no white-space above. -->
					<textarea
            ${
              // @ts-expect-error
              n(this[`${language}TextAreaChanged`])
            }
            id="textarea-${language}"
            data-code-lang=${language}
            part="textarea textarea-${language}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            translate="no"
            @keydown=${this.keydownHandler}
            @input=${this.inputHandler}
            @input=${this.syncScroll}
            @scroll=${this.syncScroll}
            value=${this[`${language}Code`]}
          ></textarea>
				</div>
			</details>
		`
  }

  /**
   * @internal
   * @param {Event} e
   */
  syncScroll (e) {
    /**
     * @type {null | HTMLTextAreaElement}
     */
    // @ts-expect-error
    const textarea = e.target;

    if (textarea == null) return

    const lang = textarea.dataset.codeLang;

    const pre = this.shadowRoot?.querySelector(`#pre-${lang}`);

    if (pre == null) return

    pre.scrollTop = textarea.scrollTop;
    pre.scrollLeft = textarea.scrollLeft;
  }
}

export { LightPen as default };
