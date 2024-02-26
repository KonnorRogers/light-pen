---
title: <light-editor>
permalink: /components/light-editor/
component: light-editor
---

<!-- Register it with the lazy loader -->
<light-editor style="display: none;"></light-editor>
<light-code style="display: none;"></light-code>

<light-preview preview-mode="shadow-dom" >
  <script type="text/plain" slot="code">
    <form>
      <light-editor label="A small editor">
        <!-- We use a `<script type="text/plain">` because there's a lot of caveats to using `<template>` -->
        <script type="text/plain">
          <!DOCTYPE html>
          <html lang='en'>
            <head>
              <meta charset='UTF-8'>
              <title>Hello World</title>

              <style>
                h1 { font-size: 1.8rem; }
              </style>
            </head>
            <body>
              <main>
                <h1>Hello World</h1>
                Sup
                <script>
                  const greeting = 'Hello World'
                  console.log(greeting)
                &lt;/script>
              </main>
            </body>
          </html>
        &lt;/script>
      </light-editor>
    </form>
  </script>
</light-preview>

If you check the source code in the above example, you'll notice a `&lt;/script>`.

For more on why script tags are used, check out [Why script tags](/references/why-script-tags/)
for further reading.

## Using the `value` attribute

Using the `value` attribute is the generally recommended way to provide the most consistent experience. By default,
leading and trailing newlines / whitespace will be stripped.

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot='code'>
    <light-editor
      value="
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
            <script>
              const greeting = 'Hello World'
              console.log(greeting)
            &lt;/script>
          </main>
        </body>
      </html>"
    >
    </light-editor>
  </script>
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
            &lt;script&gt;
              const greeting = 'Hello World!'
              console.log(greeting)
            &lt;/script&gt;
          </main>
        </body>
      </html>
      "
    >
    </light-editor>
  </template>
</light-preview>

## With a template tag

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

## Caveats to the initial editor value

Declarative slots are hard. The most "consistent" way to provide a default value for the editor
is to use `value` attribute. Like so:

```html
<light-editor value="<html></html>"></light-editor>
```

### Problems with declarative slotting

If you really *want* declarative slotting, it's best to use a `<textarea>` in the default slot.
The editor is really a `<textarea>` at it's core, so its recommended to use the `<textarea>` element to slot in elements.
It has 1 drawback which is around not being able to slot in a `<textarea>` directly.
And showing `&lt;` and `&gt;` literals is challenging. `&amp;lt;html&amp;gt;` is equivalent to `&gt;html&lt;>`
This limitation only exists for slotting.

Using a `<textarea>` element for the default slot requires the following markup to nest a
`<textarea>` string literal inside of it:

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

## Disabled Editor

To disable the editor, provide a `disabled` attribute.

<light-preview preview-mode="shadow-dom">
  <script type="text/html" slot="code">
    <light-editor disabled value="You can't edit me!"></light-editor>
  </script>
</light-preview>

## Editor with a placeholder

To provide a placeholder, use the `placeholder` attribute. Note, this does not support a `<slot>`
because it's using the native `<textarea>` placeholder attribute.

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-editor placeholder="Write something awesome"></light-editor>
  </template>
</light-preview>

## Editor with validations

Validations are handled using "Form Associated Custom Elements".

`<light-editor>` supports `minlength`, `maxlength`, and `required` just like the
native `<textarea>` element.

### minlength, maxlength, required validations

<light-preview preview-mode="shadow-dom" script-scope="shadow-dom">
  <script type="text/plain" slot="code">
    <form>
      <label>
        minlength: 5, maxlength: 6, required.
        <br>
        <light-editor required minlength="5" maxlength="6"></light-editor>
      </label>
      <button>Trigger Validations</button>
    </form>
    <!-- Prevent form submissions -->
    <script>
      document.addEventListener("submit", (e) => e.preventDefault())
    &lt;/script>
  </script>
</light-preview>

## Removing line numbers

Removing line numbers can be done with the boolean attribute `disable-line-numbers`

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-editor disable-line-numbers>
      <!-- We use a `<script type="text/plain">` because there's a lot of caveats to using `<template>` -->
      <script type="text/plain">
        <!DOCTYPE html>
        <html lang='en'>
          <head>
            <meta charset='UTF-8'>
            <title>Hello World</title>

            <style>
              h1 { font-size: 1.8rem; }
            </style>
          </head>
          <body>
            <main>
              <h1>Hello World</h1>
              Sup
              <script>
                const greeting = 'Hello World'
                console.log(greeting)
              &lt;/script>
            </main>
          </body>
        </html>
      &lt;/script>
    </light-editor>
  </script>
</light-preview>
