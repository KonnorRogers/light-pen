import{b as n,g as d,i as g,k as o,l as u,m as p,q as h,r as m,s as c,t as f,u as b,v as L,w as $,x as w,y as s,z as y}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-SCGM5M5Y.js";import{d as a}from"/light-pen/pull/9/bridgetown/static/chunks/chunk-YJ24LJIO.js";var r=class extends f{constructor(){super(),this.range=new s().parse("{1-3, 6, 7}"),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=c(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let i=e.target;if(i==null)return;let t=i.getAttribute("name");if(["preview-code","code"].includes(t||"")===!1)return;let T=i.assignedElements({flatten:!0}),l=this.unescapeTags(b(...T));if(this.preserveWhitespace||(l=L(l.trim())),t==="code"){this.code=l;return}}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){let i=[];return this.disableLineNumbers||(i.push(w()),i.push(y({insertedLinesRange:new s().parse(this.insertedLines),deletedLinesRange:new s().parse(this.deletedLines),highlightLinesRange:new s().parse(this.highlightLines)})),o.hooks.add("wrap",function(t){t.token&&typeof t.token!="string"&&(t.token.type.includes("light-line")&&(t.attributes.part="line"),t.token.type.includes("light-gutter")&&(t.attributes.part="gutter"))})),e=u(e,o.languages[this.language],this.language,{afterTokenize:i}),e}render(){let e=this.language;return n`
      <div part=${m({base:!0})}>
          ${p(!this.disableHighlight,()=>n`
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
                >${h(this.highlight(this.code))}</code></pre>`,()=>n`${h(this.code)}`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `}};a(r,"baseName","light-code"),a(r,"styles",[d,$,g]),a(r,"properties",{summary:{},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserveWhitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},lineNumbers:{type:Boolean,attribute:"line-numbers"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{}});export{r as a};
//# sourceMappingURL=/light-pen/pull/9/bridgetown/static/chunks/chunk-E6JFVG7A.js.map
