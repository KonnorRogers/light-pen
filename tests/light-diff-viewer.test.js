import { html, fixture, assert } from "@open-wc/testing";
import "../exports/components/light-diff-viewer/light-diff-viewer-register.js";

suite("<light-diff-viewer>", () => {
  test("Should render a component", async () => {
    const el = await fixture(html` <light-diff-viewer></light-diff-viewer> `);

    assert(
      el.matches(":defined"),
      `"${el.tagName.toLowerCase()}" element should be ":defined"`,
    );
  });
});
