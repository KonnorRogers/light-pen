import { css } from "lit"

export const styles = css`
  :host {
    display: grid;
    grid-template-rows: minmax(0, 1fr);
  }

  [part~="base"] {
    display: grid;
    grid-template-rows: minmax(0, 1fr);
    grid-template-columns: minmax(0, 1fr);
  }

  [part~="textarea"] {
    position: relative;
    color: transparent;
    background-color: transparent;
    caret-color: black;
    z-index: 1;
    resize: both;
  }

  [part~="pre"] {
    border-color: transparent;
    max-height: var(--textarea-height);
    max-width: var(--textarea-width);
  }

  [part~="textarea"]:focus {
    outline: 2px solid dodgerblue;
  }

  [part~="pre"],
  [part~="textarea"] {
    overflow: auto;
    max-height: 100%;
    max-width: 100%;
    grid-area: 1/1/2/2;
    margin-bottom:0;
    margin: 0;
	  display: block;
	  line-height: 1.5;
    /* border: 2px solid red; */
    border: 1px solid transparent;
    position: relative;
    padding: 8px;

    /* this creates line-wrapping. */
	  word-break: break-word;
    white-space: pre-wrap;

    /* No wrapping */
	  /* word-break: break-all; */
    /* white-space: pre; */
    tab-size: 2;
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
