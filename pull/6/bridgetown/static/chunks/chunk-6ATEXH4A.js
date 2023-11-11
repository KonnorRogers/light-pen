import{a as $,b as A,c as v,d as _,e as n,f as x,g as w,h as y,i as g,j as m,k as f,l as C,m as T,n as S,p as k,q as M}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-HDMMF5GX.js";import{d as c}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var{I}=_;var E=i=>i.strings===void 0;var l=(i,e)=>{var t,r;let s=i._$AN;if(s===void 0)return!1;for(let o of s)(r=(t=o)._$AO)===null||r===void 0||r.call(t,e,!1),l(o,e);return!0},h=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},z=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),O(e)}};function D(i){this._$AN!==void 0?(h(this),this._$AM=i,z(this)):this._$AM=i}function L(i,e=!1,t=0){let r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let o=t;o<r.length;o++)l(r[o],!1),h(r[o]);else r!=null&&(l(r,!1),h(r));else l(this,i)}var O=i=>{var e,t,r,s;i.type==g.CHILD&&((e=(r=i)._$AP)!==null&&e!==void 0||(r._$AP=L),(t=(s=i)._$AQ)!==null&&t!==void 0||(s._$AQ=D))},d=class extends f{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),z(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(l(this,e),h(this))}setValue(e){if(E(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var b=new WeakMap,R=m(class extends d{render(i){return v}update(i,[e]){var t;let r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),v}ot(i){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,r=b.get(t);r===void 0&&(r=new WeakMap,b.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=b.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var H=$`
  :host {
    --padding: 16px;
  }

  [part~="base"] {
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
    caret-color: darkgrey;

    /* this creates line-wrapping. */
	  /* word-break: break-word; */
    /* white-space: pre-wrap; */

    /* No wrapping */
	  /* word-break: break-all; */
    white-space: pre;
  }

  [part~="textarea"] {
    position: relative;
    color: transparent;
    background-color: transparent;
    caret-color: black;
    z-index: 1;
    resize: none;
  }

  [part~="pre"] {
    border-color: transparent;
  }

  [part~="base"]:focus-within {
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
    color: red;
  }

  [part~="code"] {
  }

  [part~="pre"],
  [part~="textarea"] {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;
    caret-color: inherit;
    white-space: inherit;
    white-space: inherit;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px;
    border: none;
    overflow: auto;

    border: 1px solid transparent;
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
`;var u=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var p=class extends u{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};n.registerLanguage("javascript",x);n.registerLanguage("xml",w);n.registerLanguage("css",y);var a=class extends T{constructor(){super(),this.language="xml",this.value="",this.textarea=null}render(){let e=this.language,t=this.value?C(this.highlightCode({code:this.value,language:e})):"";return this.syncScroll(),A`
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
          ${R(this.textareaChanged)}
          @keydown=${this.keydownHandler}
          @focus=${()=>{this.syncScroll(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
          @blur=${()=>{this.syncScroll(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
          @selectionchange=${r=>{this.syncScroll(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
          @input=${r=>{this.value=r.currentTarget.value,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
          @change=${r=>{this.value=r.currentTarget.value,this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
          @scroll=${r=>{this.syncScroll()}}
          .value=${this.value}
        ></textarea>
			</div>

      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:r,right:s,top:o,bottom:N}=e[0].contentRect,G=r+s,P=o+N;this.dispatchEvent(new p("light-resize",{height:P,width:G}))}updated(){this.syncScroll()}syncScroll(){let e=this.shadowRoot?.querySelector("textarea");if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t!=null&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(t),this.textareaMutationObserver=new MutationObserver(r=>{this.value=t.value}),this.textareaMutationObserver.observe(t,{characterData:!0,subtree:!0})}handleSlotChangeEvent(e){let r=e.target.assignedElements({flatten:!0}),s=M(this.unescapeCharacters(r.map(o=>o.innerHTML).join(`
`)));s.trim()&&(this.value=s,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}disconnectedCallback(){this.textareaMutationObserver?.disconnect(),super.disconnectedCallback()}keydownHandler(e){}highlightCode(e){let{code:t,language:r}=e;return t=this.unescapeCharacters(t),t=this.injectNewLine(t),n.highlight(t,{language:r}).value}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return e[e.length-1]===`
`&&(e+=" "),e}};c(a,"baseName","light-editor"),c(a,"styles",[S,H,k]),c(a,"properties",{label:{},value:{},language:{reflect:!0}});export{a};
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
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-6ATEXH4A.js.map
