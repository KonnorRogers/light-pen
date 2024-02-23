// @ts-check

import { theme } from './default-theme.styles.js'
import LightPreviewBase from './light-preview-base.js';
import { PrismHighlight, prism } from '../internal/prism-highlight.js';
import { NumberRange } from '../internal/number-range.js';
import { LineHighlightPlugin } from '../internal/line-highlight-plugin.js';
import { LineNumberPlugin } from '../internal/line-number-plugin.js';
import { css } from 'lit';

/**
 * LightPreview is a very lightweight code previewer designed to load your code sample
 *   inside of an iFrame for encapsulated viewing. `<light-preview>` uses PrismJS as it's
 *   default highlighter, but has a base class intended for extending.
 * @customElement
 * @tagname light-preview
 * @extends LightPreviewBase
 */
export default class LightPreview extends LightPreviewBase {
  /**
   * @override
   */
  static baseName = "light-preview"

  /**
   * @override
   */
  static styles = LightPreviewBase.styles.concat([
    theme,
    css`
    /* Lines need to be "display: block;" when used inside a disclosure.  */
    .light-line {
      display: block;
    }
  `])

  /**
   * @override
   */
  static properties = {
    ...LightPreviewBase.properties,
    disableLineNumbers: {type: Boolean, reflect: true},
    highlightLines: {},
    insertedLines: {},
    deletedLines: {},
  }

  constructor () {
    super()

    /**
     * @type {string} - A string of possible lines to highlight. Example: "{1-9, 16, 18}"
     */
    this.highlightLines = ""

    /**
     * @type {string} - A string of lines that are inserted for diffs. Example: "{1-9, 16, 18}"
     */
    this.insertedLines = ""

    /**
     * @type {string} - A string of lines that are deleted for diffs. Example: "{1-9, 16, 18}"
     */
    this.deletedLines = ""

    /**
     * @type {boolean} whether or not to disable line numbers
     */
    this.disableLineNumbers = false
  }

  /**
   * @override
   */
  highlight (code = this.code) {
    const plugins = []

    if (!this.disableLineNumbers) {
      plugins.push(LineNumberPlugin())
      plugins.push(LineHighlightPlugin({
        insertedLinesRange: new NumberRange().parse(this.insertedLines),
        deletedLinesRange: new NumberRange().parse(this.deletedLines),
        highlightLinesRange: new NumberRange().parse(this.highlightLines)
      }))
    }

    code = PrismHighlight(code, prism.languages[this.language], this.language, {
      afterTokenize: plugins,
    })
    return code
  }
}
