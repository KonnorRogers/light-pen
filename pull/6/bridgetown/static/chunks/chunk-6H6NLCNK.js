import{a as G,b as _,c as j,d as E,e as P,f as D,g as $,h as I,i as O,j as q,k as x,l as w,m as y,n as V,o as B,p as Q,r as U,s as W}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-ANZGNVLF.js";import{d as C}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var{I:ie}=P;var F=i=>i.strings===void 0,J=()=>document.createComment(""),m=(i,e,t)=>{var r;let n=i._$AA.parentNode,s=e===void 0?i._$AB:e._$AA;if(t===void 0){let o=n.insertBefore(J(),s),c=n.insertBefore(J(),s);t=new ie(o,c,i,i.options)}else{let o=t._$AB.nextSibling,c=t._$AM,p=c!==i;if(p){let h;(r=t._$AQ)===null||r===void 0||r.call(t,i),t._$AM=i,t._$AP!==void 0&&(h=i._$AU)!==c._$AU&&t._$AP(h)}if(o!==s||p){let h=t._$AA;for(;h!==o;){let v=h.nextSibling;n.insertBefore(h,s),h=v}}}return t},f=(i,e,t=i)=>(i._$AI(e,t),i),se={},K=(i,e=se)=>i._$AH=e,X=i=>i._$AH,T=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA,r=i._$AB.nextSibling;for(;t!==r;){let n=t.nextSibling;t.remove(),t=n}};var A=(i,e)=>{var t,r;let n=i._$AN;if(n===void 0)return!1;for(let s of n)(r=(t=s)._$AO)===null||r===void 0||r.call(t,e,!1),A(s,e);return!0},H=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},Y=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),ae(e)}};function ne(i){this._$AN!==void 0?(H(this),this._$AM=i,Y(this)):this._$AM=i}function oe(i,e=!1,t=0){let r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(r))for(let s=t;s<r.length;s++)A(r[s],!1),H(r[s]);else r!=null&&(A(r,!1),H(r));else A(this,i)}var ae=i=>{var e,t,r,n;i.type==x.CHILD&&((e=(r=i)._$AP)!==null&&e!==void 0||(r._$AP=oe),(t=(n=i)._$AQ)!==null&&t!==void 0||(n._$AQ=ne))},L=class extends y{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Y(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,n;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),t&&(A(this,e),H(this))}setValue(e){if(F(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var M=new WeakMap,Z=w(class extends L{render(i){return E}update(i,[e]){var t;let r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),E}ot(i){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,r=M.get(t);r===void 0&&(r=new WeakMap,M.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=M.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var ee=G`
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
`;var S=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var k=class extends S{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};var te=(i,e,t)=>{let r=new Map;for(let n=e;n<=t;n++)r.set(i[n],n);return r},re=w(class extends y{constructor(i){if(super(i),i.type!==x.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);let n=[],s=[],o=0;for(let c of i)n[o]=r?r(c,o):o,s[o]=t(c,o),o++;return{values:s,keys:n}}render(i,e,t){return this.ct(i,e,t).values}update(i,[e,t,r]){var n;let s=X(i),{values:o,keys:c}=this.ct(e,t,r);if(!Array.isArray(s))return this.ut=c,o;let p=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],h=[],v,R,a=0,u=s.length-1,l=0,d=o.length-1;for(;a<=u&&l<=d;)if(s[a]===null)a++;else if(s[u]===null)u--;else if(p[a]===c[l])h[l]=f(s[a],o[l]),a++,l++;else if(p[u]===c[d])h[d]=f(s[u],o[d]),u--,d--;else if(p[a]===c[d])h[d]=f(s[a],o[d]),m(i,h[d+1],s[a]),a++,d--;else if(p[u]===c[l])h[l]=f(s[u],o[l]),m(i,s[a],s[u]),u--,l++;else if(v===void 0&&(v=te(c,l,d),R=te(p,a,u)),v.has(p[a]))if(v.has(p[u])){let g=R.get(c[l]),z=g!==void 0?s[g]:null;if(z===null){let N=m(i,s[a]);f(N,o[l]),h[l]=N}else h[l]=f(z,o[l]),m(i,s[a],z),s[g]=null;l++}else T(s[u]),u--;else T(s[a]),a++;for(;l<=d;){let g=m(i,h[d+1]);f(g,o[l]),h[l++]=g}for(;a<=u;){let g=s[a++];g!==null&&T(g)}return this.ut=c,K(i,h),j}});$.registerLanguage("javascript",I);$.registerLanguage("xml",O);$.registerLanguage("css",q);var b=class extends B{constructor(){super(),this.language="xml",this.value="",this.textarea=null}render(){let e=this.language,t=V(this.highlightCode({code:this.value,language:e}));return this.syncScroll(),_`
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
            @selectionchange=${r=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @input=${r=>{this.injectGutterCells(),this.setCurrentLineHighlight(),this.value=r.currentTarget.value,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${r=>{this.injectGutterCells(),this.setCurrentLineHighlight(),this.value=r.currentTarget.value,this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @scroll=${r=>{this.setCurrentLineHighlight(),this.syncScroll()}}
            .value=${this.value}
          ></textarea>
        </div> <!-- base-editor -->
			</div> <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:r,right:n,top:s,bottom:o}=e[0].contentRect,c=r+n,p=s+o;this.dispatchEvent(new k("light-resize",{height:p,width:c})),this.syncScroll(),this.injectGutterCells()}updated(e){super.updated(e),this.syncScroll(),this.injectGutterCells()}syncScroll(){let e=this.shadowRoot?.querySelector("textarea");if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft);let r=this.shadowRoot?.querySelector("[part~='gutter']");r&&(r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(t),this.textareaMutationObserver=new MutationObserver(r=>{this.value=t.value}),this.textareaMutationObserver.observe(t,{characterData:!0,subtree:!0})}handleSlotChangeEvent(e){let r=e.target.assignedElements({flatten:!0}),n=W(this.unescapeCharacters(r.map(s=>s.innerHTML).join(`
`)));n.trim()&&(this.value=n,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}disconnectedCallback(){this.textareaMutationObserver?.disconnect(),super.disconnectedCallback()}keydownHandler(e){}setCurrentLineHighlight(){let e=this.shadowRoot?.querySelector("code");if(!e)return;let t=this.getCurrentLineNumber();if(t!=null&&t>=0){let r=e.children[t];this.removeCurrentLineHighlight(),r.classList.add("active")}}removeCurrentLineHighlight(){let e=this.shadowRoot?.querySelector("code");e&&e.querySelectorAll(".light-line.active")?.forEach(t=>t.classList.remove("active"))}highlightCode(e){let{code:t,language:r}=e;t=this.unescapeCharacters(t),t=this.injectNewLine(t),t=$.highlight(t,{language:r}).value;let n=/\n(?!$)/;return t=t.split(n).map(s=>`<span class="light-line">${s}</span>`).join(`
`),t}injectGutterCells(){let e=this.shadowRoot?.querySelector("[part~='gutter']");e&&D(this.renderGutterCells(),e)}getCurrentLineNumber(){let e=this.textarea;return e?e.value.substr(0,e.selectionStart).split(`
`).length-1:void 0}calculateLineHeight(e){if(!(e instanceof HTMLElement))return 0;let t=parseInt(window.getComputedStyle(e).lineHeight,10),r,n,s;return isNaN(t)&&(r=e.cloneNode(),r.innerHTML="<br>",e.appendChild(r),n=r.offsetHeight,r.innerHTML="<br><br>",s=r.offsetHeight,e.removeChild(r),t=s-n),t}renderGutterCells(){let e=this.shadowRoot?.querySelector("pre > code")?.children;if(!e)return"";let t=Array.from(e);return re(t,(r,n)=>{let s=r.offsetHeight;return n+s},(r,n)=>{let s=r.offsetHeight;return s?_`<span part="gutter-cell" style="${`height: ${s}px`}">${n}</span>`:_`<span part="gutter-cell">${n}</span>`})}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return console.log("TEXT: ",e),(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};C(b,"baseName","light-editor"),C(b,"styles",[Q,ee,U]),C(b,"properties",{label:{},value:{},language:{reflect:!0}});export{b as a};
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
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-6H6NLCNK.js.map
