---
title: <light-diff-viewer>
---

<light-diff-viewer hidden></light-diff-viewer>

## Examples

<light-preview
preview-mode="shadow-dom"
script-scope="shadow-dom"

>

  <script slot="code" type="text/plain">
    <light-diff-viewer
      language="javascript"
    >
    </light-diff-viewer>
    <script type="module">
      ;(async () => {
        const viewer = document.querySelector("light-diff-viewer")
        const newValue = await (await fetch("https://raw.githubusercontent.com/praneshr/react-diff-viewer/master/examples/src/diff/javascript/new.rjs")).text()
        viewer.new = newValue

        const oldValue = await (await fetch("https://raw.githubusercontent.com/praneshr/react-diff-viewer/master/examples/src/diff/javascript/old.rjs")).text()
        viewer.old = oldValue
      })()
    &lt;/script>
  </script>
</light-preview>

### First Example
