import{k as a}from"/light-pen/pull/24/bridgetown/static/chunks/chunk-Y4MN5SGJ.js";var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},h=s=>(...e)=>({_$litDirective$:s,values:e}),i=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,t){this.t=e,this._$AM=r,this.i=t}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var u=h(class extends i{constructor(s){if(super(s),s.type!==o.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}let r=s.element.classList;for(let t of this.st)t in e||(r.remove(t),this.st.delete(t));for(let t in e){let n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return a}});export{o as a,h as b,i as c,u as d};
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
//# sourceMappingURL=/light-pen/pull/24/bridgetown/static/chunks/chunk-RIJZLAD3.js.map
