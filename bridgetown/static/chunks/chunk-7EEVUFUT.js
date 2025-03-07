import {
  T,
  x
} from "/light-pen/bridgetown/static/chunks/chunk-VXHTUS4U.js";

// ../node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/if-defined.js
var o = (o2) => o2 ?? T;

// ../internal/clamp.js
function clamp(min, curr, max) {
  if (curr < min) return min;
  if (curr > max) return max;
  return curr;
}

// ../internal/drag.js
function drag(container, options) {
  function move(pointerEvent) {
    const dims = container.getBoundingClientRect();
    const defaultView = container.ownerDocument.defaultView;
    const offsetX = dims.left + (defaultView?.pageXOffset || 0);
    const offsetY = dims.top + (defaultView?.pageYOffset || 0);
    const x2 = pointerEvent.pageX - offsetX;
    const y = pointerEvent.pageY - offsetY;
    if (options?.onMove) {
      options.onMove(x2, y);
    }
  }
  function stop() {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", stop);
    if (options?.onStop) {
      options.onStop();
    }
  }
  document.addEventListener("pointermove", move, { passive: true });
  document.addEventListener("pointerup", stop);
  if (options?.initialEvent instanceof PointerEvent) {
    move(options.initialEvent);
  }
}

// ../internal/resize-icon.js
var resizeIcon = x`<svg
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
</svg>`;

export {
  o,
  clamp,
  drag,
  resizeIcon
};
/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-7EEVUFUT.js.map
