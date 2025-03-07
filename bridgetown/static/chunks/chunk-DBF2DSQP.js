import {
  BaseElement,
  baseStyles,
  i,
  x
} from "/light-pen/bridgetown/static/chunks/chunk-VXHTUS4U.js";
import {
  __publicField
} from "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// ../exports/components/light-disclosure/light-disclosure.js
function motionReduced() {
  return (
    /** @type {any} */
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
  );
}
var LightDisclosure = class extends BaseElement {
  constructor() {
    super();
    this.summary = "";
    this.open = false;
    this._openOnToggle = true;
  }
  // TODO: Add a mutationObserver for when it connects
  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate(changedProperties) {
    const details = this.details;
    if (details && changedProperties.has("open")) {
      if (!this.open) {
        if (details.hasAttribute("expanded")) {
          details.removeAttribute("expanded");
        } else {
          details.open = this.open;
        }
        if (motionReduced()) {
          details.open = this.open;
        }
        this.dispatchEvent(new Event("light-toggle"));
      } else {
        details.open = this.open;
        this._openOnToggle = false;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            details.setAttribute("expanded", "");
            this._openOnToggle = true;
            this.dispatchEvent(new Event("light-toggle"));
          });
        });
      }
    }
  }
  /**
   * @override
   */
  click() {
    this.open = !this.open;
  }
  /**
   * @override
   * @param {FocusOptions} [options]
   */
  focus(options) {
    this.shadowRoot?.querySelector("summary")?.focus(options);
  }
  /**
   * @override
   */
  render() {
    return x`
      <details
        part="details"
        @transitionend=${this.handleTransitionEnd}
        @toggle=${this.handleToggle}
      >
        <summary part="summary" @click=${this.handleSummaryClick}>
          <slot name="summary">${this.summary}</slot>
        </summary>

        <div part="content-base">
          <div part="content">
            <slot></slot>
          </div>
        </div>
      </details>
    `;
  }
  get details() {
    return this.shadowRoot?.querySelector("details");
  }
  /**
   * @param {TransitionEvent} e
   */
  handleTransitionEnd(e) {
    const details = this.details;
    if (!details) return;
    if (!(e.propertyName === "grid-template-rows")) return;
    if (details.open === true) {
      if (!details.hasAttribute("expanded")) {
        details.open = false;
      }
    } else {
      details.open = true;
    }
  }
  /**
   * Toggle fires after the attribute is set / unset, so its useless for expanded. But useful for when users search a page with "ctrl+f"
   * @param {Event} _e
   */
  handleToggle(_e) {
    const details = this.details;
    if (!details) return;
    if (details.open && !details.hasAttribute("expanded") && this._openOnToggle) {
      this.open = details.open;
      this.dispatchEvent(new Event("light-toggle"));
      details.setAttribute("expanded", "");
    }
  }
  /**
   * @param {Event} e
   */
  handleSummaryClick(e) {
    const details = this.details;
    if (!details) return;
    e.preventDefault();
    if (details.open) {
      this.open = false;
      return false;
    }
    this.open = true;
  }
};
/**
 * @override
 */
__publicField(LightDisclosure, "baseName", "light-disclosure");
/**
 * @override
 */
__publicField(LightDisclosure, "styles", [
  baseStyles,
  i`
      [part~="content-base"] {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 300ms ease-in-out;
      }

      [part~="content"] {
        overflow: hidden;
      }

      details[open][expanded] [part~="content-base"] {
        grid-template-rows: 1fr;
      }

      summary {
        padding: 0.4em 0.6em;
        cursor: pointer;
      }

      summary:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      @media (prefers-reduced-motion: reduce) {
        [part~="content-base"] {
          transition: none;
        }
        details[open] [part~="content-base"] {
          grid-template-rows: 1fr;
        }
      }
    `
]);
/**
 * @override
 */
__publicField(LightDisclosure, "properties", {
  summary: {},
  open: { type: Boolean }
});

export {
  LightDisclosure
};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-DBF2DSQP.js.map
