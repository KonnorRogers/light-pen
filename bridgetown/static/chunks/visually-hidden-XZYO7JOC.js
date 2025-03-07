import {
  ShoelaceElement,
  component_styles_default
} from "/light-pen/bridgetown/static/chunks/chunk-FMMGJ35Y.js";
import {
  i,
  x
} from "/light-pen/bridgetown/static/chunks/chunk-FJJKEZSU.js";
import "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YKKSQ2FG.js
var visually_hidden_styles_default = i`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4SVKSNHF.js
var SlVisuallyHidden = class extends ShoelaceElement {
  render() {
    return x` <slot></slot> `;
  }
};
SlVisuallyHidden.styles = [component_styles_default, visually_hidden_styles_default];

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2CSGUYJT.js
var visually_hidden_default = SlVisuallyHidden;
SlVisuallyHidden.define("sl-visually-hidden");
export {
  visually_hidden_default as default
};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/visually-hidden-XZYO7JOC.js.map
