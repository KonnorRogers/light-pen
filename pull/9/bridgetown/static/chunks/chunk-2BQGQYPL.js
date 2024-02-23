import{b as a,g as d,i as u,k as o,l as g,m as p,q as h,r as m,s as c,t as f,u as b,v as L,w as $,x as y,y as n,z as w}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-4KLBCUMO.js";import{d as s}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-YJ24LJIO.js";var r=class extends f{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=c(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let i=e.target;if(i==null)return;let t=i.getAttribute("name");if(["preview-code","code"].includes(t||"")===!1)return;let T=i.assignedElements({flatten:!0}),l=this.unescapeTags(b(...T));if(this.preserveWhitespace||(l=L(l.trim())),t==="code"){this.code=l;return}}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){let i=[];return this.disableLineNumbers||(i.push(y()),i.push(w({insertedLinesRange:new n().parse(this.insertedLines),deletedLinesRange:new n().parse(this.deletedLines),highlightLinesRange:new n().parse(this.highlightLines)})),o.hooks.add("wrap",function(t){t.token&&typeof t.token!="string"&&(t.token.type.includes("light-line")&&(t.attributes.part="line"),t.token.type.includes("light-gutter")&&(t.attributes.part="gutter"))})),e=g(e,o.languages[this.language],this.language,{afterTokenize:i}),e}render(){let e=this.language;return a`
      <div part=${m({base:!0})}>
          ${p(!this.disableHighlight,()=>a`
	            <pre
                id="pre-${e}"
                data-code-lang=${e}
                aria-hidden="true"
                part="pre pre-${e}"
                tabindex="0"
                aria-labelledby="source-code-label"
                class="diff-highlight language-${e}"
                role="region"
              ><code
                  part="code code-${e}"
                  class="language-${e}"
                >${h(this.highlight(this.code))}</code></pre>`,()=>a`${h(this.code)}`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `}};s(r,"baseName","light-code"),s(r,"styles",[d,$,u]),s(r,"properties",{summary:{},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserveWhitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},lineNumbers:{type:Boolean,attribute:"line-numbers"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{}});export{r as a};
//# sourceMappingURL=/light-pen/pull/9/bridgetown/static/chunks/chunk-2BQGQYPL.js.map
