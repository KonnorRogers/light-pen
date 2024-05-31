import{d as C}from"/light-pen/pull/19/bridgetown/static/chunks/chunk-56CZKLGK.js";var ue=window,ce=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),Je=new WeakMap,ee=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(ce&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Je.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Je.set(n,e))}return e}toString(){return this.cssText}},Ke=t=>new ee(typeof t=="string"?t:t+"",void 0,Te),T=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,i,a)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new ee(n,t,Te)},Me=(t,e)=>{ce?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{let r=document.createElement("style"),i=ue.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},de=ce?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return Ke(n)})(t):t;var je,he=window,Xe=he.trustedTypes,Dt=Xe?Xe.emptyScript:"",Qe=he.reactiveElementPolyfillSupport,He={toAttribute(t,e){switch(e){case Boolean:t=t?Dt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Pe=(t,e)=>e!==t&&(e==e||t==t),Oe={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:Pe},Be="finalized",M=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((n,r)=>{let i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Oe){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){let a=this[e];this[n]=i,this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Oe}static finalize(){if(this.hasOwnProperty(Be))return!1;this[Be]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(let i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)n.unshift(de(i))}else e!==void 0&&n.push(de(e));return n}static _$Ep(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;let n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Me(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Oe){var i;let a=this.constructor._$Ep(e,r);if(a!==void 0&&r.reflect===!0){let o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:He).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,n){var r;let i=this.constructor,a=i._$Ev.get(e);if(a!==void 0&&this._$El!==a){let o=i.getPropertyOptions(a),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:He;this._$El=a,this[a]=c.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Pe)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,a)=>this[a]=i),this._$Ei=void 0);let n=!1,r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var a;return(a=i.hostUpdate)===null||a===void 0?void 0:a.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};M[Be]=!0,M.elementProperties=new Map,M.elementStyles=[],M.shadowRootOptions={mode:"open"},Qe?.({ReactiveElement:M}),((je=he.reactiveElementVersions)!==null&&je!==void 0?je:he.reactiveElementVersions=[]).push("1.6.3");var ze,pe=window,J=pe.trustedTypes,et=J?J.createPolicy("lit-html",{createHTML:t=>t}):void 0,ge="$lit$",j=`lit$${(Math.random()+"").slice(9)}$`,De="?"+j,Ut=`<${De}>`,q=document,ne=()=>q.createComment(""),re=t=>t===null||typeof t!="object"&&typeof t!="function",st=Array.isArray,lt=t=>st(t)||typeof t?.[Symbol.iterator]=="function",Ne=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,nt=/>/g,I=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,it=/"/g,ut=/^(?:script|style|textarea|title)$/i,ct=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),X=ct(1),on=ct(2),O=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),at=new WeakMap,G=q.createTreeWalker(q,129,null,!1);function dt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(e):e}var ht=(t,e)=>{let n=t.length-1,r=[],i,a=e===2?"<svg>":"",o=te;for(let c=0;c<n;c++){let s=t[c],l,u,d=-1,h=0;for(;h<s.length&&(o.lastIndex=h,u=o.exec(s),u!==null);)h=o.lastIndex,o===te?u[1]==="!--"?o=tt:u[1]!==void 0?o=nt:u[2]!==void 0?(ut.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=I):u[3]!==void 0&&(o=I):o===I?u[0]===">"?(o=i??te,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?I:u[3]==='"'?it:rt):o===it||o===rt?o=I:o===tt||o===nt?o=te:(o=I,i=void 0);let g=o===I&&t[c+1].startsWith("/>")?" ":"";a+=o===te?s+Ut:d>=0?(r.push(l),s.slice(0,d)+ge+s.slice(d)+j+g):s+j+(d===-2?(r.push(void 0),c):g)}return[dt(t,a+(t[n]||"<?>")+(e===2?"</svg>":"")),r]},ie=class t{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,c=e.length-1,s=this.parts,[l,u]=ht(e,n);if(this.el=t.createElement(l,r),G.currentNode=this.el.content,n===2){let d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=G.nextNode())!==null&&s.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let d=[];for(let h of i.getAttributeNames())if(h.endsWith(ge)||h.startsWith(j)){let g=u[o++];if(d.push(h),g!==void 0){let p=i.getAttribute(g.toLowerCase()+ge).split(j),f=/([.?@])?(.*)/.exec(g);s.push({type:1,index:a,name:f[2],strings:p,ctor:f[1]==="."?be:f[1]==="?"?me:f[1]==="@"?ve:Z})}else s.push({type:6,index:a})}for(let h of d)i.removeAttribute(h)}if(ut.test(i.tagName)){let d=i.textContent.split(j),h=d.length-1;if(h>0){i.textContent=J?J.emptyScript:"";for(let g=0;g<h;g++)i.append(d[g],ne()),G.nextNode(),s.push({type:2,index:++a});i.append(d[h],ne())}}}else if(i.nodeType===8)if(i.data===De)s.push({type:2,index:a});else{let d=-1;for(;(d=i.data.indexOf(j,d+1))!==-1;)s.push({type:7,index:a}),d+=j.length-1}a++}}static createElement(e,n){let r=q.createElement("template");return r.innerHTML=e,r}};function W(t,e,n=t,r){var i,a,o,c;if(e===O)return e;let s=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl,l=re(e)?void 0:e._$litDirective$;return s?.constructor!==l&&((a=s?._$AO)===null||a===void 0||a.call(s,!1),l===void 0?s=void 0:(s=new l(t),s._$AT(t,n,r)),r!==void 0?((o=(c=n)._$Co)!==null&&o!==void 0?o:c._$Co=[])[r]=s:n._$Cl=s),s!==void 0&&(e=W(t,s._$AS(t,e.values),s,r)),e}var fe=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;let{el:{content:r},parts:i}=this._$AD,a=((n=e?.creationScope)!==null&&n!==void 0?n:q).importNode(r,!0);G.currentNode=a;let o=G.nextNode(),c=0,s=0,l=i[0];for(;l!==void 0;){if(c===l.index){let u;l.type===2?u=new K(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new ye(o,this,e)),this._$AV.push(u),l=i[++s]}c!==l?.index&&(o=G.nextNode(),c++)}return G.currentNode=q,a}v(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},K=class t{constructor(e,n,r,i){var a;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(a=i?.isConnected)===null||a===void 0||a}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=W(this,e,n),re(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):lt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&re(this._$AH)?this._$AA.nextSibling.data=e:this.$(q.createTextNode(e)),this._$AH=e}g(e){var n;let{values:r,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ie.createElement(dt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===a)this._$AH.v(r);else{let o=new fe(a,this),c=o.u(this.options);o.v(r),this.$(c),this._$AH=o}}_$AC(e){let n=at.get(e.strings);return n===void 0&&at.set(e.strings,n=new ie(e)),n}T(e){st(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of e)i===n.length?n.push(r=new t(this.k(ne()),this.k(ne()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},Z=class{constructor(e,n,r,i,a){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){let a=this.strings,o=!1;if(a===void 0)e=W(this,e,n,0),o=!re(e)||e!==this._$AH&&e!==O,o&&(this._$AH=e);else{let c=e,s,l;for(e=a[0],s=0;s<a.length-1;s++)l=W(this,c[r+s],n,s),l===O&&(l=this._$AH[s]),o||(o=!re(l)||l!==this._$AH[s]),l===$?e=$:e!==$&&(e+=(l??"")+a[s+1]),this._$AH[s]=l}o&&!i&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},be=class extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}},It=J?J.emptyScript:"",me=class extends Z{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,It):this.element.removeAttribute(this.name)}},ve=class extends Z{constructor(e,n,r,i,a){super(e,n,r,i,a),this.type=5}_$AI(e,n=this){var r;if((e=(r=W(this,e,n,0))!==null&&r!==void 0?r:$)===O)return;let i=this._$AH,a=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==$&&(i===$||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},ye=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}},sn={O:ge,P:j,A:De,C:1,M:ht,L:fe,R:lt,D:W,I:K,V:Z,H:me,N:ve,U:be,F:ye},ot=pe.litHtmlPolyfillSupport;ot?.(ie,K),((ze=pe.litHtmlVersions)!==null&&ze!==void 0?ze:pe.litHtmlVersions=[]).push("2.8.0");var pt=(t,e,n)=>{var r,i;let a=(r=n?.renderBefore)!==null&&r!==void 0?r:e,o=a._$litPart$;if(o===void 0){let c=(i=n?.renderBefore)!==null&&i!==void 0?i:null;a._$litPart$=o=new K(e.insertBefore(ne(),c),c,void 0,n??{})}return o._$AI(t),o};var Ue,Ie;var B=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;let r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pt(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return O}};B.finalized=!0,B._$litElement$=!0,(Ue=globalThis.litElementHydrateSupport)===null||Ue===void 0||Ue.call(globalThis,{LitElement:B});var gt=globalThis.litElementPolyfillSupport;gt?.({LitElement:B});((Ie=globalThis.litElementVersions)!==null&&Ie!==void 0?Ie:globalThis.litElementVersions=[]).push("3.3.3");var ft=T`
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
`,xn=T`
  .light-button {
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid gray;
    background-color: inherit;
    padding: 0.4em 0.6em;
    color: inherit;
    border-radius: 4px;
  }

  .light-button:focus-visible {
    outline: 2px solid hsl(203, 77%, 43%);
  }

  @supports not selector(:focus-visible) {
    .light-button:focus-within {
      outline: 2px solid hsl(203, 77%, 43%);
    }
  }

  .light-button:is(:active, :hover, .is-active) {
    cursor: pointer;
    color: hsla(203, 77%, 43%);
    background-color: hsla(203, 77%, 93%);
  }
`;var bt=T`
/**
 * One Light theme for prism.js
 * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
 */

/**
 * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
 * From colors.less
 * --mono-1: hsl(230, 8%, 24%);
 * --mono-2: hsl(230, 6%, 44%);
 * --mono-3: hsl(230, 4%, 64%);
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
 * <---- Additional Tokens --->
 * --syntax-gutter-border: 1px solid darkgray;
 * --syntax-highlight-bg: hsl(210, 9%, 95%);
 * --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

 *  --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);
 *  --syntax-deleted-bg: hsla(353, 95%, 66%, 0.25);

 *  --syntax-inserted-bg: hsla(137, 100%, 95%);
 *  --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25)
 */

:host {
 --mono-1: hsl(230, 8%, 24%);
 --mono-2: hsl(230, 6%, 44%);
 --mono-3: hsl(230, 4%, 64%);
 --hue-1: hsl(198, 99%, 37%);
 --hue-2: hsl(221, 87%, 60%);
 --hue-3: hsl(301, 63%, 40%);
 --hue-4: hsl(119, 34%, 47%);
 --hue-5: hsl(5, 74%, 59%);
 --hue-5-2: hsl(344, 84%, 43%);
 --hue-6: hsl(35, 99%, 36%);
 --hue-6-2: hsl(35, 99%, 40%);
 --syntax-fg: hsl(230, 8%, 24%);
 --syntax-bg: hsl(230, 1%, 98%);
 --syntax-gutter: hsl(230, 1%, 62%);
 --syntax-guide: hsla(230, 8%, 24%, 0.2);
 --syntax-accent: hsl(230, 100%, 66%);
 /** From syntax-variables.less */
 --syntax-selection-color: hsl(230, 1%, 90%);
 --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
 --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);

 /* --- additional tokens --> */
 --syntax-gutter-border: 1px solid darkgray;

 --syntax-highlight-bg: hsl(210, 9%, 95%);
 --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

 --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);
 --syntax-deleted-bg: hsla(353, 95%, 66%, 0.25);

 --syntax-inserted-bg: hsla(137, 100%, 95%);
 --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25)
}

