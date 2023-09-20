import{a as S}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-2NFBZ7OJ.js";import{c as u}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-X4BBP6PO.js";import{a as i,b as d,c as _,d as c,e as h}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-BZB7XMMM.js";import{a as D}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-FIB3L6NB.js";import{a as L}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-YR2XZ57H.js";import"/light-pen/pull/3/bridgetown/static/chunks/chunk-NOYNQWQI.js";import"/light-pen/pull/3/bridgetown/static/chunks/chunk-DPAWXE7F.js";import{a as g}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-GGQ6O4D7.js";import{a as z,b as C}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-OAQWU2ST.js";import"/light-pen/pull/3/bridgetown/static/chunks/chunk-WGGMSSQV.js";import{c as a}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-PIM3DGF5.js";import{a as b}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-KKQER2G7.js";import{d as F}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-CZYFM34J.js";import"/light-pen/pull/3/bridgetown/static/chunks/chunk-WMRFCDIC.js";import{b as l,d as f}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-HOPUFK7M.js";import{a as x,c as v}from"/light-pen/pull/3/bridgetown/static/chunks/chunk-F7WCCHNZ.js";import"/light-pen/pull/3/bridgetown/static/chunks/chunk-6S5PKM65.js";var E=x`
  ${z}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var p=[],T=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=o=>{var r;if(o.key!=="Tab")return;o.shiftKey?this.tabDirection="backward":this.tabDirection="forward",o.preventDefault();let s=u(this.element),B=s[0],n=this.currentFocusIndex;if(n===-1){this.currentFocus=B,this.currentFocus.focus({preventScroll:!0});return}let w=this.tabDirection==="forward"?1:-1;n+w>=s.length?n=0:this.currentFocusIndex+w<0?n=s.length-1:n+=w,this.currentFocus=s[n],(r=this.currentFocus)==null||r.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){p.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){p=p.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return p[p.length-1]===this.element}checkFocus(){if(this.isActive()){let e=u(this.element);if(!this.element.matches(":focus-within")){let o=e[0],r=e[e.length-1],s=this.tabDirection==="forward"?o:r;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!0}))}}}get currentFocusIndex(){return u(this.element).findIndex(e=>e===this.currentFocus)}};var k=new Set;function I(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function m(e){if(k.add(e),!document.body.classList.contains("sl-scroll-lock")){let o=I();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${o}px`)}}function y(e){k.delete(e),k.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function A(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=class extends C{constructor(){super(...arguments),this.hasSlotController=new S(this,"footer"),this.localize=new D(this),this.modal=new T(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),m(this)))}disconnectedCallback(){super.disconnectedCallback(),y(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){let r=d(this,"drawer.denyClose",{dir:this.localize.dir()});c(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),m(this));let e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([h(this.drawer),h(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});let o=d(this,`drawer.show${A(this.placement)}`,{dir:this.localize.dir()}),r=d(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([c(this.panel,o.keyframes,o.options),c(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),y(this)),await Promise.all([h(this.drawer),h(this.overlay)]);let e=d(this,`drawer.hide${A(this.placement)}`,{dir:this.localize.dir()}),o=d(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([c(this.overlay,o.keyframes,o.options).then(()=>{this.overlay.hidden=!0}),c(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),m(this)),this.open&&this.contained&&(this.modal.deactivate(),y(this))}async show(){if(!this.open)return this.open=!0,_(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_(this,"sl-after-hide")}render(){return v`
      <div
        part="base"
        class=${F({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${b(this.noHeader?this.label:void 0)}
          aria-labelledby=${b(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":v`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};t.styles=E;t.dependencies={"sl-icon-button":L};a([f(".drawer")],t.prototype,"drawer",2);a([f(".drawer__panel")],t.prototype,"panel",2);a([f(".drawer__overlay")],t.prototype,"overlay",2);a([l({type:Boolean,reflect:!0})],t.prototype,"open",2);a([l({reflect:!0})],t.prototype,"label",2);a([l({reflect:!0})],t.prototype,"placement",2);a([l({type:Boolean,reflect:!0})],t.prototype,"contained",2);a([l({attribute:"no-header",type:Boolean,reflect:!0})],t.prototype,"noHeader",2);a([g("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);a([g("contained",{waitUntilFirstUpdate:!0})],t.prototype,"handleNoModalChange",1);i("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});i("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});i("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});i("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});i("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});i("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});i("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});i("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});i("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});i("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});i("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var K=t;t.define("sl-drawer");export{K as default};
//# sourceMappingURL=/light-pen/pull/3/bridgetown/static/chunks/drawer-DUWN3VBP.js.map
