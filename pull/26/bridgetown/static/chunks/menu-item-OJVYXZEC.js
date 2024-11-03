import{a as z}from"/light-pen/pull/26/bridgetown/static/chunks/chunk-53VHGALV.js";import{a as D}from"/light-pen/pull/26/bridgetown/static/chunks/chunk-52OK755M.js";import{a as P,b as R}from"/light-pen/pull/26/bridgetown/static/chunks/chunk-BZRHSEKZ.js";import{a as T}from"/light-pen/pull/26/bridgetown/static/chunks/chunk-KCZKTX2Z.js";import{a as L,b as y,c as E,d as M}from"/light-pen/pull/26/bridgetown/static/chunks/chunk-FITTXSLF.js";import{a as $,b as A}from"/light-pen/pull/26/bridgetown/static/chunks/chunk-O2J4Y3CP.js";import{a as d}from"/light-pen/pull/26/bridgetown/static/chunks/chunk-MKUW5YPL.js";import{a as k,b as u,e as g,f as w}from"/light-pen/pull/26/bridgetown/static/chunks/chunk-NWH6YPWT.js";import"/light-pen/pull/26/bridgetown/static/chunks/chunk-DF2LBGHB.js";import{c as r,h as C,k as l,o as v}from"/light-pen/pull/26/bridgetown/static/chunks/chunk-TPBWSZ5A.js";import"/light-pen/pull/26/bridgetown/static/chunks/chunk-VGTDG2PW.js";var O=C`
  :host {
    --submenu-offset: -2px;

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
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
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

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
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

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var p=(t,s)=>{let e=t._$AN;if(e===void 0)return!1;for(let i of e)i._$AO?.(s,!1),p(i,s);return!0},c=t=>{let s,e;do{if((s=t._$AM)===void 0)break;e=s._$AN,e.delete(t),t=s}while(e?.size===0)},Y=t=>{for(let s;s=t._$AM;t=s){let e=s._$AN;if(e===void 0)s._$AN=e=new Set;else if(e.has(t))break;e.add(t),q(s)}};function V(t){this._$AN!==void 0?(c(this),this._$AM=t,Y(this)):this._$AM=t}function U(t,s=!1,e=0){let i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(s)if(Array.isArray(i))for(let n=e;n<i.length;n++)p(i[n],!1),c(i[n]);else i!=null&&(p(i,!1),c(i));else p(this,t)}var q=t=>{t.type==L.CHILD&&(t._$AP??(t._$AP=U),t._$AQ??(t._$AQ=V))},f=class extends E{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,e,i){super._$AT(s,e,i),Y(this),this.isConnected=s._$AU}_$AO(s,e=!0){s!==this.isConnected&&(this.isConnected=s,s?this.reconnected?.():this.disconnected?.()),e&&(p(this,s),c(this))}setValue(s){if($(this._$Ct))this._$Ct._$AI(s,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=s,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var I=()=>new _,_=class{},x=new WeakMap,H=y(class extends f{render(t){return v}update(t,[s]){let e=s!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=t.options?.host,this.rt(this.ct=t.element)),v}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){let s=this.ht??globalThis,e=x.get(s);e===void 0&&(e=new WeakMap,x.set(s,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?x.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var N=class{constructor(t,s){this.popupRef=I(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e);break;default:break}},this.handleClick=e=>{var i;e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName==="sl-menu-item"||(i=e.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector("slot[name='submenu']"),i=e?.assignedElements({flatten:!0}).filter(b=>b.localName==="sl-menu")[0],a=getComputedStyle(this.host).direction==="rtl";if(!i)return;let{left:n,top:h,width:m,height:S}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${a?n+m:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${h}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${a?n+m:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${h+S}px`)},(this.host=t).addController(this),this.hasSlotController=s}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let s=this.host.renderRoot.querySelector("slot[name='submenu']");if(!s){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let e=null;for(let i of s.assignedElements())if(e=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),e.length!==0)break;if(!(!e||e.length===0)){e[0].setAttribute("tabindex","0");for(let i=1;i!==e.length;++i)e[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?e[0]instanceof HTMLElement&&e[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{e[0]instanceof HTMLElement&&e[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let s=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((a,n)=>{var h;let m=(h=s.get(n))!=null?h:new CSSUnitValue(0,"px"),b=(m instanceof CSSUnitValue?m:new CSSUnitValue(0,"px")).to("px");return a-b.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?l`
      <sl-popup
        ${H(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:l` <slot name="submenu" hidden></slot> `}};var o=class extends w{constructor(){super(...arguments),this.localize=new T(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new P(this,"submenu"),this.submenuController=new N(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return R(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",s=this.submenuController.isExpanded();return l`
      <div
        id="anchor"
        part="base"
        class=${M({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":s})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!s}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?l` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};o.styles=[k,O];o.dependencies={"sl-icon":A,"sl-popup":z,"sl-spinner":D};r([g("slot:not([name])")],o.prototype,"defaultSlot",2);r([g(".menu-item")],o.prototype,"menuItem",2);r([u()],o.prototype,"type",2);r([u({type:Boolean,reflect:!0})],o.prototype,"checked",2);r([u()],o.prototype,"value",2);r([u({type:Boolean,reflect:!0})],o.prototype,"loading",2);r([u({type:Boolean,reflect:!0})],o.prototype,"disabled",2);r([d("checked")],o.prototype,"handleCheckedChange",1);r([d("disabled")],o.prototype,"handleDisabledChange",1);r([d("type")],o.prototype,"handleTypeChange",1);var B=o;o.define("sl-menu-item");export{B as default};
/*! Bundled license information:

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/26/bridgetown/static/chunks/menu-item-OJVYXZEC.js.map
