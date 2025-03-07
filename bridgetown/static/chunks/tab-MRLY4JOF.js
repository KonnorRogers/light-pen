import {
  SlIconButton
} from "/light-pen/bridgetown/static/chunks/chunk-YPZUMN6D.js";
import "/light-pen/bridgetown/static/chunks/chunk-FTU2MJ5S.js";
import "/light-pen/bridgetown/static/chunks/chunk-WMIKBM65.js";
import {
  LocalizeController
} from "/light-pen/bridgetown/static/chunks/chunk-T7YYW4XF.js";
import {
  e2
} from "/light-pen/bridgetown/static/chunks/chunk-MC6QCAO3.js";
import "/light-pen/bridgetown/static/chunks/chunk-IT4Z7XVO.js";
import {
  watch
} from "/light-pen/bridgetown/static/chunks/chunk-UKWMXZCD.js";
import {
  ShoelaceElement,
  component_styles_default,
  e,
  n
} from "/light-pen/bridgetown/static/chunks/chunk-FMMGJ35Y.js";
import "/light-pen/bridgetown/static/chunks/chunk-WHLDGWXI.js";
import {
  __decorateClass,
  i,
  x
} from "/light-pen/bridgetown/static/chunks/chunk-FJJKEZSU.js";
import "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P6JE66YJ.js
var tab_styles_default = i`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ID3FVOA6.js
var id = 0;
var SlTab = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.attrId = ++id;
    this.componentId = `sl-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleCloseClick(event) {
    event.stopPropagation();
    this.emit("sl-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Sets focus to the tab. */
  focus(options) {
    this.tab.focus(options);
  }
  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return x`
      <div
        part="base"
        class=${e2({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        tabindex=${this.disabled ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? x`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = [component_styles_default, tab_styles_default];
SlTab.dependencies = { "sl-icon-button": SlIconButton };
__decorateClass([
  e(".tab")
], SlTab.prototype, "tab", 2);
__decorateClass([
  n({ reflect: true })
], SlTab.prototype, "panel", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], SlTab.prototype, "active", 2);
__decorateClass([
  n({ type: Boolean })
], SlTab.prototype, "closable", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], SlTab.prototype, "disabled", 2);
__decorateClass([
  watch("active")
], SlTab.prototype, "handleActiveChange", 1);
__decorateClass([
  watch("disabled")
], SlTab.prototype, "handleDisabledChange", 1);

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Z2C7OFLH.js
var tab_default = SlTab;
SlTab.define("sl-tab");
export {
  tab_default as default
};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/tab-MRLY4JOF.js.map
