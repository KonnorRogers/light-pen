import{d as T}from"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var Fe,ie=window,Y=ie.trustedTypes,qe=Y?Y.createPolicy("lit-html",{createHTML:t=>t}):void 0,se="$lit$",j=`lit$${(Math.random()+"").slice(9)}$`,Re="?"+j,xt=`<${Re}>`,G=document,P=()=>G.createComment(""),ee=t=>t===null||typeof t!="object"&&typeof t!="function",Xe=Array.isArray,Qe=t=>Xe(t)||typeof t?.[Symbol.iterator]=="function",Ce=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,We=/-->/g,Ze=/>/g,I=RegExp(`>|${Ce}(?:([^\\s"'>=/]+)(${Ce}*=${Ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ve=/'/g,Ye=/"/g,Pe=/^(?:script|style|textarea|title)$/i,et=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Mt=et(1),Ot=et(2),M=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Je=new WeakMap,N=G.createTreeWalker(G,129,null,!1);function tt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return qe!==void 0?qe.createHTML(e):e}var nt=(t,e)=>{let n=t.length-1,r=[],o,a=e===2?"<svg>":"",i=Q;for(let c=0;c<n;c++){let s=t[c],u,l,p=-1,h=0;for(;h<s.length&&(i.lastIndex=h,l=i.exec(s),l!==null);)h=i.lastIndex,i===Q?l[1]==="!--"?i=We:l[1]!==void 0?i=Ze:l[2]!==void 0?(Pe.test(l[2])&&(o=RegExp("</"+l[2],"g")),i=I):l[3]!==void 0&&(i=I):i===I?l[0]===">"?(i=o??Q,p=-1):l[1]===void 0?p=-2:(p=i.lastIndex-l[2].length,u=l[1],i=l[3]===void 0?I:l[3]==='"'?Ye:Ve):i===Ye||i===Ve?i=I:i===We||i===Ze?i=Q:(i=I,o=void 0);let g=i===I&&t[c+1].startsWith("/>")?" ":"";a+=i===Q?s+xt:p>=0?(r.push(u),s.slice(0,p)+se+s.slice(p)+j+g):s+j+(p===-2?(r.push(void 0),c):g)}return[tt(t,a+(t[n]||"<?>")+(e===2?"</svg>":"")),r]},te=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let a=0,i=0,c=e.length-1,s=this.parts,[u,l]=nt(e,n);if(this.el=t.createElement(u,r),N.currentNode=this.el.content,n===2){let p=this.el.content,h=p.firstChild;h.remove(),p.append(...h.childNodes)}for(;(o=N.nextNode())!==null&&s.length<c;){if(o.nodeType===1){if(o.hasAttributes()){let p=[];for(let h of o.getAttributeNames())if(h.endsWith(se)||h.startsWith(j)){let g=l[i++];if(p.push(h),g!==void 0){let d=o.getAttribute(g.toLowerCase()+se).split(j),f=/([.?@])?(.*)/.exec(g);s.push({type:1,index:a,name:f[2],strings:d,ctor:f[1]==="."?ue:f[1]==="?"?ce:f[1]==="@"?de:W})}else s.push({type:6,index:a})}for(let h of p)o.removeAttribute(h)}if(Pe.test(o.tagName)){let p=o.textContent.split(j),h=p.length-1;if(h>0){o.textContent=Y?Y.emptyScript:"";for(let g=0;g<h;g++)o.append(p[g],P()),N.nextNode(),s.push({type:2,index:++a});o.append(p[h],P())}}}else if(o.nodeType===8)if(o.data===Re)s.push({type:2,index:a});else{let p=-1;for(;(p=o.data.indexOf(j,p+1))!==-1;)s.push({type:7,index:a}),p+=j.length-1}a++}}static createElement(e,n){let r=G.createElement("template");return r.innerHTML=e,r}};function q(t,e,n=t,r){var o,a,i,c;if(e===M)return e;let s=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl,u=ee(e)?void 0:e._$litDirective$;return s?.constructor!==u&&((a=s?._$AO)===null||a===void 0||a.call(s,!1),u===void 0?s=void 0:(s=new u(t),s._$AT(t,n,r)),r!==void 0?((i=(c=n)._$Co)!==null&&i!==void 0?i:c._$Co=[])[r]=s:n._$Cl=s),s!==void 0&&(e=q(t,s._$AS(t,e.values),s,r)),e}var le=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;let{el:{content:r},parts:o}=this._$AD,a=((n=e?.creationScope)!==null&&n!==void 0?n:G).importNode(r,!0);N.currentNode=a;let i=N.nextNode(),c=0,s=0,u=o[0];for(;u!==void 0;){if(c===u.index){let l;u.type===2?l=new J(i,i.nextSibling,this,e):u.type===1?l=new u.ctor(i,u.name,u.strings,this,e):u.type===6&&(l=new pe(i,this,e)),this._$AV.push(l),u=o[++s]}c!==u?.index&&(i=N.nextNode(),c++)}return N.currentNode=G,a}v(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},J=class t{constructor(e,n,r,o){var a;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cp=(a=o?.isConnected)===null||a===void 0||a}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=q(this,e,n),ee(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Qe(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.$(G.createTextNode(e)),this._$AH=e}g(e){var n;let{values:r,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=te.createElement(tt(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===a)this._$AH.v(r);else{let i=new le(a,this),c=i.u(this.options);i.v(r),this.$(c),this._$AH=i}}_$AC(e){let n=Je.get(e.strings);return n===void 0&&Je.set(e.strings,n=new te(e)),n}T(e){Xe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,o=0;for(let a of e)o===n.length?n.push(r=new t(this.k(P()),this.k(P()),this,this.options)):r=n[o],r._$AI(a),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},W=class{constructor(e,n,r,o,a){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,o){let a=this.strings,i=!1;if(a===void 0)e=q(this,e,n,0),i=!ee(e)||e!==this._$AH&&e!==M,i&&(this._$AH=e);else{let c=e,s,u;for(e=a[0],s=0;s<a.length-1;s++)u=q(this,c[r+s],n,s),u===M&&(u=this._$AH[s]),i||(i=!ee(u)||u!==this._$AH[s]),u===A?e=A:e!==A&&(e+=(u??"")+a[s+1]),this._$AH[s]=u}i&&!o&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ue=class extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},At=Y?Y.emptyScript:"",ce=class extends W{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,At):this.element.removeAttribute(this.name)}},de=class extends W{constructor(e,n,r,o,a){super(e,n,r,o,a),this.type=5}_$AI(e,n=this){var r;if((e=(r=q(this,e,n,0))!==null&&r!==void 0?r:A)===M)return;let o=this._$AH,a=e===A&&o!==A||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==A&&(o===A||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},pe=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}},Bt={O:se,P:j,A:Re,C:1,M:nt,L:le,R:Qe,D:q,I:J,V:W,H:ce,N:de,U:ue,F:pe},Ke=ie.litHtmlPolyfillSupport;Ke?.(te,J),((Fe=ie.litHtmlVersions)!==null&&Fe!==void 0?Fe:ie.litHtmlVersions=[]).push("2.8.0");var rt=(t,e,n)=>{var r,o;let a=(r=n?.renderBefore)!==null&&r!==void 0?r:e,i=a._$litPart$;if(i===void 0){let c=(o=n?.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=i=new J(e.insertBefore(P(),c),c,void 0,n??{})}return i._$AI(t),i};var he=window,ge=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),ot=new WeakMap,ne=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(ge&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=ot.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ot.set(n,e))}return e}toString(){return this.cssText}},at=t=>new ne(typeof t=="string"?t:t+"",void 0,Le),K=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,o,a)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[a+1],t[0]);return new ne(n,t,Le)},Te=(t,e)=>{ge?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{let r=document.createElement("style"),o=he.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)})},fe=ge?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return at(n)})(t):t;var je,ve=window,it=ve.trustedTypes,$t=it?it.emptyScript:"",st=ve.reactiveElementPolyfillSupport,Oe={toAttribute(t,e){switch(e){case Boolean:t=t?$t:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},lt=(t,e)=>e!==t&&(e==e||t==t),Me={attribute:!0,type:String,converter:Oe,reflect:!1,hasChanged:lt},Be="finalized",O=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((n,r)=>{let o=this._$Ep(r,n);o!==void 0&&(this._$Ev.set(o,r),e.push(o))}),e}static createProperty(e,n=Me){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(o){let a=this[e];this[n]=o,this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Me}static finalize(){if(this.hasOwnProperty(Be))return!1;this[Be]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(let o of r)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)n.unshift(fe(o))}else e!==void 0&&n.push(fe(e));return n}static _$Ep(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;let n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Te(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Me){var o;let a=this.constructor._$Ep(e,r);if(a!==void 0&&r.reflect===!0){let i=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:Oe).toAttribute(n,r.type);this._$El=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$El=null}}_$AK(e,n){var r;let o=this.constructor,a=o._$Ev.get(e);if(a!==void 0&&this._$El!==a){let i=o.getPropertyOptions(a),c=typeof i.converter=="function"?{fromAttribute:i.converter}:((r=i.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?i.converter:Oe;this._$El=a,this[a]=c.fromAttribute(n,i.type),this._$El=null}}requestUpdate(e,n,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||lt)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let n=!1,r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(r)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};O[Be]=!0,O.elementProperties=new Map,O.elementStyles=[],O.shadowRootOptions={mode:"open"},st?.({ReactiveElement:O}),((je=ve.reactiveElementVersions)!==null&&je!==void 0?je:ve.reactiveElementVersions=[]).push("1.6.3");var De,He;var B=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;let r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rt(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return M}};B.finalized=!0,B._$litElement$=!0,(De=globalThis.litElementHydrateSupport)===null||De===void 0||De.call(globalThis,{LitElement:B});var ut=globalThis.litElementPolyfillSupport;ut?.({LitElement:B});((He=globalThis.litElementVersions)!==null&&He!==void 0?He:globalThis.litElementVersions=[]).push("3.3.3");var ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dt=t=>(...e)=>({_$litDirective$:t,values:e}),me=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var re=class extends me{constructor(e){if(super(e),this.et=A,e.type!==ct.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this.ft=void 0,this.et=e;if(e===M)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};re.directiveName="unsafeHTML",re.resultType=1;var nn=dt(re);function be(t){var e;return e=class extends t{static define(r,o,a){r||(r=this.baseName),o||(o=this);let i=window.customElements;this.__registry instanceof CustomElementRegistry&&(i=this.__registry);let c=!!i.get(r);c&&this.warnOnExistingElement&&console.warn(`${r} has already been registered.`),!c&&o&&i.define(r,class extends o{},a)}},T(e,"baseName",""),T(e,"warnOnExistingElement",!1),e}var ze=class extends be(HTMLElement){};var pt=new WeakMap;function _t(t,e){let n=e;for(;n;){if(pt.get(n)===t)return!0;n=Object.getPrototypeOf(n)}return!1}function oe(t){return e=>{if(_t(t,e))return e;let n=t(e);return pt.set(n,t),n}}var ye=!!ShadowRoot.prototype.createElement,St=t=>{var e;return e=class extends t{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(r){this.__shadowRootOptions=r}constructor(...r){super(...r),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(r){let o=this.constructor;o.__registry=r}createRenderRoot(){let r=this.constructor,{scopedElements:o,shadowRootOptions:a}=r;if(!this.registry||this.registry===r.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=ye?new CustomElementRegistry:customElements;for(let[u,l]of Object.entries(o))this.defineScopedElement(u,l)}let c={mode:"open",...a,customElements:this.registry},s=this.attachShadow(c);return ye&&(this.renderOptions.creationScope=s),s instanceof ShadowRoot&&this.adoptStyles(s),s}createScopedElement(r){return(ye?this.shadowRoot:document).createElement(r)}adoptStyles(r){}defineScopedElement(r,o){let a=this.registry.get(r);return a&&ye===!1&&a!==o&&console.error([`You are trying to re-register the "${r}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),a?this.registry.get(r):this.registry.define(r,o)}},T(e,"__registry",window.customElements),e},Et=oe(St);var Ft=t=>class extends t{static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(n){this.__shadowRootOptions=n}get shadowRootOptions(){return this.constructor.shadowRootOptions}createRenderRoot(){return this.shadowRoot??this.attachShadow(this.shadowRootOptions||{mode:"open"})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.renderRoot==null&&(this.renderRoot=this.createRenderRoot())}},Ct=oe(Ft);var Ue=class extends be(B){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,n])=>{n.define(e)})}};T(Ue,"dependencies",{});var Bn=K`
*, *:after, *:before {
  box-sizing: border-box;
}

