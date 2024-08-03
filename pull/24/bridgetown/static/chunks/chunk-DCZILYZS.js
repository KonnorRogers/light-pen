import{a as i,b as r,g as a,i as o}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-7DOX6VQX.js";import{d as s}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-WUEJL3TN.js";function d(){return window.matchMedia("(prefers-reduced-motion: reduce)")===!0||window.matchMedia("(prefers-reduced-motion: reduce)").matches===!0}var n=class extends o{constructor(){super(),this.summary="",this.open=!1,this._openOnToggle=!0}willUpdate(t){let e=this.details;e&&t.has("open")&&(this.open?(e.open=this.open,this._openOnToggle=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.setAttribute("expanded",""),this._openOnToggle=!0,this.dispatchEvent(new Event("light-toggle"))})})):(e.hasAttribute("expanded")?e.removeAttribute("expanded"):e.open=this.open,d()&&(e.open=this.open),this.dispatchEvent(new Event("light-toggle"))))}click(){this.open=!this.open}focus(t){this.shadowRoot?.querySelector("summary")?.focus(t)}render(){return r`
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
    `}get details(){return this.shadowRoot?.querySelector("details")}handleTransitionEnd(t){let e=this.details;e&&t.propertyName==="grid-template-rows"&&(e.open===!0?e.hasAttribute("expanded")||(e.open=!1):e.open=!0)}handleToggle(t){let e=this.details;e&&e.open&&!e.hasAttribute("expanded")&&this._openOnToggle&&(this.open=e.open,this.dispatchEvent(new Event("light-toggle")),e.setAttribute("expanded",""))}handleSummaryClick(t){let e=this.details;if(e){if(t.preventDefault(),e.open)return this.open=!1,!1;this.open=!0}}};s(n,"baseName","light-disclosure"),s(n,"styles",[a,i`
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

      @media (prefers-reduced-motion: reduce) {
        [part~="content-base"] {
          transition: none;
        }
        details[open] [part~="content-base"] {
          grid-template-rows: 1fr;
        }
      }
    `]),s(n,"properties",{summary:{},open:{type:Boolean}});export{n as a};
//# sourceMappingURL=/light-pen/pull/24/bridgetown/static/chunks/chunk-DCZILYZS.js.map
