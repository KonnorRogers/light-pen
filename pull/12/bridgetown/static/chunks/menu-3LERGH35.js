import{a,b as u}from"/light-pen/pull/12/bridgetown/static/chunks/chunk-EUBPTJNT.js";import{c as o}from"/light-pen/pull/12/bridgetown/static/chunks/chunk-3YNDUWTW.js";import{d as m}from"/light-pen/pull/12/bridgetown/static/chunks/chunk-32W54Y7R.js";import{a as i,c as n}from"/light-pen/pull/12/bridgetown/static/chunks/chunk-XQ3BZZTQ.js";import"/light-pen/pull/12/bridgetown/static/chunks/chunk-ZKAXVUK7.js";var d=i`
  ${a}

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
`;var s=class extends u{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){let r=e.target.closest("sl-menu-item");!r||r.disabled||r.inert||(r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}}))}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){let t=this.getCurrentItem();e.preventDefault(),t?.click()}if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){let t=this.getAllItems(),r=this.getCurrentItem(),l=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.key==="ArrowDown"?l++:e.key==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=t.length-1),l<0&&(l=t.length-1),l>t.length-1&&(l=0),this.setCurrentItem(t[l]),t[l].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return n`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};s.styles=d;o([m("slot")],s.prototype,"defaultSlot",2);var c=s;s.define("sl-menu");export{c as default};
//# sourceMappingURL=/light-pen/pull/12/bridgetown/static/chunks/menu-3LERGH35.js.map
