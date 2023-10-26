import{a as p,b as c,c as o,d as u,e as d,f as m,g,i as h,j as i,k as f,l as v,m as s,n as $,o as T,p as A,q as b,r as y}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-KVOKNQEI.js";import{d as n}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-HTPW2NLW.js";var x=p`
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
`;var{I:P}=d;var _=r=>r.strings===void 0;var S={},w=(r,e=S)=>r._$AH=e;var N=f(class extends v{constructor(r){if(super(r),r.type!==i.PROPERTY&&r.type!==i.ATTRIBUTE&&r.type!==i.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!_(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===o||e===u)return e;let t=r.element,a=r.name;if(r.type===i.PROPERTY){if(e===t[a])return o}else if(r.type===i.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(a))return o}else if(r.type===i.ATTRIBUTE&&t.getAttribute(a)===e+"")return o;return w(r),e}});s.registerLanguage("javascript",$);s.registerLanguage("xml",T);s.registerLanguage("css",A);var l=class extends m{constructor(){super(),this.language="xml",this.value=""}render(){let e=this.language,t=this.value?b(this.highlightCode({code:this.value,language:e})):"";return c`
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
          data-code-lang=${e}
          part="textarea textarea-${e}"
          spellcheck="false"
          autocorrect="off"
          autocapitalize="off"
          translate="no"
          @keydown=${this.keydownHandler}
          @input=${this.syncScroll}
          @input=${a=>{this.value=a.currentTarget.value,this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0}))}}
          @change=${a=>{this.value=a.currentTarget.value,this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0}))}}
          @scroll=${this.syncScroll}
          value=${this.value}
        >${this.value}</textarea>
			</div>
		`}handleSlotChangeEvent(e){let t=e.target;this.currentWatchedElements=t.assignedElements({flatten:!0})}syncScroll(e){let t=e.target;if(t==null)return;let a=this.shadowRoot?.querySelector("pre");a!=null&&(a.scrollTop=t.scrollTop,a.scrollLeft=t.scrollLeft)}keydownHandler(e){let t=e.target;if(e.key==="Tab")return e.preventDefault(),t.setRangeText("	",t.selectionStart,t.selectionEnd,"end")}highlightCode(e){let{code:t,language:a}=e;return t=this.unescapeCharacters(t),t=y(t),t=this.injectNewLine(t),s.highlight(t,{language:a}).value}unescapeCharacters(e){return e.replaceAll("&lt;/script>","<\/script>")}injectNewLine(e){return e[e.length-1]==`
`&&(e+=`
`),e}};n(l,"baseName","light-editor"),n(l,"styles",[g,x,h]),n(l,"properties",{label:{},value:{},language:{reflect:!0}});export{_ as a,l as b};
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
*/
//# sourceMappingURL=/light-pen/pull/4/bridgetown/static/chunks/chunk-IOOAWF2J.js.map
