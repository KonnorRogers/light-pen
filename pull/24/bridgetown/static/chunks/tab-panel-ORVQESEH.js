import{d as s}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-VKE6KD7S.js";import{a as i}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-FIVHOXKL.js";import{a as l,b as a,e as p}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-FS4BFI6P.js";import{c as e,e as r,h as o}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-3UK4LDOZ.js";import"/light-pen/pull/24/bridgetown/static/chunks/chunk-WUEJL3TN.js";var n=r`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var m=0,t=class extends p{constructor(){super(...arguments),this.attrId=++m,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return o`
      <slot
        part="base"
        class=${s({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};t.styles=[l,n];e([a({reflect:!0})],t.prototype,"name",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([i("active")],t.prototype,"handleActiveChange",1);var d=t;t.define("sl-tab-panel");export{d as default};
//# sourceMappingURL=/light-pen/pull/24/bridgetown/static/chunks/tab-panel-ORVQESEH.js.map
