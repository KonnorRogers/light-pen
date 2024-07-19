import LightEditor from "light-pen/exports/components/light-editor/light-editor.js"
import { assert } from "@esm-bundle/chai"
import { aTimeout, elementUpdated, html } from "@open-wc/testing-helpers"
import { fixture } from "@open-wc/testing-helpers"

LightEditor.define()

test("Should be role of textbox", async () => {
  const editor = await fixture(html`<light-editor name="yo" value="hi"></light-editor>`)

  assert.equal(editor.role, null)
  assert.equal(editor.getAttribute("role"), null)

  editor.role = "combobox"
  await elementUpdated(editor)
  assert.equal(editor.role, "combobox")
  assert.equal(editor.getAttribute("role"), "combobox")

  editor.setAttribute("role", "textbox")
  await elementUpdated(editor)
  assert.equal(editor.role, "textbox")
  assert.equal(editor.getAttribute("role"), "textbox")
})

test("Should properly set its form value", async () => {
  const form = await fixture(html`
    <form>
      <light-editor name="test" value="hi"></light-editor>
      <button>Submit</button>
    </form>
  `)

  const editor = form.querySelector("light-editor")
  let formData = new FormData(form)

  assert.equal(formData.get("test"), editor.value)

  editor.value = "yo"
  await editor.updateComplete

  formData = new FormData(form)
  assert.equal(formData.get("test"), editor.value)
})

test("Should prevent submission with custom validity and reset validity", async () => {
  const form = await fixture(html`
    <form>
      <light-editor name="test" value="sup dude"></light-editor>
      <button>Submit</button>
      <button type="reset">Reset</button>
    </form>
  `)

  const editor = form.querySelector("light-editor")
  const button = form.querySelector("button")
  const resetButton = form.querySelector("button[type='reset']")

  let called = 0

  form.addEventListener("submit", () => {
    called += 1
  })

  editor.setCustomValidity("Custom Error Message")

  assert.equal(editor.validationMessage, "Custom Error Message")
  assert.equal(editor.validity.customError, true)
  assert.equal(editor.validity.valid, false)

  button.click()

  await aTimeout(1)

  assert.equal(called, 0)

  assert.equal(editor.validationMessage, "Custom Error Message")
  assert.equal(editor.validity.customError, true)
  assert.equal(editor.validity.valid, false)

  editor.value = "Not default value"
  resetButton.click()
  await aTimeout(1)

  assert.equal(editor.validationMessage, "")
  assert.equal(editor.validity.customError, false)
  assert.equal(editor.validity.valid, true)
  assert.equal(editor.getAttribute("value"), "sup dude")
})

test("Should fail validity check with required and no value", async () => {
  const form = await fixture(html`
    <form>
      <light-editor required name="test"></light-editor>
      <button>Submit</button>
      <button type="reset">Reset</button>
    </form>
  `)

  const editor = form.querySelector("light-editor")
  const button = form.querySelector("button")

  let called = 0

  form.addEventListener("submit", () => {
    called += 1
  })

  button.click()

  await aTimeout(1)

  assert.equal(called, 0)

  const { validationMessage } = Object.assign(document.createElement("input"), { required: true, value: "" })
  assert.equal(editor.validationMessage, validationMessage)
  assert.equal(editor.validity.valueMissing, true)
  assert.equal(editor.validity.valid, false)
})
