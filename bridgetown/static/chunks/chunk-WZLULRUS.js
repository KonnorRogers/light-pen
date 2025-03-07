import {
  BaseElement,
  T,
  baseStyles,
  i,
  w,
  x
} from "/light-pen/bridgetown/static/chunks/chunk-VXHTUS4U.js";
import {
  __publicField
} from "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// ../node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/when.js
function n(n2, r, t2) {
  return n2 ? r(n2) : t2?.(n2);
}

// ../node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directive.js
var t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e = (t2) => (...e3) => ({ _$litDirective$: t2, values: e3 });
var i2 = class {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e3, i3) {
    this._$Ct = t2, this._$AM = e3, this._$Ci = i3;
  }
  _$AS(t2, e3) {
    return this.update(t2, e3);
  }
  update(t2, e3) {
    return this.render(...e3);
  }
};

// ../node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/unsafe-html.js
var e2 = class extends i2 {
  constructor(i3) {
    if (super(i3), this.it = T, i3.type !== t.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r) {
    if (r === T || null == r) return this._t = void 0, this.it = r;
    if (r === w) return r;
    if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r === this.it) return this._t;
    this.it = r;
    const s = [r];
    return s.raw = s, this._t = { _$litType$: this.constructor.resultType, strings: s, values: [] };
  }
};
e2.directiveName = "unsafeHTML", e2.resultType = 1;
var o = e(e2);

// ../exports/styles/default-theme.styles.js
var theme = i`
  /**
 * One Light theme for prism.js
 * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
 */

  /**
 * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
 * From colors.less
 * --mono-1: hsl(230, 8%, 24%);
 * --mono-2: hsl(230, 6%, 44%);
 * --mono-3: hsl(230, 4%, 64%);
 * --hue-1: hsl(198, 99%, 37%);
 * --hue-2: hsl(221, 87%, 60%);
 * --hue-3: hsl(301, 63%, 40%);
 * --hue-4: hsl(119, 34%, 47%);
 * --hue-5: hsl(5, 74%, 59%);
 * --hue-5-2: hsl(344, 84%, 43%);
 * --hue-6: hsl(35, 99%, 36%);
 * --hue-6-2: hsl(35, 99%, 40%);
 * --syntax-fg: hsl(230, 8%, 24%);
 * --syntax-bg: hsl(230, 1%, 98%);
 * --syntax-gutter: hsl(230, 1%, 62%);
 * --syntax-guide: hsla(230, 8%, 24%, 0.2);
 * --syntax-accent: hsl(230, 100%, 66%);
 * From syntax-variables.less
 * --syntax-selection-color: hsl(230, 1%, 90%);
 * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
 * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);
 * <---- Additional Tokens --->
 * --syntax-gutter-border: 1px solid darkgray;
 * --syntax-highlight-bg: hsl(210, 9%, 95%);
 * --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

 *  --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);
 *  --syntax-deleted-bg: hsla(353, 95%, 66%, 0.25);

 *  --syntax-inserted-bg: hsla(137, 100%, 95%);
 *  --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25)
 */

  :host {
    --mono-1: hsl(230, 8%, 24%);
    --mono-2: hsl(230, 6%, 44%);
    --mono-3: hsl(230, 4%, 64%);
    --hue-1: hsl(198, 99%, 37%);
    --hue-2: hsl(221, 87%, 60%);
    --hue-3: hsl(301, 63%, 40%);
    --hue-4: hsl(119, 34%, 47%);
    --hue-5: hsl(5, 74%, 59%);
    --hue-5-2: hsl(344, 84%, 43%);
    --hue-6: hsl(35, 99%, 36%);
    --hue-6-2: hsl(35, 99%, 40%);
    --syntax-fg: hsl(230, 8%, 24%);
    --syntax-bg: hsl(230, 1%, 98%);
    --syntax-gutter: hsl(230, 1%, 62%);
    --syntax-guide: hsla(230, 8%, 24%, 0.2);
    --syntax-accent: hsl(230, 100%, 66%);
    /** From syntax-variables.less */
    --syntax-selection-color: hsl(230, 1%, 90%);
    --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
    --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);

    /* --- additional tokens --> */
    --syntax-gutter-border: 1px solid darkgray;

    --syntax-highlight-bg: hsl(210, 9%, 95%);
    --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

    --syntax-deleted-bg: hsla(353, 95%, 86%, 0.25);
    --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);

    --syntax-inserted-bg: hsla(137, 100%, 95%);
    --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: var(--syntax-bg);
    color: var(--syntax-fg);
    direction: ltr;
    text-align: left;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Selection */
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] *::-moz-selection,
  pre[class*="language-"] *::-moz-selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  code[class*="language-"]::selection,
  code[class*="language-"] *::selection,
  pre[class*="language-"] *::selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: var(--mono-3);
  }

  .token.doctype,
  .token.punctuation,
  .token.entity {
    color: var(--mono-1);
  }

  .token.attr-name,
  .token.class-name,
  .token.boolean,
  .token.constant,
  .token.number,
  .token.atrule {
    color: var(--hue-6);
  }

  .token.keyword {
    color: var(--hue-3);
  }

  .token.property,
  .token.tag,
  .token.symbol,
  .token.deleted,
  .token.important {
    color: var(--hue-5);
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.regex,
  .token.attr-value,
  .token.attr-value > .token.punctuation {
    color: var(--hue-4);
  }

  .token.variable,
  .token.operator,
  .token.function {
    color: var(--hue-2);
  }

  .token.url {
    color: var(--hue-1);
  }

  /* HTML overrides */
  .token.attr-value > .token.punctuation.attr-equals,
  .token.special-attr > .token.attr-value > .token.value.css {
    color: var(--mono-1);
  }

  /* CSS overrides */
  .language-css .token.selector {
    color: var(--hue-5);
  }

  .language-css .token.property {
    color: var(--mono-1);
  }

  .language-css .token.function,
  .language-css .token.url > .token.function {
    color: var(--hue-1);
  }

  .language-css .token.url > .token.string.url {
    color: var(--hue-4);
  }

  .language-css .token.important,
  .language-css .token.atrule .token.rule {
    color: var(--hue-3);
  }

  /* JS overrides */
  .language-javascript .token.operator {
    color: var(--hue-3);
  }

  .language-javascript
    .token.template-string
    > .token.interpolation
    > .token.interpolation-punctuation.punctuation {
    color: var(--hue-5-2);
  }

  /* JSON overrides */
  .language-json .token.operator {
    color: var(--mono-1);
  }

  .language-json .token.null.keyword {
    color: var(--hue-6);
  }

  /* MD overrides */
  .language-markdown .token.url,
  .language-markdown .token.url > .token.operator,
  .language-markdown .token.url-reference.url > .token.string {
    color: var(--mono-1);
  }

  .language-markdown .token.url > .token.content {
    color: var(--hue-2);
  }

  .language-markdown .token.url > .token.url,
  .language-markdown .token.url-reference.url {
    color: var(--hue-1);
  }

  .language-markdown .token.blockquote.punctuation,
  .language-markdown .token.hr.punctuation {
    color: var(--mono-3);
    font-style: italic;
  }

  .language-markdown .token.code-snippet {
    color: var(--hue-4);
  }

  .language-markdown .token.bold .token.content {
    color: var(--hue-6);
  }

  .language-markdown .token.italic .token.content {
    color: var(--hue-3);
  }

  .language-markdown .token.strike .token.content,
  .language-markdown .token.strike .token.punctuation,
  .language-markdown .token.list.punctuation,
  .language-markdown .token.title.important > .token.punctuation {
    color: var(--hue-5);
  }

  /* General */
  .token.bold {
    font-weight: bold;
  }

  .token.comment,
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.namespace {
    opacity: 0.8;
  }

  /* Plugin overrides */
  /* Selectors should have higher specificity than those in the plugins' default stylesheets */

  /* Show Invisibles plugin overrides */
  .token.token.tab:not(:empty):before,
  .token.token.cr:before,
  .token.token.lf:before,
  .token.token.space:before {
    color: var(--syntax-guide);
  }

  /* Toolbar plugin overrides */
  /* Space out all buttons and move them away from the right edge of the code block */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item {
    margin-right: 0.4em;
  }

  /* Styling the buttons */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {
    background: var(--syntax-selection-color);
    color: var(--mono-2);
    padding: 0.1em 0.4em;
    border-radius: 0.3em;
  }

  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
    background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */
    color: var(--mono-1);
  }

  /* Line Highlight plugin overrides */
  /* The highlighted line itself */
  .line-highlight.line-highlight {
    background: var(--syntax-highlight-bg);
  }

  /* Selection on highlighted lines */
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)
    *::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-highlight-selected-bg);
  }

  /* Selection on highlighted lines */
  pre.diff-highlight > code .token.token.line-highlight:not(.prefix)::selection,
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)
    *::selection,
  pre > code.diff-highlight .token.token.line-highlight:not(.prefix)::selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)
    *::selection {
    background-color: var(--syntax-highlight-selected-bg);
  }

  /* Hovering over a linkable line number (in the gutter area) */
  /* Requires Line Numbers plugin as well */
  pre[id].linkable-line-numbers.linkable-line-numbers
    span.line-numbers-rows
    > span:hover:before {
    background-color: var(--syntax-cursor-line);
  }

  /* Line Numbers and Command Line plugins overrides */
  /* Line separating gutter from coding area */
  .line-numbers.line-numbers .line-numbers-rows,
  .command-line .command-line-prompt {
    border-right-color: var(--syntax-guide);
  }

  /* Stuff in the gutter */
  .line-numbers .line-numbers-rows > span:before,
  .command-line .command-line-prompt > span:before {
    color: var(--syntax-gutter);
  }

  /* Match Braces plugin overrides */
  /* Note: Outline colour is inherited from the braces */
  .rainbow-braces .token.token.punctuation.brace-level-1,
  .rainbow-braces .token.token.punctuation.brace-level-5,
  .rainbow-braces .token.token.punctuation.brace-level-9 {
    color: var(--hue-5);
  }

  .rainbow-braces .token.token.punctuation.brace-level-2,
  .rainbow-braces .token.token.punctuation.brace-level-6,
  .rainbow-braces .token.token.punctuation.brace-level-10 {
    color: var(--hue-4);
  }

  .rainbow-braces .token.token.punctuation.brace-level-3,
  .rainbow-braces .token.token.punctuation.brace-level-7,
  .rainbow-braces .token.token.punctuation.brace-level-11 {
    color: var(--hue-2);
  }

  .rainbow-braces .token.token.punctuation.brace-level-4,
  .rainbow-braces .token.token.punctuation.brace-level-8,
  .rainbow-braces .token.token.punctuation.brace-level-12 {
    color: var(--hue-3);
  }

  /* Diff Highlight plugin overrides */
  /* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
  pre.diff-highlight > code .token.token.deleted:not(.prefix),
  pre > code.diff-highlight .token.token.deleted:not(.prefix) {
    background-color: var(--syntax-deleted-bg);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.deleted:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix),
  pre > code.diff-highlight .token.token.inserted:not(.prefix) {
    background-color: var(--syntax-inserted-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.inserted:not(.prefix)
    *::-moz-selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.inserted:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  /* Previewers plugin overrides */
  /* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */
  /* Border around popup */
  .prism-previewer.prism-previewer:before,
  .prism-previewer-gradient.prism-previewer-gradient div {
    border-color: hsl(0, 0, 95%);
  }

  /* Angle and time should remain as circles and are hence not included */
  .prism-previewer-color.prism-previewer-color:before,
  .prism-previewer-gradient.prism-previewer-gradient div,
  .prism-previewer-easing.prism-previewer-easing:before {
    border-radius: 0.3em;
  }

  /* Triangles pointing to the code */
  .prism-previewer.prism-previewer:after {
    border-top-color: hsl(0, 0, 95%);
  }

  .prism-previewer-flipped.prism-previewer-flipped.after {
    border-bottom-color: hsl(0, 0, 95%);
  }

  /* Background colour within the popup */
  .prism-previewer-angle.prism-previewer-angle:before,
  .prism-previewer-time.prism-previewer-time:before,
  .prism-previewer-easing.prism-previewer-easing {
    background: hsl(0, 0%, 100%);
  }

  /* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */
  /* For time, this is the alternate colour */
  .prism-previewer-angle.prism-previewer-angle circle,
  .prism-previewer-time.prism-previewer-time circle {
    stroke: var(--mono-1);
    stroke-opacity: 1;
  }

  /* Stroke colours of the handle, direction point, and vector itself */
  .prism-previewer-easing.prism-previewer-easing circle,
  .prism-previewer-easing.prism-previewer-easing path,
  .prism-previewer-easing.prism-previewer-easing line {
    stroke: var(--mono-1);
  }

  /* Fill colour of the handle */
  .prism-previewer-easing.prism-previewer-easing circle {
    fill: transparent;
  }
`;

