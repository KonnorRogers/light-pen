import{a as d}from"/light-pen/bridgetown/static/chunks/chunk-J4OH4D6I.js";import{a as b}from"/light-pen/bridgetown/static/chunks/chunk-ZTH56Y6K.js";import"/light-pen/bridgetown/static/chunks/chunk-LLVC5RN2.js";import"/light-pen/bridgetown/static/chunks/chunk-7KU557RW.js";import{a as i}from"/light-pen/bridgetown/static/chunks/chunk-KQTEUMDX.js";import{a as r,b as c}from"/light-pen/bridgetown/static/chunks/chunk-DXSFAFY6.js";import"/light-pen/bridgetown/static/chunks/chunk-3MKA4YYE.js";import{c as e}from"/light-pen/bridgetown/static/chunks/chunk-XSK7UXXH.js";import"/light-pen/bridgetown/static/chunks/chunk-VVXSQYSM.js";import{d as p}from"/light-pen/bridgetown/static/chunks/chunk-N2HGT6U6.js";import"/light-pen/bridgetown/static/chunks/chunk-L36U2YZ3.js";import{b as a,d as n}from"/light-pen/bridgetown/static/chunks/chunk-R2JXFNI7.js";import{a as l,c as s}from"/light-pen/bridgetown/static/chunks/chunk-DEVOFCFG.js";import"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var m=l`
  ${r}

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
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
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
`;var f=0,t=class extends c{constructor(){super(...arguments),this.localize=new d(this),this.attrId=++f,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(o){o.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(o){this.tab.focus(o)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,s`
      <div
        part="base"
        class=${p({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?s`
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
    `}};t.styles=m;t.dependencies={"sl-icon-button":b};e([n(".tab")],t.prototype,"tab",2);e([a({reflect:!0})],t.prototype,"panel",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([a({type:Boolean})],t.prototype,"closable",2);e([a({type:Boolean,reflect:!0})],t.prototype,"disabled",2);e([i("active")],t.prototype,"handleActiveChange",1);e([i("disabled")],t.prototype,"handleDisabledChange",1);var u=t;t.define("sl-tab");export{u as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/tab-JRXGYC2N.js.map
