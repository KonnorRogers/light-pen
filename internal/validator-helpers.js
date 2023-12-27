/**
 * @template {HTMLElement} [T=(HTMLElement & { value?: string | null | File | FormData })]
 * @typedef {object} Validator
 * @property {string[]} [observedAttributes] - The attributes to listen for that may affect validations. When these attributes change, we should re-run validations. Right now, this does nothing, but will be useful for "vanilla" components.
 * @property {(element: T & { value?: string | null | File | FormData }) => { message: string, isValid: boolean, invalidKeys: Array<Exclude<keyof ValidityState, "valid">> }} checkValidity
 */


