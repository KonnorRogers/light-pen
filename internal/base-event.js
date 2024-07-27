export class BaseEvent extends Event {
  /**
   * @param {string} name
   * @param {EventInit} [options={}]
   */
  constructor(name, options = {}) {
    if (options.bubbles == null) options.bubbles = true;
    if (options.composed == null) options.composed = true;
    super(name, options);
  }
}
