import{a as l,b as r,d as m,g as u,s as c}from"/light-pen/bridgetown/static/chunks/chunk-ADI3EQOI.js";import{d as i}from"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";function y(n,t,e){return t<n?n:t>e?e:t}function x(n,t){function e(a){let d=n.getBoundingClientRect(),p=n.ownerDocument.defaultView,f=d.left+(p?.pageXOffset||0),h=d.top+(p?.pageYOffset||0),g=a.pageX-f,v=a.pageY-h;t?.onMove&&t.onMove(g,v)}function s(){document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",s),t?.onStop&&t.onStop()}document.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("pointerup",s),t?.initialEvent instanceof PointerEvent&&e(t.initialEvent)}var A=r`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16" part="svg"><path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>`;function w(){return window.matchMedia("(prefers-reduced-motion: reduce)")===!0||window.matchMedia("(prefers-reduced-motion: reduce)").matches===!0}var o=class extends c{constructor(){super(),this.summary="",this.open=!1,this._openOnToggle=!0}willUpdate(t){let e=this.details;e&&t.has("open")&&(this.open?(e.open=this.open,this._openOnToggle=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.setAttribute("expanded",""),this._openOnToggle=!0,this.dispatchEvent(new Event("light-toggle"))})})):(e.hasAttribute("expanded")?e.removeAttribute("expanded"):e.open=this.open,w()&&(e.open=this.open),this.dispatchEvent(new Event("light-toggle"))))}click(){this.open=!this.open}focus(t){this.shadowRoot?.querySelector("summary")?.focus(t)}render(){return r`
      <details
        part="details"
        @transitionend=${this.handleTransitionEnd}
        @toggle=${this.handleToggle}
      >
        <summary part="summary" @click=${this.handleSummaryClick}>
          <slot name="summary">${this.summary}</slot>
        </summary>

        <div part="content-base">
          <div part="content">
            <slot></slot>
          </div>
        </div>
      </details>
    `}get details(){return this.shadowRoot?.querySelector("details")}handleTransitionEnd(t){let e=this.details;e&&t.propertyName==="grid-template-rows"&&(e.open===!0?e.hasAttribute("expanded")||(e.open=!1):e.open=!0)}handleToggle(t){let e=this.details;e&&e.open&&!e.hasAttribute("expanded")&&this._openOnToggle&&(this.open=e.open,this.dispatchEvent(new Event("light-toggle")),e.setAttribute("expanded",""))}handleSummaryClick(t){let e=this.details;if(e){if(t.preventDefault(),e.open)return this.open=!1,!1;this.open=!0}}};i(o,"baseName","light-disclosure"),i(o,"styles",[u,l`
      [part~="content-base"] {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 300ms ease-in-out;
      }

      [part~="content"] {
        overflow: hidden;
      }

      details[open][expanded] [part~="content-base"] {
        grid-template-rows: 1fr;
      }

      summary {
        padding: 0.4em 0.6em;
        cursor: pointer;
      }

      summary:hover {
        background-color: rgba(0,0,0,0.05);
      }

      @media (prefers-reduced-motion: reduce) {
        [part~="content-base"] {
          transition: none;
        }
        details[open] [part~="content-base"] {
          grid-template-rows: 1fr;
        }
      }
    `]),i(o,"properties",{summary:{},open:{type:Boolean}});var B=n=>n??m;export{y as a,x as b,A as c,o as d,B as e};
/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-BTQ4MHPG.js.map
