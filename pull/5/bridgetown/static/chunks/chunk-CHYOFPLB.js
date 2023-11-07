import{b as f}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-HQPUIQBR.js";function v(n,e,t){return n?e():t?.()}function g(n,e,t){return e<n?n:e>t?t:e}function w(n,e){function t(i){let r=n.getBoundingClientRect(),a=n.ownerDocument.defaultView,s=r.left+(a?.pageXOffset||0),m=r.top+(a?.pageYOffset||0),c=i.pageX-s,p=i.pageY-m;e?.onMove&&e.onMove(c,p)}function o(){document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",o),e?.onStop&&e.onStop()}document.addEventListener("pointermove",t,{passive:!0}),document.addEventListener("pointerup",o),e?.initialEvent instanceof PointerEvent&&t(e.initialEvent)}var E=f`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16" part="svg"><path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>`;export{v as a,g as b,w as c,E as d};
/*! Bundled license information:

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/5/bridgetown/static/chunks/chunk-CHYOFPLB.js.map
