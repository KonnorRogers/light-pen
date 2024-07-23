import { css } from "lit"

export const componentStyles = css`
  :host {
    display: block;
  }

  [part~="base"] {
    max-height: 100%;
    max-width: 100%;
  }

  light-code {
    border: 1px solid lightgray;
    min-height: 15em;
  }

  span {
    white-space: inherit;
  }

  table {
    border-collapse: collapse;
  }

  td {
    vertical-align: top;
  }

  td[part~="gutter-cell"] {
    vertical-align: top;
    border-inline-end: 1px solid gray;
    word-break: normal;
    padding: 2px 16px;
  }

  table {
    border: 1px solid gray;
  }

  [part~="line"] {
    border-inline-end: 1px solid gray;
    padding-inline-start: 4px;
  }

  [part~="gutter-cell"],
  [part~="line"] {
    min-height: 1lh;
    white-space: inherit;
    word-break: inherit;
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
  user-select: none;
  color: rgba(0, 0, 0, 0.35);
  background-color: var(--syntax-bg);
  font-variant-numeric: tabular-nums;
  text-align: end;
  z-index: 1;
  left: 0px;
}
`
