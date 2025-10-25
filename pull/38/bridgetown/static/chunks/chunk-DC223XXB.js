import{a as k,e as w,f as p,g as y,h as L,i as _,j as T,k as S,l as N,m as z,n as E,o as H,p as R,q as $}from"/light-pen/pull/38/bridgetown/static/chunks/chunk-ETT43YUL.js";import{a as c,b as u,f as x,g as M}from"/light-pen/pull/38/bridgetown/static/chunks/chunk-LFPVEBVM.js";import{d as g}from"/light-pen/pull/38/bridgetown/static/chunks/chunk-VT6VFEU4.js";var j=c`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    white-space: nowrap;
  }

  [hidden] {
    display: none !important;
  }

  :host {
    display: block;
  }
`,Y=c`
  .light-button {
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid gray;
    background-color: inherit;
    padding: 0.4em 0.6em;
    color: inherit;
    border-radius: 4px;
  }

  .light-button:focus-visible {
    outline: 2px solid hsl(203, 77%, 43%);
  }

  @supports not selector(:focus-visible) {
    .light-button:focus-within {
      outline: 2px solid hsl(203, 77%, 43%);
    }
  }

  .light-button:is(:active, :hover, .is-active) {
    cursor: pointer;
    color: hsla(203, 77%, 43%);
    background-color: hsla(203, 77%, 93%);
  }
`;var A=c`
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
`;var P=c`
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
    grid-template-columns: max-content minmax(max-content, 1fr);
  }

  :host([wrap="soft"]) [part~="code"] {
    grid-template-columns: max-content minmax(auto, 1fr);
  }

  :host([wrap="soft"]) [part~="pre"],
  :host([wrap="soft"]) [part~="code"] {
    /* this creates line-wrapping. */
    word-break: break-word;
    white-space: pre-wrap;
  }

  :host([disable-line-numbers]) [part~="code"] {
    grid-template-columns: minmax(0, 1fr);
  }

  :host([wrap="soft"][disable-line-numbers]) [part~="code"] {
    grid-template-columns: minmax(0, auto);
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

  [part~="line"]:not(.deleted, .inserted)::before {
    user-select: none;
    -webkit-user-select: none;
  }

  [part~="line"].deleted::before {
    content: "-";
    padding-inline-start: 0px;
  }

  [part~="line"].inserted::before {
    content: "+";
    padding-inline-start: 0px;
  }

  [part~="gutter-cell"] {
    display: inline-block;
    padding-inline-end: 0.5em;
    padding-inline-start: 0.75em;
    user-select: none;
    -webkit-user-select: none;
    color: rgba(0, 0, 0, 0.35);
    background-color: var(--syntax-bg);
    font-variant-numeric: tabular-nums;
    text-align: end;
    position: sticky;
    z-index: 1;
    left: 0px;
  }
`;function b(){let r=new T;return y(r),S(r),L(r),N(r),_(r),z(r),E(r),H(r),R(r),$(r),r}var v=class{static get instance(){return this.__singleton__||(this.__singleton__=b()),this.__singleton__}};function C(r,e,n,t,s={}){let o=U(r,e,n,t,s);return p.stringify(t.util.encode(o.tokens),o.language,t)}function U(r,e,n,t,s={}){t||(t=v.instance),e||(e=t.languages.markup);var o={code:r,grammar:e,language:n,tokens:[]};if(t.hooks.run("before-tokenize",o),s.beforeTokenize?.forEach(i=>{i(o)}),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=t.tokenize(o.code,o.grammar),t.hooks.run("after-tokenize",o),s.afterTokenize?.forEach(i=>{i(o)}),o}function O(r,e=0){let n=null;return(...t)=>{n&&window.clearTimeout(n),n=window.setTimeout(()=>{r.apply(null,t)},e)}}var f=class extends M(x){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,n])=>{n.define(e)})}};g(f,"dependencies",{});function B(...r){let e=[],n=document.createElement("div");for(let t of r){if(t instanceof HTMLTemplateElement){let s=t.content.cloneNode(!0);n.append(s),e.push(n.innerHTML),n.innerHTML="";continue}if(t instanceof HTMLScriptElement){e.push(t.textContent);continue}if(t instanceof HTMLTextAreaElement){e.push(t.value);continue}e.push(t.innerHTML)}return e.join(`
`)}var J=new RegExp("(	| {2})");function q(r,...e){let n=[],t=typeof r=="string"?[r]:r.slice();function s(i,a){let l=[];l.push(i[0]);for(let h=0;h<a.length;h++)l.push(a[h]+i[h+1]);return l.join(`
`).trim()}let o=!0;for(let i=0;i<t.length;i++){let a;if(t[i].match(/\n[^\f\r\n\t ]/)){o=!1;break}(a=t[i].match(new RegExp(`
${J.source}+`,"g")))&&n.push(...a)}if(!o)return s(t,e);if(n.length){let i=Math.min(...n.map(l=>l.length-1)),a=new RegExp(`
(	| ){${i}}`,"g");for(let l=0;l<t.length;l++)t[l]=t[l].replaceAll(a,`
`)}return s(t,e)}var X=/\r\n|\r|\n/;function D(r={}){let e=r.disableLineNumbers??!1,n=r.lineNumberStart??1,t=r.callback;return typeof t!="function"&&(t=(s,o,i)=>{s.length<=0||(r.disableLineNumbers||i.push(new p("light-gutter-cell",(o+n).toString())),i.push(new p("light-line",s)))}),function(o){let i=[];F(o.tokens).forEach((a,l)=>{t(a,l,i)}),o.tokens=i}}function K(r){return Array.isArray(r)?r:[r]}function Q(r){return r.length===0?"":r.length===1&&typeof r[0]=="string"?r[0]:r}function F(r){let e=[],n=[e];for(let t=0;t<r.length;t++){let s=r[t];if(typeof s=="string"){let o=s.split(X);for(let i=0;i<o.length;i++){i>0&&n.push(e=[]);let a=o[i];a&&e.push(a)}}else{let o=F(K(s.content));if(o.length>1)for(let i=0;i<o.length;i++){i>0&&n.push(e=[]);let a=o[i];if(a.length){let l=new p(s.type,Q(a),s.alias);l.length=a.reduce((h,I)=>h+I.length,0),e.push(l)}}else e.push(s)}}return n}var d=class{constructor(){let e=()=>{this.errors=[],this.ranges=[],this.numbers=new Set};this.reset=e,this.reset()}includes(e){if(this.numbers.has(e))return!0;if(this.ranges.length==0)return!1;for(let n of this.ranges){let[t,s]=n;if(e>=t&&e<=s)return!0}return!1}parse(e){return this.reset(),Array.isArray(e)?(e.forEach(n=>this.numbers.add(n)),this):e instanceof Set?(this.numbers=e,this):e.includes("{")?e.includes("}")?(e=e.split(/{/)[1],e?(e=e.split(/}/)[0],e.split(/,\s*/).forEach(n=>{let[t,s]=n.split(/-/),o=Number(t),i=Number(s);if(!(o==null||isNaN(o))){if(i==null||isNaN(i)){this.numbers.add(o);return}this.ranges.push([o,i])}}),this):(this.errors.push(new Error("Invalid string provided for range.")),this)):(this.errors.push(new Error("Unable to parse range. No `}` found.")),this):(this.errors.push(new Error("Unable to parse range. No `{` found.")),this)}};function G(r){let{highlightLinesRange:e,insertedLinesRange:n,deletedLinesRange:t}=r;return function(s){let o=1;for(let i of s.tokens)typeof i!="string"&&(e.includes(o)&&(i.type+=" line-highlight"),n.includes(o)&&(i.type+=" inserted"),t.includes(o)&&(i.type+=" deleted"),i.type.includes("light-line")&&o++)}}function W(){let r=["inserted","line-highlight","deleted"];function e(n,t,s){n.type.includes(t)&&(n.attributes.part=s,r.forEach(o=>{n.type.includes(o)&&(o==="line-highlight"&&(o="highlight"),n.attributes.part+=` ${s}-${o}`)}))}return function(n){e(n,"light-line","line"),e(n,"light-gutter-cell","gutter-cell"),e(n,"light-marker","marker")}}var m=class extends f{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=O(()=>this.handleMutation("code"),20),this.wrap="hard",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.highlighter=b(),this.__resizeObserver=new ResizeObserver(()=>this.__setGutterMeasurements()),this.newLineRegex=/\r\n|\r|\n/,this.__highlightedCode__=""}connectedCallback(){super.connectedCallback(),this.__resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.unobserve(this)}willUpdate(e){(e.has("highlighter")||e.has("language")||e.has("code"))&&(this.__highlightedCode__=this.highlight(this.code)),super.willUpdate(e)}updated(e){if((e.has("insertedLines")||e.has("deletedLines")||e.has("highlightLines"))&&!e.has("code")){let n=this.shadowRoot?.querySelectorAll(".light-gutter-cell, .light-line");if(n?.length){let t=new d().parse(this.highlightLines),s=new d().parse(this.insertedLines),o=new d().parse(this.deletedLines);n.forEach((i,a)=>{let h=(a%2===0?a:a-1)/2+1;i.classList.toggle("line-highlight",t.includes(h)),i.part.toggle("line-highlight",t.includes(h)),i.classList.toggle("inserted",s.includes(h)),i.part.toggle("inserted",s.includes(h)),i.classList.toggle("deleted",o.includes(h)),i.part.toggle("deleted",o.includes(h))})}}super.updated(e)}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let n=e.target;if(n==null)return;let t=n.getAttribute("name");if(["preview-code","code"].includes(t||"")===!1)return;let s=n.assignedElements({flatten:!0}),o=this.unescapeTags(B(...s));if(this.preserveWhitespace||(o=q(o.trim())),t==="code"){this.code=o;return}}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){e=e.split(this.newLineRegex).map(t=>t===""?" ":t).join(`
`),this.highlighter||(this.highlighter=b());let n=[D({lineNumberStart:this.lineNumberStart,disableLineNumbers:this.disableLineNumbers}),G({insertedLinesRange:new d().parse(this.insertedLines),deletedLinesRange:new d().parse(this.deletedLines),highlightLinesRange:new d().parse(this.highlightLines)})];return this.highlighter.hooks.add("wrap",W()),e=C(e,this.highlighter.languages[this.language],this.language,this.highlighter,{afterTokenize:n}),e}__setGutterMeasurements(){let e=this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth;e&&this.style.setProperty("--gutter-cell-width",`${e}px`);let n=this.shadowRoot?.querySelector("[part~='code']");if(n){let{offsetHeight:t,clientHeight:s}=n,o=t-s;this.style.setProperty("--scrollbar-height",`${o}px`)}}render(){let e=this.language,n=u`
      <div part="base">
        ${k(!this.disableHighlight,()=>u` <pre
              id="pre-${e}"
              data-code-lang=${e}
              aria-hidden="true"
              part="pre pre-${e}"
              class="diff-highlight language-${e}"
            ><code
                tabindex="0"
                aria-labelledby="source-code-label"
                role="region"
                part="code code-${e}"
                class="language-${e}"
                .innerHTML=${this.__highlightedCode__}
              ></code></pre>`,()=>u`${w(this.code)}`)}
        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${k(this.disableLineNumbers,()=>u``,()=>u`<div part="gutter"></div>`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return setTimeout(async()=>{await this.updateComplete,setTimeout(()=>this.__setGutterMeasurements())}),n}};g(m,"baseName","light-code"),g(m,"styles",[j,P,A,c`
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
    `]),g(m,"properties",{disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserve-whitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{},highlighter:{attribute:!1,state:!0},__highlightedCode__:{attribute:!1,state:!0}});export{j as a,Y as b,A as c,b as d,O as e,f,B as g,q as h,m as i};
//# sourceMappingURL=/light-pen/pull/38/bridgetown/static/chunks/chunk-DC223XXB.js.map
