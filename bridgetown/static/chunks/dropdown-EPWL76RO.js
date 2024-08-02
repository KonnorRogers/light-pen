import{a as _}from"/light-pen/bridgetown/static/chunks/chunk-YJGMRAG5.js";import{a as D}from"/light-pen/bridgetown/static/chunks/chunk-75TSLKVB.js";import{a as l,b as d,c as h,d as c,e as m}from"/light-pen/bridgetown/static/chunks/chunk-PAIFLAWK.js";import{a as k}from"/light-pen/bridgetown/static/chunks/chunk-PGGNK7PV.js";import{a as E}from"/light-pen/bridgetown/static/chunks/chunk-3W6ZWJJN.js";import{d as b}from"/light-pen/bridgetown/static/chunks/chunk-UTKABHFO.js";import{a as w}from"/light-pen/bridgetown/static/chunks/chunk-5W4LDELN.js";import{a as y,b as n,d as p,e as v}from"/light-pen/bridgetown/static/chunks/chunk-WIQKRB6R.js";import{c as i,e as f,h as g}from"/light-pen/bridgetown/static/chunks/chunk-QKDQ67QM.js";import"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var C=f`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var o=class extends v{constructor(){super(...arguments),this.localize=new E(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,r,a;let u=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(a=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:a.activeElement:document.activeElement;(!this.containingElement||u?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let s=t.getAllItems(),r=s[0],a=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(a),a.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let t=this.trigger.assignedElements({flatten:!0}).find(r=>_(r).start),s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,h(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,h(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await m(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=d(this,"dropdown.show",{dir:this.localize.dir()});await c(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await m(this);let{keyframes:e,options:t}=d(this,"dropdown.hide",{dir:this.localize.dir()});await c(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return g`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${k(this.sync?this.sync:void 0)}
        class=${b({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};o.styles=[y,C];o.dependencies={"sl-popup":D};i([p(".dropdown")],o.prototype,"popup",2);i([p(".dropdown__trigger")],o.prototype,"trigger",2);i([p(".dropdown__panel")],o.prototype,"panel",2);i([n({type:Boolean,reflect:!0})],o.prototype,"open",2);i([n({reflect:!0})],o.prototype,"placement",2);i([n({type:Boolean,reflect:!0})],o.prototype,"disabled",2);i([n({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],o.prototype,"stayOpenOnSelect",2);i([n({attribute:!1})],o.prototype,"containingElement",2);i([n({type:Number})],o.prototype,"distance",2);i([n({type:Number})],o.prototype,"skidding",2);i([n({type:Boolean})],o.prototype,"hoist",2);i([n({reflect:!0})],o.prototype,"sync",2);i([w("open",{waitUntilFirstUpdate:!0})],o.prototype,"handleOpenChange",1);l("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});l("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var T=o;o.define("sl-dropdown");export{T as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/dropdown-EPWL76RO.js.map
