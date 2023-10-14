import{a as g}from"/light-pen/bridgetown/static/chunks/chunk-OTRC5XOJ.js";import{a as n,b as p,c,d,e as h}from"/light-pen/bridgetown/static/chunks/chunk-U5ABJW3C.js";import{a as _}from"/light-pen/bridgetown/static/chunks/chunk-J4OH4D6I.js";import{a as b}from"/light-pen/bridgetown/static/chunks/chunk-ZTH56Y6K.js";import"/light-pen/bridgetown/static/chunks/chunk-LLVC5RN2.js";import"/light-pen/bridgetown/static/chunks/chunk-7KU557RW.js";import{a as l}from"/light-pen/bridgetown/static/chunks/chunk-KQTEUMDX.js";import{a as u,b as v}from"/light-pen/bridgetown/static/chunks/chunk-DXSFAFY6.js";import"/light-pen/bridgetown/static/chunks/chunk-3MKA4YYE.js";import{c as e}from"/light-pen/bridgetown/static/chunks/chunk-XSK7UXXH.js";import"/light-pen/bridgetown/static/chunks/chunk-VVXSQYSM.js";import{d as y}from"/light-pen/bridgetown/static/chunks/chunk-N2HGT6U6.js";import"/light-pen/bridgetown/static/chunks/chunk-L36U2YZ3.js";import{b as a,d as f}from"/light-pen/bridgetown/static/chunks/chunk-R2JXFNI7.js";import{a as m,c as s}from"/light-pen/bridgetown/static/chunks/chunk-DEVOFCFG.js";import"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var w=m`
  ${u}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`;var r=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),t=class extends v{constructor(){super(...arguments),this.hasSlotController=new g(this,"icon","suffix"),this.localize=new _(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await h(this.base),this.base.hidden=!1;let{keyframes:o,options:i}=p(this,"alert.show",{dir:this.localize.dir()});await d(this.base,o,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await h(this.base);let{keyframes:o,options:i}=p(this,"alert.hide",{dir:this.localize.dir()});await d(this.base,o,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,c(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,c(this,"sl-after-hide")}async toast(){return new Promise(o=>{r.parentElement===null&&document.body.append(r),r.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{r.removeChild(this),o(),r.querySelector("sl-alert")===null&&r.remove()},{once:!0})})}render(){return s`
      <div
        part="base"
        class=${y({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?s`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};t.styles=w;t.dependencies={"sl-icon-button":b};e([f('[part~="base"]')],t.prototype,"base",2);e([a({type:Boolean,reflect:!0})],t.prototype,"open",2);e([a({type:Boolean,reflect:!0})],t.prototype,"closable",2);e([a({reflect:!0})],t.prototype,"variant",2);e([a({type:Number})],t.prototype,"duration",2);e([l("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);e([l("duration")],t.prototype,"handleDurationChange",1);n("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});n("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var C=t;t.define("sl-alert");export{C as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/alert-TMOJZ6UB.js.map
