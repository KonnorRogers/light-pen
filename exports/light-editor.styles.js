import { css } from "lit"

export const styles = css`
  [part~="base"] {
	  font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 1rem;
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
    caret-color: black;
    counter-reset: linenumber 0;
    display: grid;
    grid-template-columns: minmax(0, auto) minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    border: 1px solid gray;
  }

  /* Include "pre" if line numbers are disabled */
  [part~="textarea"], .light-line {
    padding: 0px;
    padding-inline-start: 6px;
  }

  /** @TODO: If line numbers disabled */
  :host([line-numbers="disabled"]) .light-line {
    padding-inline-start: 0px;
  }

  :host([line-numbers="disabled"]) [part~="pre"] {
    padding-inline-start: 6px;
  }

  [part~="textarea"] {
    color: transparent;
    /* color: rgba(255,0,0,0.2); */
    background-color: transparent;
    caret-color: inherit;
    z-index: 1;
    resize: none;
  }

  [part~="pre"] {
    border-color: transparent;
    position: relative;
  }

  [part~="base"]:focus-within {
    border-color: dodgerblue;
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
  }

  [part~="pre"], [part~="textarea"], [part~="code"], [part~="gutter"] {
    /* I don't love this, but it fixes font size inconsistencies on mobile. The alternative is listen for font-size changes, which is...challenging. */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;

    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;

    /* this creates line-wrapping. */
	  word-break: break-word;
    white-space: pre-wrap;
  }

  :host([wrap="none"]) :is([part~="pre"], [part~="textarea"], [part~="code"], [part~="gutter"]) {
    /* This would remove line-wrapping */
	  word-break: break-all;
    white-space: pre;
  }

  /** Hide scrollbars for the gutter */
  [part~="gutter"]::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }

  [part~="gutter-cell"] {
    padding-inline-end: 16px;
    padding-inline-start: 12px;
  }

  [part~="gutter"] {
    color: rgba(0,0,0,0.35);
	  background-color: rgba(50,50,50,0.08);
    font-variant-numeric: tabular-nums;
    border-inline-end: 1px solid darkgray;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;

    /* this creates line-wrapping. */
	  word-break: break-word;
    white-space: pre-wrap;
    text-align: end;
  }

  [part~="gutter-cell"] {
    font-size: 100%;
    display: block;
  }

  [part~="gutter-cell"] {
    font-size: 100%;
    display: block;
  }

  .light-line {
    display: inline-block;
    width: 100%;
  }

  [part~="base"]:focus-within .light-line.is-active {
    background-color: rgba(255,255,209,1);
  }

  /* We don't want to show the focus position if the user hasn't interacted with the textarea. */
  :where(:host([has-interacted]) .light-line.is-active) {
    background-color: rgba(0,0,0,0.05);
  }

  [part~="gutter-cell"][part~="gutter-cell--active"] {
    background-color: rgba(0,0,0,0.05);
  }


  [part~="base-editor"] {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
  }

  [part~="pre"],
  [part~="textarea"] {
    grid-area: 1/1/2/2;
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
    overflow: auto;
    border: none;
  }

  [part~="textarea"]::placeholder {
    color: rgba(0,0,0,0.5);
  }

  [part~="pre"] {
	  color: #272727;
  }

  [part~="gutter"],
  [part~="pre"] {
	  background-color: #f7f7f7;
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`
