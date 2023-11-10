import{a as A,b as _,c as v,d as w,e as l,f as y,g as C,h as T,i as m,j as g,k as f,l as S,m as E,n as M,p as k,q as N}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-HDMMF5GX.js";import{d as c}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var{I:B}=w;var R=i=>i.strings===void 0;var n=(i,e)=>{var t,r;let s=i._$AN;if(s===void 0)return!1;for(let a of s)(r=(t=a)._$AO)===null||r===void 0||r.call(t,e,!1),n(a,e);return!0},h=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},P=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),O(e)}};function L(i){this._$AN!==void 0?(h(this),this._$AM=i,P(this)):this._$AM=i}function D(i,e=!1,t=0){let r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let a=t;a<r.length;a++)n(r[a],!1),h(r[a]);else r!=null&&(n(r,!1),h(r));else n(this,i)}var O=i=>{var e,t,r,s;i.type==m.CHILD&&((e=(r=i)._$AP)!==null&&e!==void 0||(r._$AP=D),(t=(s=i)._$AQ)!==null&&t!==void 0||(s._$AQ=L))},d=class extends f{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),P(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(n(this,e),h(this))}setValue(e){if(R(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var $=new WeakMap,z=g(class extends d{render(i){return v}update(i,[e]){var t;let r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),v}ot(i){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,r=$.get(t);r===void 0&&(r=new WeakMap,$.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=$.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var H=A`
  :host {
    display: grid;
    grid-template-rows: minmax(0, 1fr);
  }

  [part~="base"] {
    display: grid;
    grid-template-rows: minmax(0, 1fr);
    grid-template-columns: minmax(0, 1fr);
  }

  [part~="textarea"] {
    position: relative;
    color: transparent;
    background-color: transparent;
    caret-color: black;
    z-index: 1;
    resize: both;
  }

  [part~="pre"] {
    border-color: transparent;
    max-height: var(--textarea-height);
    max-width: var(--textarea-width);
  }

  [part~="textarea"]:focus {
    outline: 2px solid dodgerblue;
  }

  [part~="pre"],
  [part~="textarea"] {
    overflow: auto;
    max-height: 100%;
    max-width: 100%;
    grid-area: 1/1/2/2;
    margin-bottom:0;
    margin: 0;
	  display: block;
	  line-height: 1.5;
    /* border: 2px solid red; */
    border: 1px solid transparent;
    position: relative;
    padding: 8px;

    /* this creates line-wrapping. */
	  word-break: break-word;
    white-space: pre-wrap;

    /* No wrapping */
	  /* word-break: break-all; */
    /* white-space: pre; */
    tab-size: 2;
  }

  [part~="pre"],
  [part~="code"] {
	  color: #272727;
	  background-color: #f7f7f7;
  }

  [part~="pre"],
  [part~="code"],
  [part~="textarea"] {
	  font-family: Menlo, Monaco, "Courier New", monospace;
	  font-size: 0.875rem;
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`;var u=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var p=class extends u{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};l.registerLanguage("javascript",y);l.registerLanguage("xml",C);l.registerLanguage("css",T);var o=class extends E{constructor(){super(),this.language="xml",this.value="",this.textarea=null}render(){let e=this.language,t=this.value?S(this.highlightCode({code:this.value,language:e})):"";return _`
			<div class="base" part="base">
        <!-- This is where the fancy syntax highlighting comes in -->
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
          ${z(this.textareaChanged)}
          @keydown=${this.keydownHandler}
          @focus=${()=>{this.syncScroll(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
          @blur=${()=>{this.syncScroll(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
          @selectionchange=${r=>{this.syncScroll(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
          @input=${r=>{this.value=this.injectNewLine(r.currentTarget.value),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
          @change=${r=>{this.value=this.injectNewLine(r.currentTarget.value),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
          @scroll=${r=>{this.syncScroll()}}
          .value=${this.value}
        ></textarea>
			</div>

      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:r,right:s,top:a,bottom:G}=e[0].contentRect,b=r+s,x=a+G;t.parentElement.style.setProperty("--textarea-height",`${x}px`),t.parentElement.style.setProperty("--textarea-width",`${b}px`),this.dispatchEvent(new p("light-resize",{height:x,width:b})),this.syncScroll()}syncScroll(){let e=this.shadowRoot?.querySelector("textarea");if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t!=null&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(t),this.textareaMutationObserver=new MutationObserver(r=>{this.value=t.value}),this.textareaMutationObserver.observe(t,{characterData:!0,subtree:!0})}handleSlotChangeEvent(e){let r=e.target.assignedElements({flatten:!0}),s=N(this.unescapeCharacters(r.map(a=>a.innerHTML).join(`
`)));s.trim()&&(this.value=s,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}disconnectedCallback(){this.textareaMutationObserver?.disconnect(),super.disconnectedCallback()}keydownHandler(e){}highlightCode(e){let{code:t,language:r}=e;return t=this.unescapeCharacters(t),t=this.injectNewLine(t),l.highlight(t,{language:r}).value}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return e[e.length-1]==`
`&&(e+=`
`),e}};c(o,"baseName","light-editor"),c(o,"styles",[M,H,k]),c(o,"properties",{label:{},value:{},language:{reflect:!0}});export{o as a};
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
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-2CNAZ4ZC.js.map