.visually-hidden:not(:focus-within) {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  white-space: nowrap;
}

[hidden] {
  display: none !important;
}

:host {
  display: block;
}
`,Dn=K`
button {
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid transparent;
  background-color: inherit;
  padding: 0.4em 0.6em;
  color: inherit;
  border-radius: 4px;
}

button:focus-visible {
  outline: 2px solid hsl(203, 77%, 43%);
}

@supports not selector(:focus-visible) {
  button:focus-within {
    outline: 2px solid hsl(203, 77%, 43%);
  }
}

button:is(:active, :hover, .is-active) {
  cursor: pointer;
  color: hsla(203, 77%, 43%);
  background-color: hsla(203, 77%, 93%);
}
`;var Un=K`
/**
 * One Light theme for prism.js
 * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
 */

/**
 * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
 * From colors.less
 * --mono-1: hsl(230, 8%, 24%);
 * --mono-2: hsl(230, 6%, 44%);
 * --mono-3: hsl(230, 4%, 64%)
 * --hue-1: hsl(198, 99%, 37%);
 * --hue-2: hsl(221, 87%, 60%);
 * --hue-3: hsl(301, 63%, 40%);
 * --hue-4: hsl(119, 34%, 47%);
 * --hue-5: hsl(5, 74%, 59%);
 * --hue-5-2: hsl(344, 84%, 43%);
 * --hue-6: hsl(35, 99%, 36%);
 * --hue-6-2: hsl(35, 99%, 40%);
 * --syntax-fg: hsl(230, 8%, 24%);
 * --syntax-bg: hsl(230, 1%, 98%);
 * --syntax-gutter: hsl(230, 1%, 62%);
 * --syntax-guide: hsla(230, 8%, 24%, 0.2);
 * --syntax-accent: hsl(230, 100%, 66%);
 * From syntax-variables.less
 * --syntax-selection-color: hsl(230, 1%, 90%);
 * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
 * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);
 */
