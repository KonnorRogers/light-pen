import { css } from "lit"
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

:host {
  --hljs-color: #383a42;
  --hljs-background-color: #fafafa;
}

.hljs {
  color: var(--hljs-color);
  background: var(--hljs-background-color);
}

.hljs-comment {
  color: #a0a1a7;
}

.hljs-quote {
  color: #a0a1a7;
}

.hljs-doctag {
  color: #a626a4;
}

.hljs-keyword {
  color: #a626a4;
}

.hljs-formula {
  color: #a626a4;
}

.hljs-section {
  color: #e45649;
}
.hljs-name {
  color: #e45649;
}
.hljs-selector-tag {
  color: #e45649;
}
.hljs-deletion {
  color: #e45649;
}
.hljs-subst {
  color: #e45649;
}

.hljs-literal {
  color: #0184bb;
}

.hljs-string {
  color: #50a14f;
}

.hljs-regexp {
  color: #50a14f;
}

.hljs-addition {
  color: #50a14f;
}

.hljs-attribute {
  color: #50a14f;
}

.hljs-meta .hljs-string {
  color: #50a14f;
}

.hljs-attr {
  color: #986801;
}

.hljs-variable {
  color: #986801;
}

.hljs-template-variable {
  color: #986801;
}

.hljs-type {
  color: #986801;
}

.hljs-selector-class {
  color: #986801;
}

.hljs-selector-attr {
  color: #986801;
}
.hljs-selector-pseudo {
  color: #986801;
}

.hljs-number {
  color: #986801;
}

.hljs-symbol {
  color: #4078f2;
}

.hljs-bullet {
  color: #4078f2;
}

.hljs-link {
  color: #4078f2;
}

.hljs-meta {
  color: #4078f2;
}

.hljs-selector-id {
  color: #4078f2;
}

.hljs-title {
  color: #4078f2;
}

.hljs-built_in {
  color: #c18401;
}

.hljs-title.class_ {
  color: #c18401;
}

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
