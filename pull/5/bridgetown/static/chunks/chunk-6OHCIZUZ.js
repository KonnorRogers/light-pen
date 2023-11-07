import{a as v,b as y,c as O,d as R}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-CHYOFPLB.js";import{a as m,b as a,e as c,f as z,g as $,h as S,l as g,m as f,n as b,o as M,p as k,q as T}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-HQPUIQBR.js";import{d as r}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-OSUW2QPQ.js";var A=`
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
`;var E=m`
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
`;function _(l,e=" "){let t=[];for(let[i,s]of Object.entries(l))s&&t.push(i);return t.join(e)}function x(l,e=0){let t=null;return(...i)=>{t&&window.clearTimeout(t),t=window.setTimeout(()=>{l.apply(null,i)},e)}}var n=class extends f{constructor(){super(),this.summary="",this.open=!1}willUpdate(e){let t=this.details;t&&e.has("open")&&(this.open?(t.open=this.open,requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.setAttribute("expanded","")})})):t.hasAttribute("expanded")?t.removeAttribute("expanded"):t.open=this.open)}render(){return a`
      <details part="details"
        @transitionend=${this.handleTransitionEnd}
        @toggle=${this.handleToggle}
      >
        <summary part="summary" @click=${this.handleSummaryClick}>
          <slot name="summary">${this.summary}</slot>
        </summary>

        <div part="content-base">
          <div part="content">
            <slot></slot>
          </div>
        </div>
      </details>
    `}get details(){return this.shadowRoot?.querySelector("details")}handleTransitionEnd(e){let t=this.details;t&&e.propertyName==="grid-template-rows"&&(t.open===!0?t.hasAttribute("expanded")||(t.open=!1):t.open=!0)}handleToggle(e){let t=this.details;t&&t.open&&!t.hasAttribute("expanded")&&(this.open=t.open,this.dispatchEvent(new Event("light-toggle")),t.setAttribute("expanded",""))}handleSummaryClick(e){let t=this.details;if(t){if(console.log("summary click"),e.preventDefault(),t.open)return this.open=!1,!1;this.open=!0}}};r(n,"baseName","light-disclosure"),r(n,"styles",[b,m`
      [part~="content-base"] {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 500ms ease;
      }

      [part~="content"] {
        overflow: hidden;
      }

      details[open][expanded] [part~="content-base"] {
        grid-template-rows: 1fr;
      }
    `]),r(n,"properties",{summary:{},open:{type:Boolean}});var P="Show source code",o=class extends f{constructor(){super(),this.sandboxSettings=A,this.summary=P,this.highlightLanguage="html",this.inlinePreview=!1,this.resizing=!1,this.disableHighlight=!1,this.code="",this.previewCode="",this.open=!1,this.resizePosition=100,this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.previewCodeDebounce=x(()=>this.handleMutation("preview-code"),20),this.codeDebounce=x(()=>this.handleMutation("code"),20)}resetIframeCodeMutationObserver(){this.previewCodeMutationObserver&&this.previewCodeMutationObserver.disconnect(),this.previewCodeMutationObserver=new MutationObserver((...t)=>this.previewCodeDebounce());let e=this.findSlot("preview-code")?.assignedElements({flatten:!0})||[];for(let t of e)this.previewCodeMutationObserver.observe(t,this.__mutationObserverConfig)}resetCodeMutationObserver(){this.codeMutationObserver&&this.codeMutationObserver.disconnect(),this.codeMutationObserver=new MutationObserver((...t)=>this.codeDebounce());let e=this.findSlot("code")?.assignedElements({flatten:!0})||[];for(let t of e)this.codeMutationObserver.observe(t,this.__mutationObserverConfig)}handleMutation(e){if(e==="preview-code"){this.handleTemplate({target:this.findSlot("preview-code")});return}if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let t=e.target;if(t==null)return;let i=t.getAttribute("name");if(["preview-code","code"].includes(i||"")===!1)return;let s="type"in e&&e.type==="slotchange",d=t.assignedElements({flatten:!0}),u=[],p=document.createElement("div");for(let w of d){if(w instanceof HTMLTemplateElement){let D=w.content.cloneNode(!0);p.append(D),u.push(p.innerHTML),p.innerHTML="";continue}u.push(w.innerHTML)}let C=u.join(`
