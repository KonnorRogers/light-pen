import{a as D}from"/light-pen/bridgetown/static/chunks/chunk-C5HIMBIM.js";import{a as z}from"/light-pen/bridgetown/static/chunks/chunk-7QGEUMUS.js";import{a as P,b as R}from"/light-pen/bridgetown/static/chunks/chunk-6Q76TBHL.js";import{a as T}from"/light-pen/bridgetown/static/chunks/chunk-WE76K7MA.js";import{a as $,b as A}from"/light-pen/bridgetown/static/chunks/chunk-QC6BWUUW.js";import{a as L,b as x,c as E,d as M}from"/light-pen/bridgetown/static/chunks/chunk-56OIC4BS.js";import{a as d}from"/light-pen/bridgetown/static/chunks/chunk-CFZT3BKI.js";import{a as C,b as h,d as y,e as w}from"/light-pen/bridgetown/static/chunks/chunk-VRNLQ6RX.js";import"/light-pen/bridgetown/static/chunks/chunk-ZDIROVWJ.js";import{c as n,e as k,h as u,k as g}from"/light-pen/bridgetown/static/chunks/chunk-AMHIQVBS.js";import"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var O=k`
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
`;var p=(e,i)=>{let s=e._$AN;if(s===void 0)return!1;for(let t of s)t._$AO?.(i,!1),p(t,i);return!0},c=e=>{let i,s;do{if((i=e._$AM)===void 0)break;s=i._$AN,s.delete(e),e=i}while(s?.size===0)},Y=e=>{for(let i;i=e._$AM;e=i){let s=i._$AN;if(s===void 0)i._$AN=s=new Set;else if(s.has(e))break;s.add(e),B(i)}};function U(e){this._$AN!==void 0?(c(this),this._$AM=e,Y(this)):this._$AM=e}function q(e,i=!1,s=0){let t=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(i)if(Array.isArray(t))for(let a=s;a<t.length;a++)p(t[a],!1),c(t[a]);else t!=null&&(p(t,!1),c(t));else p(this,e)}var B=e=>{e.type==L.CHILD&&(e._$AP??(e._$AP=q),e._$AQ??(e._$AQ=U))},f=class extends E{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,s,t){super._$AT(i,s,t),Y(this),this.isConnected=i._$AU}_$AO(i,s=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),s&&(p(this,i),c(this))}setValue(i){if($(this._$Ct))this._$Ct._$AI(i,this);else{let s=[...this._$Ct._$AH];s[this._$Ci]=i,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};var I=()=>new S,S=class{},_=new WeakMap,H=x(class extends f{render(e){return g}update(e,[i]){let s=i!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=i,this.ht=e.options?.host,this.rt(this.ct=e.element)),g}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){let i=this.ht??globalThis,s=_.get(i);s===void 0&&(s=new WeakMap,_.set(i,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?_.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var N=class{constructor(e,i,s){this.popupRef=I(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t);break;default:break}},this.handleClick=t=>{var r;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&(t.target.tagName==="sl-menu-item"||(r=t.target.role)!=null&&r.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{let t=this.host.renderRoot.querySelector("slot[name='submenu']"),r=t?.assignedElements({flatten:!0}).filter(V=>V.localName==="sl-menu")[0],a=this.localize.dir()==="rtl";if(!r)return;let{left:l,top:m,width:b,height:v}=r.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${a?l+b:l}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${m}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${a?l+b:l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${m+v}px`)},(this.host=e).addController(this),this.hasSlotController=i,this.localize=s}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){let i=this.host.renderRoot.querySelector("slot[name='submenu']");if(!i){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(let t of i.assignedElements())if(s=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let t=1;t!==s.length;++t)s[t].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;let i=this.host.parentElement.computedStyleMap(),t=["padding-top","border-top-width","margin-top"].reduce((r,a)=>{var l;let m=(l=i.get(a))!=null?l:new CSSUnitValue(0,"px"),v=(m instanceof CSSUnitValue?m:new CSSUnitValue(0,"px")).to("px");return r-v.value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=this.localize.dir()==="ltr";return this.isConnected?u`
      <sl-popup
        ${H(this.popupRef)}
        placement=${e?"right-start":"left-start"}
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
    `:u` <slot name="submenu" hidden></slot> `}};var o=class extends w{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new T(this),this.hasSlotController=new P(this,"submenu"),this.submenuController=new N(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return R(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let e=this.localize.dir()==="rtl",i=this.submenuController.isExpanded();return u`
      <div
        id="anchor"
        part="base"
        class=${M({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":i})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!i}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?u` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};o.styles=[C,O];o.dependencies={"sl-icon":A,"sl-popup":D,"sl-spinner":z};n([y("slot:not([name])")],o.prototype,"defaultSlot",2);n([y(".menu-item")],o.prototype,"menuItem",2);n([h()],o.prototype,"type",2);n([h({type:Boolean,reflect:!0})],o.prototype,"checked",2);n([h()],o.prototype,"value",2);n([h({type:Boolean,reflect:!0})],o.prototype,"loading",2);n([h({type:Boolean,reflect:!0})],o.prototype,"disabled",2);n([d("checked")],o.prototype,"handleCheckedChange",1);n([d("disabled")],o.prototype,"handleDisabledChange",1);n([d("type")],o.prototype,"handleTypeChange",1);var F=o;o.define("sl-menu-item");export{F as default};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/menu-item-OJTEOD5B.js.map
