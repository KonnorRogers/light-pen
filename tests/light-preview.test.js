import { html, fixture, assert } from "@open-wc/testing";
import "../exports/components/light-preview/light-preview-register.js";

suite("<light-preview>", () => {
  test("Should render a component", async () => {
    const el = await fixture(html` <light-preview></light-preview> `);

    assert(
      el.matches(":defined"),
      `"${el.tagName.toLowerCase()}" element should be ":defined"`,
    );
  });
});