code[class*="language-"],
pre[class*="language-"] {
	background: hsl(230, 1%, 98%);
	color: hsl(230, 8%, 24%);
	direction: ltr;
	text-align: left;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Selection */
code[class*="language-"]::-moz-selection,
code[class*="language-"] *::-moz-selection,
pre[class*="language-"] *::-moz-selection {
	background: hsl(230, 1%, 90%);
	color: inherit;
}

code[class*="language-"]::selection,
code[class*="language-"] *::selection,
pre[class*="language-"] *::selection {
	background: hsl(230, 1%, 90%);
	color: inherit;
}

.token.comment,
.token.prolog,
.token.cdata {
	color: hsl(230, 4%, 64%);
}

.token.doctype,
.token.punctuation,
.token.entity {
	color: hsl(230, 8%, 24%);
}

.token.attr-name,
.token.class-name,
.token.boolean,
.token.constant,
.token.number,
.token.atrule {
	color: hsl(35, 99%, 36%);
}

.token.keyword {
	color: hsl(301, 63%, 40%);
}

.token.property,
.token.tag,
.token.symbol,
.token.deleted,
.token.important {
	color: hsl(5, 74%, 59%);
}

.token.selector,
.token.string,
.token.char,
.token.builtin,
.token.inserted,
.token.regex,
.token.attr-value,
.token.attr-value > .token.punctuation {
	color: hsl(119, 34%, 47%);
}

.token.variable,
.token.operator,
.token.function {
	color: hsl(221, 87%, 60%);
}

.token.url {
	color: hsl(198, 99%, 37%);
}

/* HTML overrides */
.token.attr-value > .token.punctuation.attr-equals,
.token.special-attr > .token.attr-value > .token.value.css {
	color: hsl(230, 8%, 24%);
}

/* CSS overrides */
.language-css .token.selector {
	color: hsl(5, 74%, 59%);
}

.language-css .token.property {
	color: hsl(230, 8%, 24%);
}

.language-css .token.function,
.language-css .token.url > .token.function {
	color: hsl(198, 99%, 37%);
}

.language-css .token.url > .token.string.url {
	color: hsl(119, 34%, 47%);
}

.language-css .token.important,
.language-css .token.atrule .token.rule {
	color: hsl(301, 63%, 40%);
}

/* JS overrides */
.language-javascript .token.operator {
	color: hsl(301, 63%, 40%);
}

.language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation {
	color: hsl(344, 84%, 43%);
}

/* JSON overrides */
.language-json .token.operator {
	color: hsl(230, 8%, 24%);
}

.language-json .token.null.keyword {
	color: hsl(35, 99%, 36%);
}

/* MD overrides */
.language-markdown .token.url,
.language-markdown .token.url > .token.operator,
.language-markdown .token.url-reference.url > .token.string {
	color: hsl(230, 8%, 24%);
}

.language-markdown .token.url > .token.content {
	color: hsl(221, 87%, 60%);
}

.language-markdown .token.url > .token.url,
.language-markdown .token.url-reference.url {
	color: hsl(198, 99%, 37%);
}

.language-markdown .token.blockquote.punctuation,
.language-markdown .token.hr.punctuation {
	color: hsl(230, 4%, 64%);
	font-style: italic;
}

.language-markdown .token.code-snippet {
	color: hsl(119, 34%, 47%);
}

.language-markdown .token.bold .token.content {
	color: hsl(35, 99%, 36%);
}

.language-markdown .token.italic .token.content {
	color: hsl(301, 63%, 40%);
}

.language-markdown .token.strike .token.content,
.language-markdown .token.strike .token.punctuation,
.language-markdown .token.list.punctuation,
.language-markdown .token.title.important > .token.punctuation {
	color: hsl(5, 74%, 59%);
}

/* General */
.token.bold {
	font-weight: bold;
}

.token.comment,
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.namespace {
	opacity: 0.8;
}

/* Plugin overrides */
/* Selectors should have higher specificity than those in the plugins' default stylesheets */

/* Show Invisibles plugin overrides */
.token.token.tab:not(:empty):before,
.token.token.cr:before,
.token.token.lf:before,
.token.token.space:before {
	color: hsla(230, 8%, 24%, 0.2);
}

/* Toolbar plugin overrides */
/* Space out all buttons and move them away from the right edge of the code block */
div.code-toolbar > .toolbar.toolbar > .toolbar-item {
	margin-right: 0.4em;
}

/* Styling the buttons */
div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {
	background: hsl(230, 1%, 90%);
	color: hsl(230, 6%, 44%);
	padding: 0.1em 0.4em;
	border-radius: 0.3em;
}

div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
	background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */
	color: hsl(230, 8%, 24%);
}

