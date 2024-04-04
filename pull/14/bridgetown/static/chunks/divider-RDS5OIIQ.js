import{a as i}from"/light-pen/pull/14/bridgetown/static/chunks/chunk-OQUENHKC.js";import{a as o,b as l}from"/light-pen/pull/14/bridgetown/static/chunks/chunk-5VQKKJ7Y.js";import{c as t}from"/light-pen/pull/14/bridgetown/static/chunks/chunk-PFVSXHD7.js";import{b as a}from"/light-pen/pull/14/bridgetown/static/chunks/chunk-3GNZZ4PN.js";import{a as e}from"/light-pen/pull/14/bridgetown/static/chunks/chunk-FZECI4GM.js";import"/light-pen/pull/14/bridgetown/static/chunks/chunk-B3BOVTID.js";var s=e`
  ${o}

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
`;var r=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};r.styles=s;t([a({type:Boolean,reflect:!0})],r.prototype,"vertical",2);t([i("vertical")],r.prototype,"handleVerticalChange",1);var p=r;r.define("sl-divider");export{p as default};
//# sourceMappingURL=/light-pen/pull/14/bridgetown/static/chunks/divider-RDS5OIIQ.js.map
