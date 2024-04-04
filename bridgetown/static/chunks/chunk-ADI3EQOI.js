import{d as C}from"/light-pen/bridgetown/static/chunks/chunk-25GN2ENT.js";var ce=window,de=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),Je=new WeakMap,te=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(de&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Je.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Je.set(n,e))}return e}toString(){return this.cssText}},Ke=t=>new te(typeof t=="string"?t:t+"",void 0,Te),j=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new te(n,t,Te)},je=(t,e)=>{de?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{let r=document.createElement("style"),i=ce.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},he=de?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return Ke(n)})(t):t;var Me,pe=window,Xe=pe.trustedTypes,Dt=Xe?Xe.emptyScript:"",Qe=pe.reactiveElementPolyfillSupport,Be={toAttribute(t,e){switch(e){case Boolean:t=t?Dt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Pe=(t,e)=>e!==t&&(e==e||t==t),Oe={attribute:!0,type:String,converter:Be,reflect:!1,hasChanged:Pe},He="finalized",M=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((n,r)=>{let i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Oe){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){let o=this[e];this[n]=i,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Oe}static finalize(){if(this.hasOwnProperty(He))return!1;this[He]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(let i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)n.unshift(he(i))}else e!==void 0&&n.push(he(e));return n}static _$Ep(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;let n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return je(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Oe){var i;let o=this.constructor._$Ep(e,r);if(o!==void 0&&r.reflect===!0){let s=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Be).toAttribute(n,r.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,n){var r;let i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){let s=i.getPropertyOptions(o),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:Be;this._$El=o,this[o]=c.fromAttribute(n,s.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Pe)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let n=!1,r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};M[He]=!0,M.elementProperties=new Map,M.elementStyles=[],M.shadowRootOptions={mode:"open"},Qe?.({ReactiveElement:M}),((Me=pe.reactiveElementVersions)!==null&&Me!==void 0?Me:pe.reactiveElementVersions=[]).push("1.6.3");var De,ge=window,J=ge.trustedTypes,et=J?J.createPolicy("lit-html",{createHTML:t=>t}):void 0,fe="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,ze="?"+O,Nt=`<${ze}>`,W=document,re=()=>W.createComment(""),ie=t=>t===null||typeof t!="object"&&typeof t!="function",at=Array.isArray,lt=t=>at(t)||typeof t?.[Symbol.iterator]=="function",Ne=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,nt=/>/g,I=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,it=/"/g,ut=/^(?:script|style|textarea|title)$/i,ct=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),X=ct(1),rn=ct(2),B=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),ot=new WeakMap,G=W.createTreeWalker(W,129,null,!1);function dt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(e):e}var ht=(t,e)=>{let n=t.length-1,r=[],i,o=e===2?"<svg>":"",s=ne;for(let c=0;c<n;c++){let a=t[c],u,l,h=-1,p=0;for(;p<a.length&&(s.lastIndex=p,l=s.exec(a),l!==null);)p=s.lastIndex,s===ne?l[1]==="!--"?s=tt:l[1]!==void 0?s=nt:l[2]!==void 0?(ut.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=I):l[3]!==void 0&&(s=I):s===I?l[0]===">"?(s=i??ne,h=-1):l[1]===void 0?h=-2:(h=s.lastIndex-l[2].length,u=l[1],s=l[3]===void 0?I:l[3]==='"'?it:rt):s===it||s===rt?s=I:s===tt||s===nt?s=ne:(s=I,i=void 0);let g=s===I&&t[c+1].startsWith("/>")?" ":"";o+=s===ne?a+Nt:h>=0?(r.push(u),a.slice(0,h)+fe+a.slice(h)+O+g):a+O+(h===-2?(r.push(void 0),c):g)}return[dt(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]},oe=class t{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0,c=e.length-1,a=this.parts,[u,l]=ht(e,n);if(this.el=t.createElement(u,r),G.currentNode=this.el.content,n===2){let h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(i=G.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let p of i.getAttributeNames())if(p.endsWith(fe)||p.startsWith(O)){let g=l[s++];if(h.push(p),g!==void 0){let d=i.getAttribute(g.toLowerCase()+fe).split(O),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:f[2],strings:d,ctor:f[1]==="."?ve:f[1]==="?"?be:f[1]==="@"?ye:Z})}else a.push({type:6,index:o})}for(let p of h)i.removeAttribute(p)}if(ut.test(i.tagName)){let h=i.textContent.split(O),p=h.length-1;if(p>0){i.textContent=J?J.emptyScript:"";for(let g=0;g<p;g++)i.append(h[g],re()),G.nextNode(),a.push({type:2,index:++o});i.append(h[p],re())}}}else if(i.nodeType===8)if(i.data===ze)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(O,h+1))!==-1;)a.push({type:7,index:o}),h+=O.length-1}o++}}static createElement(e,n){let r=W.createElement("template");return r.innerHTML=e,r}};function q(t,e,n=t,r){var i,o,s,c;if(e===B)return e;let a=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl,u=ie(e)?void 0:e._$litDirective$;return a?.constructor!==u&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),u===void 0?a=void 0:(a=new u(t),a._$AT(t,n,r)),r!==void 0?((s=(c=n)._$Co)!==null&&s!==void 0?s:c._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(e=q(t,a._$AS(t,e.values),a,r)),e}var me=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;let{el:{content:r},parts:i}=this._$AD,o=((n=e?.creationScope)!==null&&n!==void 0?n:W).importNode(r,!0);G.currentNode=o;let s=G.nextNode(),c=0,a=0,u=i[0];for(;u!==void 0;){if(c===u.index){let l;u.type===2?l=new K(s,s.nextSibling,this,e):u.type===1?l=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(l=new ke(s,this,e)),this._$AV.push(l),u=i[++a]}c!==u?.index&&(s=G.nextNode(),c++)}return G.currentNode=W,o}v(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},K=class t{constructor(e,n,r,i){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(o=i?.isConnected)===null||o===void 0||o}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=q(this,e,n),ie(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):lt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.$(W.createTextNode(e)),this._$AH=e}g(e){var n;let{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oe.createElement(dt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===o)this._$AH.v(r);else{let s=new me(o,this),c=s.u(this.options);s.v(r),this.$(c),this._$AH=s}}_$AC(e){let n=ot.get(e.strings);return n===void 0&&ot.set(e.strings,n=new oe(e)),n}T(e){at(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let o of e)i===n.length?n.push(r=new t(this.k(re()),this.k(re()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},Z=class{constructor(e,n,r,i,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){let o=this.strings,s=!1;if(o===void 0)e=q(this,e,n,0),s=!ie(e)||e!==this._$AH&&e!==B,s&&(this._$AH=e);else{let c=e,a,u;for(e=o[0],a=0;a<o.length-1;a++)u=q(this,c[r+a],n,a),u===B&&(u=this._$AH[a]),s||(s=!ie(u)||u!==this._$AH[a]),u===A?e=A:e!==A&&(e+=(u??"")+o[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ve=class extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},zt=J?J.emptyScript:"",be=class extends Z{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,zt):this.element.removeAttribute(this.name)}},ye=class extends Z{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){var r;if((e=(r=q(this,e,n,0))!==null&&r!==void 0?r:A)===B)return;let i=this._$AH,o=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==A&&(i===A||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},ke=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}},on={O:fe,P:O,A:ze,C:1,M:ht,L:me,R:lt,D:q,I:K,V:Z,H:be,N:ye,U:ve,F:ke},st=ge.litHtmlPolyfillSupport;st?.(oe,K),((De=ge.litHtmlVersions)!==null&&De!==void 0?De:ge.litHtmlVersions=[]).push("2.8.0");var pt=(t,e,n)=>{var r,i;let o=(r=n?.renderBefore)!==null&&r!==void 0?r:e,s=o._$litPart$;if(s===void 0){let c=(i=n?.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new K(e.insertBefore(re(),c),c,void 0,n??{})}return s._$AI(t),s};var Ue,Ie;var H=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;let r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pt(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return B}};H.finalized=!0,H._$litElement$=!0,(Ue=globalThis.litElementHydrateSupport)===null||Ue===void 0||Ue.call(globalThis,{LitElement:H});var gt=globalThis.litElementPolyfillSupport;gt?.({LitElement:H});((Ie=globalThis.litElementVersions)!==null&&Ie!==void 0?Ie:globalThis.litElementVersions=[]).push("3.3.3");var ft=j`
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
`,yn=j`
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
`;var mt=j`
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
  background: hsl(232, 3%, 94%);
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
	background-color: hsla(353, 100%, 96%, 1);
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
	background-color: hsla(137, 100%, 95%);
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

`;var Ge=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},se=Ge;var xe=class{constructor(e={}){let n={},{disableWorkerMessageHandler:r,manual:i}=e;this.manual=i,this.manual==null&&(this.manual=!0),this.plugins={};let o=this;this.disableWorkerMessageHandler=!!r,this.Token=E,this.util=new We(this);let s=this.util;if(this.languages={plain:n,plaintext:n,text:n,txt:n,extend:(l,h)=>{let p=this.util.clone(this.languages[l]);for(var g in h)p[g]=h[g];return p},insertBefore:(l,h,p,g)=>{g||(g=this.languages);let d=g[l],f={};for(let b in d)if(d.hasOwnProperty(b)){if(b==h)for(var v in p)p.hasOwnProperty(v)&&(f[v]=p[v]);p.hasOwnProperty(b)||(f[b]=d[b])}var m=g[l];return g[l]=f,this.languages.DFS(this.languages,function(b,y){y===m&&b!=l&&(this[b]=f)}),f},DFS(l,h,p,g){g=g||{};var d=s.objId;for(var f in l)if(l.hasOwnProperty(f)){h.call(l,f,l[f],p||f);var v=l[f],m=s.type(v);m==="Object"&&!g[d(v)]?(g[d(v)]=!0,this.DFS(v,h,null,g)):m==="Array"&&!g[d(v)]&&(g[d(v)]=!0,this.DFS(v,h,f,g))}}},this.hooks={all:{},add:function(l,h){var p=o.hooks.all;p[l]=p[l]||[],p[l].push(h)},run:function(l,h){var p=o.hooks.all[l];if(!(!p||!p.length))for(var g=0,d;d=p[g++];)d(h)}},!se.document)return se.addEventListener&&(o.disableWorkerMessageHandler||se.addEventListener("message",function(l){var h=JSON.parse(l.data),p=h.language,g=h.code,d=h.immediateClose;se.postMessage(o.highlight(g,o.languages[p],p)),d&&Ge.close()},!1)),o;function c(){o.manual||o.highlightAll()}let a=this.util.currentScript();if(a&&(this.filename=a.src,a.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var u=document.readyState;u==="loading"||u==="interactive"&&a&&a.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}}highlightAll(e,n){this.highlightAllUnder(document,e,n)}highlightAllUnder(e,n,r){var i={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),this.hooks.run("before-all-elements-highlight",i);for(var o=0,s;s=i.elements[o++];)this.highlightElement(s,n===!0,i.callback)}highlightElement(e,n,r){var i=this.util.getLanguage(e),o=this.languages[i];this.util.setLanguage(e,i);var s=e.parentElement;s&&s.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(s,i);var c=e.textContent,a={element:e,language:i,grammar:o,code:c};let u=h=>{a.highlightedCode=h,this.hooks.run("before-insert",a),a.element.innerHTML=a.highlightedCode,this.hooks.run("after-highlight",a),this.hooks.run("complete",a),r&&r.call(a.element)};if(this.hooks.run("before-sanity-check",a),s=a.element.parentElement,s&&s.nodeName.toLowerCase()==="pre"&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!a.code){this.hooks.run("complete",a),r&&r.call(a.element);return}if(this.hooks.run("before-highlight",a),!a.grammar){u(this.util.encode(a.code));return}if(n&&Ge.Worker){var l=new Worker(this.filename);l.onmessage=function(h){u(h.data)},l.postMessage(JSON.stringify({language:a.language,code:a.code,immediateClose:!0}))}else u(this.highlight(a.code,a.grammar,a.language))}highlight(e,n,r){var i={code:e,grammar:n,language:r};if(this.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=this.tokenize(i.code,i.grammar),this.hooks.run("after-tokenize",i),E.stringify(this.util.encode(i.tokens),i.language,this)}tokenize(e,n){var r=n?.rest;if(r){for(var i in r)n[i]=r[i];delete n.rest}var o=new It;return we(o,o.head,e),yt(e,o,n,o.head,0,this),Wt(o)}},E=class{constructor(e,n,r,i){this.type=e,this.content=n,this.alias=r,this.length=(i||"").length|0}static stringify(e,n,r){let i=this;if(typeof e=="string")return e;if(Array.isArray(e)){var o="";return e.forEach(function(l){o+=i.stringify(l,n,r)}),o}var s={type:e.type,content:i.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(s.classes,c):s.classes.push(c)),r.hooks.run("wrap",s);var a="";for(var u in s.attributes)a+=" "+u+'="'+(s.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+a+">"+s.content+"</"+s.tag+">"}},vt=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,Ut=0,We=class{constructor(e){C(this,"encode",e=>{if(e instanceof E){let n=e.content;return new E(e.type,this.encode(n),e.alias)}else return Array.isArray(e)?e.map(n=>this.encode(n)):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=e}type(e){return Object.prototype.toString.call(e).slice(8,-1)}getLanguage(e){for(;e;){var n=vt.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"}setLanguage(e,n){e.className=e.className.replace(RegExp(vt,"gi"),""),e.classList.add("language-"+n)}objId(e){return e.__id||Object.defineProperty(e,"__id",{value:++Ut}),e.__id}clone(e){return structuredClone(e)}isActive(e,n,r){for(var i="no-"+n;e;){var o=e.classList;if(o.contains(n))return!0;if(o.contains(i))return!1;e=e.parentElement}return!!r}currentScript(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==e)return n[r]}return null}}};function bt(t,e,n,r){t.lastIndex=e;var i=t.exec(n);if(i&&r&&i[1]){var o=i[1].length;i.index+=o,i[0]=i[0].slice(o)}return i}function yt(t,e,n,r,i,o,s){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var a=n[c];a=Array.isArray(a)?a:[a];for(var u=0;u<a.length;++u){if(s&&s.cause==c+","+u)return;var l=a[u],h=l.inside,p=!!l.lookbehind,g=!!l.greedy,d=l.alias;if(g&&!l.pattern.global){var f=l.pattern.toString().match(/[imsuy]*$/)[0];l.pattern=RegExp(l.pattern.source,f+"g")}for(var v=l.pattern||l,m=r.next,b=i;m!==e.tail&&!(s&&b>=s.reach);b+=m.value.length,m=m.next){var y=m.value;if(e.length>t.length)return;if(!(y instanceof E)){var $=1,k;if(g){if(k=bt(v,b,t,p),!k||k.index>=t.length)break;var F=k.index,L=k.index+k[0].length,w=b;for(w+=m.value.length;F>=w;)m=m.next,w+=m.value.length;if(w-=m.value.length,b=w,m.value instanceof E)continue;for(var x=m;x!==e.tail&&(w<L||typeof x.value=="string");x=x.next)$++,w+=x.value.length;$--,y=t.slice(b,w),k.index-=b}else if(k=bt(v,0,y,p),!k)continue;var F=k.index,S=k[0],D=y.slice(0,F),V=y.slice(F+S.length),N=b+y.length;s&&N>s.reach&&(s.reach=N);var z=m.prev;D&&(z=we(e,z,D),b+=D.length),Gt(e,z,$);var Ce=new E(c,h?o.tokenize(S,h):S,d,S);if(m=we(e,z,Ce),V&&we(e,m,V),$>1){var Y={cause:c+","+u,reach:N};yt(t,e,n,m.prev,b,o,Y),s&&Y.reach>s.reach&&(s.reach=Y.reach)}}}}}}function It(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function we(t,e,n){var r=e.next,i={value:n,prev:e,next:r};return e.next=i,r.prev=i,t.length++,i}function Gt(t,e,n){for(var r=e.next,i=0;i<n&&r!==t.tail;i++)r=r.next;e.next=r,r.prev=e,t.length-=i}function Wt(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}function R(t,e){typeof t>"u"||e?.force!==!0&&t.languages.markup||(t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,i){var o={};o["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var c={};c[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml)}function Q(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.css)){R(t);var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}}function Ae(t,e){typeof t>"u"||e?.force!==!0&&t.languages.clike||(t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function T(t,e){typeof t>"u"||e?.force!==!0&&t.languages.javascript||(Ae(t),R(t),t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript)}function kt(t){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",n=function(g,d){return"\u2716 Error "+g+" while fetching file: "+d},r="\u2716 Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",s="loading",c="loaded",a="failed",u="pre[data-src]:not(["+o+'="'+c+'"]):not(['+o+'="'+s+'"])';function l(g,d,f){var v=new XMLHttpRequest;v.open("GET",g,!0),v.onreadystatechange=function(){v.readyState==4&&(v.status<400&&v.responseText?d(v.responseText):v.status>=400?f(n(v.status,v.statusText)):f(r))},v.send(null)}function h(g){var d=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(g||"");if(d){var f=Number(d[1]),v=d[2],m=d[3];return v?m?[f,Number(m)]:[f,void 0]:[f,f]}}t.hooks.add("before-highlightall",function(g){g.selector+=", "+u}),t.hooks.add("before-sanity-check",function(g){var d=g.element;if(d.matches(u)){g.code="",d.setAttribute(o,s);var f=d.appendChild(document.createElement("CODE"));f.textContent=e;var v=d.getAttribute("data-src"),m=g.language;if(m==="none"){var b=(/\.(\w+)$/.exec(v)||[,"none"])[1];m=i[b]||b}t.util.setLanguage(f,m),t.util.setLanguage(d,m);var y=t.plugins.autoloader;y&&y.loadLanguages(m),l(v,function($){d.setAttribute(o,c);var k=h(d.getAttribute("data-range"));if(k){var L=$.split(/\r\n?|\n/g),w=k[0],x=k[1]==null?L.length:k[1];w<0&&(w+=L.length),w=Math.max(0,Math.min(w-1,L.length)),x<0&&(x+=L.length),x=Math.max(0,Math.min(x,L.length)),$=L.slice(w,x).join(`
`),d.hasAttribute("data-start")||d.setAttribute("data-start",String(w+1))}f.textContent=$,t.highlightElement(f)},function($){d.setAttribute(o,a),f.textContent=$})}}),t.plugins.fileHighlight={highlight:function(d){for(var f=(d||document).querySelectorAll(u),v=0,m;m=f[v++];)t.highlightElement(m)}};var p=!1;t.fileHighlight=function(){p||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),p=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}var $e=class extends xe{constructor(...e){super(...e),R(this),Q(this),Ae(this),T(this),kt(this)}};function wt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["markup-templating"])return;R(t);function n(r,i){return"___"+r.toUpperCase()+i+"___"}Object.defineProperties(t.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,i,o,s){if(r.language===i){var c=r.tokenStack=[];r.code=r.code.replace(o,function(a){if(typeof s=="function"&&!s(a))return a;for(var u=c.length,l;r.code.indexOf(l=n(i,u))!==-1;)++u;return c[u]=a,l}),r.grammar=t.languages.markup}}},tokenizePlaceholders:{value:function(r,i){if(r.language!==i||!r.tokenStack)return;r.grammar=t.languages[i];var o=0,s=Object.keys(r.tokenStack);function c(a){for(var u=0;u<a.length&&!(o>=s.length);u++){var l=a[u];if(typeof l=="string"||l.content&&typeof l.content=="string"){var h=s[o],p=r.tokenStack[h],g=typeof l=="string"?l:l.content,d=n(i,h),f=g.indexOf(d);if(f>-1){++o;var v=g.substring(0,f),m=new t.Token(i,t.tokenize(p,r.grammar),"language-"+i,p),b=g.substring(f+d.length),y=[];v&&y.push.apply(y,c([v])),y.push(m),b&&y.push.apply(y,c([b])),typeof l=="string"?a.splice.apply(a,[u,1].concat(y)):l.content=y}}else l.content&&c(l.content)}return a}c(r.tokens)}}})}function xt(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages["css-extras"])){t.languages["css-extras"]={},Q(t);var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=r,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var i={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},o={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:i,number:o,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:i,number:o})}}function At(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-extras"])return;t.languages["js-extras"]={},T(t),t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(a,u){return RegExp(a.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),u)}t.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],i=0;i<r.length;i++){var o=r[i],s=t.languages.javascript[o];t.util.type(s)==="RegExp"&&(s=t.languages.javascript[o]={pattern:s});var c=s.inside||{};s.inside=c,c["maybe-class-name"]=/^[A-Z][\s\S]*/}}function $t(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-templates"])return;t.languages["js-templates"]={},T(t);var n=t.languages.javascript["template-string"],r=n.pattern.source,i=n.inside.interpolation,o=i.inside["interpolation-punctuation"],s=i.pattern.source;function c(d,f){if(t.languages[d])return{pattern:RegExp("((?:"+f+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}t.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),n].filter(Boolean);function a(d,f){return"___"+f.toUpperCase()+"_"+d+"___"}function u(d,f,v){var m={code:d,grammar:f,language:v};return t.hooks.run("before-tokenize",m),m.tokens=t.tokenize(m.code,m.grammar),t.hooks.run("after-tokenize",m),m.tokens}function l(d){var f={};f["interpolation-punctuation"]=o;var v=t.tokenize(d,f);if(v.length===3){var m=[1,1];m.push.apply(m,u(v[1],t.languages.javascript,"javascript")),v.splice.apply(v,m)}return new t.Token("interpolation",v,i.alias,d)}function h(d,f,v){var m=t.tokenize(d,{interpolation:{pattern:RegExp(s),lookbehind:!0}}),b=0,y={},$=m.map(function(x){if(typeof x=="string")return x;for(var F=x.content,S;d.indexOf(S=a(b++,v))!==-1;);return y[S]=F,S}).join(""),k=u($,f,v),L=Object.keys(y);b=0;function w(x){for(var F=0;F<x.length;F++){if(b>=L.length)return;var S=x[F];if(typeof S=="string"||typeof S.content=="string"){var D=L[b],V=typeof S=="string"?S:S.content,N=V.indexOf(D);if(N!==-1){++b;var z=V.substring(0,N),Ce=l(y[D]),Y=V.substring(N+D.length),U=[];if(z&&U.push(z),U.push(Ce),Y){var Ye=[Y];w(Ye),U.push.apply(U,Ye)}typeof S=="string"?(x.splice.apply(x,[F,1].concat(U)),F+=U.length-1):S.content=U}}else{var Re=S.content;Array.isArray(Re)?w(Re):w([Re])}}}return w(k),new t.Token(v,k,"language-"+v,d)}var p={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};t.hooks.add("after-tokenize",function(d){if(!(d.language in p))return;function f(v){for(var m=0,b=v.length;m<b;m++){var y=v[m];if(typeof y!="string"){var $=y.content;if(!Array.isArray($)){typeof $!="string"&&f([$]);continue}if(y.type==="template-string"){var k=$[1];if($.length===3&&typeof k!="string"&&k.type==="embedded-code"){var L=g(k),w=k.alias,x=Array.isArray(w)?w[0]:w,F=t.languages[x];if(!F)continue;$[1]=h(L,F,x)}}else f($)}}}f(d.tokens)});function g(d){return typeof d=="string"?d:Array.isArray(d)?d.map(g).join(""):g(d.content)}}function _e(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages.jsx)return;t.languages.markup||R(t),t.languages.javascript||T(t);var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(u,l){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return o}),RegExp(u,l)}o=s(o).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var c=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(c).join(""):""},a=function(u){for(var l=[],h=0;h<u.length;h++){var p=u[h],g=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?l.length>0&&l[l.length-1].tagName===c(p.content[0].content[1])&&l.pop():p.content[p.content.length-1].content==="/>"||l.push({tagName:c(p.content[0].content[1]),openedBraces:0}):l.length>0&&p.type==="punctuation"&&p.content==="{"?l[l.length-1].openedBraces++:l.length>0&&l[l.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?l[l.length-1].openedBraces--:g=!0),(g||typeof p=="string")&&l.length>0&&l[l.length-1].openedBraces===0){var d=c(p);h<u.length-1&&(typeof u[h+1]=="string"||u[h+1].type==="plain-text")&&(d+=c(u[h+1]),u.splice(h+1,1)),h>0&&(typeof u[h-1]=="string"||u[h-1].type==="plain-text")&&(d=c(u[h-1])+d,u.splice(h-1,1),h--),u[h]=new t.Token("plain-text",d,null,d)}p.content&&typeof p.content!="string"&&a(p.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||a(u.tokens)})}function Se(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.typescript)){t.languages.javascript||T(t),t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var n=t.languages.extend("typescript",{});delete n["class-name"],t.languages.typescript["class-name"].inside=n,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),t.languages.ts=t.languages.typescript}}function _t(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.tsx)){t.languages.jsx||_e(t),t.languages.typescript||Se(t);var n=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",n),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"];var r=t.languages.tsx.tag;r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}}var _=new $e;R(_);wt(_);Q(_);xt(_);T(_);At(_);$t(_);_e(_);Se(_);_t(_);function St(t,e,n,r={}){var i={code:t,grammar:e,language:n,tokens:[]};if(_.hooks.run("before-tokenize",i),r.beforeTokenize?.forEach(o=>{o(i)}),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=_.tokenize(i.code,i.grammar),r.afterTokenize?.forEach(o=>{o(i)}),_.hooks.run("after-tokenize",i),E.stringify(_.util.encode(i.tokens),i.language,_)}function qe(t,e,n){return t?e():n?.()}var Et={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ft=t=>(...e)=>({_$litDirective$:t,values:e}),Ee=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var ae=class extends Ee{constructor(e){if(super(e),this.et=A,e.type!==Et.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this.ft=void 0,this.et=e;if(e===B)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};ae.directiveName="unsafeHTML",ae.resultType=1;var Ze=Ft(ae);function $r(t,e=" "){let n=[];for(let[r,i]of Object.entries(t))i&&n.push(r);return n.join(e)}function Lt(t,e=0){let n=null;return(...r)=>{n&&window.clearTimeout(n),n=window.setTimeout(()=>{t.apply(null,r)},e)}}function Fe(t){var e;return e=class extends t{static define(r,i,o){r||(r=this.baseName),i||(i=this);let s=window.customElements;this.__registry instanceof CustomElementRegistry&&(s=this.__registry);let c=!!s.get(r);c&&this.warnOnExistingElement&&console.warn(`${r} has already been registered.`),!c&&i&&s.define(r,class extends i{},o)}},C(e,"baseName",""),C(e,"warnOnExistingElement",!1),e}var Ve=class extends Fe(HTMLElement){};var Ct=new WeakMap;function qt(t,e){let n=e;for(;n;){if(Ct.get(n)===t)return!0;n=Object.getPrototypeOf(n)}return!1}function le(t){return e=>{if(qt(t,e))return e;let n=t(e);return Ct.set(n,t),n}}var Le=!!ShadowRoot.prototype.createElement,Zt=t=>{var e;return e=class extends t{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(r){this.__shadowRootOptions=r}constructor(...r){super(...r),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(r){let i=this.constructor;i.__registry=r}createRenderRoot(){let r=this.constructor,{scopedElements:i,shadowRootOptions:o}=r;if(!this.registry||this.registry===r.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=Le?new CustomElementRegistry:customElements;for(let[u,l]of Object.entries(i))this.defineScopedElement(u,l)}let c={mode:"open",...o,customElements:this.registry},a=this.attachShadow(c);return Le&&(this.renderOptions.creationScope=a),a instanceof ShadowRoot&&this.adoptStyles(a),a}createScopedElement(r){return(Le?this.shadowRoot:document).createElement(r)}adoptStyles(r){}defineScopedElement(r,i){let o=this.registry.get(r);return o&&Le===!1&&o!==i&&console.error([`You are trying to re-register the "${r}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),o?this.registry.get(r):this.registry.define(r,i)}},C(e,"__registry",window.customElements),e},Vt=le(Zt);var Yt=t=>class extends t{static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(n){this.__shadowRootOptions=n}get shadowRootOptions(){return this.constructor.shadowRootOptions}createRenderRoot(){return this.shadowRoot??this.attachShadow(this.shadowRootOptions||{mode:"open"})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.renderRoot==null&&(this.renderRoot=this.createRenderRoot())}},Jt=le(Yt);var ue=class extends Fe(H){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,n])=>{n.define(e)})}};C(ue,"dependencies",{});function Rt(...t){let e=[],n=document.createElement("div");for(let r of t){if(r instanceof HTMLTemplateElement){let i=r.content.cloneNode(!0);n.append(i),e.push(n.innerHTML),n.innerHTML="";continue}if(r instanceof HTMLScriptElement){e.push(r.textContent);continue}if(r instanceof HTMLTextAreaElement){e.push(r.value);continue}e.push(r.innerHTML)}return e.join(`
`)}function Tt(t,...e){let n=[],r=typeof t=="string"?[t]:t.slice();r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");for(let o=0;o<r.length;o++){let s;(s=r[o].match(/\n[\t ]+/g))&&n.push(...s)}if(n.length){let o=Math.min(...n.map(c=>c.length-1)),s=new RegExp(`
[	 ]{${o}}`,"g");for(let c=0;c<r.length;c++)r[c]=r[c].replace(s,`
`)}r[0]=r[0].replace(/^\r?\n/,"");let i=r[0];for(let o=0;o<e.length;o++)i+=e[o]+r[o+1];return i}var jt=j`
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
  grid-template-columns: max-content auto;
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
  background-color: rgba(230, 230, 230, 1);
  font-variant-numeric: tabular-nums;
  text-align: end;
  position: sticky;
  z-index: 1;
  left: 0px;
}
`;var Kt=/\r\n|\r|\n/;function Mt(t={}){let e=t.disableLineNumbers??!1,n=t.lineNumberStart??1;return function(i){let o=[];Ot(i.tokens).forEach((s,c)=>{s.length<=0&&s.push(" "),t.disableLineNumbers!==!0&&o.push(new E("light-gutter-cell",(c+n).toString())),o.push(new E("light-line",s))}),i.tokens=o}}function Xt(t){return Array.isArray(t)?t:[t]}function Qt(t){return t.length===0?"":t.length===1&&typeof t[0]=="string"?t[0]:t}function Ot(t){let e=[],n=[e];for(let r=0;r<t.length;r++){let i=t[r];if(typeof i=="string"){let o=i.split(Kt);for(let s=0;s<o.length;s++){s>0&&n.push(e=[]);let c=o[s];c&&e.push(c)}}else{let o=Ot(Xt(i.content));if(o.length>1)for(let s=0;s<o.length;s++){s>0&&n.push(e=[]);let c=o[s];if(c.length){let a=new E(i.type,Qt(c),i.alias);a.length=c.reduce((u,l)=>u+l.length,0),e.push(a)}}else e.push(i)}}return n}var P=class{constructor(){let e=()=>{this.errors=[],this.ranges=[],this.numbers=new Set};this.reset=e,this.reset()}includes(e){if(this.numbers.has(e))return!0;if(this.ranges.length==0)return!1;for(let n of this.ranges){let[r,i]=n;if(e>=r&&e<=i)return!0}return!1}parse(e){return this.reset(),e.includes("{")?e.includes("}")?(e=e.split(/{/)[1],e?(e=e.split(/}/)[0],e.split(/,\s*/).forEach(n=>{let[r,i]=n.split(/-/),o=Number(r),s=Number(i);if(!(o==null||isNaN(o))){if(s==null||isNaN(s)){this.numbers.add(o);return}this.ranges.push([o,s])}}),this):(this.errors.push(new Error("Invalid string provided for range.")),this)):(this.errors.push(new Error("Unable to parse range. No `}` found.")),this):(this.errors.push(new Error("Unable to parse range. No `{` found.")),this)}};function Bt(t){let{highlightLinesRange:e,insertedLinesRange:n,deletedLinesRange:r}=t;return function(i){let o=1;for(let s of i.tokens)typeof s!="string"&&(e.includes(o)&&(s.type+=" line-highlight"),n.includes(o)&&(s.type+=" inserted"),r.includes(o)&&(s.type+=" deleted"),s.type.includes("light-line")&&o++)}}function Ht(){return function(t){let e=["inserted","line-highlight","deleted"];t.type.includes("light-line")&&(t.attributes.part="line",e.forEach(n=>{t.type.includes(n)&&(n==="line-highlight"&&(n="highlight"),t.attributes.part+=" line-"+n)})),t.type.includes("light-gutter-cell")&&(t.attributes.part="gutter-cell",e.forEach(n=>{t.type.includes("gutter-cell-"+n)&&(n==="line-highlight"&&(n="highlight"),t.attributes.part+=" gutter-cell-"+n)}))}}var ee=class extends ue{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=Lt(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.__resizeObserver=new ResizeObserver(()=>this.__setGutterWidth())}connectedCallback(){super.connectedCallback(),this.__resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.unobserve(this)}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let n=e.target;if(n==null)return;let r=n.getAttribute("name");if(["preview-code","code"].includes(r||"")===!1)return;let i=n.assignedElements({flatten:!0}),o=this.unescapeTags(Rt(...i));if(this.preserveWhitespace||(o=Tt(o.trim())),r==="code"){this.code=o;return}}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){let n=[];return n.push(Mt({lineNumberStart:this.lineNumberStart,disableLineNumbers:this.disableLineNumbers})),n.push(Bt({insertedLinesRange:new P().parse(this.insertedLines),deletedLinesRange:new P().parse(this.deletedLines),highlightLinesRange:new P().parse(this.highlightLines)})),_.hooks.add("wrap",Ht()),e=St(e,_.languages[this.language],this.language,{afterTokenize:n}),e}__setGutterWidth(){let e=this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth;e&&this.style.setProperty("--gutter-cell-width",`${e}px`)}render(){let e=this.language,n=X`
      <div part="base">
        ${qe(!this.disableHighlight,()=>X`
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
              >${Ze(this.highlight(this.code))}</code></pre>`,()=>X`${Ze(this.code)}`)}

        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${qe(this.disableLineNumbers,()=>X``,()=>X`<div part="gutter"></div>`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return setTimeout(async()=>{await this.updateComplete,setTimeout(()=>this.__setGutterWidth())}),n}};C(ee,"baseName","light-code"),C(ee,"styles",[ft,jt,mt,j`
      [part~="base"] {
        height: 100%;
        position: relative;
	      background: hsl(230, 1%, 98%);
	      color: hsl(230, 8%, 24%);
      }

      [part~="pre"] {
        height: 100%;
      }

      [part~="code"] {
        overflow: auto;
      }

      [part~="gutter"] {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--gutter-cell-width, 40px) + 1px);
        border-inline-end: 1px solid darkgray;
        height: 100%;
        max-height: 100%;
        overflow: hidden;
        pointer-events: none;
      }
    `]),C(ee,"properties",{summary:{},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserveWhitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{}});export{j as a,X as b,B as c,A as d,on as e,H as f,ft as g,yn as h,mt as i,E as j,_ as k,St as l,qe as m,Et as n,Ft as o,Ee as p,$r as q,Lt as r,ue as s,Rt as t,Tt as u,Mt as v,ee as w};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-ADI3EQOI.js.map
