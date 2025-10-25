import{a as l,f as u}from"/light-pen/pull/38/bridgetown/static/chunks/chunk-DC223XXB.js";import{a as m,b as s}from"/light-pen/pull/38/bridgetown/static/chunks/chunk-LFPVEBVM.js";import{d as o}from"/light-pen/pull/38/bridgetown/static/chunks/chunk-VT6VFEU4.js";function w(n,t,e){return t<n?n:t>e?e:t}function y(n,t){function e(r){let d=n.getBoundingClientRect(),p=n.ownerDocument.defaultView,h=d.left+(p?.pageXOffset||0),c=d.top+(p?.pageYOffset||0),f=r.pageX-h,g=r.pageY-c;t?.onMove&&t.onMove(f,g)}function a(){document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",a),t?.onStop&&t.onStop()}document.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("pointerup",a),t?.initialEvent instanceof PointerEvent&&e(t.initialEvent)}var x=s`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-grip-vertical"
  viewBox="0 0 16 16"
  part="svg"
>
  <path
    d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  ></path>
</svg>`;function v(){return window.matchMedia("(prefers-reduced-motion: reduce)")===!0||window.matchMedia("(prefers-reduced-motion: reduce)").matches===!0}var i=class extends u{constructor(){super(),this.summary="",this.open=!1,this._openOnToggle=!0,this.noAnimation=!1}firstUpdated(){this.noAnimation||(this.setAttribute("no-animation",""),this.noAnimation=!0,this.updateComplete.then(()=>{setTimeout(()=>{this.removeAttribute("no-animation"),this.noAnimation=!1})})),this.open&&(this.open=!1,this.open=!0)}updated(t){let e=this.details;e&&t.has("open")&&(this.open?(e.open=this.open,this._openOnToggle=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.setAttribute("expanded",""),this._openOnToggle=!0,this.dispatchEvent(new Event("light-toggle"))})})):(e.hasAttribute("expanded")?e.removeAttribute("expanded"):e.open=this.open,(this.noAnimation||v())&&(e.open=this.open),this.dispatchEvent(new Event("light-toggle"))))}click(){this.open=!this.open}focus(t){this.shadowRoot?.querySelector("summary")?.focus(t)}render(){return s`
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
    `}get details(){return this.shadowRoot?.querySelector("details")}handleTransitionEnd(t){let e=this.details;e&&t.propertyName==="grid-template-rows"&&(e.open===!0?e.hasAttribute("expanded")||(e.open=!1):e.open=!0)}handleToggle(t){let e=this.details;e&&e.open&&!e.hasAttribute("expanded")&&this._openOnToggle&&(this.open=e.open,this.dispatchEvent(new Event("light-toggle")),e.setAttribute("expanded",""))}handleSummaryClick(t){let e=this.details;if(e){if(t.preventDefault(),e.open)return this.open=!1,!1;this.open=!0}}};o(i,"baseName","light-disclosure"),o(i,"styles",[l,m`
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
        background-color: rgba(0, 0, 0, 0.05);
      }


      :host([no-animation]) [part~="content-base"] {
        transition: none;
      }

      :host([no-animation]) details[open] [part~="content-base"] {
          grid-template-rows: 1fr;
      }

      @media (prefers-reduced-motion: reduce) {
        [part~="content-base"] {
          transition: none;
        }
        details[open] [part~="content-base"] {
          grid-template-rows: 1fr;
        }
      }
    `]),o(i,"properties",{summary:{},open:{type:Boolean},noAnimation:{attribute:"no-animation",type:Boolean}});export{w as a,y as b,x as c,i as d};
//# sourceMappingURL=/light-pen/pull/38/bridgetown/static/chunks/chunk-VNUOVIPF.js.map
