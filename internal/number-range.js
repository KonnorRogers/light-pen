/**
 * Used for constructing and manipulating ranges.
 * @example String Construction
 *		new Range()
 *					.parse("{1-4, 6, 7}")
 *					.includes(4) // => true
 *
 * @example Manual Construction
 *    const range = new Range()
 *      range.ranges.push([0, 5])
 *      range.numbers.add(7)
 *
 */
export class NumberRange {
  constructor() {
    const reset = () => {
      /**
       * @type {Array<Error>}
       */
      this.errors = [];

      /**
       * Ranges is an array of tuples. [0] is min, [1] is max.
       * @type {Array<[number, number]>}
       */
      this.ranges = [];

      /**
       * Possible single numbers
       * @type {Set<number>}
       */
      this.numbers = new Set();
    };
    this.reset = reset;

    this.reset();
  }

  /**
   * Checks if the parsed range includes the value.
   * @param {number} num
   */
  includes(num) {
    if (this.numbers.has(num)) {
      return true;
    }

    if (this.ranges.length == 0) {
      return false;
    }

    for (const range of this.ranges) {
      const [min, max] = range;

      if (num >= min && num <= max) {
        return true;
      }
    }

    return false;
  }

  /**
   * Given a string like this: "{1-3, 4, 5}" create a Range. Also accepts an array of numbers or a Set of numbers.
   * @param {Set<number> | Array<number> | string} str
   */
  parse(str) {
    this.reset();

    if (Array.isArray(str)) {
      str.forEach((num) => this.numbers.add(num));
      return this;
    }

    if (str instanceof Set) {
      this.numbers = str;
      return this;
    }

    if (!str.includes("{")) {
      this.errors.push(new Error("Unable to parse range. No `{` found."));
      return this;
    }

    if (!str.includes("}")) {
      this.errors.push(new Error("Unable to parse range. No `}` found."));
      return this;
    }

    str = str.split(/{/)[1];

    if (!str) {
      this.errors.push(new Error("Invalid string provided for range."));
      return this;
    }

    str = str.split(/}/)[0];

    str.split(/,\s*/).forEach((val) => {
      // Turn them all into tuples.
      const [minStr, maxStr] = val.split(/-/);

      const min = Number(minStr);
      const max = Number(maxStr);

      if (min == null || isNaN(min)) return;

      // We were only given a line number.
      if (max == null || isNaN(max)) {
        this.numbers.add(min);
        return;
      }

      this.ranges.push([min, max]);
    });

    return this;
  }
}