/* Line Highlight plugin overrides */
/* The highlighted line itself */
.line-highlight.line-highlight {
	background: hsla(230, 8%, 24%, 0.05);
}

/* Default line numbers in Line Highlight plugin */
.line-highlight.line-highlight:before,
.line-highlight.line-highlight[data-end]:after {
	background: hsl(230, 1%, 90%);
	color: hsl(230, 8%, 24%);
	padding: 0.1em 0.6em;
	border-radius: 0.3em;
	box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2); /* same as Toolbar plugin default */
}

/* Hovering over a linkable line number (in the gutter area) */
/* Requires Line Numbers plugin as well */
pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before {
	background-color: hsla(230, 8%, 24%, 0.05);
}

/* Line Numbers and Command Line plugins overrides */
/* Line separating gutter from coding area */
.line-numbers.line-numbers .line-numbers-rows,
.command-line .command-line-prompt {
	border-right-color: hsla(230, 8%, 24%, 0.2);
}

/* Stuff in the gutter */
.line-numbers .line-numbers-rows > span:before,
.command-line .command-line-prompt > span:before {
	color: hsl(230, 1%, 62%);
}

/* Match Braces plugin overrides */
/* Note: Outline colour is inherited from the braces */
.rainbow-braces .token.token.punctuation.brace-level-1,
.rainbow-braces .token.token.punctuation.brace-level-5,
.rainbow-braces .token.token.punctuation.brace-level-9 {
	color: hsl(5, 74%, 59%);
}

.rainbow-braces .token.token.punctuation.brace-level-2,
.rainbow-braces .token.token.punctuation.brace-level-6,
.rainbow-braces .token.token.punctuation.brace-level-10 {
	color: hsl(119, 34%, 47%);
}

.rainbow-braces .token.token.punctuation.brace-level-3,
.rainbow-braces .token.token.punctuation.brace-level-7,
.rainbow-braces .token.token.punctuation.brace-level-11 {
	color: hsl(221, 87%, 60%);
}

