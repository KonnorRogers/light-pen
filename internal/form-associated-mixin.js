// Make some mixins

/**
 * @typedef {new (...args: any[]) => {}} Constructable
 */

/**
 * @template [T = {}]
 * @typedef {new (...args: any[]) => T} GConstructable
 */

/**
 * A mixin of form associated helpers that get added to a class with attachInternals
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {GConstructable<HTMLElement>} T
 * @param {T} superclass
 */
export function FormAssociated(superclass) {
  return class extends superclass {
    static formAssociated = true

    /**
     * @param {...any} args
     */
    constructor(...args) {
      super(...args)

      /**
       * We dont make it private like #internals because then its not available in the mixin.
       * @type {ReturnType<HTMLElement["attachInternals"]>}
       */
      this.internals = this.attachInternals()
    }

    /**
    * Called when the associated `form` element adds the custom element to its list of watched elements.
    * @param {HTMLFormElement} form
    * @returns {void}
    */
    formAssociatedCallback(form) {}

    /**
    * Called when the form is being reset. (e.g. user pressed `<input[type=reset]>` button). Custom element should clear whatever value set by the user.
    * @returns {void}
    */
    formResetCallback() {}

    /**
    * Called when the disabled state of the form changes
    * @param {boolean} isDisabled
    * @returns {void}
    */
    formDisabledCallback(isDisabled) {}


    /**
    * Called when the browser is trying to restore element’s state to state in which case reason is “restore”, or when the browser is trying to fulfill autofill on behalf of user in which case reason is “autocomplete”. In the case of “restore”, state is a string, File, or FormData object previously set as the second argument to setFormValue.
    * @param {string | File | FormData} state
    * @param {string} reason
    * @returns {void}
    */
    formStateRestoreCallback(state, reason) {}
  }
}

/**
 * A mixin of form associated helpers that get added to a class with attachInternals.
 * This opinionated version extends the above formAssociated and handles common conventions I like.
 * Required properties: { value, disabled, formControl }
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {GConstructable<HTMLElement>} T
 * @param {T} superclass
 */
export function OpinionatedFormAssociated(superclass) {
  return class extends FormAssociated(superclass) {
    static formAssociated = true

    /**
     * @param {...any} args
     */
    constructor(...args) {
      super(...args)

      /**
       * We dont make it private like #internals because then its not available in the mixin.
       * @type {ReturnType<HTMLElement["attachInternals"]>}
       */
      this.internals = this.attachInternals()
    }


    /**
    * Called when the form is being reset. (e.g. user pressed `<input[type=reset]>` button). Custom element should clear whatever value set by the user.
    * @returns {void}
    */
    formResetCallback() {
      if ("formControl" in this && this.formControl) {
        const value = this.getAttribute("value") || ""

        // @ts-expect-error
        this.formControl.value = value
        this.value = value
      }
    }

    /**
    * Called when the disabled state of the form changes
    * @param {boolean} isDisabled
    * @returns {void}
    */
    formDisabledCallback(isDisabled) {
      this.disabled = isDisabled
    }

    /**
    * Called when the browser is trying to restore element’s state to state in which case reason is “restore”, or when the browser is trying to fulfill autofill on behalf of user in which case reason is “autocomplete”. In the case of “restore”, state is a string, File, or FormData object previously set as the second argument to setFormValue.
    * @param {string | File | FormData} state
    * @param {string} reason
    * @returns {void}
    */
    formStateRestoreCallback(state, reason) {
      if ("formControl" in this && this.formControl) {
        // @ts-expect-error
        this.formControl.value = state
        this.value = state
      }
    }

    // Additional things not added by the `attachInternals()` call.

    /**
    * @param {Parameters<ElementInternals["setValidity"]>} params
    */
    setValidity (...params) {
      let flags = params[0]
      let message = params[1]

      let anchor = params[2]

      if (!anchor) {
        const formControl = /** @type {{formControl: undefined | HTMLElement}} */ (/** @type {unknown} */ (this)).formControl
        anchor = formControl
      }
      this.internals.setValidity(flags, message, anchor)
    }

    reportValidity () {
      return this.internals.reportValidity()
    }

    checkValidity () {
      return this.internals.checkValidity()
    }

    /**
      * @param {Parameters<ElementInternals["setFormValue"]>} params
      */
    setFormValue (...params) {
      this.internals.setFormValue(...params)
    }

    get form () {
      return this.internals.form
    }
  }
}
