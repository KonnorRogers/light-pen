
/**
 * A mixin to call `attachInternals()`
 * This is merely an implementation that sets the `formAssociated` static class property and calls `attachInternals()`. It doesn't do anything else.
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {import("./types.js").GConstructable<HTMLElement>} T
 * @param {T} superclass
 */
export function FormAssociated(superclass) {
  return (
    /**
     */
    class extends superclass {
      static formAssociated = true

      /**
      * @param {...any} args
      */
      constructor(...args) {
        super(...args)

        if (typeof this.attachInternals !== "function") {
          console.error(`Element Internals are not supported on this element. ${this.toString()}`)
          return
        }

        try {
          /**
          * We dont make it private like #internals because then its not available in the mixin.
          * @type {ReturnType<HTMLElement["attachInternals"]>}
          */
          this.internals = this.attachInternals()
        } catch (err) {
          // Perhaps already attached?
          console.error(err)
        }
      }
    }
  )
}

/**
 * A mixin of form associated helpers that get added to a class with attachInternals.
 * This opinionated version extends the above formAssociated and handles common conventions I like.
 * Required properties: { value, disabled, formControl }
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {import("./types.js").GConstructable<HTMLElement>} T
 * @param {T} superclass
 */
export function OpinionatedFormAssociated(superclass) {
  return (
    /**
     * @implements {ElementInternals}
     */
    class extends FormAssociated(superclass) {
      static formAssociated = true

      /**
       * @param {...any} args
       */
      constructor (...args) {
        super(...args)

        /**
         * @type {ElementInternals["role"]}
         */
        this.role = null

        /**
         * @type {string}
         */
        this.value = ""

        /**
         * @type {string}
         */
        this.defaultValue = ""

        /**
         * @type {HTMLInputElement["name"]}
         */
        this.name = ""

        /**
         * @type {null | (HTMLElement & { defaultValue: any, value: any })}
         */
        this.formControl = null

        /**
         * @type {string}
         */
        this.type = this.localName || ""

        /**
         * @type {boolean}
         */
        this.disabled = false

        /**
         * @type {boolean}
         */
        this.hasInteracted = this.hasInteracted ?? false

        /**
         * @type {boolean}
         */
        this.shouldTrackInteractions = this.shouldTrackInteractions ?? true

        if (this.shouldTrackInteractions) {
          this.addEventListener("focusin", this.handleInteraction)
          this.addEventListener("focusout", this.handleInteraction)
          this.addEventListener("click", this.handleInteraction)
        }
      }

      /**
       * Sets `this.hasInteracted = true` to true when the users focus / clicks the element.
       */
      handleInteraction = () => {
        if (this.disabled !== true) {
          this.hasInteracted = true
        }
      }

      get shouldShowValidationMessage () {
        return this.disabled !== true && this.hasInteracted === true
      }

      get labels () {
        return /** @type {NodeListOf<HTMLLabelElement>} */ (this.internals.labels)
      }

      get validity () {
        return this.internals.validity
      }

      get validationMessage () {
        return this.internals.validationMessage
      }

      get willValidate () {
        return this.internals.willValidate
      }

      /**
       * @param {Parameters<HTMLInputElement["setCustomValidity"]>} args
       */
      setCustomValidity (...args) {
        const formControl = this.formControl

        if (formControl) {
          return /** @type {HTMLInputElement} */ (/** @type {unknown} */(formControl)).setCustomValidity(...args)
        }
      }

      /**
      * @param {import("lit").PropertyValues<this>} changedProperties
      */
      willUpdate (changedProperties) {
        if (changedProperties.has("role")) {
          this.internals.role = changedProperties.get("role")
        }

        if (
          changedProperties.has("formControl")
          || changedProperties.has("defaultValue")
          || changedProperties.has("value")
        ) {
          const formControl = this.formControl
          if (formControl) {
            formControl.defaultValue = this.defaultValue
            this.defaultValue = formControl.defaultValue

            formControl.value = this.value
            this.value = formControl.value
            this.setFormValue(this.value, this.value)
          }
        }

        // @ts-expect-error
        super.willUpdate(changedProperties)
      }

      /**
      * Called when the form is being reset. (e.g. user pressed `<input[type=reset]>` button). Custom element should clear whatever value set by the user.
      * @returns {void}
      */
      formResetCallback() {
        if ("formControl" in this && this.formControl) {
          this.formControl.value = this.defaultValue
          this.value = this.defaultValue
        }

        this.hasInteracted = false
        this.internals.setValidity({})
        this.internals.setFormValue(this.defaultValue, this.defaultValue)
      }

      /**
      * Called when the disabled state of the form changes
      * @param {boolean} isDisabled
      * @returns {void}
      */
      formDisabledCallback(isDisabled) {
        this.disabled = isDisabled
        this.internals.setValidity({})
        this.hasInteracted = false
        this.formControl?.setAttribute("disabled", "")
      }

      /**
      * Called when the browser is trying to restore element’s state to state in which case reason is “restore”, or when the browser is trying to fulfill autofill on behalf of user in which case reason is “autocomplete”. In the case of “restore”, state is a string, File, or FormData object previously set as the second argument to setFormValue.
      * @param {string | File | FormData} state
      * @param {string} reason
      * @returns {void}
      */
      formStateRestoreCallback(state, reason) {
        if ("formControl" in this && this.formControl) {
          this.formControl.value = state
          // @ts-expect-error
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
        * @param {Parameters<ElementInternals["setFormValue"]>} args
        */
      setFormValue (...args) {
        return this.internals.setFormValue(...args)
      }

      /**
       * Returns the form attached to the element
       * @returns {ReturnType<ElementInternals["form"]>}
       */
      get form () {
        return this.internals.form
      }
    }
  )
}

OpinionatedFormAssociated.formProperties = {
  role: {reflect: true},
  name: {reflect: true},
  type: {reflect: true},
  disabled: {reflect: true, type: Boolean},
  required: {reflect: true, type: Boolean},
  formControl: {attribute: false, state: true},
  value: {attribute: false, state: true},
  defaultValue: {attribute: "value", reflect: true},
}
