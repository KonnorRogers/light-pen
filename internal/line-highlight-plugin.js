/**
 * @typedef {object} lineHighlightOptions
 * @property {import("./number-range.js").NumberRange} highlightLinesRange
 * @property {import("./number-range.js").NumberRange} insertedLinesRange
 * @property {import("./number-range.js").NumberRange} deletedLinesRange
 */

/**
 * @param {lineHighlightOptions} options
 */
export function LineHighlightPlugin (options) {
  const { highlightLinesRange, insertedLinesRange, deletedLinesRange } = options
  /**
   * @param {import("./prism-highlight.js").Env} env
   */
  return function (env) {
    // -1 for 0-index.
    let index = -1
    for (const token of env.tokens) {
      index += 2;

      if (typeof token === "string") continue
      if (!token.type.includes("light-line")) continue

      if (highlightLinesRange.includes(index)) {
        token.type += " line-highlight"
      }

      if (insertedLinesRange.includes(index)) {
        token.type += " inserted"
      }

      if (deletedLinesRange.includes(index)) {
        token.type += " deleted"
      }
    }
  }
}
