import { css } from "lit"

export const styles = css`
  [part~="base"] {
    display:grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    column-gap: 0;
    row-gap: 0;
    position: relative;
    padding-top: 3px;
  }

  [part~="textarea"] {
    position: relative;
    color: transparent;
    background-color: transparent;
    caret-color: black;
    z-index: 1;
    resize: vertical;
  }

  [part~="pre"],
  [part~="textarea"] {
    grid-area:1/1/2/2;
    margin-bottom:0;
    min-height:15em;
    margin: 0;
    padding: 0;
	  display: block;
	  line-height: 1.5;
    padding: 8px;
    border: none;
    overflow: auto;
    position: relative;

    height: var(--textarea-height, auto);
    width: var(--textarea-width, auto);
    max-width: 100%;
    max-height: 100%;

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
