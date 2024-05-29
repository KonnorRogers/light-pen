---
title: Adding languages for highlighting
permalink: /guides/adding-languages-for-highlighting/
description:
  Learning how to to extend the highlighter and add languages.
---

<light-editor style="display: none;"></light-editor>

[`<light-preview>`](/components/light-preview/), [`<light-code>`](/components/light-code/), and [`<light-editor>`](/components/light-editor/) all have a `highlighter` property on them.

This property holds an instance of a fork of [PrismJS](https://prismjs.com/) called [PrismJS ESM](https://github.com/konnorrogers/prism-esm)

The reason a fork is used is because PrismJS expects a singleton. This doesn't work well if you have multiple components on a page and may need different plugins or hooks or other various things per-component. The fork is an attempt to make it ESM compatible and allow multiple instance to exist.

Moving on, to add a language, we can query for our `<light-*>` component, modify the highlighter, and reassign it.

Let's for example create a `<light-editor>` component, add the `markdown` loader and change it's language to `markdown`.

<light-preview preview-mode="shadow-dom" script-scope="shadow-dom">
  <script type="text/plain" slot="code">
    <light-editor value="```js
const x = 'y'
```
">
    </light-editor>
    <script>
      ;(async () => {
        // const MarkdownLoader = (await import("https://cdn.jsdelivr.net/npm/prism-esm/components/prism-markdown.js")).loader
        const lightEditor = document.querySelector("light-editor")

        // Get the Prism highlighter instance
        const highlighter = lightEditor.highlighter

        // Add the markdown "grammar"
        // MarkdownLoader(highlighter)

        // Force an update
        lightEditor.highlighter = highlighter
        lightEditor.setAttribute("language", "markdown")
      })()
    &lt;/script>
  </script>
</light-preview>
