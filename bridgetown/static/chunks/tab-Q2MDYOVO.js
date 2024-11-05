import{a as p}from"/light-pen/bridgetown/static/chunks/chunk-GQSSBS4X.js";import"/light-pen/bridgetown/static/chunks/chunk-RB5OU4KJ.js";import"/light-pen/bridgetown/static/chunks/chunk-DLNP32O3.js";import{a as d}from"/light-pen/bridgetown/static/chunks/chunk-OVPBN6ZV.js";import{d as c}from"/light-pen/bridgetown/static/chunks/chunk-UNPJ2DSG.js";import"/light-pen/bridgetown/static/chunks/chunk-CMFD53IX.js";import{a as s}from"/light-pen/bridgetown/static/chunks/chunk-YSDNA465.js";import{a as l,b as a,e as r,f as n}from"/light-pen/bridgetown/static/chunks/chunk-X4IQA3UQ.js";import"/light-pen/bridgetown/static/chunks/chunk-42BBDDUL.js";import{c as e,h as i,k as o}from"/light-pen/bridgetown/static/chunks/chunk-E5DRDSHK.js";import"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var b=i`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var f=0,t=class extends n{constructor(){super(...arguments),this.localize=new d(this),this.attrId=++f,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(m){m.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,o`
      <div
        part="base"
        class=${c({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?o`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};t.styles=[l,b];t.dependencies={"sl-icon-button":p};e([r(".tab")],t.prototype,"tab",2);e([a({reflect:!0})],t.prototype,"panel",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([a({type:Boolean,reflect:!0})],t.prototype,"closable",2);e([a({type:Boolean,reflect:!0})],t.prototype,"disabled",2);e([a({type:Number,reflect:!0})],t.prototype,"tabIndex",2);e([s("active")],t.prototype,"handleActiveChange",1);e([s("disabled")],t.prototype,"handleDisabledChange",1);var h=t;t.define("sl-tab");export{h as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/tab-Q2MDYOVO.js.map