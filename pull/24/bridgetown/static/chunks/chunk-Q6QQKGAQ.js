var o=new WeakMap;function s(t){let e=o.get(t);return e||(e=window.getComputedStyle(t,null),o.set(t,e)),e}function b(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=s(t);return e.visibility!=="hidden"&&e.display!=="none"}function c(t){let e=s(t),{overflowY:i,overflowX:r}=e;return i==="scroll"||r==="scroll"?!0:i!=="auto"||r!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&r==="auto"}function f(t){let e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!b(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:c(t)}function g(t){var e,i;let r=d(t),n=(e=r[0])!=null?e:null,a=(i=r[r.length-1])!=null?i:null;return{start:n,end:a}}function l(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function d(t){let e=new WeakMap,i=[];function r(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||e.has(n))return;e.set(n,!0),!i.includes(n)&&f(n)&&i.push(n),n instanceof HTMLSlotElement&&l(n,t)&&n.assignedElements({flatten:!0}).forEach(a=>{r(a)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&r(n.shadowRoot)}for(let a of n.children)r(a)}return r(t),i.sort((n,a)=>{let u=Number(n.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-u})}export{g as a,d as b};
//# sourceMappingURL=/light-pen/pull/24/bridgetown/static/chunks/chunk-Q6QQKGAQ.js.map