.rainbow-braces .token.token.punctuation.brace-level-4,
.rainbow-braces .token.token.punctuation.brace-level-8,
.rainbow-braces .token.token.punctuation.brace-level-12 {
	color: hsl(301, 63%, 40%);
}

/* Diff Highlight plugin overrides */
/* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
pre.diff-highlight > code .token.token.deleted:not(.prefix),
pre > code.diff-highlight .token.token.deleted:not(.prefix) {
	background-color: hsla(353, 100%, 66%, 0.15);
}

pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection {
	background-color: hsla(353, 95%, 66%, 0.25);
}

pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
	background-color: hsla(353, 95%, 66%, 0.25);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix),
pre > code.diff-highlight .token.token.inserted:not(.prefix) {
	background-color: hsla(137, 100%, 55%, 0.15);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection {
	background-color: hsla(135, 73%, 55%, 0.25);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
	background-color: hsla(135, 73%, 55%, 0.25);
}

/* Previewers plugin overrides */
/* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */
/* Border around popup */
.prism-previewer.prism-previewer:before,
.prism-previewer-gradient.prism-previewer-gradient div {
	border-color: hsl(0, 0, 95%);
}

/* Angle and time should remain as circles and are hence not included */
.prism-previewer-color.prism-previewer-color:before,
.prism-previewer-gradient.prism-previewer-gradient div,
.prism-previewer-easing.prism-previewer-easing:before {
	border-radius: 0.3em;
}

/* Triangles pointing to the code */
.prism-previewer.prism-previewer:after {
	border-top-color: hsl(0, 0, 95%);
}

.prism-previewer-flipped.prism-previewer-flipped.after {
	border-bottom-color: hsl(0, 0, 95%);
}

/* Background colour within the popup */
.prism-previewer-angle.prism-previewer-angle:before,
.prism-previewer-time.prism-previewer-time:before,
.prism-previewer-easing.prism-previewer-easing {
	background: hsl(0, 0%, 100%);
}

/* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */
/* For time, this is the alternate colour */
.prism-previewer-angle.prism-previewer-angle circle,
.prism-previewer-time.prism-previewer-time circle {
	stroke: hsl(230, 8%, 24%);
	stroke-opacity: 1;
}

/* Stroke colours of the handle, direction point, and vector itself */
.prism-previewer-easing.prism-previewer-easing circle,
.prism-previewer-easing.prism-previewer-easing path,
.prism-previewer-easing.prism-previewer-easing line {
	stroke: hsl(230, 8%, 24%);
}

/* Fill colour of the handle */
.prism-previewer-easing.prism-previewer-easing circle {
	fill: transparent;
}

