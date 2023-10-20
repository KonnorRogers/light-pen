import{a as w,b as n,e as y,f as g,g as x,h as c,i as z,j as C,k as M,o as u,p as $,q as S,r as O,s as f,t as R,u as D,v as T,w as k}from"/light-pen/bridgetown/static/chunks/chunk-PSWCXD6S.js";import{d as s}from"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var P=w`
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
  grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  height: 100%;
}

[part~="panel-resizer"] {
  border-radius: 0;
  border-inline-start: 1px solid var(--border-color);
}

:host(:not([resize-position="100"])) [part~="panel-resizer"] {
  border-inline-end: 1px solid var(--border-color);
}

[part~="preview"] {
  display: grid;
  grid-template-columns: minmax(0, var(--start-panel-width, 1fr)) minmax(0, auto) minmax(0, var(--end-panel-width, auto));
  overflow: auto;
  max-height: 100%;
  resize: vertical;
}

[part~="start-panel"] {
  padding: 1rem;
}

iframe {
  height: 100%;
  width: 100%;
}

[part~="pre"] {
  padding: 1rem;
  margin: 0;
  overflow: auto;
}

[part~="pre"],
[part~="code"] {
  line-height: 1.6;
}

[part~="end-panel"] {
  background-color: rgba(0,0,0,0.025);
}

[part~="code-wrapper"] {
  border-top: 1px solid var(--border-color);
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
  border-top-right-radius: 0px;
  border-top: 1px solid var(--border-color);
  min-height: 100%;
  font-size: 1rem;
  padding: 0.75rem;
}

