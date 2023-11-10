var c=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},p=(r,e,t)=>{e.constructor.createProperty(t,r)};function a(r){return(e,t)=>t!==void 0?p(r,e,t):c(r,e)}function f(r){return a({...r,state:!0})}var l=({finisher:r,descriptor:e})=>(t,i)=>{var n;if(i===void 0){let o=(n=t.originalKey)!==null&&n!==void 0?n:t.key,s=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:{...t,key:o};return r!=null&&(s.finisher=function(u){r(u,o)}),s}{let o=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),r?.(o,i)}};function x(r,e){return l({descriptor:t=>{let i={get(){var n,o;return(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){let n=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var o,s;return this[n]===void 0&&(this[n]=(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&s!==void 0?s:null),this[n]}}return i}})}var k=r=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(r,e):((t,i)=>{let{kind:n,elements:o}=i;return{kind:n,elements:o,finisher(s){customElements.define(t,s)}}})(r,e);var d,j=((d=window.HTMLSlotElement)===null||d===void 0?void 0:d.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);export{k as a,a as b,f as c,x as d};
/*! Bundled license information:

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

@lit/reactive-element/decorators/custom-element.js:
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
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/chunk-QAQ5LPO4.js.map
