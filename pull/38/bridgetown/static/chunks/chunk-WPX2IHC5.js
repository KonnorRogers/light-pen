import{a as o,f as i,g as r}from"/light-pen/pull/38/bridgetown/static/chunks/chunk-LFPVEBVM.js";import{d as e}from"/light-pen/pull/38/bridgetown/static/chunks/chunk-VT6VFEU4.js";var p=o`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    white-space: nowrap;
  }

  [hidden] {
    display: none !important;
  }

  :host {
    display: block;
  }
`,a=o`
  .light-button {
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid gray;
    background-color: inherit;
    padding: 0.4em 0.6em;
    color: inherit;
    border-radius: 4px;
  }

  .light-button:focus-visible {
    outline: 2px solid hsl(203, 77%, 43%);
  }

  @supports not selector(:focus-visible) {
    .light-button:focus-within {
      outline: 2px solid hsl(203, 77%, 43%);
    }
  }

  .light-button:is(:active, :hover, .is-active) {
    cursor: pointer;
    color: hsla(203, 77%, 43%);
    background-color: hsla(203, 77%, 93%);
  }
`;var t=class extends r(i){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([n,s])=>{s.define(n)})}};e(t,"dependencies",{});export{p as a,a as b,t as c};
//# sourceMappingURL=/light-pen/pull/38/bridgetown/static/chunks/chunk-WPX2IHC5.js.map
