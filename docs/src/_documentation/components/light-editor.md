---
title: <light-editor>
permalink: /components/light-editor/
component: light-editor
---

<!-- Register it with the lazy loader -->
<light-editor style="display: none;"></light-editor>

<light-editor>
  <textarea>
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='UTF-8'>
        <title>Hello World</title>
      </head>
      <body>
        <main>
          <h1>Hello World</h1>
          Sup
          <script>console.log('Yo')</script>
        </main>
      </body>
    </html>
  </textarea>
</light-editor>

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-editor>
      <textarea>
        <!DOCTYPE html>
        <html lang='en'>
          <head>
            <meta charset='UTF-8'>
            <title>Hello World</title>
          </head>
          <body>
            <main>
              <h1>Hello World</h1>
              Sup
              <script>console.log('Yo')</script>
              &lt;textarea&gt;&lt;/textarea&gt;
            </main>
          </body>
        </html>
      </textarea>
    </light-editor>
  </template>
</light-preview>

<light-preview preview-mode="shadow-dom">
  <template slot='code'>
    <light-editor>
      <textarea>
        <!DOCTYPE html>
        <html lang='en'>
          <head>
            <meta charset='UTF-8'>
            <title>Hello World</title>
          </head>
          <body>
            <main>
              <h1>Hello World</h1>
              Sup
              <script>console.log('Yo')</script>
            </main>
          </body>
        </html>
      </textarea>
    </light-editor>
  </template>
</light-preview>

<light-preview preview-mode="shadow-dom">
  <template slot='code'>
    <light-editor value="<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'>
    <title>Hello World</title>
  </head>
  <body>
    <main>
      <h1>Hello World</h1>
      Sup
      <script>console.log('Yo')</script>
    </main>
  </body>
</html>">
    </light-editor>
  </template>
</light-preview>


<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-editor value="<div>Hello World!</div>">
    </light-editor>
  </template>
</light-preview>

## With a template

We can use a `<template>` tag to be able to "slot" in values.

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-editor>
      <template>
        <div>
          <div>Hello World</div>
          <div>What's up dude</div>
        </div>

        <template>
          A template in a template?!!?!?
        </template>

        This is madness!!
      </template>
    </light-editor>
  </template>
</light-preview>

## Changing the highlight language to CSS

By default, the highlighter from Highlight.js only supports HTML / CSS / JS.
This is intentional to keep the bundle size low.

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-editor language="css">
      <template>
        html, body {
          min-height: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
        }

        light-pen {
          height: 100%;
        }
      </template>
    </light-editor>
  </template>
</light-preview>

## Caveats

Declarative slots are hard. The most "consistent" is to use `value`. Like so:

```
<light-editor value="<html></html>"></light-editor>
```

### Problems with declarative slotting

`<textarea>` requires:

```html
<light-editor>
  <textarea>
    &lt;textarea&gt;&lt;/textarea&gt;
  </textarea>
</light-editor>
```

```html
<light-editor>
  <script type="text/plain">
    <script>&lt;/script>
  </script>
</light-editor>
```

`<template>` formats the HTML and strips improper HTML. It's also not suitable for non-HTML strings.
`<xmp>` is deprecated and also has some issues.
`<!-- -->` Could be used but runs into issues if you want comments in HTML.

