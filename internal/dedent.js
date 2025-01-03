/**
 * This may be wrong, but we assume a `\t` is equivalent to 2 spaces.
 */
const TAB_LENGTH = 2;

const INDENT_REGEXP = new RegExp(`(\t| {${TAB_LENGTH}})`);

/**
 * @param {TemplateStringsArray|string} templateStrings
 * @param {any[]} values
 * @returns {string}
 */
export function dedent(templateStrings, ...values) {
  let matches = [];
  let strings =
    typeof templateStrings === "string"
      ? [templateStrings]
      : templateStrings.slice();

  let string = "";

  function interpolate() {
    string = strings[0];

    for (let i = 0; i < values.length; i++) {
      string += values[i] + strings[i + 1];
    }

    string = string.trim();
  }

  // 1. check if its dedentable.
  let isDedentable = true;

  // 2. Find all line breaks to determine the highest common indentation level.
  for (let i = 0; i < strings.length; i++) {
    let match;

    // If any new line starts without any indentation and not an empty string, mark it as not dedentable, and then break the loop.
    if (strings[i].trim() && strings[i].match(/\n[^\t ]/)) {
      isDedentable = false;
      break;
    }

    if (
      (match = strings[i].match(new RegExp(`\n${INDENT_REGEXP.source}+`, "g")))
    ) {
      matches.push(...match);
    }
  }

  if (!isDedentable) {
    interpolate();
    return string;
  }

  // 3. Remove the common indentation from all strings.
  if (matches.length) {
    let size = Math.min(...matches.map((value) => value.length - 1));
    let pattern = new RegExp(`\n(\t| ){${size}}`, "g");

    for (let i = 0; i < strings.length; i++) {
      strings[i] = strings[i].replaceAll(pattern, "\n");
    }
  }

  // 5. Perform interpolation.
  interpolate();

  return string;
}

