import { html, fixture, assert } from "@open-wc/testing";
import "../exports/components/light-disclosure/light-disclosure-register.js";

suite("<light-disclosure>", () => {
  test("Should render a component", async () => {
    const el = await fixture(html` <light-disclosure></light-disclosure> `);

    assert(
      el.matches(":defined"),
      `"${el.tagName.toLowerCase()}" element should be ":defined"`,
    );
  });
});
