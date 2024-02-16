import{a as m,b as p,c as $}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-C5ZEIAJF.js";import{a as c}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-BO3BDRZM.js";import{a as v}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-25ATWQNX.js";import{b as a,h as n,j as h,l as d,m as u,q as l,r as g,s as f,t as b}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-OBJ2SGOM.js";import{d as i}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-YJ24LJIO.js";var t=class extends g{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=p(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let r=e.target;if(r==null)return;let o=r.getAttribute("name");if(["preview-code","code"].includes(o||"")===!1)return;let T=r.assignedElements({flatten:!0}),s=this.unescapeTags(f(...T));if(this.preserveWhitespace||(s=b(s.trim())),o==="code"){this.code=s;return}}escapeCharacters(e){return e}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){return e=u(e,d.languages[this.language],this.language,{afterTokenize:[v()]}),e}render(){let e=this.language;return a`
      <div part=${m({base:!0})}>
          ${c(!this.disableHighlight,()=>a`
					    <pre
                id="pre-${e}"
                data-code-lang=${e}
                aria-hidden="true"
                part="pre pre-${e}"
                tabindex="0"
                aria-labelledby="source-code-label"
                class="language-${e}"
                role="region"
              ><code
                  part="code code-${e}"
                  class="language-${e}"
                >${l(this.highlight(this.code))}</code></pre>`,()=>a`${l(this.code)}`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `}};i(t,"baseName","light-code"),i(t,"styles",[n,$,h]),i(t,"properties",{summary:{},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserveWhitespace"},highlightLines:{attribute:"highlight-lines"},addedLines:{attribute:"added-lines"},removedLines:{attribute:"removed-lines"},lineNumbers:{type:Boolean,attribute:"line-numbers"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{}});export{t as a};
//# sourceMappingURL=/light-pen/pull/9/bridgetown/static/chunks/chunk-T4BITVJ2.js.map
