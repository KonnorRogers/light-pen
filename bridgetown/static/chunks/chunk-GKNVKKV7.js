import{a as m,c as f,d as h,e as y,f as g}from"/light-pen/bridgetown/static/chunks/chunk-YLSEKVM4.js";import{a as b,b as v,c as x,j as E}from"/light-pen/bridgetown/static/chunks/chunk-B2DHJBAQ.js";var R=b`
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
`;var _={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:x},q=(t=_,r,e)=>{let{kind:o,metadata:s}=e,n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(e.name,t),o==="accessor"){let{name:i}=e;return{set(c){let a=r.get.call(this);r.set.call(this,c),this.requestUpdate(i,a,t)},init(c){return c!==void 0&&this.P(i,void 0,t),c}}}if(o==="setter"){let{name:i}=e;return function(c){let a=this[i];r.call(this,c),this.requestUpdate(i,a,t)}}throw Error("Unsupported decorator location: "+o)};function u(t){return(r,e)=>typeof e=="object"?q(t,r,e):((o,s,n)=>{let i=s.hasOwnProperty(n);return s.constructor.createProperty(n,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(s,n):void 0})(t,r,e)}function U(t){return u({...t,state:!0,attribute:!1})}function k(t){return(r,e)=>{let o=typeof r=="function"?r:r[e];Object.assign(o,t)}}var l=(t,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(t,r,e),e);function D(t,r){return(e,o,s)=>{let n=i=>i.renderRoot?.querySelector(t)??null;if(r){let{get:i,set:c}=typeof o=="object"?e:s??(()=>{let a=Symbol();return{get(){return this[a]},set(w){this[a]=w}}})();return l(e,o,{get(){let a=i.call(this);return a===void 0&&(a=n(this),(a!==null||this.hasUpdated)&&c.call(this,a)),a}})}return l(e,o,{get(){return n(this)}})}}var d,p=class extends E{constructor(){super(),y(this,d,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,r])=>{this.constructor.define(t,r)})}emit(t,r){let e=new CustomEvent(t,m({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return this.dispatchEvent(e),e}static define(t,r=this,e={}){let o=customElements.get(t);if(!o){try{customElements.define(t,r,e)}catch{customElements.define(t,class extends r{},e)}return}let s=" (unknown version)",n=s;"version"in r&&r.version&&(s=" v"+r.version),"version"in o&&o.version&&(n=" v"+o.version),!(s&&n&&s===n)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,r,e){h(this,d)||(this.constructor.elementProperties.forEach((o,s)=>{o.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),g(this,d,!0)),super.attributeChangedCallback(t,r,e)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((r,e)=>{t.has(e)&&this[e]==null&&(this[e]=r)})}};d=new WeakMap;p.version="2.20.1";p.dependencies={};f([u()],p.prototype,"dir",2);f([u()],p.prototype,"lang",2);export{R as a,u as b,U as c,k as d,D as e,p as f};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-GKNVKKV7.js.map
