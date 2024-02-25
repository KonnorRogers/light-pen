import { css } from "lit";

export const codeStyles = css`

[part~="pre"],
[part~="code"] {
  color: #272727;
  background-color: #f7f7f7;
  line-height: 1.8;
}

[part~="pre"] {
  color: #272727;
  background-color: #f7f7f7;
  margin: 0;
  overflow: auto;
  /* This removes line wrapping */
  word-break: break-all;
  white-space: pre;
  padding: 0;
  height: 100%;
}

[part~="code"] {
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr);
}

:host([wrap="soft"]) [part~="pre"] {
  /* this creates line-wrapping. */
  word-break: break-word;
  white-space: pre-wrap;
}

:host([disable-line-numbers]) [part~="code"] {
  grid-template-columns: minmax(0, 1fr);
}

[part~="line"]:is(.deleted, .inserted, .line-highlight)::after {
  content: "";
  position: absolute;
  top: 0.8em;
  left: 0%;
  font-size: 16px;
  line-height: 0;
  mix-blend-mode: difference;
  filter: invert(1);
  transform: translate(50%, -50%);
}

[part~='line'] {
  display: inline-block;
  width: 100%;
  padding-inline-start: 24px;
  position: relative;
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

[part~="line"].deleted::after {
  content: "-"
}

[part~="line"].inserted::after {
  content: "+"
}
`
