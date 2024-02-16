import { css } from "lit";

export const codeStyles = css`
[part~="pre"] {
  padding: 1rem;
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
}

[part~="pre"],
[part~="code"] {
  line-height: 1.6;
}


[part~="pre"],
[part~="code"] {
	color: #272727;
	background-color: #f7f7f7;
}
`
