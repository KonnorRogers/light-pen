import "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// node_modules/.pnpm/@github+clipboard-copy-element@1.3.0/node_modules/@github/clipboard-copy-element/dist/clipboard.js
function createNode(text) {
  const node = document.createElement("pre");
  node.style.width = "1px";
  node.style.height = "1px";
  node.style.position = "fixed";
  node.style.top = "5px";
  node.textContent = text;
  return node;
}
function copyNode(node) {
  if ("clipboard" in navigator) {
    return navigator.clipboard.writeText(node.textContent || "");
  }
  const selection = getSelection();
  if (selection == null) {
    return Promise.reject(new Error());
  }
  selection.removeAllRanges();
  const range = document.createRange();
  range.selectNodeContents(node);
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
  return Promise.resolve();
}
function copyText(text) {
  if ("clipboard" in navigator) {
    return navigator.clipboard.writeText(text);
  }
  const body = document.body;
  if (!body) {
    return Promise.reject(new Error());
  }
  const node = createNode(text);
  body.appendChild(node);
  copyNode(node);
  body.removeChild(node);
  return Promise.resolve();
}

// node_modules/.pnpm/@github+clipboard-copy-element@1.3.0/node_modules/@github/clipboard-copy-element/dist/clipboard-copy-element.js
async function copy(button) {
  const id = button.getAttribute("for");
  const text = button.getAttribute("value");
  function trigger() {
    button.dispatchEvent(new CustomEvent("clipboard-copy", { bubbles: true }));
  }
  if (button.getAttribute("aria-disabled") === "true") {
    return;
  }
  if (text) {
    await copyText(text);
    trigger();
  } else if (id) {
    const root2 = "getRootNode" in Element.prototype ? button.getRootNode() : button.ownerDocument;
    if (!(root2 instanceof Document || "ShadowRoot" in window && root2 instanceof ShadowRoot))
      return;
    const node = root2.getElementById(id);
    if (node) {
      await copyTarget(node);
      trigger();
    }
  }
}
function copyTarget(content) {
  if (content instanceof HTMLInputElement || content instanceof HTMLTextAreaElement) {
    return copyText(content.value);
  } else if (content instanceof HTMLAnchorElement && content.hasAttribute("href")) {
    return copyText(content.href);
  } else {
    return copyNode(content);
  }
}
function clicked(event) {
  const button = event.currentTarget;
  if (button instanceof HTMLElement) {
    copy(button);
  }
}
function keydown(event) {
  if (event.key === " " || event.key === "Enter") {
    const button = event.currentTarget;
    if (button instanceof HTMLElement) {
      event.preventDefault();
      copy(button);
    }
  }
}
function focused(event) {
  ;
  event.currentTarget.addEventListener("keydown", keydown);
}
function blurred(event) {
  ;
  event.currentTarget.removeEventListener("keydown", keydown);
}
var ClipboardCopyElement = class extends HTMLElement {
  static define(tag = "clipboard-copy", registry = customElements) {
    registry.define(tag, this);
    return this;
  }
  constructor() {
    super();
    this.addEventListener("click", clicked);
    this.addEventListener("focus", focused);
    this.addEventListener("blur", blurred);
  }
  connectedCallback() {
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", "0");
    }
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "button");
    }
  }
  get value() {
    return this.getAttribute("value") || "";
  }
  set value(text) {
    this.setAttribute("value", text);
  }
};

// node_modules/.pnpm/@github+clipboard-copy-element@1.3.0/node_modules/@github/clipboard-copy-element/dist/clipboard-copy-element-define.js
var root = typeof globalThis !== "undefined" ? globalThis : window;
try {
  root.ClipboardCopyElement = ClipboardCopyElement.define();
} catch (e) {
  if (!(root.DOMException && e instanceof DOMException && e.name === "NotSupportedError") && !(e instanceof ReferenceError)) {
    throw e;
  }
}

// node_modules/.pnpm/@github+clipboard-copy-element@1.3.0/node_modules/@github/clipboard-copy-element/dist/index.js
var dist_default = ClipboardCopyElement;
export {
  ClipboardCopyElement,
  dist_default as default
};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/dist-PBMMCNWZ.js.map
