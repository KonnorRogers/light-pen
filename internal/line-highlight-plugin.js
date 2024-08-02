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
  const partTypes = ["inserted", "line-highlight", "deleted"];

  /**
   * @param {{ type: string, attributes: Record<string, string> }} token
   * @param {string} tokenName - Name of token to find
   * @param {string} partName - Name of part to add
   */
  function addParts(token, tokenName, partName) {
    if (token.type.includes(tokenName)) {
      token.attributes["part"] = partName;

      partTypes.forEach((type) => {
        if (!token.type.includes(type)) return;
        if (type === "line-highlight") type = "highlight";

        token.attributes["part"] += ` ${partName}-${type}`;
      });
    }
  }
  /**
   * @param {WrapEnv} env
   */
  return function (env) {
    addParts(env, "light-line", "line");
    addParts(env, "light-gutter-cell", "gutter-cell");
    addParts(env, "light-marker", "marker");
  };
}
