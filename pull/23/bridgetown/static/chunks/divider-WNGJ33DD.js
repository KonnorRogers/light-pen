import{a as o}from"/light-pen/pull/23/bridgetown/static/chunks/chunk-XE3BITB5.js";import{a as i,b as a,e as l}from"/light-pen/pull/23/bridgetown/static/chunks/chunk-X2T3LC5W.js";import{c as t,e}from"/light-pen/pull/23/bridgetown/static/chunks/chunk-VBK3XDE4.js";import"/light-pen/pull/23/bridgetown/static/chunks/chunk-X54Q4SAE.js";var s=e`
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
//# sourceMappingURL=/light-pen/pull/23/bridgetown/static/chunks/divider-WNGJ33DD.js.map