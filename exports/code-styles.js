import { css } from "lit";

export const codeStyles = css`
:host([disable-line-numbers]) [part~="pre"] {
  padding: 1rem;
}

[part~="pre"] {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  overflow: auto;
  /* This removes line wrapping */
  word-break: break-all;
  white-space: pre;
}

:host([wrap="soft"]) [part~="pre"] {
  /* this creates line-wrapping. */
  word-break: break-word;
  white-space: pre-wrap;
}

.light-line {
  display: inline-block;
  width: 100%;
  padding-inline-start: 24px;
  padding-inline-end: 24px;
  position: relative;
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

.light-line.deleted::after {
  content: "-"
}

.light-line.inserted::after {
  content: "-"
}

[part~="pre"],
[part~="code"] {
  line-height: 1.8;
}


[part~="pre"],
[part~="code"] {
  color: #272727;
  background-color: #f7f7f7;
}
`
