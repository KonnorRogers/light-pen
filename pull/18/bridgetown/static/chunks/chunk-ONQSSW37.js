import{a as s,b as h}from"/light-pen/pull/18/bridgetown/static/chunks/chunk-WXJL2ALG.js";import{a as i}from"/light-pen/pull/18/bridgetown/static/chunks/chunk-VPC6CG3L.js";import{b}from"/light-pen/pull/18/bridgetown/static/chunks/chunk-T3LLO5CX.js";import{d as p}from"/light-pen/pull/18/bridgetown/static/chunks/chunk-WQQI7NK5.js";import{a,b as r,c,d as u,e as d}from"/light-pen/pull/18/bridgetown/static/chunks/chunk-F74V6DR3.js";import{c as e,e as l}from"/light-pen/pull/18/bridgetown/static/chunks/chunk-JW6XAHUG.js";var f=l`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var t=class extends d{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(o){this.disabled&&(o.preventDefault(),o.stopPropagation())}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}render(){let o=!!this.href,n=o?s`a`:s`button`;return h`
      <${n}
        part="base"
        class=${p({"icon-button":!0,"icon-button--disabled":!o&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${i(o?void 0:this.disabled)}
        type=${i(o?void 0:"button")}
        href=${i(o?this.href:void 0)}
        target=${i(o?this.target:void 0)}
        download=${i(o?this.download:void 0)}
        rel=${i(o&&this.target?"noreferrer noopener":void 0)}
        role=${i(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${i(this.name)}
          library=${i(this.library)}
          src=${i(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${n}>
    `}};t.styles=[a,f];t.dependencies={"sl-icon":b};e([u(".icon-button")],t.prototype,"button",2);e([c()],t.prototype,"hasFocus",2);e([r()],t.prototype,"name",2);e([r()],t.prototype,"library",2);e([r()],t.prototype,"src",2);e([r()],t.prototype,"href",2);e([r()],t.prototype,"target",2);e([r()],t.prototype,"download",2);e([r()],t.prototype,"label",2);e([r({type:Boolean,reflect:!0})],t.prototype,"disabled",2);export{t as a};
//# sourceMappingURL=/light-pen/pull/18/bridgetown/static/chunks/chunk-ONQSSW37.js.map
