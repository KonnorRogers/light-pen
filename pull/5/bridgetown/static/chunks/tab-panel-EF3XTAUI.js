import{a as l}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-UUNZ6HYD.js";import{a as i,b as p}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-XQISR3SB.js";import{c as e}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-UVGMRVAB.js";import{d as s}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-2VU7ZWB5.js";import{b as a}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-HSEUTDFX.js";import{a as r,c as o}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-DJLRV3DE.js";import"/light-pen/pull/5/bridgetown/static/chunks/chunk-OSUW2QPQ.js";var n=r`
  ${i}

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
    `}};t.styles=n;e([a({reflect:!0})],t.prototype,"name",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([l("active")],t.prototype,"handleActiveChange",1);var d=t;t.define("sl-tab-panel");export{d as default};
//# sourceMappingURL=/light-pen/pull/5/bridgetown/static/chunks/tab-panel-EF3XTAUI.js.map