// ../exports/styles/code-styles.js
var codeStyles = i`
  [part~="pre"],
  [part~="code"] {
    background: hsl(230, 1%, 98%);
    color: hsl(230, 8%, 24%);
    line-height: 1.8;
  }

  [part~="pre"] {
    margin: 0;
    /* This removes line wrapping */
    word-break: break-all;
    white-space: pre;
    padding: 0;
    height: 100%;
  }

  [part~="code"] {
    display: grid;
  }

  :host([wrap="hard"]) [part~="code"] {
    grid-template-columns: max-content max-content;
  }

  :host([wrap="soft"]) [part~="code"] {
    grid-template-columns: max-content minmax(0, 1fr);
  }

  :host([wrap="soft"]) [part~="pre"] {
    /* this creates line-wrapping. */
    word-break: break-word;
    white-space: pre-wrap;
  }

  :host([disable-line-numbers]) [part~="code"] {
    grid-template-columns: minmax(0, 1fr);
  }

  [part~="line"] {
    display: inline-block;
    width: 100%;
    padding-inline-start: 6px;
    padding-inline-end: 6px;
    min-height: 1lh;
  }

  [part~="line"]::before {
    content: " ";
    line-height: inherit;
    padding-inline-end: 6px;
  }

  [part~="line"].deleted::before {
    content: "-";
  }

  [part~="line"].inserted::before {
    content: "+";
  }

  [part~="gutter-cell"] {
    display: inline-block;
    padding-inline-end: 0.5em;
    padding-inline-start: 0.75em;
    user-select: none;
    color: rgba(0, 0, 0, 0.35);
    background-color: var(--syntax-bg);
    font-variant-numeric: tabular-nums;
    text-align: end;
    position: sticky;
    z-index: 1;
    left: 0px;
  }
`;

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/prism-core.js
var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
var environment = _self;
var Prism = class {
  /**
   * @param {PrismOptions} options
   */
  constructor(options = {}) {
    let plainTextGrammar = {};
    const {
      disableWorkerMessageHandler,
      manual
    } = options;
    this.manual = manual;
    if (this.manual == null) {
      this.manual = true;
    }
    this.plugins = {};
    const _ = this;
    this.disableWorkerMessageHandler = Boolean(disableWorkerMessageHandler);
    this.Token = Token;
    this.util = new Util(this);
    const util = this.util;
    this.languages = {
      /**
       * The grammar for plain, unformatted text.
       */
      plain: plainTextGrammar,
      plaintext: plainTextGrammar,
      text: plainTextGrammar,
      txt: plainTextGrammar,
      /**
       * Creates a deep copy of the language with the given id and appends the given tokens.
       *
       * If a token in `redef` also appears in the copied language, then the existing token in the copied language
       * will be overwritten at its original position.
       *
       * ## Best practices
       *
       * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
       * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
       * understand the language definition because, normally, the order of tokens matters in Prism grammars.
       *
       * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
       * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
       *
       * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
       * @param {Grammar} redef The new tokens to append.
       * @returns {Grammar} The new language created.
       * @public
       * @example
       * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
       *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
       *     // at its original position
       *     'comment': { ... },
       *     // CSS doesn't have a 'color' token, so this token will be appended
       *     'color': /\b(?:red|green|blue)\b/
       * });
       */
      extend: (id, redef) => {
        let lang2 = this.util.clone(this.languages[id]);
        for (var key in redef) {
          lang2[key] = redef[key];
        }
        return lang2;
      },
      /**
       * Inserts tokens _before_ another token in a language definition or any other grammar.
       *
       * ## Usage
       *
       * This helper method makes it easy to modify existing languages. For example, the CSS language definition
       * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
       * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
       * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
       * this:
       *
       * ```js
       * Prism.languages.markup.style = {
       *     // token
       * };
       * ```
       *
       * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
       * before existing tokens. For the CSS example above, you would use it like this:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'cdata', {
       *     'style': {
       *         // token
       *     }
       * });
       * ```
       *
       * ## Special cases
       *
       * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
       * will be ignored.
       *
       * This behavior can be used to insert tokens after `before`:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'comment', {
       *     'comment': Prism.languages.markup.comment,
       *     // tokens after 'comment'
       * });
       * ```
       *
       * ## Limitations
       *
       * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
       * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
       * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
       * deleting properties which is necessary to insert at arbitrary positions.
       *
       * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
       * Instead, it will create a new object and replace all references to the target object with the new one. This
       * can be done without temporarily deleting properties, so the iteration order is well-defined.
       *
       * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
       * you hold the target object in a variable, then the value of the variable will not change.
       *
       * ```js
       * var oldMarkup = Prism.languages.markup;
       * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
       *
       * assert(oldMarkup !== Prism.languages.markup);
       * assert(newMarkup === Prism.languages.markup);
       * ```
       *
       * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
       * object to be modified.
       * @param {string} before The key to insert before.
       * @param {Grammar} insert An object containing the key-value pairs to be inserted.
       * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
       * object to be modified.
       *
       * Defaults to `Prism.languages`.
       * @returns {Grammar} The new grammar object.
       * @public
       */
      insertBefore: (inside, before, insert, root) => {
        if (!root) {
          root = /** @type {Record<string, unknown>} */
          this.languages;
        }
        let grammar = root[inside];
        let ret = {};
        for (let token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }
            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }
        var old = root[inside];
        root[inside] = ret;
        this.languages.DFS(this.languages, function(key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });
        return ret;
      },
      // Traverse a language definition with Depth First Search
      DFS(o2, callback, type, visited) {
        visited = visited || {};
        var objId = util.objId;
        for (var i3 in o2) {
          if (o2.hasOwnProperty(i3)) {
            callback.call(o2, i3, o2[i3], type || i3);
            var property = o2[i3];
            var propertyType = util.type(property);
            if (propertyType === "Object" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              this.DFS(property, callback, null, visited);
            } else if (propertyType === "Array" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              this.DFS(property, callback, i3, visited);
            }
          }
        }
      }
    };
    this.hooks = {
      all: {},
      /**
       * Adds the given callback to the list of callbacks for the given hook.
       *
       * The callback will be invoked when the hook it is registered for is run.
       * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
       *
       * One callback function can be registered to multiple hooks and the same hook multiple times.
       *
       * @param {string} name The name of the hook.
       * @param {HookCallback} callback The callback function which is given environment variables.
       * @public
       */
      add: function(name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      /**
       * Runs a hook invoking all registered callbacks with the given environment variables.
       *
       * Callbacks will be invoked synchronously and in the order in which they were registered.
       *
       * @param {string} name The name of the hook.
       * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
       * @public
       */
      run: function(name, env) {
        var callbacks = _.hooks.all[name];
        if (!callbacks || !callbacks.length) {
          return;
        }
        for (var i3 = 0, callback; callback = callbacks[i3++]; ) {
          callback(env);
        }
      }
    };
    if (!environment.document) {
      if (!environment.addEventListener) {
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        environment.addEventListener("message", function(evt) {
          var message = JSON.parse(evt.data);
          var lang2 = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;
          environment.postMessage(_.highlight(code, _.languages[lang2], lang2));
          if (immediateClose) {
            _self.close();
          }
        }, false);
      }
      return _;
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    const script = this.util.currentScript();
    if (script) {
      this.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _.manual = true;
      }
    }
    if (!_.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
  }
  /**
  * This is the most high-level function in Prism’s API.
  * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
  * each one of them.
  *
  * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
  *
  * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
  * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
  * @memberof Prism
  * @public
  */
  highlightAll(async, callback) {
    this.highlightAllUnder(document, async, callback);
  }
  /**
  	* Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
  	* {@link Prism.highlightElement} on each one of them.
  	*
  	* The following hooks will be run:
  	* 1. `before-highlightall`
  	* 2. `before-all-elements-highlight`
  	* 3. All hooks of {@link Prism.highlightElement} for each element.
  	*
  	* @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
  	* @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
  	* @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
  	* @memberof Prism
  	* @public
  	*/
  highlightAllUnder(container, async, callback) {
    var env = {
      callback,
      container,
      selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
    };
    this.hooks.run("before-highlightall", env);
    env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
    this.hooks.run("before-all-elements-highlight", env);
    for (var i3 = 0, element; element = env.elements[i3++]; ) {
      this.highlightElement(element, async === true, env.callback);
    }
  }
  /**
  * Highlights the code inside a single element.
  *
  * The following hooks will be run:
  * 1. `before-sanity-check`
  * 2. `before-highlight`
  * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
  * 4. `before-insert`
  * 5. `after-highlight`
  * 6. `complete`
  *
  * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
  * the element's language.
  *
  * @param {Element} element The element containing the code.
  * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
  * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
  * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
  * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
  *
  * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
  * asynchronous highlighting to work. You can build your own bundle on the
  * [Download page](https://prismjs.com/download.html).
  * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
  * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
  * @public
  */
  highlightElement(element, async, callback) {
    var language = this.util.getLanguage(element);
    var grammar = this.languages[language];
    this.util.setLanguage(element, language);
    var parent = element.parentElement;
    if (parent && parent.nodeName.toLowerCase() === "pre") {
      this.util.setLanguage(parent, language);
    }
    var code = element.textContent;
    var env = {
      element,
      language,
      grammar,
      code
    };
    const insertHighlightedCode = (highlightedCode) => {
      env.highlightedCode = highlightedCode;
      this.hooks.run("before-insert", env);
      env.element.innerHTML = env.highlightedCode;
      this.hooks.run("after-highlight", env);
      this.hooks.run("complete", env);
      callback && callback.call(env.element);
    };
    this.hooks.run("before-sanity-check", env);
    parent = env.element.parentElement;
    if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
      parent.setAttribute("tabindex", "0");
    }
    if (!env.code) {
      this.hooks.run("complete", env);
      callback && callback.call(env.element);
      return;
    }
    this.hooks.run("before-highlight", env);
    if (!env.grammar) {
      insertHighlightedCode(this.util.encode(env.code));
      return;
    }
    if (async && _self.Worker) {
      var worker = new Worker(this.filename);
      worker.onmessage = function(evt) {
        insertHighlightedCode(evt.data);
      };
      worker.postMessage(JSON.stringify({
        language: env.language,
        code: env.code,
        immediateClose: true
      }));
    } else {
      insertHighlightedCode(this.highlight(env.code, env.grammar, env.language));
    }
  }
  /**
  	* Low-level function, only use if you know what you’re doing. It accepts a string of text as input
  	* and the language definitions to use, and returns a string with the HTML produced.
  	*
  	* The following hooks will be run:
  	* 1. `before-tokenize`
  	* 2. `after-tokenize`
  	* 3. `wrap`: On each {@link Token}.
  	*
  	* @param {string} text A string with the code to be highlighted.
  	* @param {Grammar} grammar An object containing the tokens to use.
  	*
  	* Usually a language definition like `Prism.languages.markup`.
  	* @param {string} language The name of the language definition passed to `grammar`.
  	* @returns {string} The highlighted HTML.
  	* @memberof Prism
  	* @public
  	* @example
  	* Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
  	*/
  highlight(text, grammar, language) {
    var env = {
      code: text,
      grammar,
      language
    };
    this.hooks.run("before-tokenize", env);
    if (!env.grammar) {
      throw new Error('The language "' + env.language + '" has no grammar.');
    }
    env.tokens = this.tokenize(env.code, env.grammar);
    this.hooks.run("after-tokenize", env);
    return Token.stringify(this.util.encode(env.tokens), env.language, this);
  }
  /**
  	* This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
  	* and the language definitions to use, and returns an array with the tokenized code.
  	*
  	* When the language definition includes nested tokens, the function is called recursively on each of these tokens.
  	*
  	* This method could be useful in other contexts as well, as a very crude parser.
  	*
  	* @param {string} text A string with the code to be highlighted.
  	* @param {Grammar} grammar An object containing the tokens to use.
  	*
  	* Usually a language definition like `Prism.languages.markup`.
  	* @returns {TokenStream} An array of strings and tokens, a token stream.
  	* @memberof Prism
  	* @public
  	* @example
  	* let code = `var foo = 0;`;
  	* let tokens = Prism.tokenize(code, Prism.languages.javascript);
  	* tokens.forEach(token => {
  	*     if (token instanceof Prism.Token && token.type === 'number') {
  	*         console.log(`Found numeric literal: ${token.content}`);
  	*     }
  	* });
  	*/
  tokenize(text, grammar) {
    var rest = grammar?.rest;
    if (rest) {
      for (var token in rest) {
        grammar[token] = rest[token];
      }
      delete grammar.rest;
    }
    var tokenList = new LinkedList();
    addAfter(tokenList, tokenList.head, text);
    matchGrammar(text, tokenList, grammar, tokenList.head, 0, this);
    return toArray(tokenList);
  }
};
var Token = class {
  /**
  * @param {string} type See {@link Token#type type}
  * @param {string | TokenStream} content See {@link Token#content content}
  * @param {string|string[]} [alias] The alias(es) of the token.
  * @param {string} [matchedStr=""] A copy of the full string this token was created from.
  	*/
  constructor(type, content, alias, matchedStr) {
    this.type = type;
    this.content = content;
    this.alias = alias;
    this.length = (matchedStr || "").length | 0;
  }
  /**
  * Converts the given token or token stream to an HTML representation.
  *
  * The following hooks will be run:
  * 1. `wrap`: On each {@link Token}.
  *
  * @param {string | Token | TokenStream} o The token or token stream to be converted.
  * @param {string} language The name of current language.
  * @param {Prism} prism - The instance of prism to use for "wrap" hooks
  * @returns {string} The HTML representation of the token or token stream.
  * @memberof Token
  * @static
  */
  static stringify(o2, language, prism) {
    const _ = this;
    if (typeof o2 == "string") {
      return o2;
    }
    if (Array.isArray(o2)) {
      var s = "";
      o2.forEach(function(e3) {
        s += _.stringify(
          /** @type {string} */
          e3,
          language,
          prism
        );
      });
      return s;
    }
    var env = {
      type: o2.type,
      content: _.stringify(o2.content, language, prism),
      tag: "span",
      classes: ["token", o2.type],
      attributes: {},
      language
    };
    var aliases = o2.alias;
    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }
    prism.hooks.run("wrap", env);
    var attributes = "";
    for (var name in env.attributes) {
      attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
  }
};
var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
var uniqueId = 0;
var Util = class {
  /**
   * @param {Prism} prism
   */
  constructor(prism) {
    /**
     * @param {Token | Token[] | string} tokens
     * @return {Token | Token[] | string}
     */
    __publicField(this, "encode", (tokens) => {
      if (tokens instanceof Token) {
        const content = (
          /** @type {string} */
          tokens.content
        );
        return new Token(
          tokens.type,
          /** @type {string} */
          this.encode(content),
          tokens.alias
        );
      } else if (Array.isArray(tokens)) {
        return tokens.map((token) => (
          /** @type {Token} */
          this.encode(token)
        ));
      } else {
        return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      }
    });
    this.prism = prism;
  }
  /**
  	* Returns the name of the type of the given value.
  	*
  	* @param {any} o
  	* @returns {string}
  	* @example
  	* type(null)      === 'Null'
  	* type(undefined) === 'Undefined'
  	* type(123)       === 'Number'
  	* type('foo')     === 'String'
  	* type(true)      === 'Boolean'
  	* type([1, 2])    === 'Array'
  	* type({})        === 'Object'
  	* type(String)    === 'Function'
  	* type(/abc+/)    === 'RegExp'
  	*/
  type(o2) {
    return Object.prototype.toString.call(o2).slice(8, -1);
  }
  /**
  * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
  *
  * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
  *
  * @param {Element} element
  * @returns {string}
  */
  getLanguage(element) {
    while (element) {
      var m = lang.exec(element.className);
      if (m) {
        return m[1].toLowerCase();
      }
      element = element.parentElement;
    }
    return "none";
  }
  /**
  * Sets the Prism `language-xxxx` class of the given element.
  *
  * @param {Element} element
  * @param {string} language
  * @returns {void}
  */
  setLanguage(element, language) {
    element.className = element.className.replace(RegExp(lang, "gi"), "");
    element.classList.add("language-" + language);
  }
  /**
  	* Returns a unique number for the given object. Later calls will still return the same number.
  	*
  	* @param {Object} obj
  	* @returns {number}
  	*/
  objId(obj) {
    if (!obj["__id"]) {
      Object.defineProperty(obj, "__id", { value: ++uniqueId });
    }
    return obj["__id"];
  }
  /**
  * Creates a deep clone of the given object.
  *
  * The main intended use of this function is to clone language definitions.
  *
  * @template T
  * @param {T} o
  * @returns {T}
  */
  clone(o2) {
    return structuredClone(o2);
  }
  /**
  * Returns whether a given class is active for `element`.
  *
  * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
  * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
  * given class is just the given class with a `no-` prefix.
  *
  * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
  * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
  * ancestors have the given class or the negated version of it, then the default activation will be returned.
  *
  * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
  * version of it, the class is considered active.
  *
  * @param {Element} element
  * @param {string} className
  * @param {boolean} [defaultActivation=false]
  * @returns {boolean}
  */
  isActive(element, className, defaultActivation) {
    var no = "no-" + className;
    while (element) {
      var classList = element.classList;
      if (classList.contains(className)) {
        return true;
      }
      if (classList.contains(no)) {
        return false;
      }
      element = element.parentElement;
    }
    return !!defaultActivation;
  }
  /**
  	* Returns the script element that is currently executing.
  	*
  	* This does __not__ work for line script element.
  	*
  	* @returns {HTMLScriptElement | null}
  	*/
  currentScript() {
    if (typeof document === "undefined") {
      return null;
    }
    if ("currentScript" in document && 1 < 2) {
      return (
        /** @type {any} */
        document.currentScript
      );
    }
    try {
      throw new Error();
    } catch (err) {
      var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
      if (src) {
        var scripts = document.getElementsByTagName("script");
        for (var i3 in scripts) {
          if (scripts[i3].src == src) {
            return scripts[i3];
          }
        }
      }
      return null;
    }
  }
};
function matchPattern(pattern, pos, text, lookbehind) {
  pattern.lastIndex = pos;
  var match = pattern.exec(text);
  if (match && lookbehind && match[1]) {
    var lookbehindLength = match[1].length;
    match.index += lookbehindLength;
    match[0] = match[0].slice(lookbehindLength);
  }
  return match;
}
function matchGrammar(text, tokenList, grammar, startNode, startPos, prismInstance, rematch) {
  for (var token in grammar) {
    if (!grammar.hasOwnProperty(token) || !grammar[token]) {
      continue;
    }
    var patterns = grammar[token];
    patterns = Array.isArray(patterns) ? patterns : [patterns];
    for (var j = 0; j < patterns.length; ++j) {
      if (rematch && rematch.cause == token + "," + j) {
        return;
      }
      var patternObj = patterns[j];
      var inside = patternObj.inside;
      var lookbehind = !!patternObj.lookbehind;
      var greedy = !!patternObj.greedy;
      var alias = patternObj.alias;
      if (greedy && !patternObj.pattern.global) {
        var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
        patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
      }
      var pattern = patternObj.pattern || patternObj;
      for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
        if (rematch && pos >= rematch.reach) {
          break;
        }
        var str = currentNode.value;
        if (tokenList.length > text.length) {
          return;
        }
        if (str instanceof Token) {
          continue;
        }
        var removeCount = 1;
        var match;
        if (greedy) {
          match = matchPattern(pattern, pos, text, lookbehind);
          if (!match || match.index >= text.length) {
            break;
          }
          var from = match.index;
          var to = match.index + match[0].length;
          var p = pos;
          p += currentNode.value.length;
          while (from >= p) {
            currentNode = currentNode.next;
            p += currentNode.value.length;
          }
          p -= currentNode.value.length;
          pos = p;
          if (currentNode.value instanceof Token) {
            continue;
          }
          for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
            removeCount++;
            p += k.value.length;
          }
          removeCount--;
          str = text.slice(pos, p);
          match.index -= pos;
        } else {
          match = matchPattern(pattern, 0, str, lookbehind);
          if (!match) {
            continue;
          }
        }
        var from = match.index;
        var matchStr = match[0];
        var before = str.slice(0, from);
        var after = str.slice(from + matchStr.length);
        var reach = pos + str.length;
        if (rematch && reach > rematch.reach) {
          rematch.reach = reach;
        }
        var removeFrom = currentNode.prev;
        if (before) {
          removeFrom = addAfter(tokenList, removeFrom, before);
          pos += before.length;
        }
        removeRange(tokenList, removeFrom, removeCount);
        var wrapped = new Token(token, inside ? prismInstance.tokenize(matchStr, inside) : matchStr, alias, matchStr);
        currentNode = addAfter(tokenList, removeFrom, wrapped);
        if (after) {
          addAfter(tokenList, currentNode, after);
        }
        if (removeCount > 1) {
          var nestedRematch = {
            cause: token + "," + j,
            reach
          };
          matchGrammar(text, tokenList, grammar, currentNode.prev, pos, prismInstance, nestedRematch);
          if (rematch && nestedRematch.reach > rematch.reach) {
            rematch.reach = nestedRematch.reach;
          }
        }
      }
    }
  }
}
function LinkedList() {
  var head = { value: null, prev: null, next: null };
  var tail = { value: null, prev: head, next: null };
  head.next = tail;
  this.head = head;
  this.tail = tail;
  this.length = 0;
}
function addAfter(list, node, value) {
  var next = node.next;
  var newNode = { value, prev: node, next };
  node.next = newNode;
  next.prev = newNode;
  list.length++;
  return newNode;
}
function removeRange(list, node, count) {
  var next = node.next;
  for (var i3 = 0; i3 < count && next !== list.tail; i3++) {
    next = next.next;
  }
  node.next = next;
  next.prev = node;
  list.length -= i3;
}
function toArray(list) {
  var array = [];
  var node = list.head.next;
  while (node !== list.tail) {
    array.push(node.value);
    node = node.next;
  }
  return array;
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-markup.js
function loader(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["markup"]) {
    return;
  }
  Prism3.languages.markup = {
    "comment": {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    "prolog": {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    "doctype": {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
          // see below
        },
        "string": {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        "punctuation": /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        "name": /[^\s<>'"]+/
      }
    },
    "cdata": {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    "tag": {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        "tag": {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            "punctuation": /^<\/?/,
            "namespace": /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            "punctuation": [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        "punctuation": /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            "namespace": /^[^\s>\/:]+:/
          }
        }
      }
    },
    "entity": [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  };
  Prism3.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism3.languages.markup["entity"];
  Prism3.languages.markup["doctype"].inside["internal-subset"].inside = Prism3.languages.markup;
  Prism3.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism3.languages.markup.tag, "addInlined", {
    /**
    	* Adds an inlined language to markup.
    	*
    	* An example of an inlined language is CSS with `<style>` tags.
    	*
    	* @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
    	* case insensitive.
    	* @param {string} lang The language key.
    	* @example
    	* addInlined('style', 'css');
    	*/
    value: function addInlined(tagName, lang2) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang2] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism3.languages[lang2]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang2] = {
        pattern: /[\s\S]+/,
        inside: Prism3.languages[lang2]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return tagName;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism3.languages.insertBefore("markup", "cdata", def);
    }
  });
  Object.defineProperty(Prism3.languages.markup.tag, "addAttribute", {
    /**
    	* Adds an pattern to highlight languages embedded in HTML attributes.
    	*
    	* An example of an inlined language is CSS with `style` attributes.
    	*
    	* @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
    	* case insensitive.
    	* @param {string} lang The language key.
    	* @example
    	* addAttribute('style', 'css');
    	*/
    value: function(attrName, lang2) {
      Prism3.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: true,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              "value": {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang2, "language-" + lang2],
                inside: Prism3.languages[lang2]
              },
              "punctuation": [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  });
  Prism3.languages.html = Prism3.languages.markup;
  Prism3.languages.mathml = Prism3.languages.markup;
  Prism3.languages.svg = Prism3.languages.markup;
  Prism3.languages.xml = Prism3.languages.extend("markup", {});
  Prism3.languages.ssml = Prism3.languages.xml;
  Prism3.languages.atom = Prism3.languages.xml;
  Prism3.languages.rss = Prism3.languages.xml;
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-css.js
function loader2(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["css"]) {
    return;
  }
  loader(Prism3);
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism3.languages.css = {
    "comment": /\/\*[\s\S]*?\*\//,
    "atrule": {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        "rule": /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        "keyword": {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
        // See rest below
      }
    },
    "url": {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        "function": /^url/i,
        "punctuation": /^\(|\)$/,
        "string": {
          pattern: RegExp("^" + string.source + "$"),
          alias: "url"
        }
      }
    },
    "selector": {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    "string": {
      pattern: string,
      greedy: true
    },
    "property": {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    "important": /!important\b/i,
    "function": {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    "punctuation": /[(){};:,]/
  };
  Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
  var markup = Prism3.languages.markup;
  if (markup) {
    markup.tag.addInlined("style", "css");
    markup.tag.addAttribute("style", "css");
  }
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-clike.js
function loader3(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["clike"]) {
    return;
  }
  Prism3.languages.clike = {
    "comment": [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    "string": {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        "punctuation": /[.\\]/
      }
    },
    "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    "boolean": /\b(?:false|true)\b/,
    "function": /\b\w+(?=\()/,
    "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    "punctuation": /[{}[\];(),.:]/
  };
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-javascript.js
function loader4(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["javascript"]) {
    return;
  }
  loader3(Prism3);
  loader(Prism3);
  Prism3.languages.javascript = Prism3.languages.extend("clike", {
    "class-name": [
      Prism3.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    "keyword": [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    "number": {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: true
    },
    "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism3.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism3.languages.insertBefore("javascript", "keyword", {
    "regex": {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism3.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    "parameter": [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism3.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism3.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism3.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism3.languages.javascript
      }
    ],
    "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism3.languages.insertBefore("javascript", "string", {
    "hashbang": {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "interpolation": {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism3.languages.javascript
          }
        },
        "string": /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  Prism3.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (Prism3.languages.markup) {
    Prism3.languages.markup.tag.addInlined("script", "javascript");
    Prism3.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    );
  }
  Prism3.languages.js = Prism3.languages.javascript;
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/plugins/file-highlight/prism-file-highlight.js
function Plugin(Prism3) {
  if (typeof Prism3 === "undefined" || typeof document === "undefined") {
    return;
  }
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  var LOADING_MESSAGE = "Loading\u2026";
  var FAILURE_MESSAGE = function(status, message) {
    return "\u2716 Error " + status + " while fetching file: " + message;
  };
  var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
  var EXTENSIONS = {
    "js": "javascript",
    "py": "python",
    "rb": "ruby",
    "ps1": "powershell",
    "psm1": "powershell",
    "sh": "bash",
    "bat": "batch",
    "h": "c",
    "tex": "latex"
  };
  var STATUS_ATTR = "data-src-status";
  var STATUS_LOADING = "loading";
  var STATUS_LOADED = "loaded";
  var STATUS_FAILED = "failed";
  var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
  function loadFile(src, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", src, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status < 400 && xhr.responseText) {
          success(xhr.responseText);
        } else {
          if (xhr.status >= 400) {
            error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
          } else {
            error(FAILURE_EMPTY_MESSAGE);
          }
        }
      }
    };
    xhr.send(null);
  }
  function parseRange(range) {
    var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
    if (m) {
      var start = Number(m[1]);
      var comma = m[2];
      var end = m[3];
      if (!comma) {
        return [start, start];
      }
      if (!end) {
        return [start, void 0];
      }
      return [start, Number(end)];
    }
    return void 0;
  }
  Prism3.hooks.add("before-highlightall", function(env) {
    env.selector += ", " + SELECTOR;
  });
  Prism3.hooks.add("before-sanity-check", function(env) {
    var pre = (
      /** @type {HTMLPreElement} */
      env.element
    );
    if (pre.matches(SELECTOR)) {
      env.code = "";
      pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
      var code = pre.appendChild(document.createElement("CODE"));
      code.textContent = LOADING_MESSAGE;
      var src = pre.getAttribute("data-src");
      var language = env.language;
      if (language === "none") {
        var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
        language = EXTENSIONS[extension] || extension;
      }
      Prism3.util.setLanguage(code, language);
      Prism3.util.setLanguage(pre, language);
      var autoloader = Prism3.plugins.autoloader;
      if (autoloader) {
        autoloader.loadLanguages(language);
      }
      loadFile(
        src,
        function(text) {
          pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
          var range = parseRange(pre.getAttribute("data-range"));
          if (range) {
            var lines = text.split(/\r\n?|\n/g);
            var start = range[0];
            var end = range[1] == null ? lines.length : range[1];
            if (start < 0) {
              start += lines.length;
            }
            start = Math.max(0, Math.min(start - 1, lines.length));
            if (end < 0) {
              end += lines.length;
            }
            end = Math.max(0, Math.min(end, lines.length));
            text = lines.slice(start, end).join("\n");
            if (!pre.hasAttribute("data-start")) {
              pre.setAttribute("data-start", String(start + 1));
            }
          }
          code.textContent = text;
          Prism3.highlightElement(code);
        },
        function(error) {
          pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
          code.textContent = error;
        }
      );
    }
  });
  Prism3.plugins.fileHighlight = {
    /**
     * Executes the File Highlight plugin for all matching `pre` elements under the given container.
     *
     * Note: Elements which are already loaded or currently loading will not be touched by this method.
     *
     * @param {ParentNode} [container=document]
     */
    highlight: function highlight(container) {
      var elements = (container || document).querySelectorAll(SELECTOR);
      for (var i3 = 0, element; element = elements[i3++]; ) {
        Prism3.highlightElement(element);
      }
    }
  };
  var logged = false;
  Prism3.fileHighlight = function() {
    if (!logged) {
      console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
      logged = true;
    }
    Prism3.plugins.fileHighlight.highlight.apply(this, arguments);
  };
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/prism.js
var Prism2 = class extends Prism {
  /**
   * @param {ConstructorParameters<typeof OGPrism>} args
   */
  constructor(...args) {
    super(...args);
    loader(this);
    loader2(this);
    loader3(this);
    loader4(this);
    Plugin(this);
  }
};

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-markup-templating.js
function loader5(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["markup-templating"]) {
    return;
  }
  loader(Prism3);
  function getPlaceholder(language, index) {
    return "___" + language.toUpperCase() + index + "___";
  }
  Object.defineProperties(Prism3.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      /**
      * Tokenize all inline templating expressions matching `placeholderPattern`.
      *
      * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
      * `true` will be replaced.
      *
      * @param {object} env The environment of the `before-tokenize` hook.
      * @param {string} language The language id.
      * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
      * @param {(match: string) => boolean} [replaceFilter]
      */
      value: function(env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }
        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function(match) {
          if (typeof replaceFilter === "function" && !replaceFilter(match)) {
            return match;
          }
          var i3 = tokenStack.length;
          var placeholder;
          while (env.code.indexOf(placeholder = getPlaceholder(language, i3)) !== -1) {
            ++i3;
          }
          tokenStack[i3] = match;
          return placeholder;
        });
        env.grammar = Prism3.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
      * Replace placeholders with proper tokens after tokenizing.
      *
      * @param {object} env The environment of the `after-tokenize` hook.
      * @param {string} language The language id.
      */
      value: function(env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        }
        env.grammar = Prism3.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);
        function walkTokens(tokens) {
          for (var i3 = 0; i3 < tokens.length; i3++) {
            if (j >= keys.length) {
              break;
            }
            var token = tokens[i3];
            if (typeof token === "string" || token.content && typeof token.content === "string") {
              var k = keys[j];
              var t2 = env.tokenStack[k];
              var s = typeof token === "string" ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);
              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism3.Token(language, Prism3.tokenize(t2, env.grammar), "language-" + language, t2);
                var after = s.substring(index + placeholder.length);
                var replacement = [];
                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }
                replacement.push(middle);
                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }
                if (typeof token === "string") {
                  tokens.splice.apply(tokens, [i3, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content) {
              walkTokens(token.content);
            }
          }
          return tokens;
        }
        walkTokens(env.tokens);
      }
    }
  });
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-css-extras.js
function loader6(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["css-extras"]) {
    return;
  }
  Prism3.languages["css-extras"] = {};
  loader2(Prism3);
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism3.languages.css.selector = {
    pattern: Prism3.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      "class": /\.[-\w]+/,
      "id": /#[-\w]+/,
      "attribute": {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + string.source + ")*\\]"),
        greedy: true,
        inside: {
          "punctuation": /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: "keyword"
          },
          "namespace": {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              "punctuation": /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          "attr-value": [
            string,
            {
              pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
              lookbehind: true
            }
          ],
          "operator": /[|~*^$]?=/
        }
      },
      "n-th": [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: true,
          inside: {
            "number": /[\dn]+/,
            "operator": /[+-]/
          }
        },
        {
          pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
          lookbehind: true
        }
      ],
      "combinator": />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      "punctuation": /[(),]/
    }
  };
  Prism3.languages.css["atrule"].inside["selector-function-argument"].inside = selectorInside;
  Prism3.languages.insertBefore("css", "property", {
    "variable": {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism3.languages.insertBefore("css", "function", {
    "operator": {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    "hexcode": {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    "color": [
      {
        pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
        lookbehind: true
      },
      {
        pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          "unit": unit,
          "number": number,
          "function": /[\w-]+(?=\()/,
          "punctuation": /[(),]/
        }
      }
    ],
    // it's important that there is no boundary assertion after the hex digits
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "number": number
  });
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-js-extras.js
function loader7(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["js-extras"]) {
    return;
  }
  Prism3.languages["js-extras"] = {};
  loader4(Prism3);
  Prism3.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + Prism3.languages.javascript["function-variable"].pattern.source),
      lookbehind: true,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  });
  Prism3.languages.insertBefore("javascript", "function", {
    "method": {
      pattern: RegExp("(\\.\\s*)" + Prism3.languages.javascript["function"].source),
      lookbehind: true,
      alias: ["function", "property-access"]
    }
  });
  Prism3.languages.insertBefore("javascript", "constant", {
    "known-class-name": [
      {
        // standard built-ins
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
        pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
        alias: "class-name"
      },
      {
        // errors
        pattern: /\b(?:[A-Z]\w*)Error\b/,
        alias: "class-name"
      }
    ]
  });
  function withId(source, flags) {
    return RegExp(
      source.replace(/<ID>/g, function() {
        return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
      }),
      flags
    );
  }
  Prism3.languages.insertBefore("javascript", "keyword", {
    "imports": {
      // https://tc39.es/ecma262/#sec-imports
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism3.languages.javascript
    },
    "exports": {
      // https://tc39.es/ecma262/#sec-exports
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism3.languages.javascript
    }
  });
  Prism3.languages.javascript["keyword"].unshift(
    {
      pattern: /\b(?:as|default|export|from|import)\b/,
      alias: "module"
    },
    {
      pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
      alias: "control-flow"
    },
    {
      pattern: /\bnull\b/,
      alias: ["null", "nil"]
    },
    {
      pattern: /\bundefined\b/,
      alias: "nil"
    }
  );
  Prism3.languages.insertBefore("javascript", "operator", {
    "spread": {
      pattern: /\.{3}/,
      alias: "operator"
    },
    "arrow": {
      pattern: /=>/,
      alias: "operator"
    }
  });
  Prism3.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    "dom": {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: "variable"
    },
    "console": {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });
  var maybeClassNameTokens = ["function", "function-variable", "method", "method-variable", "property-access"];
  for (var i3 = 0; i3 < maybeClassNameTokens.length; i3++) {
    var token = maybeClassNameTokens[i3];
    var value = Prism3.languages.javascript[token];
    if (Prism3.util.type(value) === "RegExp") {
      value = Prism3.languages.javascript[token] = {
        pattern: value
      };
    }
    var inside = value.inside || {};
    value.inside = inside;
    inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-js-templates.js
function loader8(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["js-templates"]) {
    return;
  }
  Prism3.languages["js-templates"] = {};
  loader4(Prism3);
  var templateString = Prism3.languages.javascript["template-string"];
  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside["interpolation"];
  var interpolationPunctuationObject = interpolationObject.inside["interpolation-punctuation"];
  var interpolationPattern = interpolationObject.pattern.source;
  function createTemplate(language, tag) {
    if (!Prism3.languages[language]) {
      return void 0;
    }
    return {
      pattern: RegExp("((?:" + tag + ")\\s*)" + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "embedded-code": {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }
  Prism3.languages.javascript["template-string"] = [
    // styled-jsx:
    //   css`a { color: #25F; }`
    // styled-components:
    //   styled.h1`color: red;`
    createTemplate("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),
    // html`<p></p>`
    // div.innerHTML = `<p></p>`
    createTemplate("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
    // svg`<path fill="#fff" d="M55.37 ..."/>`
    createTemplate("svg", /\bsvg/.source),
    // md`# h1`, markdown`## h2`
    createTemplate("markdown", /\b(?:markdown|md)/.source),
    // gql`...`, graphql`...`, graphql.experimental`...`
    createTemplate("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
    // sql`...`
    createTemplate("sql", /\bsql/.source),
    // vanilla template string
    templateString
  ].filter(Boolean);
  function getPlaceholder(counter, language) {
    return "___" + language.toUpperCase() + "_" + counter + "___";
  }
  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code,
      grammar,
      language
    };
    Prism3.hooks.run("before-tokenize", env);
    env.tokens = Prism3.tokenize(env.code, env.grammar);
    Prism3.hooks.run("after-tokenize", env);
    return env.tokens;
  }
  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar["interpolation-punctuation"] = interpolationPunctuationObject;
    var tokens = Prism3.tokenize(expression, tempGrammar);
    if (tokens.length === 3) {
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism3.languages.javascript, "javascript"));
      tokens.splice.apply(tokens, args);
    }
    return new Prism3.Token("interpolation", tokens, interpolationObject.alias, expression);
  }
  function tokenizeEmbedded(code, grammar, language) {
    var _tokens = Prism3.tokenize(code, {
      "interpolation": {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    });
    var placeholderCounter = 0;
    var placeholderMap = {};
    var embeddedCode = _tokens.map(function(token) {
      if (typeof token === "string") {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;
        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {
        }
        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join("");
    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language);
    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    function walkTokens(tokens) {
      for (var i3 = 0; i3 < tokens.length; i3++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }
        var token = tokens[i3];
        if (typeof token === "string" || typeof token.content === "string") {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === "string" ? token : (
            /** @type {string} */
            token.content
          );
          var index = s.indexOf(placeholder);
          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];
            if (before) {
              replacement.push(before);
            }
            replacement.push(middle);
            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }
            if (typeof token === "string") {
              tokens.splice.apply(tokens, [i3, 1].concat(replacement));
              i3 += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;
          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }
    walkTokens(embeddedTokens);
    return new Prism3.Token(language, embeddedTokens, "language-" + language, code);
  }
  var supportedLanguages = {
    "javascript": true,
    "js": true,
    "typescript": true,
    "ts": true,
    "jsx": true,
    "tsx": true
  };
  Prism3.hooks.add("after-tokenize", function(env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    function findTemplateStrings(tokens) {
      for (var i3 = 0, l = tokens.length; i3 < l; i3++) {
        var token = tokens[i3];
        if (typeof token === "string") {
          continue;
        }
        var content = token.content;
        if (!Array.isArray(content)) {
          if (typeof content !== "string") {
            findTemplateStrings([content]);
          }
          continue;
        }
        if (token.type === "template-string") {
          var embedded = content[1];
          if (content.length === 3 && typeof embedded !== "string" && embedded.type === "embedded-code") {
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism3.languages[language];
            if (!grammar) {
              continue;
            }
            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }
    findTemplateStrings(env.tokens);
  });
  function stringContent(value) {
    if (typeof value === "string") {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join("");
    } else {
      return stringContent(value.content);
    }
  }
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-jsx.js
function loader9(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["jsx"]) {
    return;
  }
  if (!Prism3.languages.markup) {
    loader(Prism3);
  }
  if (!Prism3.languages.javascript) {
    loader4(Prism3);
  }
  var javascript = Prism3.util.clone(Prism3.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function re(source, flags) {
    source = source.replace(/<S>/g, function() {
      return space;
    }).replace(/<BRACES>/g, function() {
      return braces;
    }).replace(/<SPREAD>/g, function() {
      return spread;
    });
    return RegExp(source, flags);
  }
  spread = re(spread).source;
  Prism3.languages.jsx = Prism3.languages.extend("markup", javascript);
  Prism3.languages.jsx.tag.pattern = re(
    /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
  );
  Prism3.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
  Prism3.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism3.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism3.languages.jsx.tag.inside["comment"] = javascript["comment"];
  Prism3.languages.insertBefore("inside", "attr-name", {
    "spread": {
      pattern: re(/<SPREAD>/.source),
      inside: Prism3.languages.jsx
    }
  }, Prism3.languages.jsx.tag);
  Prism3.languages.insertBefore("inside", "special-attr", {
    "script": {
      // Allow for two levels of nesting
      pattern: re(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: Prism3.languages.jsx
      }
    }
  }, Prism3.languages.jsx.tag);
  var stringifyToken = function(token) {
    if (!token) {
      return "";
    }
    if (typeof token === "string") {
      return token;
    }
    if (typeof token.content === "string") {
      return token.content;
    }
    return token.content.map(stringifyToken).join("");
  };
  var walkTokens = function(tokens) {
    var openedTags = [];
    for (var i3 = 0; i3 < tokens.length; i3++) {
      var token = tokens[i3];
      var notTagNorBrace = false;
      if (typeof token !== "string") {
        if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
          if (token.content[0].content[0].content === "</") {
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === "/>") {
            } else {
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }
      if (notTagNorBrace || typeof token === "string") {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          var plainText = stringifyToken(token);
          if (i3 < tokens.length - 1 && (typeof tokens[i3 + 1] === "string" || tokens[i3 + 1].type === "plain-text")) {
            plainText += stringifyToken(tokens[i3 + 1]);
            tokens.splice(i3 + 1, 1);
          }
          if (i3 > 0 && (typeof tokens[i3 - 1] === "string" || tokens[i3 - 1].type === "plain-text")) {
            plainText = stringifyToken(tokens[i3 - 1]) + plainText;
            tokens.splice(i3 - 1, 1);
            i3--;
          }
          tokens[i3] = new Prism3.Token("plain-text", plainText, null, plainText);
        }
      }
      if (token.content && typeof token.content !== "string") {
        walkTokens(token.content);
      }
    }
  };
  Prism3.hooks.add("after-tokenize", function(env) {
    if (env.language !== "jsx" && env.language !== "tsx") {
      return;
    }
    walkTokens(env.tokens);
  });
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-typescript.js
function loader10(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["typescript"]) {
    return;
  }
  if (!Prism3.languages.javascript) {
    loader4(Prism3);
  }
  Prism3.languages.typescript = Prism3.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null
      // see below
    },
    "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });
  Prism3.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  );
  delete Prism3.languages.typescript["parameter"];
  delete Prism3.languages.typescript["literal-property"];
  var typeInside = Prism3.languages.extend("typescript", {});
  delete typeInside["class-name"];
  Prism3.languages.typescript["class-name"].inside = typeInside;
  Prism3.languages.insertBefore("typescript", "function", {
    "decorator": {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        "at": {
          pattern: /^@/,
          alias: "operator"
        },
        "function": /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        "generic": {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: typeInside
        }
      }
    }
  });
  Prism3.languages.ts = Prism3.languages.typescript;
}

// ../node_modules/.pnpm/prism-esm@1.29.0-fix.4/node_modules/prism-esm/components/prism-tsx.js
function loader11(Prism3, options) {
  if (typeof Prism3 === "undefined") return;
  if (options?.force !== true && Prism3.languages["tsx"]) {
    return;
  }
  if (!Prism3.languages.jsx) {
    loader9(Prism3);
  }
  if (!Prism3.languages.typescript) {
    loader10(Prism3);
  }
  var typescript = Prism3.util.clone(Prism3.languages.typescript);
  Prism3.languages.tsx = Prism3.languages.extend("jsx", typescript);
  delete Prism3.languages.tsx["parameter"];
  delete Prism3.languages.tsx["literal-property"];
  var tag = Prism3.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
  tag.lookbehind = true;
}

// ../internal/prism-highlight.js
function createPrismInstance() {
  const prism = new Prism2();
  loader(prism);
  loader5(prism);
  loader2(prism);
  loader6(prism);
  loader4(prism);
  loader7(prism);
  loader8(prism);
  loader9(prism);
  loader10(prism);
  loader11(prism);
  return prism;
}
var PrismSingleton = class {
  static get instance() {
    if (!this.__singleton__) {
      this.__singleton__ = createPrismInstance();
    }
    return this.__singleton__;
  }
};
function PrismHighlight(text, grammar, language, highlighter, hooks = {}) {
  const env = PrismEnv(text, grammar, language, highlighter, hooks);
  return Token.stringify(
    highlighter.util.encode(
      /** @type {Array<Token>} */
      env.tokens
    ),
    env.language,
    highlighter
  );
}
function PrismEnv(text, grammar, language, highlighter, hooks = {}) {
  if (!highlighter) {
    highlighter = PrismSingleton.instance;
  }
  if (!grammar) {
    grammar = highlighter.languages["markup"];
  }
  var env = {
    code: text,
    grammar,
    language,
    tokens: []
  };
  highlighter.hooks.run("before-tokenize", env);
  hooks.beforeTokenize?.forEach((hook) => {
    hook(env);
  });
  if (!env.grammar) {
    throw new Error('The language "' + env.language + '" has no grammar.');
  }
  env.tokens = /** @type {Array<Token>} */
  highlighter.tokenize(env.code, env.grammar);
  highlighter.hooks.run("after-tokenize", env);
  hooks.afterTokenize?.forEach((hook) => {
    hook(env);
  });
  return env;
}

// ../internal/debounce.js
function debounce(callback, wait = 0) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

// ../internal/elements-to-strings.js
function elementsToString(...elements) {
  const strings = [];
  const scratch = document.createElement("div");
  for (const el of elements) {
    if (el instanceof HTMLTemplateElement) {
      const node = el.content.cloneNode(true);
      scratch.append(node);
      strings.push(scratch.innerHTML);
      scratch.innerHTML = "";
      continue;
    }
    if (el instanceof HTMLScriptElement) {
      strings.push(el.textContent);
      continue;
    }
    if (el instanceof HTMLTextAreaElement) {
      strings.push(el.value);
      continue;
    }
    strings.push(el.innerHTML);
  }
  return strings.join("\n");
}

// ../internal/dedent.js
function dedent(templateStrings, ...values) {
  let matches = [];
  let strings = typeof templateStrings === "string" ? [templateStrings] : templateStrings.slice();
  strings[strings.length - 1] = strings[strings.length - 1].replace(
    /\r?\n([\t ]*)$/,
    ""
  );
  for (let i3 = 0; i3 < strings.length; i3++) {
    let match;
    if (match = strings[i3].match(/\n[\t ]+/g)) {
      matches.push(...match);
    }
  }
  if (matches.length) {
    let size = Math.min(...matches.map((value) => value.length - 1));
    let pattern = new RegExp(`
[	 ]{${size}}`, "g");
    for (let i3 = 0; i3 < strings.length; i3++) {
      strings[i3] = strings[i3].replace(pattern, "\n");
    }
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  let string = strings[0];
  for (let i3 = 0; i3 < values.length; i3++) {
    string += values[i3] + strings[i3 + 1];
  }
  return string;
}

// ../internal/line-number-plugin.js
var newLineRegex = /\r\n|\r|\n/;
function LineNumberPlugin(options = {}) {
  const disableLineNumbers = options.disableLineNumbers ?? false;
  const lineNumberStart = options.lineNumberStart ?? 1;
  let callback = options.callback;
  if (typeof callback !== "function") {
    callback = (ary, index, tokens) => {
      if (ary.length <= 0) {
        return;
      }
      if (!options.disableLineNumbers) {
        tokens.push(
          new Token("light-gutter-cell", (index + lineNumberStart).toString())
        );
      }
      tokens.push(new Token("light-line", ary));
    };
  }
  return function lineNumberPlugin(env) {
    const tokens = [];
    splitLinesRec(env.tokens).forEach((ary, index) => {
      callback(ary, index, tokens);
    });
    env.tokens = tokens;
  };
}
function wrapContent(content) {
  return Array.isArray(content) ? content : [content];
}
function unwrapContent(content) {
  if (content.length === 0) {
    return "";
  } else if (content.length === 1 && typeof content[0] === "string") {
    return content[0];
  }
  return content;
}
function splitLinesRec(tokens) {
  let currentLine = [];
  const lines = [currentLine];
  for (let i3 = 0; i3 < tokens.length; i3++) {
    const token = tokens[i3];
    if (typeof token === "string") {
      const split = token.split(newLineRegex);
      for (let j = 0; j < split.length; j++) {
        if (j > 0) {
          lines.push(currentLine = []);
        }
        const token1 = split[j];
        if (token1) {
          currentLine.push(token1);
        }
      }
    } else {
      const split = splitLinesRec(wrapContent(token.content));
      if (split.length > 1) {
        for (let j = 0; j < split.length; j++) {
          if (j > 0) {
            lines.push(currentLine = []);
          }
          const line = split[j];
          if (line.length) {
            const token1 = new Token(
              token.type,
              unwrapContent(line),
              token.alias
            );
            token1.length = line.reduce((l, t2) => l + t2.length, 0);
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

// ../internal/number-range.js
var NumberRange = class {
  constructor() {
    const reset = () => {
      this.errors = [];
      this.ranges = [];
      this.numbers = /* @__PURE__ */ new Set();
    };
    this.reset = reset;
    this.reset();
  }
  /**
   * Checks if the parsed range includes the value.
   * @param {number} num
   */
  includes(num) {
    if (this.numbers.has(num)) {
      return true;
    }
    if (this.ranges.length == 0) {
      return false;
    }
    for (const range of this.ranges) {
      const [min, max] = range;
      if (num >= min && num <= max) {
        return true;
      }
    }
    return false;
  }
  /**
   * Given a string like this: "{1-3, 4, 5}" create a Range. Also accepts an array of numbers or a Set of numbers.
   * @param {Set<number> | Array<number> | string} str
   */
  parse(str) {
    this.reset();
    if (Array.isArray(str)) {
      str.forEach((num) => this.numbers.add(num));
      return this;
    }
    if (str instanceof Set) {
      this.numbers = str;
      return this;
    }
    if (!str.includes("{")) {
      this.errors.push(new Error("Unable to parse range. No `{` found."));
      return this;
    }
    if (!str.includes("}")) {
      this.errors.push(new Error("Unable to parse range. No `}` found."));
      return this;
    }
    str = str.split(/{/)[1];
    if (!str) {
      this.errors.push(new Error("Invalid string provided for range."));
      return this;
    }
    str = str.split(/}/)[0];
    str.split(/,\s*/).forEach((val) => {
      const [minStr, maxStr] = val.split(/-/);
      const min = Number(minStr);
      const max = Number(maxStr);
      if (min == null || isNaN(min)) return;
      if (max == null || isNaN(max)) {
        this.numbers.add(min);
        return;
      }
      this.ranges.push([min, max]);
    });
    return this;
  }
};

// ../internal/line-highlight-plugin.js
function LineHighlightPlugin(options) {
  const { highlightLinesRange, insertedLinesRange, deletedLinesRange } = options;
  return function(env) {
    let index = 1;
    for (const token of env.tokens) {
      if (typeof token === "string") continue;
      if (highlightLinesRange.includes(index)) {
        token.type += " line-highlight";
      }
      if (insertedLinesRange.includes(index)) {
        token.type += " inserted";
      }
      if (deletedLinesRange.includes(index)) {
        token.type += " deleted";
      }
      if (token.type.includes("light-line")) {
        index++;
      }
    }
  };
}
function LineHighlightWrapPlugin() {
  const partTypes = ["inserted", "line-highlight", "deleted"];
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
  return function(env) {
    addParts(env, "light-line", "line");
    addParts(env, "light-gutter-cell", "gutter-cell");
    addParts(env, "light-marker", "marker");
  };
}

// ../exports/components/light-code/light-code.js
var LightCode = class extends BaseElement {
  constructor() {
    super();
    this.language = "html";
    this.disableHighlight = false;
    this.code = "";
    this.__mutationObserverConfig = {
      childList: true,
      subtree: true,
      characterData: true
    };
    this.codeDebounce = debounce(() => this.handleMutation("code"), 20);
    this.wrap = "soft";
    this.preserveWhitespace = false;
    this.highlightLines = "";
    this.insertedLines = "";
    this.deletedLines = "";
    this.disableLineNumbers = false;
    this.lineNumberStart = 1;
    this.highlighter = createPrismInstance();
    this.__resizeObserver = new ResizeObserver(
      () => this.__setGutterMeasurements()
    );
    this.newLineRegex = /\r\n|\r|\n/;
    this.__highlightedCode__ = "";
  }
  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    this.__resizeObserver.observe(this);
  }
  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__resizeObserver.unobserve(this);
  }
  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  willUpdate(changedProperties) {
    if (changedProperties.has("highlighter") || changedProperties.has("language") || changedProperties.has("code")) {
      this.__highlightedCode__ = this.highlight(this.code);
    }
    super.willUpdate(changedProperties);
  }
  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  updated(changedProperties) {
    if ((changedProperties.has("insertedLines") || changedProperties.has("deletedLines") || changedProperties.has("highlightLines")) && !changedProperties.has("code")) {
      const lines = this.shadowRoot?.querySelectorAll(
        ".light-gutter-cell, .light-line"
      );
      if (lines?.length) {
        const highlightLinesRange = new NumberRange().parse(
          this.highlightLines
        );
        const insertedLinesRange = new NumberRange().parse(this.insertedLines);
        const deletedLinesRange = new NumberRange().parse(this.deletedLines);
        lines.forEach((el, index) => {
          const divisor = index % 2 === 0 ? index : index - 1;
          const lineNumber = divisor / 2 + 1;
          el.classList.toggle(
            "line-highlight",
            highlightLinesRange.includes(lineNumber)
          );
          el.part.toggle(
            "line-highlight",
            highlightLinesRange.includes(lineNumber)
          );
          el.classList.toggle(
            "inserted",
            insertedLinesRange.includes(lineNumber)
          );
          el.part.toggle("inserted", insertedLinesRange.includes(lineNumber));
          el.classList.toggle(
            "deleted",
            deletedLinesRange.includes(lineNumber)
          );
          el.part.toggle("deleted", deletedLinesRange.includes(lineNumber));
        });
      }
    }
    super.updated(changedProperties);
  }
  /**
   * @internal
   * @param {"preview-code" | "code"} variable
   */
  handleMutation(variable) {
    if (variable === "code") {
      this.handleTemplate({ target: this.findSlot("code") });
      return;
    }
  }
  /**
   * @internal
   * @param {string} name
   * @returns {HTMLSlotElement | null | undefined}
   */
  findSlot(name) {
    return this.shadowRoot?.querySelector(`slot[name='${name}']`);
  }
  /**
   * @internal
   * @param {Event | { target?: undefined | null | HTMLSlotElement }} e
   */
  handleTemplate(e3) {
    const slot = e3.target;
    if (slot == null) return;
    const name = slot.getAttribute("name");
    if (["preview-code", "code"].includes(name || "") === false) return;
    let elements = slot.assignedElements({ flatten: true });
    let code = this.unescapeTags(elementsToString(...elements));
    if (!this.preserveWhitespace) {
      code = dedent(code.trim());
    }
    if (name === "code") {
      this.code = code;
      return;
    }
  }
  /**
   * Only used to unescape things like `&lt;/script>` from slotted content.
   * @internal
   * @param {string} text
   */
  unescapeTags(text) {
    return text.replaceAll(/&lt;\/([\w\d\.-_]+)>/g, "</$1>");
  }
  /**
   * @public
   * Override this function to use your own highlight function
   */
  highlight(code = this.code) {
    code = code.split(this.newLineRegex).map((str) => {
      if (str === "") {
        return " ";
      }
      return str;
    }).join("\n");
    if (!this.highlighter) {
      this.highlighter = createPrismInstance();
    }
    const afterTokenizePlugins = [
      LineNumberPlugin({
        lineNumberStart: this.lineNumberStart,
        disableLineNumbers: this.disableLineNumbers
      }),
      LineHighlightPlugin({
        insertedLinesRange: new NumberRange().parse(this.insertedLines),
        deletedLinesRange: new NumberRange().parse(this.deletedLines),
        highlightLinesRange: new NumberRange().parse(this.highlightLines)
      })
    ];
    this.highlighter.hooks.add(
      "wrap",
      /** @type {any} */
      LineHighlightWrapPlugin()
    );
    code = PrismHighlight(
      code,
      this.highlighter.languages[this.language],
      this.language,
      this.highlighter,
      {
        afterTokenize: afterTokenizePlugins
      }
    );
    return code;
  }
  /**
   * @internal
   */
  __setGutterMeasurements() {
    const gutterWidth = (
      /** @type {null | undefined | HTMLElement} */
      this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth
    );
    if (gutterWidth) {
      this.style.setProperty("--gutter-cell-width", `${gutterWidth}px`);
    }
    const codeEl = this.shadowRoot?.querySelector("[part~='code']");
    if (codeEl) {
      const { offsetHeight, clientHeight } = (
        /** @type {HTMLElement} */
        codeEl
      );
      const scrollbarHeight = offsetHeight - clientHeight;
      this.style.setProperty("--scrollbar-height", `${scrollbarHeight}px`);
    }
  }
  /**
   * @override
   */
  render() {
    const language = this.language;
    const finalHTML = x`
      <div part="base">
        ${n(
      !this.disableHighlight,
      () => x` <pre
              id="pre-${language}"
              data-code-lang=${language}
              aria-hidden="true"
              part="pre pre-${language}"
              class="diff-highlight language-${language}"
            ><code
                tabindex="0"
                aria-labelledby="source-code-label"
                role="region"
                part="code code-${language}"
                class="language-${language}"
                .innerHTML=${this.__highlightedCode__}
              ></code></pre>`,
      () => x`${o(this.code)}`
    )}
        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${n(
      this.disableLineNumbers,
      () => x``,
      () => x`<div part="gutter"></div>`
    )}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;
    setTimeout(async () => {
      await this.updateComplete;
      setTimeout(() => this.__setGutterMeasurements());
    });
    return finalHTML;
  }
};
/**
 * @override
 */
__publicField(LightCode, "baseName", "light-code");
/**
 * @override
 */
__publicField(LightCode, "styles", [
  baseStyles,
  codeStyles,
  theme,
  i`
      :host {
        display: grid;
      }
      [part~="base"] {
        height: 100%;
        position: relative;
        z-index: 0;
        background: hsl(230, 1%, 98%);
        color: hsl(230, 8%, 24%);
        display: grid;
      }

      [part~="pre"] {
        height: 100%;
        display: grid;
        place-items: start;
      }

      [part~="code"] {
        width: 100%;
        height: 100%;
        place-content: start;
        overflow: auto;
      }

      [part~="gutter"] {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--gutter-cell-width, 40px));
        border-inline-end: var(--syntax-gutter-border);
        height: calc(100% - var(--scrollbar-height, 0px));
        max-height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 2;
      }
    `
]);
/**
 * @override
 */
__publicField(LightCode, "properties", {
  disableHighlight: { type: Boolean, attribute: "disable-highlight" },
  preserveWhitespace: { type: Boolean, attribute: "preserve-whitespace" },
  highlightLines: { attribute: "highlight-lines" },
  insertedLines: { attribute: "inserted-lines" },
  deletedLines: { attribute: "deleted-lines" },
  disableLineNumbers: {
    type: Boolean,
    reflect: true,
    attribute: "disable-line-numbers"
  },
  lineNumberStart: { type: Number, attribute: "line-number-start" },
  wrap: { reflect: true, attribute: "wrap" },
  language: {},
  code: {},
  highlighter: { attribute: false, state: true },
  __highlightedCode__: { attribute: false, state: true }
});

export {
  n,
  t,
  e,
  i2 as i,
  theme,
  createPrismInstance,
  debounce,
  elementsToString,
  dedent,
  LightCode
};
/*! Bundled license information:

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

prism-esm/prism-core.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-WZLULRUS.js.map
