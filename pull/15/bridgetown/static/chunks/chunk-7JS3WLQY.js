import{a,c}from"/light-pen/pull/15/bridgetown/static/chunks/chunk-MK4KTOZZ.js";import{b as d}from"/light-pen/pull/15/bridgetown/static/chunks/chunk-AXFOBN5U.js";import{a as p,h as l}from"/light-pen/pull/15/bridgetown/static/chunks/chunk-NMQMGEZN.js";var u=p`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var n=class extends l{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let r=new CustomEvent(e,a({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){let o=customElements.get(e);if(!o){customElements.define(e,class extends t{},r);return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(i=" v"+o.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${i} has already been registered.`)}};n.version="2.7.0";n.dependencies={};c([d()],n.prototype,"dir",2);c([d()],n.prototype,"lang",2);export{u as a,n as b};
//# sourceMappingURL=/light-pen/pull/15/bridgetown/static/chunks/chunk-7JS3WLQY.js.map
