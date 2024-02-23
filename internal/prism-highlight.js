// A custom Prism highlight implementation specific for adding line numbers for the editor by
// modifying the tokenizer.

import { Prism as PrismJS, Token } from "prism-esm"

// HTML
import { loader as markupLoader } from "prism-esm/components/prism-markup.js"
import { loader as markupTemplatingLoader } from "prism-esm/components/prism-markup-templating.js"

// CSS
import { loader as cssLoader } from "prism-esm/components/prism-css.js"
import { loader as cssExtrasLoader } from "prism-esm/components/prism-css-extras.js"

// JS
import { loader as javascriptLoader } from "prism-esm/components/prism-javascript.js"
import { loader as javascriptExtrasLoader } from "prism-esm/components/prism-js-extras.js"
import { loader as javascriptTemplatesLoader } from "prism-esm/components/prism-js-templates.js"

// JSX
import { loader as jsxLoader } from "prism-esm/components/prism-jsx.js"

// TS
import { loader as tsLoader } from "prism-esm/components/prism-typescript.js"

// TSX
import { loader as tsxLoader } from "prism-esm/components/prism-tsx.js"

/**
 * @typedef {{ code: string, grammar: import("prism-esm").Grammar, language: string } & { tokens: Array<string | Token>}} Env
 * @typedef {import("prism-esm").HookCallback} HookCallback
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


const prism = new PrismJS()
markupLoader(prism)
markupTemplatingLoader(prism)
cssLoader(prism)
cssExtrasLoader(prism)
javascriptLoader(prism)
javascriptExtrasLoader(prism)
javascriptTemplatesLoader(prism)
jsxLoader(prism)
tsLoader(prism)
tsxLoader(prism)

/**
 * @see https://github.com/PrismJS/prism/blob/59e5a3471377057de1f401ba38337aca27b80e03/prism.js#L660
 * A forked function from PrismJS to make wrap the tokenizer with custom functionality.
 * @param {string} text - The code to highlight
 * @param {import("prism-esm").Grammar} grammar - The grammar to use
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

	prism.hooks.run('before-tokenize', env);

	hooks.beforeTokenize?.forEach((hook) => {
    hook(env)
	})

	if (!env.grammar) {
		throw new Error('The language "' + env.language + '" has no grammar.');
	}

  // New tokenizer wrapping every new line
  // @ts-expect-error
	env.tokens = prism.tokenize(env.code, env.grammar)

	hooks.afterTokenize?.forEach((hook) => {
    hook(env)
	})
	prism.hooks.run('after-tokenize', env);

  // @ts-expect-error
	return Token.stringify(prism.util.encode(env.tokens), env.language, prism);
}

export { prism }