code[class*="language-"],
pre[class*="language-"] {
	background: var(--syntax-bg);
	color: var(--syntax-fg);
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
	background: var(--syntax-selection-color);
	color: inherit;
}

code[class*="language-"]::selection,
code[class*="language-"] *::selection,
pre[class*="language-"] *::selection {
	background: var(--syntax-selection-color);
	color: inherit;
}

.token.comment,
.token.prolog,
.token.cdata {
	color: var(--mono-3);
}

.token.doctype,
.token.punctuation,
.token.entity {
	color: var(--mono-1);
}

.token.attr-name,
.token.class-name,
.token.boolean,
.token.constant,
.token.number,
.token.atrule {
	color: var(--hue-6);
}

.token.keyword {
	color: var(--hue-3);
}

.token.property,
.token.tag,
.token.symbol,
.token.deleted,
.token.important {
	color: var(--hue-5);
}

.token.selector,
.token.string,
.token.char,
.token.builtin,
.token.inserted,
.token.regex,
.token.attr-value,
.token.attr-value > .token.punctuation {
	color: var(--hue-4);
}

.token.variable,
.token.operator,
.token.function {
	color: var(--hue-2);
}

.token.url {
	color: var(--hue-1);
}

/* HTML overrides */
.token.attr-value > .token.punctuation.attr-equals,
.token.special-attr > .token.attr-value > .token.value.css {
	color: var(--mono-1);
}

