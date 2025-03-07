import {
  w
} from "/light-pen/bridgetown/static/chunks/chunk-FJJKEZSU.js";

// node_modules/.pnpm/lit-html@3.1.3/node_modules/lit-html/directive.js
var t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e = (t2) => (...e3) => ({ _$litDirective$: t2, values: e3 });
var i = class {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e3, i2) {
    this._$Ct = t2, this._$AM = e3, this._$Ci = i2;
  }
  _$AS(t2, e3) {
    return this.update(t2, e3);
  }
  update(t2, e3) {
    return this.render(...e3);
  }
};

// node_modules/.pnpm/lit-html@3.1.3/node_modules/lit-html/directives/class-map.js
var e2 = e(class extends i {
  constructor(t2) {
    if (super(t2), t2.type !== t.ATTRIBUTE || "class" !== t2.name || t2.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((s) => t2[s]).join(" ") + " ";
  }
  update(s, [i2]) {
    if (void 0 === this.st) {
      this.st = /* @__PURE__ */ new Set(), void 0 !== s.strings && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((t2) => "" !== t2)));
      for (const t2 in i2) i2[t2] && !this.nt?.has(t2) && this.st.add(t2);
      return this.render(i2);
    }
    const r = s.element.classList;
    for (const t2 of this.st) t2 in i2 || (r.remove(t2), this.st.delete(t2));
    for (const t2 in i2) {
      const s2 = !!i2[t2];
      s2 === this.st.has(t2) || this.nt?.has(t2) || (s2 ? (r.add(t2), this.st.add(t2)) : (r.remove(t2), this.st.delete(t2)));
    }
    return w;
  }
});

export {
  t,
  e,
  i,
  e2
};
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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-MC6QCAO3.js.map
