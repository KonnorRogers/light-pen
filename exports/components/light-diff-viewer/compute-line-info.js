/**
 * A lot of the below code was taken and modified from React Diff Viewer.
 * <https://github.com/praneshr/react-diff-viewer/blob/master/src/compute-lines.ts>
 *
 * MIT License

Copyright (c) 2018 Pranesh Ravi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
import * as diff from "diff";

export const DiffType = /** @type {const} */ ({
  DEFAULT: "default",
  ADDED: "added",
  REMOVED: "removed",
  /** "empty" is not directly used here, but is used by the diff viewer to denote lines that dont exist. */
  EMPTY: "empty",
});

/**
 * @typedef {typeof DiffType[keyof typeof DiffType]} DiffTypeValues
 */

// See https://github.com/kpdecker/jsdiff/tree/v4.0.1#api for more info on the below JsDiff methods
export const DiffMethod = /** @type {const} */ ({
  CHARS: "diffChars",
  WORDS: "diffWords",
  WORDS_WITH_SPACE: "diffWordsWithSpace",
  LINES: "diffLines",
  TRIMMED_LINES: "diffTrimmedLines",
  SENTENCES: "diffSentences",
  CSS: "diffCss",
});

/**
 * @typedef {object} DiffInformation
 * @property {string | DiffInformation[]} [value]
 * @property {number} [lineNumber]
 * @property {typeof DiffType[keyof typeof DiffType]} [type]
 * @property {import("./light-diff-viewer.js").LineDiffData[]} [data]
 */

/**
 * @typedef {object} LineInformation
 * @property {DiffInformation} left
 * @property {DiffInformation} right
 */

/**
 * @typedef {object} ComputedLineInformation
 * @property {LineInformation[]} lineInformation
 * @property {number[]} diffLines
 */

/**
 * @typedef {object} ComputedDiffInformation
 * @property {DiffInformation[]} left
 * @property {DiffInformation[]} right
 */

// See https://github.com/kpdecker/jsdiff/tree/v4.0.1#change-objects for more info on JsDiff
// Change Objects
/**
 * @typedef {object} JsDiffChangeObject
 * @property {boolean} [added]
 * @property {boolean} [removed]
 * @property {string} [value]
 */

/**
 * Splits diff text by new line and computes final list of diff lines based on
 * conditions.
 *
 * @param {string} value Diff text from the js diff module.
 * @returns {string[]}
 */
const constructLines = (value) => {
  const lines = value.split("\n");
  const isAllEmpty = lines.every((val) => !val);
  if (isAllEmpty) {
    // This is to avoid added an extra new line in the UI.
    if (lines.length === 2) {
      return [];
    }
    lines.pop();
    return lines;
  }

  const lastLine = lines[lines.length - 1];
  const firstLine = lines[0];
  // Remove the first and last element if they are new line character. This is
  // to avoid addition of extra new line in the UI.
  if (!lastLine) {
    lines.pop();
  }
  if (!firstLine) {
    lines.shift();
  }
  return lines;
};

/**
 * Computes word diff information in the line.
 * [TODO]: Consider adding options argument for JsDiff text block comparison
 *
 * @param {string} oldValue - Old word in the line.
 * @param {string} newValue - New word in the line.
 * @param {typeof DiffMethod[keyof typeof DiffMethod]} [compareMethod="diffChars"] - JsDiff text diff method from https://github.com/kpdecker/jsdiff/tree/v4.0.1#api
 * @returns {ComputedDiffInformation}
 */
const computeDiff = (oldValue, newValue, compareMethod = DiffMethod.CHARS) => {
  /**
   * @type {JsDiffChangeObject[]}
   */
  const diffArray = diff[compareMethod](oldValue, newValue);

  /**
   * @type {ComputedDiffInformation}
   */
  const computedDiff = {
    left: [],
    right: [],
  };
  diffArray.forEach(
    /** @returns {DiffInformation} */
    ({ added, removed, value }) => {
      /** @type {DiffInformation} */
      const diffInformation = {};
      if (added) {
        diffInformation.type = DiffType.ADDED;
        diffInformation.value = value;
        computedDiff.right.push(diffInformation);
      }
      if (removed) {
        diffInformation.type = DiffType.REMOVED;
        diffInformation.value = value;
        computedDiff.left.push(diffInformation);
      }
      if (!removed && !added) {
        diffInformation.type = DiffType.DEFAULT;
        diffInformation.value = value;
        computedDiff.right.push(diffInformation);
        computedDiff.left.push(diffInformation);
      }
      return diffInformation;
    },
  );

  return computedDiff;
};

