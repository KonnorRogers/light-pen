import { css } from "lit";

export const componentStyles = css`
  :host {
    display: block;
  }

  [part~="base"] {
    max-height: 100%;
    max-width: 100%;
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
    padding: 2px 8px;
  }

  table {
    border: 1px solid gray;
    width: 100%;
  }

  [part~="line"] {
    border-inline-end: 1px solid gray;
    padding-inline-start: 4px;
  }

  [part~="marker"],
  [part~="gutter-cell"],
  [part~="line"] {
    min-height: 1lh;
    white-space: inherit;
    word-break: inherit;
  }

  [part~="marker"] {
    padding-inline-start: 4px;
    text-align: center;
    user-select: none;
    font-variant-numeric: tabular-nums;
  }

  [part~="marker"]::after {
    content: " ";
  }

  [part~="marker"][part~="marker-deleted"]::after {
    content: "-"
  }

  [part~="marker"][part~="marker-inserted"]::after {
    content: "+";
  }

  [part~="gutter-cell"] {
    user-select: none;
    font-variant-numeric: tabular-nums;
    color: rgba(0, 0, 0, 0.35);
    background-color: var(--syntax-bg);
    text-align: end;
    z-index: 1;
    left: 0px;
  }

  .light-diff-viewer--removed {
    padding: 0.2em 0;
    background: hsla(353, 95%, 46%, 0.15);
  }

  .light-diff-viewer--added {
    padding: 0.2em 0;
    background: hsla(137, 100%, 75%);
  }
`;
