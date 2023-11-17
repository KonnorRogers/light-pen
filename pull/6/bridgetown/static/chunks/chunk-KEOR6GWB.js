import{a as j,b as C,c as P,d as N,e as M,f as D,g as $,h as I,i as B,j as V,k as x,l as w,m as y,n as q,o as O,p as F,r as W,s as Q,t as U}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-3KBMTWBU.js";import{d as _}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var{I:se}=M;var K=i=>i.strings===void 0,J=()=>document.createComment(""),v=(i,e,t)=>{var r;let s=i._$AA.parentNode,n=e===void 0?i._$AB:e._$AA;if(t===void 0){let o=s.insertBefore(J(),n),a=s.insertBefore(J(),n);t=new se(o,a,i,i.options)}else{let o=t._$AB.nextSibling,a=t._$AM,p=a!==i;if(p){let c;(r=t._$AQ)===null||r===void 0||r.call(t,i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==a._$AU&&t._$AP(c)}if(o!==n||p){let c=t._$AA;for(;c!==o;){let m=c.nextSibling;s.insertBefore(c,n),c=m}}}return t},f=(i,e,t=i)=>(i._$AI(e,t),i),ne={},X=(i,e=ne)=>i._$AH=e,Y=i=>i._$AH,L=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA,r=i._$AB.nextSibling;for(;t!==r;){let s=t.nextSibling;t.remove(),t=s}};var A=(i,e)=>{var t,r;let s=i._$AN;if(s===void 0)return!1;for(let n of s)(r=(t=n)._$AO)===null||r===void 0||r.call(t,e,!1),A(n,e);return!0},T=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},Z=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),le(e)}};function oe(i){this._$AN!==void 0?(T(this),this._$AM=i,Z(this)):this._$AM=i}function ae(i,e=!1,t=0){let r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let n=t;n<r.length;n++)A(r[n],!1),T(r[n]);else r!=null&&(A(r,!1),T(r));else A(this,i)}var le=i=>{var e,t,r,s;i.type==x.CHILD&&((e=(r=i)._$AP)!==null&&e!==void 0||(r._$AP=ae),(t=(s=i)._$AQ)!==null&&t!==void 0||(s._$AQ=oe))},k=class extends y{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Z(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(A(this,e),T(this))}setValue(e){if(K(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var R=new WeakMap,ee=w(class extends k{render(i){return N}update(i,[e]){var t;let r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),N}ot(i){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,r=R.get(t);r===void 0&&(r=new WeakMap,R.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=R.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var te=j`
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

  /* Include "pre" if line numbers are disabled */
  [part~="textarea"], [part~="pre"], [part~="gutter"] {
    padding: 0px;
    padding-inline-start: 6px;
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
    color: rgba(0,0,0,0.35);
	  background-color: rgba(50,50,50,0.08);
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
    width: 100%;
  }

  [part~="base"]:focus-within .light-line.is-active {
    background-color: rgba(255, 247, 0, 0.1);
  }

  /* We don't want to show the focus position if the user hasn't interacted with the textarea. */
  :where(:host([has-focused]) .light-line.is-active) {
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

  [part~="pre"],
  [part~="code"] {
	  color: #272727;
	  background-color: #f7f7f7;
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`;var S=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var z=class extends S{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};var ie=(i,e,t)=>{let r=new Map;for(let s=e;s<=t;s++)r.set(i[s],s);return r},re=w(class extends y{constructor(i){if(super(i),i.type!==x.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);let s=[],n=[],o=0;for(let a of i)s[o]=r?r(a,o):o,n[o]=t(a,o),o++;return{values:n,keys:s}}render(i,e,t){return this.ct(i,e,t).values}update(i,[e,t,r]){var s;let n=Y(i),{values:o,keys:a}=this.ct(e,t,r);if(!Array.isArray(n))return this.ut=a,o;let p=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],c=[],m,E,l=0,u=n.length-1,h=0,d=o.length-1;for(;l<=u&&h<=d;)if(n[l]===null)l++;else if(n[u]===null)u--;else if(p[l]===a[h])c[h]=f(n[l],o[h]),l++,h++;else if(p[u]===a[d])c[d]=f(n[u],o[d]),u--,d--;else if(p[l]===a[d])c[d]=f(n[l],o[d]),v(i,c[d+1],n[l]),l++,d--;else if(p[u]===a[h])c[h]=f(n[u],o[h]),v(i,n[l],n[u]),u--,h++;else if(m===void 0&&(m=ie(a,h,d),E=ie(p,l,u)),m.has(p[l]))if(m.has(p[u])){let g=E.get(a[h]),H=g!==void 0?n[g]:null;if(H===null){let G=v(i,n[l]);f(G,o[h]),c[h]=G}else c[h]=f(H,o[h]),v(i,n[l],H),n[g]=null;h++}else L(n[u]),u--;else L(n[l]),l++;for(;h<=d;){let g=v(i,c[d+1]);f(g,o[h]),c[h++]=g}for(;l<=u;){let g=n[l++];g!==null&&L(g)}return this.ut=a,X(i,c),P}});$.registerLanguage("javascript",I);$.registerLanguage("html",B);$.registerLanguage("css",V);var b=class extends O{constructor(){super(),this.language="html",this.value="",this.textarea=null,this.hasFocused=!1}render(){let e=this.language,t=q(this.highlightCode({code:this.value,language:e}));return this.syncScroll(),C`
			<div class="base" part="base">
        <!-- Super important to not have white space here due to how white space is handled -->
			  <div part="gutter"
			    @focus=${()=>{this.textarea?.focus()}}
			    @click=${r=>{this.textarea?.focus()}}
			  ></div>
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
				  <pre
            id="pre-${e}"
            data-code-lang=${e}
            aria-hidden="true"
            part="pre pre-${e}"
            tabindex="-1"
			      @focus=${()=>{this.textarea?.focus()}}
			      @click=${r=>{this.textarea?.focus()}}
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
            ${ee(this.textareaChanged)}
            @keydown=${this.keydownHandler}
            @focus=${()=>{this.hasFocused=!0,this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{}}
            @selectionchange=${r=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @click=${()=>{this.setCurrentLineHighlight()}}
            @pointerdown=${()=>{this.setCurrentLineHighlight()}}
            @pointerup=${()=>{this.setCurrentLineHighlight()}}
            @input=${r=>{this.value=r.currentTarget.value,this.injectGutterCells(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${r=>{this.value=r.currentTarget.value,this.injectGutterCells(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @scroll=${r=>{this.setCurrentLineHighlight(),this.syncScroll()}}
          >${this.value}</textarea>
        </div> <!-- base-editor -->
			</div> <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:r,right:s,top:n,bottom:o}=e[0].contentRect,a=r+s,p=n+o;this.dispatchEvent(new z("light-resize",{height:p,width:a})),this.syncScroll(),this.injectGutterCells()}updated(e){super.updated(e),this.syncScroll(),this.injectGutterCells(),setTimeout(()=>this.setCurrentLineHighlight())}syncScroll(){let e=this.shadowRoot?.querySelector("textarea");if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft);let r=this.shadowRoot?.querySelector("[part~='gutter']");r&&(r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(t)}handleSlotChangeEvent(e){let r=e.target.assignedElements({flatten:!0}),s=Q(U(...r).trim());s&&(this.value=s,setTimeout(()=>this.textarea?.setSelectionRange(0,0)),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}keydownHandler(e){setTimeout(()=>this.setCurrentLineHighlight())}setCurrentLineHighlight(){let e=this.shadowRoot?.querySelector("code");if(!e)return;let t=this.getCurrentLineNumber();if(this.currentLineNumber===t)return;let r=this.currentLineNumber;if(this.currentLineNumber=t,t!=null&&t>=0){let s=e.children[t];s&&(e.children[r]?.classList?.remove("is-active"),this.currentEl=s,s.classList.add("is-active"))}}highlightCode(e){let{code:t,language:r}=e;t=this.injectNewLine(t),t=$.highlight(t,{language:r}).value;let s=/\n(?!$)/;return t=t.split(s).map((n,o)=>{let a=!1;return o===this.currentLineNumber&&(a=!0),`<span class="light-line ${a?"is-active":""}">${n||" "}</span>`}).join(`
`),t}injectGutterCells(){let e=this.shadowRoot?.querySelector("[part~='gutter']");e&&D(this.renderGutterCells(),e)}getCurrentLineNumber(){let e=this.textarea;return e?e.value.substr(0,e.selectionStart).split(`
`).length-1:void 0}renderGutterCells(){let e=this.shadowRoot?.querySelector("pre > code")?.children;if(!e)return"";let t=Array.from(e);return re(t,(r,s)=>{let n=r.offsetHeight;return s+n},(r,s)=>{let n=r.offsetHeight,a=`gutter-cell ${s===this.currentLineNumber?"gutter-cell--active":""}`;return n?C`<span part=${a} style="${`height: ${n}px`}">${s}</span>`:C`<span part=${a}>${s}</span>`})}injectNewLine(e){return(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};_(b,"baseName","light-editor"),_(b,"styles",[F,te,W]),_(b,"properties",{label:{},value:{},language:{reflect:!0},hasFocused:{type:Boolean,attribute:"has-focused",reflect:!0}});export{b as a};
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
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-KEOR6GWB.js.map
