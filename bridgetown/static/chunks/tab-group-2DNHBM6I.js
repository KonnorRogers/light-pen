import{c as g}from"/light-pen/bridgetown/static/chunks/chunk-UCZHVT7R.js";import{a as T}from"/light-pen/bridgetown/static/chunks/chunk-H2XXKRA3.js";import"/light-pen/bridgetown/static/chunks/chunk-BK3ML4GY.js";import"/light-pen/bridgetown/static/chunks/chunk-PGGNK7PV.js";import{a as x}from"/light-pen/bridgetown/static/chunks/chunk-3W6ZWJJN.js";import{d as w}from"/light-pen/bridgetown/static/chunks/chunk-UTKABHFO.js";import"/light-pen/bridgetown/static/chunks/chunk-3YE3HZWY.js";import{a as u}from"/light-pen/bridgetown/static/chunks/chunk-5W4LDELN.js";import{a as v,b as d,c as _,d as b,e as y}from"/light-pen/bridgetown/static/chunks/chunk-WIQKRB6R.js";import"/light-pen/bridgetown/static/chunks/chunk-GJX3RZFE.js";import{a as m,c as n,e as f,h as p}from"/light-pen/bridgetown/static/chunks/chunk-QKDQ67QM.js";import"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var k=f`
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
`;var s=class extends y{constructor(){super(...arguments),this.localize=new x(this),this.tabs=[],this.focusableTabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(a=>{a.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),a.some(o=>o.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((o,r)=>{var e;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((e=this.getActiveTab())!=null?e:this.tabs[0],{emitEvents:!1}),r.unobserve(o[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let o=t.target.closest("sl-tab");o?.closest("sl-tab-group")===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(t){let o=t.target.closest("sl-tab");if(o?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let e=this.tabs.find(l=>l.matches(":focus")),h=this.matches(":dir(rtl)"),i=null;if(e?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")i=this.focusableTabs[0];else if(t.key==="End")i=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(h?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let l=this.tabs.findIndex(c=>c===e);i=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(h?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let l=this.tabs.findIndex(c=>c===e);i=this.findNextFocusableTab(l,"forward")}if(!i)return;i.tabIndex=0,i.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(i,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===i?0:-1}),["top","bottom"].includes(this.placement)&&g(i,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,a){if(a=m({emitEvents:!0,scrollBehavior:"auto"},a),t!==this.activeTab&&!t.disabled){let o=this.activeTab;this.activeTab=t,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var e;return r.active=r.name===((e=this.activeTab)==null?void 0:e.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&g(this.activeTab,this.nav,"horizontal",a.scrollBehavior),a.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let a=this.panels.find(o=>o.name===t.panel);a&&(t.setAttribute("aria-controls",a.getAttribute("id")),a.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let a=t.clientWidth,o=t.clientHeight,r=this.matches(":dir(rtl)"),e=this.getAllTabs(),i=e.slice(0,e.indexOf(t)).reduce((l,c)=>({left:l.left+c.clientWidth,top:l.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${a}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*i.left}px`:`${i.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${i.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,a){let o=null,r=a==="forward"?1:-1,e=t+r;for(;t<this.tabs.length;){if(o=this.tabs[e]||null,o===null){a==="forward"?o=this.focusableTabs[0]:o=this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;e+=r}return o}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let a=this.tabs.find(o=>o.panel===t);a&&this.setActiveTab(a,{scrollBehavior:"smooth"})}render(){let t=this.matches(":dir(rtl)");return p`
      <div
        part="base"
        class=${w({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?p`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?p`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};s.styles=[v,k];s.dependencies={"sl-icon-button":T};n([b(".tab-group")],s.prototype,"tabGroup",2);n([b(".tab-group__body")],s.prototype,"body",2);n([b(".tab-group__nav")],s.prototype,"nav",2);n([b(".tab-group__indicator")],s.prototype,"indicator",2);n([_()],s.prototype,"hasScrollControls",2);n([d()],s.prototype,"placement",2);n([d()],s.prototype,"activation",2);n([d({attribute:"no-scroll-controls",type:Boolean})],s.prototype,"noScrollControls",2);n([u("noScrollControls",{waitUntilFirstUpdate:!0})],s.prototype,"updateScrollControls",1);n([u("placement",{waitUntilFirstUpdate:!0})],s.prototype,"syncIndicator",1);var A=s;s.define("sl-tab-group");export{A as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/tab-group-2DNHBM6I.js.map
