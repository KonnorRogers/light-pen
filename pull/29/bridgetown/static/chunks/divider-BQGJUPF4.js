import{a as o}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-M5MYWL2V.js";import{a as i,b as a,f as l}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-ROOSOYBY.js";import{c as t}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-S74L2EDM.js";import{a as e}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-BXS6GG56.js";import"/light-pen/pull/29/bridgetown/static/chunks/chunk-HKAWXHZV.js";var s=e`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var r=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};r.styles=[i,s];t([a({type:Boolean,reflect:!0})],r.prototype,"vertical",2);t([o("vertical")],r.prototype,"handleVerticalChange",1);var p=r;r.define("sl-divider");export{p as default};
//# sourceMappingURL=/light-pen/pull/29/bridgetown/static/chunks/divider-BQGJUPF4.js.map
