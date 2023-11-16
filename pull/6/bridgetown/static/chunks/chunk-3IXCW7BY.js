import{a as u,b as m,c as M,d as O,e as R}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-E4TU32H6.js";import{a as f,b as n,g as d,h as b,i as w,j as v,n as h,o as y,p as x,q as z,r as C,s as $,t as S}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-RFXGSISN.js";import{d as s}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var k=`
  allow-forms
  allow-modals
  allow-pointer-lock
  allow-popups
  allow-scripts
  allow-downloads
  allow-orientation-lock
  allow-pointer-lock
  allow-popups
  allow-presentation
  allow-same-origin
`;var T=f`
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
  height: max-content;
  max-height: max-content;
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

[part~="source-code-toggle"] svg {
  transform-origin: 50% 50%;
  transition: .25s transform ease;
}

[part~="source-code-toggle"][aria-expanded="true"] svg {
  transform: rotate(180deg);
}

[part~="source-details"]::part(summary) {
  display: none;
}
`;function D(l,e=" "){let t=[];for(let[r,o]of Object.entries(l))o&&t.push(r);return t.join(e)}function g(l,e=0){let t=null;return(...r)=>{t&&window.clearTimeout(t),t=window.setTimeout(()=>{l.apply(null,r)},e)}}var P="Show source code",i=class extends y{constructor(){super(),this.sandboxSettings=k,this.summary=P,this.highlightLanguage="html",this.inlinePreview=!1,this.resizing=!1,this.disableHighlight=!1,this.code="",this.previewCode="",this.open=!1,this.resizePosition=100,this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.previewCodeDebounce=g(()=>this.handleMutation("preview-code"),20),this.codeDebounce=g(()=>this.handleMutation("code"),20)}resetIframeCodeMutationObserver(){this.previewCodeMutationObserver&&this.previewCodeMutationObserver.disconnect(),this.previewCodeMutationObserver=new MutationObserver((...t)=>this.previewCodeDebounce());let e=this.findSlot("preview-code")?.assignedElements({flatten:!0})||[];for(let t of e)this.previewCodeMutationObserver.observe(t,this.__mutationObserverConfig)}resetCodeMutationObserver(){this.codeMutationObserver&&this.codeMutationObserver.disconnect(),this.codeMutationObserver=new MutationObserver((...t)=>this.codeDebounce());let e=this.findSlot("code")?.assignedElements({flatten:!0})||[];for(let t of e)this.codeMutationObserver.observe(t,this.__mutationObserverConfig)}handleMutation(e){if(e==="preview-code"){this.handleTemplate({target:this.findSlot("preview-code")});return}if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let t=e.target;if(t==null)return;let r=t.getAttribute("name");if(["preview-code","code"].includes(r||"")===!1)return;let o="type"in e&&e.type==="slotchange",a=t.assignedElements({flatten:!0}),p=$(S(...a).trim());if(r==="preview-code"){o&&this.resetIframeCodeMutationObserver(),this.previewCode=p;return}if(r==="code"){o&&this.resetCodeMutationObserver(),this.code=p;return}}unescapePreviewCode(){return this.unescapeCharacters(this.previewCode||this.code)}updateIframeContent(){let e=this.unescapePreviewCode(),t=this.shadowRoot?.querySelector("iframe");if(!t)return;let r=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          ${e}
        </body>
      </html>`;t.contentWindow?.document.open(),t.contentWindow?.document.writeln(r),t.contentWindow?.document.close()}escapeCharacters(e){return e.replaceAll(new RegExp("<","g"),"&lt;").replaceAll(new RegExp(">","g"),"&gt;")}unescapeCharacters(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}willUpdate(e){["previewCode","code"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),r=e+t;this.cachedWidth=r}handleResize(e){let{left:t,right:r}=e[0].contentRect,o=t+r;this.cachedWidth=o}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.resetIframeCodeMutationObserver(),this.resetCodeMutationObserver()})}highlight(e=this.code){return e}render(){let e=this.highlightLanguage;return n`
      <div part=${D({base:!0})}>
        <div part="preview">
          ${u(this.inlinePreview,()=>n`<div part="start-panel preview-div">${h(this.unescapePreviewCode())}</div>`,()=>n`
                <iframe part="start-panel iframe" height="auto" frameborder="0"></iframe>
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
              ${O}
            </slot>
          </button>

          <div part="end-panel"></div>
        </div>

        <light-disclosure
          id="details"
          ?open=${this.open}
          @light-toggle=${t=>this.open=t.currentTarget.open}
          part="source-details"
          aria-labelledby="summary"
          exportparts="
            summary:source-details__summary
          "
        >
          <div part="code-wrapper">
            ${u(this.highlight,()=>n`
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
                  >${h(this.highlight())}</code></pre>`,()=>n`${h(this.code)}`)}
          </div>
        </light-disclosure>

        <div part="actions">
          <button part="source-code-toggle" aria-expanded=${this.open} aria-controls="details" @click=${()=>this.open=!this.open} type="button">
            <slot name="summary">${this.summary||P}</slot>
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
    `}get panelResizer(){return this.shadowRoot?.querySelector("[part~='panel-resizer']")}handleDrag(e){e.cancelable&&e.preventDefault();let t=this.shadowRoot?.querySelector("iframe");t&&(t.style.pointerEvents="none"),this.resizing=!0;let o=(e.currentTarget?.offsetWidth||0)/2;M(this,{onMove:(a,p)=>{let _=a+o;this.resizePosition=m(0,this.pixelsToPercentage(_),100),this.updateResizePosition(),this.resizing=!0},onStop:()=>{let a=this.shadowRoot?.querySelector("iframe");a&&(a.style.pointerEvents="auto"),this.resizing=!1},initialEvent:e})}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let r=100-t;this.style.setProperty("--start-panel-width",`clamp(100px, ${t}%, 100%)`),this.style.setProperty("--end-panel-width",`${r}%`)}}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,r=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=r),e.key==="ArrowRight"&&(t+=r),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=m(0,t,100)}}pixelsToPercentage(e){return e/this.cachedWidth*100}};s(i,"baseName","light-preview-base"),s(i,"dependencies",{"light-disclosure":R}),s(i,"styles",[x,z,T]),s(i,"properties",{summary:{},sandboxSettings:{reflect:!0,attribute:"sandbox-settings"},highlightLanguage:{reflect:!0,attribute:"highlight-language"},inlinePreview:{type:Boolean,attribute:"inline-preview"},disableHighlight:{type:Boolean,attribute:"disable-highlight"},open:{reflect:!0,type:Boolean},resizePosition:{reflect:!0,type:Number,attribute:"resize-position"},resizing:{reflect:!0,type:Boolean},code:{attribute:!1},previewCode:{attribute:!1}});d.registerLanguage("html",w);d.registerLanguage("css",v);d.registerLanguage("javascript",b);var c=class extends i{highlight(e=this.code){return d.highlight(this.unescapeCharacters(e),{language:this.highlightLanguage}).value}};s(c,"baseName","light-preview"),s(c,"styles",i.styles.concat([C]));export{c as a};
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-3IXCW7BY.js.map
