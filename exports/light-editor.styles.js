import { css } from "lit"

export const styles = css`
  :host {
    --padding: 16px;
  }

  [part~="base"] {
    height: 15em;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    resize: both;
    font-size: normal;
    font-family: monospace;
    line-height: 1.5; /* Inherited to child elements */
    tab-size: 2;
    caret-color: darkgrey;

    /* this creates line-wrapping. */
	  /* word-break: break-word; */
    /* white-space: pre-wrap; */

    /* No wrapping */
	  /* word-break: break-all; */
    white-space: pre;
  }

  [part~="textarea"] {
    position: relative;
    color: transparent;
    background-color: transparent;
    caret-color: black;
    z-index: 1;
    resize: none;
  }

  [part~="pre"] {
    border-color: transparent;
  }

  [part~="base"]:focus-within {
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
    color: red;
  }

  [part~="code"] {
  }

  [part~="pre"],
  [part~="textarea"] {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;
    caret-color: inherit;
    white-space: inherit;
    white-space: inherit;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px;
    border: none;
    overflow: auto;

    border: 1px solid transparent;
  }

  [part~="pre"],
  [part~="code"] {
	  color: #272727;
	  background-color: #f7f7f7;
  }

  [part~="pre"],
  [part~="code"],
  [part~="textarea"] {
	  font-family: Menlo, Monaco, "Courier New", monospace;
	  font-size: 0.875rem;
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`
