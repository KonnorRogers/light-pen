import{a as $,b as x,c as v,d as A,e as n,f as _,g as w,h as y,i as g,j as m,k as f,l as T,m as C,n as S,p as z,q as k}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-HDMMF5GX.js";import{d as c}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var{I}=A;var M=s=>s.strings===void 0;var l=(s,e)=>{var t,i;let r=s._$AN;if(r===void 0)return!1;for(let o of r)(i=(t=o)._$AO)===null||i===void 0||i.call(t,e,!1),l(o,e);return!0},h=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while(t?.size===0)},E=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),O(e)}};function D(s){this._$AN!==void 0?(h(this),this._$AM=s,E(this)):this._$AM=s}function L(s,e=!1,t=0){let i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)l(i[o],!1),h(i[o]);else i!=null&&(l(i,!1),h(i));else l(this,s)}var O=s=>{var e,t,i,r;s.type==g.CHILD&&((e=(i=s)._$AP)!==null&&e!==void 0||(i._$AP=L),(t=(r=s)._$AQ)!==null&&t!==void 0||(r._$AQ=D))},d=class extends f{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),E(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),t&&(l(this,e),h(this))}setValue(e){if(M(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var b=new WeakMap,R=m(class extends d{render(s){return v}update(s,[e]){var t;let i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(t=s.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=s.element)),v}ot(s){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,i=b.get(t);i===void 0&&(i=new WeakMap,b.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,s),s!==void 0&&this.G.call(this.dt,s)}else this.G.value=s}get rt(){var s,e,t;return typeof this.G=="function"?(e=b.get((s=this.dt)!==null&&s!==void 0?s:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var H=$`
  :host {
    --padding: 16px;
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
    caret-color: darkgrey;
  }

  [part~="textarea"] {
    color: transparent;
    background-color: transparent;
    caret-color: black;
    z-index: 1;
    resize: none;
    position: absolute;
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

  [part~="pre"], [part~="textarea"], [part~="code"] {
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

    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
  }

  [part~="pre"],
  [part~="textarea"] {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
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

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`;var u=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var p=class extends u{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};n.registerLanguage("javascript",_);n.registerLanguage("xml",w);n.registerLanguage("css",y);var a=class extends C{constructor(){super(),this.language="xml",this.value="",this.textarea=null}render(){let e=this.language,t=this.value?T(this.highlightCode({code:this.value,language:e})):"";return this.syncScroll(),x`
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
          @selectionchange=${i=>{this.syncScroll(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
          @input=${i=>{this.value=i.currentTarget.value,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
          @change=${i=>{this.value=i.currentTarget.value,this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
          @scroll=${i=>{this.syncScroll()}}
          .value=${this.value}
        ></textarea>
			</div>

      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:i,right:r,top:o,bottom:G}=e[0].contentRect,N=i+r,P=o+G;this.dispatchEvent(new p("light-resize",{height:P,width:N}))}updated(){this.syncScroll()}syncScroll(){let e=this.shadowRoot?.querySelector("textarea");if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t!=null&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(i=>this.handleTextAreaResize(i)),this.textareaResizeObserver.observe(t),this.textareaMutationObserver=new MutationObserver(i=>{this.value=t.value}),this.textareaMutationObserver.observe(t,{characterData:!0,subtree:!0})}handleSlotChangeEvent(e){let i=e.target.assignedElements({flatten:!0}),r=k(this.unescapeCharacters(i.map(o=>o.innerHTML).join(`
`)));r.trim()&&(this.value=r,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}disconnectedCallback(){this.textareaMutationObserver?.disconnect(),super.disconnectedCallback()}keydownHandler(e){}highlightCode(e){let{code:t,language:i}=e;return t=this.unescapeCharacters(t),t=this.injectNewLine(t),n.highlight(t,{language:i}).value}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return e[e.length-1]===`
`&&(e+=" "),e}};c(a,"baseName","light-editor"),c(a,"styles",[S,H,z]),c(a,"properties",{label:{},value:{},language:{reflect:!0}});export{a};
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
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-VY3VDIBN.js.map
