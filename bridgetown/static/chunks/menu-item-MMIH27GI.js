import{a as L,b as E}from"/light-pen/bridgetown/static/chunks/chunk-VQNZKYJF.js";import{a as w}from"/light-pen/bridgetown/static/chunks/chunk-S6LJVYB7.js";import{a as _}from"/light-pen/bridgetown/static/chunks/chunk-D322MBJP.js";import{a as S,b as k}from"/light-pen/bridgetown/static/chunks/chunk-XTMCQKPB.js";import{a as C}from"/light-pen/bridgetown/static/chunks/chunk-GG6DRQQY.js";import{d as x}from"/light-pen/bridgetown/static/chunks/chunk-PLS6VE2H.js";import{a as y}from"/light-pen/bridgetown/static/chunks/chunk-IG2EA53Q.js";import"/light-pen/bridgetown/static/chunks/chunk-KFDUCRXX.js";import{a as p}from"/light-pen/bridgetown/static/chunks/chunk-D72CGGEU.js";import{a as v,b as l,e as c,f as g}from"/light-pen/bridgetown/static/chunks/chunk-JABBWDD5.js";import"/light-pen/bridgetown/static/chunks/chunk-V47G7R6H.js";import{c as n}from"/light-pen/bridgetown/static/chunks/chunk-V26RQ3M3.js";import{a as b,d as r}from"/light-pen/bridgetown/static/chunks/chunk-B2DHJBAQ.js";import"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var R=b`
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
`;var P=class{constructor(t,o){this.popupRef=L(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e);break;default:break}},this.handleClick=e=>{var i;e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName==="sl-menu-item"||(i=e.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector("slot[name='submenu']"),i=e?.assignedElements({flatten:!0}).filter(d=>d.localName==="sl-menu")[0],m=getComputedStyle(this.host).direction==="rtl";if(!i)return;let{left:a,top:u,width:h,height:f}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${m?a+h:a}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${u}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${m?a+h:a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${u+f}px`)},(this.host=t).addController(this),this.hasSlotController=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let o=this.host.renderRoot.querySelector("slot[name='submenu']");if(!o){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let e=null;for(let i of o.assignedElements())if(e=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),e.length!==0)break;if(!(!e||e.length===0)){e[0].setAttribute("tabindex","0");for(let i=1;i!==e.length;++i)e[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?e[0]instanceof HTMLElement&&e[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{e[0]instanceof HTMLElement&&e[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let o=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((m,a)=>{var u;let h=(u=o.get(a))!=null?u:new CSSUnitValue(0,"px"),d=(h instanceof CSSUnitValue?h:new CSSUnitValue(0,"px")).to("px");return m-d.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?r`
      <sl-popup
        ${E(this.popupRef)}
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
    `:r` <slot name="submenu" hidden></slot> `}};var s=class extends g{constructor(){super(...arguments),this.localize=new C(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new S(this,"submenu"),this.submenuController=new P(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return k(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",o=this.submenuController.isExpanded();return r`
      <div
        id="anchor"
        part="base"
        class=${x({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":o})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!o}"
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
        ${this.loading?r` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};s.styles=[v,R];s.dependencies={"sl-icon":y,"sl-popup":w,"sl-spinner":_};n([c("slot:not([name])")],s.prototype,"defaultSlot",2);n([c(".menu-item")],s.prototype,"menuItem",2);n([l()],s.prototype,"type",2);n([l({type:Boolean,reflect:!0})],s.prototype,"checked",2);n([l()],s.prototype,"value",2);n([l({type:Boolean,reflect:!0})],s.prototype,"loading",2);n([l({type:Boolean,reflect:!0})],s.prototype,"disabled",2);n([p("checked")],s.prototype,"handleCheckedChange",1);n([p("disabled")],s.prototype,"handleDisabledChange",1);n([p("type")],s.prototype,"handleTypeChange",1);var M=s;s.define("sl-menu-item");export{M as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/menu-item-MMIH27GI.js.map
