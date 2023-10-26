import{a as A,b as _,c as l,d as c,e as b,f as T,g as x,i as y,j as a,k as d,l as h,m as p,n as w,o as C,p as E,q as S}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-KVOKNQEI.js";import{d as v}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-HTPW2NLW.js";var R=A`
  [part~="editor"] {
    display:grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    column-gap: 0;
    row-gap: 0;
    position: relative;
    padding-top: 3px;
  }

  [part~="textarea"] {
    position: relative;
    color: transparent;
    background-color: transparent;
    caret-color: black;
    z-index: 1;
    resize: vertical;
  }

  [part~="pre"],
  [part~="textarea"] {
    grid-area:1/1/2/2;
    margin-bottom:0;
    min-height:15em;
    margin: 0;
    padding: 0;
	  display: block;
	  line-height: 1.5;
    padding: 8px;
    border: none;
    overflow: auto;
    position: relative;

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
`;var{I}=b;var m=r=>r.strings===void 0;var N={},P=(r,e=N)=>r._$AH=e;var Q=d(class extends h{constructor(r){if(super(r),r.type!==a.PROPERTY&&r.type!==a.ATTRIBUTE&&r.type!==a.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!m(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===l||e===c)return e;let t=r.element,i=r.name;if(r.type===a.PROPERTY){if(e===t[i])return l}else if(r.type===a.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return l}else if(r.type===a.ATTRIBUTE&&t.getAttribute(i)===e+"")return l;return P(r),e}});var u=(r,e)=>{var t,i;let s=r._$AN;if(s===void 0)return!1;for(let o of s)(i=(t=o)._$AO)===null||i===void 0||i.call(t,e,!1),u(o,e);return!0},f=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},k=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),H(e)}};function B(r){this._$AN!==void 0?(f(this),this._$AM=r,k(this)):this._$AM=r}function G(r,e=!1,t=0){let i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)u(i[o],!1),f(i[o]);else i!=null&&(u(i,!1),f(i));else u(this,r)}var H=r=>{var e,t,i,s;r.type==a.CHILD&&((e=(i=r)._$AP)!==null&&e!==void 0||(i._$AP=G),(t=(s=r)._$AQ)!==null&&t!==void 0||(s._$AQ=B))},g=class extends h{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),k(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(u(this,e),f(this))}setValue(e){if(m(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var $=new WeakMap,M=d(class extends g{render(r){return c}update(r,[e]){var t;let i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(t=r.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=r.element)),c}ot(r){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,i=$.get(t);i===void 0&&(i=new WeakMap,$.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,r),r!==void 0&&this.G.call(this.dt,r)}else this.G.value=r}get rt(){var r,e,t;return typeof this.G=="function"?(e=$.get((r=this.dt)!==null&&r!==void 0?r:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});p.registerLanguage("javascript",w);p.registerLanguage("xml",C);p.registerLanguage("css",E);var n=class extends T{constructor(){super(),this.language="xml",this.value="",this.textarea=null}render(){let e=this.language,t=this.value?S(this.highlightCode({code:this.value,language:e})):"";return _`
			<div class="editor" part="editor">
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
          ${M(this.textareaChanged)}
          data-code-lang=${e}
          part="textarea textarea-${e}"
          spellcheck="false"
          autocorrect="off"
          autocapitalize="off"
          translate="no"
          @keydown=${this.keydownHandler}
          @selectionchange=${i=>{this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
          @input=${i=>{this.syncScroll(i),this.value=i.currentTarget.value,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0}))}}
          @change=${i=>{this.value=i.currentTarget.value,this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0}))}}
          @scroll=${this.syncScroll}
          value=${this.value}
        >${this.value}</textarea>
			</div>
		`}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e,i=this;this.textareaObserver=new MutationObserver(s=>{this.value=t.value}),this.textareaObserver.observe(t,{characterData:!0,subtree:!0})}handleSlotChangeEvent(e){let t=e.target;this.currentWatchedElements=t.assignedElements({flatten:!0})}syncScroll(e){let t=e.target;if(t==null)return;let i=this.shadowRoot?.querySelector("pre");i!=null&&(i.scrollTop=t.scrollTop,i.scrollLeft=t.scrollLeft)}keydownHandler(e){let t=e.target;if(e.key==="Tab"){e.preventDefault(),t.setRangeText("	",t.selectionStart,t.selectionEnd,"end"),this.value=t.value;return}}highlightCode(e){let{code:t,language:i}=e;return t=this.unescapeCharacters(t),t=this.injectNewLine(t),p.highlight(t,{language:i}).value}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return e[e.length-1]==`
`&&(e+=`
`),e}};v(n,"baseName","light-editor"),v(n,"styles",[x,R,y]),v(n,"properties",{label:{},value:{},language:{reflect:!0}});export{n as a};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
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
//# sourceMappingURL=/light-pen/pull/4/bridgetown/static/chunks/chunk-HJ2QDZYZ.js.map
