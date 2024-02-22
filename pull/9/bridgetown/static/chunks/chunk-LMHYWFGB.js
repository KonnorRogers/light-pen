import{a as m,b as p,c as $}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-C5ZEIAJF.js";import{a as g}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-BO3BDRZM.js";import{a as v}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-25ATWQNX.js";import{b as o,h,j as d,l as u,m as c,q as l,r as f,s as b,t as y}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-OBJ2SGOM.js";import{d as n}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-YJ24LJIO.js";var r=class extends f{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=p(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let i=e.target;if(i==null)return;let a=i.getAttribute("name");if(["preview-code","code"].includes(a||"")===!1)return;let s=i.assignedElements({flatten:!0}),t=this.unescapeTags(b(...s));if(this.preserveWhitespace||(t=y(t.trim())),a==="code"){this.code=t;return}}escapeCharacters(e){return e}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){return e=c(e,u.languages[this.language],this.language,{afterTokenize:[v(),i=>{let a=i.tokens;if(!Array.isArray(a))return;let s=-1;for(let t of a)s++,typeof t!="string"&&t.type==="light-line"&&(t.type+=" highlight-"+s.toString())}]}),e}render(){let e=this.language;return o`
      <div part=${m({base:!0})}>
          ${g(!this.disableHighlight,()=>o`
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
                >${l(this.highlight(this.code))}</code></pre>`,()=>o`${l(this.code)}`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `}};n(r,"baseName","light-code"),n(r,"styles",[h,$,d]),n(r,"properties",{summary:{},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserveWhitespace"},highlightLines:{attribute:"highlight-lines"},addedLines:{attribute:"added-lines"},removedLines:{attribute:"removed-lines"},lineNumbers:{type:Boolean,attribute:"line-numbers"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{}});export{r as a};
//# sourceMappingURL=/light-pen/pull/9/bridgetown/static/chunks/chunk-LMHYWFGB.js.map
