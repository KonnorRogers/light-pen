import{a as w}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-HJ2QDZYZ.js";import{a as h,b as c,c as R,d as C}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-DBLFGJW5.js";import{a as u,b as i,f as b,g as f,h as g,m as n,n as x,o as v,p as z,r as y}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-KVOKNQEI.js";import{d as o}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-HTPW2NLW.js";var T=u`
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
  max-height: var(--textarea-height, 33vh);
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
`;n.registerLanguage("javascript",x);n.registerLanguage("xml",v);n.registerLanguage("css",z);var a=class a extends b{constructor(){super(),this.languageMap={html:"xml",css:"css",js:"javascript"},this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.htmlResizeObserver=new ResizeObserver(e=>this.handleTextAreaResize(e)),this.jsResizeObserver=new ResizeObserver(e=>this.handleTextAreaResize(e)),this.cssResizeObserver=new ResizeObserver(e=>this.handleTextAreaResize(e)),this.resizePosition=50,this.openLanguages="",this.languages=["html","css","js"],this.console="disabled",this.consoleText="",this.htmlReset="",this.cssReset="",this.jsReset="",this.cachedWidth=0,this.sandboxSettings="",this.resizing=!1}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.htmlReset=this.htmlTextArea?.value||"",this.cssReset=this.cssTextArea?.value||"",this.jsReset=this.jsTextArea?.value||""})}handleTextAreaResize(e){let{target:t}=e[0],{top:s,bottom:r}=e[0].contentRect,l=s+r;t.parentElement.style.setProperty("--textarea-height",`${l}px`)}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),s=e+t;this.cachedWidth=s}handleResize(e){let{left:t,right:s}=e[0].contentRect,r=t+s;this.cachedWidth=r}get iframeElem(){return this.shadowRoot?.querySelector("iframe")}handleEditorInput(){}updateIframeContent(){let e=this.iframeElem;if(e==null)return;let t=`
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
    `;e.contentWindow?.document.open(),e.contentWindow?.document.writeln(t),e.contentWindow?.document.close()}inputHandler(){this.updateCode()}willUpdate(e){["cssCode","htmlCode","jsCode"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}disconnectedCallback(){super.disconnectedCallback(),this.htmlTextArea&&this.htmlResizeObserver.disconnect(),this.cssTextArea&&this.cssResizeObserver.disconnect(),this.jsTextArea&&this.jsResizeObserver.disconnect()}htmlTextAreaChanged(e){e&&(this.htmlTextArea=e,this.htmlResizeObserver.observe(e))}cssTextAreaChanged(e){e&&(this.cssTextArea=e,this.cssResizeObserver.observe(e))}jsTextAreaChanged(e){e&&(this.jsTextArea=e,this.jsResizeObserver.observe(e))}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,s=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=s),e.key==="ArrowRight"&&(t+=s),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=c(t,0,100)}}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let s=100-t;this.style.setProperty("--start-panel-width",`${t}%`),this.style.setProperty("--end-panel-width",`${s}%`)}}updateCode(){this.cssCode=this.cssTextArea?.value,this.htmlCode=this.htmlTextArea?.value,this.jsCode=this.jsTextArea?.value}resetValues(){this.htmlTextArea&&(this.htmlCode=this.htmlReset,this.htmlTextArea.value=this.htmlReset),this.cssTextArea&&(this.cssCode=this.cssReset,this.cssTextArea.value=this.cssReset),this.jsTextArea&&(this.jsCode=this.jsReset,this.jsTextArea.value=this.jsReset)}handleTemplate(e){let t=e.target,s=t.getAttribute("name");if(s==null||!this.languages.includes(s))return;let r=s,l=t.assignedElements({flatten:!0}),d=y(this.unescapeCharacters(l.map($=>$.innerHTML).join(`
`)));this[`${r}Code`]=d;let p=this[`${r}TextArea`];p&&d&&(p.value=d)}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}renderConsole(){return i`<div part="sandbox-console-log"></div>`}render(){return i`
      <!-- Where users can declaratively provide templates -->
      <div style="display: none;">
        <slot name="html" @slotchange=${this.handleTemplate}></slot>
        <slot name="css" @slotchange=${this.handleTemplate}></slot>
        <slot name="js" @slotchange=${this.handleTemplate}></slot>
      </div>

      <div part="base" ?resizing=${this.resizing}>
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

						  ${h(this.console==="enabled",()=>i`<button @click={}>Clear Console</button>`)}
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
            class=${this.resizing?"is-active":""}
          >
            <slot name="panel-resize-icon">
              ${C}
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
        ${h(this.console==="enabled",()=>i`
              <details class="sandbox-console" ?open=${console}>
                <summary part="summary summary-console" tabindex="0">Console</summary>
                ${this.consoleText}
              </details>
            `)}
        -->
			</div>
		</div>`}handleDrag(e){e.cancelable&&e.preventDefault(),this.iframeElem&&(this.iframeElem.style.pointerEvents="none"),this.resizing=!0,R(this,{onMove:(t,s)=>{this.resizing=!0;let r=t;this.resizePosition=c(this.pixelsToPercentage(r),0,100),this.updateResizePosition()},onStop:()=>{this.iframeElem&&(this.iframeElem.style.pointerEvents="auto"),this.resizing=!1},initialEvent:e})}pixelsToPercentage(e){return e/this.cachedWidth*100}renderEditor(e){let t=this.languageMap[e];return i`
      <light-editor
        id=${`editor-${e}`}
        part=${`sandbox-editor sandbox-editor--${e}`}
        language=${t}
        value=${this[`${e}Code`]}
        @light-input=${s=>{this[`${e}Code`]=s.currentTarget.value}}
        @light-change=${s=>{this[`${e}Code`]=s.currentTarget.value}}
      ></light-editor>
    `}renderDetails(e){let t=e.toUpperCase(),s=this.openLanguages.split(",").includes(e);return i`
      <details ?open=${s} part="details details-${e}">
				<summary part="summary summary-${e}">
          ${t}
        </summary>

        ${this.renderEditor(e)}
			</details>
		`}};o(a,"baseName","light-pen"),o(a,"styles",[f,g,T]),o(a,"dependencies",{"light-editor":w}),o(a,"properties",{openLanguages:{reflect:!0,attribute:"open-languages"},resizePosition:{attribute:"resize-position",reflect:!0,type:Number},console:{reflect:!0},languages:{attribute:!1,type:Array},cssCode:{attribute:!1},htmlCode:{attribute:!1},jsCode:{attribute:!1},htmlResizeObserver:{attribute:!1},jsResizeObserver:{attribute:!1},cssResizeObserver:{attribute:!1},resizing:{attribute:!1}}),Object.values(a.dependencies).forEach(e=>{e.define()});var m=a;export{m as a};
//# sourceMappingURL=/light-pen/pull/4/bridgetown/static/chunks/chunk-2AISR3DB.js.map
