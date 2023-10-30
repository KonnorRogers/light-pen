// @ts-check
import { BaseEvent } from "../../internal/base-event.js"

export class LightResizeEvent extends BaseEvent {
  /**
   * @param {Partial<EventInit & { height: number, width: number }>} [options={}]
   */
  constructor (options = {}, name = "light-resize") {
    super(name, options)
  }
}

