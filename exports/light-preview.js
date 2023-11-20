// @ts-check

import { theme } from './default-theme.styles.js'
import LightPreviewBase from './light-preview-base.js';
import { PrismHighlight, PrismJS } from '../internal/prism-highlight.js';

/**
 * LightPreview is a very lightweight code previewer designed to load your code sample
 *   inside of an iFrame for encapsulated viewing. `<light-preview>` uses PrismJS as it's
 *   default highlighter, but has a base class intended for extending.
 * @customElement
 * @tagname light-preview
 * @extends LightPreviewBase
 */
export default class LightPreview extends LightPreviewBase {
  static baseName = "light-preview"
  static styles = LightPreviewBase.styles.concat([theme])

  /**
   * @override
   */
  highlight (code = this.code) {
    return PrismHighlight(code, PrismJS.languages[this.language], this.language)
  }
}
