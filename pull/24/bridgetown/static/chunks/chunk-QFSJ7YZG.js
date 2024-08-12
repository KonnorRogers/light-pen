import{b as _,c as C,d as T,e as k,f as H,h as M,i as g,j as I}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-ZSUVAX4P.js";import{a as A,b as V,d as x,e as S,f as L,g as E,i as N}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-E37TMBAE.js";import{d as o}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-WUEJL3TN.js";var{I:tt}=S;var R=i=>i.strings===void 0;var f=(i,e)=>{let t=i._$AN;if(t===void 0)return!1;for(let s of t)s._$AO?.(e,!1),f(s,e);return!0},p=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},z=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Q(e)}};function U(i){this._$AN!==void 0?(p(this),this._$AM=i,z(this)):this._$AM=i}function G(i,e=!1,t=0){let s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let a=t;a<s.length;a++)f(s[a],!1),p(s[a]);else s!=null&&(f(s,!1),p(s));else f(this,i)}var Q=i=>{i.type==_.CHILD&&(i._$AP??(i._$AP=G),i._$AQ??(i._$AQ=U))},m=class extends T{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),z(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(f(this,e),p(this))}setValue(e){if(R(this.t))this.t._$AI(e,this);else{let t=[...this.t._$AH];t[this.i]=e,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}};var $=new WeakMap,B=C(class extends m{render(i){return x}update(i,[e]){let t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=i.options?.host,this.rt(this.ct=i.element)),x}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,t=$.get(e);t===void 0&&(t=new WeakMap,$.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){return typeof this.Y=="function"?$.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var P=()=>{let i={observedAttributes:["maxlength"],message(e,t,s){return`Please shorten this text to ${t} characters or less. (You are currently using ${s} characters).`},checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]},s=e.value??"";if(typeof s!="string")return t;let r=Number(e.maxLength??e.getAttribute("maxlength"));return isNaN(r)||r==null||r<=0||s.length>r&&(t.message=(typeof i.message=="function"?i.message(e,r,s.length):i.message)||"",t.isValid=!1,t.invalidKeys.push("tooLong")),t}};return i};var q=()=>{let i={observedAttributes:["minlength"],message(e,t,s){return`Please lengthen this text to ${t} characters or more. (You are currently using ${s} characters).`},checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]},s=e.value??"";if(typeof s!="string")return t;let r=Number(e.minLength||e.getAttribute("minlength"));return isNaN(r)||r==null||r<=0||s.length<r&&(t.message=(typeof i.message=="function"?i.message(e,r,s.length):i.message)||"",t.isValid=!1,t.invalidKeys.push("tooShort")),t}};return i};var F=()=>{let i={observedAttributes:["required"],message:Object.assign(document.createElement("input"),{required:!0}).validationMessage,checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute("required"))&&(e.value||(t.message=(typeof i.message=="function"?i.message(e):i.message)||"",t.isValid=!1,t.invalidKeys.push("valueMissing"))),t}};return i};function D(i){return class extends i{addCustomState(e){try{this.internals.states.add(e)}catch{}finally{this.setAttribute(`data-${e}`,"")}}deleteCustomState(e){try{this.internals.states.delete(e)}catch{}finally{this.removeAttribute(`data-${e}`)}}toggleCustomState(e,t){if(t===!0){this.addCustomState(e);return}if(t===!1){this.deleteCustomState(e);return}this.toggleCustomState(e,!this.hasCustomState(e))}hasCustomState(e){try{return this.internals.states.has(e)}catch{}finally{return this.hasAttribute(`data-${e}`)}}}}function O(i){var e;return e=class extends i{constructor(...t){super(...t),this.internals,this.internals||(this.internals=this.attachInternals())}},o(e,"formAssociated",i.formAssociated??!0),e}function h(i){return!!(i.matches(":disabled")||i.disabled)}function W(i){return class extends D(O(i)){constructor(...t){super(...t);o(this,"handleInvalid",t=>{t.target===this&&(h(this)||(this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.hasInteracted=!0,this.updateInteractionState()))});o(this,"handleInteraction",t=>{h(this)||(!this.matches(":focus-within")&&this.valueHasChanged&&(this.hasInteracted=!0),this.updateValidity())});this.role=this.getAttribute("role")||null,this.value=this.getAttribute("value")||null,this.previousValue=this.value,this.defaultValue=this.getAttribute("value")||null,this.name=this.getAttribute("name")||"",this.type=this.getAttribute("type")||this.localName||"",this.disabled=h(this),this.required=this.hasAttribute("required"),this.hasInteracted=this.hasInteracted??!1,this.valueHasChanged=this.valueHasChanged??!1,this.validators=[],this.addEventListener("focusout",this.handleInteraction),this.addEventListener("blur",this.handleInteraction),this.addEventListener("invalid",this.handleInvalid),this.__hasCustomError=!1,this.__customErrorMessage=""}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let s of this.validators)if(s.observedAttributes)for(let r of s.observedAttributes)t.add(r);return[...t]}static get validators(){return[F()]}get allValidators(){let t=this.constructor.validators||[],s=this.validators||[];return[...t,...s]}get willShowValidationMessage(){return h(this)&&this.hasInteracted===!0}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}setCustomValidity(t){if(!t){this.__hasCustomError=!1,this.__customErrorMessage="",this.setValidity({});return}this.__hasCustomError=!0,this.__customErrorMessage=t,this.internals.setValidity({customError:!0},t)}attributeChangedCallback(t,s,r){typeof super.attributeChangedCallback=="function"&&super.attributeChangedCallback(t,s,r),r!==s&&(t==="role"&&(this.internals.role=r||null),t==="value"&&(this.defaultValue=r,!this.hasInteracted&&!this.valueHasChanged&&(this.value=this.defaultValue,this.setFormValue(this.value,this.value))),t==="disabled"&&(this.disabled=!!r),this.updateValidity())}formResetCallback(){"formControl"in this&&this.formControl&&(this.formControl.value=this.defaultValue),this.resetValidity(),this.value=this.defaultValue,this.hasInteracted=!1,this.valueHasChanged=!1,this.updateValidity(),this.setFormValue(this.defaultValue,this.defaultValue)}formDisabledCallback(t){this.disabled=t,this.resetValidity(),this.updateValidity()}formStateRestoreCallback(t,s){this.value=t,this.formControl&&(this.formControl.value=t),this.resetValidity(),this.updateValidity()}setValidity(...t){let s=t[0],r=t[1],a=t[2];a||(a=this.validationTarget),this.internals.setValidity(s,r,a),this.updateInteractionState()}reportValidity(){return this.updateValidity(),this.internals.reportValidity()}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}get validationTarget(){return this.formControl||void 0}setFormValue(...t){this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.internals.setFormValue(...t),this.updateValidity()}get form(){return this.internals.form}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(h(this)){this.resetValidity();return}let t=this.allValidators;if(!t){this.setValidity({});return}let r={customError:!!this.__hasCustomError},a=this.formControl||void 0,n="";for(let c of t){let{isValid:d,message:j,invalidKeys:w}=c.checkValidity(this);d||(n||(n=j),w?.length>=0&&w.forEach(K=>r[K]=!0))}n||(n=this.validationMessage||this.__customErrorMessage),this.setValidity(r,n,a)}updateInteractionState(){if(h(this)){this.addCustomState("disabled"),this.deleteCustomState("invalid"),this.deleteCustomState("user-invalid"),this.deleteCustomState("valid"),this.deleteCustomState("user-valid");return}this.deleteCustomState("disabled"),this.validity.valid?(this.deleteCustomState("invalid"),this.deleteCustomState("user-invalid"),this.addCustomState("valid"),this.toggleCustomState("user-valid",this.hasInteracted&&this.valueHasChanged)):(this.deleteCustomState("valid"),this.deleteCustomState("user-valid"),this.addCustomState("invalid"),this.toggleCustomState("user-invalid",this.hasInteracted&&this.valueHasChanged))}}}var J=Object.freeze({role:{reflect:!0},name:{reflect:!0},type:{reflect:!0},disabled:{type:Boolean},required:{reflect:!0,type:Boolean},defaultValue:{attribute:"value",reflect:!0},valueHasChanged:{type:Boolean,attribute:!1,state:!0},hasInteracted:{attribute:!1,type:Boolean,state:!0},formControl:{attribute:!1,state:!0},value:{attribute:!1,state:!0}});b.formProperties=J;function b(i){return class extends W(i){constructor(...t){super(...t),this.constructor.properties?.disabled?.reflect===!0&&(console.warn('The following element has their "disabled" property set to reflect.'),console.warn(this),console.warn("For further reading: https://github.com/whatwg/html/issues/8365"))}willUpdate(t){typeof super.willUpdate=="function"&&(t.has("formControl")&&(this.formControl?.addEventListener("focusout",this.handleInteraction),this.formControl?.addEventListener("blur",this.handleInteraction),this.formControl?.addEventListener("click",this.handleInteraction)),(t.has("formControl")||t.has("defaultValue")||t.has("value"))&&this.setFormValue(this.value,this.value),super.willUpdate(t))}}}u.formProperties=Object.freeze(Object.assign({autocomplete:{},wrap:{},readOnly:{attribute:"readonly",type:Boolean,reflect:!0},placeholder:{},dirName:{},rows:{type:Number},cols:{type:Number},maxLength:{attribute:"maxlength",type:Number},minLength:{attribute:"minlength",type:Number}},b.formProperties));function u(i){let e=i;return class extends b(e){static get validators(){return[...super.validators,P(),q()]}static get properties(){let t=super.properties;return t?{...u.formProperties,...t}:u.formProperties}constructor(...t){super(...t),this.autocomplete="",this.wrap="",this.value="",this.defaultValue="",this.maxLength=-1,this.minLength=-1,this.readOnly=!1,this.placeholder="",this.required=!1,this.dirName="",this.selectionDirection="forward",this.rows=2,this.cols=20}setSelectionRange(...t){let s=this.formControl;s&&"selectionRange"in s&&s.setSelectionRange(...t)}setRangeText(...t){let s=this.formControl;s&&"setRangeText"in s&&s.setRangeText(...t)}get textLength(){let t=this.formControl;return t&&"textLength"in t?t.textLength:0}get selectionStart(){let t=this.formControl;return t&&"selectionStart"in t?t.selectionStart:0}get selectionEnd(){let t=this.formControl;return t&&"selectionEnd"in t?t.selectionEnd:0}select(){let t=this.formControl;t&&t.select?.()}}}var Y=A`
  [part~="base"] {
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 1rem;
    height: 15em;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    resize: both;
    font-size: normal;
    font-family: monospace;
    line-height: 1.5; /* Inherited to child elements */
    tab-size: 2;
    caret-color: black;
    counter-reset: linenumber 0;
    border: 1px solid gray;
  }

  /* Include "pre" if line numbers are disabled */
  :host([disable-line-numbers]) [part~="textarea"],
  [part~="textarea"],
  light-code::part(line) {
    padding-inline-start: 8px;
    padding-inline-end: 8px;
  }

  [part~="textarea"] {
    color: transparent;
    /* color: rgba(255,0,0,0.2); */
    background-color: transparent;
    caret-color: inherit;
    z-index: 1;
    resize: none;
    padding: 0;

    /* Dynamically generated based on the size of the  gutter from "<light-code>" */
    padding-inline-start: calc(var(--gutter-width, 40px) + 8px);
  }

  light-code {
    pointer-events: none;
  }

  light-code::part(pre) {
    border-color: transparent;
    position: relative;
  }

  light-code::part(line)::before {
    content: "";
    line-height: inherit;
    padding-inline-end: 0px;
  }

  [part~="base"]:focus-within {
    border-color: dodgerblue;
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
  }

  light-code::part(line) {
    padding-inline-start: 8px;
  }

  light-code::part(pre),
  [part~="textarea"],
  light-code::part(code) {
    /* I don't love this, but it fixes font size inconsistencies on mobile. The alternative is listen for font-size changes, which is...challenging. */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;

    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;
  }

  [part~="textarea"] {
    /* this creates line-wrapping. */
    word-break: break-word;
    white-space: pre-wrap;
  }

  :host([wrap="hard"]) [part~="textarea"] {
    /* This would remove line-wrapping */
    word-break: break-all;
    white-space: pre;
  }

  [part~="base"]:focus-within light-code::part(line-highlight) {
    background-color: rgba(255, 255, 209, 1);
  }

  [part~="base-editor"] {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    max-height: 100%;
    min-height: 100%;
  }

  light-code,
  [part~="textarea"] {
    grid-area: 1/1/2/2;
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
    overflow: auto;
    border: none;
  }

  [part~="textarea"]::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;var v=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var y=class extends v{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};var X=/\r\n?|\n/g,l=class extends u(N){constructor(){super(),this.language="html",this.value="",this.defaultValue="",this.textarea=null,this.src=null,this.wrap="soft",this.preserveWhitespace=!1,this.disableLineNumbers=!1,this.highlighter=H(),this.currentLineNumber=1}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value")||"",this.defaultValue=this.getAttribute("value")||"",this.value===this.getAttribute("value")&&this.preserveWhitespace!==!0&&(this.value=g(this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim())}willUpdate(e){e.has("value")&&(this.dispatchEvent(new Event("light-value-change",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))),e.has("src")&&this.src&&fetch(this.src).then(async t=>{let s=await t.text();return this.preserveWhitespace!==!0&&(s=g(s.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim()),s}),super.willUpdate(e)}click(){this.textarea?this.textarea.click():this.click()}focus(e){this.textarea?this.textarea.focus(e):this.focus(e)}__setGutterWidth(){let e=this.shadowRoot?.querySelector("light-code")?.shadowRoot?.querySelector("[part~='gutter']")?.offsetWidth;if(e){this.style.setProperty("--gutter-width",`${e}px`);return}this.style.removeProperty("--gutter-width")}render(){let e=this.language;return this.syncScroll(),setTimeout(async()=>{await this.updateComplete,this.__setGutterWidth()}),V`
      <div part="base">
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
          <!-- This bad boy is for measuring cursors -->
          <pre
            part="pre"
            aria-hidden="true"
            style="
              position: fixed;
              top: 0;
              left: 0;
              pointer-events: none;
              visibility: hidden;
            "
          ><code part="code"><span id="before-caret"></span><span id="caret">.</span><span id="after-caret">.</span></code></pre>

          <light-code
            tabindex="-1"
            .language=${this.language}
            .code=${this.value}
            .wrap=${this.wrap}
            .highlighter=${this.highlighter}
            .disableLineNumbers=${this.disableLineNumbers}
            .preserveWhitespace=${this.preserveWhitespace}
            .highlightLines=${`{${this.hasFocused?this.currentLineNumber:""}}`}
            @focus=${()=>{this.textarea?.focus()}}
            @touchstart=${t=>{this.textarea?.focus()}}
            @click=${t=>{this.textarea?.focus()}}
          ></light-code>

          <!-- IMPORTANT! There must be no white-space above. -->
          <textarea
            id="textarea-${e}"
            ${B(this.textareaChanged)}
            data-code-lang=${e}
            part="textarea textarea-${e}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            minlength=${this.minLength}
            maxlength=${this.maxLength}
            translate="no"
            .defaultValue=${this.defaultValue}
            .value=${this.value}
            ?disabled=${this.disabled}
            ?required=${this.required}
            placeholder=${this.placeholder}
            @keyup=${this.keyupHandler}
            @keydown=${this.keydownHandler}
            @focus=${()=>{this.hasFocused=!0,this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{this.setAttribute("data-has-interacted",""),this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
            @selectionchange=${t=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @click=${()=>{this.setCurrentLineHighlight()}}
            @touchstart=${()=>{this.setCurrentLineHighlight()}}
            @touchend=${()=>{this.setCurrentLineHighlight()}}
            @pointerdown=${()=>{this.setCurrentLineHighlight()}}
            @pointerup=${()=>{this.setCurrentLineHighlight()}}
            @input=${t=>{this.value=t.currentTarget.value,this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${t=>{this.value=t.currentTarget.value,this.setCurrentLineHighlight(),this.syncScroll()}}
            @scroll=${t=>{this.setCurrentLineHighlight(),this.syncScroll()}}
          ></textarea>
        </div>
        <!-- base-editor -->
      </div>
      <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
    `}handleTextAreaResize(e){let{target:t}=e[0],{left:s,right:r,top:a,bottom:n}=e[0].contentRect,c=s+r,d=a+n;this.dispatchEvent(new y("light-resize",{height:d,width:c})),this.syncScroll()}updated(e){super.updated(e),this.syncScroll(),setTimeout(()=>this.setCurrentLineHighlight())}syncScroll(e=!1){let t=this.textarea;if(t==null)return;let s=this.shadowRoot?.querySelector("light-code"),r=s?.shadowRoot?.querySelector("code");if(e){let{top:a,left:n}=this.getCaretPosition();n<60&&(t.scrollLeft=Math.min(n,t.scrollLeft))}s&&(s.scrollTop=t.scrollTop),r&&(r.scrollLeft=t.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.formControl=t,this.textareaResizeObserver=new ResizeObserver(s=>this.handleTextAreaResize(s)),this.textareaResizeObserver.observe(t)}handleSlotChangeEvent(e){let s=e.target.assignedElements({flatten:!0}),r=this.unescapeTags(M(...s));this.preserveWhitespace||(r=g(r.trim())),r&&(this.value=r,this.defaultValue=r,setTimeout(()=>this.textarea?.setSelectionRange(0,0)),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}keyupHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}keydownHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight()),this.syncScroll(),(e.key.startsWith("Arrow")||e.key==="Backspace")&&this.syncScroll(!0)}getCaretPosition(){let e=this.shadowRoot?.getElementById("before-caret"),t=this.shadowRoot?.getElementById("after-caret"),s=this.shadowRoot?.getElementById("caret"),r=this.textarea,a={top:0,left:0};if(!e||!t||!s||!r||r.selectionStart!==r.selectionEnd)return a;e.textContent="";let n=this.getLinesToSelectionStart();if(!n)return a;let c=n.length-1,d=n[c].substring(0,r.selectionStart);return e.textContent=d,{top:t.offsetTop-r.scrollTop,left:t.offsetLeft-r.scrollLeft}}setCurrentLineHighlight(){let e=this.getCurrentLineNumber();e!=null&&(this.currentLineNumber=e+1)}getLinesToSelectionStart(){let e=this.textarea;return e?e.value.substring(0,e.selectionStart).split(X):void 0}getCurrentLineNumber(){let e=this.getLinesToSelectionStart();return e?e.length-1:0}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}injectNewLine(e){return(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};o(l,"baseName","light-editor"),o(l,"dependencies",{"light-code":I}),o(l,"shadowRootOptions",{...L.shadowRootOptions,delegatesFocus:!0}),o(l,"styles",[E,Y,k]),o(l,"properties",{...u.formProperties,wrap:{reflect:!0,state:!1},language:{reflect:!0},src:{},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},preserveWhitespace:{type:Boolean,reflect:!0,attribute:"preserve-whitespace"},hasFocused:{type:Boolean,reflect:!0,attribute:"data-has-focused"},currentLineNumber:{attribute:!1,state:!0,type:Number},highlighter:{attribute:!1,state:!0}});export{l as a};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/24/bridgetown/static/chunks/chunk-QFSJ7YZG.js.map
