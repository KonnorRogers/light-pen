import{a as c,d,e as h}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-RCAZTZ7R.js";import{c as a,e as m,h as u}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-Y4MN5SGJ.js";import"/light-pen/pull/24/bridgetown/static/chunks/chunk-WUEJL3TN.js";var f=m`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;var n=class extends h{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){let t=["menuitem","menuitemcheckbox"],o=e.composedPath(),r=o.find(s=>{var l;return t.includes(((l=s?.getAttribute)==null?void 0:l.call(s,"role"))||"")});if(!r||o.find(s=>{var l;return((l=s?.getAttribute)==null?void 0:l.call(s,"role"))==="menu"})!==this)return;let i=r;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){let t=this.getAllItems(),o=this.getCurrentItem(),r=o?t.indexOf(o):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?r++:e.key==="ArrowUp"?r--:e.key==="Home"?r=0:e.key==="End"&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===e?"0":"-1")})}render(){return u`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};n.styles=[c,f];a([d("slot")],n.prototype,"defaultSlot",2);var p=n;n.define("sl-menu");export{p as default};
//# sourceMappingURL=/light-pen/pull/24/bridgetown/static/chunks/menu-E7O2A6DI.js.map
