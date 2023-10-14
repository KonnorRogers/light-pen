import{b as h}from"/light-pen/bridgetown/static/chunks/chunk-OTRC5XOJ.js";import{a as c}from"/light-pen/bridgetown/static/chunks/chunk-7KU557RW.js";import{a as s}from"/light-pen/bridgetown/static/chunks/chunk-KQTEUMDX.js";import{a as n,b as m}from"/light-pen/bridgetown/static/chunks/chunk-DXSFAFY6.js";import"/light-pen/bridgetown/static/chunks/chunk-3MKA4YYE.js";import{c as t}from"/light-pen/bridgetown/static/chunks/chunk-XSK7UXXH.js";import{d as u}from"/light-pen/bridgetown/static/chunks/chunk-N2HGT6U6.js";import"/light-pen/bridgetown/static/chunks/chunk-L36U2YZ3.js";import{b as i,d as o}from"/light-pen/bridgetown/static/chunks/chunk-R2JXFNI7.js";import{a,c as r}from"/light-pen/bridgetown/static/chunks/chunk-DEVOFCFG.js";import"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var p=a`
  ${n}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var e=class extends m{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1}handleDefaultSlotChange(){let l=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=l;return}l!==this.cachedTextLabel&&(this.cachedTextLabel=l,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return h(this.defaultSlot)}render(){return r`
      <div
        part="base"
        class=${u({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};e.styles=p;e.dependencies={"sl-icon":c};t([o("slot:not([name])")],e.prototype,"defaultSlot",2);t([o(".menu-item")],e.prototype,"menuItem",2);t([i()],e.prototype,"type",2);t([i({type:Boolean,reflect:!0})],e.prototype,"checked",2);t([i()],e.prototype,"value",2);t([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2);t([s("checked")],e.prototype,"handleCheckedChange",1);t([s("disabled")],e.prototype,"handleDisabledChange",1);t([s("type")],e.prototype,"handleTypeChange",1);var d=e;e.define("sl-menu-item");export{d as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/menu-item-LMQEGZMY.js.map
