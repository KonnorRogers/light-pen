import{a as f,b as y}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-JGITJXFZ.js";import{a as C}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-7VFE5ZJZ.js";import{a as D}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-3BVEEIBZ.js";import"/light-pen/pull/6/bridgetown/static/chunks/chunk-IVE26F35.js";import{c as u}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-PIYJUNDF.js";import{a as o,b as d,c as _,d as c,e as h}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-O54IZCGS.js";import{a as S}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-JUJEGTYR.js";import"/light-pen/pull/6/bridgetown/static/chunks/chunk-CIK6ETKP.js";import{a as g}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-NLFLPUQY.js";import{a as x,b as F}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-5FN4OZS4.js";import"/light-pen/pull/6/bridgetown/static/chunks/chunk-QAMQVVYG.js";import{c as i}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-NS5ROUHF.js";import{a as b}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-TVFLLAPA.js";import{d as z}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-FVQRS7CF.js";import"/light-pen/pull/6/bridgetown/static/chunks/chunk-P6BNF67N.js";import{b as l,d as m}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-QAQ5LPO4.js";import{a as k,c as v}from"/light-pen/pull/6/bridgetown/static/chunks/chunk-D7Z4J3PR.js";import"/light-pen/pull/6/bridgetown/static/chunks/chunk-S5ENCXQS.js";var E=k`
  ${x}

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
`;var p=[],L=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=a=>{var r;if(a.key!=="Tab")return;a.shiftKey?this.tabDirection="backward":this.tabDirection="forward",a.preventDefault();let s=u(this.element),K=s[0],n=this.currentFocusIndex;if(n===-1){this.currentFocus=K,this.currentFocus.focus({preventScroll:!0});return}let w=this.tabDirection==="forward"?1:-1;n+w>=s.length?n=0:this.currentFocusIndex+w<0?n=s.length-1:n+=w,this.currentFocus=s[n],(r=this.currentFocus)==null||r.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){p.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){p=p.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return p[p.length-1]===this.element}checkFocus(){if(this.isActive()){let e=u(this.element);if(!this.element.matches(":focus-within")){let a=e[0],r=e[e.length-1],s=this.tabDirection==="forward"?a:r;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!0}))}}}get currentFocusIndex(){return u(this.element).findIndex(e=>e===this.currentFocus)}};function A(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=class extends F{constructor(){super(...arguments),this.hasSlotController=new D(this,"footer"),this.localize=new S(this),this.modal=new L(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),f(this)))}disconnectedCallback(){super.disconnectedCallback(),y(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){let r=d(this,"drawer.denyClose",{dir:this.localize.dir()});c(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),f(this));let e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([h(this.drawer),h(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});let a=d(this,`drawer.show${A(this.placement)}`,{dir:this.localize.dir()}),r=d(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([c(this.panel,a.keyframes,a.options),c(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),y(this)),await Promise.all([h(this.drawer),h(this.overlay)]);let e=d(this,`drawer.hide${A(this.placement)}`,{dir:this.localize.dir()}),a=d(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([c(this.overlay,a.keyframes,a.options).then(()=>{this.overlay.hidden=!0}),c(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),f(this)),this.open&&this.contained&&(this.modal.deactivate(),y(this))}async show(){if(!this.open)return this.open=!0,_(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_(this,"sl-after-hide")}render(){return v`
      <div
        part="base"
        class=${z({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
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
    `}};t.styles=E;t.dependencies={"sl-icon-button":C};i([m(".drawer")],t.prototype,"drawer",2);i([m(".drawer__panel")],t.prototype,"panel",2);i([m(".drawer__overlay")],t.prototype,"overlay",2);i([l({type:Boolean,reflect:!0})],t.prototype,"open",2);i([l({reflect:!0})],t.prototype,"label",2);i([l({reflect:!0})],t.prototype,"placement",2);i([l({type:Boolean,reflect:!0})],t.prototype,"contained",2);i([l({attribute:"no-header",type:Boolean,reflect:!0})],t.prototype,"noHeader",2);i([g("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);i([g("contained",{waitUntilFirstUpdate:!0})],t.prototype,"handleNoModalChange",1);o("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});o("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});o("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});o("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});o("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});o("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});o("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});o("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});o("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});o("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});o("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var I=t;t.define("sl-drawer");export{I as default};
//# sourceMappingURL=/light-pen/pull/6/bridgetown/static/chunks/drawer-7FJ7ZYSV.js.map