`;function Nn(t,...e){let n=[],r=typeof t=="string"?[t]:t.slice();r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");for(let a=0;a<r.length;a++){let i;(i=r[a].match(/\n[\t ]+/g))&&n.push(...i)}if(n.length){let a=Math.min(...n.map(c=>c.length-1)),i=new RegExp(`
[	 ]{${a}}`,"g");for(let c=0;c<r.length;c++)r[c]=r[c].replace(i,`
`)}r[0]=r[0].replace(/^\r?\n/,"");let o=r[0];for(let a=0;a<e.length;a++)o+=e[a]+r[a+1];return o}function qn(...t){let e=[],n=document.createElement("div");for(let r of t){if(r instanceof HTMLTemplateElement){let o=r.content.cloneNode(!0);n.append(o),e.push(n.innerHTML),n.innerHTML="";continue}if(r instanceof HTMLScriptElement){e.push(r.textContent);continue}if(r instanceof HTMLTextAreaElement){e.push(r.value);continue}e.push(r.innerHTML)}return e.join(`
`)}var Ie=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},ae=Ie;var we=class{constructor(e={}){let n={},{disableWorkerMessageHandler:r,manual:o}=e;this.manual=o,this.manual==null&&(this.manual=!0),this.plugins={};let a=this;this.disableWorkerMessageHandler=!!r,this.Token=C,this.util=new Ne(this);let i=this.util;if(this.languages={plain:n,plaintext:n,text:n,txt:n,extend:(l,p)=>{let h=this.util.clone(this.languages[l]);for(var g in p)h[g]=p[g];return h},insertBefore:(l,p,h,g)=>{g||(g=this.languages);let d=g[l],f={};for(let b in d)if(d.hasOwnProperty(b)){if(b==p)for(var m in h)h.hasOwnProperty(m)&&(f[m]=h[m]);h.hasOwnProperty(b)||(f[b]=d[b])}var v=g[l];return g[l]=f,this.languages.DFS(this.languages,function(b,y){y===v&&b!=l&&(this[b]=f)}),f},DFS(l,p,h,g){g=g||{};var d=i.objId;for(var f in l)if(l.hasOwnProperty(f)){p.call(l,f,l[f],h||f);var m=l[f],v=i.type(m);v==="Object"&&!g[d(m)]?(g[d(m)]=!0,this.DFS(m,p,null,g)):v==="Array"&&!g[d(m)]&&(g[d(m)]=!0,this.DFS(m,p,f,g))}}},this.hooks={all:{},add:function(l,p){var h=a.hooks.all;h[l]=h[l]||[],h[l].push(p)},run:function(l,p){var h=a.hooks.all[l];if(!(!h||!h.length))for(var g=0,d;d=h[g++];)d(p)}},!ae.document)return ae.addEventListener&&(a.disableWorkerMessageHandler||ae.addEventListener("message",function(l){var p=JSON.parse(l.data),h=p.language,g=p.code,d=p.immediateClose;ae.postMessage(a.highlight(g,a.languages[h],h)),d&&Ie.close()},!1)),a;function c(){a.manual||a.highlightAll()}let s=this.util.currentScript();if(s&&(this.filename=s.src,s.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var u=document.readyState;u==="loading"||u==="interactive"&&s&&s.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}}highlightAll(e,n){this.highlightAllUnder(document,e,n)}highlightAllUnder(e,n,r){var o={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",o),o.elements=Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)),this.hooks.run("before-all-elements-highlight",o);for(var a=0,i;i=o.elements[a++];)this.highlightElement(i,n===!0,o.callback)}highlightElement(e,n,r){var o=this.util.getLanguage(e),a=this.languages[o];this.util.setLanguage(e,o);var i=e.parentElement;i&&i.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(i,o);var c=e.textContent,s={element:e,language:o,grammar:a,code:c};let u=p=>{s.highlightedCode=p,this.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,this.hooks.run("after-highlight",s),this.hooks.run("complete",s),r&&r.call(s.element)};if(this.hooks.run("before-sanity-check",s),i=s.element.parentElement,i&&i.nodeName.toLowerCase()==="pre"&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!s.code){this.hooks.run("complete",s),r&&r.call(s.element);return}if(this.hooks.run("before-highlight",s),!s.grammar){u(this.util.encode(s.code));return}if(n&&Ie.Worker){var l=new Worker(this.filename);l.onmessage=function(p){u(p.data)},l.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(this.highlight(s.code,s.grammar,s.language))}highlight(e,n,r){var o={code:e,grammar:n,language:r};if(this.hooks.run("before-tokenize",o),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=this.tokenize(o.code,o.grammar),this.hooks.run("after-tokenize",o),C.stringify(this.util.encode(o.tokens),o.language,this)}tokenize(e,n){var r=n?.rest;if(r){for(var o in r)n[o]=r[o];delete n.rest}var a=new Lt;return ke(a,a.head,e),ft(e,a,n,a.head,0,this),jt(a)}},C=class{constructor(e,n,r,o){this.type=e,this.content=n,this.alias=r,this.length=(o||"").length|0}static stringify(e,n,r){let o=this;if(typeof e=="string")return e;if(Array.isArray(e)){var a="";return e.forEach(function(l){a+=o.stringify(l,n,r)}),a}var i={type:e.type,content:o.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(i.classes,c):i.classes.push(c)),r.hooks.run("wrap",i);var s="";for(var u in i.attributes)s+=" "+u+'="'+(i.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"}},ht=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,Rt=0,Ne=class{constructor(e){T(this,"encode",e=>{if(e instanceof C){let n=e.content;return new C(e.type,this.encode(n),e.alias)}else return Array.isArray(e)?e.map(n=>this.encode(n)):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=e}type(e){return Object.prototype.toString.call(e).slice(8,-1)}getLanguage(e){for(;e;){var n=ht.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"}setLanguage(e,n){e.className=e.className.replace(RegExp(ht,"gi"),""),e.classList.add("language-"+n)}objId(e){return e.__id||Object.defineProperty(e,"__id",{value:++Rt}),e.__id}clone(e){return structuredClone(e)}isActive(e,n,r){for(var o="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(o))return!1;e=e.parentElement}return!!r}currentScript(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(o){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(o.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==e)return n[r]}return null}}};function gt(t,e,n,r){t.lastIndex=e;var o=t.exec(n);if(o&&r&&o[1]){var a=o[1].length;o.index+=a,o[0]=o[0].slice(a)}return o}function ft(t,e,n,r,o,a,i){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var s=n[c];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(i&&i.cause==c+","+u)return;var l=s[u],p=l.inside,h=!!l.lookbehind,g=!!l.greedy,d=l.alias;if(g&&!l.pattern.global){var f=l.pattern.toString().match(/[imsuy]*$/)[0];l.pattern=RegExp(l.pattern.source,f+"g")}for(var m=l.pattern||l,v=r.next,b=o;v!==e.tail&&!(i&&b>=i.reach);b+=v.value.length,v=v.next){var y=v.value;if(e.length>t.length)return;if(!(y instanceof C)){var $=1,k;if(g){if(k=gt(m,b,t,h),!k||k.index>=t.length)break;var S=k.index,F=k.index+k[0].length,w=b;for(w+=v.value.length;S>=w;)v=v.next,w+=v.value.length;if(w-=v.value.length,b=w,v.value instanceof C)continue;for(var x=v;x!==e.tail&&(w<F||typeof x.value=="string");x=x.next)$++,w+=x.value.length;$--,y=t.slice(b,w),k.index-=b}else if(k=gt(m,0,y,h),!k)continue;var S=k.index,_=k[0],D=y.slice(0,S),Z=y.slice(S+_.length),H=b+y.length;i&&H>i.reach&&(i.reach=H);var z=v.prev;D&&(z=ke(e,z,D),b+=D.length),Tt(e,z,$);var Se=new C(c,p?a.tokenize(_,p):_,d,_);if(v=ke(e,z,Se),Z&&ke(e,v,Z),$>1){var V={cause:c+","+u,reach:H};ft(t,e,n,v.prev,b,a,V),i&&V.reach>i.reach&&(i.reach=V.reach)}}}}}}function Lt(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function ke(t,e,n){var r=e.next,o={value:n,prev:e,next:r};return e.next=o,r.prev=o,t.length++,o}function Tt(t,e,n){for(var r=e.next,o=0;o<n&&r!==t.tail;o++)r=r.next;e.next=r,r.prev=e,t.length-=o}function jt(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}function R(t,e){typeof t>"u"||e?.force!==!0&&t.languages.markup||(t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,o){var a={};a["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[o]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+o]={pattern:/[\s\S]+/,inside:t.languages[o]};var c={};c[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml)}function X(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.css)){R(t);var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}}function xe(t,e){typeof t>"u"||e?.force!==!0&&t.languages.clike||(t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function L(t,e){typeof t>"u"||e?.force!==!0&&t.languages.javascript||(xe(t),R(t),t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript)}function vt(t){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",n=function(g,d){return"\u2716 Error "+g+" while fetching file: "+d},r="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",i="loading",c="loaded",s="failed",u="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+i+'"])';function l(g,d,f){var m=new XMLHttpRequest;m.open("GET",g,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?d(m.responseText):m.status>=400?f(n(m.status,m.statusText)):f(r))},m.send(null)}function p(g){var d=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(g||"");if(d){var f=Number(d[1]),m=d[2],v=d[3];return m?v?[f,Number(v)]:[f,void 0]:[f,f]}}t.hooks.add("before-highlightall",function(g){g.selector+=", "+u}),t.hooks.add("before-sanity-check",function(g){var d=g.element;if(d.matches(u)){g.code="",d.setAttribute(a,i);var f=d.appendChild(document.createElement("CODE"));f.textContent=e;var m=d.getAttribute("data-src"),v=g.language;if(v==="none"){var b=(/\.(\w+)$/.exec(m)||[,"none"])[1];v=o[b]||b}t.util.setLanguage(f,v),t.util.setLanguage(d,v);var y=t.plugins.autoloader;y&&y.loadLanguages(v),l(m,function($){d.setAttribute(a,c);var k=p(d.getAttribute("data-range"));if(k){var F=$.split(/\r\n?|\n/g),w=k[0],x=k[1]==null?F.length:k[1];w<0&&(w+=F.length),w=Math.max(0,Math.min(w-1,F.length)),x<0&&(x+=F.length),x=Math.max(0,Math.min(x,F.length)),$=F.slice(w,x).join(`
`),d.hasAttribute("data-start")||d.setAttribute("data-start",String(w+1))}f.textContent=$,t.highlightElement(f)},function($){d.setAttribute(a,s),f.textContent=$})}}),t.plugins.fileHighlight={highlight:function(d){for(var f=(d||document).querySelectorAll(u),m=0,v;v=f[m++];)t.highlightElement(v)}};var h=!1;t.fileHighlight=function(){h||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),h=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}var Ae=class extends we{constructor(...e){super(...e),R(this),X(this),xe(this),L(this),vt(this)}};function mt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["markup-templating"])return;R(t);function n(r,o){return"___"+r.toUpperCase()+o+"___"}Object.defineProperties(t.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,o,a,i){if(r.language===o){var c=r.tokenStack=[];r.code=r.code.replace(a,function(s){if(typeof i=="function"&&!i(s))return s;for(var u=c.length,l;r.code.indexOf(l=n(o,u))!==-1;)++u;return c[u]=s,l}),r.grammar=t.languages.markup}}},tokenizePlaceholders:{value:function(r,o){if(r.language!==o||!r.tokenStack)return;r.grammar=t.languages[o];var a=0,i=Object.keys(r.tokenStack);function c(s){for(var u=0;u<s.length&&!(a>=i.length);u++){var l=s[u];if(typeof l=="string"||l.content&&typeof l.content=="string"){var p=i[a],h=r.tokenStack[p],g=typeof l=="string"?l:l.content,d=n(o,p),f=g.indexOf(d);if(f>-1){++a;var m=g.substring(0,f),v=new t.Token(o,t.tokenize(h,r.grammar),"language-"+o,h),b=g.substring(f+d.length),y=[];m&&y.push.apply(y,c([m])),y.push(v),b&&y.push.apply(y,c([b])),typeof l=="string"?s.splice.apply(s,[u,1].concat(y)):l.content=y}}else l.content&&c(l.content)}return s}c(r.tokens)}}})}function bt(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages["css-extras"])){t.languages["css-extras"]={},X(t);var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=r,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var o={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},a={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:o,number:a,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:o,number:a})}}function yt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-extras"])return;t.languages["js-extras"]={},L(t),t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(s,u){return RegExp(s.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),u)}t.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],o=0;o<r.length;o++){var a=r[o],i=t.languages.javascript[a];t.util.type(i)==="RegExp"&&(i=t.languages.javascript[a]={pattern:i});var c=i.inside||{};i.inside=c,c["maybe-class-name"]=/^[A-Z][\s\S]*/}}function kt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-templates"])return;t.languages["js-templates"]={},L(t);var n=t.languages.javascript["template-string"],r=n.pattern.source,o=n.inside.interpolation,a=o.inside["interpolation-punctuation"],i=o.pattern.source;function c(d,f){if(t.languages[d])return{pattern:RegExp("((?:"+f+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}t.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),n].filter(Boolean);function s(d,f){return"___"+f.toUpperCase()+"_"+d+"___"}function u(d,f,m){var v={code:d,grammar:f,language:m};return t.hooks.run("before-tokenize",v),v.tokens=t.tokenize(v.code,v.grammar),t.hooks.run("after-tokenize",v),v.tokens}function l(d){var f={};f["interpolation-punctuation"]=a;var m=t.tokenize(d,f);if(m.length===3){var v=[1,1];v.push.apply(v,u(m[1],t.languages.javascript,"javascript")),m.splice.apply(m,v)}return new t.Token("interpolation",m,o.alias,d)}function p(d,f,m){var v=t.tokenize(d,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),b=0,y={},$=v.map(function(x){if(typeof x=="string")return x;for(var S=x.content,_;d.indexOf(_=s(b++,m))!==-1;);return y[_]=S,_}).join(""),k=u($,f,m),F=Object.keys(y);b=0;function w(x){for(var S=0;S<x.length;S++){if(b>=F.length)return;var _=x[S];if(typeof _=="string"||typeof _.content=="string"){var D=F[b],Z=typeof _=="string"?_:_.content,H=Z.indexOf(D);if(H!==-1){++b;var z=Z.substring(0,H),Se=l(y[D]),V=Z.substring(H+D.length),U=[];if(z&&U.push(z),U.push(Se),V){var Ge=[V];w(Ge),U.push.apply(U,Ge)}typeof _=="string"?(x.splice.apply(x,[S,1].concat(U)),S+=U.length-1):_.content=U}}else{var Ee=_.content;Array.isArray(Ee)?w(Ee):w([Ee])}}}return w(k),new t.Token(m,k,"language-"+m,d)}var h={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};t.hooks.add("after-tokenize",function(d){if(!(d.language in h))return;function f(m){for(var v=0,b=m.length;v<b;v++){var y=m[v];if(typeof y!="string"){var $=y.content;if(!Array.isArray($)){typeof $!="string"&&f([$]);continue}if(y.type==="template-string"){var k=$[1];if($.length===3&&typeof k!="string"&&k.type==="embedded-code"){var F=g(k),w=k.alias,x=Array.isArray(w)?w[0]:w,S=t.languages[x];if(!S)continue;$[1]=p(F,S,x)}}else f($)}}}f(d.tokens)});function g(d){return typeof d=="string"?d:Array.isArray(d)?d.map(g).join(""):g(d.content)}}function $e(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages.jsx)return;t.languages.markup||R(t),t.languages.javascript||L(t);var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(u,l){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return a}),RegExp(u,l)}a=i(a).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var c=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(c).join(""):""},s=function(u){for(var l=[],p=0;p<u.length;p++){var h=u[p],g=!1;if(typeof h!="string"&&(h.type==="tag"&&h.content[0]&&h.content[0].type==="tag"?h.content[0].content[0].content==="</"?l.length>0&&l[l.length-1].tagName===c(h.content[0].content[1])&&l.pop():h.content[h.content.length-1].content==="/>"||l.push({tagName:c(h.content[0].content[1]),openedBraces:0}):l.length>0&&h.type==="punctuation"&&h.content==="{"?l[l.length-1].openedBraces++:l.length>0&&l[l.length-1].openedBraces>0&&h.type==="punctuation"&&h.content==="}"?l[l.length-1].openedBraces--:g=!0),(g||typeof h=="string")&&l.length>0&&l[l.length-1].openedBraces===0){var d=c(h);p<u.length-1&&(typeof u[p+1]=="string"||u[p+1].type==="plain-text")&&(d+=c(u[p+1]),u.splice(p+1,1)),p>0&&(typeof u[p-1]=="string"||u[p-1].type==="plain-text")&&(d=c(u[p-1])+d,u.splice(p-1,1),p--),u[p]=new t.Token("plain-text",d,null,d)}h.content&&typeof h.content!="string"&&s(h.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||s(u.tokens)})}function _e(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.typescript)){t.languages.javascript||L(t),t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var n=t.languages.extend("typescript",{});delete n["class-name"],t.languages.typescript["class-name"].inside=n,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),t.languages.ts=t.languages.typescript}}function wt(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.tsx)){t.languages.jsx||$e(t),t.languages.typescript||_e(t);var n=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",n),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"];var r=t.languages.tsx.tag;r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}}var E=new Ae;R(E);mt(E);X(E);bt(E);L(E);yt(E);kt(E);$e(E);_e(E);wt(E);function Dr(t,e,n,r={}){var o={code:t,grammar:e,language:n,tokens:[]};if(E.hooks.run("before-tokenize",o),r.beforeTokenize?.forEach(a=>{a(o)}),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=E.tokenize(o.code,o.grammar),r.afterTokenize?.forEach(a=>{a(o)}),E.hooks.run("after-tokenize",o),C.stringify(E.util.encode(o.tokens),o.language,E)}export{K as a,Mt as b,M as c,A as d,Bt as e,rt as f,ct as g,dt as h,me as i,nn as j,Ue as k,Bn as l,Dn as m,Un as n,Nn as o,qn as p,C as q,E as r,Dr as s};
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

prism-esm/prism-core.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-RYL6JHDL.js.map
