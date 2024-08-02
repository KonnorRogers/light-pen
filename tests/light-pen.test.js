import { assert } from "@esm-bundle/chai";
import { html, fixture, elementUpdated } from "@open-wc/testing-helpers";
import "../exports/components/light-pen/light-pen-register.js";

test("it should reset to initial values", async () => {
  const lightPen = await fixture(html`
    <light-pen>
      <template slot="html">HTML</template>
      <template slot="css">CSS</template>
      <template slot="js">JS</template>
    </light-pen>
  `);

  await lightPen.updateComplete;
  assert.equal(lightPen.htmlCode, "HTML");
  assert.equal(lightPen.cssCode, "CSS");
  assert.equal(lightPen.jsCode, "JS");

  lightPen.shadowRoot
    .querySelectorAll("light-disclosure")
    .forEach((el) => el.click());
  ["html", "css", "js"].forEach(async (lang) => {
    const editor = lightPen.shadowRoot.querySelector(
      `[part~='sandbox-editor--${lang}']`,
    );

    editor.focus();

    // @TODO: get this working with real keypresses
    // for (let i = 0; i < lightPen[`${lang}Code`].length; i++) {
    //   await sendKeys({
    //     press: 'Backspace',
    //   });
    // }
    editor.value = "";
  });

  await elementUpdated(lightPen);

  // await aTimeout(3000)

  assert.equal(lightPen.htmlCode, "");
  assert.equal(lightPen.cssCode, "");
  assert.equal(lightPen.jsCode, "");
  ["html", "css", "js"].forEach(async (lang) => {
    const editor = lightPen.shadowRoot.querySelector(
      `[part~='sandbox-editor--${lang}']`,
    );

    editor.focus();

    // @TODO: get this working with real keypresses
    editor.value = lang.toUpperCase();

    // await sendKeys({
    //   type: lang.toUpperCase(),
    // });
  });

  await lightPen.updateComplete;

  assert.equal(lightPen.htmlCode, "HTML");
  assert.equal(lightPen.cssCode, "CSS");
  assert.equal(lightPen.jsCode, "JS");
});
