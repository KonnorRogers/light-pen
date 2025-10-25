import{a,c as r}from"/light-pen/bridgetown/static/chunks/chunk-BR6DTZM2.js";import{a as o,b as s}from"/light-pen/bridgetown/static/chunks/chunk-BHFD5347.js";import{d as i}from"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";function d(){return window.matchMedia("(prefers-reduced-motion: reduce)")===!0||window.matchMedia("(prefers-reduced-motion: reduce)").matches===!0}var n=class extends r{constructor(){super(),this.summary="",this.open=!1,this._openOnToggle=!0,this.noAnimation=!1}firstUpdated(){this.noAnimation||(this.setAttribute("no-animation",""),this.noAnimation=!0,this.updateComplete.then(()=>{setTimeout(()=>{this.removeAttribute("no-animation"),this.noAnimation=!1})})),this.open&&(this.open=!1,this.open=!0)}updated(t){let e=this.details;e&&t.has("open")&&(this.open?(e.open=this.open,this._openOnToggle=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.setAttribute("expanded",""),this._openOnToggle=!0,this.dispatchEvent(new Event("light-toggle"))})})):(e.hasAttribute("expanded")?e.removeAttribute("expanded"):e.open=this.open,(this.noAnimation||d())&&(e.open=this.open),this.dispatchEvent(new Event("light-toggle"))))}click(){this.open=!this.open}focus(t){this.shadowRoot?.querySelector("summary")?.focus(t)}render(){return s`
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
    `}get details(){return this.shadowRoot?.querySelector("details")}handleTransitionEnd(t){let e=this.details;e&&t.propertyName==="grid-template-rows"&&(e.open===!0?e.hasAttribute("expanded")||(e.open=!1):e.open=!0)}handleToggle(t){let e=this.details;e&&e.open&&!e.hasAttribute("expanded")&&this._openOnToggle&&(this.open=e.open,this.dispatchEvent(new Event("light-toggle")),e.setAttribute("expanded",""))}handleSummaryClick(t){let e=this.details;if(e){if(t.preventDefault(),e.open)return this.open=!1,!1;this.open=!0}}};i(n,"baseName","light-disclosure"),i(n,"styles",[a,o`
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
    `]),i(n,"properties",{summary:{},open:{type:Boolean},noAnimation:{attribute:"no-animation",type:Boolean}});export{n as a};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-HOPKBUAR.js.map
