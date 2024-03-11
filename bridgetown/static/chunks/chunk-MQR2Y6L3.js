import{a as d,b as u,c as b,d as f,e as x}from"/light-pen/bridgetown/static/chunks/chunk-4CO3JX2Z.js";import{a as m}from"/light-pen/bridgetown/static/chunks/chunk-JUTO7T57.js";import{a as l,b as s,g as p,h as c,m as n,s as h}from"/light-pen/bridgetown/static/chunks/chunk-IQLGAMIN.js";import{d as o}from"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var g=l`
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
  color:#272727;
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
  aspect-ratio:auto;
  background-color: #fff;
  margin-bottom: 0;
}

[part~="base"],
[part~="pre"],
[part~="code"],
[part~="sandbox-iframe"] {
  border-radius:.25rem;
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
  display:grid;
  grid-template-columns: minmax(var(--start-panel-min-width, 30px),var(--start-panel-width, 1fr)) minmax(0, auto) minmax(var(--end-panel-min-width, 30px), var(--end-panel-width, 1fr));
  grid-template-rows: minmax(0, 1fr);
}

[part~="sandbox-console-result"] {
  border-top:1px solid #1f252f;
  border-bottom-left-radius:0;
}
`;var i=class extends h{constructor(){super(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.resizePosition=50,this.openLanguages="",this.languages=["html","css","js"],this.console="disabled",this.consoleText="",this.cachedWidth=0,this.sandboxSettings="",this._resizing=!1,this.cssCode="",this.htmlCode="",this.jsCode="",this.preserveWhitespace=!1}get jsEditor(){return this.shadowRoot?.querySelector("#editor-js")}get cssEditor(){return this.shadowRoot?.querySelector("#editor-css")}get htmlEditor(){return this.shadowRoot?.querySelector("#editor-html")}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this)})}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),r=e+t;this.cachedWidth=r}handleResize(e){let{left:t,right:r}=e[0].contentRect,a=t+r;this.cachedWidth=a}get iframeElem(){return this.shadowRoot?.querySelector("iframe")}updateIframeContent(){let e=this.iframeElem;if(e==null)return;let t=`
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
    `;e.srcdoc=t}willUpdate(e){["cssCode","htmlCode","jsCode"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,r=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=r),e.key==="ArrowRight"&&(t+=r),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=d(t,0,100)}}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let r=100-t;this.style.setProperty("--start-panel-width",`${t}%`),this.style.setProperty("--end-panel-width",`${r}%`)}}resetValues(){this.htmlCode=this.htmlEditor?.getAttribute("value")||"",this.cssCode=this.cssEditor?.getAttribute("value")||"",this.jsCode=this.jsEditor?.getAttribute("value")||"",this.requestUpdate()}renderConsole(){return s`<div part="sandbox-console-log"></div>`}render(){return s` <!-- Where users can declaratively provide templates -->
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

              ${n(this.console==="enabled",()=>s`<button @click="{}">Clear Console</button>`)}
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
              class=${`light-button ${this._resizing?"is-active":""}`}
            >
              <slot name="panel-resize-icon"> ${b} </slot>
              <span class="visually-hidden"
                >Resize Panel. Pull to left or right to resize.</span
              >
            </button>

            <div part="sandbox-iframe-wrapper">
              <iframe part="sandbox-iframe" frameborder="0" sandbox=${x(this.sandboxSettings?this.sandboxSettings:null)}></iframe>
            </div>
          </div>

          <!--
        ${n(this.console==="enabled",()=>s`
              <details class="sandbox-console" ?open=${console}>
                <summary part="summary summary-console" tabindex="0">
                  Console
                </summary>
                ${this.consoleText}
              </details>
            `)}
        -->
        </div>
      </div>`}handleDrag(e){e.cancelable&&e.preventDefault(),this.iframeElem&&(this.iframeElem.style.pointerEvents="none"),this._resizing=!0,u(this,{onMove:(t,r)=>{this._resizing=!0;let a=t;this.resizePosition=d(0,this.pixelsToPercentage(a),100),this.updateResizePosition()},onStop:()=>{this.iframeElem&&(this.iframeElem.style.pointerEvents="auto"),this._resizing=!1},initialEvent:e})}pixelsToPercentage(e){return e/this.cachedWidth*100}renderEditor(e){return s`
      <light-editor
        id=${`editor-${e}`}
        part=${`sandbox-editor sandbox-editor--${e}`}
        exportparts="
          base:sandbox-editor__base,
          pre:sandbox-editor__pre,
          code:sandbox-editor__code,
          textarea:sandbox-editor__textarea
        "
        language=${e}
        .value=${this[`${e}Code`]}
        ?preserve-whitespace=${this.preserveWhitespace}
        @light-value-change=${t=>{this[`${e}Code`]=t.currentTarget.value}}
        ><slot name=${e}></slot
      ></light-editor>
    `}renderDetails(e){let t=e.toUpperCase();return s`
      <light-disclosure part="disclosure disclosure-${e}">
        <span part="summary" slot="summary"
          ><slot name=${`summary-${e}`}>${t}</slot></span
        >

        ${this.renderEditor(e)}
      </light-disclosure>
    `}};o(i,"baseName","light-pen"),o(i,"styles",[p,c,g]),o(i,"dependencies",{"light-editor":m,"light-disclosure":f}),o(i,"properties",{openLanguages:{reflect:!0,attribute:"open-languages"},resizePosition:{attribute:"resize-position",reflect:!0,type:Number},preserveWhitespace:{attribute:"preserve-whitespace",type:Boolean,reflect:!0},console:{reflect:!0},sandboxSettings:{reflect:!0,attribute:"sandbox-settings"},languages:{attribute:!1,type:Array},cssCode:{attribute:!1},htmlCode:{attribute:!1},jsCode:{attribute:!1},htmlResizeObserver:{attribute:!1},jsResizeObserver:{attribute:!1},cssResizeObserver:{attribute:!1},_resizing:{attribute:!1}});export{i as a};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-MQR2Y6L3.js.map
