import{a as b,b as A,c as v,d as _,e as n,f as x,g as w,h as y,i as g,j as m,k as f,l as C,m as T,n as S,p as M,q as E}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-HDMMF5GX.js";import{d as c}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var{I}=_;var k=r=>r.strings===void 0;var l=(r,e)=>{var t,s;let i=r._$AN;if(i===void 0)return!1;for(let a of i)(s=(t=a)._$AO)===null||s===void 0||s.call(t,e,!1),l(a,e);return!0},h=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},R=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),O(e)}};function D(r){this._$AN!==void 0?(h(this),this._$AM=r,R(this)):this._$AM=r}function L(r,e=!1,t=0){let s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let a=t;a<s.length;a++)l(s[a],!1),h(s[a]);else s!=null&&(l(s,!1),h(s));else l(this,r)}var O=r=>{var e,t,s,i;r.type==g.CHILD&&((e=(s=r)._$AP)!==null&&e!==void 0||(s._$AP=L),(t=(i=r)._$AQ)!==null&&t!==void 0||(i._$AQ=D))},d=class extends f{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),R(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)===null||s===void 0||s.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(l(this,e),h(this))}setValue(e){if(k(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var $=new WeakMap,z=m(class extends d{render(r){return v}update(r,[e]){var t;let s=e!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.dt=(t=r.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=r.element)),v}ot(r){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,s=$.get(t);s===void 0&&(s=new WeakMap,$.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.dt,void 0),s.set(this.G,r),r!==void 0&&this.G.call(this.dt,r)}else this.G.value=r}get rt(){var r,e,t;return typeof this.G=="function"?(e=$.get((r=this.dt)!==null&&r!==void 0?r:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var H=b`
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
  }

  [part~="pre"],
  [part~="textarea"] {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
	  line-height: 1.5;
    padding: 8px;
    border: none;
    overflow: auto;

    border: 1px solid transparent;

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
`;var u=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var p=class extends u{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};n.registerLanguage("javascript",x);n.registerLanguage("xml",w);n.registerLanguage("css",y);var o=class extends T{constructor(){super(),this.language="xml",this.value="",this.textarea=null}render(){let e=this.language,t=this.value?C(this.highlightCode({code:this.value,language:e})):"";return A`
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
          @selectionchange=${s=>{this.syncScroll(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
          @input=${s=>{this.value=s.currentTarget.value,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
          @change=${s=>{this.value=s.currentTarget.value,this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
          @scroll=${s=>{this.syncScroll()}}
          .value=${this.value}
        ></textarea>
			</div>

      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:s,right:i,top:a,bottom:N}=e[0].contentRect,G=s+i,P=a+N;this.dispatchEvent(new p("light-resize",{height:P,width:G})),this.syncScroll()}syncScroll(){let e=this.shadowRoot?.querySelector("textarea");if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t!=null&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(s=>this.handleTextAreaResize(s)),this.textareaResizeObserver.observe(t),this.textareaMutationObserver=new MutationObserver(s=>{this.value=t.value}),this.textareaMutationObserver.observe(t,{characterData:!0,subtree:!0})}handleSlotChangeEvent(e){let s=e.target.assignedElements({flatten:!0}),i=E(this.unescapeCharacters(s.map(a=>a.innerHTML).join(`
`)));i.trim()&&(this.value=i,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}disconnectedCallback(){this.textareaMutationObserver?.disconnect(),super.disconnectedCallback()}keydownHandler(e){}highlightCode(e){let{code:t,language:s}=e;return t=this.unescapeCharacters(t),t=this.injectNewLine(t),n.highlight(t,{language:s}).value}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return e[e.length-1]==`
`&&(e+=`
`),e}};c(o,"baseName","light-editor"),c(o,"styles",[S,H,M]),c(o,"properties",{label:{},value:{},language:{reflect:!0}});export{o as a};
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
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-CZVJ5BNI.js.map
