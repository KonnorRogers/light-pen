import { css } from "lit";

export const previewStyles = css`
  :host {
    --border-color: lightgray;
  }

  :host,
  [part~="base"] {
    max-width: 100%;
  }

  :host([resizing]) [part=~"base"] {
    cursor: col-resize;
  }

  [part~="base"] {
    border: 1px solid var(--border-color);
    border-radius: 3px;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, auto) minmax(0, 1fr) repeat(
        3,
        minmax(0, auto)
      );
    height: 100%;
    min-height: inherit;
  }

  [part~="panel-resizer"] {
    display: grid;
    align-content: center;
    border-color: transparent;
    border-radius: 0;
    border-inline-start: 1px solid var(--border-color);
  }

  :host(:not([resize-position="100"])) [part~="panel-resizer"] {
    border-inline-end: 1px solid var(--border-color);
  }

  [part~="preview"] {
    display: grid;
    grid-template-columns:
      minmax(0, var(--start-panel-width, 1fr)) minmax(0, auto)
      minmax(0, var(--end-panel-width, auto));
    overflow: auto;
    resize: vertical;
    min-height: 100%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
  }

  [part~="start-panel"] {
    padding: 1rem;
    min-width: 100%;
    max-width: 100%;
  }

  [part~="end-panel"] {
    background-color: rgba(0, 0, 0, 0.025);
  }

  [part~="code-wrapper"] {
    border-top: 1px solid var(--border-color);
  }

  [part~="actions"] {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-template-columns: minmax(0, auto) minmax(0, 1fr) repeat(
        auto-fill,
        minmax(0, auto)
      );
    grid-template-rows: minmax(0, 1fr);
  }

  button[part~="source-code-toggle"] {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top: 1px solid var(--border-color);
    min-height: 100%;
    font-size: 1em;
    padding: 0.75rem;
  }

  [part~="source-code-toggle"] svg {
    transform-origin: 50% 50%;
    transition: 0.25s transform ease;
  }

  [part~="source-code-toggle"][aria-expanded="true"] svg {
    transform: rotate(180deg);
  }

  [part~="source-details"]::part(summary) {
    display: none;
  }
`;
