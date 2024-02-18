import{a as g,b as R,c as O,d as T}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-TAADDZOE.js";import{a as z,b as m,c as S}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-C5ZEIAJF.js";import{a as p}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-BO3BDRZM.js";import{a as f,b as l,h as b,i as w,j as v,l as y,m as x,q as u,r as C,s as $,t as M}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-OBJ2SGOM.js";import{d as n}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-YJ24LJIO.js";var k=`
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
`;var D=f`
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
  min-height: inherit;
}

[part~="panel-resizer"] {
  border-color: transparent;
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
  min-width: 100%;
}

[part~="preview"] {
  min-height: 100%;
  max-height: 100%;
  width: 100%;
}

[part~="end-panel"] {
  background-color: rgba(0,0,0,0.025);
}

[part~="code-wrapper"] {
  border-top: 1px solid var(--border-color);
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
  border-color: transparent;
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
`;var _="Show source code",i=class extends C{constructor(){super(),this.sandboxSettings=k,this.summary=_,this.language="html",this.previewMode="iframe",this.resizing=!1,this.disableHighlight=!1,this.code="",this.previewCode="",this.open=!1,this.resizePosition=100,this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.previewCodeDebounce=m(()=>this.handleMutation("preview-code"),20),this.codeDebounce=m(()=>this.handleMutation("code"),20),this.wrap="soft",this.unescapeBehavior="last"}resetIframeCodeMutationObserver(){this.previewCodeMutationObserver&&this.previewCodeMutationObserver.disconnect(),this.previewCodeMutationObserver=new MutationObserver((...t)=>this.previewCodeDebounce());let e=this.findSlot("preview-code")?.assignedElements({flatten:!0})||[];for(let t of e)this.previewCodeMutationObserver.observe(t,this.__mutationObserverConfig)}resetCodeMutationObserver(){this.codeMutationObserver&&this.codeMutationObserver.disconnect(),this.codeMutationObserver=new MutationObserver((...t)=>this.codeDebounce());let e=this.findSlot("code")?.assignedElements({flatten:!0})||[];for(let t of e)this.codeMutationObserver.observe(t,this.__mutationObserverConfig)}handleMutation(e){if(e==="preview-code"){this.handleTemplate({target:this.findSlot("preview-code")});return}if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let t=e.target;if(t==null)return;let r=t.getAttribute("name");if(["preview-code","code"].includes(r||"")===!1)return;let s="type"in e&&e.type==="slotchange",a=t.assignedElements({flatten:!0}),d=M($(...a).trim());if(r==="preview-code"){s&&this.resetIframeCodeMutationObserver(),this.previewCode=d,this.requestUpdate("previewCode");return}if(r==="code"){s&&this.resetCodeMutationObserver(),this.code=d,this.requestUpdate("code");return}}updateIframeContent(){let e=this.previewCode||this.code,t=this.shadowRoot?.querySelector("iframe");if(!t)return;let r=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          ${e}
        </body>
      </html>`;t.srcdoc=r}escapeCharacters(e){return e}transformTags(e){let t=/&lt;\/([\w\d\.-_]+)>/g;return this.unescapeBehavior==="last"?H(e,t):this.unescapeBehavior==="all"?e.replaceAll(t,"</$1>"):e}willUpdate(e){["previewCode","code"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),r=e+t;this.cachedWidth=r}handleResize(e){let{left:t,right:r}=e[0].contentRect,s=t+r;this.cachedWidth=s}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.resetIframeCodeMutationObserver(),this.resetCodeMutationObserver()})}highlight(e=this.code){return e}addShadowRootToPreview(e){let t=e.querySelector("[part~='preview-div']");if(t){if(t.shadowRoot){t.shadowRoot.innerHTML=this.transformTags(this.code||this.previewCode);return}t.attachShadow({mode:"open"}).innerHTML=this.transformTags(this.code||this.previewCode)}}render(){let e=this.language,t=l`
      <div part=${z({base:!0})}>
        <div part="preview">
          ${p(this.previewMode==="shadow-dom",()=>l`<div part="start-panel preview-div"></div>`,()=>l`
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
            class=${`light-button ${this.resizing?"is-active":""}`}
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
          @light-toggle=${r=>this.open=r.currentTarget.open}
          part="source-details"
          aria-labelledby="summary"
          exportparts="
            summary:source-details__summary
          "
        >
          <div part="code-wrapper">
            ${p(!this.disableHighlight,()=>l`
					      <pre
                  id="pre-${e}"
                  data-code-lang=${e}
                  aria-hidden="true"
                  part="pre pre-${e}"
                  tabindex="0"
                  aria-labelledby="source-code-label"
                  class="language-${e}"
                  role="region"
                ><code
                    part="code code-${e}"
                    class="language-${e}"
                  >${u(this.highlight(this.transformTags(this.code)))}</code></pre>`,()=>l`${u(this.code)}`)}
          </div>
        </light-disclosure>

        <div part="actions">
          <button class="light-button" part="source-code-toggle" aria-expanded=${this.open} aria-controls="details" @click=${()=>this.open=!this.open} type="button">
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
    `;return this.shadowRoot&&this.addShadowRootToPreview(this.shadowRoot),t}get panelResizer(){return this.shadowRoot?.querySelector("[part~='panel-resizer']")}handleDrag(e){e.cancelable&&e.preventDefault();let t=this.shadowRoot?.querySelector("iframe");t&&(t.style.pointerEvents="none"),this.resizing=!0;let s=(e.currentTarget?.offsetWidth||0)/2;R(this,{onMove:(a,d)=>{let c=a+s;this.resizePosition=g(0,this.pixelsToPercentage(c),100),this.updateResizePosition(),this.resizing=!0},onStop:()=>{let a=this.shadowRoot?.querySelector("iframe");a&&(a.style.pointerEvents="auto"),this.resizing=!1},initialEvent:e})}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let r=100-t;this.style.setProperty("--start-panel-width",`clamp(100px, ${t}%, 100%)`),this.style.setProperty("--end-panel-width",`${r}%`)}}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,r=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=r),e.key==="ArrowRight"&&(t+=r),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=g(0,t,100)}}pixelsToPercentage(e){return e/this.cachedWidth*100}};n(i,"baseName","light-preview-base"),n(i,"dependencies",{"light-disclosure":T}),n(i,"styles",[b,w,S,D]),n(i,"properties",{summary:{},sandboxSettings:{reflect:!0,attribute:"sandbox-settings"},previewMode:{reflect:!0,attribute:"preview-mode"},disableHighlight:{type:Boolean,attribute:"disable-highlight"},open:{reflect:!0,type:Boolean},resizePosition:{reflect:!0,type:Number,attribute:"resize-position"},resizing:{reflect:!0,type:Boolean},language:{},unescapeBehavior:{reflect:!0},code:{attribute:!1},previewCode:{attribute:!1}});function P(o,e,t,r){return o.substring(0,e)+r+o.substring(t)}function H(o,e){let t=[...o.matchAll(e)],r=t[t.length-1];if(!r||r.index==null)return o;let{index:s}=r,a=s,d=s+r[0].length,c="</"+r[1]+">";return P(o,a,d,c)}var h=class extends i{highlight(e=this.code){return x(e,y.languages[this.language],this.language)}};n(h,"baseName","light-preview"),n(h,"styles",i.styles.concat([v]));export{h as a};
//# sourceMappingURL=/light-pen/pull/9/bridgetown/static/chunks/chunk-AY2RPGYN.js.map
