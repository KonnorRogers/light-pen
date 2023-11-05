import{a as A,b as x,c as v,d as _,e as n,f as w,g as y,h as C,i as g,j as m,k as f,l as T,m as M,n as k,p as S,q as E}from"/light-pen/bridgetown/static/chunks/chunk-UH4JBVJQ.js";import{d as c}from"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var{I}=_;var R=r=>r.strings===void 0;var l=(r,e)=>{var t,i;let s=r._$AN;if(s===void 0)return!1;for(let a of s)(i=(t=a)._$AO)===null||i===void 0||i.call(t,e,!1),l(a,e);return!0},h=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},z=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),L(e)}};function O(r){this._$AN!==void 0?(h(this),this._$AM=r,z(this)):this._$AM=r}function D(r,e=!1,t=0){let i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let a=t;a<i.length;a++)l(i[a],!1),h(i[a]);else i!=null&&(l(i,!1),h(i));else l(this,r)}var L=r=>{var e,t,i,s;r.type==g.CHILD&&((e=(i=r)._$AP)!==null&&e!==void 0||(i._$AP=D),(t=(s=r)._$AQ)!==null&&t!==void 0||(s._$AQ=O))},d=class extends f{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),z(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(l(this,e),h(this))}setValue(e){if(R(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var $=new WeakMap,H=m(class extends d{render(r){return v}update(r,[e]){var t;let i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(t=r.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=r.element)),v}ot(r){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,i=$.get(t);i===void 0&&(i=new WeakMap,$.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,r),r!==void 0&&this.G.call(this.dt,r)}else this.G.value=r}get rt(){var r,e,t;return typeof this.G=="function"?(e=$.get((r=this.dt)!==null&&r!==void 0?r:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var N=A`
  [part~="base"] {
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

    height: var(--textarea-height, auto);
    width: var(--textarea-width, auto);
    max-width: 100%;
    max-height: 100%;

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
`;var u=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var p=class extends u{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};n.registerLanguage("javascript",w);n.registerLanguage("xml",y);n.registerLanguage("css",C);var o=class extends M{constructor(){super(),this.language="xml",this.value="",this.textarea=null}handleTextAreaResize(e){let{target:t}=e[0],{left:i,right:s,top:a,bottom:P}=e[0].contentRect,G=i+s,b=a+P;t.parentElement.style.setProperty("--textarea-height",`${b}px`),this.dispatchEvent(new p("light-resize",{height:b,width:G}))}render(){let e=this.language,t=this.value?T(this.highlightCode({code:this.value,language:e})):"";return x`
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
          ${H(this.textareaChanged)}
          @keydown=${this.keydownHandler}
          @selectionchange=${i=>{this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
          @input=${i=>{this.syncScroll(i),this.value=i.currentTarget.value,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0}))}}
          @change=${i=>{this.value=i.currentTarget.value,this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0}))}}
          @scroll=${this.syncScroll}
          .value=${this.value}
        ></textarea>
			</div>

      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textareaResizeObserver=new ResizeObserver(i=>this.handleTextAreaResize(i)),this.textareaResizeObserver.observe(t),this.textareaMutationObserver=new MutationObserver(i=>{this.value=t.value}),this.textareaMutationObserver.observe(t,{characterData:!0,subtree:!0})}handleSlotChangeEvent(e){let i=e.target.assignedElements({flatten:!0}),s=E(this.unescapeCharacters(i.map(a=>a.innerHTML).join(`
`)));s.trim()&&(this.value=s,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}syncScroll(e){let t=e.target;if(t==null)return;let i=this.shadowRoot?.querySelector("pre");i!=null&&(i.scrollTop=t.scrollTop,i.scrollLeft=t.scrollLeft)}disconnectedCallback(){this.textareaResizeObserver?.disconnect(),this.textareaMutationObserver?.disconnect(),super.disconnectedCallback()}keydownHandler(e){let t=e.target}highlightCode(e){let{code:t,language:i}=e;return t=this.unescapeCharacters(t),t=this.injectNewLine(t),n.highlight(t,{language:i}).value}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return e[e.length-1]==`
`&&(e+=`
`),e}};c(o,"baseName","light-editor"),c(o,"styles",[k,N,S]),c(o,"properties",{label:{},value:{},language:{reflect:!0}});export{o as a};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-O3IRB47H.js.map
