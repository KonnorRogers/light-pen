import{b as f}from"/light-pen/pull/38/bridgetown/static/chunks/chunk-LFPVEBVM.js";function p(n,e,t){return e<n?n:e>t?t:e}function d(n,e){function t(i){let a=n.getBoundingClientRect(),r=n.ownerDocument.defaultView,s=a.left+(r?.pageXOffset||0),m=a.top+(r?.pageYOffset||0),c=i.pageX-s,v=i.pageY-m;e?.onMove&&e.onMove(c,v)}function o(){document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",o),e?.onStop&&e.onStop()}document.addEventListener("pointermove",t,{passive:!0}),document.addEventListener("pointerup",o),e?.initialEvent instanceof PointerEvent&&t(e.initialEvent)}var z=f`<svg
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
</svg>`;export{p as a,d as b,z as c};
//# sourceMappingURL=/light-pen/pull/38/bridgetown/static/chunks/chunk-AGKR6CQY.js.map
