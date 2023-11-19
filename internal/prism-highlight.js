// A custom Prism highlight implementation specific for adding line numbers for the editor by
// modifying the tokenizer.

import { splitLines } from "./split-lines.js";
import PrismJS, { Token } from "prismjs"

/**
 * @typedef {Object} Env
 * @property {string} code
 * @property {import("prismjs").Grammar} grammar
 * @property {string} language
 * @property {Array<Token>} tokens
 */

/**
 * Custom hooks to run with our custom tokenizer.
 * @typedef {Object} Hooks
 * @property {Hook[]} [beforeTokenize]
 * @property {Hook[]} [afterTokenize]
 */

/**
 * Custom hooks to run with our custom tokenizer.
 * @typedef {(env: Env) => void} Hook
 */

/**
 * @see https://github.com/PrismJS/prism/blob/59e5a3471377057de1f401ba38337aca27b80e03/prism.js#L660
 * A forked function from PrismJS to make wrap the tokenizer with custom functionality.
 * @param {string} text - The code to highlight
 * @param {import("prismjs").Grammar} grammar - The grammar to use
 * @param {string} language - The language to detect
 * @param {Hooks} hooks
 */
export function PrismHighlight(text, grammar, language, hooks = {}) {
  /**
   * @type {Env}
   */
	var env = {
		code: text,
		grammar: grammar,
		language: language,
		tokens: []
	};

	PrismJS.hooks.run('before-tokenize', env);

	hooks.beforeTokenize?.forEach((hook) => {
    hook(env)
	})

	if (!env.grammar) {
		throw new Error('The language "' + env.language + '" has no grammar.');
	}

  // New tokenizer wrapping every new line
	env.tokens = splitLines(
	  PrismJS.tokenize(env.code, env.grammar)
	);

	PrismJS.hooks.run('after-tokenize', env);
	hooks.afterTokenize?.forEach((hook) => {
    hook(env)
	})

	return Token.stringify(PrismJS.util.encode(env.tokens), env.language);
}

export { PrismJS }
