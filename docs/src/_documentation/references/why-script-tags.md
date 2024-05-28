---
title: Why script tags
description: Why light components use `<script>` tags instead of `<template>` tags
---

You'll notice in examples for `<light-*>` elements that slotted elements it uses `<script type="text/plain">` tags and not `<template>` tags.

The `<template>` tag is not suitable for syntax highlighting because it applies formatting and is subject to the HTML parser. It is meant purely for HTML intended to be rendered. As a result, it will do things like strip / format text. As a result, `<script type="text/plain">` is the best way to get a "plaintext" representation of your code to be highlighted.

TLDR: Use `<template>` for displaying HTML. Use `<script type="text/plain">` for non-html languages, or for escape sequences like `<!DOCTYPE html>` which will get stripped by `<template>` as well as invalid HTML. Overall, `<script type="text/plain">` results in code that doesn't get lost.

## Unescaping tags

Because we use the workaround of slotting elements like this, there is the edge case of if you need a `<script>` within a `<script>`.

Like so:

```html
<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <script>
      console.log("Hello World")
    </script>
  </script>
</light-preview>
```

To workaround this, `<light-*>` components have a convention of automatically **unescaping** tags that look like this:

`&lt;/script>` and turns them into proper closing tags. `</script>`

So if we were to rewrite the example above, we would write it like this:

```html
<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <script>
      console.log("Hello World")
    &lt;/script>
  </script>
</light-preview>
```
