import{a as f}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-UXQHYH7M.js";import{a as l,b as c,c as g,d as x,e as y}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-ZSZVW4LH.js";import{a as p,b as r,m,n as u,o as b}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-5QG252ZY.js";import{d as a}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-HTPW2NLW.js";var w=p`
[part~="sandbox-iframe"] {
  width: 100%;
  height: 100%;
  border: 1px solid darkgray;
}

[part~="sandbox"] {
  color:#272727;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, auto) minmax(0, 1fr);
}

[part~="summary"] {
  font-size: .8125rem;
  font-weight: bold;
  padding: 0.4rem 0.6rem;
}

[part~="summary"]:focus {
  outline: 2px solid blue;
}

[part~="sandbox-editor"] {
  height: var(--textarea-height, 33%);
}

[part~="base"] {
	word-wrap: break-word;
	color: inherit;
	font-size: 1em;
}

[part~="details"]:not(:first-child) {
  margin-top: 6px;
}

[part~="sandbox"],
[part~="base"] {
  height: 100%;
}

[part~="sandbox-iframe"] {
  aspect-ratio:auto;
  background-color: #fff;
  margin-bottom: 0;
}

[part~="base"],
[part~="pre"],
[part~="code"],
[part~="sandbox-iframe"] {
  border-radius:.25em;
}

[part~='sandbox-header'],
[part~="sandbox-console"],
[part~="sandbox-console-result"] {
  background-color:#343d4d;
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


[part~='sandbox-controls'] button {
  margin-bottom: 0;
}

[part~="sandbox-console-log"] {
  font-family: Menlo,Monaco,"Courier New",monospace;
  font-size: 0.875em;
  min-height: 1.2em;
}

.log-warn {
  color:#f9d767
}

.log-error {
  color:#f9c8c8
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

button:where([part~="panel-resizer"]) {
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
  display:grid;
  grid-template-columns: minmax(0,var(--start-panel-width, 1fr)) minmax(0, auto) minmax(0, var(--end-panel-width, 1fr));
  grid-template-rows: minmax(0, 1fr);
}

[part~="sandbox-iframe-wrapper"] {
}

[part~="sandbox-console-result"] {
  border-top:1px solid #1f252f;
  border-bottom-left-radius:0;
}
`;var i=class i extends m{constructor(){super(),this.languageMap={html:"xml",css:"css",js:"javascript"},this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.resizePosition=50,this.openLanguages="",this.languages=["html","css","js"],this.console="disabled",this.consoleText="",this.cachedWidth=0,this.sandboxSettings="",this._resizing=!1,this.cssCode="",this.htmlCode="",this.jsCode=""}get jsEditor(){return this.shadowRoot?.querySelector("#editor-js")}get cssEditor(){return this.shadowRoot?.querySelector("#editor-css")}get htmlEditor(){return this.shadowRoot?.querySelector("#editor-html")}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this)})}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),s=e+t;this.cachedWidth=s}handleResize(e){let{left:t,right:s}=e[0].contentRect,o=t+s;this.cachedWidth=o}get iframeElem(){return this.shadowRoot?.querySelector("iframe")}updateIframeContent(){let e=this.iframeElem;if(e==null)return;let t=`
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
    `;e.contentWindow?.document.open(),e.contentWindow?.document.writeln(t),e.contentWindow?.document.close()}willUpdate(e){["cssCode","htmlCode","jsCode"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,s=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=s),e.key==="ArrowRight"&&(t+=s),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=c(t,0,100)}}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let s=100-t;this.style.setProperty("--start-panel-width",`${t}%`),this.style.setProperty("--end-panel-width",`${s}%`)}}resetValues(){this.htmlCode=this.htmlEditor?.getAttribute("value")||"",this.cssCode=this.cssEditor?.getAttribute("value")||"",this.jsCode=this.cssEditor?.getAttribute("value")||"",this.requestUpdate()}handleTemplate(e){let t=e.target,s=t.getAttribute("name");if(s==null||!this.languages.includes(s))return;let o=s,z=t.assignedElements({flatten:!0}),n=g(this.unescapeCharacters(z.map(v=>v.innerHTML).join(`
`)));this[`${o}Code`]=n;let d=this[`${o}Editor`];d&&n&&(d.setAttribute("value",n),d.value=n)}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}renderConsole(){return r`<div part="sandbox-console-log"></div>`}render(){return r`
      <!-- Where users can declaratively provide templates -->
      <div style="display: none;">
        <slot name="html" @slotchange=${this.handleTemplate}></slot>
        <slot name="css" @slotchange=${this.handleTemplate}></slot>
        <slot name="js" @slotchange=${this.handleTemplate}></slot>
      </div>

      <div part="base" ?resizing=${this._resizing}>
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

						  ${l(this.console==="enabled",()=>r`<button @click={}>Clear Console</button>`)}
					  </span>
				</div>
				<div part="sandbox-content">
					<div part="sandbox-code">
            ${this.renderDetails("html")}
            ${this.renderDetails("css")}
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
            class=${this._resizing?"is-active":""}
          >
            <slot name="panel-resize-icon">
              ${y}
            </slot>
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
        ${l(this.console==="enabled",()=>r`
              <details class="sandbox-console" ?open=${console}>
                <summary part="summary summary-console" tabindex="0">Console</summary>
                ${this.consoleText}
              </details>
            `)}
        -->
			</div>
		</div>`}handleDrag(e){e.cancelable&&e.preventDefault(),this.iframeElem&&(this.iframeElem.style.pointerEvents="none"),this._resizing=!0,x(this,{onMove:(t,s)=>{this._resizing=!0;let o=t;this.resizePosition=c(this.pixelsToPercentage(o),0,100),this.updateResizePosition()},onStop:()=>{this.iframeElem&&(this.iframeElem.style.pointerEvents="auto"),this._resizing=!1},initialEvent:e})}pixelsToPercentage(e){return e/this.cachedWidth*100}renderEditor(e){let t=this.languageMap[e];return r`
      <light-editor
        id=${`editor-${e}`}
        part=${`sandbox-editor sandbox-editor--${e}`}
        exportparts="
          base:sandbox-editor__base,
          pre:sandbox-editor__pre,
          code:sandbox-editor__code,
          textarea:sandbox-editor__textarea
        "
        language=${t}
        .value=${this[`${e}Code`]}
        @light-input=${s=>{this[`${e}Code`]=s.currentTarget.value}}
        @light-change=${s=>{this[`${e}Code`]=s.currentTarget.value}}
      ></light-editor>
    `}renderDetails(e){let t=e.toUpperCase(),s=this.openLanguages.split(",").includes(e);return r`
      <details ?open=${s} part="details details-${e}">
				<summary part="summary summary-${e}">
          ${t}
        </summary>

        ${this.renderEditor(e)}
			</details>
		`}};a(i,"baseName","light-pen"),a(i,"styles",[u,b,w]),a(i,"dependencies",{"light-editor":f}),a(i,"properties",{openLanguages:{reflect:!0,attribute:"open-languages"},resizePosition:{attribute:"resize-position",reflect:!0,type:Number},console:{reflect:!0},languages:{attribute:!1,type:Array},cssCode:{attribute:!1},htmlCode:{attribute:!1},jsCode:{attribute:!1},htmlResizeObserver:{attribute:!1},jsResizeObserver:{attribute:!1},cssResizeObserver:{attribute:!1},_resizing:{attribute:!1}}),Object.values(i.dependencies).forEach(e=>{e.define()});var h=i;export{h as a};
//# sourceMappingURL=/light-pen/pull/4/bridgetown/static/chunks/chunk-266JGBXG.js.map
