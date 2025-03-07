import {
  __decorateClass,
  __spreadValues,
  f,
  i,
  s,
  u
} from "/light-pen/bridgetown/static/chunks/chunk-FJJKEZSU.js";

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var component_styles_default = i`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/property.js
var o = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r = (t = o, e3, r3) => {
  const { kind: n2, metadata: i2 } = r3;
  let s2 = globalThis.litPropertyMetadata.get(i2);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i2, s2 = /* @__PURE__ */ new Map()), s2.set(r3.name, t), "accessor" === n2) {
    const { name: o2 } = r3;
    return { set(r4) {
      const n3 = e3.get.call(this);
      e3.set.call(this, r4), this.requestUpdate(o2, n3, t);
    }, init(e4) {
      return void 0 !== e4 && this.P(o2, void 0, t), e4;
    } };
  }
  if ("setter" === n2) {
    const { name: o2 } = r3;
    return function(r4) {
      const n3 = this[o2];
      e3.call(this, r4), this.requestUpdate(o2, n3, t);
    };
  }
  throw Error("Unsupported decorator location: " + n2);
};
function n(t) {
  return (e3, o2) => "object" == typeof o2 ? r(t, e3, o2) : ((t2, e4, o3) => {
    const r3 = e4.hasOwnProperty(o3);
    return e4.constructor.createProperty(o3, r3 ? { ...t2, wrapped: true } : t2), r3 ? Object.getOwnPropertyDescriptor(e4, o3) : void 0;
  })(t, e3, o2);
}

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/state.js
function r2(r3) {
  return n({ ...r3, state: true, attribute: false });
}

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/base.js
var e = (e3, t, c) => (c.configurable = true, c.enumerable = true, Reflect.decorate && "object" != typeof t && Object.defineProperty(e3, t, c), c);

// node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query.js
function e2(e3, r3) {
  return (n2, s2, i2) => {
    const o2 = (t) => t.renderRoot?.querySelector(e3) ?? null;
    if (r3) {
      const { get: e4, set: r4 } = "object" == typeof s2 ? n2 : i2 ?? (() => {
        const t = Symbol();
        return { get() {
          return this[t];
        }, set(e5) {
          this[t] = e5;
        } };
      })();
      return e(n2, s2, { get() {
        let t = e4.call(this);
        return void 0 === t && (t = o2(this), (null !== t || this.hasUpdated) && r4.call(this, t)), t;
      } });
    }
    return e(n2, s2, { get() {
      return o2(this);
    } });
  };
}

// node_modules/.pnpm/@shoelace-style+shoelace@2.15.1_@types+react@18.3.3/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUZSOS6C.js
var ShoelaceElement = class extends s {
  constructor() {
    super();
    Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
      this.constructor.define(name, component);
    });
  }
  emit(name, options) {
    const event = new CustomEvent(name, __spreadValues({
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {}
    }, options));
    this.dispatchEvent(event);
    return event;
  }
  /* eslint-enable */
  static define(name, elementConstructor = this, options = {}) {
    const currentlyRegisteredConstructor = customElements.get(name);
    if (!currentlyRegisteredConstructor) {
      customElements.define(name, class extends elementConstructor {
      }, options);
      return;
    }
    let newVersion = " (unknown version)";
    let existingVersion = newVersion;
    if ("version" in elementConstructor && elementConstructor.version) {
      newVersion = " v" + elementConstructor.version;
    }
    if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
      existingVersion = " v" + currentlyRegisteredConstructor.version;
    }
    if (newVersion && existingVersion && newVersion === existingVersion) {
      return;
    }
    console.warn(
      `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
    );
  }
};
ShoelaceElement.version = "2.15.1";
ShoelaceElement.dependencies = {};
__decorateClass([
  n()
], ShoelaceElement.prototype, "dir", 2);
__decorateClass([
  n()
], ShoelaceElement.prototype, "lang", 2);

export {
  component_styles_default,
  n,
  r2 as r,
  e2 as e,
  ShoelaceElement
};
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-FMMGJ35Y.js.map
