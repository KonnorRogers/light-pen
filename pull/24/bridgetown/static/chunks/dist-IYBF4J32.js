import"/light-pen/pull/24/bridgetown/static/chunks/chunk-WUEJL3TN.js";function f(e){let t=document.createElement("pre");return t.style.width="1px",t.style.height="1px",t.style.position="fixed",t.style.top="5px",t.textContent=e,t}function c(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e.textContent||"");let t=getSelection();if(t==null)return Promise.reject(new Error);t.removeAllRanges();let r=document.createRange();return r.selectNodeContents(e),t.addRange(r),document.execCommand("copy"),t.removeAllRanges(),Promise.resolve()}function n(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e);let t=document.body;if(!t)return Promise.reject(new Error);let r=f(e);return t.appendChild(r),c(r),t.removeChild(r),Promise.resolve()}async function u(e){let t=e.getAttribute("for"),r=e.getAttribute("value");function s(){e.dispatchEvent(new CustomEvent("clipboard-copy",{bubbles:!0}))}if(e.getAttribute("aria-disabled")!=="true"){if(r)await n(r),s();else if(t){let i="getRootNode"in Element.prototype?e.getRootNode():e.ownerDocument;if(!(i instanceof Document||"ShadowRoot"in window&&i instanceof ShadowRoot))return;let a=i.getElementById(t);a&&(await p(a),s())}}}function p(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?n(e.value):e instanceof HTMLAnchorElement&&e.hasAttribute("href")?n(e.href):c(e)}function m(e){let t=e.currentTarget;t instanceof HTMLElement&&u(t)}function d(e){if(e.key===" "||e.key==="Enter"){let t=e.currentTarget;t instanceof HTMLElement&&(e.preventDefault(),u(t))}}function b(e){e.currentTarget.addEventListener("keydown",d)}function h(e){e.currentTarget.removeEventListener("keydown",d)}var o=class extends HTMLElement{static define(t="clipboard-copy",r=customElements){return r.define(t,this),this}constructor(){super(),this.addEventListener("click",m),this.addEventListener("focus",b),this.addEventListener("blur",h)}connectedCallback(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.hasAttribute("role")||this.setAttribute("role","button")}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",t)}};var l=typeof globalThis<"u"?globalThis:window;try{l.ClipboardCopyElement=o.define()}catch(e){if(!(l.DOMException&&e instanceof DOMException&&e.name==="NotSupportedError")&&!(e instanceof ReferenceError))throw e}var A=o;export{o as ClipboardCopyElement,A as default};
//# sourceMappingURL=/light-pen/pull/24/bridgetown/static/chunks/dist-IYBF4J32.js.map
