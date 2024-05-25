import{a as u,d,e as c}from"/light-pen/bridgetown/static/chunks/chunk-YAQ76TSA.js";import{c as n,e as a,h as m}from"/light-pen/bridgetown/static/chunks/chunk-3KX6C2IT.js";import"/light-pen/bridgetown/static/chunks/chunk-6NDGNSQO.js";var h=a`
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
`;var l=class extends c{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){let t=["menuitem","menuitemcheckbox"],o=e.composedPath().find(s=>{var i;return t.includes(((i=s?.getAttribute)==null?void 0:i.call(s,"role"))||"")});if(!o)return;let r=o;r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){let t=this.getAllItems(),o=this.getCurrentItem(),r=o?t.indexOf(o):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?r++:e.key==="ArrowUp"?r--:e.key==="Home"?r=0:e.key==="End"&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===e?"0":"-1")})}render(){return m`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};l.styles=[u,h];n([d("slot")],l.prototype,"defaultSlot",2);var f=l;l.define("sl-menu");export{f as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/menu-UVZ5W4EH.js.map
