var a=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{let s=o.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function n(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),o="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(o+=s.textContent)}),o}export{a,n as b};
//# sourceMappingURL=/light-pen/pull/24/bridgetown/static/chunks/chunk-3HNSE3R5.js.map
