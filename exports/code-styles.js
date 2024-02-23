import { css } from "lit";

export const codeStyles = css`
:host([disable-line-numbers]) [part~="pre"] {
  padding: 1rem;
}

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
}

[part~="code"] {
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr);
  column-gap: 8px;
}

:host([wrap="soft"]) [part~="pre"] {
  /* this creates line-wrapping. */
  word-break: break-word;
  white-space: pre-wrap;
}

:host([disable-line-numbers]) .light-line {
  grid-template-columns: minmax(0, 1fr);
}

.light-line:is(.deleted, .inserted, .line-highlight)::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0%;
  font-size: 1em;
  line-height: 0;
  mix-blend-mode: difference;
  filter: invert(1);
  transform: translate(50%, -50%);
}

.light-line {
  display: inline-block;
  width: 100%;
}

.light-gutter {
  display: inline-block;
  border-inline-end: 1px solid darkgray;
  padding-inline-end: 0.5em;
  padding-inline-start: 0.75em;
  user-select: none;
  color: rgba(0, 0, 0, 0.35);
  background-color: rgba(50, 50, 50, 0.08);
  font-variant-numeric: tabular-nums;
  text-align: end;
}

.light-line.deleted::after {
  content: "-"
}

.light-line.inserted::after {
  content: "+"
}
`
