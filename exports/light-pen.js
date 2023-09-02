// @ts-check
import { LitElement, html } from "lit"
import { styles, theme } from "./light-pen.styles.js"
import { when } from "lit/directives/when.js";

import HighlightJS from 'highlight.js/lib/core';
import JavaScript from 'highlight.js/lib/languages/javascript';
import HTML from 'highlight.js/lib/languages/xml';
import CSS from 'highlight.js/lib/languages/css';
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { ref } from "lit/directives/ref.js";
import { DefineableMixin } from "web-component-define";


// Then register the languages you need
HighlightJS.registerLanguage('javascript', JavaScript);
HighlightJS.registerLanguage('xml', HTML);
HighlightJS.registerLanguage('css', CSS);

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
export default class LightPen extends DefineableMixin(LitElement) {
  // Static
  static baseName = "light-pen"

  static styles = [theme, styles]

  static languageMap = {
    html: "xml",
    css: "css",
    js: "javascript"
  }

  static properties = {
    openLanguages: { reflect: true, attribute: "open-languages" },
    resizePosition: { attribute: "resize-position", reflect: true, type: Number },
    console: { reflect: true },
    languages: { state: true, type: Array },
    cssCode: { state: true },
    htmlCode: { state: true },
    jsCode: { state: true }
  }

  // Overrides

  /**
   * @override
   */
  constructor() {
    super()


    /**
     * @prop
     * @type {ResizeObserver}
     */
    this.resizeObserver = new ResizeObserver(entries => this.handleResize(entries));

    /**
     *
     */
    // this.textAreasResizeObservers = {
    //   html: new ResizeObserver(entries => this.handleTextAreaResize(entries)),
    //   js: new ResizeObserver(entries => this.handleTextAreaResize(entries)),
    //   css: new ResizeObserver(entries => this.handleTextAreaResize(entries)),
    // }

    /**
     * @attr
     * @reflect
     * @type {number}
     */
    this.resizePosition = 50

    /**
     * Languages to have open on initial render
     * Comma separated list of elements to open on initial render "html,css,js" to open all.
     * @reflect
     * @type {string}
     */
    this.openLanguages = ""

    /**
     * @type {Array<SupportedLanguages>}
     */
    this.languages = ["html", "css", "js"]

    /**
     * @reflect
     * @type {"console" | "iframe"}
     */
    this.result = this.getAttribute('result') === "console" ? 'console' : 'iframe',

    /**
     * @property
     * @type {"enabled" | "disabled"}
     */
    this.console = "disabled"

    /**
     * @property
     * @type {string}
     */
    this.consoleText = ""

    /**
     * @property
     * @type {string}
     */
    this.htmlReset = ""

    /**
     * @property
     * @type {string}
     */
    this.cssReset = ""

    /**
     * @property
     * @type {string}
     */
    this.jsReset = ""

    /**
     * @property
     * @type {number}
     */
    this.cachedWidth = 0


  }

  /**
   * @override
   */
  connectedCallback () {
    super.connectedCallback()
    this.updateComplete.then(() => this.resizeObserver.observe(this));

    this.updateCachedWidth()
    setTimeout(() => {
      /**
       * Grab reset values so we can reset the inputs
       */
      this.htmlReset = this.htmlTextArea?.value || ""
      this.cssReset = this.cssTextArea?.value || ""
      this.jsReset = this.jsTextArea?.value || ""
    })
  }

  /**
   * Sets an initial width so we dont need to keep computing getBoundingClientRect
   */
  updateCachedWidth () {
    const { width } = this.getBoundingClientRect()
    this.cachedWidth = width
  }

  /**
   * @param {ResizeObserverEntry[]} entries
   */
  handleResize (entries) {
    const { width } = entries[0].contentRect;

    // Resize when a primary panel is set
    this.cachedWidth = width
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
    const highlightJsLanguage = /** @type {typeof LightPen} */ (this.constructor).languageMap[language]

    code = this.escapeCharacters(code)
    code = this.injectNewLine(code)

    return HighlightJS.highlight(code, {language: highlightJsLanguage}).value
  }

