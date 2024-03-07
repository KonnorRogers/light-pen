import { css } from "lit";

export const codeStyles = css`
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
  grid-template-columns: max-content auto;
}

:host([wrap="soft"]) [part~="pre"] {
  /* this creates line-wrapping. */
  word-break: break-word;
  white-space: pre-wrap;
}

:host([disable-line-numbers]) [part~="code"] {
  grid-template-columns: minmax(0, 1fr);
}

[part~='line'] {
  display: inline-block;
  width: 100%;
  padding-inline-start: 18px;
  padding-inline-end: 6px;
  position: relative;
}

[part~="line"]:is(.deleted, .inserted, .line-highlight)::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 0%;
  line-height: inherit;
  mix-blend-mode: difference;
  filter: invert(1);
  padding-inline-start: 2px;
}


[part~="line"].deleted::after {
  content: "-"
}

[part~="line"].inserted::after {
  content: "+"
}

[part~='gutter-cell'] {
  display: inline-block;
  padding-inline-end: 0.5em;
  padding-inline-start: 0.75em;
  user-select: none;
  color: rgba(0, 0, 0, 0.35);
  background-color: transparent;
  font-variant-numeric: tabular-nums;
  text-align: end;
}
`