/* CSS overrides */
.language-css .token.selector {
	color: var(--hue-5);
}

.language-css .token.property {
	color: var(--mono-1);
}

.language-css .token.function,
.language-css .token.url > .token.function {
	color: var(--hue-1);
}

.language-css .token.url > .token.string.url {
	color: var(--hue-4);
}

.language-css .token.important,
.language-css .token.atrule .token.rule {
	color: var(--hue-3);
}

/* JS overrides */
.language-javascript .token.operator {
	color: var(--hue-3);
}

.language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation {
	color: var(--hue-5-2);
}

/* JSON overrides */
.language-json .token.operator {
	color: var(--mono-1);
}

.language-json .token.null.keyword {
	color: var(--hue-6);
}

/* MD overrides */
.language-markdown .token.url,
.language-markdown .token.url > .token.operator,
.language-markdown .token.url-reference.url > .token.string {
	color: var(--mono-1);
}

.language-markdown .token.url > .token.content {
	color: var(--hue-2);
}

.language-markdown .token.url > .token.url,
.language-markdown .token.url-reference.url {
	color: var(--hue-1);
}

.language-markdown .token.blockquote.punctuation,
.language-markdown .token.hr.punctuation {
	color: var(--mono-3);
	font-style: italic;
}

.language-markdown .token.code-snippet {
	color: var(--hue-4);
}

.language-markdown .token.bold .token.content {
	color: var(--hue-6);
}

.language-markdown .token.italic .token.content {
	color: var(--hue-3);
}

.language-markdown .token.strike .token.content,
.language-markdown .token.strike .token.punctuation,
.language-markdown .token.list.punctuation,
.language-markdown .token.title.important > .token.punctuation {
	color: var(--hue-5);
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
	color: var(--syntax-guide);
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
	background: var(--syntax-selection-color);
	color: var(--mono-2);
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
	color: var(--mono-1);
}

/* Line Highlight plugin overrides */
/* The highlighted line itself */
.line-highlight.line-highlight {
  background: var(--syntax-highlight-bg);
}

/* Selection on highlighted lines */
pre.diff-highlight > code .token.token.line-highlight:not(.prefix)::-moz-selection,
pre.diff-highlight > code .token.token.line-highlight:not(.prefix) *::-moz-selection,
pre > code.diff-highlight .token.token.line-highlight:not(.prefix)::-moz-selection,
pre > code.diff-highlight .token.token.line-highlight:not(.prefix) *::-moz-selection {
	background-color: var(--syntax-highlight-selected-bg);
}

/* Selection on highlighted lines */
pre.diff-highlight > code .token.token.line-highlight:not(.prefix)::selection,
pre.diff-highlight > code .token.token.line-highlight:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.line-highlight:not(.prefix)::selection,
pre > code.diff-highlight .token.token.line-highlight:not(.prefix) *::selection {
	background-color: var(--syntax-highlight-selected-bg);
}

/* Hovering over a linkable line number (in the gutter area) */
/* Requires Line Numbers plugin as well */
pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before {
	background-color: var(--syntax-cursor-line);
}

/* Line Numbers and Command Line plugins overrides */
/* Line separating gutter from coding area */
.line-numbers.line-numbers .line-numbers-rows,
.command-line .command-line-prompt {
	border-right-color: var(--syntax-guide);
}

/* Stuff in the gutter */
.line-numbers .line-numbers-rows > span:before,
.command-line .command-line-prompt > span:before {
	color: var(--syntax-gutter);
}

/* Match Braces plugin overrides */
/* Note: Outline colour is inherited from the braces */
.rainbow-braces .token.token.punctuation.brace-level-1,
.rainbow-braces .token.token.punctuation.brace-level-5,
.rainbow-braces .token.token.punctuation.brace-level-9 {
	color: var(--hue-5);
}

.rainbow-braces .token.token.punctuation.brace-level-2,
.rainbow-braces .token.token.punctuation.brace-level-6,
.rainbow-braces .token.token.punctuation.brace-level-10 {
	color: var(--hue-4);
}

.rainbow-braces .token.token.punctuation.brace-level-3,
.rainbow-braces .token.token.punctuation.brace-level-7,
.rainbow-braces .token.token.punctuation.brace-level-11 {
	color: var(--hue-2);
}

.rainbow-braces .token.token.punctuation.brace-level-4,
.rainbow-braces .token.token.punctuation.brace-level-8,
.rainbow-braces .token.token.punctuation.brace-level-12 {
	color: var(--hue-3);
}

/* Diff Highlight plugin overrides */
/* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
pre.diff-highlight > code .token.token.deleted:not(.prefix),
pre > code.diff-highlight .token.token.deleted:not(.prefix) {
	background-color: var(--syntax-deleted-bg);
}

pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection {
	background-color: var(--syntax-deleted-selected-bg);
}

pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
	background-color: var(--syntax-deleted-selected-bg);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix),
pre > code.diff-highlight .token.token.inserted:not(.prefix) {
	background-color: var(--syntax-inserted-bg);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection {
	background-color: var(--syntax-inserted-selected-bg);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
	background-color: var(--syntax-inserted-selected-bg);
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
	stroke: var(--mono-1);
	stroke-opacity: 1;
}

/* Stroke colours of the handle, direction point, and vector itself */
.prism-previewer-easing.prism-previewer-easing circle,
.prism-previewer-easing.prism-previewer-easing path,
.prism-previewer-easing.prism-previewer-easing line {
	stroke: var(--mono-1);
}

/* Fill colour of the handle */
.prism-previewer-easing.prism-previewer-easing circle {
	fill: transparent;
}

