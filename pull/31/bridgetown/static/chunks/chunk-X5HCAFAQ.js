import{a as S,b as p,c as $,d as M}from"/light-pen/pull/31/bridgetown/static/chunks/chunk-5RDEPJWX.js";import{a as R}from"/light-pen/pull/31/bridgetown/static/chunks/chunk-JGUZ63WH.js";import{a as g,f as v,g as c,h as y,i as x,j as z}from"/light-pen/pull/31/bridgetown/static/chunks/chunk-FANKCY3Y.js";import{a as m,b as h,g as f,h as b,i as w}from"/light-pen/pull/31/bridgetown/static/chunks/chunk-Y7VMH7Y3.js";import{d}from"/light-pen/pull/31/bridgetown/static/chunks/chunk-TJ5TKM2Q.js";var H=m`
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
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) repeat(
        3,
        minmax(0, auto)
      );
    height: 100%;
    min-height: inherit;
  }

  [part~="panel-resizer"] {
    display: grid;
    align-content: center;
    border-color: transparent;
    border-radius: 0;
    border-inline-start: 1px solid var(--border-color);
  }

  :host(:not([resize-position="100"])) [part~="panel-resizer"] {
    border-inline-end: 1px solid var(--border-color);
  }

  [part~="preview"] {
    display: grid;
    grid-template-columns:
      minmax(0, var(--start-panel-width, 1fr)) minmax(0, auto)
      minmax(0, var(--end-panel-width, auto));
    overflow: auto;
    resize: vertical;
    min-height: max-content;
    width: 100%;
    max-width: 100%;
  }

  [part~="start-panel"] {
    padding: 1rem;
    min-width: 100%;
    max-width: 100%;
  }

  [part~="end-panel"] {
    background-color: rgba(0, 0, 0, 0.025);
  }

  [part~="code-wrapper"] {
    border-top: 1px solid var(--border-color);
  }

  [part~="actions"] {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-template-columns: minmax(0, auto) minmax(0, 1fr) repeat(
        auto-fill,
        minmax(0, auto)
      );
    grid-template-rows: minmax(0, 1fr);
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
    font-size: 1em;
    padding: 0.75rem;
  }

  [part~="source-code-toggle"] svg {
    transform-origin: 50% 50%;
    transition: 0.25s transform ease;
  }

  [part~="source-code-toggle"][aria-expanded="true"] svg {
    transform: rotate(180deg);
  }

  [part~="source-details"]::part(summary) {
    display: none;
  }
`;function T(a,e=" "){let t=[];for(let[i,s]of Object.entries(a))s&&t.push(i);return t.join(e)}function D(a,e,t,i){return a.substring(0,e)+i+a.substring(t)}function L(a,e){let t=[...a.matchAll(e)],i=t[t.length-1];if(!i||i.index==null)return a;let{index:s}=i,r=s,o=s+i[0].length,n="</"+i[1]+">";return D(a,r,o,n)}var O="Show source code",l=class extends w{constructor(){super(),this.sandboxSettings="",this.summary=O,this.previewMode="iframe",this.resizing=!1,this.previewHtml="",this.open=!1,this.resizePosition=100,this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.previewHtmlDebounce=c(()=>this.handleMutation("preview-html"),20),this.codeDebounce=c(()=>this.handleMutation("code"),20),this.scriptScope="document",this.language="html",this.preserveWhitespace=!1,this.disableHighlight=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.code="",this.highlighter=v(),this.wrap="soft",this.unescapeBehavior="last"}resetIframeCodeMutationObserver(){this.previewHtmlMutationObserver&&this.previewHtmlMutationObserver.disconnect(),this.previewHtmlMutationObserver=new MutationObserver((...t)=>this.previewHtmlDebounce());let e=this.findSlot("preview-html")?.assignedElements({flatten:!0})||[];for(let t of e)this.previewHtmlMutationObserver.observe(t,this.__mutationObserverConfig)}resetCodeMutationObserver(){this.codeMutationObserver&&this.codeMutationObserver.disconnect(),this.codeMutationObserver=new MutationObserver((...t)=>this.codeDebounce());let e=this.findSlot("code")?.assignedElements({flatten:!0})||[];for(let t of e)this.codeMutationObserver.observe(t,this.__mutationObserverConfig)}handleMutation(e){if(e==="preview-html"){this.handleTemplate({target:this.findSlot("preview-html")});return}if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let t=e.target;if(t==null)return;let i=t.getAttribute("name");if(["preview-html","code"].includes(i||"")===!1)return;let s="type"in e&&e.type==="slotchange",r=t.assignedElements({flatten:!0}),o=x(y(...r).trim());if(i==="preview-html"){s&&this.resetIframeCodeMutationObserver(),this.previewHtml=o,this.requestUpdate("previewHtml");return}if(i==="code"){s&&this.resetCodeMutationObserver(),this.code=o,this.requestUpdate("code");return}}updateIframeContent(){let e=this.previewHtml||this.code,t=this.shadowRoot?.querySelector("iframe");if(!t)return;let i=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          ${e}
        </body>
      </html>`;t.srcdoc=i}escapeCharacters(e){return e}transformTags(e){let t=/&lt;\/([\w\d\.-_]+)>/g;return this.unescapeBehavior==="last"?L(e,t):this.unescapeBehavior==="all"?e.replaceAll(t,"</$1>"):e}willUpdate(e){["previewHtml","code"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300),this.shadowRoot&&this.addShadowRootToPreview(this.shadowRoot)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),i=e+t;this.cachedWidth=i}handleResize(e){let{left:t,right:i}=e[0].contentRect,s=t+i;this.cachedWidth=s}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.resetIframeCodeMutationObserver(),this.resetCodeMutationObserver()})}highlight(e=this.code){return e}addShadowRootToPreview(e){let t=e.querySelector("[part~='preview-div']");if(!t)return;let i=this.transformTags(this.previewHtml||this.code);if(t.shadowRoot||t.attachShadow({mode:"open"}),!t.shadowRoot)return;t.shadowRoot.innerHTML=i;function s(r,o){Array.from(o.attributes).forEach(n=>{r.setAttribute(n.nodeName,n.nodeValue||"")})}t.shadowRoot?.querySelectorAll("script").forEach(r=>{if(r.type==="module"||r.type.trim()===""||r.type.includes("javascript")){let o=document.createElement("script");if(o.innerHTML=r.innerHTML,s(o,r),this.scriptScope!=="shadow-dom"){r.replaceWith(o);return}r.remove();let n=t,C=t.shadowRoot;(u=>Function("document",u).bind(n,C,u)())(o.innerHTML)}})}render(){return h`
      <div
        part=${T({base:!0})}
      >
        <div part="preview">
          ${g(this.previewMode==="shadow-dom",()=>h`<div part="start-panel preview-div"></div>`,()=>h`
              <iframe
                part="start-panel iframe"
                height="auto"
                frameborder="0"
                sandbox=${S(this.sandboxSettings?this.sandboxSettings:null)}
              ></iframe>
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
            <slot name="resize-icon"> ${M} </slot>
          </button>

          <div part="end-panel"></div>
        </div>

        <div part="above-expanded-code">
          <slot name="above-expanded-code"></slot>
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
            <light-code
              .preserveWhitespace=${this.preserveWhitespace}
              .language=${this.language}
              .code=${this.transformTags(this.code)}
              wrap=${this.wrap}
              ?disable-highlight=${this.disableHighlight}
              ?disable-line-numbers=${this.disableLineNumbers}
              .highlighter=${this.highlighter}
              .highlightLines=${this.highlightLines}
              .insertedLines=${this.insertedLines}
              .deletedLines=${this.deletedLines}
              .lineNumberStart=${this.lineNumberStart}
            ></light-code>
          </div>
        </light-disclosure>
        <div part="after-expanded-code">
          <slot name="after-expanded-code"></slot>
        </div>
        <div part="actions">
          <div><slot name="before-toggle-button"></slot></div>
          <button
            class="light-button"
            part="source-code-toggle"
            aria-expanded=${this.open}
            aria-controls="details"
            @click=${()=>this.open=!this.open}
            type="button"
          >
            <slot name="summary">${this.summary||O}</slot>
            <slot name="source-code-toggle-icon">
              <svg
                part="source-code-toggle-icon"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </slot>
          </button>
          <slot name="actions"></slot>
        </div>
        <div part="after-actions"><slot name="after-actions"></slot></div>
      </div>

      <div hidden>
        <slot name="preview-html" @slotchange=${this.handleTemplate}></slot>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `}get panelResizer(){return this.shadowRoot?.querySelector("[part~='panel-resizer']")}handleDrag(e){e.cancelable&&e.preventDefault();let t=this.shadowRoot?.querySelector("iframe");t&&(t.style.pointerEvents="none"),this.resizing=!0;let s=(e.currentTarget?.offsetWidth||0)/2;$(this,{onMove:(r,o)=>{let n=r+s;this.resizePosition=p(0,this.pixelsToPercentage(n),100),this.updateResizePosition(),this.resizing=!0},onStop:()=>{let r=this.shadowRoot?.querySelector("iframe");r&&(r.style.pointerEvents="auto"),this.resizing=!1},initialEvent:e})}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let i=100-t;this.style.setProperty("--start-panel-width",`clamp(100px, ${t}%, 100%)`),this.style.setProperty("--end-panel-width",`${i}%`)}}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,i=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=i),e.key==="ArrowRight"&&(t+=i),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=p(0,t,100)}}pixelsToPercentage(e){return e/this.cachedWidth*100}};d(l,"baseName","light-preview"),d(l,"dependencies",{"light-disclosure":R,"light-code":z}),d(l,"styles",[f,b,H]),d(l,"properties",{summary:{},sandboxSettings:{reflect:!0,attribute:"sandbox-settings"},previewMode:{reflect:!0,attribute:"preview-mode"},open:{reflect:!0,type:Boolean},resizePosition:{reflect:!0,type:Number,attribute:"resize-position"},resizing:{reflect:!0,type:Boolean},scriptScope:{attribute:"script-scope"},previewHtml:{attribute:"preview-html"},unescapeBehavior:{attribute:"unescape-behavior"},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserve-whitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{},highlighter:{attribute:!1,state:!0}});export{l as a};
//# sourceMappingURL=/light-pen/pull/31/bridgetown/static/chunks/chunk-X5HCAFAQ.js.map
