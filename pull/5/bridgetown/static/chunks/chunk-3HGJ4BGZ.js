import{a as l,b as r,m,n as u}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-HQPUIQBR.js";import{d as o}from"/light-pen/pull/5/bridgetown/static/chunks/chunk-OSUW2QPQ.js";function w(n,t,e){return n?t():e?.()}function E(n,t,e){return t<n?n:t>e?e:t}function A(n,t){function e(a){let d=n.getBoundingClientRect(),p=n.ownerDocument.defaultView,c=d.left+(p?.pageXOffset||0),f=d.top+(p?.pageYOffset||0),h=a.pageX-c,g=a.pageY-f;t?.onMove&&t.onMove(h,g)}function s(){document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",s),t?.onStop&&t.onStop()}document.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("pointerup",s),t?.initialEvent instanceof PointerEvent&&e(t.initialEvent)}var O=r`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16" part="svg"><path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>`;function v(){return window.matchMedia("(prefers-reduced-motion: reduce)")===!0||window.matchMedia("(prefers-reduced-motion: reduce)").matches===!0}var i=class extends m{constructor(){super(),this.summary="",this.open=!1,this._openOnToggle=!0}willUpdate(t){let e=this.details;e&&t.has("open")&&(this.open?(e.open=this.open,this._openOnToggle=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.setAttribute("expanded",""),this._openOnToggle=!0,this.dispatchEvent(new Event("light-toggle"))})})):(e.hasAttribute("expanded")?e.removeAttribute("expanded"):e.open=this.open,v()&&(e.open=this.open),this.dispatchEvent(new Event("light-toggle"))))}render(){return r`
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
    `}get details(){return this.shadowRoot?.querySelector("details")}handleTransitionEnd(t){let e=this.details;e&&t.propertyName==="grid-template-rows"&&(e.open===!0?e.hasAttribute("expanded")||(e.open=!1):e.open=!0)}handleToggle(t){let e=this.details;e&&e.open&&!e.hasAttribute("expanded")&&this._openOnToggle&&(this.open=e.open,this.dispatchEvent(new Event("light-toggle")),e.setAttribute("expanded",""))}handleSummaryClick(t){let e=this.details;if(e){if(t.preventDefault(),e.open)return this.open=!1,!1;this.open=!0}}};o(i,"baseName","light-disclosure"),o(i,"styles",[u,l`
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
    `]),o(i,"properties",{summary:{},open:{type:Boolean}});export{w as a,E as b,A as c,O as d,i as e};
/*! Bundled license information:

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/5/bridgetown/static/chunks/chunk-3HGJ4BGZ.js.map
