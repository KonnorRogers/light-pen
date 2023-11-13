import{a as j,b as C,c as N,d as E,e as P,f as D,g as $,h as I,i as O,j as q,k as x,l as w,m as y,n as V,o as B,p as Q,r as U,s as W}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-ANZGNVLF.js";import{d as _}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var{I:ie}=P;var F=r=>r.strings===void 0,J=()=>document.createComment(""),m=(r,e,t)=>{var i;let o=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){let n=o.insertBefore(J(),s),c=o.insertBefore(J(),s);t=new ie(n,c,r,r.options)}else{let n=t._$AB.nextSibling,c=t._$AM,p=c!==r;if(p){let h;(i=t._$AQ)===null||i===void 0||i.call(t,r),t._$AM=r,t._$AP!==void 0&&(h=r._$AU)!==c._$AU&&t._$AP(h)}if(n!==s||p){let h=t._$AA;for(;h!==n;){let v=h.nextSibling;o.insertBefore(h,s),h=v}}}return t},f=(r,e,t=r)=>(r._$AI(e,t),r),se={},K=(r,e=se)=>r._$AH=e,X=r=>r._$AH,T=r=>{var e;(e=r._$AP)===null||e===void 0||e.call(r,!1,!0);let t=r._$AA,i=r._$AB.nextSibling;for(;t!==i;){let o=t.nextSibling;t.remove(),t=o}};var A=(r,e)=>{var t,i;let o=r._$AN;if(o===void 0)return!1;for(let s of o)(i=(t=s)._$AO)===null||i===void 0||i.call(t,e,!1),A(s,e);return!0},S=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},Y=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),ae(e)}};function oe(r){this._$AN!==void 0?(S(this),this._$AM=r,Y(this)):this._$AM=r}function ne(r,e=!1,t=0){let i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let s=t;s<i.length;s++)A(i[s],!1),S(i[s]);else i!=null&&(A(i,!1),S(i));else A(this,r)}var ae=r=>{var e,t,i,o;r.type==x.CHILD&&((e=(i=r)._$AP)!==null&&e!==void 0||(i._$AP=ne),(t=(o=r)._$AQ)!==null&&t!==void 0||(o._$AQ=oe))},k=class extends y{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Y(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),t&&(A(this,e),S(this))}setValue(e){if(F(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var R=new WeakMap,Z=w(class extends k{render(r){return E}update(r,[e]){var t;let i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(t=r.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=r.element)),E}ot(r){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,i=R.get(t);i===void 0&&(i=new WeakMap,R.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,r),r!==void 0&&this.G.call(this.dt,r)}else this.G.value=r}get rt(){var r,e,t;return typeof this.G=="function"?(e=R.get((r=this.dt)!==null&&r!==void 0?r:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var ee=j`
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

  [part~="gutter-cell"] {
    font-size: 100%;
    display: block;
  }

  .light-line {
    display: inline-block;
  }

  [part~="base"]:focus-within .light-line.active {
    background-color: rgba(255, 247, 0, 0.1);
  }

  .light-line.active {
    background-color: rgba(0,0,0,0.05);
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
`;var z=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var L=class extends z{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};var te=(r,e,t)=>{let i=new Map;for(let o=e;o<=t;o++)i.set(r[o],o);return i},re=w(class extends y{constructor(r){if(super(r),r.type!==x.CHILD)throw Error("repeat() can only be used in text expressions")}ct(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);let o=[],s=[],n=0;for(let c of r)o[n]=i?i(c,n):n,s[n]=t(c,n),n++;return{values:s,keys:o}}render(r,e,t){return this.ct(r,e,t).values}update(r,[e,t,i]){var o;let s=X(r),{values:n,keys:c}=this.ct(e,t,i);if(!Array.isArray(s))return this.ut=c,n;let p=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],h=[],v,M,a=0,u=s.length-1,l=0,d=n.length-1;for(;a<=u&&l<=d;)if(s[a]===null)a++;else if(s[u]===null)u--;else if(p[a]===c[l])h[l]=f(s[a],n[l]),a++,l++;else if(p[u]===c[d])h[d]=f(s[u],n[d]),u--,d--;else if(p[a]===c[d])h[d]=f(s[a],n[d]),m(r,h[d+1],s[a]),a++,d--;else if(p[u]===c[l])h[l]=f(s[u],n[l]),m(r,s[a],s[u]),u--,l++;else if(v===void 0&&(v=te(c,l,d),M=te(p,a,u)),v.has(p[a]))if(v.has(p[u])){let g=M.get(c[l]),H=g!==void 0?s[g]:null;if(H===null){let G=m(r,s[a]);f(G,n[l]),h[l]=G}else h[l]=f(H,n[l]),m(r,s[a],H),s[g]=null;l++}else T(s[u]),u--;else T(s[a]),a++;for(;l<=d;){let g=m(r,h[d+1]);f(g,n[l]),h[l++]=g}for(;a<=u;){let g=s[a++];g!==null&&T(g)}return this.ut=c,K(r,h),N}});$.registerLanguage("javascript",I);$.registerLanguage("xml",O);$.registerLanguage("css",q);var b=class extends B{constructor(){super(),this.language="xml",this.value="",this.textarea=null}render(){let e=this.language,t=V(this.highlightCode({code:this.value,language:e}));return this.syncScroll(),C`
			<div class="base" part="base">
        <!-- Super important to not have white space here due to how white space is handled -->
			  <div part="gutter"></div>
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
            ${Z(this.textareaChanged)}
            @keydown=${this.keydownHandler}
            @focus=${()=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{this.syncScroll(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
            @selectionchange=${i=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @input=${i=>{this.injectGutterCells(),this.setCurrentLineHighlight(),this.value=i.currentTarget.value,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${i=>{this.injectGutterCells(),this.setCurrentLineHighlight(),this.value=i.currentTarget.value,this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @scroll=${i=>{this.setCurrentLineHighlight(),this.syncScroll()}}
            .value=${this.value}
          ></textarea>
        </div> <!-- base-editor -->
			</div> <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:i,right:o,top:s,bottom:n}=e[0].contentRect,c=i+o,p=s+n;this.dispatchEvent(new L("light-resize",{height:p,width:c})),this.syncScroll(),this.injectGutterCells()}updated(e){super.updated(e),this.syncScroll(),this.injectGutterCells()}syncScroll(){let e=this.shadowRoot?.querySelector("textarea");if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft);let i=this.shadowRoot?.querySelector("[part~='gutter']");i&&(i.scrollTop=e.scrollTop,i.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(i=>this.handleTextAreaResize(i)),this.textareaResizeObserver.observe(t),this.textareaMutationObserver=new MutationObserver(i=>{this.value=t.value}),this.textareaMutationObserver.observe(t,{characterData:!0,subtree:!0})}handleSlotChangeEvent(e){let i=e.target.assignedElements({flatten:!0}),o=W(this.unescapeCharacters(i.map(s=>s.innerHTML).join(`
`)));o.trim()&&(this.value=o,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}disconnectedCallback(){this.textareaMutationObserver?.disconnect(),super.disconnectedCallback()}keydownHandler(e){}setCurrentLineHighlight(){let e=this.shadowRoot?.querySelector("code");if(!e)return;let t=this.getCurrentLineNumber();if(t!=null&&t>=0){let i=e.children[t];this.removeCurrentLineHighlight(),i.classList.add("active")}}removeCurrentLineHighlight(){let e=this.shadowRoot?.querySelector("code");e&&e.querySelectorAll(".light-line.active")?.forEach(t=>t.classList.remove("active"))}highlightCode(e){let{code:t,language:i}=e;t=this.unescapeCharacters(t),t=this.injectNewLine(t),t=$.highlight(t,{language:i}).value;let o=/\n(?!$)/;return t=t.split(o).map(s=>`<span class="light-line">${s}</span>`).join(`
`),t}injectGutterCells(){let e=this.shadowRoot?.querySelector("[part~='gutter']");e&&D(this.renderGutterCells(),e)}getCurrentLineNumber(){let e=this.textarea;return e?e.value.substr(0,e.selectionStart).split(`
`).length-1:void 0}renderGutterCells(){let e=this.shadowRoot?.querySelector("pre > code")?.children;if(!e)return"";let t=Array.from(e);return re(t,(i,o)=>{let s=i.offsetHeight;return o+s},(i,o)=>{let s=i.offsetHeight;return s?C`<span part="gutter-cell" style="${`height: ${s}px`}">${o}</span>`:C`<span part="gutter-cell">${o}</span>`})}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return console.log("TEXT: ",e),(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};_(b,"baseName","light-editor"),_(b,"styles",[Q,ee,U]),_(b,"properties",{label:{},value:{},language:{reflect:!0}});export{b as a};
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

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-LGWSIJEI.js.map
