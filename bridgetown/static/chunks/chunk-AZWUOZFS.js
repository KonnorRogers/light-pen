var u=new WeakMap;function c(t){let e=u.get(t);return e||(e=window.getComputedStyle(t,null),u.set(t,e)),e}function b(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=c(t);return e.visibility!=="hidden"&&e.display!=="none"}function d(t){let e=c(t),{overflowY:i,overflowX:r}=e;return i==="scroll"||r==="scroll"?!0:i!=="auto"||r!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&r==="auto"}function f(t){let e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){let o=t.getRootNode(),a=`input[type='radio'][name="${t.getAttribute("name")}"]`,s=o.querySelector(`${a}:checked`);return s?s===t:o.querySelector(a)===t}return b(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:d(t):!1}function m(t){var e,i;let r=h(t),n=(e=r[0])!=null?e:null,o=(i=r[r.length-1])!=null?i:null;return{start:n,end:o}}function l(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function h(t){let e=new WeakMap,i=[];function r(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||e.has(n))return;e.set(n,!0),!i.includes(n)&&f(n)&&i.push(n),n instanceof HTMLSlotElement&&l(n,t)&&n.assignedElements({flatten:!0}).forEach(o=>{r(o)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&r(n.shadowRoot)}for(let o of n.children)r(o)}return r(t),i.sort((n,o)=>{let a=Number(n.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-a})}export{m as a,h as b};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-AZWUOZFS.js.map
