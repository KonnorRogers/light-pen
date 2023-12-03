import{a as j,b as _,c as I,d as N,e as M,f as V,g as $,h as x,i as w,j as D,k as B,l as O,n as W,o as E,p as q,q as y,r as U,s as Q}from"/light-pen/bridgetown/static/chunks/chunk-RYL6JHDL.js";import{d as C}from"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var{I:ne}=M;var K=i=>i.strings===void 0,F=()=>document.createComment(""),v=(i,e,t)=>{var r;let n=i._$AA.parentNode,s=e===void 0?i._$AB:e._$AA;if(t===void 0){let l=n.insertBefore(F(),s),a=n.insertBefore(F(),s);t=new ne(l,a,i,i.options)}else{let l=t._$AB.nextSibling,a=t._$AM,u=a!==i;if(u){let o;(r=t._$AQ)===null||r===void 0||r.call(t,i),t._$AM=i,t._$AP!==void 0&&(o=i._$AU)!==a._$AU&&t._$AP(o)}if(l!==s||u){let o=t._$AA;for(;o!==l;){let f=o.nextSibling;n.insertBefore(o,s),o=f}}}return t},m=(i,e,t=i)=>(i._$AI(e,t),i),le={},J=(i,e=le)=>i._$AH=e,X=i=>i._$AH,k=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA,r=i._$AB.nextSibling;for(;t!==r;){let n=t.nextSibling;t.remove(),t=n}};var A=(i,e)=>{var t,r;let n=i._$AN;if(n===void 0)return!1;for(let s of n)(r=(t=s)._$AO)===null||r===void 0||r.call(t,e,!1),A(s,e);return!0},L=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},Y=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),he(e)}};function ae(i){this._$AN!==void 0?(L(this),this._$AM=i,Y(this)):this._$AM=i}function oe(i,e=!1,t=0){let r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(r))for(let s=t;s<r.length;s++)A(r[s],!1),L(r[s]);else r!=null&&(A(r,!1),L(r));else A(this,i)}var he=i=>{var e,t,r,n;i.type==$.CHILD&&((e=(r=i)._$AP)!==null&&e!==void 0||(r._$AP=oe),(t=(n=i)._$AQ)!==null&&t!==void 0||(n._$AQ=ae))},T=class extends w{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Y(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,n;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),t&&(A(this,e),L(this))}setValue(e){if(K(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var R=new WeakMap,Z=x(class extends T{render(i){return N}update(i,[e]){var t;let r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),N}ot(i){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,r=R.get(t);r===void 0&&(r=new WeakMap,R.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=R.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var ee=j`
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
`;var H=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var z=class extends H{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};var te=(i,e,t)=>{let r=new Map;for(let n=e;n<=t;n++)r.set(i[n],n);return r},ie=x(class extends w{constructor(i){if(super(i),i.type!==$.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);let n=[],s=[],l=0;for(let a of i)n[l]=r?r(a,l):l,s[l]=t(a,l),l++;return{values:s,keys:n}}render(i,e,t){return this.ct(i,e,t).values}update(i,[e,t,r]){var n;let s=X(i),{values:l,keys:a}=this.ct(e,t,r);if(!Array.isArray(s))return this.ut=a,l;let u=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],o=[],f,G,h=0,d=s.length-1,c=0,p=l.length-1;for(;h<=d&&c<=p;)if(s[h]===null)h++;else if(s[d]===null)d--;else if(u[h]===a[c])o[c]=m(s[h],l[c]),h++,c++;else if(u[d]===a[p])o[p]=m(s[d],l[p]),d--,p--;else if(u[h]===a[p])o[p]=m(s[h],l[p]),v(i,o[p+1],s[h]),h++,p--;else if(u[d]===a[c])o[c]=m(s[d],l[c]),v(i,s[h],s[d]),d--,c++;else if(f===void 0&&(f=te(a,c,p),G=te(u,h,d)),f.has(u[h]))if(f.has(u[d])){let g=G.get(a[c]),S=g!==void 0?s[g]:null;if(S===null){let P=v(i,s[h]);m(P,l[c]),o[c]=P}else o[c]=m(S,l[c]),v(i,s[h],S),s[g]=null;c++}else k(s[d]),d--;else k(s[h]),h++;for(;c<=p;){let g=v(i,o[p+1]);m(g,l[c]),o[c++]=g}for(;h<=d;){let g=s[h++];g!==null&&k(g)}return this.ut=a,J(i,o),I}});var ce=/\r\n|\r|\n/;function re(i={}){return function(t){t.tokens=se(t.tokens).map(r=>(r.length<=0&&r.push(" "),new y("light-line",r)))}}function ue(i){return Array.isArray(i)?i:[i]}function de(i){return i.length===0?"":i.length===1&&typeof i[0]=="string"?i[0]:i}function se(i){let e=[],t=[e];for(let r=0;r<i.length;r++){let n=i[r];if(typeof n=="string"){let s=n.split(ce);for(let l=0;l<s.length;l++){l>0&&t.push(e=[]);let a=s[l];a&&e.push(a)}}else{let s=se(ue(n.content));if(s.length>1)for(let l=0;l<s.length;l++){l>0&&t.push(e=[]);let a=s[l];if(a.length){let u=new y(n.type,de(a),n.alias);u.length=a.reduce((o,f)=>o+f.length,0),e.push(u)}}else e.push(n)}}return t}var pe=/\r\n?|\n/g,b=class extends B{constructor(){super(),this.language="html",this.value="",this.initialValue="",this.textarea=null,this.hasInteracted=!1,this.preserveWhitespace=!1}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value")||"",this.initialValue=this.getAttribute("value")||"",this.value===this.getAttribute("value")&&this.preserveWhitespace!==!0&&(this.value=E(this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim())}willUpdate(e){e.has("value")&&this.dispatchEvent(new Event("light-value-change",{bubbles:!0,composed:!0})),super.willUpdate(e)}click(){this.textarea&&this.textarea.click()}focus(e){this.textarea&&this.textarea.focus(e)}render(){let e=this.language,t=D(this.highlightCode({code:this.value,language:e}));return this.syncScroll(),_`
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
            value=${this.initialValue}
            .value=${this.value}
            ${Z(this.textareaChanged)}
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
          ></textarea>
        </div> <!-- base-editor -->
			</div> <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(e){let{target:t}=e[0],{left:r,right:n,top:s,bottom:l}=e[0].contentRect,a=r+n,u=s+l;this.dispatchEvent(new z("light-resize",{height:u,width:a})),this.syncScroll(),this.injectGutterCells()}updated(e){super.updated(e),this.syncScroll(),this.injectGutterCells(),setTimeout(()=>this.setCurrentLineHighlight())}syncScroll(){let e=this.textarea;if(e==null)return;let t=this.shadowRoot?.querySelector("pre");t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft);let r=this.shadowRoot?.querySelector("[part~='gutter']");r&&(r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(t)}handleSlotChangeEvent(e){let r=e.target.assignedElements({flatten:!0}),n=E(this.unescapeTags(q(...r)).trim());n&&(this.value=n,this.initialValue=n,this.setAttribute("value",this.initialValue),setTimeout(()=>this.textarea?.setSelectionRange(0,0)),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}keyupHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}keydownHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}setCurrentLineHighlight(){let e=this.shadowRoot?.querySelector("code"),t=this.shadowRoot?.querySelector("[part~='gutter']"),r=this.getCurrentLineNumber();if(this.currentLineNumber===r)return;let n=this.currentLineNumber;if(this.currentLineNumber=r,r!=null&&r>=0){let s=e?.children[r],l=t?.children[r];s&&(e.children[n]?.classList?.remove("is-active"),s.classList.add("is-active")),l&&(t.children[n]?.part?.remove("gutter-cell--active"),l.part.add("gutter-cell--active"))}}highlightCode(e){let{code:t,language:r}=e;return t=this.injectNewLine(t),t=this.unescapeTags(t),t=Q(t,U.languages[r],r,{afterTokenize:[re(),n=>{let s=n.tokens[this.currentLineNumber];s&&s instanceof y&&(s.type=s.type+" is-active")}]}),t}injectGutterCells(){let e=this.shadowRoot?.querySelector("[part~='gutter']");e&&V(this.renderGutterCells(),e)}getCurrentLineNumber(){let e=this.textarea;return e?e.value.substr(0,e.selectionStart).split(pe).length-1:void 0}renderGutterCells(){let e=this.shadowRoot?.querySelector("pre > code")?.children;if(!e)return"";let t=Array.from(e);return ie(t,(r,n)=>{let s=r.offsetHeight,l=n===this.currentLineNumber;return n+s+l.toString()},(r,n)=>{let s=r.offsetHeight,a=`gutter-cell ${n===this.currentLineNumber?"gutter-cell--active":""}`;return s?_`<span part=${a} style="${`height: ${s}px`}">${n}</span>`:_`<span part=${a}>${n}</span>`})}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}injectNewLine(e){return(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};C(b,"baseName","light-editor"),C(b,"styles",[O,ee,W]),C(b,"properties",{value:{attribute:!1},initialValue:{attribute:"value"},language:{reflect:!0},hasInteracted:{type:Boolean,attribute:"has-interacted",reflect:!0},preserveWhitespace:{type:Boolean,reflect:!0,attribute:"preserve-whitespace"}});export{b as a};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-XDAAHKDI.js.map
