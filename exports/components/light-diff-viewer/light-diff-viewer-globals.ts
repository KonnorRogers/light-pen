import type LightDiffViewer from "./light-diff-viewer.js";

declare global {
  interface HTMLElementTagNameMap {
    "light-diff-viewer": LightDiffViewer;
  }
}

export {};
