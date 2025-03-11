import{c as w}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-MQMVVAO7.js";import{a as x}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-YYJWCME4.js";import"/light-pen/pull/29/bridgetown/static/chunks/chunk-JYSDOVW5.js";import"/light-pen/pull/29/bridgetown/static/chunks/chunk-2BWQ46EQ.js";import{a as k}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-JNLJLPCI.js";import{d as y}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-WSQZ74VX.js";import"/light-pen/pull/29/bridgetown/static/chunks/chunk-W7OFWWXD.js";import"/light-pen/pull/29/bridgetown/static/chunks/chunk-C4LZISTX.js";import{a as p}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-M5MYWL2V.js";import{a as m,b as d,c as g,d as T,e as u,f as _}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-ROOSOYBY.js";import"/light-pen/pull/29/bridgetown/static/chunks/chunk-PJYDLBHM.js";import{a as S,c}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-S74L2EDM.js";import{a as v,d as h}from"/light-pen/pull/29/bridgetown/static/chunks/chunk-BXS6GG56.js";import"/light-pen/pull/29/bridgetown/static/chunks/chunk-HKAWXHZV.js";var C=v`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;var E=v`
  :host {
    display: contents;
  }
`;var f=class extends _{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(t!==null){let o=t.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],o.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return h` <slot @slotchange=${this.handleSlotChange}></slot> `}};f.styles=[m,E];c([d({type:Boolean,reflect:!0})],f.prototype,"disabled",2);c([p("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1);var i=class extends _{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new k(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(o=>{let e=o.filter(({target:r})=>{if(r===this)return!0;if(r.closest("sl-tab-group")!==this)return!1;let s=r.tagName.toLowerCase();return s==="sl-tab"||s==="sl-tab-panel"});if(e.length!==0){if(e.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(r=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(r=>r.attributeName==="active")){let s=e.filter(l=>l.attributeName==="active"&&l.target.tagName.toLowerCase()==="sl-tab").map(l=>l.target).find(l=>l.active);s&&this.setActiveTab(s)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((e,r)=>{var s;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),r.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,o;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((o=this.resizeObserver)==null||o.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let e=t.target.closest("sl-tab");e?.closest("sl-tab-group")===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){let e=t.target.closest("sl-tab");if(e?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let s=this.tabs.find(n=>n.matches(":focus")),l=this.localize.dir()==="rtl",a=null;if(s?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")a=this.focusableTabs[0];else if(t.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let n=this.tabs.findIndex(b=>b===s);a=this.findNextFocusableTab(n,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let n=this.tabs.findIndex(b=>b===s);a=this.findNextFocusableTab(n,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(n=>{n.tabIndex=n===a?0:-1}),["top","bottom"].includes(this.placement)&&w(a,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,o){if(o=S({emitEvents:!0,scrollBehavior:"auto"},o),t!==this.activeTab&&!t.disabled){let e=this.activeTab;this.activeTab=t,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var s;return r.active=r.name===((s=this.activeTab)==null?void 0:s.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&w(this.activeTab,this.nav,"horizontal",o.scrollBehavior),o.emitEvents&&(e&&this.emit("sl-tab-hide",{detail:{name:e.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let o=this.panels.find(e=>e.name===t.panel);o&&(t.setAttribute("aria-controls",o.getAttribute("id")),o.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let o=t.clientWidth,e=t.clientHeight,r=this.localize.dir()==="rtl",s=this.getAllTabs(),a=s.slice(0,s.indexOf(t)).reduce((n,b)=>({left:n.left+b.clientWidth,top:n.top+b.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${o}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*a.left}px`:`${a.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${e}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,o){let e=null,r=o==="forward"?1:-1,s=t+r;for(;t<this.tabs.length;){if(e=this.tabs[s]||null,e===null){o==="forward"?e=this.focusableTabs[0]:e=this.focusableTabs[this.focusableTabs.length-1];break}if(!e.disabled)break;s+=r}return e}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let o=this.tabs.find(e=>e.panel===t);o&&this.setActiveTab(o,{scrollBehavior:"smooth"})}render(){let t=this.localize.dir()==="rtl";return h`
      <div
        part="base"
        class=${y({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?h`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${y({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?h`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${y({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};i.styles=[m,C];i.dependencies={"sl-icon-button":x,"sl-resize-observer":f};c([u(".tab-group")],i.prototype,"tabGroup",2);c([u(".tab-group__body")],i.prototype,"body",2);c([u(".tab-group__nav")],i.prototype,"nav",2);c([u(".tab-group__indicator")],i.prototype,"indicator",2);c([g()],i.prototype,"hasScrollControls",2);c([g()],i.prototype,"shouldHideScrollStartButton",2);c([g()],i.prototype,"shouldHideScrollEndButton",2);c([d()],i.prototype,"placement",2);c([d()],i.prototype,"activation",2);c([d({attribute:"no-scroll-controls",type:Boolean})],i.prototype,"noScrollControls",2);c([d({attribute:"fixed-scroll-controls",type:Boolean})],i.prototype,"fixedScrollControls",2);c([T({passive:!0})],i.prototype,"updateScrollButtons",1);c([p("noScrollControls",{waitUntilFirstUpdate:!0})],i.prototype,"updateScrollControls",1);c([p("placement",{waitUntilFirstUpdate:!0})],i.prototype,"syncIndicator",1);var z=i;i.define("sl-tab-group");var O=(t,o)=>{let e=0;return function(...r){window.clearTimeout(e),e=window.setTimeout(()=>{t.call(this,...r)},o)}},A=(t,o,e)=>{let r=t[o];t[o]=function(...s){r.call(this,...s),e.call(this,r,...s)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){let o=new Set,e=new WeakMap,r=l=>{for(let a of l.changedTouches)o.add(a.identifier)},s=l=>{for(let a of l.changedTouches)o.delete(a.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",s,!0),document.addEventListener("touchcancel",s,!0),A(EventTarget.prototype,"addEventListener",function(l,a){if(a!=="scrollend")return;let n=O(()=>{o.size?n():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",n,{passive:!0}),e.set(this,n)}),A(EventTarget.prototype,"removeEventListener",function(l,a){if(a!=="scrollend")return;let n=e.get(this);n&&l.call(this,"scroll",n,{passive:!0})})}})();export{z as default};
//# sourceMappingURL=/light-pen/pull/29/bridgetown/static/chunks/tab-group-44BWOOCR.js.map
