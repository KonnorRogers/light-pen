import LightEditor from "light-pen/exports/light-editor.js"
import { assert } from "@esm-bundle/chai"
import { elementUpdated, html } from "@open-wc/testing-helpers"
import { fixture } from "@open-wc/testing-helpers"

LightEditor.define()

test("Should be role of textbox", async () => {
  const editor = await fixture(html`<light-editor name="yo" value="hi"></light-editor>`)

  assert.equal(editor.role, "textbox")
  assert.equal(editor.getAttribute("role"), "textbox")

  editor.role = "combobox"
  await elementUpdated(editor)
  assert.equal(editor.role, "combobox")
  assert.equal(editor.getAttribute("role"), "combobox")

  editor.setAttribute("role", "textbox")
  assert.equal(editor.role, "textbox")
  assert.equal(editor.getAttribute("role"), "textbox")
})

test("Should properly set its form value", async () => {
  const form = await fixture(html`
    <form>
      <light-editor name="yo" value="hi"></light-editor>
      <button>Submit</button>
    </form>
  `)

  let formData = null

  const promise = new Promise((resolve) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      formData = new FormData(e.target)
      resolve()
    })
  })

  form.querySelector("button").click()

  await promise

  console.log(formData)
})
