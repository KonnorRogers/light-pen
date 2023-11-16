import { css } from "lit"
export const styles = css`
[part~="sandbox-iframe"] {
  width: 100%;
  height: 100%;
  border: 1px solid darkgray;
}

[part~="sandbox-editor"]::part(base) {
  resize: vertical;
}

[part~="sandbox"] {
  color:#272727;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, auto) minmax(0, 1fr);
}

[part~="summary"] {
  display: inline-block;
  margin: 6px 0px;
}

[part~="disclosure"]::part(summary) {
  margin: 6px 0px;
}

[part~="base"] {
	word-wrap: break-word;
	color: inherit;
	font-size: 1em;
}

[part~="details"] {
  padding: 4px;
}

[part~="details"]:not(:first-child) {
}

[part~="sandbox"],
[part~="base"] {
  height: 100%;
}

[part~="sandbox-iframe"] {
  aspect-ratio:auto;
  background-color: #fff;
  margin-bottom: 0;
}

[part~="base"],
[part~="pre"],
[part~="code"],
[part~="sandbox-iframe"] {
  border-radius:.25rem;
}

[part~='sandbox-header'],
[part~="sandbox-console"],
[part~="sandbox-console-result"] {
  background-color:#343d4d;
  color: #fff;
}

[part~="sandbox-header"] {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8125em;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

[part~="sandbox-console"],
[part~="sandbox-content"] {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  background-color: #e5e5e5;
}


[part~='sandbox-controls'] button {
  margin-bottom: 0;
}

[part~="sandbox-console-log"] {
  font-family: Menlo,Monaco,"Courier New",monospace;
  font-size: 0.875em;
  min-height: 1.2em;
}

.log-warn {
  color:#f9d767
}

.log-error {
  color:#f9c8c8
}

[part~="sandbox-header"],
[part~="sandbox-code"],
[part~="sandbox-iframe-wrapper"],
[part~="sandbox-console"],
[part~="sandbox-console-result"] {
  padding: 0.5em;
}

[part~="sandbox-code"] {
  max-height: 100%;
  overflow-y: auto;
}

[part~="sandbox-code"] > *:not(:first-child) {
  margin-top: 6px;
}


button:where([part~="panel-resizer"]) {
  height: calc(100% - 0.5em);
  cursor: col-resize;
  background-color: white;
}

button[part~="panel-resizer"]:is(:active, :hover, .is-active) {
  cursor: col-resize;
}

[resizing],
[part~="panel-resizer"].is-active {
  cursor: col-resize;
}

[part~="sandbox-content"] {
  display:grid;
  grid-template-columns: minmax(var(--start-panel-min-width, 30px),var(--start-panel-width, 1fr)) minmax(0, auto) minmax(var(--end-panel-min-width, 30px), var(--end-panel-width, 1fr));
  grid-template-rows: minmax(0, 1fr);
}

[part~="sandbox-console-result"] {
  border-top:1px solid #1f252f;
  border-bottom-left-radius:0;
}
`
