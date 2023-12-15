import { OpinionatedFormAssociated } from "./form-associated-mixin.js";

/**
 * A mixin for textareas
 *
 * @see https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/
 * @template {import("./types.js").GConstructable<HTMLElement>} T
 * @param {T} superclass
 */
export function TextareaFormAssociatedMixin(superclass) {
  return (
    /**
     * @implements {Omit<HTMLTextAreaElement, "cols" | "rows">}
     */
    class extends OpinionatedFormAssociated(superclass) {
      /**
       * @param {...any} args
       */
      constructor (...args) {
        super(...args)

        const textarea = document.createElement("textarea")

        /**
         * @type {HTMLTextAreaElement["autocomplete"]}
         */
        this.autocomplete = textarea.autocomplete

        /**
         * @type {HTMLTextAreaElement["wrap"]}
         */
        this.wrap = textarea.wrap

        /**
         * @type {null | string}
         */
        this.value = textarea.value

        /**
         * @type {HTMLTextAreaElement["maxLength"]}
         */
        this.maxLength = textarea.maxLength

        /**
         * @type {HTMLTextAreaElement["minLength"]}
         */
        this.minLength = textarea.minLength

        /**
         * @type {HTMLTextAreaElement["readOnly"]}
         */
        this.readOnly = textarea.readOnly

        /**
         * @type {HTMLTextAreaElement["placeholder"]}
         */
        this.placeholder = textarea.placeholder

        /**
         * @type {HTMLTextAreaElement["required"]}
         */
        this.required = textarea.required

        /**
         * @type {null | HTMLTextAreaElement}
         */
        this.formControl = textarea

        /**
         * @type {HTMLTextAreaElement["dirName"]}
         */
        this.dirName = textarea.dirName

        // @TODO:
        // setRangeText,
        // setSelectionRange

        /** @type {HTMLTextAreaElement["selectionDirection"]} */
        this.selectionDirection = textarea.selectionDirection
      }

      /**
       * @param {Parameters<HTMLTextAreaElement["setCustomValidity"]>} args
       */
      setCustomValidity (...args) {
        const formControl = this.formControl

        if (formControl) {
          /** @type {HTMLTextAreaElement} */ (formControl).setCustomValidity(...args)
        }
      }

      /**
       * @returns {HTMLTextAreaElement["textLength"]}
       */
      get textLength () {
        const formControl = /** @type {HTMLTextAreaElement} */ (this.formControl)

        if (formControl) {
          return formControl.textLength
        }

        return 0
      }

      /**
       * @returns {HTMLTextAreaElement["selectionStart"]}
       */
      get selectionStart () {
        const formControl = /** @type {HTMLTextAreaElement} */ (this.formControl)

        if (formControl) {
          return formControl.selectionStart
        }

        return 0
      }

      /**
       * @returns {HTMLTextAreaElement["selectionStart"]}
       */
      get selectionEnd () {
        const formControl = /** @type {HTMLTextAreaElement} */ (this.formControl)

        if (formControl) {
          return formControl.selectionStart
        }

        return 0
      }

      /**
       * @type {HTMLTextAreaElement["select"]}
       */
      select () {
        const formControl = this.formControl

        if (formControl) {
          /** @type {HTMLTextAreaElement} */ (formControl).select()
        }
      }
    }
  )
}

TextareaFormAssociatedMixin.formProperties = Object.assign(
  OpinionatedFormAssociated.formProperties,
  {
    autocomplete: {reflect: true},
    wrap: {reflect: true},
    readOnly: {attribute: "readonly", type: Boolean, reflect: true},
    placeholder: {reflect: true},
    dirName: {reflect: true, attribute: "dirname"},

    // Validation
    maxLength: {attribute: "maxlength", type: Number, reflect: true},
    minLength: {attribute: "minlength", type: Number, reflect: true},
    pattern: {reflect: true},
  }
)
