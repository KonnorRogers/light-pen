import{a as y,b as w}from"/light-pen/bridgetown/static/chunks/chunk-HFMDFC3Z.js";import{b as x}from"/light-pen/bridgetown/static/chunks/chunk-VIHG2TZE.js";import{a as r,b as d,c as k,d as c,e as p}from"/light-pen/bridgetown/static/chunks/chunk-ZBFA7TDJ.js";import{a as L}from"/light-pen/bridgetown/static/chunks/chunk-GQSSBS4X.js";import{a as K}from"/light-pen/bridgetown/static/chunks/chunk-5MYNBJJJ.js";import"/light-pen/bridgetown/static/chunks/chunk-RB5OU4KJ.js";import{a as _}from"/light-pen/bridgetown/static/chunks/chunk-DLNP32O3.js";import{a as T}from"/light-pen/bridgetown/static/chunks/chunk-OVPBN6ZV.js";import{d as S}from"/light-pen/bridgetown/static/chunks/chunk-UNPJ2DSG.js";import"/light-pen/bridgetown/static/chunks/chunk-CMFD53IX.js";import{a as g}from"/light-pen/bridgetown/static/chunks/chunk-YSDNA465.js";import{a as z,b as l,e as f,f as D}from"/light-pen/bridgetown/static/chunks/chunk-X4IQA3UQ.js";import"/light-pen/bridgetown/static/chunks/chunk-42BBDDUL.js";import{c as o,g as A,h as E,k as b}from"/light-pen/bridgetown/static/chunks/chunk-E5DRDSHK.js";import"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var q=E`
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
`;function*C(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*A(C(e.shadowRoot.activeElement))))}function I(){return[...C()].pop()}var u=[],$=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=a=>{var i;if(a.key!=="Tab"||this.isExternalActivated||!this.isActive())return;let s=I();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;a.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let m=x(this.element),n=m.findIndex(h=>h===s);this.previousFocus=this.currentFocus;let v=this.tabDirection==="forward"?1:-1;for(;;){n+v>=m.length?n=0:n+v<0?n=m.length-1:n+=v,this.previousFocus=this.currentFocus;let h=m[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||h&&this.possiblyHasTabbableChildren(h))return;a.preventDefault(),this.currentFocus=h,(i=this.currentFocus)==null||i.focus({preventScroll:!1});let F=[...C()];if(F.includes(this.currentFocus)||!F.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){u.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){u=u.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return u[u.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let e=x(this.element);if(!this.element.matches(":focus-within")){let a=e[0],i=e[e.length-1],s=this.tabDirection==="forward"?a:i;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=class extends D{constructor(){super(...arguments),this.hasSlotController=new K(this,"footer"),this.localize=new T(this),this.modal=new $(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),y(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),w(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){let i=d(this,"drawer.denyClose",{dir:this.localize.dir()});c(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),y(this));let e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([p(this.drawer),p(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});let a=d(this,`drawer.show${H(this.placement)}`,{dir:this.localize.dir()}),i=d(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([c(this.panel,a.keyframes,a.options),c(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),w(this)),await Promise.all([p(this.drawer),p(this.overlay)]);let e=d(this,`drawer.hide${H(this.placement)}`,{dir:this.localize.dir()}),a=d(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([c(this.overlay,a.keyframes,a.options).then(()=>{this.overlay.hidden=!0}),c(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),y(this)),this.open&&this.contained&&(this.modal.deactivate(),w(this))}async show(){if(!this.open)return this.open=!0,k(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,k(this,"sl-after-hide")}render(){return b`
      <div
        part="base"
        class=${S({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_(this.noHeader?this.label:void 0)}
          aria-labelledby=${_(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":b`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
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
    `}};t.styles=[z,q];t.dependencies={"sl-icon-button":L};o([f(".drawer")],t.prototype,"drawer",2);o([f(".drawer__panel")],t.prototype,"panel",2);o([f(".drawer__overlay")],t.prototype,"overlay",2);o([l({type:Boolean,reflect:!0})],t.prototype,"open",2);o([l({reflect:!0})],t.prototype,"label",2);o([l({reflect:!0})],t.prototype,"placement",2);o([l({type:Boolean,reflect:!0})],t.prototype,"contained",2);o([l({attribute:"no-header",type:Boolean,reflect:!0})],t.prototype,"noHeader",2);o([g("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);o([g("contained",{waitUntilFirstUpdate:!0})],t.prototype,"handleNoModalChange",1);r("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});r("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});r("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});r("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});r("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});r("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});r("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});r("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});r("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});r("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});r("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var U=t;t.define("sl-drawer");export{U as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/drawer-T3YOOMPY.js.map
