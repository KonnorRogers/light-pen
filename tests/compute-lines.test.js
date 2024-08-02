import { assert } from "@esm-bundle/chai";
import {
  computeLineInformation,
  DiffMethod,
} from "../exports/components/light-diff-viewer/compute-line-info.js";

suite("Testing compute lines utils", () => {
  test("Should it avoid trailing spaces", () => {
    const oldCode = `test


    `;
    const newCode = `test

    `;

    assert.deepEqual(computeLineInformation(oldCode, newCode), {
      lineInformation: [
        {
          left: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
          right: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
        },
      ],
      diffLines: [],
    });
  });

  test("Should identify line addition", () => {
    const oldCode = "test";
    const newCode = `test
    newLine`;

    assert.deepEqual(computeLineInformation(oldCode, newCode), {
      lineInformation: [
        {
          right: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
          left: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
        },
        {
          right: {
            lineNumber: 2,
            type: "added",
            value: "    newLine",
          },
          left: {},
        },
      ],
      diffLines: [1],
    });
  });

  test("Should identify line deletion", () => {
    const oldCode = `test
    oldLine`;
    const newCode = "test";

    assert.deepEqual(computeLineInformation(oldCode, newCode), {
      lineInformation: [
        {
          right: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
          left: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
        },
        {
          right: {},
          left: {
            lineNumber: 2,
            type: "removed",
            value: "    oldLine",
          },
        },
      ],
      diffLines: [1],
    });
  });

  test("Should identify line modification", () => {
    const oldCode = `test
    oldLine`;
    const newCode = `test
    newLine`;

    assert.deepEqual(computeLineInformation(oldCode, newCode, true), {
      lineInformation: [
        {
          right: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
          left: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
        },
        {
          right: {
            lineNumber: 2,
            type: "added",
            value: "    newLine",
          },
          left: {
            lineNumber: 2,
            type: "removed",
            value: "    oldLine",
          },
        },
      ],
      diffLines: [1],
    });
  });

  test("Should identify word diff", () => {
    const oldCode = `test
    oldLine`;
    const newCode = `test
    newLine`;

    assert.deepEqual(computeLineInformation(oldCode, newCode), {
      lineInformation: [
        {
          right: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
          left: {
            lineNumber: 1,
            type: "default",
            value: "test",
          },
        },
        {
          right: {
            lineNumber: 2,
            type: "added",
            value: [
              {
                type: "default",
                value: "    ",
              },
              {
                type: "added",
                value: "new",
              },
              {
                type: "default",
                value: "Line",
              },
            ],
          },
          left: {
            lineNumber: 2,
            type: "removed",
            value: [
              {
                type: "default",
                value: "    ",
              },
              {
                type: "removed",
                value: "old",
              },
              {
                type: "default",
                value: "Line",
              },
            ],
          },
        },
      ],
      diffLines: [1],
    });
  });

  test('Should call "diffChars" jsDiff method when compareMethod is not provided', () => {
    const oldCode = "Hello World";
    const newCode = `My Updated Name
Also this info`;

    assert.deepEqual(computeLineInformation(oldCode, newCode), {
      lineInformation: [
        {
          right: {
            lineNumber: 1,
            type: "added",
            value: [
              {
                type: "added",
                value: "My Updat",
              },
              {
                type: "default",
                value: "e",
              },
              {
                type: "added",
                value: "d",
              },
              {
                type: "default",
                value: " ",
              },
              {
                type: "added",
                value: "Name",
              },
            ],
          },
          left: {
            lineNumber: 1,
            type: "removed",
            value: [
              {
                type: "removed",
                value: "H",
              },
              {
                type: "default",
                value: "e",
              },
              {
                type: "removed",
                value: "llo",
              },
              {
                type: "default",
                value: " ",
              },
              {
                type: "removed",
                value: "World",
              },
            ],
          },
        },
        {
          right: {
            lineNumber: 2,
            type: "added",
            value: "Also this info",
          },
          left: {},
        },
      ],
      diffLines: [0, 2],
    });
  });

  test('Should call "diffWords" jsDiff method when a compareMethod IS provided', () => {
    const oldCode = "Hello World";
    const newCode = `My Updated Name
Also this info`;

    assert.deepEqual(
      computeLineInformation(oldCode, newCode, false, DiffMethod.WORDS),
      {
        lineInformation: [
          {
            right: {
              lineNumber: 1,
              type: "added",
              value: [
                {
                  type: "added",
                  value: "My",
                },
                {
                  type: "default",
                  value: " ",
                },
                {
                  type: "added",
                  value: "Updated Name",
                },
              ],
            },
            left: {
              lineNumber: 1,
              type: "removed",
              value: [
                {
                  type: "removed",
                  value: "Hello",
                },
                {
                  type: "default",
                  value: " ",
                },
                {
                  type: "removed",
                  value: "World",
                },
              ],
            },
          },
          {
            right: {
              lineNumber: 2,
              type: "added",
              value: "Also this info",
            },
            left: {},
          },
        ],
        diffLines: [0, 2],
      },
    );
  });

  test("Should not call jsDiff method and not diff text when disableWordDiff is true", () => {
    const oldCode = "Hello World";
    const newCode = `My Updated Name
Also this info`;

    assert.deepEqual(computeLineInformation(oldCode, newCode, true), {
      lineInformation: [
        {
          right: {
            lineNumber: 1,
            type: "added",
            value: "My Updated Name",
          },
          left: {
            lineNumber: 1,
            type: "removed",
            value: "Hello World",
          },
        },
        {
          right: {
            lineNumber: 2,
            type: "added",
            value: "Also this info",
          },
          left: {},
        },
      ],
      diffLines: [0, 2],
    });
  });

  test("Should start line counting from offset", () => {
    const oldCode = "Hello World";
    const newCode = `My Updated Name
Also this info`;

    assert.deepEqual(
      computeLineInformation(oldCode, newCode, true, DiffMethod.WORDS, 5),
      {
        lineInformation: [
          {
            right: {
              lineNumber: 6,
              type: "added",
              value: "My Updated Name",
            },
            left: {
              lineNumber: 6,
              type: "removed",
              value: "Hello World",
            },
          },
          {
            right: {
              lineNumber: 7,
              type: "added",
              value: "Also this info",
            },
            left: {},
          },
        ],
        diffLines: [0, 2],
      },
    );
  });
});
