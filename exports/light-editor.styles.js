import { css } from "lit"

export const styles = css`
  :host {
    --padding: 16px;
  }

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
    caret-color: darkgrey;
  }

  [part~="textarea"] {
    color: transparent;
    background-color: transparent;
    caret-color: black;
    z-index: 1;
    resize: none;
    position: absolute;
  }

  [part~="pre"] {
    border-color: transparent;
    position: relative;
  }

  [part~="base"]:focus-within {
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
    color: red;
  }

  [part~="pre"], [part~="textarea"], [part~="code"] {
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

    /* This would remove line-wrapping */
	  /* word-break: break-all; */
    /* white-space: pre; */

    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
  }

  [part~="pre"],
  [part~="textarea"] {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
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

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`
