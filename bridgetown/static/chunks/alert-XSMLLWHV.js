import{a as d,b as h,c as m,d as p,e as u}from"/light-pen/bridgetown/static/chunks/chunk-BTTRCTBJ.js";import{a as y}from"/light-pen/bridgetown/static/chunks/chunk-CIC27NLC.js";import{a as b}from"/light-pen/bridgetown/static/chunks/chunk-XTMCQKPB.js";import"/light-pen/bridgetown/static/chunks/chunk-WZFQTQUK.js";import"/light-pen/bridgetown/static/chunks/chunk-LGSQT5KX.js";import{a as k}from"/light-pen/bridgetown/static/chunks/chunk-GG6DRQQY.js";import{d as c}from"/light-pen/bridgetown/static/chunks/chunk-PLS6VE2H.js";import"/light-pen/bridgetown/static/chunks/chunk-IG2EA53Q.js";import"/light-pen/bridgetown/static/chunks/chunk-KFDUCRXX.js";import{a as s}from"/light-pen/bridgetown/static/chunks/chunk-D72CGGEU.js";import{a as g,b as a,c as w,e as l,f as _}from"/light-pen/bridgetown/static/chunks/chunk-JABBWDD5.js";import"/light-pen/bridgetown/static/chunks/chunk-V47G7R6H.js";import{c as r}from"/light-pen/bridgetown/static/chunks/chunk-V26RQ3M3.js";import{a as v,d as n}from"/light-pen/bridgetown/static/chunks/chunk-B2DHJBAQ.js";import"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var T=v`
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
    overflow: hidden;
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

  .alert--has-countdown {
    border-bottom: none;
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

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`;var e=class o extends _{constructor(){super(...arguments),this.hasSlotController=new b(this,"icon","suffix"),this.localize=new k(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this,i="100%",C="0";this.countdownAnimation=t.animate([{width:i},{width:C}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await u(this.base),this.base.hidden=!1;let{keyframes:t,options:i}=h(this,"alert.show",{dir:this.localize.dir()});await p(this.base,t,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await u(this.base);let{keyframes:t,options:i}=h(this,"alert.hide",{dir:this.localize.dir()});await p(this.base,t,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,m(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,m(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),o.toastStack.parentElement===null&&document.body.append(o.toastStack),o.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{o.toastStack.removeChild(this),t(),o.toastStack.querySelector("sl-alert")===null&&o.toastStack.remove()},{once:!0})})}render(){return n`
      <div
        part="base"
        class=${c({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?n`
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

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?n`
              <div
                class=${c({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};e.styles=[g,T];e.dependencies={"sl-icon-button":y};r([l('[part~="base"]')],e.prototype,"base",2);r([l(".alert__countdown-elapsed")],e.prototype,"countdownElement",2);r([a({type:Boolean,reflect:!0})],e.prototype,"open",2);r([a({type:Boolean,reflect:!0})],e.prototype,"closable",2);r([a({reflect:!0})],e.prototype,"variant",2);r([a({type:Number})],e.prototype,"duration",2);r([a({type:String,reflect:!0})],e.prototype,"countdown",2);r([w()],e.prototype,"remainingTime",2);r([s("open",{waitUntilFirstUpdate:!0})],e.prototype,"handleOpenChange",1);r([s("duration")],e.prototype,"handleDurationChange",1);var f=e;d("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});d("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var S=f;f.define("sl-alert");export{S as default};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/alert-XSMLLWHV.js.map
