import {
  ShoelaceElement,
  component_styles_default,
  e
} from "/light-pen/bridgetown/static/chunks/chunk-FMMGJ35Y.js";
import {
  __decorateClass,
  i,
  x
} from "/light-pen/bridgetown/static/chunks/chunk-FJJKEZSU.js";
import "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VVA35HTY.js
var menu_styles_default = i`
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
`;

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DES35DCI.js
var SlMenu = class extends ShoelaceElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "menu");
  }
  handleClick(event) {
    const menuItemTypes = ["menuitem", "menuitemcheckbox"];
    const target = event.composedPath().find((el) => {
      var _a;
      return menuItemTypes.includes(((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) || "");
    });
    if (!target)
      return;
    const item = target;
    if (item.type === "checkbox") {
      item.checked = !item.checked;
    }
    this.emit("sl-select", { detail: { item } });
  }
  handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      const item = this.getCurrentItem();
      event.preventDefault();
      event.stopPropagation();
      item == null ? void 0 : item.click();
    } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      const items = this.getAllItems();
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;
      if (items.length > 0) {
        event.preventDefault();
        event.stopPropagation();
        if (event.key === "ArrowDown") {
          index++;
        } else if (event.key === "ArrowUp") {
          index--;
        } else if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = items.length - 1;
        }
        if (index < 0) {
          index = items.length - 1;
        }
        if (index > items.length - 1) {
          index = 0;
        }
        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
  }
  handleMouseDown(event) {
    const target = event.target;
    if (this.isMenuItem(target)) {
      this.setCurrentItem(target);
    }
  }
  handleSlotChange() {
    const items = this.getAllItems();
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }
  isMenuItem(item) {
    var _a;
    return item.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((_a = item.getAttribute("role")) != null ? _a : "");
  }
  /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
  getAllItems() {
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
      if (el.inert || !this.isMenuItem(el)) {
        return false;
      }
      return true;
    });
  }
  /**
   * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems().find((i2) => i2.getAttribute("tabindex") === "0");
  }
  /**
   * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */
  setCurrentItem(item) {
    const items = this.getAllItems();
    items.forEach((i2) => {
      i2.setAttribute("tabindex", i2 === item ? "0" : "-1");
    });
  }
  render() {
    return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
  }
};
SlMenu.styles = [component_styles_default, menu_styles_default];
__decorateClass([
  e("slot")
], SlMenu.prototype, "defaultSlot", 2);

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WJBFYL4X.js
var menu_default = SlMenu;
SlMenu.define("sl-menu");
export {
  menu_default as default
};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/menu-SDTWNHIR.js.map
