import{b as f,d as s}from"/light-pen/pull/25/bridgetown/static/chunks/chunk-SV7VIJF3.js";var d=t=>t??s;function w(t,e,n){return e<t?t:e>n?n:e}function x(t,e){function n(i){let r=t.getBoundingClientRect(),a=t.ownerDocument.defaultView,m=r.left+(a?.pageXOffset||0),p=r.top+(a?.pageYOffset||0),c=i.pageX-m,v=i.pageY-p;e?.onMove&&e.onMove(c,v)}function o(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",o),e?.onStop&&e.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",o),e?.initialEvent instanceof PointerEvent&&n(e.initialEvent)}var L=f`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-grip-vertical"
  viewBox="0 0 16 16"
  part="svg"
>
  <path
    d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  ></path>
</svg>`;export{d as a,w as b,x as c,L as d};
/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/25/bridgetown/static/chunks/chunk-434BZ7XX.js.map
