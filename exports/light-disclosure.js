import { html, css } from "lit"
import { baseStyles } from "./base-styles.js"
import { BaseElement } from "../internal/base-element.js"

export class LightDisclosure extends BaseElement {
  static styles = [
    baseStyles,
    css`
      [part~="content-base"] {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 500ms ease;
      }

      [part~="content"] {
        overflow: hidden;
      }

      details[open].animating .grid {
        grid-template-rows: 1fr;
      }
    `
  ]

  static properties = {
    summary: {}
  }

  constructor () {
    super()
    /**
     * @type {string}
     */
    this.summary = ""
  }

  render () {
    return html`
      <details @transitionend=${this.handleTransitionEnd} @toggle=${this.handleToggle}>
        <summary @click=${this.handleSummaryClick}>
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

    if (e.propertyName === "grid-template-rows" && details.open === true && !details.classList.contains("animating")) {
      details.open = false
    }
  }

  /**
   * Toggle fires after the attribute is set / unset, so its useless for animating. But useful for when users search a page with "ctrl+f"
   * @param {Event} _e
   */
  handleToggle (_e) {
    const details = this.details

    if (!details) return

    details.classList.remove("animating")
  }

  /**
   * @param {Event} e
   */
  handleSummaryClick (e) {
    const details = this.details
    if (!details) return

    if (details.open) {
      e.preventDefault()
      details.classList.remove("animating")
      return false
    }
    // If you only wait 1 animation frame, we get clipped by `display: none;`
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        details.classList.add("animating")
      })
    })
  }
}
