import{e as h}from"/light-pen/pull/4/bridgetown/static/chunks/chunk-3FTJNOZ6.js";var d={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c=i=>(...t)=>({_$litDirective$:i,values:t}),n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,r){this._$Ct=t,this._$AM=s,this._$Ci=r}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};var p=c(class extends n{constructor(i){var t;if(super(i),i.type!==d.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var s,r;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(let e in t)t[e]&&!(!((s=this.nt)===null||s===void 0)&&s.has(e))&&this.it.add(e);return this.render(t)}let o=i.element.classList;this.it.forEach(e=>{e in t||(o.remove(e),this.it.delete(e))});for(let e in t){let a=!!t[e];a===this.it.has(e)||!((r=this.nt)===null||r===void 0)&&r.has(e)||(a?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return h}});export{d as a,c as b,n as c,p as d};
/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/pull/4/bridgetown/static/chunks/chunk-LEWUMBVW.js.map
