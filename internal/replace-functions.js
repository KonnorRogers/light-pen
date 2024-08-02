/**
 * @param {string} s - The string to replace
 * @param {number} start - The start index
 * @param {number} end - The end index
 * @param {string} substitute - the substituting string
 */
export function replaceRange(s, start, end, substitute) {
  return s.substring(0, start) + substitute + s.substring(end);
}

/**
 * @param {string} text
 * @param {RegExp} regex
 */
export function replaceLast(text, regex) {
  const matches = [...text.matchAll(regex)];

  const lastMatch = matches[matches.length - 1];

  if (!lastMatch) return text;
  if (lastMatch.index == null) return text;

  const { index } = lastMatch;

  const start = index;
  const end = index + lastMatch[0].length;
  const substitution = "</" + lastMatch[1] + ">";
  return replaceRange(text, start, end, substitution);
}
