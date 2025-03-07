import{a as o}from"/light-pen/bridgetown/static/chunks/chunk-D72CGGEU.js";import{a as i,b as a,f as l}from"/light-pen/bridgetown/static/chunks/chunk-JABBWDD5.js";import{c as t}from"/light-pen/bridgetown/static/chunks/chunk-V26RQ3M3.js";import{a as e}from"/light-pen/bridgetown/static/chunks/chunk-B2DHJBAQ.js";import"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var s=e`
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/divider-T4VRDGBK.js.map
