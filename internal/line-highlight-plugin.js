/**
 * @typedef {object} lineHighlightOptions
 * @property {import("./number-range.js").NumberRange} highlightLinesRange
 * @property {import("./number-range.js").NumberRange} insertedLinesRange
 * @property {import("./number-range.js").NumberRange} deletedLinesRange
 */

/**
 * @param {lineHighlightOptions} options
 */
export function LineHighlightPlugin(options) {
  const { highlightLinesRange, insertedLinesRange, deletedLinesRange } =
    options;
  /**
   * @param {import("./prism-highlight.js").Env} env
   */
  return function (env) {
    // -1 for 0-index.
    let index = 1;
    for (const token of env.tokens) {
      if (typeof token === "string") continue;

      if (highlightLinesRange.includes(index)) {
        // line-highlight is what prism themes expect.
        token.type += " line-highlight";
      }

      if (insertedLinesRange.includes(index)) {
        token.type += " inserted";
      }

      if (deletedLinesRange.includes(index)) {
        token.type += " deleted";
      }

      // Tokens can only ever be "light-line" or "light-gutter-cell" so we just increment on "light-line"
      if (token.type.includes("light-line")) {
        index++;
      }
    }
  };
}

/**
 * @typedef {object} WrapEnv
 * @property {string} type
 * @property {string} content
 * @property {Array<string>} classes
 * @property {Record<string, string>} attributes
 * @property {string} language
 */

/**
 * @example
 *   prism.hooks.add("wrap", LineHighlightWrapPlugin)
 */
export function LineHighlightWrapPlugin() {
  /**
   * @param {WrapEnv} env
   */
  return function (env) {
    const partTypes = ["inserted", "line-highlight", "deleted"];

    if (env.type.includes("light-line")) {
      env.attributes["part"] = "line";

      partTypes.forEach((type) => {
        if (!env.type.includes(type)) return;
        if (type === "line-highlight") type = "highlight";

        env.attributes["part"] += " line-" + type;
      });
    }

    if (env.type.includes("light-gutter-cell")) {
      env.attributes["part"] = "gutter-cell";

      partTypes.forEach((type) => {
        if (!env.type.includes("gutter-cell-" + type)) return;
        if (type === "line-highlight") type = "highlight";

        env.attributes["part"] += " gutter-cell-" + type;
      });
    }
  };
}
