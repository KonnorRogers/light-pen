import{a as O,b as G,c as oe,d as ee,g as se,i as le}from"/light-pen/pull/25/bridgetown/static/chunks/chunk-SV7VIJF3.js";import{d as M}from"/light-pen/pull/25/bridgetown/static/chunks/chunk-OS2XYXOL.js";function te(e,t,n){return e?t(e):n?.(e)}var ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ge=e=>(...t)=>({_$litDirective$:e,values:t}),W=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this.t=t,this._$AM=n,this.i=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};var I=class extends W{constructor(t){if(super(t),this.it=ee,t.type!==ue.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ee||t==null)return this._t=void 0,this.it=t;if(t===oe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};I.directiveName="unsafeHTML",I.resultType=1;var ce=ge(I);var de=O`
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
`;var he=O`
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
`;var ne=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},q=ne;var Z=class{constructor(t={}){let n={},{disableWorkerMessageHandler:r,manual:a}=t;this.manual=a,this.manual==null&&(this.manual=!0),this.plugins={};let i=this;this.disableWorkerMessageHandler=!!r,this.Token=S,this.util=new re(this);let o=this.util;if(this.languages={plain:n,plaintext:n,text:n,txt:n,extend:(s,m)=>{let p=this.util.clone(this.languages[s]);for(var b in m)p[b]=m[b];return p},insertBefore:(s,m,p,b)=>{b||(b=this.languages);let u=b[s],f={};for(let v in u)if(u.hasOwnProperty(v)){if(v==m)for(var h in p)p.hasOwnProperty(h)&&(f[h]=p[h]);p.hasOwnProperty(v)||(f[v]=u[v])}var d=b[s];return b[s]=f,this.languages.DFS(this.languages,function(v,k){k===d&&v!=s&&(this[v]=f)}),f},DFS(s,m,p,b){b=b||{};var u=o.objId;for(var f in s)if(s.hasOwnProperty(f)){m.call(s,f,s[f],p||f);var h=s[f],d=o.type(h);d==="Object"&&!b[u(h)]?(b[u(h)]=!0,this.DFS(h,m,null,b)):d==="Array"&&!b[u(h)]&&(b[u(h)]=!0,this.DFS(h,m,f,b))}}},this.hooks={all:{},add:function(s,m){var p=i.hooks.all;p[s]=p[s]||[],p[s].push(m)},run:function(s,m){var p=i.hooks.all[s];if(!(!p||!p.length))for(var b=0,u;u=p[b++];)u(m)}},!q.document)return q.addEventListener&&(i.disableWorkerMessageHandler||q.addEventListener("message",function(s){var m=JSON.parse(s.data),p=m.language,b=m.code,u=m.immediateClose;q.postMessage(i.highlight(b,i.languages[p],p)),u&&ne.close()},!1)),i;function g(){i.manual||i.highlightAll()}let c=this.util.currentScript();if(c&&(this.filename=c.src,c.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var l=document.readyState;l==="loading"||l==="interactive"&&c&&c.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}}highlightAll(t,n){this.highlightAllUnder(document,t,n)}highlightAllUnder(t,n,r){var a={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),this.hooks.run("before-all-elements-highlight",a);for(var i=0,o;o=a.elements[i++];)this.highlightElement(o,n===!0,a.callback)}highlightElement(t,n,r){var a=this.util.getLanguage(t),i=this.languages[a];this.util.setLanguage(t,a);var o=t.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(o,a);var g=t.textContent,c={element:t,language:a,grammar:i,code:g};let l=m=>{c.highlightedCode=m,this.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,this.hooks.run("after-highlight",c),this.hooks.run("complete",c),r&&r.call(c.element)};if(this.hooks.run("before-sanity-check",c),o=c.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!c.code){this.hooks.run("complete",c),r&&r.call(c.element);return}if(this.hooks.run("before-highlight",c),!c.grammar){l(this.util.encode(c.code));return}if(n&&ne.Worker){var s=new Worker(this.filename);s.onmessage=function(m){l(m.data)},s.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(this.highlight(c.code,c.grammar,c.language))}highlight(t,n,r){var a={code:t,grammar:n,language:r};if(this.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=this.tokenize(a.code,a.grammar),this.hooks.run("after-tokenize",a),S.stringify(this.util.encode(a.tokens),a.language,this)}tokenize(t,n){var r=n?.rest;if(r){for(var a in r)n[a]=r[a];delete n.rest}var i=new Be;return U(i,i.head,t),be(t,i,n,i.head,0,this),ze(i)}},S=class{constructor(t,n,r,a){this.type=t,this.content=n,this.alias=r,this.length=(a||"").length|0}static stringify(t,n,r){let a=this;if(typeof t=="string")return t;if(Array.isArray(t)){var i="";return t.forEach(function(s){i+=a.stringify(s,n,r)}),i}var o={type:t.type,content:a.stringify(t.content,n,r),tag:"span",classes:["token",t.type],attributes:{},language:n},g=t.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(o.classes,g):o.classes.push(g)),r.hooks.run("wrap",o);var c="";for(var l in o.attributes)c+=" "+l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+c+">"+o.content+"</"+o.tag+">"}},pe=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,je=0,re=class{constructor(t){M(this,"encode",t=>{if(t instanceof S){let n=t.content;return new S(t.type,this.encode(n),t.alias)}else return Array.isArray(t)?t.map(n=>this.encode(n)):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=t}type(t){return Object.prototype.toString.call(t).slice(8,-1)}getLanguage(t){for(;t;){var n=pe.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return"none"}setLanguage(t,n){t.className=t.className.replace(RegExp(pe,"gi"),""),t.classList.add("language-"+n)}objId(t){return t.__id||Object.defineProperty(t,"__id",{value:++je}),t.__id}clone(t){return structuredClone(t)}isActive(t,n,r){for(var a="no-"+n;t;){var i=t.classList;if(i.contains(n))return!0;if(i.contains(a))return!1;t=t.parentElement}return!!r}currentScript(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==t)return n[r]}return null}}};function fe(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function be(e,t,n,r,a,i,o){for(var g in n)if(!(!n.hasOwnProperty(g)||!n[g])){var c=n[g];c=Array.isArray(c)?c:[c];for(var l=0;l<c.length;++l){if(o&&o.cause==g+","+l)return;var s=c[l],m=s.inside,p=!!s.lookbehind,b=!!s.greedy,u=s.alias;if(b&&!s.pattern.global){var f=s.pattern.toString().match(/[imsuy]*$/)[0];s.pattern=RegExp(s.pattern.source,f+"g")}for(var h=s.pattern||s,d=r.next,v=a;d!==t.tail&&!(o&&v>=o.reach);v+=d.value.length,d=d.next){var k=d.value;if(t.length>e.length)return;if(!(k instanceof S)){var F=1,y;if(b){if(y=fe(h,v,e,p),!y||y.index>=e.length)break;var L=y.index,_=y.index+y[0].length,x=v;for(x+=d.value.length;L>=x;)d=d.next,x+=d.value.length;if(x-=d.value.length,v=x,d.value instanceof S)continue;for(var w=d;w!==t.tail&&(x<_||typeof w.value=="string");w=w.next)F++,x+=w.value.length;F--,k=e.slice(v,x),y.index-=v}else if(y=fe(h,0,k,p),!y)continue;var L=y.index,A=y[0],j=k.slice(0,L),D=k.slice(L+A.length),B=v+k.length;o&&B>o.reach&&(o.reach=B);var R=d.prev;j&&(R=U(t,R,j),v+=j.length),Re(t,R,F);var Q=new S(g,m?i.tokenize(A,m):A,u,A);if(d=U(t,R,Q),D&&U(t,d,D),F>1){var C={cause:g+","+l,reach:B};be(e,t,n,d.prev,v,i,C),o&&C.reach>o.reach&&(o.reach=C.reach)}}}}}}function Be(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function U(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function Re(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}function ze(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}function E(e,t){typeof e>"u"||t?.force!==!0&&e.languages.markup||(e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(r,a){var i={};i["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[a]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+a]={pattern:/[\s\S]+/,inside:e.languages[a]};var g={};g[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",g)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,r){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:e.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml)}function H(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.css)){E(e);var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}}function Y(e,t){typeof e>"u"||t?.force!==!0&&e.languages.clike||(e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function $(e,t){typeof e>"u"||t?.force!==!0&&e.languages.javascript||(Y(e),E(e),e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript)}function me(e){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading\u2026",n=function(b,u){return"\u2716 Error "+b+" while fetching file: "+u},r="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",o="loading",g="loaded",c="failed",l="pre[data-src]:not(["+i+'="'+g+'"]):not(['+i+'="'+o+'"])';function s(b,u,f){var h=new XMLHttpRequest;h.open("GET",b,!0),h.onreadystatechange=function(){h.readyState==4&&(h.status<400&&h.responseText?u(h.responseText):h.status>=400?f(n(h.status,h.statusText)):f(r))},h.send(null)}function m(b){var u=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(u){var f=Number(u[1]),h=u[2],d=u[3];return h?d?[f,Number(d)]:[f,void 0]:[f,f]}}e.hooks.add("before-highlightall",function(b){b.selector+=", "+l}),e.hooks.add("before-sanity-check",function(b){var u=b.element;if(u.matches(l)){b.code="",u.setAttribute(i,o);var f=u.appendChild(document.createElement("CODE"));f.textContent=t;var h=u.getAttribute("data-src"),d=b.language;if(d==="none"){var v=(/\.(\w+)$/.exec(h)||[,"none"])[1];d=a[v]||v}e.util.setLanguage(f,d),e.util.setLanguage(u,d);var k=e.plugins.autoloader;k&&k.loadLanguages(d),s(h,function(F){u.setAttribute(i,g);var y=m(u.getAttribute("data-range"));if(y){var _=F.split(/\r\n?|\n/g),x=y[0],w=y[1]==null?_.length:y[1];x<0&&(x+=_.length),x=Math.max(0,Math.min(x-1,_.length)),w<0&&(w+=_.length),w=Math.max(0,Math.min(w,_.length)),F=_.slice(x,w).join(`
`),u.hasAttribute("data-start")||u.setAttribute("data-start",String(x+1))}f.textContent=F,e.highlightElement(f)},function(F){u.setAttribute(i,c),f.textContent=F})}}),e.plugins.fileHighlight={highlight:function(u){for(var f=(u||document).querySelectorAll(l),h=0,d;d=f[h++];)e.highlightElement(d)}};var p=!1;e.fileHighlight=function(){p||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),p=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}var V=class extends Z{constructor(...t){super(...t),E(this),H(this),Y(this),$(this),me(this)}};function ve(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["markup-templating"])return;E(e);function n(r,a){return"___"+r.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,a,i,o){if(r.language===a){var g=r.tokenStack=[];r.code=r.code.replace(i,function(c){if(typeof o=="function"&&!o(c))return c;for(var l=g.length,s;r.code.indexOf(s=n(a,l))!==-1;)++l;return g[l]=c,s}),r.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(r,a){if(r.language!==a||!r.tokenStack)return;r.grammar=e.languages[a];var i=0,o=Object.keys(r.tokenStack);function g(c){for(var l=0;l<c.length&&!(i>=o.length);l++){var s=c[l];if(typeof s=="string"||s.content&&typeof s.content=="string"){var m=o[i],p=r.tokenStack[m],b=typeof s=="string"?s:s.content,u=n(a,m),f=b.indexOf(u);if(f>-1){++i;var h=b.substring(0,f),d=new e.Token(a,e.tokenize(p,r.grammar),"language-"+a,p),v=b.substring(f+u.length),k=[];h&&k.push.apply(k,g([h])),k.push(d),v&&k.push.apply(k,g([v])),typeof s=="string"?c.splice.apply(c,[l,1].concat(k)):s.content=k}}else s.content&&g(s.content)}return c}g(r.tokens)}}})}function ke(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages["css-extras"])){e.languages["css-extras"]={},H(e);var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r;e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=r,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var a={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},i={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:a,number:i,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:a,number:i})}}function ye(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["js-extras"])return;e.languages["js-extras"]={},$(e),e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(c,l){return RegExp(c.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),l)}e.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],a=0;a<r.length;a++){var i=r[a],o=e.languages.javascript[i];e.util.type(o)==="RegExp"&&(o=e.languages.javascript[i]={pattern:o});var g=o.inside||{};o.inside=g,g["maybe-class-name"]=/^[A-Z][\s\S]*/}}function xe(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["js-templates"])return;e.languages["js-templates"]={},$(e);var n=e.languages.javascript["template-string"],r=n.pattern.source,a=n.inside.interpolation,i=a.inside["interpolation-punctuation"],o=a.pattern.source;function g(u,f){if(e.languages[u])return{pattern:RegExp("((?:"+f+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:u}}}}e.languages.javascript["template-string"]=[g("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),g("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),g("svg",/\bsvg/.source),g("markdown",/\b(?:markdown|md)/.source),g("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),g("sql",/\bsql/.source),n].filter(Boolean);function c(u,f){return"___"+f.toUpperCase()+"_"+u+"___"}function l(u,f,h){var d={code:u,grammar:f,language:h};return e.hooks.run("before-tokenize",d),d.tokens=e.tokenize(d.code,d.grammar),e.hooks.run("after-tokenize",d),d.tokens}function s(u){var f={};f["interpolation-punctuation"]=i;var h=e.tokenize(u,f);if(h.length===3){var d=[1,1];d.push.apply(d,l(h[1],e.languages.javascript,"javascript")),h.splice.apply(h,d)}return new e.Token("interpolation",h,a.alias,u)}function m(u,f,h){var d=e.tokenize(u,{interpolation:{pattern:RegExp(o),lookbehind:!0}}),v=0,k={},F=d.map(function(w){if(typeof w=="string")return w;for(var L=w.content,A;u.indexOf(A=c(v++,h))!==-1;);return k[A]=L,A}).join(""),y=l(F,f,h),_=Object.keys(k);v=0;function x(w){for(var L=0;L<w.length;L++){if(v>=_.length)return;var A=w[L];if(typeof A=="string"||typeof A.content=="string"){var j=_[v],D=typeof A=="string"?A:A.content,B=D.indexOf(j);if(B!==-1){++v;var R=D.substring(0,B),Q=s(k[j]),C=D.substring(B+j.length),z=[];if(R&&z.push(R),z.push(Q),C){var ie=[C];x(ie),z.push.apply(z,ie)}typeof A=="string"?(w.splice.apply(w,[L,1].concat(z)),L+=z.length-1):A.content=z}}else{var P=A.content;Array.isArray(P)?x(P):x([P])}}}return x(y),new e.Token(h,y,"language-"+h,u)}var p={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};e.hooks.add("after-tokenize",function(u){if(!(u.language in p))return;function f(h){for(var d=0,v=h.length;d<v;d++){var k=h[d];if(typeof k!="string"){var F=k.content;if(!Array.isArray(F)){typeof F!="string"&&f([F]);continue}if(k.type==="template-string"){var y=F[1];if(F.length===3&&typeof y!="string"&&y.type==="embedded-code"){var _=b(y),x=y.alias,w=Array.isArray(x)?x[0]:x,L=e.languages[w];if(!L)continue;F[1]=m(_,L,w)}}else f(F)}}}f(u.tokens)});function b(u){return typeof u=="string"?u:Array.isArray(u)?u.map(b).join(""):b(u.content)}}function J(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages.jsx)return;e.languages.markup||E(e),e.languages.javascript||$(e);var n=e.util.clone(e.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(l,s){return l=l.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return i}),RegExp(l,s)}i=o(i).source,e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=n.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var g=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(g).join(""):""},c=function(l){for(var s=[],m=0;m<l.length;m++){var p=l[m],b=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?s.length>0&&s[s.length-1].tagName===g(p.content[0].content[1])&&s.pop():p.content[p.content.length-1].content==="/>"||s.push({tagName:g(p.content[0].content[1]),openedBraces:0}):s.length>0&&p.type==="punctuation"&&p.content==="{"?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?s[s.length-1].openedBraces--:b=!0),(b||typeof p=="string")&&s.length>0&&s[s.length-1].openedBraces===0){var u=g(p);m<l.length-1&&(typeof l[m+1]=="string"||l[m+1].type==="plain-text")&&(u+=g(l[m+1]),l.splice(m+1,1)),m>0&&(typeof l[m-1]=="string"||l[m-1].type==="plain-text")&&(u=g(l[m-1])+u,l.splice(m-1,1),m--),l[m]=new e.Token("plain-text",u,null,u)}p.content&&typeof p.content!="string"&&c(p.content)}};e.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||c(l.tokens)})}function X(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.typescript)){e.languages.javascript||$(e),e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript}}function we(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.tsx)){e.languages.jsx||J(e),e.languages.typescript||X(e);var n=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",n),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var r=e.languages.tsx.tag;r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}}function K(){let e=new V;return E(e),ve(e),H(e),ke(e),$(e),ye(e),xe(e),J(e),X(e),we(e),e}var ae=class{static get instance(){return this.__singleton__||(this.__singleton__=K()),this.__singleton__}};function Fe(e,t,n,r,a={}){let i=De(e,t,n,r,a);return S.stringify(r.util.encode(i.tokens),i.language,r)}function De(e,t,n,r,a={}){r||(r=ae.instance),t||(t=r.languages.markup);var i={code:e,grammar:t,language:n,tokens:[]};if(r.hooks.run("before-tokenize",i),a.beforeTokenize?.forEach(o=>{o(i)}),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.afterTokenize?.forEach(o=>{o(i)}),i}function Ae(e,t=0){let n=null;return(...r)=>{n&&window.clearTimeout(n),n=window.setTimeout(()=>{e.apply(null,r)},t)}}function Se(...e){let t=[],n=document.createElement("div");for(let r of e){if(r instanceof HTMLTemplateElement){let a=r.content.cloneNode(!0);n.append(a),t.push(n.innerHTML),n.innerHTML="";continue}if(r instanceof HTMLScriptElement){t.push(r.textContent);continue}if(r instanceof HTMLTextAreaElement){t.push(r.value);continue}t.push(r.innerHTML)}return t.join(`
`)}function Le(e,...t){let n=[],r=typeof e=="string"?[e]:e.slice();r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");for(let i=0;i<r.length;i++){let o;(o=r[i].match(/\n[\t ]+/g))&&n.push(...o)}if(n.length){let i=Math.min(...n.map(g=>g.length-1)),o=new RegExp(`
[	 ]{${i}}`,"g");for(let g=0;g<r.length;g++)r[g]=r[g].replace(o,`
`)}r[0]=r[0].replace(/^\r?\n/,"");let a=r[0];for(let i=0;i<t.length;i++)a+=t[i]+r[i+1];return a}var Ce=/\r\n|\r|\n/;function _e(e={}){let t=e.disableLineNumbers??!1,n=e.lineNumberStart??1,r=e.callback;return typeof r!="function"&&(r=(a,i,o)=>{a.length<=0||(e.disableLineNumbers||o.push(new S("light-gutter-cell",(i+n).toString())),o.push(new S("light-line",a)))}),function(i){let o=[];Ee(i.tokens).forEach((g,c)=>{r(g,c,o)}),i.tokens=o}}function Me(e){return Array.isArray(e)?e:[e]}function Oe(e){return e.length===0?"":e.length===1&&typeof e[0]=="string"?e[0]:e}function Ee(e){let t=[],n=[t];for(let r=0;r<e.length;r++){let a=e[r];if(typeof a=="string"){let i=a.split(Ce);for(let o=0;o<i.length;o++){o>0&&n.push(t=[]);let g=i[o];g&&t.push(g)}}else{let i=Ee(Me(a.content));if(i.length>1)for(let o=0;o<i.length;o++){o>0&&n.push(t=[]);let g=i[o];if(g.length){let c=new S(a.type,Oe(g),a.alias);c.length=g.reduce((l,s)=>l+s.length,0),t.push(c)}}else t.push(a)}}return n}var T=class{constructor(){let t=()=>{this.errors=[],this.ranges=[],this.numbers=new Set};this.reset=t,this.reset()}includes(t){if(this.numbers.has(t))return!0;if(this.ranges.length==0)return!1;for(let n of this.ranges){let[r,a]=n;if(t>=r&&t<=a)return!0}return!1}parse(t){return this.reset(),Array.isArray(t)?(t.forEach(n=>this.numbers.add(n)),this):t instanceof Set?(this.numbers=t,this):t.includes("{")?t.includes("}")?(t=t.split(/{/)[1],t?(t=t.split(/}/)[0],t.split(/,\s*/).forEach(n=>{let[r,a]=n.split(/-/),i=Number(r),o=Number(a);if(!(i==null||isNaN(i))){if(o==null||isNaN(o)){this.numbers.add(i);return}this.ranges.push([i,o])}}),this):(this.errors.push(new Error("Invalid string provided for range.")),this)):(this.errors.push(new Error("Unable to parse range. No `}` found.")),this):(this.errors.push(new Error("Unable to parse range. No `{` found.")),this)}};function $e(e){let{highlightLinesRange:t,insertedLinesRange:n,deletedLinesRange:r}=e;return function(a){let i=1;for(let o of a.tokens)typeof o!="string"&&(t.includes(i)&&(o.type+=" line-highlight"),n.includes(i)&&(o.type+=" inserted"),r.includes(i)&&(o.type+=" deleted"),o.type.includes("light-line")&&i++)}}function Te(){let e=["inserted","line-highlight","deleted"];function t(n,r,a){n.type.includes(r)&&(n.attributes.part=a,e.forEach(i=>{n.type.includes(i)&&(i==="line-highlight"&&(i="highlight"),n.attributes.part+=` ${a}-${i}`)}))}return function(n){t(n,"light-line","line"),t(n,"light-gutter-cell","gutter-cell"),t(n,"light-marker","marker")}}var N=class extends le{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=Ae(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.highlighter=K(),this.__resizeObserver=new ResizeObserver(()=>this.__setGutterMeasurements()),this.newLineRegex=/\r\n|\r|\n/,this.__highlightedCode__=""}connectedCallback(){super.connectedCallback(),this.__resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.unobserve(this)}willUpdate(t){(t.has("highlighter")||t.has("language")||t.has("code"))&&(this.__highlightedCode__=this.highlight(this.code)),super.willUpdate(t)}updated(t){if((t.has("insertedLines")||t.has("deletedLines")||t.has("highlightLines"))&&!t.has("code")){let n=this.shadowRoot?.querySelectorAll(".light-gutter-cell, .light-line");if(n?.length){let r=new T().parse(this.highlightLines),a=new T().parse(this.insertedLines),i=new T().parse(this.deletedLines);n.forEach((o,g)=>{let l=(g%2===0?g:g-1)/2+1;o.classList.toggle("line-highlight",r.includes(l)),o.part.toggle("line-highlight",r.includes(l)),o.classList.toggle("inserted",a.includes(l)),o.part.toggle("inserted",a.includes(l)),o.classList.toggle("deleted",i.includes(l)),o.part.toggle("deleted",i.includes(l))})}}super.updated(t)}handleMutation(t){if(t==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(t){return this.shadowRoot?.querySelector(`slot[name='${t}']`)}handleTemplate(t){let n=t.target;if(n==null)return;let r=n.getAttribute("name");if(["preview-code","code"].includes(r||"")===!1)return;let a=n.assignedElements({flatten:!0}),i=this.unescapeTags(Se(...a));if(this.preserveWhitespace||(i=Le(i.trim())),r==="code"){this.code=i;return}}unescapeTags(t){return t.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(t=this.code){t=t.split(this.newLineRegex).map(r=>r===""?" ":r).join(`
`),this.highlighter||(this.highlighter=K());let n=[_e({lineNumberStart:this.lineNumberStart,disableLineNumbers:this.disableLineNumbers}),$e({insertedLinesRange:new T().parse(this.insertedLines),deletedLinesRange:new T().parse(this.deletedLines),highlightLinesRange:new T().parse(this.highlightLines)})];return this.highlighter.hooks.add("wrap",Te()),t=Fe(t,this.highlighter.languages[this.language],this.language,this.highlighter,{afterTokenize:n}),t}__setGutterMeasurements(){let t=this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth;t&&this.style.setProperty("--gutter-cell-width",`${t}px`);let n=this.shadowRoot?.querySelector("[part~='code']");if(n){let{offsetHeight:r,clientHeight:a}=n,i=r-a;this.style.setProperty("--scrollbar-height",`${i}px`)}}render(){let t=this.language,n=G`
      <div part="base">
        ${te(!this.disableHighlight,()=>G` <pre
              id="pre-${t}"
              data-code-lang=${t}
              aria-hidden="true"
              part="pre pre-${t}"
              class="diff-highlight language-${t}"
            ><code
                tabindex="0"
                aria-labelledby="source-code-label"
                role="region"
                part="code code-${t}"
                class="language-${t}"
                .innerHTML=${this.__highlightedCode__}
              ></code></pre>`,()=>G`${ce(this.code)}`)}
        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${te(this.disableLineNumbers,()=>G``,()=>G`<div part="gutter"></div>`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return setTimeout(async()=>{await this.updateComplete,setTimeout(()=>this.__setGutterMeasurements())}),n}};M(N,"baseName","light-code"),M(N,"styles",[se,he,de,O`
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
    `]),M(N,"properties",{disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserve-whitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{},highlighter:{attribute:!1,state:!0},__highlightedCode__:{attribute:!1,state:!0}});export{te as a,ue as b,ge as c,W as d,de as e,K as f,Ae as g,Se as h,Le as i,N as j};
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
//# sourceMappingURL=/light-pen/pull/25/bridgetown/static/chunks/chunk-DRGPG425.js.map
