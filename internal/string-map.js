// @ts-check
/**
 * @param {Record<string, unknown>} obj
 * @param {string} [spacer=" "]
 * @returns {string}
 */
export function stringMap (obj, spacer = " ") {
  let strings = []

  for (const [key, val] of Object.entries(obj)) {
    if (Boolean(val)) {
      strings.push(key)
    }
  }

  return strings.join(spacer)
}
