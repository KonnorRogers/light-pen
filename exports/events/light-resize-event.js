// @ts-check
import { BaseEvent } from "../../internal/base-event.js"

export class LightResizeEvent extends BaseEvent {
  /**
   * @param {"light-resize" | Omit<string, "light-resize"> & string} [name="light-resize"]
   * @param {Partial<EventInit & { height: number, width: number }>} [options={}]
   */
  constructor (name = "light-resize", options = {}) {
    super(name, options)

    this.height = options.height
    this.width = options.width
  }
}

