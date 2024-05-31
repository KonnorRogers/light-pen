import{a as m,c as d,e as f,f as h,g as y,m as g}from"/light-pen/pull/19/bridgetown/static/chunks/chunk-UBK5ITVV.js";var q=f`
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
`;var b={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:y},v=(e=b,r,t)=>{let{kind:o,metadata:n}=t,s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(t.name,e),o==="accessor"){let{name:i}=t;return{set(c){let a=r.get.call(this);r.set.call(this,c),this.requestUpdate(i,a,e)},init(c){return c!==void 0&&this.P(i,void 0,e),c}}}if(o==="setter"){let{name:i}=t;return function(c){let a=this[i];r.call(this,c),this.requestUpdate(i,a,e)}}throw Error("Unsupported decorator location: "+o)};function p(e){return(r,t)=>typeof t=="object"?v(e,r,t):((o,n,s)=>{let i=n.hasOwnProperty(s);return n.constructor.createProperty(s,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(n,s):void 0})(e,r,t)}function R(e){return p({...e,state:!0,attribute:!1})}var u=(e,r,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(e,r,t),t);function z(e,r){return(t,o,n)=>{let s=i=>i.renderRoot?.querySelector(e)??null;if(r){let{get:i,set:c}=typeof o=="object"?t:n??(()=>{let a=Symbol();return{get(){return this[a]},set(x){this[a]=x}}})();return u(t,o,{get(){let a=i.call(this);return a===void 0&&(a=s(this),(a!==null||this.hasUpdated)&&c.call(this,a)),a}})}return u(t,o,{get(){return s(this)}})}}var l=class extends g{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,r])=>{this.constructor.define(e,r)})}emit(e,r){let t=new CustomEvent(e,m({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return this.dispatchEvent(t),t}static define(e,r=this,t={}){let o=customElements.get(e);if(!o){customElements.define(e,class extends r{},t);return}let n=" (unknown version)",s=n;"version"in r&&r.version&&(n=" v"+r.version),"version"in o&&o.version&&(s=" v"+o.version),!(n&&s&&n===s)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${s} has already been registered.`)}};l.version="2.15.1";l.dependencies={};d([p()],l.prototype,"dir",2);d([p()],l.prototype,"lang",2);export{q as a,p as b,R as c,z as d,l as e};
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/19/bridgetown/static/chunks/chunk-HE3U6DOM.js.map
