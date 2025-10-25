import{a as m,c as f,d as h,e as y,f as g}from"/light-pen/bridgetown/static/chunks/chunk-TP2Y4J7I.js";import{a as b,b as v,c as x,j as E}from"/light-pen/bridgetown/static/chunks/chunk-2QGFBSSF.js";var R=b`
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
`;var _={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:x},q=(e=_,r,t)=>{let{kind:o,metadata:s}=t,n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(t.name,e),o==="accessor"){let{name:i}=t;return{set(c){let a=r.get.call(this);r.set.call(this,c),this.requestUpdate(i,a,e)},init(c){return c!==void 0&&this.C(i,void 0,e,c),c}}}if(o==="setter"){let{name:i}=t;return function(c){let a=this[i];r.call(this,c),this.requestUpdate(i,a,e)}}throw Error("Unsupported decorator location: "+o)};function u(e){return(r,t)=>typeof t=="object"?q(e,r,t):((o,s,n)=>{let i=s.hasOwnProperty(n);return s.constructor.createProperty(n,o),i?Object.getOwnPropertyDescriptor(s,n):void 0})(e,r,t)}function U(e){return u({...e,state:!0,attribute:!1})}function k(e){return(r,t)=>{let o=typeof r=="function"?r:r[t];Object.assign(o,e)}}var l=(e,r,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(e,r,t),t);function D(e,r){return(t,o,s)=>{let n=i=>i.renderRoot?.querySelector(e)??null;if(r){let{get:i,set:c}=typeof o=="object"?t:s??(()=>{let a=Symbol();return{get(){return this[a]},set(w){this[a]=w}}})();return l(t,o,{get(){let a=i.call(this);return a===void 0&&(a=n(this),(a!==null||this.hasUpdated)&&c.call(this,a)),a}})}return l(t,o,{get(){return n(this)}})}}var d,p=class extends E{constructor(){super(),y(this,d,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,r])=>{this.constructor.define(e,r)})}emit(e,r){let t=new CustomEvent(e,m({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return this.dispatchEvent(t),t}static define(e,r=this,t={}){let o=customElements.get(e);if(!o){try{customElements.define(e,r,t)}catch{customElements.define(e,class extends r{},t)}return}let s=" (unknown version)",n=s;"version"in r&&r.version&&(s=" v"+r.version),"version"in o&&o.version&&(n=" v"+o.version),!(s&&n&&s===n)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${n} has already been registered.`)}attributeChangedCallback(e,r,t){h(this,d)||(this.constructor.elementProperties.forEach((o,s)=>{o.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),g(this,d,!0)),super.attributeChangedCallback(e,r,t)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((r,t)=>{e.has(t)&&this[t]==null&&(this[t]=r)})}};d=new WeakMap;p.version="2.20.1";p.dependencies={};f([u()],p.prototype,"dir",2);f([u()],p.prototype,"lang",2);export{R as a,u as b,U as c,k as d,D as e,p as f};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-ZCUNSA2Q.js.map