`);if(i==="preview-code"){s&&this.resetIframeCodeMutationObserver(),this.previewCode=C;return}if(i==="code"){s&&this.resetCodeMutationObserver(),this.code=C;return}}unescapePreviewCode(){return this.unescapeCharacters(this.previewCode||this.code)}updateIframeContent(){let e=this.unescapePreviewCode(),t=this.shadowRoot?.querySelector("iframe");if(!t)return;let i=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          ${e}
        </body>
      </html>`;t.contentWindow?.document.open(),t.contentWindow?.document.writeln(i),t.contentWindow?.document.close()}escapeCharacters(e){return e.replaceAll(new RegExp("<","g"),"&lt;").replaceAll(new RegExp(">","g"),"&gt;")}unescapeCharacters(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}willUpdate(e){["previewCode","code"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),i=e+t;this.cachedWidth=i}handleResize(e){let{left:t,right:i}=e[0].contentRect,s=t+i;this.cachedWidth=s}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.resetIframeCodeMutationObserver(),this.resetCodeMutationObserver()})}highlight(e=this.code){return e}render(){let e=this.highlightLanguage;return a`
      <div part=${_({base:!0})}>
        <div part="preview">
          ${v(this.inlinePreview,()=>a`<div part="start-panel preview-div">${g(this.unescapePreviewCode())}</div>`,()=>a`
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
              ${R}
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
            ${v(this.highlight,()=>a`
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
                  >${g(this.highlight())}</code></pre>`,()=>a`${g(this.code)}`)}
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
    `}get panelResizer(){return this.shadowRoot?.querySelector("[part~='panel-resizer']")}handleDrag(e){e.cancelable&&e.preventDefault();let t=this.shadowRoot?.querySelector("iframe");t&&(t.style.pointerEvents="none"),this.resizing=!0;let s=(e.currentTarget?.offsetWidth||0)/2;O(this,{onMove:(d,u)=>{let p=d+s;this.resizePosition=y(0,this.pixelsToPercentage(p),100),this.updateResizePosition(),this.resizing=!0},onStop:()=>{let d=this.shadowRoot?.querySelector("iframe");d&&(d.style.pointerEvents="auto"),this.resizing=!1},initialEvent:e})}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let i=100-t;this.style.setProperty("--start-panel-width",`clamp(100px, ${t}%, 100%)`),this.style.setProperty("--end-panel-width",`${i}%`)}}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,i=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=i),e.key==="ArrowRight"&&(t+=i),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=y(0,t,100)}}pixelsToPercentage(e){return e/this.cachedWidth*100}};r(o,"baseName","light-preview-base"),r(o,"dependencies",{"light-disclosure":n}),r(o,"styles",[b,M,E]),r(o,"properties",{summary:{},sandboxSettings:{reflect:!0,attribute:"sandbox-settings"},highlightLanguage:{reflect:!0,attribute:"highlight-language"},inlinePreview:{type:Boolean,attribute:"inline-preview"},disableHighlight:{type:Boolean,attribute:"disable-highlight"},open:{reflect:!0,type:Boolean},resizePosition:{reflect:!0,type:Number,attribute:"resize-position"},resizing:{reflect:!0,type:Boolean},code:{attribute:!1},previewCode:{attribute:!1}});c.registerLanguage("html",$);c.registerLanguage("css",S);c.registerLanguage("javascript",z);var h=class extends o{highlight(e=this.code){return c.highlight(T(this.unescapeCharacters(e)),{language:this.highlightLanguage}).value}};r(h,"baseName","light-preview"),r(h,"styles",o.styles.concat([k]));export{h as a};
//# sourceMappingURL=/light-pen/pull/5/bridgetown/static/chunks/chunk-6OHCIZUZ.js.map
