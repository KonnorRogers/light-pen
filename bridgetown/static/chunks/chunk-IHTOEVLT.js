import{d as L}from"/light-pen/bridgetown/static/chunks/chunk-F7GCPXDI.js";var he=globalThis,de=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),qe=new WeakMap,ee=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(de&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=qe.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&qe.set(n,e))}return e}toString(){return this.cssText}},We=t=>new ee(typeof t=="string"?t:t+"",void 0,Te),T=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new ee(n,t,Te)},Me=(t,e)=>{if(de)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),i=he.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},pe=de?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return We(n)})(t):t;var{is:Tt,defineProperty:Mt,getOwnPropertyDescriptor:jt,getOwnPropertyNames:Ot,getOwnPropertySymbols:Bt,getPrototypeOf:zt}=Object,z=globalThis,Ze=z.trustedTypes,Ht=Ze?Ze.emptyScript:"",Dt=z.reactiveElementPolyfillSupport,te=(t,e)=>t,je={toAttribute(t,e){switch(e){case Boolean:t=t?Ht:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ye=(t,e)=>!Tt(t,e),Ve={attribute:!0,type:String,converter:je,reflect:!1,hasChanged:Ye};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),z.litPropertyMetadata??(z.litPropertyMetadata=new WeakMap);var M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Ve){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Mt(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){let{get:i,set:s}=jt(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i?.call(this)},set(o){let c=i?.call(this);s.call(this,o),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ve}static _$Ei(){if(this.hasOwnProperty(te("elementProperties")))return;let e=zt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(te("properties"))){let n=this.properties,r=[...Ot(n),...Bt(n)];for(let i of r)this.createProperty(i,n[i])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)n.unshift(pe(i))}else e!==void 0&&n.push(pe(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:je).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:je;this._$Em=i,this[i]=o.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Ye)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[te("elementProperties")]=new Map,M[te("finalized")]=new Map,Dt?.({ReactiveElement:M}),(z.reactiveElementVersions??(z.reactiveElementVersions=[])).push("2.0.4");var re=globalThis,ge=re.trustedTypes,Je=ge?ge.createPolicy("lit-html",{createHTML:t=>t}):void 0,Be="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,ze="?"+j,Nt=`<${ze}>`,W=document,ie=()=>W.createComment(""),se=t=>t===null||typeof t!="object"&&typeof t!="function",tt=Array.isArray,nt=t=>tt(t)||typeof t?.[Symbol.iterator]=="function",Oe=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,Xe=/>/g,G=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qe=/'/g,Pe=/"/g,rt=/^(?:script|style|textarea|title)$/i,it=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),X=it(1),on=it(2),O=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),et=new WeakMap,q=W.createTreeWalker(W,129);function st(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Je!==void 0?Je.createHTML(e):e}var ot=(t,e)=>{let n=t.length-1,r=[],i,s=e===2?"<svg>":"",o=ne;for(let c=0;c<n;c++){let a=t[c],u,l,d=-1,p=0;for(;p<a.length&&(o.lastIndex=p,l=o.exec(a),l!==null);)p=o.lastIndex,o===ne?l[1]==="!--"?o=Ke:l[1]!==void 0?o=Xe:l[2]!==void 0?(rt.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=G):l[3]!==void 0&&(o=G):o===G?l[0]===">"?(o=i??ne,d=-1):l[1]===void 0?d=-2:(d=o.lastIndex-l[2].length,u=l[1],o=l[3]===void 0?G:l[3]==='"'?Pe:Qe):o===Pe||o===Qe?o=G:o===Ke||o===Xe?o=ne:(o=G,i=void 0);let g=o===G&&t[c+1].startsWith("/>")?" ":"";s+=o===ne?a+Nt:d>=0?(r.push(u),a.slice(0,d)+Be+a.slice(d)+j+g):a+j+(d===-2?c:g)}return[st(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]},oe=class t{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0,c=e.length-1,a=this.parts,[u,l]=ot(e,n);if(this.el=t.createElement(u,r),q.currentNode=this.el.content,n===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=q.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(Be)){let p=l[o++],g=i.getAttribute(d).split(j),h=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:h[2],strings:g,ctor:h[1]==="."?me:h[1]==="?"?be:h[1]==="@"?ve:V}),i.removeAttribute(d)}else d.startsWith(j)&&(a.push({type:6,index:s}),i.removeAttribute(d));if(rt.test(i.tagName)){let d=i.textContent.split(j),p=d.length-1;if(p>0){i.textContent=ge?ge.emptyScript:"";for(let g=0;g<p;g++)i.append(d[g],ie()),q.nextNode(),a.push({type:2,index:++s});i.append(d[p],ie())}}}else if(i.nodeType===8)if(i.data===ze)a.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(j,d+1))!==-1;)a.push({type:7,index:s}),d+=j.length-1}s++}}static createElement(e,n){let r=W.createElement("template");return r.innerHTML=e,r}};function Z(t,e,n=t,r){if(e===O)return e;let i=r!==void 0?n._$Co?.[r]:n._$Cl,s=se(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=Z(t,i._$AS(t,e.values),i,r)),e}var fe=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,i=(e?.creationScope??W).importNode(n,!0);q.currentNode=i;let s=q.nextNode(),o=0,c=0,a=r[0];for(;a!==void 0;){if(o===a.index){let u;a.type===2?u=new K(s,s.nextSibling,this,e):a.type===1?u=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(u=new ye(s,this,e)),this._$AV.push(u),a=r[++c]}o!==a?.index&&(s=q.nextNode(),o++)}return q.currentNode=W,i}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},K=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Z(this,e,n),se(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):nt(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&se(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=oe.createElement(st(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{let s=new fe(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(e){let n=et.get(e.strings);return n===void 0&&et.set(e.strings,n=new oe(e)),n}k(e){tt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let s of e)i===n.length?n.push(r=new t(this.S(ie()),this.S(ie()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(e,n=this,r,i){let s=this.strings,o=!1;if(s===void 0)e=Z(this,e,n,0),o=!se(e)||e!==this._$AH&&e!==O,o&&(this._$AH=e);else{let c=e,a,u;for(e=s[0],a=0;a<s.length-1;a++)u=Z(this,c[r+a],n,a),u===O&&(u=this._$AH[a]),o||(o=!se(u)||u!==this._$AH[a]),u===_?e=_:e!==_&&(e+=(u??"")+s[a+1]),this._$AH[a]=u}o&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},me=class extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},be=class extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},ve=class extends V{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){if((e=Z(this,e,n,0)??_)===O)return;let r=this._$AH,i=e===_&&r!==_||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==_&&(r===_||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ye=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}},an={P:Be,A:j,C:ze,M:1,L:ot,R:fe,D:nt,V:Z,I:K,H:V,N:be,U:ve,B:me,F:ye},Ut=re.litHtmlPolyfillSupport;Ut?.(oe,K),(re.litHtmlVersions??(re.litHtmlVersions=[])).push("3.1.4");var at=(t,e,n)=>{let r=n?.renderBefore??e,i=r._$litPart$;if(i===void 0){let s=n?.renderBefore??null;r._$litPart$=i=new K(e.insertBefore(ie(),s),s,void 0,n??{})}return i._$AI(t),i};var H=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;let e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=at(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};H._$litElement$=!0,H.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:H});var It=globalThis.litElementPolyfillSupport;It?.({LitElement:H});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");var lt=T`
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
`;var ut=T`
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

`;var He=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},ae=He;var xe=class{constructor(e={}){let n={},{disableWorkerMessageHandler:r,manual:i}=e;this.manual=i,this.manual==null&&(this.manual=!0),this.plugins={};let s=this;this.disableWorkerMessageHandler=!!r,this.Token=S,this.util=new De(this);let o=this.util;if(this.languages={plain:n,plaintext:n,text:n,txt:n,extend:(l,d)=>{let p=this.util.clone(this.languages[l]);for(var g in d)p[g]=d[g];return p},insertBefore:(l,d,p,g)=>{g||(g=this.languages);let h=g[l],b={};for(let v in h)if(h.hasOwnProperty(v)){if(v==d)for(var m in p)p.hasOwnProperty(m)&&(b[m]=p[m]);p.hasOwnProperty(v)||(b[v]=h[v])}var f=g[l];return g[l]=b,this.languages.DFS(this.languages,function(v,y){y===f&&v!=l&&(this[v]=b)}),b},DFS(l,d,p,g){g=g||{};var h=o.objId;for(var b in l)if(l.hasOwnProperty(b)){d.call(l,b,l[b],p||b);var m=l[b],f=o.type(m);f==="Object"&&!g[h(m)]?(g[h(m)]=!0,this.DFS(m,d,null,g)):f==="Array"&&!g[h(m)]&&(g[h(m)]=!0,this.DFS(m,d,b,g))}}},this.hooks={all:{},add:function(l,d){var p=s.hooks.all;p[l]=p[l]||[],p[l].push(d)},run:function(l,d){var p=s.hooks.all[l];if(!(!p||!p.length))for(var g=0,h;h=p[g++];)h(d)}},!ae.document)return ae.addEventListener&&(s.disableWorkerMessageHandler||ae.addEventListener("message",function(l){var d=JSON.parse(l.data),p=d.language,g=d.code,h=d.immediateClose;ae.postMessage(s.highlight(g,s.languages[p],p)),h&&He.close()},!1)),s;function c(){s.manual||s.highlightAll()}let a=this.util.currentScript();if(a&&(this.filename=a.src,a.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var u=document.readyState;u==="loading"||u==="interactive"&&a&&a.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}}highlightAll(e,n){this.highlightAllUnder(document,e,n)}highlightAllUnder(e,n,r){var i={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),this.hooks.run("before-all-elements-highlight",i);for(var s=0,o;o=i.elements[s++];)this.highlightElement(o,n===!0,i.callback)}highlightElement(e,n,r){var i=this.util.getLanguage(e),s=this.languages[i];this.util.setLanguage(e,i);var o=e.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(o,i);var c=e.textContent,a={element:e,language:i,grammar:s,code:c};let u=d=>{a.highlightedCode=d,this.hooks.run("before-insert",a),a.element.innerHTML=a.highlightedCode,this.hooks.run("after-highlight",a),this.hooks.run("complete",a),r&&r.call(a.element)};if(this.hooks.run("before-sanity-check",a),o=a.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!a.code){this.hooks.run("complete",a),r&&r.call(a.element);return}if(this.hooks.run("before-highlight",a),!a.grammar){u(this.util.encode(a.code));return}if(n&&He.Worker){var l=new Worker(this.filename);l.onmessage=function(d){u(d.data)},l.postMessage(JSON.stringify({language:a.language,code:a.code,immediateClose:!0}))}else u(this.highlight(a.code,a.grammar,a.language))}highlight(e,n,r){var i={code:e,grammar:n,language:r};if(this.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=this.tokenize(i.code,i.grammar),this.hooks.run("after-tokenize",i),S.stringify(this.util.encode(i.tokens),i.language,this)}tokenize(e,n){var r=n?.rest;if(r){for(var i in r)n[i]=r[i];delete n.rest}var s=new qt;return ke(s,s.head,e),dt(e,s,n,s.head,0,this),Zt(s)}},S=class{constructor(e,n,r,i){this.type=e,this.content=n,this.alias=r,this.length=(i||"").length|0}static stringify(e,n,r){let i=this;if(typeof e=="string")return e;if(Array.isArray(e)){var s="";return e.forEach(function(l){s+=i.stringify(l,n,r)}),s}var o={type:e.type,content:i.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(o.classes,c):o.classes.push(c)),r.hooks.run("wrap",o);var a="";for(var u in o.attributes)a+=" "+u+'="'+(o.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+a+">"+o.content+"</"+o.tag+">"}},ct=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,Gt=0,De=class{constructor(e){L(this,"encode",e=>{if(e instanceof S){let n=e.content;return new S(e.type,this.encode(n),e.alias)}else return Array.isArray(e)?e.map(n=>this.encode(n)):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=e}type(e){return Object.prototype.toString.call(e).slice(8,-1)}getLanguage(e){for(;e;){var n=ct.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"}setLanguage(e,n){e.className=e.className.replace(RegExp(ct,"gi"),""),e.classList.add("language-"+n)}objId(e){return e.__id||Object.defineProperty(e,"__id",{value:++Gt}),e.__id}clone(e){return structuredClone(e)}isActive(e,n,r){for(var i="no-"+n;e;){var s=e.classList;if(s.contains(n))return!0;if(s.contains(i))return!1;e=e.parentElement}return!!r}currentScript(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==e)return n[r]}return null}}};function ht(t,e,n,r){t.lastIndex=e;var i=t.exec(n);if(i&&r&&i[1]){var s=i[1].length;i.index+=s,i[0]=i[0].slice(s)}return i}function dt(t,e,n,r,i,s,o){for(var c in n)if(!(!n.hasOwnProperty(c)||!n[c])){var a=n[c];a=Array.isArray(a)?a:[a];for(var u=0;u<a.length;++u){if(o&&o.cause==c+","+u)return;var l=a[u],d=l.inside,p=!!l.lookbehind,g=!!l.greedy,h=l.alias;if(g&&!l.pattern.global){var b=l.pattern.toString().match(/[imsuy]*$/)[0];l.pattern=RegExp(l.pattern.source,b+"g")}for(var m=l.pattern||l,f=r.next,v=i;f!==e.tail&&!(o&&v>=o.reach);v+=f.value.length,f=f.next){var y=f.value;if(e.length>t.length)return;if(!(y instanceof S)){var A=1,k;if(g){if(k=ht(m,v,t,p),!k||k.index>=t.length)break;var E=k.index,F=k.index+k[0].length,x=v;for(x+=f.value.length;E>=x;)f=f.next,x+=f.value.length;if(x-=f.value.length,v=x,f.value instanceof S)continue;for(var w=f;w!==e.tail&&(x<F||typeof w.value=="string");w=w.next)A++,x+=w.value.length;A--,y=t.slice(v,x),k.index-=v}else if(k=ht(m,0,y,p),!k)continue;var E=k.index,$=k[0],D=y.slice(0,E),Y=y.slice(E+$.length),N=v+y.length;o&&N>o.reach&&(o.reach=N);var U=f.prev;D&&(U=ke(e,U,D),v+=D.length),Wt(e,U,A);var Re=new S(c,d?s.tokenize($,d):$,h,$);if(f=ke(e,U,Re),Y&&ke(e,f,Y),A>1){var J={cause:c+","+u,reach:N};dt(t,e,n,f.prev,v,s,J),o&&J.reach>o.reach&&(o.reach=J.reach)}}}}}}function qt(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function ke(t,e,n){var r=e.next,i={value:n,prev:e,next:r};return e.next=i,r.prev=i,t.length++,i}function Wt(t,e,n){for(var r=e.next,i=0;i<n&&r!==t.tail;i++)r=r.next;e.next=r,r.prev=e,t.length-=i}function Zt(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}function R(t,e){typeof t>"u"||e?.force!==!0&&t.languages.markup||(t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,i){var s={};s["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};o["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var c={};c[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml)}function Q(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.css)){R(t);var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}}function we(t,e){typeof t>"u"||e?.force!==!0&&t.languages.clike||(t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function C(t,e){typeof t>"u"||e?.force!==!0&&t.languages.javascript||(we(t),R(t),t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript)}function pt(t){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",n=function(g,h){return"\u2716 Error "+g+" while fetching file: "+h},r="\u2716 Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",o="loading",c="loaded",a="failed",u="pre[data-src]:not(["+s+'="'+c+'"]):not(['+s+'="'+o+'"])';function l(g,h,b){var m=new XMLHttpRequest;m.open("GET",g,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?h(m.responseText):m.status>=400?b(n(m.status,m.statusText)):b(r))},m.send(null)}function d(g){var h=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(g||"");if(h){var b=Number(h[1]),m=h[2],f=h[3];return m?f?[b,Number(f)]:[b,void 0]:[b,b]}}t.hooks.add("before-highlightall",function(g){g.selector+=", "+u}),t.hooks.add("before-sanity-check",function(g){var h=g.element;if(h.matches(u)){g.code="",h.setAttribute(s,o);var b=h.appendChild(document.createElement("CODE"));b.textContent=e;var m=h.getAttribute("data-src"),f=g.language;if(f==="none"){var v=(/\.(\w+)$/.exec(m)||[,"none"])[1];f=i[v]||v}t.util.setLanguage(b,f),t.util.setLanguage(h,f);var y=t.plugins.autoloader;y&&y.loadLanguages(f),l(m,function(A){h.setAttribute(s,c);var k=d(h.getAttribute("data-range"));if(k){var F=A.split(/\r\n?|\n/g),x=k[0],w=k[1]==null?F.length:k[1];x<0&&(x+=F.length),x=Math.max(0,Math.min(x-1,F.length)),w<0&&(w+=F.length),w=Math.max(0,Math.min(w,F.length)),A=F.slice(x,w).join(`
`),h.hasAttribute("data-start")||h.setAttribute("data-start",String(x+1))}b.textContent=A,t.highlightElement(b)},function(A){h.setAttribute(s,a),b.textContent=A})}}),t.plugins.fileHighlight={highlight:function(h){for(var b=(h||document).querySelectorAll(u),m=0,f;f=b[m++];)t.highlightElement(f)}};var p=!1;t.fileHighlight=function(){p||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),p=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}var _e=class extends xe{constructor(...e){super(...e),R(this),Q(this),we(this),C(this),pt(this)}};function gt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["markup-templating"])return;R(t);function n(r,i){return"___"+r.toUpperCase()+i+"___"}Object.defineProperties(t.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,i,s,o){if(r.language===i){var c=r.tokenStack=[];r.code=r.code.replace(s,function(a){if(typeof o=="function"&&!o(a))return a;for(var u=c.length,l;r.code.indexOf(l=n(i,u))!==-1;)++u;return c[u]=a,l}),r.grammar=t.languages.markup}}},tokenizePlaceholders:{value:function(r,i){if(r.language!==i||!r.tokenStack)return;r.grammar=t.languages[i];var s=0,o=Object.keys(r.tokenStack);function c(a){for(var u=0;u<a.length&&!(s>=o.length);u++){var l=a[u];if(typeof l=="string"||l.content&&typeof l.content=="string"){var d=o[s],p=r.tokenStack[d],g=typeof l=="string"?l:l.content,h=n(i,d),b=g.indexOf(h);if(b>-1){++s;var m=g.substring(0,b),f=new t.Token(i,t.tokenize(p,r.grammar),"language-"+i,p),v=g.substring(b+h.length),y=[];m&&y.push.apply(y,c([m])),y.push(f),v&&y.push.apply(y,c([v])),typeof l=="string"?a.splice.apply(a,[u,1].concat(y)):l.content=y}}else l.content&&c(l.content)}return a}c(r.tokens)}}})}function ft(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages["css-extras"])){t.languages["css-extras"]={},Q(t);var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=r,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var i={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},s={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:i,number:s,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:i,number:s})}}function mt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-extras"])return;t.languages["js-extras"]={},C(t),t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(a,u){return RegExp(a.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),u)}t.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],i=0;i<r.length;i++){var s=r[i],o=t.languages.javascript[s];t.util.type(o)==="RegExp"&&(o=t.languages.javascript[s]={pattern:o});var c=o.inside||{};o.inside=c,c["maybe-class-name"]=/^[A-Z][\s\S]*/}}function bt(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages["js-templates"])return;t.languages["js-templates"]={},C(t);var n=t.languages.javascript["template-string"],r=n.pattern.source,i=n.inside.interpolation,s=i.inside["interpolation-punctuation"],o=i.pattern.source;function c(h,b){if(t.languages[h])return{pattern:RegExp("((?:"+b+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:h}}}}t.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),n].filter(Boolean);function a(h,b){return"___"+b.toUpperCase()+"_"+h+"___"}function u(h,b,m){var f={code:h,grammar:b,language:m};return t.hooks.run("before-tokenize",f),f.tokens=t.tokenize(f.code,f.grammar),t.hooks.run("after-tokenize",f),f.tokens}function l(h){var b={};b["interpolation-punctuation"]=s;var m=t.tokenize(h,b);if(m.length===3){var f=[1,1];f.push.apply(f,u(m[1],t.languages.javascript,"javascript")),m.splice.apply(m,f)}return new t.Token("interpolation",m,i.alias,h)}function d(h,b,m){var f=t.tokenize(h,{interpolation:{pattern:RegExp(o),lookbehind:!0}}),v=0,y={},A=f.map(function(w){if(typeof w=="string")return w;for(var E=w.content,$;h.indexOf($=a(v++,m))!==-1;);return y[$]=E,$}).join(""),k=u(A,b,m),F=Object.keys(y);v=0;function x(w){for(var E=0;E<w.length;E++){if(v>=F.length)return;var $=w[E];if(typeof $=="string"||typeof $.content=="string"){var D=F[v],Y=typeof $=="string"?$:$.content,N=Y.indexOf(D);if(N!==-1){++v;var U=Y.substring(0,N),Re=l(y[D]),J=Y.substring(N+D.length),I=[];if(U&&I.push(U),I.push(Re),J){var Ge=[J];x(Ge),I.push.apply(I,Ge)}typeof $=="string"?(w.splice.apply(w,[E,1].concat(I)),E+=I.length-1):$.content=I}}else{var Ce=$.content;Array.isArray(Ce)?x(Ce):x([Ce])}}}return x(k),new t.Token(m,k,"language-"+m,h)}var p={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};t.hooks.add("after-tokenize",function(h){if(!(h.language in p))return;function b(m){for(var f=0,v=m.length;f<v;f++){var y=m[f];if(typeof y!="string"){var A=y.content;if(!Array.isArray(A)){typeof A!="string"&&b([A]);continue}if(y.type==="template-string"){var k=A[1];if(A.length===3&&typeof k!="string"&&k.type==="embedded-code"){var F=g(k),x=k.alias,w=Array.isArray(x)?x[0]:x,E=t.languages[w];if(!E)continue;A[1]=d(F,E,w)}}else b(A)}}}b(h.tokens)});function g(h){return typeof h=="string"?h:Array.isArray(h)?h.map(g).join(""):g(h.content)}}function Ae(t,e){if(typeof t>"u"||e?.force!==!0&&t.languages.jsx)return;t.languages.markup||R(t),t.languages.javascript||C(t);var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(u,l){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return s}),RegExp(u,l)}s=o(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var c=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(c).join(""):""},a=function(u){for(var l=[],d=0;d<u.length;d++){var p=u[d],g=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?l.length>0&&l[l.length-1].tagName===c(p.content[0].content[1])&&l.pop():p.content[p.content.length-1].content==="/>"||l.push({tagName:c(p.content[0].content[1]),openedBraces:0}):l.length>0&&p.type==="punctuation"&&p.content==="{"?l[l.length-1].openedBraces++:l.length>0&&l[l.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?l[l.length-1].openedBraces--:g=!0),(g||typeof p=="string")&&l.length>0&&l[l.length-1].openedBraces===0){var h=c(p);d<u.length-1&&(typeof u[d+1]=="string"||u[d+1].type==="plain-text")&&(h+=c(u[d+1]),u.splice(d+1,1)),d>0&&(typeof u[d-1]=="string"||u[d-1].type==="plain-text")&&(h=c(u[d-1])+h,u.splice(d-1,1),d--),u[d]=new t.Token("plain-text",h,null,h)}p.content&&typeof p.content!="string"&&a(p.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||a(u.tokens)})}function $e(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.typescript)){t.languages.javascript||C(t),t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var n=t.languages.extend("typescript",{});delete n["class-name"],t.languages.typescript["class-name"].inside=n,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),t.languages.ts=t.languages.typescript}}function vt(t,e){if(!(typeof t>"u")&&!(e?.force!==!0&&t.languages.tsx)){t.languages.jsx||Ae(t),t.languages.typescript||$e(t);var n=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",n),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"];var r=t.languages.tsx.tag;r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}}function Se(){let t=new _e;return R(t),gt(t),Q(t),ft(t),C(t),mt(t),bt(t),Ae(t),$e(t),vt(t),t}var Ne=class{static get instance(){return this.__singleton__||(this.__singleton__=Se()),this.__singleton__}};function yt(t,e,n,r,i={}){r||(r=Ne.instance),e||(e=r.languages.markup);var s={code:t,grammar:e,language:n,tokens:[]};if(r.hooks.run("before-tokenize",s),i.beforeTokenize?.forEach(o=>{o(s)}),!s.grammar)throw new Error('The language "'+s.language+'" has no grammar.');return s.tokens=r.tokenize(s.code,s.grammar),r.hooks.run("after-tokenize",s),i.afterTokenize?.forEach(o=>{o(s)}),S.stringify(r.util.encode(s.tokens),s.language,r)}function Ue(t,e,n){return t?e(t):n?.(t)}var kt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xt=t=>(...e)=>({_$litDirective$:t,values:e}),Ee=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var le=class extends Ee{constructor(e){if(super(e),this.it=_,e.type!==kt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_||e==null)return this._t=void 0,this.it=e;if(e===O)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};le.directiveName="unsafeHTML",le.resultType=1;var wt=xt(le);function _t(t,e=0){let n=null;return(...r)=>{n&&window.clearTimeout(n),n=window.setTimeout(()=>{t.apply(null,r)},e)}}function Fe(t){var e;return e=class extends t{static define(r,i,s){r||(r=this.baseName),i||(i=this);let o=window.customElements;this.__registry instanceof CustomElementRegistry&&(o=this.__registry);let c=!!o.get(r);c&&this.warnOnExistingElement&&console.warn(`${r} has already been registered.`),!c&&i&&o.define(r,class extends i{},s)}},L(e,"baseName",""),L(e,"warnOnExistingElement",!1),e}var Ie=class extends Fe(HTMLElement){};var At=new WeakMap;function Vt(t,e){let n=e;for(;n;){if(At.get(n)===t)return!0;n=Object.getPrototypeOf(n)}return!1}function ue(t){return e=>{if(Vt(t,e))return e;let n=t(e);return At.set(n,t),n}}var Le=!!ShadowRoot.prototype.createElement,Yt=t=>{var e;return e=class extends t{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(r){this.__shadowRootOptions=r}constructor(...r){super(...r),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(r){let i=this.constructor;i.__registry=r}createRenderRoot(){let r=this.constructor,{scopedElements:i,shadowRootOptions:s}=r;if(!this.registry||this.registry===r.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=Le?new CustomElementRegistry:customElements;for(let[u,l]of Object.entries(i))this.defineScopedElement(u,l)}let c={mode:"open",...s,customElements:this.registry},a=this.attachShadow(c);return Le&&(this.renderOptions.creationScope=a),a instanceof ShadowRoot&&this.adoptStyles(a),a}createScopedElement(r){return(Le?this.shadowRoot:document).createElement(r)}adoptStyles(r){}defineScopedElement(r,i){let s=this.registry.get(r);return s&&Le===!1&&s!==i&&console.error([`You are trying to re-register the "${r}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),s?this.registry.get(r):this.registry.define(r,i)}},L(e,"__registry",window.customElements),e},Jt=ue(Yt);var Kt=t=>class extends t{static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(n){this.__shadowRootOptions=n}get shadowRootOptions(){return this.constructor.shadowRootOptions}createRenderRoot(){return this.shadowRoot??this.attachShadow(this.shadowRootOptions||{mode:"open"})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.renderRoot==null&&(this.renderRoot=this.createRenderRoot())}},Xt=ue(Kt);var ce=class extends Fe(H){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,n])=>{n.define(e)})}};L(ce,"dependencies",{});function $t(...t){let e=[],n=document.createElement("div");for(let r of t){if(r instanceof HTMLTemplateElement){let i=r.content.cloneNode(!0);n.append(i),e.push(n.innerHTML),n.innerHTML="";continue}if(r instanceof HTMLScriptElement){e.push(r.textContent);continue}if(r instanceof HTMLTextAreaElement){e.push(r.value);continue}e.push(r.innerHTML)}return e.join(`
`)}function St(t,...e){let n=[],r=typeof t=="string"?[t]:t.slice();r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");for(let s=0;s<r.length;s++){let o;(o=r[s].match(/\n[\t ]+/g))&&n.push(...o)}if(n.length){let s=Math.min(...n.map(c=>c.length-1)),o=new RegExp(`
[	 ]{${s}}`,"g");for(let c=0;c<r.length;c++)r[c]=r[c].replace(o,`
`)}r[0]=r[0].replace(/^\r?\n/,"");let i=r[0];for(let s=0;s<e.length;s++)i+=e[s]+r[s+1];return i}var Et=T`
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
}

:host([wrap="hard"]) [part~="code"] {
  grid-template-columns: max-content max-content;
}

:host([wrap="soft"]) [part~="code"] {
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
`;var Qt=/\r\n|\r|\n/;function Ft(t={}){let e=t.disableLineNumbers??!1,n=t.lineNumberStart??1;return function(i){let s=[];Lt(i.tokens).forEach((o,c)=>{o.length<=0&&o.push(" "),t.disableLineNumbers!==!0&&s.push(new S("light-gutter-cell",(c+n).toString())),s.push(new S("light-line",o))}),i.tokens=s}}function Pt(t){return Array.isArray(t)?t:[t]}function en(t){return t.length===0?"":t.length===1&&typeof t[0]=="string"?t[0]:t}function Lt(t){let e=[],n=[e];for(let r=0;r<t.length;r++){let i=t[r];if(typeof i=="string"){let s=i.split(Qt);for(let o=0;o<s.length;o++){o>0&&n.push(e=[]);let c=s[o];c&&e.push(c)}}else{let s=Lt(Pt(i.content));if(s.length>1)for(let o=0;o<s.length;o++){o>0&&n.push(e=[]);let c=s[o];if(c.length){let a=new S(i.type,en(c),i.alias);a.length=c.reduce((u,l)=>u+l.length,0),e.push(a)}}else e.push(i)}}return n}var B=class{constructor(){let e=()=>{this.errors=[],this.ranges=[],this.numbers=new Set};this.reset=e,this.reset()}includes(e){if(this.numbers.has(e))return!0;if(this.ranges.length==0)return!1;for(let n of this.ranges){let[r,i]=n;if(e>=r&&e<=i)return!0}return!1}parse(e){return this.reset(),e.includes("{")?e.includes("}")?(e=e.split(/{/)[1],e?(e=e.split(/}/)[0],e.split(/,\s*/).forEach(n=>{let[r,i]=n.split(/-/),s=Number(r),o=Number(i);if(!(s==null||isNaN(s))){if(o==null||isNaN(o)){this.numbers.add(s);return}this.ranges.push([s,o])}}),this):(this.errors.push(new Error("Invalid string provided for range.")),this)):(this.errors.push(new Error("Unable to parse range. No `}` found.")),this):(this.errors.push(new Error("Unable to parse range. No `{` found.")),this)}};function Rt(t){let{highlightLinesRange:e,insertedLinesRange:n,deletedLinesRange:r}=t;return function(i){let s=1;for(let o of i.tokens)typeof o!="string"&&(e.includes(s)&&(o.type+=" line-highlight"),n.includes(s)&&(o.type+=" inserted"),r.includes(s)&&(o.type+=" deleted"),o.type.includes("light-line")&&s++)}}function Ct(){return function(t){let e=["inserted","line-highlight","deleted"];t.type.includes("light-line")&&(t.attributes.part="line",e.forEach(n=>{t.type.includes(n)&&(n==="line-highlight"&&(n="highlight"),t.attributes.part+=" line-"+n)})),t.type.includes("light-gutter-cell")&&(t.attributes.part="gutter-cell",e.forEach(n=>{t.type.includes("gutter-cell-"+n)&&(n==="line-highlight"&&(n="highlight"),t.attributes.part+=" gutter-cell-"+n)}))}}var P=class extends ce{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=_t(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.highlighter=Se(),this.__resizeObserver=new ResizeObserver(()=>this.__setGutterMeasurements()),this.__highlightedCode__=""}connectedCallback(){super.connectedCallback(),this.__resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.unobserve(this)}willUpdate(e){(e.has("highlighter")||e.has("language")||e.has("code"))&&(this.__highlightedCode__=this.highlight(this.code)),super.willUpdate(e)}updated(e){if((e.has("insertedLines")||e.has("deletedLines")||e.has("highlightLines"))&&!e.has("code")){let n=this.shadowRoot?.querySelectorAll(".light-gutter-cell, .light-line");if(n?.length){let r=new B().parse(this.highlightLines),i=new B().parse(this.insertedLines),s=new B().parse(this.deletedLines);n.forEach((o,c)=>{let u=(c%2===0?c:c-1)/2+1;o.classList.toggle("line-highlight",r.includes(u)),o.part.toggle("line-highlight",r.includes(u)),o.classList.toggle("inserted",i.includes(u)),o.part.toggle("inserted",i.includes(u)),o.classList.toggle("deleted",s.includes(u)),o.part.toggle("deleted",s.includes(u))})}}super.updated(e)}handleMutation(e){if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let n=e.target;if(n==null)return;let r=n.getAttribute("name");if(["preview-code","code"].includes(r||"")===!1)return;let i=n.assignedElements({flatten:!0}),s=this.unescapeTags($t(...i));if(this.preserveWhitespace||(s=St(s.trim())),r==="code"){this.code=s;return}}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(e=this.code){this.highlighter||(this.highlighter=Se());let n=[Ft({lineNumberStart:this.lineNumberStart,disableLineNumbers:this.disableLineNumbers}),Rt({insertedLinesRange:new B().parse(this.insertedLines),deletedLinesRange:new B().parse(this.deletedLines),highlightLinesRange:new B().parse(this.highlightLines)})];return this.highlighter.hooks.add("wrap",Ct()),e=yt(e,this.highlighter.languages[this.language],this.language,this.highlighter,{afterTokenize:n}),e}__setGutterMeasurements(){let e=this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth;e&&this.style.setProperty("--gutter-cell-width",`${e}px`);let n=this.shadowRoot?.querySelector("[part~='code']");if(n){let{offsetHeight:r,clientHeight:i}=n,s=r-i;this.style.setProperty("--scrollbar-height",`${s}px`)}}render(){let e=this.language,n=X`
      <div part="base">
        ${Ue(!this.disableHighlight,()=>X`
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
              ></code></pre>`,()=>X`${wt(this.code)}`)}
        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${Ue(this.disableLineNumbers,()=>X``,()=>X`<div part="gutter"></div>`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return setTimeout(async()=>{await this.updateComplete,setTimeout(()=>this.__setGutterMeasurements())}),n}};L(P,"baseName","light-code"),L(P,"styles",[lt,Et,ut,T`
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
    `]),L(P,"properties",{summary:{},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserveWhitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{},highlighter:{attribute:!1,state:!0},__highlightedCode__:{attribute:!1,state:!0}});export{T as a,X as b,_ as c,an as d,H as e,lt as f,xn as g,ut as h,Se as i,Ue as j,kt as k,xt as l,Ee as m,_t as n,ce as o,$t as p,St as q,P as r};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-IHTOEVLT.js.map
