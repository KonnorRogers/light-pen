import{a as x,b as w,c as f,d as A,e as a,f as _,g as y,h as C,i as m,j as v,k as b,l as T,m as S,n as H,p as z,q as L}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-HDMMF5GX.js";import{d as h}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var{I:O}=A;var M=i=>i.strings===void 0;var l=(i,e)=>{var t,r;let s=i._$AN;if(s===void 0)return!1;for(let n of s)(r=(t=n)._$AO)===null||r===void 0||r.call(t,e,!1),l(n,e);return!0},d=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},k=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),I(e)}};function j(i){this._$AN!==void 0?(d(this),this._$AM=i,k(this)):this._$AM=i}function P(i,e=!1,t=0){let r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let n=t;n<r.length;n++)l(r[n],!1),d(r[n]);else r!=null&&(l(r,!1),d(r));else l(this,i)}var I=i=>{var e,t,r,s;i.type==m.CHILD&&((e=(r=i)._$AP)!==null&&e!==void 0||(r._$AP=P),(t=(s=i)._$AQ)!==null&&t!==void 0||(s._$AQ=j))},u=class extends b{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),k(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(l(this,e),d(this))}setValue(e){if(M(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var $=new WeakMap,N=v(class extends u{render(i){return f}update(i,[e]){var t;let r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),f}ot(i){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,r=$.get(t);r===void 0&&(r=new WeakMap,$.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=$.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var E=x`
  :host {
  }

  [part~="base"] {
	  font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 1rem;
    height: 15em;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    resize: both;
    font-size: normal;
    font-family: monospace;
    line-height: 1.5; /* Inherited to child elements */
    tab-size: 2;
    caret-color: black;
    counter-reset: linenumber 0;
    display: grid;
    grid-template-columns: minmax(0, auto) minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
  }

  [part~="textarea"], [part~="pre"], [part~="gutter"] {
    padding: 6px;
  }

  [part~="textarea"] {
    color: transparent;
    background-color: transparent;
    caret-color: inherit;
    z-index: 1;
    resize: none;
  }

  [part~="pre"] {
    border-color: transparent;
    position: relative;
  }

  [part~="base"]:focus-within {
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
  }

  [part~="pre"], [part~="textarea"], [part~="code"], [part~="gutter"] {
    /* I don't love this, but it fixes font size inconsistencies on mobile. The alternative is listen for font-size changes, which is...challenging. */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;

    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;

    /* this creates line-wrapping. */
	  word-break: break-word;
    white-space: pre-wrap;

    /* This would remove line-wrapping */
	  /* word-break: break-all; */
    /* white-space: pre; */
  }

  /** Hide scrollbars for the gutter */
  [part~="gutter"]::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }

  [part~="gutter"] {
    color: rgba(0,0,0,0.2);
    font-variant-numeric: tabular-nums;
    padding-inline-end: 16px;
    padding-inline-start: 12px;
    border-inline-end: 1px solid darkgray;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;

    /* this creates line-wrapping. */
	  word-break: break-word;
    white-space: pre-wrap;
    text-align: end;
  }

  [part~="gutter-cell"] {
    font-size: 100%;
    display: block;
  }

  [part~="base-editor"] {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
  }

  [part~="pre"],
  [part~="textarea"] {
    grid-area: 1/1/2/2;
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
    overflow: auto;
    border: 1px solid transparent;
  }

  [part~="gutter"],
  [part~="pre"],
  [part~="code"] {
	  background-color: #f7f7f7;
  }

  [part~="pre"],
  [part~="code"] {
	  color: #272727;
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`;var p=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var g=class extends p{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};a.registerLanguage("javascript",_);a.registerLanguage("xml",y);a.registerLanguage("css",C);var o=class extends S{constructor(){super(),this.language="xml",this.value="",this.textarea=null}render(){let e=this.language,t=T(this.highlightCode({code:this.value,language:e}));return this.syncScroll(),setTimeout(()=>{let r=this.shadowRoot?.querySelector("[part~='gutter']");r&&(r.innerHTML=this.renderGutters())}),w`
			<div class="base" part="base">
			  <div part="gutter">
			  </div>
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
				  <pre
            id="pre-${e}"
            data-code-lang=${e}
            aria-hidden="true"
            part="pre pre-${e}"
          ><code
              part="code code-${e}"
              class="language-${e}"
            >${t}</code></pre>
          <!-- IMPORTANT! There must be no white-space above. -->
				  <textarea
            id="textarea-${e}"
            data-code-lang=${e}
            part="textarea textarea-${e}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            translate="no"
            ${N(this.textareaChanged)}
            @keydown=${this.keydownHandler}
            @focus=${()=>{this.syncScroll(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{this.syncScroll(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
            @selectionchange=${r=>{this.syncScroll(),this.getCurrentLineNumber(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @input=${r=>{this.renderGutters(),this.getCurrentLineNumber(),this.value=r.currentTarget.value,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${r=>{this.renderGutters(),this.getCurrentLineNumber(),this.value=r.currentTarget.value,this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @scroll=${r=>{this.getCurrentLineNumber(),this.syncScroll()}}
            .value=${this.value}
          ></textarea>
        </div> <!-- base-editor -->
			</div> <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:r,right:s,top:n,bottom:c}=e[0].contentRect,R=r+s,G=n+c;this.dispatchEvent(new g("light-resize",{height:G,width:R})),this.syncScroll(),this.renderGutters()}updated(){this.syncScroll()}syncScroll(){let e=this.shadowRoot?.querySelector("textarea");if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft);let r=this.shadowRoot?.querySelector("[part~='gutter']");r&&(r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(t),this.textareaMutationObserver=new MutationObserver(r=>{this.value=t.value}),this.textareaMutationObserver.observe(t,{characterData:!0,subtree:!0})}handleSlotChangeEvent(e){let r=e.target.assignedElements({flatten:!0}),s=L(this.unescapeCharacters(r.map(n=>n.innerHTML).join(`
`)));s.trim()&&(this.value=s,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}disconnectedCallback(){this.textareaMutationObserver?.disconnect(),super.disconnectedCallback()}keydownHandler(e){}highlightCode(e){let{code:t,language:r}=e;t=this.unescapeCharacters(t),t=this.injectNewLine(t),t=a.highlight(t,{language:r}).value;let s=/\n(?!$)/;return t=t.split(s).map(n=>`<span class="light-line">${n}</span>`).join(`
`),t}injectGutters(){let e=this.shadowRoot?.querySelector("[part~='gutter']");e&&(e.innerHTML=this.renderGutters())}getCurrentLineNumber(){let e=this.textarea;if(!e)return;let t=e.value.substr(0,e.selectionStart).split(`
`),r=t.length-1,s=t[t.length-1].length;console.log("Current Line Number "+r+" Current Column Index "+s)}calculateLineHeight(e){if(!(e instanceof HTMLElement))return 0;let t=parseInt(window.getComputedStyle(e).lineHeight,10),r,s,n;return isNaN(t)&&(r=e.cloneNode(),r.innerHTML="<br>",e.appendChild(r),s=r.offsetHeight,r.innerHTML="<br><br>",n=r.offsetHeight,e.removeChild(r),t=n-s),t}renderGutters(){let e=this.shadowRoot?.querySelector("pre > code")?.children;if(!e)return"";let t=this.calculateLineHeight(e[0]);return Array.from(e).map((r,s)=>{let n=t,c=r.offsetHeight;return c>t&&(n=Math.ceil(c/t)*t),n?`<span part="gutter-cell" style="${`height: ${n}px`}">${s}</span>`:`<span part="gutter-cell">${s}</span>`}).join("")}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return console.log("TEXT: ",e),(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};h(o,"baseName","light-editor"),h(o,"styles",[H,E,z]),h(o,"properties",{label:{},value:{},language:{reflect:!0}});export{o as a};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-O57TRNBW.js.map
