---
title: <light-editor>
permalink: /components/light-editor/
component: light-editor
---

<!-- Register it with the lazy loader -->
<light-editor style="display: none;"></light-editor>

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
              <script></script>
            </main>
          </body>
        </html>
      </textarea>
    </light-editor>
  </template>
</light-preview>

## Using `value` attribute

Using the `value` attribute is the generally recommended way to provide the most consistent experience.

<light-preview preview-mode="shadow-dom">
  <template slot='code'>
    <light-editor value="
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
">
    </light-editor>
  </template>
</light-preview>

## Preserve white space with `value` attribute

By default, extra white space before the first character and after the last character will be stripped.
If you want to leave extra white-space, pass the `preserve-whitespace` boolean attribute to the editor.

<light-preview preview-mode="shadow-dom">
  <template slot='code'>
    <light-editor preserve-whitespace="" value="
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
">
    </light-editor>
  </template>
</light-preview>

## With a `<template>` tag

We can use a `<template>` tag to be able to "slot" in the default `value`

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
This is intentional to keep the bundle size low. Supported languages are `html`, `css`, and `js`.

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

## Caveats to the editor initial value

Declarative slots are hard. The most "consistent" way to provide a default value for the editor
is to use `value` attribute. Like so:

```html
<light-editor value="<html></html>"></light-editor>
```

### Problems with declarative slotting

If you really *need* declarative slotting, it's best to use a `<textarea>` in the default slot.
The editor is really a `<textarea>` at it's core, so its recommended to use the `<textarea>` element to slot in elements.
It has 1 drawback which is around not being able to slot in a `<textarea>` directly.
And showing `&lt;` and `&gt;` literals is challenging. `&amp;lt;html&amp;gt;` is equivalent to `&gt;html&lt;>`
This limitation only exists for slotting.

`<textarea>` requires:

```html
<light-editor>
  <textarea>
    &lt;textarea&gt;&lt;/textarea&gt;
  </textarea>
</light-editor>
```

### Using a `script` tag

```html
<light-editor>
  <!-- Important to use `type="text/plain"` -->
  <script type="text/plain">
    <script>&lt;/script>
  </script>
</light-editor>
```

### Other slottable tags

`<template>` formats the HTML and strips improper HTML. It's also not suitable for non-HTML strings. You can do it, but you've been warned.
`<xmp>` is deprecated and also has some issues around if you do something like: `<!DOCTYPE html >`
`<!-- -->` isn't supported like with Prism's auto escape plugin could be used, but runs into issues if you want comments nested in comments.