`;var Ge=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},ae=Ge;var xe=class{constructor(e={}){let n={},{disableWorkerMessageHandler:r,manual:i}=e;this.manual=i,this.manual==null&&(this.manual=!0),this.plugins={};let a=this;this.disableWorkerMessageHandler=!!r,this.Token=S,this.util=new qe(this);let o=this.util;if(this.languages={plain:n,plaintext:n,text:n,txt:n,extend:(u,d)=>{let h=this.util.clone(this.languages[u]);for(var g in d)h[g]=d[g];return h},insertBefore:(u,d,h,g)=>{g||(g=this.languages);let p=g[u],f={};for(let v in p)if(p.hasOwnProperty(v)){if(v==d)for(var b in h)h.hasOwnProperty(b)&&(f[b]=h[b]);h.hasOwnProperty(v)||(f[v]=p[v])}var m=g[u];return g[u]=f,this.languages.DFS(this.languages,function(v,y){y===m&&v!=u&&(this[v]=f)}),f},DFS(u,d,h,g){g=g||{};var p=o.objId;for(var f in u)if(u.hasOwnProperty(f)){d.call(u,f,u[f],h||f);var b=u[f],m=o.type(b);m==="Object"&&!g[p(b)]?(g[p(b)]=!0,this.DFS(b,d,null,g)):m==="Array"&&!g[p(b)]&&(g[p(b)]=!0,this.DFS(b,d,f,g))}}},this.hooks={all:{},add:function(u,d){var h=a.hooks.all;h[u]=h[u]||[],h[u].push(d)},run:function(u,d){var h=a.hooks.all[u];if(!(!h||!h.length))for(var g=0,p;p=h[g++];)p(d)}},!ae.document)return ae.addEventListener&&(a.disableWorkerMessageHandler||ae.addEventListener("message",function(u){var d=JSON.parse(u.data),h=d.language,g=d.code,p=d.immediateClose;ae.postMessage(a.highlight(g,a.languages[h],h)),p&&Ge.close()},!1)),a;function c(){a.manual||a.highlightAll()}let s=this.util.currentScript();if(s&&(this.filename=s.src,s.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var l=document.readyState;l==="loading"||l==="interactive"&&s&&s.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}}highlightAll(e,n){this.highlightAllUnder(document,e,n)}highlightAllUnder(e,n,r){var i={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),this.hooks.run("before-all-elements-highlight",i);for(var a=0,o;o=i.elements[a++];)this.highlightElement(o,n===!0,i.callback)}highlightElement(e,n,r){var i=this.util.getLanguage(e),a=this.languages[i];this.util.setLanguage(e,i);var o=e.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(o,i);var c=e.textContent,s={element:e,language:i,grammar:a,code:c};let l=d=>{s.highlightedCode=d,this.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,this.hooks.run("after-highlight",s),this.hooks.run("complete",s),r&&r.call(s.element)};if(this.hooks.run("before-sanity-check",s),o=s.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code){this.hooks.run("complete",s),r&&r.call(s.element);return}if(this.hooks.run("before-highlight",s),!s.grammar){l(this.util.encode(s.code));return}if(n&&Ge.Worker){var u=new Worker(this.filename);u.onmessage=function(d){l(d.data)},u.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else l(this.highlight(s.code,s.grammar,s.language))}highlight(e,n,r){var i={code:e,grammar:n,language:r};if(this.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=this.tokenize(i.code,i.grammar),this.hooks.run("after-tokenize",i),S.stringify(this.util.encode(i.tokens),i.language,this)}tokenize(e,n){var r=n?.rest;if(r){for(var i in r)n[i]=r[i];delete n.rest}var a=new qt;return ke(a,a.head,e),yt(e,a,n,a.head,0,this),Zt(a)}},S=class{constructor(e,n,r,i){this.type=e,this.content=n,this.alias=r,this.length=(i||"").length|0}static stringify(e,n,r){let i=this;if(typeof e=="string")return e;if(Array.isArray(e)){var a="";return e.forEach(function(u){a+=i.stringify(u,n,r)}),a}var o={type:e.type,content:i.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(o.classes,c):o.classes.push(c)),r.hooks.run("wrap",o);var s="";for(var l in o.attributes)s+=" "+l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+s+">"+o.content+"</"+o.tag+">"}},mt=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,Gt=0,qe=class{constructor(e){C(this,"encode",e=>{if(e instanceof S){let n=e.content;return new S(e.type,this.encode(n),e.alias)}else return Array.isArray(e)?e.map(n=>this.encode(n)):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=e}type(e){return Object.prototype.toString.call(e).slice(8,-1)}getLanguage(e){for(;e;){var n=mt.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"}setLanguage(e,n){e.className=e.className.replace(RegExp(mt,"gi"),""),e.classList.add("language-"+n)}objId(e){return e.__id||Object.defineProperty(e,"__id",{value:++Gt}),e.__id}clone(e){return structuredClone(e)}isActive(e,n,r){for(var i="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(i))return!1;e=e.parentElement}return!!r}currentScript(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==e)return n[r]}return null}}};function vt(t,e,n,r){t.lastIndex=e;var i=t.exec(n);if(i&&r&&i[1]){var a=i[1].length;i.index+=a,i[0]=i[0].slice(a)}return i}function yt(t,e,n,r,i,a,o){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var s=n[c];s=Array.isArray(s)?s:[s];for(var l=0;l<s.length;++l){if(o&&o.cause==c+","+l)return;var u=s[l],d=u.inside,h=!!u.lookbehind,g=!!u.greedy,p=u.alias;if(g&&!u.pattern.global){var f=u.pattern.toString().match(/[imsuy]*$/)[0];u.pattern=RegExp(u.pattern.source,f+"g")}for(var b=u.pattern||u,m=r.next,v=i;m!==e.tail&&!(o&&v>=o.reach);v+=m.value.length,m=m.next){var y=m.value;if(e.length>t.length)return;if(!(y instanceof S)){var k=1,x;if(g){if(x=vt(b,v,t,h),!x||x.index>=t.length)break;var E=x.index,L=x.index+x[0].length,w=v;for(w+=m.value.length;E>=w;)m=m.next,w+=m.value.length;if(w-=m.value.length,v=w,m.value instanceof S)continue;for(var _=m;_!==e.tail&&(w<L||typeof _.value=="string");_=_.next)k++,w+=_.value.length;k--,y=t.slice(v,w),x.index-=v}else if(x=vt(b,0,y,h),!x)continue;var E=x.index,A=x[0],z=y.slice(0,E),V=y.slice(E+A.length),N=v+y.length;o&&N>o.reach&&(o.reach=N);var D=m.prev;z&&(D=ke(e,D,z),v+=z.length),Wt(e,D,k);var Ce=new S(c,d?a.tokenize(A,d):A,p,A);if(m=ke(e,D,Ce),V&&ke(e,m,V),k>1){var Y={cause:c+","+l,reach:N};yt(t,e,n,m.prev,v,a,Y),o&&Y.reach>o.reach&&(o.reach=Y.reach)}}}}}}function qt(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function ke(t,e,n){var r=e.next,i={value:n,prev:e,next:r};return e.next=i,r.prev=i,t.length++,i}function Wt(t,e,n){for(var r=e.next,i=0;i<n&&r!==t.tail;i++)r=r.next;e.next=r,r.prev=e,t.length-=i}function Zt(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}function F(t,e){typeof t>"u"||e?.force!==!0&&t.languages.markup||(t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,i){var a={};a["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var c={};c[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml)}function Q(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.css)){F(t);var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}}function we(t,e){typeof t>"u"||e?.force!==!0&&t.languages.clike||(t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function R(t,e){typeof t>"u"||e?.force!==!0&&t.languages.javascript||(we(t),F(t),t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript)}function kt(t){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",n=function(g,p){return"\u2716 Error "+g+" while fetching file: "+p},r="\u2716 Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",o="loading",c="loaded",s="failed",l="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+o+'"])';function u(g,p,f){var b=new XMLHttpRequest;b.open("GET",g,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?p(b.responseText):b.status>=400?f(n(b.status,b.statusText)):f(r))},b.send(null)}function d(g){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(g||"");if(p){var f=Number(p[1]),b=p[2],m=p[3];return b?m?[f,Number(m)]:[f,void 0]:[f,f]}}t.hooks.add("before-highlightall",function(g){g.selector+=", "+l}),t.hooks.add("before-sanity-check",function(g){var p=g.element;if(p.matches(l)){g.code="",p.setAttribute(a,o);var f=p.appendChild(document.createElement("CODE"));f.textContent=e;var b=p.getAttribute("data-src"),m=g.language;if(m==="none"){var v=(/\.(\w+)$/.exec(b)||[,"none"])[1];m=i[v]||v}t.util.setLanguage(f,m),t.util.setLanguage(p,m);var y=t.plugins.autoloader;y&&y.loadLanguages(m),u(b,function(k){p.setAttribute(a,c);var x=d(p.getAttribute("data-range"));if(x){var L=k.split(/\r\n?|\n/g),w=x[0],_=x[1]==null?L.length:x[1];w<0&&(w+=L.length),w=Math.max(0,Math.min(w-1,L.length)),_<0&&(_+=L.length),_=Math.max(0,Math.min(_,L.length)),k=L.slice(w,_).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(w+1))}f.textContent=k,t.highlightElement(f)},function(k){p.setAttribute(a,s),f.textContent=k})}}),t.plugins.fileHighlight={highlight:function(p){for(var f=(p||document).querySelectorAll(l),b=0,m;m=f[b++];)t.highlightElement(m)}};var h=!1;t.fileHighlight=function(){h||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),h=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}var _e=class extends xe{constructor(...e){super(...e),F(this),Q(this),we(this),R(this),kt(this)}};function xt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages.markdown)return;F(t);var n=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function r(d){return d=d.replace(/<inner>/g,function(){return n}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+d+")")}var i=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,a=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return i}),o=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;t.languages.markdown=t.languages.extend("markup",{}),t.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:t.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+a+o+"(?:"+a+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+a+o+")(?:"+a+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(i),inside:t.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+a+")"+o+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+a+"$"),inside:{"table-header":{pattern:RegExp(i),alias:"important",inside:t.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:r(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(d){["url","bold","italic","strike","code-snippet"].forEach(function(h){d!==h&&(t.languages.markdown[d].inside.content.inside[h]=t.languages.markdown[h])})}),t.hooks.add("after-tokenize",function(d){if(d.language!=="markdown"&&d.language!=="md")return;function h(g){if(!(!g||typeof g=="string"))for(var p=0,f=g.length;p<f;p++){var b=g[p];if(b.type!=="code"){h(b.content);continue}var m=b.content[1],v=b.content[3];if(m&&v&&m.type==="code-language"&&v.type==="code-block"&&typeof m.content=="string"){var y=m.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");y=(/[a-z][\w-]*/i.exec(y)||[""])[0].toLowerCase();var k="language-"+y;v.alias?typeof v.alias=="string"?v.alias=[v.alias,k]:v.alias.push(k):v.alias=[k]}}}h(d.tokens)}),t.hooks.add("wrap",function(d){if(d.type==="code-block"){for(var h="",g=0,p=d.classes.length;g<p;g++){var f=d.classes[g],b=/language-(.+)/.exec(f);if(b){h=b[1];break}}var m=t.languages[h];if(m)d.content=t.highlight(u(d.content),m,h);else if(h&&h!=="none"&&t.plugins.autoloader){var v="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);d.attributes.id=v,t.plugins.autoloader.loadLanguages(h,function(){var y=document.getElementById(v);y&&(y.innerHTML=t.highlight(y.textContent,t.languages[h],h))})}}});var c=RegExp(t.languages.markup.tag.pattern.source,"gi"),s={amp:"&",lt:"<",gt:">",quot:'"'},l=String.fromCodePoint||String.fromCharCode;function u(d){var h=d.replace(c,"");return h=h.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(g,p){if(p=p.toLowerCase(),p[0]==="#"){var f;return p[1]==="x"?f=parseInt(p.slice(2),16):f=Number(p.slice(1)),l(f)}else{var b=s[p];return b||g}}),h}t.languages.md=t.languages.markdown}function wt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["markup-templating"])return;F(t);function n(r,i){return"___"+r.toUpperCase()+i+"___"}Object.defineProperties(t.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,i,a,o){if(r.language===i){var c=r.tokenStack=[];r.code=r.code.replace(a,function(s){if(typeof o=="function"&&!o(s))return s;for(var l=c.length,u;r.code.indexOf(u=n(i,l))!==-1;)++l;return c[l]=s,u}),r.grammar=t.languages.markup}}},tokenizePlaceholders:{value:function(r,i){if(r.language!==i||!r.tokenStack)return;r.grammar=t.languages[i];var a=0,o=Object.keys(r.tokenStack);function c(s){for(var l=0;l<s.length&&!(a>=o.length);l++){var u=s[l];if(typeof u=="string"||u.content&&typeof u.content=="string"){var d=o[a],h=r.tokenStack[d],g=typeof u=="string"?u:u.content,p=n(i,d),f=g.indexOf(p);if(f>-1){++a;var b=g.substring(0,f),m=new t.Token(i,t.tokenize(h,r.grammar),"language-"+i,h),v=g.substring(f+p.length),y=[];b&&y.push.apply(y,c([b])),y.push(m),v&&y.push.apply(y,c([v])),typeof u=="string"?s.splice.apply(s,[l,1].concat(y)):u.content=y}}else u.content&&c(u.content)}return s}c(r.tokens)}}})}function _t(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages["css-extras"])){t.languages["css-extras"]={},Q(t);var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=r,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var i={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},a={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:i,number:a,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:i,number:a})}}function $t(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-extras"])return;t.languages["js-extras"]={},R(t),t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(s,l){return RegExp(s.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),l)}t.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],i=0;i<r.length;i++){var a=r[i],o=t.languages.javascript[a];t.util.type(o)==="RegExp"&&(o=t.languages.javascript[a]={pattern:o});var c=o.inside||{};o.inside=c,c["maybe-class-name"]=/^[A-Z][\s\S]*/}}function At(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-templates"])return;t.languages["js-templates"]={},R(t);var n=t.languages.javascript["template-string"],r=n.pattern.source,i=n.inside.interpolation,a=i.inside["interpolation-punctuation"],o=i.pattern.source;function c(p,f){if(t.languages[p])return{pattern:RegExp("((?:"+f+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:p}}}}t.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),n].filter(Boolean);function s(p,f){return"___"+f.toUpperCase()+"_"+p+"___"}function l(p,f,b){var m={code:p,grammar:f,language:b};return t.hooks.run("before-tokenize",m),m.tokens=t.tokenize(m.code,m.grammar),t.hooks.run("after-tokenize",m),m.tokens}function u(p){var f={};f["interpolation-punctuation"]=a;var b=t.tokenize(p,f);if(b.length===3){var m=[1,1];m.push.apply(m,l(b[1],t.languages.javascript,"javascript")),b.splice.apply(b,m)}return new t.Token("interpolation",b,i.alias,p)}function d(p,f,b){var m=t.tokenize(p,{interpolation:{pattern:RegExp(o),lookbehind:!0}}),v=0,y={},k=m.map(function(_){if(typeof _=="string")return _;for(var E=_.content,A;p.indexOf(A=s(v++,b))!==-1;);return y[A]=E,A}).join(""),x=l(k,f,b),L=Object.keys(y);v=0;function w(_){for(var E=0;E<_.length;E++){if(v>=L.length)return;var A=_[E];if(typeof A=="string"||typeof A.content=="string"){var z=L[v],V=typeof A=="string"?A:A.content,N=V.indexOf(z);if(N!==-1){++v;var D=V.substring(0,N),Ce=u(y[z]),Y=V.substring(N+z.length),U=[];if(D&&U.push(D),U.push(Ce),Y){var Ye=[Y];w(Ye),U.push.apply(U,Ye)}typeof A=="string"?(_.splice.apply(_,[E,1].concat(U)),E+=U.length-1):A.content=U}}else{var Re=A.content;Array.isArray(Re)?w(Re):w([Re])}}}return w(x),new t.Token(b,x,"language-"+b,p)}var h={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};t.hooks.add("after-tokenize",function(p){if(!(p.language in h))return;function f(b){for(var m=0,v=b.length;m<v;m++){var y=b[m];if(typeof y!="string"){var k=y.content;if(!Array.isArray(k)){typeof k!="string"&&f([k]);continue}if(y.type==="template-string"){var x=k[1];if(k.length===3&&typeof x!="string"&&x.type==="embedded-code"){var L=g(x),w=x.alias,_=Array.isArray(w)?w[0]:w,E=t.languages[_];if(!E)continue;k[1]=d(L,E,_)}}else f(k)}}}f(p.tokens)});function g(p){return typeof p=="string"?p:Array.isArray(p)?p.map(g).join(""):g(p.content)}}function $e(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages.jsx)return;t.languages.markup||F(t),t.languages.javascript||R(t);var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(l,u){return l=l.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return a}),RegExp(l,u)}a=o(a).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var c=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(c).join(""):""},s=function(l){for(var u=[],d=0;d<l.length;d++){var h=l[d],g=!1;if(typeof h!="string"&&(h.type==="tag"&&h.content[0]&&h.content[0].type==="tag"?h.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===c(h.content[0].content[1])&&u.pop():h.content[h.content.length-1].content==="/>"||u.push({tagName:c(h.content[0].content[1]),openedBraces:0}):u.length>0&&h.type==="punctuation"&&h.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&h.type==="punctuation"&&h.content==="}"?u[u.length-1].openedBraces--:g=!0),(g||typeof h=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var p=c(h);d<l.length-1&&(typeof l[d+1]=="string"||l[d+1].type==="plain-text")&&(p+=c(l[d+1]),l.splice(d+1,1)),d>0&&(typeof l[d-1]=="string"||l[d-1].type==="plain-text")&&(p=c(l[d-1])+p,l.splice(d-1,1),d--),l[d]=new t.Token("plain-text",p,null,p)}h.content&&typeof h.content!="string"&&s(h.content)}};t.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||s(l.tokens)})}function Ae(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.typescript)){t.languages.javascript||R(t),t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var n=t.languages.extend("typescript",{});delete n["class-name"],t.languages.typescript["class-name"].inside=n,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),t.languages.ts=t.languages.typescript}}function St(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.tsx)){t.languages.jsx||$e(t),t.languages.typescript||Ae(t);var n=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",n),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"];var r=t.languages.tsx.tag;r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}}function Se(){let t=new _e;return F(t),wt(t),Q(t),_t(t),R(t),$t(t),At(t),$e(t),Ae(t),St(t),xt(t),t}var We=class{static get instance(){return this.__singleton__||(this.__singleton__=Se()),this.__singleton__}};function Et(t,e,n,r,i={}){r||(r=We.instance),e||(e=r.languages.markup);var a={code:t,grammar:e,language:n,tokens:[]};if(r.hooks.run("before-tokenize",a),i.beforeTokenize?.forEach(o=>{o(a)}),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),i.afterTokenize?.forEach(o=>{o(a)}),S.stringify(r.util.encode(a.tokens),a.language,r)}function Ze(t,e,n){return t?e():n?.()}var Ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=t=>(...e)=>({_$litDirective$:t,values:e}),Ee=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var oe=class extends Ee{constructor(e){if(super(e),this.et=$,e.type!==Ft.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$||e==null)return this.ft=void 0,this.et=e;if(e===O)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};oe.directiveName="unsafeHTML",oe.resultType=1;var Ct=Lt(oe);function Rt(t,e=0){let n=null;return(...r)=>{n&&window.clearTimeout(n),n=window.setTimeout(()=>{t.apply(null,r)},e)}}function Fe(t){var e;return e=class extends t{static define(r,i,a){r||(r=this.baseName),i||(i=this);let o=window.customElements;this.__registry instanceof CustomElementRegistry&&(o=this.__registry);let c=!!o.get(r);c&&this.warnOnExistingElement&&console.warn(`${r} has already been registered.`),!c&&i&&o.define(r,class extends i{},a)}},C(e,"baseName",""),C(e,"warnOnExistingElement",!1),e}var Ve=class extends Fe(HTMLElement){};var Tt=new WeakMap;function Vt(t,e){let n=e;for(;n;){if(Tt.get(n)===t)return!0;n=Object.getPrototypeOf(n)}return!1}function se(t){return e=>{if(Vt(t,e))return e;let n=t(e);return Tt.set(n,t),n}}var Le=!!ShadowRoot.prototype.createElement,Yt=t=>{var e;return e=class extends t{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(r){this.__shadowRootOptions=r}constructor(...r){super(...r),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(r){let i=this.constructor;i.__registry=r}createRenderRoot(){let r=this.constructor,{scopedElements:i,shadowRootOptions:a}=r;if(!this.registry||this.registry===r.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=Le?new CustomElementRegistry:customElements;for(let[l,u]of Object.entries(i))this.defineScopedElement(l,u)}let c={mode:"open",...a,customElements:this.registry},s=this.attachShadow(c);return Le&&(this.renderOptions.creationScope=s),s instanceof ShadowRoot&&this.adoptStyles(s),s}createScopedElement(r){return(Le?this.shadowRoot:document).createElement(r)}adoptStyles(r){}defineScopedElement(r,i){let a=this.registry.get(r);return a&&Le===!1&&a!==i&&console.error([`You are trying to re-register the "${r}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),a?this.registry.get(r):this.registry.define(r,i)}},C(e,"__registry",window.customElements),e},Jt=se(Yt);var Kt=t=>class extends t{static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(n){this.__shadowRootOptions=n}get shadowRootOptions(){return this.constructor.shadowRootOptions}createRenderRoot(){return this.shadowRoot??this.attachShadow(this.shadowRootOptions||{mode:"open"})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.renderRoot==null&&(this.renderRoot=this.createRenderRoot())}},Xt=se(Kt);var le=class extends Fe(B){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,n])=>{n.define(e)})}};C(le,"dependencies",{});function Mt(...t){let e=[],n=document.createElement("div");for(let r of t){if(r instanceof HTMLTemplateElement){let i=r.content.cloneNode(!0);n.append(i),e.push(n.innerHTML),n.innerHTML="";continue}if(r instanceof HTMLScriptElement){e.push(r.textContent);continue}if(r instanceof HTMLTextAreaElement){e.push(r.value);continue}e.push(r.innerHTML)}return e.join(`
`)}function jt(t,...e){let n=[],r=typeof t=="string"?[t]:t.slice();r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");for(let a=0;a<r.length;a++){let o;(o=r[a].match(/\n[\t ]+/g))&&n.push(...o)}if(n.length){let a=Math.min(...n.map(c=>c.length-1)),o=new RegExp(`
[	 ]{${a}}`,"g");for(let c=0;c<r.length;c++)r[c]=r[c].replace(o,`
`)}r[0]=r[0].replace(/^\r?\n/,"");let i=r[0];for(let a=0;a<e.length;a++)i+=e[a]+r[a+1];return i}var Ot=T`
[part~="pre"],
[part~="code"] {
  background: hsl(230, 1%, 98%);
  color: hsl(230, 8%, 24%);
  line-height: 1.8;
}

