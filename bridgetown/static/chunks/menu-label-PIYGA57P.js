import {
  ShoelaceElement,
  component_styles_default
} from "/light-pen/bridgetown/static/chunks/chunk-FMMGJ35Y.js";
import {
  i,
  x
} from "/light-pen/bridgetown/static/chunks/chunk-FJJKEZSU.js";
import "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ORTZCIID.js
var menu_label_styles_default = i`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4I3MPDQ4.js
var SlMenuLabel = class extends ShoelaceElement {
  render() {
    return x` <slot part="base" class="menu-label"></slot> `;
  }
};
SlMenuLabel.styles = [component_styles_default, menu_label_styles_default];

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GYUBXPR2.js
var menu_label_default = SlMenuLabel;
SlMenuLabel.define("sl-menu-label");
export {
  menu_label_default as default
};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/menu-label-PIYGA57P.js.map