/**
 * [TODO]: Think about moving common left and right value assignment to a
 * common place. Better readability?
 *
 * Computes line wise information based in the js diff information passed. Each
 * line contains information about left and right section. Left side denotes
 * deletion and right side denotes addition.
 *
 * @param {string} oldString - Old string to compare.
 * @param {string} newString - New string to compare with old string.
 * @param {boolean} [disableWordDiff=false] - Flag to enable/disable word diff.
 * @param {typeof DiffMethod[keyof typeof DiffMethod]} [compareMethod="diffChars"] - JsDiff text diff method from https://github.com/kpdecker/jsdiff/tree/v4.0.1#api
 * @param {number} [linesOffset=0] - line number to start counting from
 * @returns {ComputedLineInformation}
 */
const computeLineInformation = (
  oldString,
  newString,
  disableWordDiff = false,
  compareMethod = DiffMethod.CHARS,
  linesOffset = 0,
) => {
  const diffArray = diff.diffLines(
    oldString.trimEnd(),
    newString.trimEnd(),
    {
      newlineIsToken: true,
      ignoreWhitespace: false,
      ignoreCase: false,
    },
  );
  let rightLineNumber = linesOffset;
  let leftLineNumber = linesOffset;

  /**
   * @type {LineInformation[]}
   */
  let lineInformation = [];
  let counter = 0;

  /**
   * @type {number[]}
   */
  const diffLines = [];

  /**
   * @type {string[]}
   */
  const ignoreDiffIndexes = [];

  /**
   * @param {string} value
   * @param {number} diffIndex
   * @param {boolean} [added]
   * @param {boolean} [removed]
   * @param {boolean} [evaluateOnlyFirstLine]
   * @returns {LineInformation[]}
   */
  const getLineInformation = (
    value,
    diffIndex,
    added,
    removed,
    evaluateOnlyFirstLine,
  ) => {
    const lines = constructLines(value);

    /**
     *  @type {{ right: DiffInformation, left: DiffInformation }[]}
     */
    const lineInfo = [];
    lines.forEach(
      /**
       * @param {string} line
       * @param {number} lineIndex
       */
      (line, lineIndex) => {
        /**
         * @type {DiffInformation}
         */
        const left = {};

        /**
         * @type {DiffInformation}
         */
        const right = {};
        if (
          ignoreDiffIndexes.includes(`${diffIndex}-${lineIndex}`) ||
          (evaluateOnlyFirstLine && lineIndex !== 0)
        ) {
          return;
        }
        if (added || removed) {
          if (!diffLines.includes(counter)) {
            diffLines.push(counter);
          }
          if (removed) {
            leftLineNumber += 1;
            left.lineNumber = leftLineNumber;
            left.type = DiffType.REMOVED;
            left.value = line || " ";
            // When the current line is of type REMOVED, check the next item in
            // the diff array whether it is of type ADDED. If true, the current
            // diff will be marked as both REMOVED and ADDED. Meaning, the
            // current line is a modification.
            const nextDiff = diffArray[diffIndex + 1];
            if (nextDiff && nextDiff.added) {
              const nextDiffLines = constructLines(nextDiff.value)[lineIndex];
              if (nextDiffLines) {
                const {
                  value: rightValue,
                  lineNumber,
                  type,
                } = getLineInformation(
                  nextDiff.value,
                  diffIndex,
                  true,
                  false,
                  true,
                )[0].right;
                // When identified as modification, push the next diff to ignore
                // list as the next value will be added in this line computation as
                // right and left values.
                ignoreDiffIndexes.push(`${diffIndex + 1}-${lineIndex}`);
                right.lineNumber = lineNumber;
                right.type = type;
                // Do word level diff and assign the corresponding values to the
                // left and right diff information object.
                if (disableWordDiff) {
                  right.value = rightValue;
                } else {
                  const computedDiff = computeDiff(
                    line,
                    /** @type {string} */ (rightValue),
                    compareMethod,
                  );
                  right.value = computedDiff.right;
                  left.value = computedDiff.left;
                }
              }
            }
          } else {
            rightLineNumber += 1;
            right.lineNumber = rightLineNumber;
            right.type = DiffType.ADDED;
            right.value = line;
          }
        } else {
          leftLineNumber += 1;
          rightLineNumber += 1;

          left.lineNumber = leftLineNumber;
          left.type = DiffType.DEFAULT;
          left.value = line;
          right.lineNumber = rightLineNumber;
          right.type = DiffType.DEFAULT;
          right.value = line;
        }

        counter += 1;
        lineInfo.push({ right, left });
      },
    );

    return lineInfo;
  };

  diffArray.forEach(
    (/** @type {import('diff').Change} */ { added, removed, value }, index) => {
      lineInformation = [
        ...lineInformation,
        ...getLineInformation(value, index, added, removed),
      ];
    },
  );

  return {
    lineInformation,
    diffLines,
  };
};

export { computeLineInformation };