[part~="pre"] {
  margin: 0;
  /* This removes line wrapping */
  word-break: break-all;
  white-space: pre;
  padding: 0;
  height: 100%;
}

[part~="code"] {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
}

:host([wrap="soft"]) [part~="pre"] {
  /* this creates line-wrapping. */
  word-break: break-word;
  white-space: pre-wrap;
}

:host([disable-line-numbers]) [part~="code"] {
  grid-template-columns: minmax(0, 1fr);
}

[part~='line'] {
  display: inline-block;
  width: 100%;
  padding-inline-start: 6px;
  padding-inline-end: 6px;
}

[part~="line"]::before {
  content: " ";
  line-height: inherit;
  padding-inline-end: 6px;
}


[part~="line"].deleted::before {
  content: "-"
}

[part~="line"].inserted::before {
  content: "+"
}

[part~='gutter-cell'] {
  display: inline-block;
  padding-inline-end: 0.5em;
  padding-inline-start: 0.75em;
  user-select: none;
  color: rgba(0, 0, 0, 0.35);
  background-color: var(--syntax-bg);
  font-variant-numeric: tabular-nums;
  text-align: end;
  position: sticky;
  z-index: 1;
  left: 0px;
}
`;var Qt=/\r\n|\r|\n/;function Ht(t={}){let e=t.disableLineNumbers??!1,n=t.lineNumberStart??1;return function(i){let a=[];Bt(i.tokens).forEach((o,c)=>{o.length<=0&&o.push(" "),t.disableLineNumbers!==!0&&a.push(new S("light-gutter-cell",(c+n).toString())),a.push(new S("light-line",o))}),i.tokens=a}}function Pt(t){return Array.isArray(t)?t:[t]}function en(t){return t.length===0?"":t.length===1&&typeof t[0]=="string"?t[0]:t}function Bt(t){let e=[],n=[e];for(let r=0;r<t.length;r++){let i=t[r];if(typeof i=="string"){let a=i.split(Qt);for(let o=0;o<a.length;o++){o>0&&n.push(e=[]);let c=a[o];c&&e.push(c)}}else{let a=Bt(Pt(i.content));if(a.length>1)for(let o=0;o<a.length;o++){o>0&&n.push(e=[]);let c=a[o];if(c.length){let s=new S(i.type,en(c),i.alias);s.length=c.reduce((l,u)=>l+u.length,0),e.push(s)}}else e.push(i)}}return n}var H=class{constructor(){let e=()=>{this.errors=[],this.ranges=[],this.numbers=new Set};this.reset=e,this.reset()}includes(e){if(this.numbers.has(e))return!0;if(this.ranges.length==0)return!1;for(let n of this.ranges){let[r,i]=n;if(e>=r&&e<=i)return!0}return!1}parse(e){return this.reset(),e.includes("{")?e.includes("}")?(e=e.split(/{/)[1],e?(e=e.split(/}/)[0],e.split(/,\s*/).forEach(n=>{let[r,i]=n.split(/-/),a=Number(r),o=Number(i);if(!(a==null||isNaN(a))){if(o==null||isNaN(o)){this.numbers.add(a);return}this.ranges.push([a,o])}}),this):(this.errors.push(new Error("Invalid string provided for range.")),this)):(this.errors.push(new Error("Unable to parse range. No `}` found.")),this):(this.errors.push(new Error("Unable to parse range. No `{` found.")),this)}};function zt(t){let{highlightLinesRange:e,insertedLinesRange:n,deletedLinesRange:r}=t;return function(i){let a=1;for(let o of i.tokens)typeof o!="string"&&(e.includes(a)&&(o.type+=" line-highlight"),n.includes(a)&&(o.type+=" inserted"),r.includes(a)&&(o.type+=" deleted"),o.type.includes("light-line")&&a++)}}function Nt(){return function(t){let e=["inserted","line-highlight","deleted"];t.type.includes("light-line")&&(t.attributes.part="line",e.forEach(n=>{t.type.includes(n)&&(n==="line-highlight"&&(n="highlight"),t.attributes.part+=" line-"+n)})),t.type.includes("light-gutter-cell")&&(t.attributes.part="gutter-cell",e.forEach(n=>{t.type.includes("gutter-cell-"+n)&&(n==="line-highlight"&&(n="highlight"),t.attributes.part+=" gutter-cell-"+n)}))}}var P=class extends le{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=Rt(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.highlighter=Se(),this.__resizeObserver=new ResizeObserver(()=>this.__setGutterMeasurements()),this.__highlightedCode__=""}connectedCallback(){super.connectedCallback(),this.__resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.unobserve(this)}willUpdate(e){e.has("code")&&(this.__highlightedCode__=this.highlight(this.code)),super.willUpdate(e)}updated(e){if((e.has("insertedLines")||e.has("deletedLines")||e.has("highlightLines"))&&!e.has("code")){let n=this.shadowRoot?.querySelectorAll(".light-gutter-cell, .light-line");if(n?.length){let r=new H().parse(this.highlightLines),i=new H().parse(this.insertedLines),a=new H().parse(this.deletedLines);n.forEach((o,c)=>{let l=(c%2===0?c:c-1)/2+1;o.classList.toggle("line-highlight",r.includes(l)),o.part.toggle("line-highlight",r.includes(l)),o.classList.toggle("inserted",i.includes(l)),o.part.toggle("inserted",i.includes(l)),o.classList.toggle("deleted",a.includes(l)),o.part.toggle("deleted",a.includes(l))})}}super.updated(e)}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let n=e.target;if(n==null)return;let r=n.getAttribute("name");if(["preview-code","code"].includes(r||"")===!1)return;let i=n.assignedElements({flatten:!0}),a=this.unescapeTags(Mt(...i));if(this.preserveWhitespace||(a=jt(a.trim())),r==="code"){this.code=a;return}}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){this.highlighter||(this.highlighter=Se());let n=[Ht({lineNumberStart:this.lineNumberStart,disableLineNumbers:this.disableLineNumbers}),zt({insertedLinesRange:new H().parse(this.insertedLines),deletedLinesRange:new H().parse(this.deletedLines),highlightLinesRange:new H().parse(this.highlightLines)})];return this.highlighter.hooks.add("wrap",Nt()),e=Et(e,this.highlighter.languages[this.language],this.language,this.highlighter,{afterTokenize:n}),e}__setGutterMeasurements(){let e=this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth;e&&this.style.setProperty("--gutter-cell-width",`${e}px`);let n=this.shadowRoot?.querySelector("[part~='code']");if(n){let{offsetHeight:r,clientHeight:i}=n,a=r-i;this.style.setProperty("--scrollbar-height",`${a}px`)}}render(){let e=this.language,n=X`
      <div part="base">
        ${Ze(!this.disableHighlight,()=>X`
            <pre
              id="pre-${e}"
              data-code-lang=${e}
              aria-hidden="true"
              part="pre pre-${e}"
              class="diff-highlight language-${e}"
            ><code
                tabindex="0"
                aria-labelledby="source-code-label"
                role="region"
                part="code code-${e}"
                class="language-${e}"
                .innerHTML=${this.__highlightedCode__}
              ></code></pre>`,()=>X`${Ct(this.code)}`)}
        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${Ze(this.disableLineNumbers,()=>X``,()=>X`<div part="gutter"></div>`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return setTimeout(async()=>{await this.updateComplete,setTimeout(()=>this.__setGutterMeasurements())}),n}};C(P,"baseName","light-code"),C(P,"styles",[ft,Ot,bt,T`
      :host {
	display: grid;
      }
      [part~="base"] {
        height: 100%;
        position: relative;
        z-index: 0;
	background: hsl(230, 1%, 98%);
	color: hsl(230, 8%, 24%);
	display: grid;
      }

      [part~="pre"] {
        height: 100%;
	display: grid;
	place-items: start;
      }

      [part~="code"] {
        width: 100%;
        height: 100%;
        place-content: start;
        overflow: auto;
      }

      [part~="gutter"] {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--gutter-cell-width, 40px));
        border-inline-end: var(--syntax-gutter-border);
        height: calc(100% - var(--scrollbar-height, 0px));
        max-height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 2;
      }
    `]),C(P,"properties",{summary:{},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserveWhitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{},highlighter:{attribute:!1,state:!0},__highlightedCode__:{attribute:!1,state:!0}});export{T as a,X as b,$ as c,sn as d,B as e,ft as f,xn as g,bt as h,Se as i,Ze as j,Ft as k,Lt as l,Ee as m,Rt as n,le as o,Mt as p,jt as q,P as r};
/*! Bundled license information:

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

lit-html/lit-html.js:
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

prism-esm/prism-core.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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
*/
//# sourceMappingURL=/light-pen/pull/19/bridgetown/static/chunks/chunk-LGGUBOZ5.js.map