  /**
   * @param {string} text
   */
  escapeCharacters (text) {
    // Update code
    return text.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<"); /* Global RegExp */
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
        </head>
        <body>
          ${this.htmlCode}
          <script type="module">
            ${this.jsCode}
          <\/script>
        </body>
      </html>
    `

    const iframe = this.shadowRoot?.querySelector("iframe")
    if (iframe && iframe.contentWindow) {
	    iframe.contentWindow.document.open();
	    iframe.contentWindow.document.writeln(page);
	    iframe.contentWindow.document.close();
	  }
  }

  inputHandler () {
    this.updateCode()
  }

  /**
   * @param {import("lit").PropertyValues} changedProperties
   */
  willUpdate (changedProperties) {
    if (this.languages.some((str) => changedProperties.has(str + "Code"))) {
      if (this._iframeDebounce != null) window.clearTimeout(this._iframeDebounce)
      this._iframeDebounce = setTimeout(() => this.updateIframeContent(), 300)
    }

    if (changedProperties.has("resizePosition")) {
      this.updateResizePosition()
    }

    super.willUpdate(changedProperties)
  }


  /**
   * @param {HTMLTextAreaElement} textarea
   */
  htmlTextAreaChanged (textarea) {
    this.htmlTextArea = textarea
  }

  /**
   * @param {HTMLTextAreaElement} textarea
   */
  cssTextAreaChanged (textarea) {
    this.cssTextArea = textarea
  }

  /**
   * @param {HTMLTextAreaElement} textarea
   */
  jsTextAreaChanged (textarea) {
    this.jsTextArea = textarea
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
    const startWidth = resizePosition

    if (startWidth != null) {
      const endWidth = 100 - startWidth
      this.style.setProperty("--start-panel-width", `${startWidth}%`)
      this.style.setProperty("--end-panel-width", `${endWidth}%`)
    }
  }


  /**
   * Lovely helper to scoop up our html, css, and js code
   */
  updateCode () {
    this.cssCode = this.cssTextArea?.value
    this.htmlCode = this.htmlTextArea?.value
    this.jsCode = this.jsTextArea?.value
  }

  resetValues () {
    if (this.htmlTextArea) {
      this.htmlCode = this.htmlReset
      this.htmlTextArea.value = this.htmlReset
    }

    if (this.cssTextArea) {
      this.cssCode = this.cssReset
      this.cssTextArea.value = this.cssReset
    }

    if (this.jsTextArea) {
      this.jsCode = this.jsReset
      this.jsTextArea.value = this.jsReset
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
    const target = evt.target

    const key = evt.key

    if (["Tab", "Escape"].includes(key)) {
      evt.preventDefault()

      if ('Tab' === evt.key) {
        return target.setRangeText('\t', target.selectionStart, target.selectionEnd, 'end')
      }

      if ('Escape' === evt.key) {
        let e = target.closest('details');
        if (!e) return;

        e.querySelector("summary")?.focus()
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
    const slot = e.target

    const slotName = slot.getAttribute("name")
    if (slotName == null) return

    if (!this.languages.includes(/** @type {SupportedLanguages} */ (slotName))) {
      return
    }

    const codeType = /** @type {SupportedLanguages} */ (slotName)

    const templates = slot.assignedElements({flatten: true})

    const code = dedent(this.escapeCharacters(templates.map((template) => template.innerHTML).join("\n")))

    this[`${codeType}Code`] = code

    const textArea = this[`${codeType}TextArea`]

    if (textArea && code) {
      textArea.value = code
    }
  }

  // Rendering
  renderConsole () {
    return html`<div part="sandbox-console-log"></div>`
  }

  /**
   * @override
   */
  render () {
		return html`
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

						  ${when(this.console === "enabled", () => html`<button @click={}>Clear Console</button>`)}
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
            <span class="visually-hidden">Resize Panel. Pull to left or right to resize.</span>
          </button>

					<div part="sandbox-iframe-wrapper">
						<iframe
              part="sandbox-iframe"
              frameborder="0"
             ></iframe>
					</div>
				</div>

        <!--
        ${when(
            this.console === "enabled",
            () => html`
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
      this.iframeElem.style.pointerEvents = "none"
    }

    drag(this, {
      onMove: (x, _y) => {
        let newPositionInPixels = x;

        this.resizePosition = clamp(this.pixelsToPercentage(newPositionInPixels), 0, 100);
        this.updateResizePosition()
      },
      onStop: () => {
        if (this.iframeElem) {
        // Re-enable pointerevents so you can use tab keys etc.
          this.iframeElem.style.pointerEvents = "auto"
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
    let fullLanguage = language.toUpperCase()

    let code = this[`${language}Code`]

    // @ts-expect-error
    code = code ? unsafeHTML(this.highlightCode({ code, language })) : ""
    const open = this.openLanguages.split(",").includes(language)

		return html`
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
              ref(this[`${language}TextAreaChanged`])
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
    const textarea = e.target

    if (textarea == null) return

    const lang = textarea.dataset.codeLang

    const pre = this.shadowRoot?.querySelector(`#pre-${lang}`)

    if (pre == null) return

    pre.scrollTop = textarea.scrollTop;
    pre.scrollLeft = textarea.scrollLeft;
  }
}

/**
 * @param {number} min
 * @param {number} curr
 * @param {number} max
 */
function clamp (min, curr, max) {
  return Math.min(Math.max(curr, min), max)
}

/**
 * @typedef {object} DragOptions
 * @property {(x: number, y: number) => void} onMove - Callback that runs as dragging occurs.
 * @property {() => void} onStop - Callback that runs when dragging stops.
 * @property {PointerEvent} initialEvent - When an initial event is passed, the first drag will be triggered immediately using the coordinates therein. This is useful when the drag is initiated by a mousedown/touchstart event but you want the initial "click" to activate a drag (e.g. resizePositioning a handle initially at the click target).
 */

/**
 * @param {HTMLElement} container
 * @param {Partial<DragOptions>} [options]

 */
function drag(container, options) {
  /**
   * @param {PointerEvent} pointerEvent
   */
  function move(pointerEvent) {
    const dims = container.getBoundingClientRect();
    const defaultView = container.ownerDocument.defaultView;
    const offsetX = dims.left + (defaultView?.pageXOffset || 0);
    const offsetY = dims.top + (defaultView?.pageYOffset || 0);
    const x = pointerEvent.pageX - offsetX;
    const y = pointerEvent.pageY - offsetY;

    if (options?.onMove) {
      options.onMove(x, y);
    }
  }

  function stop() {
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerup', stop);

    if (options?.onStop) {
      options.onStop();
    }
  }

  document.addEventListener('pointermove', move, { passive: true });
  document.addEventListener('pointerup', stop);

  // If an initial event is set, trigger the first drag immediately
  if (options?.initialEvent instanceof PointerEvent) {
    move(options.initialEvent);
  }
}

/**
 * @param {TemplateStringsArray|string} templateStrings
 * @param {any[]} values
 */
function dedent (templateStrings, ...values) {
	let matches = [];
	let strings = typeof templateStrings === 'string' ? [ templateStrings ] : templateStrings.slice();

	// 1. Remove trailing whitespace.
	strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, '');

	// 2. Find all line breaks to determine the highest common indentation level.
	for (let i = 0; i < strings.length; i++) {
		let match;

		if (match = strings[i].match(/\n[\t ]+/g)) {
			matches.push(...match);
		}
	}

	// 3. Remove the common indentation from all strings.
	if (matches.length) {
		let size = Math.min(...matches.map(value => value.length - 1));
		let pattern = new RegExp(`\n[\t ]{${size}}`, 'g');

		for (let i = 0; i < strings.length; i++) {
			strings[i] = strings[i].replace(pattern, '\n');
		}
	}

	// 4. Remove leading whitespace.
	strings[0] = strings[0].replace(/^\r?\n/, '');

	// 5. Perform interpolation.
	let string = strings[0];

	for (let i = 0; i < values.length; i++) {
		string += values[i] + strings[i + 1];
	}

	return string;
}
