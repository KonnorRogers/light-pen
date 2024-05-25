import{a as P,b as F,c as q,d as E,e as B,f as G,g as D,i as O,j as W,k as j,l as U,n as A,o as $,p as C,s as K,t as Q,u as I,v as Y,w as J}from"/light-pen/pull/16/bridgetown/static/chunks/chunk-YUXMQNGM.js";import{d as p}from"/light-pen/pull/16/bridgetown/static/chunks/chunk-5DPLBXH6.js";var{I:ft}=B;var Z=i=>i.strings===void 0,X=()=>document.createComment(""),x=(i,t,e)=>{var r;let s=i._$AA.parentNode,a=t===void 0?i._$AB:t._$AA;if(e===void 0){let n=s.insertBefore(X(),a),o=s.insertBefore(X(),a);e=new ft(n,o,i,i.options)}else{let n=e._$AB.nextSibling,o=e._$AM,d=o!==i;if(d){let l;(r=e._$AQ)===null||r===void 0||r.call(e,i),e._$AM=i,e._$AP!==void 0&&(l=i._$AU)!==o._$AU&&e._$AP(l)}if(n!==a||d){let l=e._$AA;for(;l!==n;){let b=l.nextSibling;s.insertBefore(l,a),l=b}}}return e},m=(i,t,e=i)=>(i._$AI(t,e),i),pt={},tt=(i,t=pt)=>i._$AH=t,et=i=>i._$AH,V=i=>{var t;(t=i._$AP)===null||t===void 0||t.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let s=e.nextSibling;e.remove(),e=s}};var w=(i,t)=>{var e,r;let s=i._$AN;if(s===void 0)return!1;for(let a of s)(r=(e=a)._$AO)===null||r===void 0||r.call(e,t,!1),w(a,t);return!0},_=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},it=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),vt(t)}};function gt(i){this._$AN!==void 0?(_(this),this._$AM=i,it(this)):this._$AM=i}function mt(i,t=!1,e=0){let r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let a=e;a<r.length;a++)w(r[a],!1),_(r[a]);else r!=null&&(w(r,!1),_(r));else w(this,i)}var vt=i=>{var t,e,r,s;i.type==A.CHILD&&((t=(r=i)._$AP)!==null&&t!==void 0||(r._$AP=mt),(e=(s=i)._$AQ)!==null&&e!==void 0||(s._$AQ=gt))},T=class extends C{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),it(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),e&&(w(this,t),_(this))}setValue(t){if(Z(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var R=new WeakMap,rt=$(class extends T{render(i){return E}update(i,[t]){var e;let r=t!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.dt=(e=i.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=i.element)),E}ot(i){var t;if(typeof this.G=="function"){let e=(t=this.dt)!==null&&t!==void 0?t:globalThis,r=R.get(e);r===void 0&&(r=new WeakMap,R.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,t,e;return typeof this.G=="function"?(t=R.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||t===void 0?void 0:t.get(this.G):(e=this.G)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var st=P`
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

    /* this creates line-wrapping. */
    word-break: break-word;
    white-space: pre-wrap;
  }

  :host([wrap="none"])
    :is(light-code::part(pre), [part~="textarea"], light-code::part(code)) {
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
`;var k=class extends Event{constructor(t,e={}){e.bubbles==null&&(e.bubbles=!0),e.composed==null&&(e.composed=!0),super(t,e)}};var H=class extends k{constructor(t="light-resize",e={}){super(t,e),this.height=e.height,this.width=e.width}};var at=(i,t,e)=>{let r=new Map;for(let s=t;s<=e;s++)r.set(i[s],s);return r},Bt=$(class extends C{constructor(i){if(super(i),i.type!==A.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,t,e){let r;e===void 0?e=t:t!==void 0&&(r=t);let s=[],a=[],n=0;for(let o of i)s[n]=r?r(o,n):n,a[n]=e(o,n),n++;return{values:a,keys:s}}render(i,t,e){return this.ct(i,t,e).values}update(i,[t,e,r]){var s;let a=et(i),{values:n,keys:o}=this.ct(t,e,r);if(!Array.isArray(a))return this.ut=o,n;let d=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],l=[],b,M,h=0,c=a.length-1,u=0,f=n.length-1;for(;h<=c&&u<=f;)if(a[h]===null)h++;else if(a[c]===null)c--;else if(d[h]===o[u])l[u]=m(a[h],n[u]),h++,u++;else if(d[c]===o[f])l[f]=m(a[c],n[f]),c--,f--;else if(d[h]===o[f])l[f]=m(a[h],n[f]),x(i,l[f+1],a[h]),h++,f--;else if(d[c]===o[u])l[u]=m(a[c],n[u]),x(i,a[h],a[c]),c--,u++;else if(b===void 0&&(b=at(o,u,f),M=at(d,h,c)),b.has(d[h]))if(b.has(d[c])){let g=M.get(o[u]),S=g!==void 0?a[g]:null;if(S===null){let z=x(i,a[h]);m(z,n[u]),l[u]=z}else l[u]=m(S,n[u]),x(i,a[h],S),a[g]=null;u++}else V(a[c]),c--;else V(a[h]),h++;for(;u<=f;){let g=x(i,l[f+1]);m(g,n[u]),l[u++]=g}for(;h<=c;){let g=a[h++];g!==null&&V(g)}return this.ut=o,tt(i,l),q}});var nt={observedAttributes:["maxlength"],checkValidity(i){let t={message:"",isValid:!0,invalidKeys:[]},e=i.value??"";if(typeof e!="string")return t;let r=Number(i.maxLength||i.getAttribute("maxlength"));return r&&r>e.length&&(t.message=`Please use less than or equal to ${r} characters. You are currently using ${e.length} characters.`,t.isValid=!1,t.invalidKeys.push("tooLong")),t}};var ot={observedAttributes:["minlength"],checkValidity(i){let t={message:"",isValid:!0,invalidKeys:[]},e=i.value??"";if(typeof e!="string")return t;let r=Number(i.minLength||i.getAttribute("minlength"));return r&&r>e.length&&(t.message=`Please use greater than or equal to ${r} characters. You are currently using ${e.length} characters.`,t.isValid=!1,t.invalidKeys.push("tooShort")),t}};function L(i){if(i.disabled||i.getAttribute("disabled")){i.setValidity({});return}let t=i.allValidators;if(!t){i.setValidity({});return}let e={},r=i.formControl||void 0,s="";for(let a of t){let{isValid:n,message:o,invalidKeys:d}=a.checkValidity(i);n||(s||(s=o),d?.length>=0&&d.forEach(l=>e[l]=!0))}i.setValidity(e,s,r)}var lt={observedAttributes:["required"],checkValidity(i){let t={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&(i.value||(t.message="Please fill out this field.",t.isValid=!1,t.invalidKeys.push("valueMissing"))),t}};function ut(i){var t;return t=class extends i{constructor(...e){if(super(...e),typeof this.attachInternals!="function"){console.error("Element Internals are not supported in your browser.");return}try{this.internals=this.attachInternals()}catch(r){console.error(r)}ht(this)}connectedCallback(){this.internals!=null&&typeof super.connectedCallback=="function"&&(super.connectedCallback(),ht(this))}},p(t,"formAssociated",!0),t}function ht(i){if(i.shadowRoot&&i.shadowRoot.delegatesFocus!==!0){let t=i.getAttribute("tabindex")?.trim(),e=t?Number(t):null;if(e==null||isNaN(e))return console.error(`FormAssociated custom elements need a "tabindex" or to be registered with "{ delegatesFocus: true }".
The following element is in violation: `),console.error(i),!1}return!0}function ct(i){return class extends ut(i){constructor(...e){super(...e);p(this,"handleInvalid",e=>{e.target===this&&(this.disabled===!0||this.hasAttribute("disabled")||(this.valueHasChanged=!0,this.hasInteracted=!0,dt(this)))});p(this,"handleInteraction",e=>{this.disabled===!0||this.hasAttribute("disabled")||(!this.matches(":focus-within")&&this.valueHasChanged&&(this.hasInteracted=!0),L(this))});this.role=null,this.value="",this.previousValue=this.value,this.defaultValue="",this.name="",this.type=this.localName||"",this.disabled=!1,this.required=!1,this.hasInteracted=this.hasInteracted??!1,this.valueHasChanged=this.valueHasChanged??!1,this.validators=[],this.addEventListener("focusout",this.handleInteraction),this.addEventListener("blur",this.handleInteraction),this.addEventListener("invalid",this.handleInvalid)}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let r of this.validators)if(r.observedAttributes)for(let s of r.observedAttributes)e.add(s);return[...e]}static get validators(){return[lt]}get allValidators(){let e=this.constructor.validators||[],r=this.validators||[];return[...e,...r]}get willShowValidationMessage(){return this.disabled!==!0&&this.hasInteracted===!0}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}setCustomValidity(e){if(e){this.setValidity({customError:!0},e);return}this.setValidity({})}attributeChangedCallback(e,r,s){typeof super.attributeChangedCallback=="function"&&super.attributeChangedCallback(e,r,s),s!==r&&(e==="role"&&(this.internals.role=s||null),e==="value"&&(!this.hasInteracted&&!this.valueHasChanged&&(this.value=this.defaultValue),this.setFormValue(this.value,this.value)))}formResetCallback(){"formControl"in this&&this.formControl&&(this.formControl.value=this.defaultValue),this.value=this.defaultValue,this.hasInteracted=!1,this.valueHasChanged=!1,L(this),this.setFormValue(this.defaultValue,this.defaultValue)}formDisabledCallback(e){this.disabled=e,L(this)}formStateRestoreCallback(e,r){this.value=e,this.formControl&&(this.formControl.value=e)}setValidity(...e){let r=e[0],s=e[1],a=e[2];a||(a=this.validationTarget),this.internals.setValidity(r,s,a),dt(this)}reportValidity(){return this.internals.reportValidity()}checkValidity(){return this.internals.checkValidity()}get validationTarget(){return this.formControl||void 0}setFormValue(...e){this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.internals.setFormValue(...e),L(this)}get form(){return this.internals.form}}}function dt(i){if(i.disabled||i.hasAttribute("disabled")){i.removeAttribute("data-invalid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-valid");return}i.validity.valid?(i.removeAttribute("data-invalid"),i.removeAttribute("data-user-invalid"),i.setAttribute("data-valid",""),i.toggleAttribute("data-user-valid",i.hasInteracted&&i.valueHasChanged)):(i.removeAttribute("data-valid"),i.removeAttribute("data-user-valid"),i.setAttribute("data-invalid",""),i.toggleAttribute("data-user-invalid",i.hasInteracted&&i.valueHasChanged))}var bt=Object.freeze({role:{reflect:!0},name:{reflect:!0},type:{reflect:!0},disabled:{type:Boolean},required:{reflect:!0,type:Boolean},defaultValue:{attribute:"value",reflect:!0},valueHasChanged:{type:Boolean,attribute:!1,state:!0},hasInteracted:{attribute:!1,type:Boolean,state:!0},formControl:{attribute:!1,state:!0},value:{attribute:!1,state:!0}});N.formProperties=bt;function N(i){return class extends ct(i){constructor(){super(),this.constructor.properties?.disabled?.reflect===!0&&(console.warn('The following element has their "disabled" property set to reflect.'),console.warn(this),console.warn("For further reading: https://github.com/whatwg/html/issues/8365"))}willUpdate(t){typeof super.willUpdate=="function"&&(t.has("role")&&(this.internals.role=t.get("role")||null),t.has("formControl")&&(this.formControl?.addEventListener("focusout",this.handleInteraction),this.formControl?.addEventListener("blur",this.handleInteraction),this.formControl?.addEventListener("click",this.handleInteraction)),(t.has("formControl")||t.has("defaultValue")||t.has("value"))&&this.setFormValue(this.value,this.value),super.willUpdate(t))}}}y.formProperties=Object.freeze(Object.assign({autocomplete:{},wrap:{},readOnly:{attribute:"readonly",type:Boolean,reflect:!0},placeholder:{},dirName:{},rows:{type:Number},cols:{type:Number},maxLength:{attribute:"maxlength",type:Number},minLength:{attribute:"minlength",type:Number}},N.formProperties));function y(i){return class extends N(i){static get validators(){return[...super.validators,nt,ot]}static get properties(){let t=super.properties;return t?{...y.formProperties,...t}:y.formProperties}constructor(...t){super(...t),this.autocomplete="",this.wrap="",this.value="",this.defaultValue="",this.maxLength=-1,this.minLength=-1,this.readOnly=!1,this.placeholder="",this.required=!1,this.dirName="",this.selectionDirection="forward",this.rows=2,this.cols=20}setSelectionRange(...t){let e=this.formControl;e&&"selectionRange"in e&&e.setSelectionRange(...t)}setRangeText(...t){let e=this.formControl;e&&"setRangeText"in e&&e.setRangeText(...t)}get textLength(){let t=this.formControl;return t&&"textLength"in t?t.textLength:0}get selectionStart(){let t=this.formControl;return t&&"selectionStart"in t?t.selectionStart:0}get selectionEnd(){let t=this.formControl;return t&&"selectionEnd"in t?t.selectionEnd:0}select(){let t=this.formControl;t&&t.select?.()}}}var xt=/\r\n?|\n/g,v=class extends y(K){constructor(){super(),this.language="html",this.value="",this.defaultValue="",this.textarea=null,this.wrap="soft",this.preserveWhitespace=!1,this.disableLineNumbers=!1,this.currentLineNumber=1}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value")||"",this.defaultValue=this.getAttribute("value")||"",this.value===this.getAttribute("value")&&this.preserveWhitespace!==!0&&(this.value=I(this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim())}willUpdate(t){t.has("value")&&(this.dispatchEvent(new Event("light-value-change",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))),super.willUpdate(t)}click(){this.textarea?this.textarea.click():this.click()}focus(t){this.textarea?this.textarea.focus(t):this.focus(t)}__setGutterWidth(){let t=this.shadowRoot?.querySelector("light-code")?.shadowRoot?.querySelector("[part~='gutter']")?.offsetWidth;if(t){this.style.setProperty("--gutter-width",`${t}px`);return}this.style.removeProperty("--gutter-width")}render(){let t=this.language;return this.syncScroll(),setTimeout(async()=>{await this.updateComplete,this.__setGutterWidth()}),F`
      <div part="base">
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
          <light-code
            tabindex="-1"
            .language=${this.language}
            .code=${this.value}
            .wrap=${this.wrap}
            .disableLineNumbers=${this.disableLineNumbers}
            .preserveWhitespace=${this.preserveWhitespace}
            .highlightLines=${`{${this.hasFocused?this.currentLineNumber:""}}`}
            @focus=${()=>{this.textarea?.focus()}}
            @touchstart=${e=>{this.textarea?.focus()}}
            @click=${e=>{this.textarea?.focus()}}
          ></light-code>


          <!-- IMPORTANT! There must be no white-space above. -->
          <textarea
            id="textarea-${t}"
            data-code-lang=${t}
            part="textarea textarea-${t}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            minlength=${this.minLength}
            required=${this.required}
            maxlength=${this.maxLength}
            translate="no"
            .defaultValue=${this.defaultValue}
            .value=${this.value}
            ?disabled=${this.disabled}
            placeholder=${this.placeholder}
            ${rt(this.textareaChanged)}
            @keyup=${this.keyupHandler}
            @keydown=${this.keydownHandler}
            @focus=${()=>{this.hasFocused=!0,this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{this.setAttribute("data-has-interacted",""),this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
            @selectionchange=${e=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @click=${()=>{this.setCurrentLineHighlight()}}
            @touchstart=${()=>{this.setCurrentLineHighlight()}}
            @touchend=${()=>{this.setCurrentLineHighlight()}}
            @pointerdown=${()=>{this.setCurrentLineHighlight()}}
            @pointerup=${()=>{this.setCurrentLineHighlight()}}
            @input=${e=>{this.value=e.currentTarget.value,this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${e=>{this.value=e.currentTarget.value,this.setCurrentLineHighlight(),this.syncScroll()}}
            @scroll=${e=>{this.setCurrentLineHighlight(),this.syncScroll()}}
          ></textarea>
        </div>
        <!-- base-editor -->
      </div>
      <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
    `}handleTextAreaResize(t){let{target:e}=t[0],{left:r,right:s,top:a,bottom:n}=t[0].contentRect,o=r+s,d=a+n;this.dispatchEvent(new H("light-resize",{height:d,width:o})),this.syncScroll()}updated(t){super.updated(t),this.syncScroll(),setTimeout(()=>this.setCurrentLineHighlight())}syncScroll(){let t=this.textarea;if(t==null)return;let e=this.shadowRoot?.querySelector("light-code");e&&(e.scrollTop=t.scrollTop,e.scrollLeft=t.scrollLeft)}textareaChanged(t){if(!(t instanceof HTMLTextAreaElement))return;let e=t;this.textarea=e,this.formControl=e,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(e)}handleSlotChangeEvent(t){let r=t.target.assignedElements({flatten:!0}),s=this.unescapeTags(Q(...r));this.preserveWhitespace||(s=I(s.trim())),s&&(this.value=s,this.defaultValue=s,setTimeout(()=>this.textarea?.setSelectionRange(0,0)),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}keyupHandler(t){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}keydownHandler(t){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}setCurrentLineHighlight(){let t=this.getCurrentLineNumber();t!=null&&(this.currentLineNumber=t+1)}highlightCode(t){let{code:e,language:r}=t;return e=this.injectNewLine(e),e=this.unescapeTags(e),e=U(e,j.languages[r],r,{afterTokenize:[Y(),s=>{let a=s.tokens[this.currentLineNumber];a&&a instanceof W&&(a.type=a.type+" is-active")}]}),e}getCurrentLineNumber(){let t=this.textarea;return t?t.value.substr(0,t.selectionStart).split(xt).length-1:void 0}unescapeTags(t){return t.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}injectNewLine(t){return(t===""||t[t.length-1]===`
`)&&(t+=" "),t}};p(v,"baseName","light-editor"),p(v,"dependencies",{"light-code":J}),p(v,"shadowRootOptions",{...G.shadowRootOptions,delegatesFocus:!0}),p(v,"styles",[D,st,O]),p(v,"properties",{...y.formProperties,wrap:{reflect:!0,state:!1},language:{reflect:!0},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},preserveWhitespace:{type:Boolean,reflect:!0,attribute:"preserve-whitespace"},hasFocused:{type:Boolean,reflect:!0,attribute:"data-has-focused"},currentLineNumber:{attribute:!1,state:!0,type:Number}});export{v as a};
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

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/16/bridgetown/static/chunks/chunk-KW454A6O.js.map
