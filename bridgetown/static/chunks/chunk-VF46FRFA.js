import {
  LightCode,
  createPrismInstance,
  dedent,
  e,
  elementsToString,
  i as i2,
  t,
  theme
} from "/light-pen/bridgetown/static/chunks/chunk-FG3X75B5.js";
import {
  BaseElement,
  T,
  baseStyles,
  i,
  s,
  x,
  z
} from "/light-pen/bridgetown/static/chunks/chunk-VXHTUS4U.js";
import {
  __publicField
} from "/light-pen/bridgetown/static/chunks/chunk-SHEXDT7D.js";

// ../node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directive-helpers.js
var { I: t2 } = z;
var f = (o3) => void 0 === o3.strings;

// ../node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/async-directive.js
var s2 = (i3, t3) => {
  const e2 = i3._$AN;
  if (void 0 === e2) return false;
  for (const i4 of e2) i4._$AO?.(t3, false), s2(i4, t3);
  return true;
};
var o = (i3) => {
  let t3, e2;
  do {
    if (void 0 === (t3 = i3._$AM)) break;
    e2 = t3._$AN, e2.delete(i3), i3 = t3;
  } while (0 === e2?.size);
};
var r = (i3) => {
  for (let t3; t3 = i3._$AM; i3 = t3) {
    let e2 = t3._$AN;
    if (void 0 === e2) t3._$AN = e2 = /* @__PURE__ */ new Set();
    else if (e2.has(i3)) break;
    e2.add(i3), c(t3);
  }
};
function h(i3) {
  void 0 !== this._$AN ? (o(this), this._$AM = i3, r(this)) : this._$AM = i3;
}
function n(i3, t3 = false, e2 = 0) {
  const r2 = this._$AH, h2 = this._$AN;
  if (void 0 !== h2 && 0 !== h2.size) if (t3) if (Array.isArray(r2)) for (let i4 = e2; i4 < r2.length; i4++) s2(r2[i4], false), o(r2[i4]);
  else null != r2 && (s2(r2, false), o(r2));
  else s2(this, i3);
}
var c = (i3) => {
  i3.type == t.CHILD && (i3._$AP ?? (i3._$AP = n), i3._$AQ ?? (i3._$AQ = h));
};
var f2 = class extends i2 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i3, t3, e2) {
    super._$AT(i3, t3, e2), r(this), this.isConnected = i3._$AU;
  }
  _$AO(i3, t3 = true) {
    i3 !== this.isConnected && (this.isConnected = i3, i3 ? this.reconnected?.() : this.disconnected?.()), t3 && (s2(this, i3), o(this));
  }
  setValue(t3) {
    if (f(this._$Ct)) this._$Ct._$AI(t3, this);
    else {
      const i3 = [...this._$Ct._$AH];
      i3[this._$Ci] = t3, this._$Ct._$AI(i3, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// ../node_modules/.pnpm/lit-html@3.1.4/node_modules/lit-html/directives/ref.js
var o2 = /* @__PURE__ */ new WeakMap();
var n2 = e(class extends f2 {
  render(i3) {
    return T;
  }
  update(i3, [s3]) {
    const e2 = s3 !== this.Y;
    return e2 && void 0 !== this.Y && this.rt(void 0), (e2 || this.lt !== this.ct) && (this.Y = s3, this.ht = i3.options?.host, this.rt(this.ct = i3.element)), T;
  }
  rt(t3) {
    if (this.isConnected || (t3 = void 0), "function" == typeof this.Y) {
      const i3 = this.ht ?? globalThis;
      let s3 = o2.get(i3);
      void 0 === s3 && (s3 = /* @__PURE__ */ new WeakMap(), o2.set(i3, s3)), void 0 !== s3.get(this.Y) && this.Y.call(this.ht, void 0), s3.set(this.Y, t3), void 0 !== t3 && this.Y.call(this.ht, t3);
    } else this.Y.value = t3;
  }
  get lt() {
    return "function" == typeof this.Y ? o2.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});

// ../node_modules/.pnpm/form-associated-helpers@0.0.10/node_modules/form-associated-helpers/exports/validators/too-long-validator.js
var TooLongValidator = () => {
  const obj = {
    observedAttributes: ["maxlength"],
    /**
     * @param {T} _hostElement
     * @param {number} maxLength
     * @param {number} stringLength
     */
    message(_hostElement, maxLength, stringLength) {
      return `Please shorten this text to ${maxLength} characters or less. (You are currently using ${stringLength} characters).`;
    },
    /**
     * @param {T} element
     */
    checkValidity(element) {
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      };
      let value = element.value ?? "";
      if (typeof value !== "string") {
        return validity;
      }
      const maxLength = Number(element.maxLength ?? element.getAttribute("maxlength"));
      if (isNaN(maxLength) || maxLength == null || maxLength <= 0) {
        return validity;
      }
      if (value.length > maxLength) {
        validity.message = (typeof obj.message === "function" ? obj.message(element, maxLength, value.length) : obj.message) || "";
        validity.isValid = false;
        validity.invalidKeys.push("tooLong");
      }
      return validity;
    }
  };
  return obj;
};

// ../node_modules/.pnpm/form-associated-helpers@0.0.10/node_modules/form-associated-helpers/exports/validators/too-short-validator.js
var TooShortValidator = () => {
  const obj = {
    observedAttributes: ["minlength"],
    /**
     * @param {T} _hostElement
     * @param {number} minLength
     * @param {number} stringLength
     */
    message(_hostElement, minLength, stringLength) {
      return `Please lengthen this text to ${minLength} characters or more. (You are currently using ${stringLength} characters).`;
    },
    /**
     * @param {T} element
     */
    checkValidity(element) {
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      };
      let value = element.value ?? "";
      if (typeof value !== "string") {
        return validity;
      }
      const minLength = Number(element.minLength || element.getAttribute("minlength"));
      if (isNaN(minLength) || minLength == null || minLength <= 0) {
        return validity;
      }
      if (value.length < minLength) {
        validity.message = (typeof obj.message === "function" ? obj.message(element, minLength, value.length) : obj.message) || "";
        validity.isValid = false;
        validity.invalidKeys.push("tooShort");
      }
      return validity;
    }
  };
  return obj;
};

// ../node_modules/.pnpm/form-associated-helpers@0.0.10/node_modules/form-associated-helpers/exports/validators/value-missing-validator.js
var ValueMissingValidator = () => {
  const obj = {
    observedAttributes: ["required"],
    message: Object.assign(document.createElement("input"), {
      required: true
    }).validationMessage,
    checkValidity(element) {
      const validity = {
        message: "",
        isValid: true,
        invalidKeys: []
      };
      const isRequired = element.required ?? element.hasAttribute("required");
      if (!isRequired) {
        return validity;
      }
      if (!element.value) {
        validity.message = (typeof obj.message === "function" ? obj.message(element) : obj.message) || "";
        validity.isValid = false;
        validity.invalidKeys.push("valueMissing");
      }
      return validity;
    }
  };
  return obj;
};

// ../node_modules/.pnpm/form-associated-helpers@0.0.10/node_modules/form-associated-helpers/exports/mixins/custom-states-mixin.js
function CustomStatesMixin(superclass) {
  return class extends superclass {
    /**
     * @param {string} state
     */
    addCustomState(state) {
      try {
        this.internals.states.add(state);
      } catch (_) {
      } finally {
        this.setAttribute(`data-${state}`, "");
      }
    }
    /**
     * @param {string} state
     */
    deleteCustomState(state) {
      try {
        this.internals.states.delete(state);
      } catch (_) {
      } finally {
        this.removeAttribute(`data-${state}`);
      }
    }
    /**
     * @param {string} state
     * @param {boolean} bool
     */
    toggleCustomState(state, bool) {
      if (bool === true) {
        this.addCustomState(state);
        return;
      }
      if (bool === false) {
        this.deleteCustomState(state);
        return;
      }
      this.toggleCustomState(state, !this.hasCustomState(state));
    }
    /**
     * @param {string} state
     * @returns {boolean}
     */
    hasCustomState(state) {
      try {
        return this.internals.states.has(state);
      } catch (_) {
      } finally {
        return this.hasAttribute(`data-${state}`);
      }
    }
  };
}

// ../node_modules/.pnpm/form-associated-helpers@0.0.10/node_modules/form-associated-helpers/exports/mixins/form-associated-mixin.js
function FormAssociatedMixin(superclass) {
  var _a;
  return (
    /**
     */
    _a = class extends superclass {
      /**
      * @param {...any} args
      */
      constructor(...args) {
        super(...args);
        this.internals;
        if (!this.internals) {
          this.internals = this.attachInternals();
        }
      }
    }, __publicField(_a, "formAssociated", superclass.formAssociated ?? true), _a
  );
}

// ../node_modules/.pnpm/form-associated-helpers@0.0.10/node_modules/form-associated-helpers/exports/mixins/vanilla-form-associated-mixin.js
function isDisabled(el) {
  return Boolean(el.matches(":disabled") || el.disabled);
}
function VanillaFormAssociatedMixin(superclass) {
  return class extends CustomStatesMixin(FormAssociatedMixin(superclass)) {
    /**
     * @param {...any} args
     */
    constructor(...args) {
      super(...args);
      /**
       * @param {Event} e
       */
      __publicField(this, "handleInvalid", (e2) => {
        if (e2.target !== this) return;
        if (isDisabled(this)) return;
        if (this.value !== this.defaultValue) {
          this.valueHasChanged = true;
        }
        this.hasInteracted = true;
        this.updateInteractionState();
      });
      /**
       * Sets `this.hasInteracted = true` to true when the users focus / clicks the element.
       * @param {Event} e
       */
      __publicField(this, "handleInteraction", (e2) => {
        if (isDisabled(this)) return;
        if (!this.matches(":focus-within") && this.valueHasChanged) {
          this.hasInteracted = true;
        }
        this.updateValidity();
      });
      this.role = this.getAttribute("role") || null;
      this.value = this.getAttribute("value") || null;
      this.previousValue = this.value;
      this.defaultValue = this.getAttribute("value") || null;
      this.name = this.getAttribute("name") || "";
      this.type = this.getAttribute("type") || this.localName || "";
      this.disabled = isDisabled(this);
      this.required = this.hasAttribute("required");
      this.hasInteracted = this.hasInteracted ?? false;
      this.valueHasChanged = this.valueHasChanged ?? false;
      this.validators = [];
      this.addEventListener("focusout", this.handleInteraction);
      this.addEventListener("blur", this.handleInteraction);
      this.addEventListener("invalid", this.handleInvalid);
      this.__hasCustomError = false;
      this.__customErrorMessage = "";
    }
    /**
     * @override
     */
    static get observedAttributes() {
      const parentAttrs = new Set(
        /** @type {string[]} */
        super.observedAttributes || []
      );
      for (const validator of this.validators) {
        if (!validator.observedAttributes) {
          continue;
        }
        for (const attr of validator.observedAttributes) {
          parentAttrs.add(attr);
        }
      }
      return [...parentAttrs];
    }
    /**
     * Validators are static because they have `observedAttributes`, essentially attributes to "watch"
     * for changes. Whenever these attributes change, we want to be notified and update the validator.
     * @type {Array<import("../types.js").Validator>}
     */
    static get validators() {
      return [
        ValueMissingValidator()
      ];
    }
    get allValidators() {
      const staticValidators = this.constructor.validators || [];
      const validators = this.validators || [];
      return [...staticValidators, ...validators];
    }
    get willShowValidationMessage() {
      return isDisabled(this) && this.hasInteracted === true;
    }
    get labels() {
      return (
        /** @type {NodeListOf<HTMLLabelElement>} */
        this.internals.labels
      );
    }
    get validity() {
      return this.internals.validity;
    }
    get validationMessage() {
      return this.internals.validationMessage;
    }
    get willValidate() {
      return this.internals.willValidate;
    }
    /**
     * This function technically does not exist with internals, but exists on native form elements.
     *   This is backported for users familiar with the API.
     * @param {string} message
     */
    setCustomValidity(message) {
      if (!message) {
        this.__hasCustomError = false;
        this.__customErrorMessage = "";
        this.setValidity({});
        return;
      }
      this.__hasCustomError = true;
      this.__customErrorMessage = message;
      this.internals.setValidity({ customError: true }, message);
    }
    /**
     * @param {string} name
     * @param {string} oldVal
     * @param {string} newVal
     */
    attributeChangedCallback(name, oldVal, newVal) {
      if (typeof super.attributeChangedCallback === "function") {
        super.attributeChangedCallback(name, oldVal, newVal);
      }
      if (newVal === oldVal) {
        return;
      }
      if (name === "role") {
        this.internals.role = newVal || null;
      }
      if (name === "value") {
        this.defaultValue = newVal;
        if (!this.hasInteracted && !this.valueHasChanged) {
          this.value = this.defaultValue;
          this.setFormValue(this.value, this.value);
        }
      }
      if (name === "disabled") {
        this.disabled = Boolean(newVal);
      }
      this.updateValidity();
    }
    /**
    * Called when the form is being reset. (e.g. user pressed `<input[type=reset]>` button). Custom element should clear whatever value set by the user.
    * @returns {void}
    */
    formResetCallback() {
      if ("formControl" in this && this.formControl) {
        this.formControl.value = this.defaultValue;
      }
      this.resetValidity();
      this.value = this.defaultValue;
      this.hasInteracted = false;
      this.valueHasChanged = false;
      this.updateValidity();
      this.setFormValue(this.defaultValue, this.defaultValue);
    }
    /**
    * Called when the disabled state of the form changes
    * @param {boolean} isDisabled
    * @returns {void}
    */
    formDisabledCallback(isDisabled2) {
      this.disabled = isDisabled2;
      this.resetValidity();
      this.updateValidity();
    }
    /**
    * Called when the browser is trying to restore element’s state to state in which case reason is “restore”, or when the browser is trying to fulfill autofill on behalf of user in which case reason is “autocomplete”. In the case of “restore”, state is a string, File, or FormData object previously set as the second argument to setFormValue.
    * @param {string | File | FormData | null} state
    * @param {string} reason
    * @returns {void}
    */
    formStateRestoreCallback(state, reason) {
      this.value = state;
      if (this.formControl) {
        this.formControl.value = state;
      }
      this.resetValidity();
      this.updateValidity();
    }
    // Additional things not added by the `attachInternals()` call.
    /**
     * This should generally not be used by end users. This is intended for custom validators.
     * @param {Parameters<ElementInternals["setValidity"]>} params
     */
    setValidity(...params) {
      let flags = params[0];
      let message = params[1];
      let anchor = params[2];
      if (!anchor) {
        const validationTarget = this.validationTarget;
        anchor = validationTarget;
      }
      this.internals.setValidity(flags, message, anchor);
      this.updateInteractionState();
    }
    reportValidity() {
      this.updateValidity();
      return this.internals.reportValidity();
    }
    checkValidity() {
      this.updateValidity();
      return this.internals.checkValidity();
    }
    /**
      * `validationTarget` is used for displaying native validation popups as the "anchor"
      * @type {undefined | HTMLElement}
      */
    get validationTarget() {
      return this.formControl || void 0;
    }
    /**
      * @param {Parameters<ElementInternals["setFormValue"]>} args
      */
    setFormValue(...args) {
      if (this.value !== this.defaultValue) {
        this.valueHasChanged = true;
      }
      this.internals.setFormValue(...args);
      this.updateValidity();
    }
    /**
     * Returns the form attached to the element
     * @returns {ReturnType<ElementInternals["form"]>}
     */
    get form() {
      return this.internals.form;
    }
    resetValidity() {
      this.setCustomValidity("");
      this.setValidity({});
    }
    updateValidity() {
      if (isDisabled(this)) {
        this.resetValidity();
        return;
      }
      const validators = (
        /** @type {{allValidators?: Array<import("../types.js").Validator>}} */
        /** @type {unknown} */
        this.allValidators
      );
      if (!validators) {
        this.setValidity({});
        return;
      }
      const customError = Boolean(this.__hasCustomError);
      const flags = {
        customError
      };
      const formControl = this.formControl || void 0;
      let finalMessage = "";
      for (const validator of validators) {
        const { isValid, message, invalidKeys } = validator.checkValidity(this);
        if (isValid) {
          continue;
        }
        if (!finalMessage) {
          finalMessage = message;
        }
        if (invalidKeys?.length >= 0) {
          invalidKeys.forEach((str) => flags[str] = true);
        }
      }
      if (!finalMessage) {
        finalMessage = this.validationMessage || this.__customErrorMessage;
      }
      this.setValidity(flags, finalMessage, formControl);
    }
    updateInteractionState() {
      if (isDisabled(this)) {
        this.addCustomState("disabled");
        this.deleteCustomState("invalid");
        this.deleteCustomState("user-invalid");
        this.deleteCustomState("valid");
        this.deleteCustomState("user-valid");
        return;
      }
      this.deleteCustomState("disabled");
      if (this.validity.valid) {
        this.deleteCustomState("invalid");
        this.deleteCustomState("user-invalid");
        this.addCustomState("valid");
        this.toggleCustomState("user-valid", this.hasInteracted && this.valueHasChanged);
      } else {
        this.deleteCustomState("valid");
        this.deleteCustomState("user-valid");
        this.addCustomState("invalid");
        this.toggleCustomState("user-invalid", this.hasInteracted && this.valueHasChanged);
      }
    }
  };
}

// ../node_modules/.pnpm/form-associated-helpers@0.0.10/node_modules/form-associated-helpers/exports/mixins/lit-form-associated-mixin.js
var formProperties = Object.freeze({
  role: { reflect: true },
  name: { reflect: true },
  type: { reflect: true },
  /**
   * Don't reflect "disabled". It breaks the `formDisabledCallback` on formAssociated elements when used with `<fieldset disabled>`.
   *   https://github.com/whatwg/html/issues/8365
   */
  disabled: { type: Boolean },
  required: { reflect: true, type: Boolean },
  defaultValue: { attribute: "value", reflect: true },
  valueHasChanged: { type: Boolean, attribute: false, state: true },
  hasInteracted: { attribute: false, type: Boolean, state: true },
  formControl: { attribute: false, state: true },
  value: { attribute: false, state: true }
});
LitFormAssociatedMixin.formProperties = formProperties;
function LitFormAssociatedMixin(superclass) {
  const finalClass = class extends VanillaFormAssociatedMixin(superclass) {
    /**
      * @param {...any} args
      */
    constructor(...args) {
      super(...args);
      const ctor = (
        /** @type {{properties?: { disabled?: { reflect?: boolean }}}} */
        /** @type {unknown} */
        this.constructor
      );
      if (ctor.properties?.disabled?.reflect === true) {
        console.warn(`The following element has their "disabled" property set to reflect.`);
        console.warn(this);
        console.warn("For further reading: https://github.com/whatwg/html/issues/8365");
      }
    }
    /**
     * @type {import("lit").LitElement["willUpdate"]}
     */
    willUpdate(changedProperties) {
      if (typeof super.willUpdate !== "function") {
        return;
      }
      if (changedProperties.has("formControl")) {
        this.formControl?.addEventListener("focusout", this.handleInteraction);
        this.formControl?.addEventListener("blur", this.handleInteraction);
        this.formControl?.addEventListener("click", this.handleInteraction);
      }
      if (changedProperties.has("formControl") || changedProperties.has("defaultValue") || changedProperties.has("value")) {
        this.setFormValue(this.value, this.value);
      }
      super.willUpdate(changedProperties);
    }
  };
  return (
    /** @type {ReturnType<typeof VanillaFormAssociatedMixin<T>> & typeof finalClass} */
    finalClass
  );
}

// ../node_modules/.pnpm/form-associated-helpers@0.0.10/node_modules/form-associated-helpers/exports/mixins/lit-textarea-mixin.js
LitTextareaMixin.formProperties = Object.freeze(
  Object.assign(
    {
      autocomplete: {},
      wrap: {},
      readOnly: { attribute: "readonly", type: Boolean, reflect: true },
      placeholder: {},
      dirName: {},
      rows: { type: Number },
      cols: { type: Number },
      // Validation
      maxLength: { attribute: "maxlength", type: Number },
      minLength: { attribute: "minlength", type: Number }
    },
    LitFormAssociatedMixin.formProperties
  )
);
function LitTextareaMixin(superclass) {
  const modifiedSuperclass = superclass;
  return (
    /**
      * @implements {HTMLTextAreaElement}
      */
    class extends LitFormAssociatedMixin(modifiedSuperclass) {
      /**
       * @override
       * @type {Array<import("../types.js").Validator>}
       */
      static get validators() {
        return [
          ...super.validators,
          TooLongValidator(),
          TooShortValidator()
        ];
      }
      static get properties() {
        const properties = super.properties;
        if (properties) {
          return { ...LitTextareaMixin.formProperties, ...properties };
        }
        return LitTextareaMixin.formProperties;
      }
      /**
        * @param {...any} args
        */
      constructor(...args) {
        super(...args);
        this.autocomplete = "";
        this.wrap = "";
        this.value = "";
        this.defaultValue = "";
        this.maxLength = -1;
        this.minLength = -1;
        this.readOnly = false;
        this.placeholder = "";
        this.required = false;
        this.dirName = "";
        this.selectionDirection = "forward";
        this.rows = 2;
        this.cols = 20;
      }
      /**
        * @param {Parameters<HTMLTextAreaElement["setSelectionRange"]>} args
        */
      setSelectionRange(...args) {
        const formControl = this.formControl;
        if (formControl && "selectionRange" in formControl) {
          /** @type {unknown} */
          formControl.setSelectionRange(...args);
        }
      }
      /**
        * @param {[replacement: string, start: number, end: number, selectionMode?: SelectionMode] | [replacement: string]} args
        */
      setRangeText(...args) {
        const formControl = this.formControl;
        if (formControl && "setRangeText" in formControl) {
          /** @type {unknown} */
          formControl.setRangeText(...args);
        }
      }
      /**
        * @returns {HTMLTextAreaElement["textLength"]}
        */
      get textLength() {
        const formControl = (
          /** @type {HTMLTextAreaElement} */
          this.formControl
        );
        if (formControl && "textLength" in formControl) {
          return formControl.textLength;
        }
        return 0;
      }
      /**
        * @returns {HTMLTextAreaElement["selectionStart"]}
        */
      get selectionStart() {
        const formControl = (
          /** @type {HTMLTextAreaElement} */
          this.formControl
        );
        if (formControl && "selectionStart" in formControl) {
          return formControl.selectionStart;
        }
        return 0;
      }
      /**
        * @returns {HTMLTextAreaElement["selectionStart"]}
        */
      get selectionEnd() {
        const formControl = (
          /** @type {HTMLTextAreaElement} */
          this.formControl
        );
        if (formControl && "selectionEnd" in formControl) {
          return formControl.selectionEnd;
        }
        return 0;
      }
      /**
        * @type {HTMLTextAreaElement["select"]}
        */
      select() {
        const formControl = this.formControl;
        if (formControl) {
          formControl.select?.();
        }
      }
    }
  );
}

// ../exports/components/light-editor/light-editor.styles.js
var styles = i`
  [part~="base"] {
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 1rem;
    height: 15em;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    resize: both;
    font-size: normal;
    font-family: monospace;
    line-height: 1.5; /* Inherited to child elements */
    tab-size: 2;
    caret-color: black;
    counter-reset: linenumber 0;
    border: 1px solid gray;
  }

  /* Include "pre" if line numbers are disabled */
  :host([disable-line-numbers]) [part~="textarea"],
  [part~="textarea"],
  light-code::part(line) {
    padding-inline-start: 8px;
    padding-inline-end: 8px;
  }

  [part~="textarea"] {
    color: transparent;
    /* color: rgba(255,0,0,0.2); */
    background-color: transparent;
    caret-color: inherit;
    z-index: 1;
    resize: none;
    padding: 0;

    /* Dynamically generated based on the size of the  gutter from "<light-code>" */
    padding-inline-start: calc(var(--gutter-width, 40px) + 8px);
  }

  light-code {
    pointer-events: none;
  }

  light-code::part(pre) {
    border-color: transparent;
    position: relative;
  }

  light-code::part(line)::before {
    content: "";
    line-height: inherit;
    padding-inline-end: 0px;
  }

  [part~="base"]:focus-within {
    border-color: dodgerblue;
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
  }

  light-code::part(line) {
    padding-inline-start: 8px;
  }

  light-code::part(pre),
  [part~="textarea"],
  light-code::part(code) {
    /* I don't love this, but it fixes font size inconsistencies on mobile. The alternative is listen for font-size changes, which is...challenging. */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;

    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;
  }

  [part~="textarea"] {
    /* this creates line-wrapping. */
    word-break: break-word;
    white-space: pre-wrap;
  }

  :host([wrap="hard"]) [part~="textarea"] {
    /* This would remove line-wrapping */
    word-break: break-all;
    white-space: pre;
  }

  [part~="base"]:focus-within light-code::part(line-highlight) {
    background-color: rgba(255, 255, 209, 1);
  }

  [part~="base-editor"] {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    max-height: 100%;
    min-height: 100%;
  }

  light-code,
  [part~="textarea"] {
    grid-area: 1/1/2/2;
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
    overflow: auto;
    border: none;
  }

  [part~="textarea"]::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

// ../internal/base-event.js
var BaseEvent = class extends Event {
  /**
   * @param {string} name
   * @param {EventInit} [options={}]
   */
  constructor(name, options = {}) {
    if (options.bubbles == null) options.bubbles = true;
    if (options.composed == null) options.composed = true;
    super(name, options);
  }
};

// ../exports/events/light-resize-event.js
var LightResizeEvent = class extends BaseEvent {
  /**
   * @param {"light-resize" | Omit<string, "light-resize"> & string} [name="light-resize"]
   * @param {Partial<EventInit & { height: number, width: number }>} [options={}]
   */
  constructor(name = "light-resize", options = {}) {
    super(name, options);
    this.height = options.height;
    this.width = options.width;
  }
};

// ../exports/components/light-editor/light-editor.js
var newLineRegex = /\r\n?|\n/g;
var LightEditor = class extends LitTextareaMixin(BaseElement) {
  constructor() {
    super();
    this.language = "html";
    this.value = "";
    this.defaultValue = "";
    this.textarea = null;
    this.src = null;
    this.wrap = "soft";
    this.preserveWhitespace = false;
    this.disableLineNumbers = false;
    this.highlighter = createPrismInstance();
    this.currentLineNumber = 1;
  }
  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    this.value = this.getAttribute("value") || "";
    this.defaultValue = this.getAttribute("value") || "";
    if (this.value === this.getAttribute("value") && this.preserveWhitespace !== true) {
      this.value = dedent(
        this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g, "")
      ).trim();
    }
  }
  /**
   * @override
   * @param {import("lit").PropertyValues<typeof this>} changedProperties
   */
  willUpdate(changedProperties) {
    if (changedProperties.has("value")) {
      this.dispatchEvent(
        new Event("light-value-change", { bubbles: true, composed: true })
      );
      this.dispatchEvent(
        new Event("change", { bubbles: true, composed: true })
      );
    }
    if (changedProperties.has("src") && this.src) {
      fetch(this.src).then(async (response) => {
        let finalValue = await response.text();
        if (this.preserveWhitespace !== true) {
          finalValue = dedent(
            finalValue.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g, "")
          ).trim();
        }
        return finalValue;
      });
    }
    super.willUpdate(changedProperties);
  }
  /**
   * @override
   */
  click() {
    if (this.textarea) {
      this.textarea.click();
    } else {
      this.click();
    }
  }
  /**
   * @override
   * @param {FocusOptions} [options]
   */
  focus(options) {
    if (this.textarea) {
      this.textarea.focus(options);
    } else {
      this.focus(options);
    }
  }
  /**
   * @internal
   */
  __setGutterWidth() {
    const gutterWidth = (
      /** @type {undefined | null | HTMLElement} */
      this.shadowRoot?.querySelector("light-code")?.shadowRoot?.querySelector("[part~='gutter']")?.offsetWidth
    );
    if (gutterWidth) {
      this.style.setProperty("--gutter-width", `${gutterWidth}px`);
      return;
    }
    this.style.removeProperty("--gutter-width");
  }
  /**
   * @override
   */
  render() {
    const language = this.language;
    this.syncScroll();
    setTimeout(async () => {
      await this.updateComplete;
      this.__setGutterWidth();
    });
    return x`
      <div part="base">
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
          <!-- This bad boy is for measuring cursors -->
          <pre
            part="pre"
            aria-hidden="true"
            style="
              position: fixed;
              top: 0;
              left: 0;
              pointer-events: none;
              visibility: hidden;
            "
          ><code part="code"><span id="before-caret"></span><span id="caret">.</span><span id="after-caret">.</span></code></pre>

          <light-code
            tabindex="-1"
            .language=${this.language}
            .code=${this.value}
            .wrap=${this.wrap}
            .highlighter=${this.highlighter}
            .disableLineNumbers=${this.disableLineNumbers}
            .preserveWhitespace=${this.preserveWhitespace}
            .highlightLines=${`{${this.hasFocused ? this.currentLineNumber : ""}}`}
            @focus=${() => {
      this.textarea?.focus();
    }}
            @touchstart=${(e2) => {
      this.textarea?.focus();
    }}
            @click=${(e2) => {
      this.textarea?.focus();
    }}
          ></light-code>

          <!-- IMPORTANT! There must be no white-space above. -->
          <textarea
            id="textarea-${language}"
            ${n2(this.textareaChanged)}
            data-code-lang=${language}
            part="textarea textarea-${language}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            minlength=${this.minLength}
            maxlength=${this.maxLength}
            translate="no"
            .defaultValue=${this.defaultValue}
            .value=${this.value}
            ?disabled=${this.disabled}
            ?required=${this.required}
            placeholder=${this.placeholder}
            @keyup=${this.keyupHandler}
            @keydown=${this.keydownHandler}
            @focus=${() => {
      this.hasFocused = true;
      this.syncScroll();
      this.setCurrentLineHighlight();
      this.dispatchEvent(
        new Event("light-focus", { bubbles: true, composed: true })
      );
    }}
            @blur=${() => {
      this.setAttribute("data-has-interacted", "");
      this.syncScroll();
      this.setCurrentLineHighlight();
      this.dispatchEvent(
        new Event("light-blur", { bubbles: true, composed: true })
      );
    }}
            @selectionchange=${/** @param {Event} e */
    (e2) => {
      this.syncScroll();
      this.setCurrentLineHighlight();
      this.dispatchEvent(
        new Event("light-selectionchange", {
          bubbles: true,
          composed: true
        })
      );
    }}
            @click=${() => {
      this.setCurrentLineHighlight();
    }}
            @touchstart=${() => {
      this.setCurrentLineHighlight();
    }}
            @touchend=${() => {
      this.setCurrentLineHighlight();
    }}
            @pointerdown=${() => {
      this.setCurrentLineHighlight();
    }}
            @pointerup=${() => {
      this.setCurrentLineHighlight();
    }}
            @input=${/** @param {Event} e */
    (e2) => {
      this.value = /** @type {HTMLTextAreaElement} */
      e2.currentTarget.value;
      this.setCurrentLineHighlight();
      this.dispatchEvent(
        new Event("light-input", { bubbles: true, composed: true })
      );
      this.dispatchEvent(
        new Event("input", { bubbles: true, composed: true })
      );
      this.syncScroll();
    }}
            @change=${/** @param {Event} e */
    (e2) => {
      this.value = /** @type {HTMLTextAreaElement} */
      e2.currentTarget.value;
      this.setCurrentLineHighlight();
      this.syncScroll();
    }}
            @scroll=${/** @param {Event} e */
    (e2) => {
      this.setCurrentLineHighlight();
      this.syncScroll();
    }}
          ></textarea>
        </div>
        <!-- base-editor -->
      </div>
      <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
    `;
  }
  /**
   * @ignore
   * @param {ResizeObserverEntry[]} entries
   */
  handleTextAreaResize(entries) {
    const { target } = entries[0];
    const { left, right, top, bottom } = entries[0].contentRect;
    const width = left + right;
    const height = top + bottom;
    this.dispatchEvent(new LightResizeEvent("light-resize", { height, width }));
    this.syncScroll();
  }
  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  updated(changedProperties) {
    super.updated(changedProperties);
    this.syncScroll();
    setTimeout(() => this.setCurrentLineHighlight());
  }
  /**
   * Syncs the `<light-code>` element scroll position to the same as the `<textarea>`
   * @param {boolean} [syncCaret=false] - Whether or not to sync the caret. This is generally reserved for right / left arrow keys because the gutter is `position: sticky;`.
   * @internal
   */
  syncScroll(syncCaret = false) {
    const textarea = this.textarea;
    if (textarea == null) return;
    const lightCode = this.shadowRoot?.querySelector("light-code");
    const code = lightCode?.shadowRoot?.querySelector("code");
    if (syncCaret) {
      const { top, left } = this.getCaretPosition();
      if (left < 60) {
        textarea.scrollLeft = Math.min(left, textarea.scrollLeft);
      }
    }
    if (lightCode) {
      lightCode.scrollTop = textarea.scrollTop;
    }
    if (code) {
      code.scrollLeft = textarea.scrollLeft;
    }
  }
  /**
   * @ignore
   * @param {Element | undefined} element
   */
  textareaChanged(element) {
    if (!(element instanceof HTMLTextAreaElement)) {
      return;
    }
    const textarea = element;
    this.textarea = textarea;
    this.formControl = textarea;
    this.textareaResizeObserver = new ResizeObserver(
      (entries) => this.handleTextAreaResize(entries)
    );
    this.textareaResizeObserver.observe(textarea);
  }
  /**
   * @ignore
   * @param {Event} e
   */
  handleSlotChangeEvent(e2) {
    const slot = e2.target;
    const templates = slot.assignedElements({ flatten: true });
    let code = this.unescapeTags(elementsToString(...templates));
    if (!this.preserveWhitespace) {
      code = dedent(code.trim());
    }
    if (code) {
      this.value = code;
      this.defaultValue = code;
      setTimeout(() => this.textarea?.setSelectionRange(0, 0));
      this.dispatchEvent(
        new Event("light-input", { bubbles: true, composed: true })
      );
      this.dispatchEvent(
        new Event("light-change", { bubbles: true, composed: true })
      );
    }
  }
  /**
   * @ignore
   * @param {KeyboardEvent} evt
   */
  keyupHandler(evt) {
    this.setCurrentLineHighlight();
    setTimeout(() => this.setCurrentLineHighlight());
  }
  /**
   * @ignore
   * @param {KeyboardEvent} evt
   */
  keydownHandler(evt) {
    this.setCurrentLineHighlight();
    setTimeout(() => this.setCurrentLineHighlight());
    this.syncScroll();
    if (evt.key.startsWith("Arrow") || evt.key === "Backspace") {
      this.syncScroll(true);
    }
  }
  getCaretPosition() {
    const beforeCaret = this.shadowRoot?.getElementById("before-caret");
    const afterCaret = this.shadowRoot?.getElementById("after-caret");
    const caret = this.shadowRoot?.getElementById("caret");
    const textarea = this.textarea;
    const fallback = { top: 0, left: 0 };
    if (!beforeCaret) {
      return fallback;
    }
    if (!afterCaret) {
      return fallback;
    }
    if (!caret) {
      return fallback;
    }
    if (!textarea) {
      return fallback;
    }
    if (textarea.selectionStart !== textarea.selectionEnd) {
      return fallback;
    }
    beforeCaret.textContent = "";
    const textLines = this.getLinesToSelectionStart();
    if (!textLines) {
      return fallback;
    }
    const currentLineNumber = textLines.length - 1;
    const beforeCaretText = textLines[currentLineNumber].substring(
      0,
      textarea.selectionStart
    );
    beforeCaret.textContent = beforeCaretText;
    return {
      top: afterCaret.offsetTop - textarea.scrollTop,
      left: afterCaret.offsetLeft - textarea.scrollLeft
    };
  }
  setCurrentLineHighlight() {
    const currentLineNumber = this.getCurrentLineNumber();
    if (currentLineNumber != null) {
      this.currentLineNumber = currentLineNumber + 1;
    }
  }
  getLinesToSelectionStart() {
    const textArea = this.textarea;
    if (!textArea) return;
    const textLines = textArea.value.substring(0, textArea.selectionStart).split(newLineRegex);
    return textLines;
  }
  getCurrentLineNumber() {
    const textLines = this.getLinesToSelectionStart();
    if (!textLines) {
      return 0;
    }
    const currentLineNumber = textLines.length - 1;
    return currentLineNumber;
  }
  /**
   * @ignore
   * @param {string} text
   */
  // This gets tricky. We could do this, but it may be unexpected...
  unescapeTags(text) {
    return text.replaceAll(/&lt;\/([\w\d\.-_]+)>/g, "</$1>");
  }
  /**
   * @ignore
   * Highlighters strip newlines. But you can see new lines in <textarea>, this fixes that.
   * @param {string} text
   */
  injectNewLine(text) {
    if (text === "" || text[text.length - 1] === "\n") {
      text += " ";
    }
    return text;
  }
};
/**
 * @override
 */
__publicField(LightEditor, "baseName", "light-editor");
/**
 * @override
 */
__publicField(LightEditor, "dependencies", { "light-code": LightCode });
/**
 * @override
 * Without delegatesFocus, we get this fun message:
 *  "The invalid form control with name='editor' is not focusable."
 */
__publicField(LightEditor, "shadowRootOptions", {
  ...s.shadowRootOptions,
  delegatesFocus: true
});
/**
 * @override
 */
__publicField(LightEditor, "styles", [baseStyles, styles, theme]);
/**
 * @override
 */
__publicField(LightEditor, "properties", {
  ...LitTextareaMixin.formProperties,
  wrap: { reflect: true, state: false },
  language: { reflect: true },
  src: {},
  disableLineNumbers: {
    type: Boolean,
    reflect: true,
    attribute: "disable-line-numbers"
  },
  preserveWhitespace: {
    type: Boolean,
    reflect: true,
    attribute: "preserve-whitespace"
  },
  hasFocused: {
    type: Boolean,
    reflect: true,
    attribute: "data-has-focused"
  },
  currentLineNumber: {
    attribute: false,
    state: true,
    type: Number
  },
  highlighter: {
    attribute: false,
    state: true
  }
});

export {
  LightEditor
};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

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
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-VF46FRFA.js.map
