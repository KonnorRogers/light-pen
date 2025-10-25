import{g as a}from"/light-pen/bridgetown/static/chunks/chunk-2QGFBSSF.js";var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},h=e=>(...s)=>({_$litDirective$:e,values:s}),i=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,r,t){this._$Ct=s,this._$AM=r,this._$Ci=t}_$AS(s,r){return this.update(s,r)}update(s,r){return this.render(...r)}};var u=h(class extends i{constructor(e){if(super(e),e.type!==o.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(s=>e[s]).join(" ")+" "}update(e,[s]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in s)s[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(s)}let r=e.element.classList;for(let t of this.st)t in s||(r.remove(t),this.st.delete(t));for(let t in s){let n=!!s[t];n===this.st.has(t)||this.nt?.has(t)||(n?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return a}});export{o as a,h as b,i as c,u as d};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-6DNDP63A.js.map
