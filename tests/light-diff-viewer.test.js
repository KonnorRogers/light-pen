import { html, fixture, assert } from "@open-wc/testing";
import { readFile } from "@web/test-runner-commands";
import "../exports/components/light-diff-viewer/light-diff-viewer-register.js";

suite("<light-diff-viewer>", () => {
  test("Should render a component", async () => {
    const el = await fixture(html` <light-diff-viewer></light-diff-viewer> `);

    assert(
      el.matches(":defined"),
      `"${el.tagName.toLowerCase()}" element should be ":defined"`,
    );
  });
  test("Should correctly identify diffs for a simple comparison", async () => {
    const el = await fixture(
      html` <light-diff-viewer
        language="javascript"
        oldValue="const x = 'Hello World'"
        newValue="const y = 'Hello Moto'
console.log(y)"
      ></light-diff-viewer>`,
    );
    const addedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line-inserted']");
    assert.equal(addedLines.length, 2);
    const removedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line-deleted']");
    assert.equal(removedLines.length, 1);

    const diffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff']");
    const addedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--added']");
    const removedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--removed']");

    assert.equal(diffs.length, 6);
    assert.equal(addedDiffs.length, 3);
    assert.equal(removedDiffs.length, 3);

    assert.equal(removedDiffs[0].textContent, "x");
    assert.equal(removedDiffs[1].textContent, "W");
    assert.equal(removedDiffs[2].textContent, "rld");

    assert.equal(addedDiffs[0].textContent, "y");
    assert.equal(addedDiffs[1].textContent, "M");
    assert.equal(addedDiffs[2].textContent, "to");
  });

  test("Should correctly identify diffs for an advanced comparison", async () => {
    const el = await fixture(html` <light-diff-viewer></light-diff-viewer> `);

    const oldValue = await readFile({
      path: "fixtures/webpack-diff-old.js",
    }).catch((e) => console.error(e));
    const newValue = await readFile({
      path: "fixtures/webpack-diff-new.js",
    }).catch((e) => console.error(e));

    el.oldValue = oldValue;
    el.newValue = newValue;

    await el.updateComplete;

    const addedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line-inserted']");
    assert.equal(addedLines.length, 9);
    const removedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line-deleted']");
    assert.equal(removedLines.length, 23);

    const diffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff']");
    const addedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--added']");
    const removedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--removed']");

    assert.equal(diffs.length, 4);
    assert.equal(addedDiffs.length, 1);
    assert.equal(removedDiffs.length, 3);

    assert.equal(addedDiffs[0].textContent, "'/'");

    assert.equal(removedDiffs[0].textContent, "devServer.publicPath");
    assert.equal(removedDiffs[1].textContent, "name]---[local]---[");
    assert.equal(
      removedDiffs[2].textContent,
      "&localIdentName=[name]--[local]",
    );
  });
});
