import { html } from "lit"

import { BaseElement } from "../../../internal/base-element.js";
import { baseStyles } from "../../styles/base-styles.js";
import { componentStyles } from "./light-diff-viewer.styles.js";

/**
 * @customElement
 * @tagname light-diff-viewer
 * @summary Short summary of the component's intended use.
 * @documentation https://konnorrogers.github.io/light-pen/components/light-diff-viewer
 * @status experimental
 * @since 4.0
 *
 * @event light-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class LightDiffViewer extends BaseElement {
  /**
   * @override
   */
  static baseName = "light-diff-viewer"

  /**
   * @override
   */
  static styles = [
    baseStyles,
    componentStyles,
  ]

  /**
   * @override
   */
  static properties = /** @type {const} */ ({

  })

  /**
   * @override
   */
  render () {
    return html`
      <slot></slot>
    `
  }
}
