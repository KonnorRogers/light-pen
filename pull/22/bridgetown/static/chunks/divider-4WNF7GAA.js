import{a as o}from"/light-pen/pull/22/bridgetown/static/chunks/chunk-Y52R3AAA.js";import{a as i,b as a,e as l}from"/light-pen/pull/22/bridgetown/static/chunks/chunk-QG2KNLH7.js";import{c as t,e}from"/light-pen/pull/22/bridgetown/static/chunks/chunk-C7MSINHI.js";import"/light-pen/pull/22/bridgetown/static/chunks/chunk-VTEOB7VH.js";var s=e`
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
//# sourceMappingURL=/light-pen/pull/22/bridgetown/static/chunks/divider-4WNF7GAA.js.map
