import{a as G,b as V,c as q,d as I,e as F,f as O,g as D,h as w,i as C,j as $,k as B,l as K,m as U,o as W,p as z,q as Q,r as A,s as Y,t as J}from"/light-pen/bridgetown/static/chunks/chunk-RVUFNO3V.js";import{d as p}from"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var{I:mt}=F;var Z=i=>i.strings===void 0,X=()=>document.createComment(""),x=(i,t,e)=>{var r;let s=i._$AA.parentNode,a=t===void 0?i._$AB:t._$AA;if(e===void 0){let n=s.insertBefore(X(),a),o=s.insertBefore(X(),a);e=new mt(n,o,i,i.options)}else{let n=e._$AB.nextSibling,o=e._$AM,c=o!==i;if(c){let l;(r=e._$AQ)===null||r===void 0||r.call(e,i),e._$AM=i,e._$AP!==void 0&&(l=i._$AU)!==o._$AU&&e._$AP(l)}if(n!==a||c){let l=e._$AA;for(;l!==n;){let m=l.nextSibling;s.insertBefore(l,a),l=m}}}return e},v=(i,t,e=i)=>(i._$AI(t,e),i),vt={},tt=(i,t=vt)=>i._$AH=t,et=i=>i._$AH,T=i=>{var t;(t=i._$AP)===null||t===void 0||t.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let s=e.nextSibling;e.remove(),e=s}};var L=(i,t)=>{var e,r;let s=i._$AN;if(s===void 0)return!1;for(let a of s)(r=(e=a)._$AO)===null||r===void 0||r.call(e,t,!1),L(a,t);return!0},_=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},it=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),yt(t)}};function bt(i){this._$AN!==void 0?(_(this),this._$AM=i,it(this)):this._$AM=i}function xt(i,t=!1,e=0){let r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let a=e;a<r.length;a++)L(r[a],!1),_(r[a]);else r!=null&&(L(r,!1),_(r));else L(this,i)}var yt=i=>{var t,e,r,s;i.type==w.CHILD&&((t=(r=i)._$AP)!==null&&t!==void 0||(r._$AP=xt),(e=(s=i)._$AQ)!==null&&e!==void 0||(s._$AQ=bt))},H=class extends ${constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),it(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),e&&(L(this,t),_(this))}setValue(t){if(Z(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var M=new WeakMap,rt=C(class extends H{render(i){return I}update(i,[t]){var e;let r=t!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.dt=(e=i.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=i.element)),I}ot(i){var t;if(typeof this.G=="function"){let e=(t=this.dt)!==null&&t!==void 0?t:globalThis,r=M.get(e);r===void 0&&(r=new WeakMap,M.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,t,e;return typeof this.G=="function"?(t=M.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||t===void 0?void 0:t.get(this.G):(e=this.G)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var st=G`
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
    display: grid;
    grid-template-columns: minmax(0, auto) minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    border: 1px solid gray;
  }

  /* Include "pre" if line numbers are disabled */
  [part~="textarea"], .light-line {
    padding: 0px;
    padding-inline-start: 6px;
  }

  /** @TODO: If line numbers disabled */
  :host([line-numbers="disabled"]) .light-line {
    padding-inline-start: 0px;
  }

  :host([line-numbers="disabled"]) [part~="pre"] {
    padding-inline-start: 6px;
  }

  [part~="textarea"] {
    color: transparent;
    /* color: rgba(255,0,0,0.2); */
    background-color: transparent;
    caret-color: inherit;
    z-index: 1;
    resize: none;
  }

  [part~="pre"] {
    border-color: transparent;
    position: relative;
  }

  [part~="base"]:focus-within {
    border-color: dodgerblue;
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
  }

  [part~="pre"], [part~="textarea"], [part~="code"], [part~="gutter"] {
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

  :host([wrap="none"]) :is([part~="pre"], [part~="textarea"], [part~="code"], [part~="gutter"]) {
    /* This would remove line-wrapping */
	  word-break: break-all;
    white-space: pre;
  }

  /** Hide scrollbars for the gutter */
  [part~="gutter"]::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }

  [part~="gutter-cell"] {
    padding-inline-end: 16px;
    padding-inline-start: 12px;
  }

  [part~="gutter"] {
    color: rgba(0,0,0,0.35);
	  background-color: rgba(50,50,50,0.08);
    font-variant-numeric: tabular-nums;
    border-inline-end: 1px solid darkgray;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;

    /* this creates line-wrapping. */
	  word-break: break-word;
    white-space: pre-wrap;
    text-align: end;
  }

  [part~="gutter-cell"] {
    font-size: 100%;
    display: block;
  }

  [part~="gutter-cell"] {
    font-size: 100%;
    display: block;
  }

  .light-line {
    display: inline-block;
    width: 100%;
  }

  [part~="base"]:focus-within .light-line.is-active {
    background-color: rgba(255,255,209,1);
  }

  /* We don't want to show the focus position if the user hasn't interacted with the textarea. */
  :where(:host([has-interacted]) .light-line.is-active) {
    background-color: rgba(0,0,0,0.05);
  }

  [part~="gutter-cell"][part~="gutter-cell--active"] {
    background-color: rgba(0,0,0,0.05);
  }


  [part~="base-editor"] {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
  }

  [part~="pre"],
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
    color: rgba(0,0,0,0.5);
  }

  [part~="pre"] {
	  color: #272727;
  }

  [part~="gutter"],
  [part~="pre"] {
	  background-color: #f7f7f7;
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0,0,0,0.15);
  }
