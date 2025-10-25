import{a as $,b as d,c as A}from"/light-pen/bridgetown/static/chunks/chunk-6DNDP63A.js";import{b as _}from"/light-pen/bridgetown/static/chunks/chunk-EVFNSLUJ.js";import{h as c}from"/light-pen/bridgetown/static/chunks/chunk-2QGFBSSF.js";var o=(t,e)=>{let s=t._$AN;if(s===void 0)return!1;for(let i of s)i._$AO?.(e,!1),o(i,e);return!0},n=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},v=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),m(e)}};function p(t){this._$AN!==void 0?(n(this),this._$AM=t,v(this)):this._$AM=t}function u(t,e=!1,s=0){let i=this._$AH,f=this._$AN;if(f!==void 0&&f.size!==0)if(e)if(Array.isArray(i))for(let h=s;h<i.length;h++)o(i[h],!1),n(i[h]);else i!=null&&(o(i,!1),n(i));else o(this,t)}var m=t=>{t.type==$.CHILD&&(t._$AP??(t._$AP=u),t._$AQ??(t._$AQ=p))},r=class extends A{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),v(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(o(this,e),n(this))}setValue(e){if(_(this._$Ct))this._$Ct._$AI(e,this);else{let s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};var T=()=>new l,l=class{},a=new WeakMap,w=d(class extends r{render(t){return c}update(t,[e]){let s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),c}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,s=a.get(e);s===void 0&&(s=new WeakMap,a.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?a.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{T as a,w as b};
/*! Bundled license information:

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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-BL32LNTU.js.map
