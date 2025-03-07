import {
  LocalizeController
} from "/light-pen/bridgetown/static/chunks/chunk-T7YYW4XF.js";
import {
  ShoelaceElement,
  component_styles_default
} from "/light-pen/bridgetown/static/chunks/chunk-FMMGJ35Y.js";
import {
  i,
  x
} from "/light-pen/bridgetown/static/chunks/chunk-FJJKEZSU.js";

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7DUCI5S4.js
var spinner_styles_default = i`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AXBI25VK.js
var SlSpinner = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
  }
  render() {
    return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
SlSpinner.styles = [component_styles_default, spinner_styles_default];

export {
  SlSpinner
};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-U5OK3JT4.js.map
