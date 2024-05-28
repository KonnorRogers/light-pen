import{d as L}from"/light-pen/bridgetown/static/chunks/chunk-6NDGNSQO.js";var ue=window,ce=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Re=Symbol(),Ke=new WeakMap,ee=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(ce&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Ke.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ke.set(n,e))}return e}toString(){return this.cssText}},Xe=t=>new ee(typeof t=="string"?t:t+"",void 0,Re),T=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new ee(n,t,Re)},Te=(t,e)=>{ce?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{let r=document.createElement("style"),i=ue.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},de=ce?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return Xe(n)})(t):t;var je,he=window,Qe=he.trustedTypes,zt=Qe?Qe.emptyScript:"",Pe=he.reactiveElementPolyfillSupport,Oe={toAttribute(t,e){switch(e){case Boolean:t=t?zt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},et=(t,e)=>e!==t&&(e==e||t==t),Me={attribute:!0,type:String,converter:Oe,reflect:!1,hasChanged:et},Be="finalized",j=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((n,r)=>{let i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Me){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){let o=this[e];this[n]=i,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Me}static finalize(){if(this.hasOwnProperty(Be))return!1;this[Be]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(let i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)n.unshift(de(i))}else e!==void 0&&n.push(de(e));return n}static _$Ep(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;let n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Te(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Me){var i;let o=this.constructor._$Ep(e,r);if(o!==void 0&&r.reflect===!0){let a=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Oe).toAttribute(n,r.type);this._$El=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(e,n){var r;let i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){let a=i.getPropertyOptions(o),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?a.converter:Oe;this._$El=o,this[o]=c.fromAttribute(n,a.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||et)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let n=!1,r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};j[Be]=!0,j.elementProperties=new Map,j.elementStyles=[],j.shadowRootOptions={mode:"open"},Pe?.({ReactiveElement:j}),((je=he.reactiveElementVersions)!==null&&je!==void 0?je:he.reactiveElementVersions=[]).push("1.6.3");var He,pe=window,Y=pe.trustedTypes,tt=Y?Y.createPolicy("lit-html",{createHTML:t=>t}):void 0,ge="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,ze="?"+M,Nt=`<${ze}>`,G=document,ne=()=>G.createComment(""),re=t=>t===null||typeof t!="object"&&typeof t!="function",lt=Array.isArray,ut=t=>lt(t)||typeof t?.[Symbol.iterator]=="function",De=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,U=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,ot=/"/g,ct=/^(?:script|style|textarea|title)$/i,dt=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),K=dt(1),on=dt(2),O=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),at=new WeakMap,I=G.createTreeWalker(G,129,null,!1);function ht(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(e):e}var pt=(t,e)=>{let n=t.length-1,r=[],i,o=e===2?"<svg>":"",a=te;for(let c=0;c<n;c++){let s=t[c],u,l,h=-1,p=0;for(;p<s.length&&(a.lastIndex=p,l=a.exec(s),l!==null);)p=a.lastIndex,a===te?l[1]==="!--"?a=nt:l[1]!==void 0?a=rt:l[2]!==void 0?(ct.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=U):l[3]!==void 0&&(a=U):a===U?l[0]===">"?(a=i??te,h=-1):l[1]===void 0?h=-2:(h=a.lastIndex-l[2].length,u=l[1],a=l[3]===void 0?U:l[3]==='"'?ot:it):a===ot||a===it?a=U:a===nt||a===rt?a=te:(a=U,i=void 0);let g=a===U&&t[c+1].startsWith("/>")?" ":"";o+=a===te?s+Nt:h>=0?(r.push(u),s.slice(0,h)+ge+s.slice(h)+M+g):s+M+(h===-2?(r.push(void 0),c):g)}return[ht(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]},ie=class t{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,a=0,c=e.length-1,s=this.parts,[u,l]=pt(e,n);if(this.el=t.createElement(u,r),I.currentNode=this.el.content,n===2){let h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(i=I.nextNode())!==null&&s.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let p of i.getAttributeNames())if(p.endsWith(ge)||p.startsWith(M)){let g=l[a++];if(h.push(p),g!==void 0){let d=i.getAttribute(g.toLowerCase()+ge).split(M),f=/([.?@])?(.*)/.exec(g);s.push({type:1,index:o,name:f[2],strings:d,ctor:f[1]==="."?ve:f[1]==="?"?me:f[1]==="@"?be:q})}else s.push({type:6,index:o})}for(let p of h)i.removeAttribute(p)}if(ct.test(i.tagName)){let h=i.textContent.split(M),p=h.length-1;if(p>0){i.textContent=Y?Y.emptyScript:"";for(let g=0;g<p;g++)i.append(h[g],ne()),I.nextNode(),s.push({type:2,index:++o});i.append(h[p],ne())}}}else if(i.nodeType===8)if(i.data===ze)s.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(M,h+1))!==-1;)s.push({type:7,index:o}),h+=M.length-1}o++}}static createElement(e,n){let r=G.createElement("template");return r.innerHTML=e,r}};function W(t,e,n=t,r){var i,o,a,c;if(e===O)return e;let s=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl,u=re(e)?void 0:e._$litDirective$;return s?.constructor!==u&&((o=s?._$AO)===null||o===void 0||o.call(s,!1),u===void 0?s=void 0:(s=new u(t),s._$AT(t,n,r)),r!==void 0?((a=(c=n)._$Co)!==null&&a!==void 0?a:c._$Co=[])[r]=s:n._$Cl=s),s!==void 0&&(e=W(t,s._$AS(t,e.values),s,r)),e}var fe=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;let{el:{content:r},parts:i}=this._$AD,o=((n=e?.creationScope)!==null&&n!==void 0?n:G).importNode(r,!0);I.currentNode=o;let a=I.nextNode(),c=0,s=0,u=i[0];for(;u!==void 0;){if(c===u.index){let l;u.type===2?l=new J(a,a.nextSibling,this,e):u.type===1?l=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(l=new ye(a,this,e)),this._$AV.push(l),u=i[++s]}c!==u?.index&&(a=I.nextNode(),c++)}return I.currentNode=G,o}v(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},J=class t{constructor(e,n,r,i){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(o=i?.isConnected)===null||o===void 0||o}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=W(this,e,n),re(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ut(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&re(this._$AH)?this._$AA.nextSibling.data=e:this.$(G.createTextNode(e)),this._$AH=e}g(e){var n;let{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ie.createElement(ht(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===o)this._$AH.v(r);else{let a=new fe(o,this),c=a.u(this.options);a.v(r),this.$(c),this._$AH=a}}_$AC(e){let n=at.get(e.strings);return n===void 0&&at.set(e.strings,n=new ie(e)),n}T(e){lt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let o of e)i===n.length?n.push(r=new t(this.k(ne()),this.k(ne()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},q=class{constructor(e,n,r,i,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){let o=this.strings,a=!1;if(o===void 0)e=W(this,e,n,0),a=!re(e)||e!==this._$AH&&e!==O,a&&(this._$AH=e);else{let c=e,s,u;for(e=o[0],s=0;s<o.length-1;s++)u=W(this,c[r+s],n,s),u===O&&(u=this._$AH[s]),a||(a=!re(u)||u!==this._$AH[s]),u===A?e=A:e!==A&&(e+=(u??"")+o[s+1]),this._$AH[s]=u}a&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ve=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},Ut=Y?Y.emptyScript:"",me=class extends q{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Ut):this.element.removeAttribute(this.name)}},be=class extends q{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){var r;if((e=(r=W(this,e,n,0))!==null&&r!==void 0?r:A)===O)return;let i=this._$AH,o=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==A&&(i===A||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},ye=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}},an={O:ge,P:M,A:ze,C:1,M:pt,L:fe,R:ut,D:W,I:J,V:q,H:me,N:be,U:ve,F:ye},st=pe.litHtmlPolyfillSupport;st?.(ie,J),((He=pe.litHtmlVersions)!==null&&He!==void 0?He:pe.litHtmlVersions=[]).push("2.8.0");var gt=(t,e,n)=>{var r,i;let o=(r=n?.renderBefore)!==null&&r!==void 0?r:e,a=o._$litPart$;if(a===void 0){let c=(i=n?.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=a=new J(e.insertBefore(ne(),c),c,void 0,n??{})}return a._$AI(t),a};var Ne,Ue;var B=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;let r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gt(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return O}};B.finalized=!0,B._$litElement$=!0,(Ne=globalThis.litElementHydrateSupport)===null||Ne===void 0||Ne.call(globalThis,{LitElement:B});var ft=globalThis.litElementPolyfillSupport;ft?.({LitElement:B});((Ue=globalThis.litElementVersions)!==null&&Ue!==void 0?Ue:globalThis.litElementVersions=[]).push("3.3.3");var vt=T`
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
`,kn=T`
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
`;var mt=T`
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

`;var Ie=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},oe=Ie;var xe=class{constructor(e={}){let n={},{disableWorkerMessageHandler:r,manual:i}=e;this.manual=i,this.manual==null&&(this.manual=!0),this.plugins={};let o=this;this.disableWorkerMessageHandler=!!r,this.Token=S,this.util=new Ge(this);let a=this.util;if(this.languages={plain:n,plaintext:n,text:n,txt:n,extend:(l,h)=>{let p=this.util.clone(this.languages[l]);for(var g in h)p[g]=h[g];return p},insertBefore:(l,h,p,g)=>{g||(g=this.languages);let d=g[l],f={};for(let b in d)if(d.hasOwnProperty(b)){if(b==h)for(var m in p)p.hasOwnProperty(m)&&(f[m]=p[m]);p.hasOwnProperty(b)||(f[b]=d[b])}var v=g[l];return g[l]=f,this.languages.DFS(this.languages,function(b,y){y===v&&b!=l&&(this[b]=f)}),f},DFS(l,h,p,g){g=g||{};var d=a.objId;for(var f in l)if(l.hasOwnProperty(f)){h.call(l,f,l[f],p||f);var m=l[f],v=a.type(m);v==="Object"&&!g[d(m)]?(g[d(m)]=!0,this.DFS(m,h,null,g)):v==="Array"&&!g[d(m)]&&(g[d(m)]=!0,this.DFS(m,h,f,g))}}},this.hooks={all:{},add:function(l,h){var p=o.hooks.all;p[l]=p[l]||[],p[l].push(h)},run:function(l,h){var p=o.hooks.all[l];if(!(!p||!p.length))for(var g=0,d;d=p[g++];)d(h)}},!oe.document)return oe.addEventListener&&(o.disableWorkerMessageHandler||oe.addEventListener("message",function(l){var h=JSON.parse(l.data),p=h.language,g=h.code,d=h.immediateClose;oe.postMessage(o.highlight(g,o.languages[p],p)),d&&Ie.close()},!1)),o;function c(){o.manual||o.highlightAll()}let s=this.util.currentScript();if(s&&(this.filename=s.src,s.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var u=document.readyState;u==="loading"||u==="interactive"&&s&&s.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}}highlightAll(e,n){this.highlightAllUnder(document,e,n)}highlightAllUnder(e,n,r){var i={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),this.hooks.run("before-all-elements-highlight",i);for(var o=0,a;a=i.elements[o++];)this.highlightElement(a,n===!0,i.callback)}highlightElement(e,n,r){var i=this.util.getLanguage(e),o=this.languages[i];this.util.setLanguage(e,i);var a=e.parentElement;a&&a.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(a,i);var c=e.textContent,s={element:e,language:i,grammar:o,code:c};let u=h=>{s.highlightedCode=h,this.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,this.hooks.run("after-highlight",s),this.hooks.run("complete",s),r&&r.call(s.element)};if(this.hooks.run("before-sanity-check",s),a=s.element.parentElement,a&&a.nodeName.toLowerCase()==="pre"&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!s.code){this.hooks.run("complete",s),r&&r.call(s.element);return}if(this.hooks.run("before-highlight",s),!s.grammar){u(this.util.encode(s.code));return}if(n&&Ie.Worker){var l=new Worker(this.filename);l.onmessage=function(h){u(h.data)},l.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(this.highlight(s.code,s.grammar,s.language))}highlight(e,n,r){var i={code:e,grammar:n,language:r};if(this.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=this.tokenize(i.code,i.grammar),this.hooks.run("after-tokenize",i),S.stringify(this.util.encode(i.tokens),i.language,this)}tokenize(e,n){var r=n?.rest;if(r){for(var i in r)n[i]=r[i];delete n.rest}var o=new Gt;return ke(o,o.head,e),kt(e,o,n,o.head,0,this),qt(o)}},S=class{constructor(e,n,r,i){this.type=e,this.content=n,this.alias=r,this.length=(i||"").length|0}static stringify(e,n,r){let i=this;if(typeof e=="string")return e;if(Array.isArray(e)){var o="";return e.forEach(function(l){o+=i.stringify(l,n,r)}),o}var a={type:e.type,content:i.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(a.classes,c):a.classes.push(c)),r.hooks.run("wrap",a);var s="";for(var u in a.attributes)s+=" "+u+'="'+(a.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+s+">"+a.content+"</"+a.tag+">"}},bt=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,It=0,Ge=class{constructor(e){L(this,"encode",e=>{if(e instanceof S){let n=e.content;return new S(e.type,this.encode(n),e.alias)}else return Array.isArray(e)?e.map(n=>this.encode(n)):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=e}type(e){return Object.prototype.toString.call(e).slice(8,-1)}getLanguage(e){for(;e;){var n=bt.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"}setLanguage(e,n){e.className=e.className.replace(RegExp(bt,"gi"),""),e.classList.add("language-"+n)}objId(e){return e.__id||Object.defineProperty(e,"__id",{value:++It}),e.__id}clone(e){return structuredClone(e)}isActive(e,n,r){for(var i="no-"+n;e;){var o=e.classList;if(o.contains(n))return!0;if(o.contains(i))return!1;e=e.parentElement}return!!r}currentScript(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==e)return n[r]}return null}}};function yt(t,e,n,r){t.lastIndex=e;var i=t.exec(n);if(i&&r&&i[1]){var o=i[1].length;i.index+=o,i[0]=i[0].slice(o)}return i}function kt(t,e,n,r,i,o,a){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var s=n[c];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(a&&a.cause==c+","+u)return;var l=s[u],h=l.inside,p=!!l.lookbehind,g=!!l.greedy,d=l.alias;if(g&&!l.pattern.global){var f=l.pattern.toString().match(/[imsuy]*$/)[0];l.pattern=RegExp(l.pattern.source,f+"g")}for(var m=l.pattern||l,v=r.next,b=i;v!==e.tail&&!(a&&b>=a.reach);b+=v.value.length,v=v.next){var y=v.value;if(e.length>t.length)return;if(!(y instanceof S)){var $=1,k;if(g){if(k=yt(m,b,t,p),!k||k.index>=t.length)break;var E=k.index,F=k.index+k[0].length,x=b;for(x+=v.value.length;E>=x;)v=v.next,x+=v.value.length;if(x-=v.value.length,b=x,v.value instanceof S)continue;for(var w=v;w!==e.tail&&(x<F||typeof w.value=="string");w=w.next)$++,x+=w.value.length;$--,y=t.slice(b,x),k.index-=b}else if(k=yt(m,0,y,p),!k)continue;var E=k.index,_=k[0],H=y.slice(0,E),Z=y.slice(E+_.length),D=b+y.length;a&&D>a.reach&&(a.reach=D);var z=v.prev;H&&(z=ke(e,z,H),b+=H.length),Wt(e,z,$);var Le=new S(c,h?o.tokenize(_,h):_,d,_);if(v=ke(e,z,Le),Z&&ke(e,v,Z),$>1){var V={cause:c+","+u,reach:D};kt(t,e,n,v.prev,b,o,V),a&&V.reach>a.reach&&(a.reach=V.reach)}}}}}}function Gt(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function ke(t,e,n){var r=e.next,i={value:n,prev:e,next:r};return e.next=i,r.prev=i,t.length++,i}function Wt(t,e,n){for(var r=e.next,i=0;i<n&&r!==t.tail;i++)r=r.next;e.next=r,r.prev=e,t.length-=i}function qt(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}function C(t,e){typeof t>"u"||e?.force!==!0&&t.languages.markup||(t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,i){var o={};o["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var c={};c[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml)}function X(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.css)){C(t);var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}}function we(t,e){typeof t>"u"||e?.force!==!0&&t.languages.clike||(t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function R(t,e){typeof t>"u"||e?.force!==!0&&t.languages.javascript||(we(t),C(t),t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript)}function xt(t){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",n=function(g,d){return"\u2716 Error "+g+" while fetching file: "+d},r="\u2716 Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",a="loading",c="loaded",s="failed",u="pre[data-src]:not(["+o+'="'+c+'"]):not(['+o+'="'+a+'"])';function l(g,d,f){var m=new XMLHttpRequest;m.open("GET",g,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?d(m.responseText):m.status>=400?f(n(m.status,m.statusText)):f(r))},m.send(null)}function h(g){var d=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(g||"");if(d){var f=Number(d[1]),m=d[2],v=d[3];return m?v?[f,Number(v)]:[f,void 0]:[f,f]}}t.hooks.add("before-highlightall",function(g){g.selector+=", "+u}),t.hooks.add("before-sanity-check",function(g){var d=g.element;if(d.matches(u)){g.code="",d.setAttribute(o,a);var f=d.appendChild(document.createElement("CODE"));f.textContent=e;var m=d.getAttribute("data-src"),v=g.language;if(v==="none"){var b=(/\.(\w+)$/.exec(m)||[,"none"])[1];v=i[b]||b}t.util.setLanguage(f,v),t.util.setLanguage(d,v);var y=t.plugins.autoloader;y&&y.loadLanguages(v),l(m,function($){d.setAttribute(o,c);var k=h(d.getAttribute("data-range"));if(k){var F=$.split(/\r\n?|\n/g),x=k[0],w=k[1]==null?F.length:k[1];x<0&&(x+=F.length),x=Math.max(0,Math.min(x-1,F.length)),w<0&&(w+=F.length),w=Math.max(0,Math.min(w,F.length)),$=F.slice(x,w).join(`
`),d.hasAttribute("data-start")||d.setAttribute("data-start",String(x+1))}f.textContent=$,t.highlightElement(f)},function($){d.setAttribute(o,s),f.textContent=$})}}),t.plugins.fileHighlight={highlight:function(d){for(var f=(d||document).querySelectorAll(u),m=0,v;v=f[m++];)t.highlightElement(v)}};var p=!1;t.fileHighlight=function(){p||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),p=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}var Ae=class extends xe{constructor(...e){super(...e),C(this),X(this),we(this),R(this),xt(this)}};function wt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["markup-templating"])return;C(t);function n(r,i){return"___"+r.toUpperCase()+i+"___"}Object.defineProperties(t.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,i,o,a){if(r.language===i){var c=r.tokenStack=[];r.code=r.code.replace(o,function(s){if(typeof a=="function"&&!a(s))return s;for(var u=c.length,l;r.code.indexOf(l=n(i,u))!==-1;)++u;return c[u]=s,l}),r.grammar=t.languages.markup}}},tokenizePlaceholders:{value:function(r,i){if(r.language!==i||!r.tokenStack)return;r.grammar=t.languages[i];var o=0,a=Object.keys(r.tokenStack);function c(s){for(var u=0;u<s.length&&!(o>=a.length);u++){var l=s[u];if(typeof l=="string"||l.content&&typeof l.content=="string"){var h=a[o],p=r.tokenStack[h],g=typeof l=="string"?l:l.content,d=n(i,h),f=g.indexOf(d);if(f>-1){++o;var m=g.substring(0,f),v=new t.Token(i,t.tokenize(p,r.grammar),"language-"+i,p),b=g.substring(f+d.length),y=[];m&&y.push.apply(y,c([m])),y.push(v),b&&y.push.apply(y,c([b])),typeof l=="string"?s.splice.apply(s,[u,1].concat(y)):l.content=y}}else l.content&&c(l.content)}return s}c(r.tokens)}}})}function At(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages["css-extras"])){t.languages["css-extras"]={},X(t);var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=r,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var i={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},o={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:i,number:o,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:i,number:o})}}function $t(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-extras"])return;t.languages["js-extras"]={},R(t),t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(s,u){return RegExp(s.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),u)}t.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],i=0;i<r.length;i++){var o=r[i],a=t.languages.javascript[o];t.util.type(a)==="RegExp"&&(a=t.languages.javascript[o]={pattern:a});var c=a.inside||{};a.inside=c,c["maybe-class-name"]=/^[A-Z][\s\S]*/}}function _t(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-templates"])return;t.languages["js-templates"]={},R(t);var n=t.languages.javascript["template-string"],r=n.pattern.source,i=n.inside.interpolation,o=i.inside["interpolation-punctuation"],a=i.pattern.source;function c(d,f){if(t.languages[d])return{pattern:RegExp("((?:"+f+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}t.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),n].filter(Boolean);function s(d,f){return"___"+f.toUpperCase()+"_"+d+"___"}function u(d,f,m){var v={code:d,grammar:f,language:m};return t.hooks.run("before-tokenize",v),v.tokens=t.tokenize(v.code,v.grammar),t.hooks.run("after-tokenize",v),v.tokens}function l(d){var f={};f["interpolation-punctuation"]=o;var m=t.tokenize(d,f);if(m.length===3){var v=[1,1];v.push.apply(v,u(m[1],t.languages.javascript,"javascript")),m.splice.apply(m,v)}return new t.Token("interpolation",m,i.alias,d)}function h(d,f,m){var v=t.tokenize(d,{interpolation:{pattern:RegExp(a),lookbehind:!0}}),b=0,y={},$=v.map(function(w){if(typeof w=="string")return w;for(var E=w.content,_;d.indexOf(_=s(b++,m))!==-1;);return y[_]=E,_}).join(""),k=u($,f,m),F=Object.keys(y);b=0;function x(w){for(var E=0;E<w.length;E++){if(b>=F.length)return;var _=w[E];if(typeof _=="string"||typeof _.content=="string"){var H=F[b],Z=typeof _=="string"?_:_.content,D=Z.indexOf(H);if(D!==-1){++b;var z=Z.substring(0,D),Le=l(y[H]),V=Z.substring(D+H.length),N=[];if(z&&N.push(z),N.push(Le),V){var Je=[V];x(Je),N.push.apply(N,Je)}typeof _=="string"?(w.splice.apply(w,[E,1].concat(N)),E+=N.length-1):_.content=N}}else{var Ce=_.content;Array.isArray(Ce)?x(Ce):x([Ce])}}}return x(k),new t.Token(m,k,"language-"+m,d)}var p={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};t.hooks.add("after-tokenize",function(d){if(!(d.language in p))return;function f(m){for(var v=0,b=m.length;v<b;v++){var y=m[v];if(typeof y!="string"){var $=y.content;if(!Array.isArray($)){typeof $!="string"&&f([$]);continue}if(y.type==="template-string"){var k=$[1];if($.length===3&&typeof k!="string"&&k.type==="embedded-code"){var F=g(k),x=k.alias,w=Array.isArray(x)?x[0]:x,E=t.languages[w];if(!E)continue;$[1]=h(F,E,w)}}else f($)}}}f(d.tokens)});function g(d){return typeof d=="string"?d:Array.isArray(d)?d.map(g).join(""):g(d.content)}}function $e(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages.jsx)return;t.languages.markup||C(t),t.languages.javascript||R(t);var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(u,l){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return o}),RegExp(u,l)}o=a(o).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var c=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(c).join(""):""},s=function(u){for(var l=[],h=0;h<u.length;h++){var p=u[h],g=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?l.length>0&&l[l.length-1].tagName===c(p.content[0].content[1])&&l.pop():p.content[p.content.length-1].content==="/>"||l.push({tagName:c(p.content[0].content[1]),openedBraces:0}):l.length>0&&p.type==="punctuation"&&p.content==="{"?l[l.length-1].openedBraces++:l.length>0&&l[l.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?l[l.length-1].openedBraces--:g=!0),(g||typeof p=="string")&&l.length>0&&l[l.length-1].openedBraces===0){var d=c(p);h<u.length-1&&(typeof u[h+1]=="string"||u[h+1].type==="plain-text")&&(d+=c(u[h+1]),u.splice(h+1,1)),h>0&&(typeof u[h-1]=="string"||u[h-1].type==="plain-text")&&(d=c(u[h-1])+d,u.splice(h-1,1),h--),u[h]=new t.Token("plain-text",d,null,d)}p.content&&typeof p.content!="string"&&s(p.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||s(u.tokens)})}function _e(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.typescript)){t.languages.javascript||R(t),t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var n=t.languages.extend("typescript",{});delete n["class-name"],t.languages.typescript["class-name"].inside=n,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),t.languages.ts=t.languages.typescript}}function St(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.tsx)){t.languages.jsx||$e(t),t.languages.typescript||_e(t);var n=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",n),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"];var r=t.languages.tsx.tag;r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}}function qe(){let t=new Ae;return C(t),wt(t),X(t),At(t),R(t),$t(t),_t(t),$e(t),_e(t),St(t),t}var We=class{static get instance(){return this.__singleton__||(this.__singleton__=qe()),this.__singleton__}};function Et(t,e,n,r,i={}){r||(r=We.instance);var o={code:t,grammar:e,language:n,tokens:[]};if(r.hooks.run("before-tokenize",o),i.beforeTokenize?.forEach(a=>{a(o)}),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=r.tokenize(o.code,o.grammar),i.afterTokenize?.forEach(a=>{a(o)}),r.hooks.run("after-tokenize",o),S.stringify(r.util.encode(o.tokens),o.language,r)}function Ze(t,e,n){return t?e():n?.()}var Ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=t=>(...e)=>({_$litDirective$:t,values:e}),Se=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var ae=class extends Se{constructor(e){if(super(e),this.et=A,e.type!==Ft.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this.ft=void 0,this.et=e;if(e===O)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};ae.directiveName="unsafeHTML",ae.resultType=1;var Ve=Lt(ae);function Ct(t,e=0){let n=null;return(...r)=>{n&&window.clearTimeout(n),n=window.setTimeout(()=>{t.apply(null,r)},e)}}function Ee(t){var e;return e=class extends t{static define(r,i,o){r||(r=this.baseName),i||(i=this);let a=window.customElements;this.__registry instanceof CustomElementRegistry&&(a=this.__registry);let c=!!a.get(r);c&&this.warnOnExistingElement&&console.warn(`${r} has already been registered.`),!c&&i&&a.define(r,class extends i{},o)}},L(e,"baseName",""),L(e,"warnOnExistingElement",!1),e}var Ye=class extends Ee(HTMLElement){};var Rt=new WeakMap;function Zt(t,e){let n=e;for(;n;){if(Rt.get(n)===t)return!0;n=Object.getPrototypeOf(n)}return!1}function se(t){return e=>{if(Zt(t,e))return e;let n=t(e);return Rt.set(n,t),n}}var Fe=!!ShadowRoot.prototype.createElement,Vt=t=>{var e;return e=class extends t{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(r){this.__shadowRootOptions=r}constructor(...r){super(...r),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(r){let i=this.constructor;i.__registry=r}createRenderRoot(){let r=this.constructor,{scopedElements:i,shadowRootOptions:o}=r;if(!this.registry||this.registry===r.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=Fe?new CustomElementRegistry:customElements;for(let[u,l]of Object.entries(i))this.defineScopedElement(u,l)}let c={mode:"open",...o,customElements:this.registry},s=this.attachShadow(c);return Fe&&(this.renderOptions.creationScope=s),s instanceof ShadowRoot&&this.adoptStyles(s),s}createScopedElement(r){return(Fe?this.shadowRoot:document).createElement(r)}adoptStyles(r){}defineScopedElement(r,i){let o=this.registry.get(r);return o&&Fe===!1&&o!==i&&console.error([`You are trying to re-register the "${r}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),o?this.registry.get(r):this.registry.define(r,i)}},L(e,"__registry",window.customElements),e},Yt=se(Vt);var Jt=t=>class extends t{static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(n){this.__shadowRootOptions=n}get shadowRootOptions(){return this.constructor.shadowRootOptions}createRenderRoot(){return this.shadowRoot??this.attachShadow(this.shadowRootOptions||{mode:"open"})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.renderRoot==null&&(this.renderRoot=this.createRenderRoot())}},Kt=se(Jt);var le=class extends Ee(B){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,n])=>{n.define(e)})}};L(le,"dependencies",{});function Tt(...t){let e=[],n=document.createElement("div");for(let r of t){if(r instanceof HTMLTemplateElement){let i=r.content.cloneNode(!0);n.append(i),e.push(n.innerHTML),n.innerHTML="";continue}if(r instanceof HTMLScriptElement){e.push(r.textContent);continue}if(r instanceof HTMLTextAreaElement){e.push(r.value);continue}e.push(r.innerHTML)}return e.join(`
`)}function jt(t,...e){let n=[],r=typeof t=="string"?[t]:t.slice();r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");for(let o=0;o<r.length;o++){let a;(a=r[o].match(/\n[\t ]+/g))&&n.push(...a)}if(n.length){let o=Math.min(...n.map(c=>c.length-1)),a=new RegExp(`
[	 ]{${o}}`,"g");for(let c=0;c<r.length;c++)r[c]=r[c].replace(a,`
`)}r[0]=r[0].replace(/^\r?\n/,"");let i=r[0];for(let o=0;o<e.length;o++)i+=e[o]+r[o+1];return i}var Mt=T`
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
  background-color: var(--syntax-guide: hsla(230, 8%, 24%, 0.2));
  border-inline-end: var(--syntax-gutter-border);
  font-variant-numeric: tabular-nums;
  text-align: end;
  position: sticky;
  z-index: 1;
  left: 0px;
}
`;var Xt=/\r\n|\r|\n/;function Ot(t={}){let e=t.disableLineNumbers??!1,n=t.lineNumberStart??1;return function(i){let o=[];Bt(i.tokens).forEach((a,c)=>{a.length<=0&&a.push(" "),t.disableLineNumbers!==!0&&o.push(new S("light-gutter-cell",(c+n).toString())),o.push(new S("light-line",a))}),i.tokens=o}}function Qt(t){return Array.isArray(t)?t:[t]}function Pt(t){return t.length===0?"":t.length===1&&typeof t[0]=="string"?t[0]:t}function Bt(t){let e=[],n=[e];for(let r=0;r<t.length;r++){let i=t[r];if(typeof i=="string"){let o=i.split(Xt);for(let a=0;a<o.length;a++){a>0&&n.push(e=[]);let c=o[a];c&&e.push(c)}}else{let o=Bt(Qt(i.content));if(o.length>1)for(let a=0;a<o.length;a++){a>0&&n.push(e=[]);let c=o[a];if(c.length){let s=new S(i.type,Pt(c),i.alias);s.length=c.reduce((u,l)=>u+l.length,0),e.push(s)}}else e.push(i)}}return n}var Q=class{constructor(){let e=()=>{this.errors=[],this.ranges=[],this.numbers=new Set};this.reset=e,this.reset()}includes(e){if(this.numbers.has(e))return!0;if(this.ranges.length==0)return!1;for(let n of this.ranges){let[r,i]=n;if(e>=r&&e<=i)return!0}return!1}parse(e){return this.reset(),e.includes("{")?e.includes("}")?(e=e.split(/{/)[1],e?(e=e.split(/}/)[0],e.split(/,\s*/).forEach(n=>{let[r,i]=n.split(/-/),o=Number(r),a=Number(i);if(!(o==null||isNaN(o))){if(a==null||isNaN(a)){this.numbers.add(o);return}this.ranges.push([o,a])}}),this):(this.errors.push(new Error("Invalid string provided for range.")),this)):(this.errors.push(new Error("Unable to parse range. No `}` found.")),this):(this.errors.push(new Error("Unable to parse range. No `{` found.")),this)}};function Ht(t){let{highlightLinesRange:e,insertedLinesRange:n,deletedLinesRange:r}=t;return function(i){let o=1;for(let a of i.tokens)typeof a!="string"&&(e.includes(o)&&(a.type+=" line-highlight"),n.includes(o)&&(a.type+=" inserted"),r.includes(o)&&(a.type+=" deleted"),a.type.includes("light-line")&&o++)}}function Dt(){return function(t){let e=["inserted","line-highlight","deleted"];t.type.includes("light-line")&&(t.attributes.part="line",e.forEach(n=>{t.type.includes(n)&&(n==="line-highlight"&&(n="highlight"),t.attributes.part+=" line-"+n)})),t.type.includes("light-gutter-cell")&&(t.attributes.part="gutter-cell",e.forEach(n=>{t.type.includes("gutter-cell-"+n)&&(n==="line-highlight"&&(n="highlight"),t.attributes.part+=" gutter-cell-"+n)}))}}var P=class extends le{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=Ct(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.highlighter=qe(),this.__resizeObserver=new ResizeObserver(()=>this.__setGutterWidth())}connectedCallback(){super.connectedCallback(),this.__resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.unobserve(this)}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let n=e.target;if(n==null)return;let r=n.getAttribute("name");if(["preview-code","code"].includes(r||"")===!1)return;let i=n.assignedElements({flatten:!0}),o=this.unescapeTags(Tt(...i));if(this.preserveWhitespace||(o=jt(o.trim())),r==="code"){this.code=o;return}}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){let n=[Ot({lineNumberStart:this.lineNumberStart,disableLineNumbers:this.disableLineNumbers}),Ht({insertedLinesRange:new Q().parse(this.insertedLines),deletedLinesRange:new Q().parse(this.deletedLines),highlightLinesRange:new Q().parse(this.highlightLines)})];return this.highlighter.hooks.add("wrap",Dt()),e=Et(e,this.highlighter.languages[this.language],this.language,this.highlighter,{afterTokenize:n}),e}__setGutterWidth(){let e=this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth;e&&this.style.setProperty("--gutter-cell-width",`${e}px`)}render(){let e=this.language,n=K`
      <div part="base">
        ${Ze(!this.disableHighlight,()=>K`
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
              >${Ve(this.highlight(this.code))}</code></pre>`,()=>K`${Ve(this.code)}`)}

        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${Ze(this.disableLineNumbers,()=>K``,()=>K`<div part="gutter"></div>`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return setTimeout(async()=>{await this.updateComplete,setTimeout(()=>this.__setGutterWidth())}),n}};L(P,"baseName","light-code"),L(P,"styles",[vt,Mt,mt,T`
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
        width: calc(var(--gutter-cell-width, 40px));
        border-inline-end: var(--syntax-gutter-border);
        height: 100%;
        max-height: 100%;
        overflow: hidden;
        pointer-events: none;
      }
    `]),L(P,"properties",{summary:{},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserveWhitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{},highlighter:{attribute:!1,state:!0}});export{T as a,K as b,A as c,an as d,B as e,vt as f,kn as g,mt as h,qe as i,Ze as j,Ft as k,Lt as l,Se as m,Ct as n,le as o,Tt as p,jt as q,P as r};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-NVCE7N6Z.js.map
