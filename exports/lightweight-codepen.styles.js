import { css } from "lit"
export const styles = css`
*, *:after, *:before {
  box-sizing: border-box;
}

iframe {
width: 100%;
height: 100%;
}

.visually-hidden:not(:focus):not(:active) {
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

.sandbox{
  background-color: #e5e5e5;
  color:#272727;
  margin-bottom:1.5625em
}

.sandbox summary {
  font-size:.8125em;
  font-weight:bold
}

.sandbox-editor{
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  column-gap: 0;
  row-gap: 0;
}

pre,
textarea {
  grid-area:1/1/2/2;
  margin-bottom:0;
  min-height:15em;
  margin: 0;
  padding: 0;
}

textarea {
  background-color: transparent;
  color: transparent;
  caret-color: black;
}

pre,
textarea {
	display: block;
	line-height: 1.5;
	margin: 0 0 1.5625em;
	overflow: auto;
	white-space: pre-wrap;
	word-break: break-all;
  padding: 8px;
  border: none;
}

pre,
code {
	background-color: #f7f7f7;
	color: #272727;
}

pre code {
	word-wrap: break-word;
	color: inherit;
	font-size: 1em;
}

pre,
code,
textarea {
	font-family: Menlo, Monaco, "Courier New", monospace;
	font-size: 0.875em;
}

pre code {
}

.sandbox-iframe{
  aspect-ratio:auto;
  background-color: #fff;
  margin-bottom: 0;
}

.sandbox,
pre,
code,
.sandbox-iframe {
  border-radius:.25em;
}

.sandbox-header,.sandbox-console,.sandbox-console-result{
  background-color:#343d4d;
  color:#fff
}

.sandbox-header,
.sandbox-console {
  padding-top:.125em;
  padding-bottom:.125em
}

.sandbox-header{
  display:flex;
  justify-content:space-between;
  border-top-left-radius:.25em;
  border-top-right-radius:.25em;
  font-size:.8125em;
}

.sandbox-controls .btn {
  margin-bottom: 0;
}

.sandbox-console {
  border-bottom-left-radius:.25em;
  border-bottom-right-radius:.25em
}

.sandbox-console-log{
  font-family: Menlo,Monaco,"Courier New",monospace;
  font-size:.875em;
  min-height:1.2em;
}
.log-warn {
  color:#f9d767
}

.log-error {
  color:#f9c8c8
}

.sandbox-header,
.sandbox-code,
.sandbox-result,
.sandbox-console,
.sandbox-console-result {
  padding:.5em
}

.sandbox-content{
  display:grid;
  grid-template-columns:repeat(2, 1fr)
}

.sandbox-code{
  grid-area:1/1/2/2
}

.sandbox-result,.sandbox-console-result{
  grid-area:1/2/2/3
}

.sandbox-result {
  border-left:1px solid #b2b2b2
}

.sandbox-console-result {
  border-top:1px solid #1f252f;
  border-bottom-left-radius:0;
}
`

export const theme = css`
/*
Atom One Light by Daniel Gamage
Original One Light Syntax theme from https://github.com/atom/one-light-syntax

base:    #fafafa
mono-1:  #383a42
mono-2:  #686b77
mono-3:  #a0a1a7
hue-1:   #0184bb
hue-2:   #4078f2
hue-3:   #a626a4
hue-4:   #50a14f
hue-5:   #e45649
hue-5-2: #c91243
hue-6:   #986801
hue-6-2: #c18401

*/

.hljs {
  color: #383a42;
  background: #fafafa;
}

.hljs-comment,
.hljs-quote {
  color: #a0a1a7;
  font-style: italic;
}

.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #a626a4;
}

.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e45649;
}

.hljs-literal {
  color: #0184bb;
}

.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: #50a14f;
}

.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #986801;
}

.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #4078f2;
}

.hljs-built_in,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #c18401;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}
`
