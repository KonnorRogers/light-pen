// @ts-check
import { Token } from "prism-esm";

const newLineRegex = /\r\n|\r|\n/;

/**
 * Options for the LineNumberPlugin. Currently nothing.
 * @typedef {object} Options
 * @property {boolean} [disableLineNumbers] - Toggle line numbers off.
 * @property {number} [lineNumberStart=1] - Where to start counting from. Default is 1.
 * @property {number} [visibleLineStart=0] - Where to start counting from. Default is 0.
 * @property {number | null} [visibleLineEnd=0] - Where to start counting from. Default is null.
 * @property {(ary: Array<string | Token>, index: number, tokens: Array<Token>) => void} [callback] - substitute your own callback for each line.
 */

/**
 * @param {Options} [options={}]
 * @return {import('./prism-highlight.js').Hook}
 */
export function LineNumberPlugin(options = {}) {
  const disableLineNumbers = options.disableLineNumbers ?? false;
  const lineNumberStart = options.lineNumberStart ?? 1;
  const visibleLineStart = options.visibleLineStart ?? 0
  let visibleLineEnd = options.visibleLineEnd ?? null

  let callback = options.callback;

  if (typeof callback !== "function") {
    callback = (ary, index, tokens) => {
      if (ary.length <= 0) {
        return;
      }

      if (!options.disableLineNumbers) {
        tokens.push(
          new Token("light-gutter-cell", (index + lineNumberStart).toString()),
        );
      }

      tokens.push(new Token("light-line", ary));
    };
  }

  /**
   * @type {import('./prism-highlight.js').Hook}
   */
  return function lineNumberPlugin(env) {
    /**
     * @type {Token[]}
     */
    const tokens = [];
    const lines = splitLinesRec(env.tokens)

    lines.slice(visibleLineStart, visibleLineEnd || lines.length - 1).forEach((ary, index) => {
      index += visibleLineStart
      callback(ary, index, tokens);
    });

    env.tokens = tokens;
  };
}

/**
 * @param {Array<Token | string> | Token | string} content
 * @return {Array<Token | string>}
 */
function wrapContent(content) {
  return Array.isArray(content) ? content : [content];
}

/**
 * @param {Array<Token | string>} content
 * @return {Array<Token | string> | string}
 */
function unwrapContent(content) {
  if (content.length === 0) {
    return "";
  } else if (content.length === 1 && typeof content[0] === "string") {
    return content[0];
  }

  return content;
}

/**
 * @param {Array<Token | string>} tokens
 * @return {Array<Array<Token | string>>}
 */
function splitLinesRec(tokens) {
  /** @type {Array<Token | string>} */
  let currentLine = [];
  /** @type {Array<Array<Token | string>>} */
  const lines = [currentLine];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (typeof token === "string") {
      const split = token.split(newLineRegex);
      for (let j = 0; j < split.length; j++) {
        if (j > 0) {
          lines.push((currentLine = []));
        }

        const token1 = split[j];
        if (token1) {
          currentLine.push(token1);
        }
      }
    } else {
      // @ts-expect-error
      const split = splitLinesRec(wrapContent(token.content));

      if (split.length > 1) {
        for (let j = 0; j < split.length; j++) {
          if (j > 0) {
            lines.push((currentLine = []));
          }

          const line = split[j];
          if (line.length) {
            const token1 = new Token(
              token.type,
              unwrapContent(line),
              token.alias,
            );
            token1.length = line.reduce((l, t) => l + t.length, 0);
            currentLine.push(token1);
          }
        }
      } else {
        currentLine.push(token);
      }
    }
  }

  return lines;
}
