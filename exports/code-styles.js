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
  padding-inline-start: 6px;
  padding-inline-end: 6px;
}

[part~="line"]::before {
  content: " ";
  line-height: inherit;
  padding-inline-end: 6px;
}


[part~="line"].deleted::before {
  content: "-"
}

[part~="line"].inserted::before {
  content: "+"
}

[part~='gutter-cell'] {
  display: inline-block;
  padding-inline-end: 0.5em;
  padding-inline-start: 0.75em;
  user-select: none;
  color: rgba(0, 0, 0, 0.35);
  background-color: rgba(230, 230, 230, 1);
  font-variant-numeric: tabular-nums;
  text-align: end;
  position: sticky;
  z-index: 1;
  left: 0px;
}
`
