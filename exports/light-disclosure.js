import { html, css } from "lit"
import { baseStyles } from "./base-styles.js"
import { BaseElement } from "../internal/base-element.js"

function motionReduced () {
  return /** @type {any} */ (window.matchMedia(`(prefers-reduced-motion: reduce)`)) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
}

/**
 * A `<details>` element packaged nicely to animate like a disclosure.
 * @customElement
 * @tagName light-disclosure
 */
export class LightDisclosure extends BaseElement {
  static baseName = "light-disclosure"
  static styles = [
    baseStyles,
    css`
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

      @media (prefers-reduced-motion: reduce) {
        [part~="content-base"] {
          transition: none;
        }
        details[open] [part~="content-base"] {
          grid-template-rows: 1fr;
        }
      }
    `
  ]

  static properties = {
    summary: {},
    open: { type: Boolean }
  }

  constructor () {
    super()
    /**
     * @type {string}
     */
    this.summary = ""

    /**
     * @type {boolean}
     */
    this.open = false

    /**
     * @internal
     * This is used because Safari has strange timing on the "toggle" event. If we don't use this,
     *   our initial opening of the disclosure gets clipped and is like a normal `<details>`
     */
    this._openOnToggle = true
  }

  // TODO: Add a mutationObserver for when it connects

  /**
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate (changedProperties) {
    const details = this.details

    if (details && changedProperties.has("open")) {
      if (!this.open) {
        if (details.hasAttribute("expanded")) {
          details.removeAttribute("expanded")
        } else {
          details.open = this.open
        }

        // "transitionend" will fire and set "open" on the details element accordingly.
        // If motion is reduced, our transition will never fire. so we need to set "open" on the <details> here.
        if (motionReduced()) {
          details.open = this.open
        }

        this.dispatchEvent(new Event("light-toggle"))
      } else {
        details.open = this.open

        this._openOnToggle = false

        // If you only wait 1 animation frame, we get clipped by `display: none;`
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            details.setAttribute("expanded", "")
            this._openOnToggle = true
            this.dispatchEvent(new Event("light-toggle"))
          })
        })
      }
    }
  }

  render () {
    return html`
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
    `
  }

  get details () {
    return this.shadowRoot?.querySelector("details")
  }

  /**
   * @param {TransitionEvent} e
   */
  handleTransitionEnd (e) {
    const details = this.details

    if (!details) return
    if (!(e.propertyName === "grid-template-rows")) return

    if (details.open === true) {
      if (!(details.hasAttribute("expanded"))) {
        details.open = false
      }
    } else {
      details.open = true
    }
  }

  /**
   * Toggle fires after the attribute is set / unset, so its useless for expanded. But useful for when users search a page with "ctrl+f"
   * @param {Event} _e
   */
  handleToggle (_e) {
    const details = this.details

    if (!details) return

    if (details.open && !(details.hasAttribute("expanded")) && this._openOnToggle) {
      this.open = details.open
      this.dispatchEvent(new Event("light-toggle"))
      details.setAttribute("expanded", "")
    }
  }

  /**
   * @param {Event} e
   */
  handleSummaryClick (e) {
    const details = this.details
    if (!details) return

    e.preventDefault()

    if (details.open) {
      this.open = false
      return false
    }

    this.open = true
  }
}