`;var S=class extends Event{constructor(t,e={}){e.bubbles==null&&(e.bubbles=!0),e.composed==null&&(e.composed=!0),super(t,e)}};var N=class extends S{constructor(t="light-resize",e={}){super(t,e),this.height=e.height,this.width=e.width}};var at=(i,t,e)=>{let r=new Map;for(let s=t;s<=e;s++)r.set(i[s],s);return r},nt=C(class extends ${constructor(i){if(super(i),i.type!==w.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,t,e){let r;e===void 0?e=t:t!==void 0&&(r=t);let s=[],a=[],n=0;for(let o of i)s[n]=r?r(o,n):n,a[n]=e(o,n),n++;return{values:a,keys:s}}render(i,t,e){return this.ct(i,t,e).values}update(i,[t,e,r]){var s;let a=et(i),{values:n,keys:o}=this.ct(t,e,r);if(!Array.isArray(a))return this.ut=o,n;let c=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],l=[],m,P,u=0,d=a.length-1,h=0,f=n.length-1;for(;u<=d&&h<=f;)if(a[u]===null)u++;else if(a[d]===null)d--;else if(c[u]===o[h])l[h]=v(a[u],n[h]),u++,h++;else if(c[d]===o[f])l[f]=v(a[d],n[f]),d--,f--;else if(c[u]===o[f])l[f]=v(a[u],n[f]),x(i,l[f+1],a[u]),u++,f--;else if(c[d]===o[h])l[h]=v(a[d],n[h]),x(i,a[u],a[d]),d--,h++;else if(m===void 0&&(m=at(o,h,f),P=at(c,u,d)),m.has(c[u]))if(m.has(c[d])){let g=P.get(o[h]),R=g!==void 0?a[g]:null;if(R===null){let j=x(i,a[u]);v(j,n[h]),l[h]=j}else l[h]=v(R,n[h]),x(i,a[u],R),a[g]=null;h++}else T(a[d]),d--;else T(a[u]),u++;for(;h<=f;){let g=x(i,l[f+1]);v(g,n[h]),l[h++]=g}for(;u<=d;){let g=a[u++];g!==null&&T(g)}return this.ut=o,tt(i,l),q}});var wt=/\r\n|\r|\n/;function ot(i={}){return function(e){e.tokens=lt(e.tokens).map(r=>(r.length<=0&&r.push(" "),new A("light-line",r)))}}function Ct(i){return Array.isArray(i)?i:[i]}function $t(i){return i.length===0?"":i.length===1&&typeof i[0]=="string"?i[0]:i}function lt(i){let t=[],e=[t];for(let r=0;r<i.length;r++){let s=i[r];if(typeof s=="string"){let a=s.split(wt);for(let n=0;n<a.length;n++){n>0&&e.push(t=[]);let o=a[n];o&&t.push(o)}}else{let a=lt(Ct(s.content));if(a.length>1)for(let n=0;n<a.length;n++){n>0&&e.push(t=[]);let o=a[n];if(o.length){let c=new A(s.type,$t(o),s.alias);c.length=o.reduce((l,m)=>l+m.length,0),t.push(c)}}else t.push(s)}}return e}var ut={observedAttributes:["maxlength"],checkValidity(i){let t={message:"",isValid:!0,invalidKeys:[]},e=i.value??"";if(typeof e!="string")return t;let r=Number(i.maxLength||i.getAttribute("maxlength"));return r&&r>e.length&&(t.message=`Please use less than or equal to ${r} characters. You are currently using ${e.length} characters.`,t.isValid=!1,t.invalidKeys.push("tooLong")),t}};var ht={observedAttributes:["minlength"],checkValidity(i){let t={message:"",isValid:!0,invalidKeys:[]},e=i.value??"";if(typeof e!="string")return t;let r=Number(i.minLength||i.getAttribute("minlength"));return r&&r>e.length&&(t.message=`Please use greater than or equal to ${r} characters. You are currently using ${e.length} characters.`,t.isValid=!1,t.invalidKeys.push("tooShort")),t}};function k(i){if(i.disabled||i.getAttribute("disabled")){i.setValidity({});return}let t=i.allValidators;if(!t){i.setValidity({});return}let e={},r=i.formControl||void 0,s="";for(let a of t){let{isValid:n,message:o,invalidKeys:c}=a.checkValidity(i);n||(s||(s=o),c?.length>=0&&c.forEach(l=>e[l]=!0))}i.setValidity(e,s,r)}var ct={observedAttributes:["required"],checkValidity(i){let t={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&(i.value||(t.message="Please fill out this field.",t.isValid=!1,t.invalidKeys.push("valueMissing"))),t}};function ft(i){var t;return t=class extends i{constructor(...e){if(super(...e),typeof this.attachInternals!="function"){console.error("Element Internals are not supported in your browser.");return}try{this.internals=this.attachInternals()}catch(r){console.error(r)}dt(this)}connectedCallback(){this.internals!=null&&typeof super.connectedCallback=="function"&&(super.connectedCallback(),dt(this))}},p(t,"formAssociated",!0),t}function dt(i){if(i.shadowRoot&&i.shadowRoot.delegatesFocus!==!0){let t=i.getAttribute("tabindex")?.trim(),e=t?Number(t):null;if(e==null||isNaN(e))return console.error(`FormAssociated custom elements need a "tabindex" or to be registered with "{ delegatesFocus: true }".
The following element is in violation: `),console.error(i),!1}return!0}function gt(i){return class extends ft(i){constructor(...e){super(...e);p(this,"handleInvalid",e=>{e.target===this&&(this.disabled===!0||this.hasAttribute("disabled")||(this.valueHasChanged=!0,this.hasInteracted=!0,pt(this)))});p(this,"handleInteraction",e=>{this.disabled===!0||this.hasAttribute("disabled")||(!this.matches(":focus-within")&&this.valueHasChanged&&(this.hasInteracted=!0),k(this))});this.role=null,this.value="",this.previousValue=this.value,this.defaultValue="",this.name="",this.type=this.localName||"",this.disabled=!1,this.required=!1,this.hasInteracted=this.hasInteracted??!1,this.valueHasChanged=this.valueHasChanged??!1,this.validators=[],this.addEventListener("focusout",this.handleInteraction),this.addEventListener("blur",this.handleInteraction),this.addEventListener("invalid",this.handleInvalid)}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let r of this.validators)if(r.observedAttributes)for(let s of r.observedAttributes)e.add(s);return[...e]}static get validators(){return[ct]}get allValidators(){let e=this.constructor.validators||[],r=this.validators||[];return[...e,...r]}get willShowValidationMessage(){return this.disabled!==!0&&this.hasInteracted===!0}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}setCustomValidity(e){if(e){this.setValidity({customError:!0},e);return}this.setValidity({})}attributeChangedCallback(e,r,s){typeof super.attributeChangedCallback=="function"&&super.attributeChangedCallback(e,r,s),s!==r&&(e==="role"&&(this.internals.role=s||null),e==="value"&&(!this.hasInteracted&&!this.valueHasChanged&&(this.value=this.defaultValue),this.setFormValue(this.value,this.value)))}formResetCallback(){"formControl"in this&&this.formControl&&(this.formControl.value=this.defaultValue),this.value=this.defaultValue,this.hasInteracted=!1,this.valueHasChanged=!1,k(this),this.setFormValue(this.defaultValue,this.defaultValue)}formDisabledCallback(e){this.disabled=e,k(this)}formStateRestoreCallback(e,r){this.value=e,this.formControl&&(this.formControl.value=e)}setValidity(...e){let r=e[0],s=e[1],a=e[2];a||(a=this.validationTarget),this.internals.setValidity(r,s,a),pt(this)}reportValidity(){return this.internals.reportValidity()}checkValidity(){return this.internals.checkValidity()}get validationTarget(){return this.formControl||void 0}setFormValue(...e){this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.internals.setFormValue(...e),k(this)}get form(){return this.internals.form}}}function pt(i){if(i.disabled||i.hasAttribute("disabled")){i.removeAttribute("data-invalid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-valid");return}i.validity.valid?(i.removeAttribute("data-invalid"),i.removeAttribute("data-user-invalid"),i.setAttribute("data-valid",""),i.toggleAttribute("data-user-valid",i.hasInteracted&&i.valueHasChanged)):(i.removeAttribute("data-valid"),i.removeAttribute("data-user-valid"),i.setAttribute("data-invalid",""),i.toggleAttribute("data-user-invalid",i.hasInteracted&&i.valueHasChanged))}var At=Object.freeze({role:{reflect:!0},name:{reflect:!0},type:{reflect:!0},disabled:{type:Boolean},required:{reflect:!0,type:Boolean},defaultValue:{attribute:"value",reflect:!0},valueHasChanged:{type:Boolean,attribute:!1,state:!0},hasInteracted:{attribute:!1,type:Boolean,state:!0},formControl:{attribute:!1,state:!0},value:{attribute:!1,state:!0}});E.formProperties=At;function E(i){return class extends gt(i){constructor(){super(),this.constructor.properties?.disabled?.reflect===!0&&(console.warn('The following element has their "disabled" property set to reflect.'),console.warn(this),console.warn("For further reading: https://github.com/whatwg/html/issues/8365"))}willUpdate(t){typeof super.willUpdate=="function"&&(t.has("role")&&(this.internals.role=t.get("role")||null),t.has("formControl")&&(this.formControl?.addEventListener("focusout",this.handleInteraction),this.formControl?.addEventListener("blur",this.handleInteraction),this.formControl?.addEventListener("click",this.handleInteraction)),(t.has("formControl")||t.has("defaultValue")||t.has("value"))&&this.setFormValue(this.value,this.value),super.willUpdate(t))}}}y.formProperties=Object.freeze(Object.assign({autocomplete:{},wrap:{},readOnly:{attribute:"readonly",type:Boolean,reflect:!0},placeholder:{},dirName:{},rows:{type:Number},cols:{type:Number},maxLength:{attribute:"maxlength",type:Number},minLength:{attribute:"minlength",type:Number}},E.formProperties));function y(i){return class extends E(i){static get validators(){return[...super.validators,ut,ht]}static get properties(){let t=super.properties;return t?{...y.formProperties,...t}:y.formProperties}constructor(...t){super(...t),this.autocomplete="",this.wrap="",this.value="",this.defaultValue="",this.maxLength=-1,this.minLength=-1,this.readOnly=!1,this.placeholder="",this.required=!1,this.dirName="",this.selectionDirection="forward",this.rows=2,this.cols=20}setSelectionRange(...t){let e=this.formControl;e&&"selectionRange"in e&&e.setSelectionRange(...t)}setRangeText(...t){let e=this.formControl;e&&"setRangeText"in e&&e.setRangeText(...t)}get textLength(){let t=this.formControl;return t&&"textLength"in t?t.textLength:0}get selectionStart(){let t=this.formControl;return t&&"selectionStart"in t?t.selectionStart:0}get selectionEnd(){let t=this.formControl;return t&&"selectionEnd"in t?t.selectionEnd:0}select(){let t=this.formControl;t&&t.select?.()}}}var Lt=/\r\n?|\n/g,b=class extends y(K){constructor(){super(),this.language="html",this.value="",this.defaultValue="",this.textarea=null,this.formControl=null,this.wrap="hard",this.preserveWhitespace=!1}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value")||"",this.defaultValue=this.getAttribute("value")||"",this.value===this.getAttribute("value")&&this.preserveWhitespace!==!0&&(this.value=z(this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim())}willUpdate(t){t.has("value")&&this.dispatchEvent(new Event("light-value-change",{bubbles:!0,composed:!0})),super.willUpdate(t)}click(){this.textarea?this.textarea.click():this.click()}focus(t){this.textarea?this.textarea.focus(t):this.focus(t)}render(){let t=this.language,e=B(this.highlightCode({code:this.value,language:t}));return this.syncScroll(),V`
			<div part="base">
        <!-- Super important to not have white space here due to how white space is handled -->
			  <div part="gutter"
			    @focus=${()=>{this.textarea?.focus()}}
			    @click=${r=>{this.textarea?.focus()}}
			  ></div>
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
				  <pre
            id="pre-${t}"
            data-code-lang=${t}
            aria-hidden="true"
            part="pre pre-${t}"
            class="language-${t}"
            tabindex="-1"
			      @focus=${()=>{this.textarea?.focus()}}
			      @click=${r=>{this.textarea?.focus()}}
          ><code
              part="code code-${t}"
              class="language-${t}"
            >${e}</code></pre>
          <!-- IMPORTANT! There must be no white-space above. -->
				  <textarea
				    aria-labelledby="label"
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
            @focus=${()=>{this.hasInteracted=!0,this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{this.hasInteracted=!0,this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
            @selectionchange=${r=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @click=${()=>{this.setCurrentLineHighlight()}}
            @pointerdown=${()=>{this.setCurrentLineHighlight()}}
            @pointerup=${()=>{this.setCurrentLineHighlight()}}
            @input=${r=>{this.value=r.currentTarget.value,this.injectGutterCells(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${r=>{this.value=r.currentTarget.value,this.injectGutterCells(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @scroll=${r=>{this.setCurrentLineHighlight(),this.syncScroll()}}
          ></textarea>
        </div> <!-- base-editor -->
			</div> <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
		`}handleTextAreaResize(t){let{target:e}=t[0],{left:r,right:s,top:a,bottom:n}=t[0].contentRect,o=r+s,c=a+n;this.dispatchEvent(new N("light-resize",{height:c,width:o})),this.syncScroll(),this.injectGutterCells()}updated(t){super.updated(t),this.syncScroll(),this.injectGutterCells(),setTimeout(()=>this.setCurrentLineHighlight())}syncScroll(){let t=this.textarea;if(t==null)return;let e=this.shadowRoot?.querySelector("pre");e&&(e.scrollTop=t.scrollTop,e.scrollLeft=t.scrollLeft);let r=this.shadowRoot?.querySelector("[part~='gutter']");r&&(r.scrollTop=t.scrollTop,r.scrollLeft=t.scrollLeft)}textareaChanged(t){if(!(t instanceof HTMLTextAreaElement))return;let e=t;this.textarea=e,this.formControl=e,this.textareaResizeObserver=new ResizeObserver(r=>this.handleTextAreaResize(r)),this.textareaResizeObserver.observe(e)}handleSlotChangeEvent(t){let r=t.target.assignedElements({flatten:!0}),s=this.unescapeTags(Q(...r));this.preserveWhitespace||(s=z(s.trim())),s&&(this.value=s,this.defaultValue=s,setTimeout(()=>this.textarea?.setSelectionRange(0,0)),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}keyupHandler(t){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}keydownHandler(t){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}setCurrentLineHighlight(){let t=this.shadowRoot?.querySelector("code"),e=this.shadowRoot?.querySelector("[part~='gutter']"),r=this.getCurrentLineNumber();if(this.currentLineNumber===r)return;let s=this.currentLineNumber;if(this.currentLineNumber=r,r!=null&&r>=0){let a=t?.children[r],n=e?.children[r];a&&(t.children[s]?.classList?.remove("is-active"),a.classList.add("is-active")),n&&(e.children[s]?.part?.remove("gutter-cell--active"),n.part.add("gutter-cell--active"))}}highlightCode(t){let{code:e,language:r}=t;return e=this.injectNewLine(e),e=this.unescapeTags(e),e=J(e,Y.languages[r],r,{afterTokenize:[ot(),s=>{let a=s.tokens[this.currentLineNumber];a&&a instanceof A&&(a.type=a.type+" is-active")}]}),e}injectGutterCells(){let t=this.shadowRoot?.querySelector("[part~='gutter']");t&&O(this.renderGutterCells(),t)}getCurrentLineNumber(){let t=this.textarea;return t?t.value.substr(0,t.selectionStart).split(Lt).length-1:void 0}renderGutterCells(){let t=this.shadowRoot?.querySelector("pre > code")?.children;if(!t)return"";let e=Array.from(t);return nt(e,(r,s)=>{let a=r.offsetHeight,n=s===this.currentLineNumber;return s+a+n.toString()},(r,s)=>{let a=r.offsetHeight,o=`gutter-cell ${s===this.currentLineNumber?"gutter-cell--active":""}`;return a?V`<span part=${o} style="${`height: ${a}px`}">${s}</span>`:V`<span part=${o}>${s}</span>`})}unescapeTags(t){return t.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}injectNewLine(t){return(t===""||t[t.length-1]===`
`)&&(t+=" "),t}};p(b,"baseName","light-editor"),p(b,"shadowRootOptions",{...D.shadowRootOptions,delegatesFocus:!0}),p(b,"styles",[U,st,W]),p(b,"properties",Object.assign({language:{reflect:!0},preserveWhitespace:{type:Boolean,reflect:!0,attribute:"preserve-whitespace"}},y.formProperties));export{b as a};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-VINJAFFR.js.map