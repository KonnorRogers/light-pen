import { html, fixture } from "@open-wc/testing-helpers"
import { sendKeys } from "@web/test-runner-commands"
import "../exports/light-pen-register.js"



test("it should reset to initial values", async () => {
  const lightPen = await fixture(html`
    <light-pen>
      <template slot="html">HTML</template>
      <template slot="css">CSS</template>
      <template slot="js">JS</template>
    </light-pen>
  `)

  assert.equal(lightPen.htmlCode, "HTML")
  assert.equal(lightPen.cssCode, "CSS")
  assert.equal(lightPen.jsCode, "JS")

  ;["html", "css", "js"].forEach(async (lang) => {
    lightPen.shadowRoot.querySelector(`sandbox-editor--${language}`).focus()

    for (let i = 0; i < lightPen[`${lang}Code`].length; i++) {
      await sendKeys({
        press: 'Backspace',
      });
    }
  })

  assert.equal(lightPen.htmlCode, "")
  assert.equal(lightPen.cssCode, "")
  assert.equal(lightPen.jsCode, "")


  ;["html", "css", "js"].forEach(async (lang) => {
    lightPen.shadowRoot.querySelector(`sandbox-editor--${language}`).focus()

    await sendKeys({
      type: lang.toUpperCase(),
    });
  })

  assert.equal(lightPen.htmlCode, "HTML")
  assert.equal(lightPen.cssCode, "CSS")
  assert.equal(lightPen.jsCode, "JS")
})


