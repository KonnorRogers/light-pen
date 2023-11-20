import{a as I,b as C,c as M,d as z,e as D,f as B,g as $,h as w,i as x,j as O,k as V,l as q,n as W,o as N,p as U,q as Q,r as F,s as J}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-JAJL2S2M.js";import{c as j,d as A}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var{I:ae}=D;var X=i=>i.strings===void 0,K=()=>document.createComment(""),v=(i,e,t)=>{var r;let n=i._$AA.parentNode,s=e===void 0?i._$AB:e._$AA;if(t===void 0){let o=n.insertBefore(K(),s),l=n.insertBefore(K(),s);t=new ae(o,l,i,i.options)}else{let o=t._$AB.nextSibling,l=t._$AM,u=l!==i;if(u){let a;(r=t._$AQ)===null||r===void 0||r.call(t,i),t._$AM=i,t._$AP!==void 0&&(a=i._$AU)!==l._$AU&&t._$AP(a)}if(o!==s||u){let a=t._$AA;for(;a!==o;){let f=a.nextSibling;n.insertBefore(a,s),a=f}}}return t},m=(i,e,t=i)=>(i._$AI(e,t),i),he={},Y=(i,e=he)=>i._$AH=e,Z=i=>i._$AH,_=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA,r=i._$AB.nextSibling;for(;t!==r;){let n=t.nextSibling;t.remove(),t=n}};var y=(i,e)=>{var t,r;let n=i._$AN;if(n===void 0)return!1;for(let s of n)(r=(t=s)._$AO)===null||r===void 0||r.call(t,e,!1),y(s,e);return!0},k=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},ee=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),de(e)}};function ce(i){this._$AN!==void 0?(k(this),this._$AM=i,ee(this)):this._$AM=i}function ue(i,e=!1,t=0){let r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(r))for(let s=t;s<r.length;s++)y(r[s],!1),k(r[s]);else r!=null&&(y(r,!1),k(r));else y(this,i)}var de=i=>{var e,t,r,n;i.type==$.CHILD&&((e=(r=i)._$AP)!==null&&e!==void 0||(r._$AP=ue),(t=(n=i)._$AQ)!==null&&t!==void 0||(n._$AQ=ce))},T=class extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),ee(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,n;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),t&&(y(this,e),k(this))}setValue(e){if(X(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var R=new WeakMap,te=w(class extends T{render(i){return z}update(i,[e]){var t;let r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),z}ot(i){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,r=R.get(t);r===void 0&&(r=new WeakMap,R.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=R.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var ie=I`
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
  [part~="textarea"], .light-line {
    padding: 0px;
    padding-inline-start: 6px;
  }

  /** @TODO: If line numbers disabled */
  :host([line-numbers="disabled"]) .light-line {
    padding-inline-start: 0px;
  }

  :host([line-numbers="disabled"]) [part~="pre"] {
    padding-inline-start: 6px;
  }

  [part~="textarea"] {
    color: transparent;
    /* color: rgba(255,0,0,0.2); */
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

  [part~="gutter-cell"] {
    padding-inline-end: 16px;
    padding-inline-start: 12px;
  }

  [part~="gutter"] {
    color: rgba(0,0,0,0.35);
	  background-color: rgba(50,50,50,0.08);
    font-variant-numeric: tabular-nums;
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
    background-color: rgba(255,255,209,1);
  }

  /* We don't want to show the focus position if the user hasn't interacted with the textarea. */
  :where(:host([has-interacted]) .light-line.is-active) {
    background-color: rgba(0,0,0,0.05);
  }

  [part~="gutter-cell"][part~="gutter-cell--active"] {
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

  [part~="pre"] {
	  color: #272727;
  }

  [part~="gutter"],
  [part~="pre"] {
	  background-color: #f7f7f7;
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`;var L=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var H=class extends L{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};var re=(i,e,t)=>{let r=new Map;for(let n=e;n<=t;n++)r.set(i[n],n);return r},se=w(class extends x{constructor(i){if(super(i),i.type!==$.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);let n=[],s=[],o=0;for(let l of i)n[o]=r?r(l,o):o,s[o]=t(l,o),o++;return{values:s,keys:n}}render(i,e,t){return this.ct(i,e,t).values}update(i,[e,t,r]){var n;let s=Z(i),{values:o,keys:l}=this.ct(e,t,r);if(!Array.isArray(s))return this.ut=l,o;let u=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],a=[],f,P,h=0,d=s.length-1,c=0,p=o.length-1;for(;h<=d&&c<=p;)if(s[h]===null)h++;else if(s[d]===null)d--;else if(u[h]===l[c])a[c]=m(s[h],o[c]),h++,c++;else if(u[d]===l[p])a[p]=m(s[d],o[p]),d--,p--;else if(u[h]===l[p])a[p]=m(s[h],o[p]),v(i,a[p+1],s[h]),h++,p--;else if(u[d]===l[c])a[c]=m(s[d],o[c]),v(i,s[h],s[d]),d--,c++;else if(f===void 0&&(f=re(l,c,p),P=re(u,h,d)),f.has(u[h]))if(f.has(u[d])){let g=P.get(l[c]),S=g!==void 0?s[g]:null;if(S===null){let G=v(i,s[h]);m(G,o[c]),a[c]=G}else a[c]=m(S,o[c]),v(i,s[h],S),s[g]=null;c++}else _(s[d]),d--;else _(s[h]),h++;for(;c<=p;){let g=v(i,a[p+1]);m(g,o[c]),a[c++]=g}for(;h<=d;){let g=s[h++];g!==null&&_(g)}return this.ut=l,Y(i,a),M}});var E=j(Q(),1),pe=/\r\n|\r|\n/;function ne(i={}){return function(t){t.tokens=oe(t.tokens).map(r=>new E.default.Token("light-line",r))}}function ge(i){return Array.isArray(i)?i:[i]}function fe(i){return i.length===0?"":i.length===1&&typeof i[0]=="string"?i[0]:i}function oe(i){let e=[],t=[e];for(let r=0;r<i.length;r++){let n=i[r];if(typeof n=="string"){let s=n.split(pe);for(let o=0;o<s.length;o++){o>0&&t.push(e=[]);let l=s[o];l&&e.push(l)}}else{let s=oe(ge(n.content));if(s.length>1)for(let o=0;o<s.length;o++){o>0&&t.push(e=[]);let l=s[o];if(l.length){let u=new E.default.Token(n.type,fe(l),n.alias);u.length=l.reduce((a,f)=>a+f.length,0),e.push(u)}}else e.push(n)}}return t}var le=j(Q(),1);var me=/\r\n?|\n/g,b=class extends V{constructor(){super(),this.language="html",this.value="",this.textarea=null,this.hasInteracted=!1,this.preserveWhitespace=!1}willUpdate(e){this.value===this.getAttribute("value")&&this.preserveWhitespace!==!0&&(this.value=N(this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim()),super.willUpdate(e)}render(){let e=this.language,t=O(this.highlightCode({code:this.value,language:e}));return this.syncScroll(),C`
			<div part="base">
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
            class="language-${e}"
            tabindex="-1"
			      @focus=${()=>{this.textarea?.focus()}}
			      @click=${r=>{this.textarea?.focus()}}
          ><code
              part="code code-${e}"
              class="language-${e}"
            >${t}</code></pre>
          <!-- IMPORTANT! There must be no white-space above. -->
				  <textarea
				    aria-labelledby="label"
            id="textarea-${e}"
            data-code-lang=${e}
            part="textarea textarea-${e}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            translate="no"
            ${te(this.textareaChanged)}
            @keyup=${this.keyupHandler}
            @keydown=${this.keydownHandler}
            @focus=${()=>{this.hasInteracted=!0,this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
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
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:r,right:n,top:s,bottom:o}=e[0].contentRect,l=r+n,u=s+o;this.dispatchEvent(new H("light-resize",{height:u,width:l})),this.syncScroll(),this.injectGutterCells()}updated(e){super.updated(e),this.syncScroll(),this.injectGutterCells(),setTimeout(()=>this.setCurrentLineHighlight())}syncScroll(){let e=this.shadowRoot?.querySelector("textarea");if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft);let r=this.shadowRoot?.querySelector("[part~='gutter']");r&&(r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(t)}handleSlotChangeEvent(e){let r=e.target.assignedElements({flatten:!0}),n=N(this.unescapeTags(U(...r)).trim());n&&(this.value=n,setTimeout(()=>this.textarea?.setSelectionRange(0,0)),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}keyupHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}keydownHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}setCurrentLineHighlight(){let e=this.shadowRoot?.querySelector("code"),t=this.shadowRoot?.querySelector("[part~='gutter']"),r=this.getCurrentLineNumber();if(this.currentLineNumber===r)return;let n=this.currentLineNumber;if(this.currentLineNumber=r,r!=null&&r>=0){let s=e?.children[r],o=t?.children[r];s&&(e.children[n]?.classList?.remove("is-active"),s.classList.add("is-active")),o&&(t.children[n]?.part?.remove("gutter-cell--active"),o.part.add("gutter-cell--active"))}}highlightCode(e){let{code:t,language:r}=e;return t=this.injectNewLine(t),t=this.unescapeTags(t),t=J(t,F.default.languages[r],r,{afterTokenize:[ne(),n=>{let s=n.tokens[this.currentLineNumber];s&&s instanceof le.Token&&(s.type=s.type+" is-active")}]}),t}injectGutterCells(){let e=this.shadowRoot?.querySelector("[part~='gutter']");e&&B(this.renderGutterCells(),e)}getCurrentLineNumber(){let e=this.textarea;return e?e.value.substr(0,e.selectionStart).split(me).length-1:void 0}renderGutterCells(){let e=this.shadowRoot?.querySelector("pre > code")?.children;if(!e)return"";let t=Array.from(e);return se(t,(r,n)=>{let s=r.offsetHeight,o=n===this.currentLineNumber;return n+s+o.toString()},(r,n)=>{let s=r.offsetHeight,l=`gutter-cell ${n===this.currentLineNumber?"gutter-cell--active":""}`;return s?C`<span part=${l} style="${`height: ${s}px`}">${n}</span>`:C`<span part=${l}>${n}</span>`})}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}injectNewLine(e){return(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};A(b,"baseName","light-editor"),A(b,"styles",[q,ie,W]),A(b,"properties",{value:{},language:{reflect:!0},hasInteracted:{type:Boolean,attribute:"has-interacted",reflect:!0},preserveWhitespace:{type:Boolean,reflect:!0,attribute:"preserve-whitespace"}});export{b as a};
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
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-XATARGKE.js.map