[part~="source-code-toggle"][aria-expanded="true"] svg {
  transform: rotate(180deg);
}
`;function E(l,e=" "){let t=[];for(let[i,o]of Object.entries(l))o&&t.push(i);return t.join(e)}function b(l,e=0){let t=null;return(...i)=>{t&&window.clearTimeout(t),t=window.setTimeout(()=>{l.apply(null,i)},e)}}var _="Show source code",r=class extends $(y){constructor(){super(),this.sandboxSettings=T,this.summary=_,this.highlightLanguage="html",this.inlinePreview=!1,this.resizing=!1,this.disableHighlight=!1,this.code="",this.previewCode="",this.open=!1,this.resizePosition=100,this.iframeSrcDoc="",this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.previewCodeDebounce=b(()=>this.handleMutation("preview-code"),20),this.codeDebounce=b(()=>this.handleMutation("code"),20)}resetIframeCodeMutationObserver(){this.previewCodeMutationObserver&&this.previewCodeMutationObserver.disconnect(),this.previewCodeMutationObserver=new MutationObserver((...t)=>this.previewCodeDebounce());let e=this.findSlot("preview-code")?.assignedElements({flatten:!0})||[];for(let t of e)this.previewCodeMutationObserver.observe(t,this.__mutationObserverConfig)}resetCodeMutationObserver(){this.codeMutationObserver&&this.codeMutationObserver.disconnect(),this.codeMutationObserver=new MutationObserver((...t)=>this.codeDebounce());let e=this.findSlot("code")?.assignedElements({flatten:!0})||[];for(let t of e)this.codeMutationObserver.observe(t,this.__mutationObserverConfig)}handleMutation(e){if(e==="preview-code"){this.handleTemplate({target:this.findSlot("preview-code")});return}if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let t=e.target;if(t==null)return;let i=t.getAttribute("name");if(["preview-code","code"].includes(i||"")===!1)return;let o="type"in e&&e.type==="slotchange",a=t.assignedElements({flatten:!0}),p=[],d=document.createElement("div");for(let m of a){if(m instanceof HTMLTemplateElement){let H=m.content.cloneNode(!0);d.append(H),p.push(d.innerHTML),d.innerHTML="";continue}p.push(m.innerHTML)}let v=p.join(`
`);if(i==="preview-code"){o&&this.resetIframeCodeMutationObserver(),this.previewCode=v;return}if(i==="code"){o&&this.resetCodeMutationObserver(),this.code=v;return}}unescapePreviewCode(){return this.unescapeCharacters(this.previewCode||this.code)}updateIframeContent(){let t=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          ${this.unescapePreviewCode()}
        </body>
      </html>`;this.iframeSrcDoc=t}escapeCharacters(e){return e.replaceAll(new RegExp("<","g"),"&lt;").replaceAll(new RegExp(">","g"),"&gt;")}unescapeCharacters(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}willUpdate(e){["previewCode","code"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),i=e+t;this.cachedWidth=i}handleResize(e){let{left:t,right:i}=e[0].contentRect,o=t+i;this.cachedWidth=o}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.resetIframeCodeMutationObserver(),this.resetCodeMutationObserver()})}highlight(e=this.code){return e}render(){let e=this.highlightLanguage;return n`
      <div part=${E({base:!0})}>
        <div part="preview">
          ${g(this.inlinePreview,()=>n`<div part="start-panel preview-div">${u(this.unescapePreviewCode())}</div>`,()=>n`
                <iframe part="start-panel iframe" frameborder="0" srcdoc=${this.iframeSrcDoc}></iframe>
              `)}
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
            <slot name="resize-icon">
              ${k}
            </slot>
          </button>

          <div part="end-panel"></div>
        </div>


        <details id="details" ?open=${this.open} part="source-details" aria-labelledby="summary">
          <summary style="display: none;"></summary>
          <div part="code-wrapper">
            ${g(this.highlight,()=>n`
					      <pre
                  id="pre-${e}"
                  data-code-lang=${e}
                  aria-hidden="true"
                  part="pre pre-${e}"
                  tabindex="0"
                  aria-labelledby="source-code-label"
                  role="region"
                ><code
                    part="code code-${e}"
                    class="language-${e}"
                  >${u(this.highlight())}</code></pre>`,()=>n`${u(this.code)}`)}
          </div>
        </details>

        <div part="actions">
          <button part="source-code-toggle" aria-expanded=${this.open} aria-controls="details" @click=${()=>this.open=!this.open} type="button">
            <slot name="summary">${this.summary||_}</slot>
            <slot name="source-code-toggle-icon">
              <svg part="source-code-toggle-icon" viewBox="0 0 24 24" height="24" width="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </slot>
          </button>

          <slot name="actions"></slot>
        </div>
      </div>

      <div hidden>
        <slot name="preview-code" @slotchange=${this.handleTemplate}></slot>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `}get panelResizer(){return this.shadowRoot?.querySelector("[part~='panel-resizer']")}handleDrag(e){e.cancelable&&e.preventDefault();let t=this.shadowRoot?.querySelector("iframe");t&&(t.style.pointerEvents="none"),this.resizing=!0;let o=(e.currentTarget?.offsetWidth||0)/2;D(this,{onMove:(a,p)=>{let d=a+o;this.resizePosition=f(0,this.pixelsToPercentage(d),100),this.updateResizePosition(),this.resizing=!0},onStop:()=>{let a=this.shadowRoot?.querySelector("iframe");a&&(a.style.pointerEvents="auto"),this.resizing=!1},initialEvent:e})}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let i=100-t;this.style.setProperty("--start-panel-width",`clamp(100px, ${t}%, 100%)`),this.style.setProperty("--end-panel-width",`${i}%`)}}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,i=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=i),e.key==="ArrowRight"&&(t+=i),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=f(0,t,100)}}pixelsToPercentage(e){return e/this.cachedWidth*100}};s(r,"baseName","light-preview-base"),s(r,"styles",[S,O,P]),s(r,"properties",{summary:{},sandboxSettings:{reflect:!0,attribute:"sandbox-settings"},highlightLanguage:{reflect:!0,attribute:"highlight-language"},inlinePreview:{type:Boolean,attribute:"inline-preview"},disableHighlight:{type:Boolean,attribute:"disable-highlight"},open:{reflect:!0,type:Boolean},resizePosition:{reflect:!0,type:Number,attribute:"resize-position"},resizing:{reflect:!0,type:Boolean},iframeSrcDoc:{reflect:!0,attribute:"iframe-src-doc"},code:{attribute:!1},previewCode:{attribute:!1}});c.registerLanguage("html",C);c.registerLanguage("css",M);c.registerLanguage("javascript",z);var h=class extends r{highlight(e=this.code){return c.highlight(R(this.unescapeCharacters(e)),{language:this.highlightLanguage}).value}};s(h,"baseName","light-preview"),s(h,"styles",r.styles.concat([x]));export{h as a};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-N5JLCXN5.js.map
