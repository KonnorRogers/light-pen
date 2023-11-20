// A custom Prism highlight implementation specific for adding line numbers for the editor by
// modifying the tokenizer.

import PrismJS, { Token } from "prismjs"

// HTML
import "prismjs/components/prism-markup.js"
import "prismjs/components/prism-markup-templating.js"

// CSS
import "prismjs/components/prism-css.js"
import "prismjs/components/prism-css-extras.js"

// JS
import "prismjs/components/prism-javascript.js"
import "prismjs/components/prism-js-extras.js"
import "prismjs/components/prism-js-templates.js"

// JSX
import "prismjs/components/prism-jsx.js"

// TS
import "prismjs/components/prism-typescript.js"

// TSX
import "prismjs/components/prism-tsx.js"

/**
 * @typedef {import("prismjs").hooks.TokenizeEnvironment & { tokens: Array<string | Token>}} Env
 * @typedef {import("prismjs").hooks.HookCallback} HookCallback
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
	env.tokens = PrismJS.tokenize(env.code, env.grammar)

	hooks.afterTokenize?.forEach((hook) => {
    hook(env)
	})
	PrismJS.hooks.run('after-tokenize', env);

	return Token.stringify(PrismJS.util.encode(env.tokens), env.language);
}

// @TODO: Fork prism, make an ESM build that isn't a global UMD and attempts to immediately highlight everything.
PrismJS.manual = true

export { PrismJS }
