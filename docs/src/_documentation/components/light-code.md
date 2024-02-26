---
title: <light-code>
---

<light-code style="display: none;"></light-code>

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code>
      <script type="text/plain" slot="code">
        <html>
          <head></head>
          <body>
            HHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello Worldello World Hello World Hello World
            <script>
              const greeting = "Hello World"
              console.log(greeting)
            &lt;/script>
          </body>
        </html>
      &lt;/script>
    </light-code>
  </script>
</light-preview>

## Examples

If you check the source code in the above example, you'll notice a `&lt;/script>`.

For more on why script tags are used, check out [Why script tags](/references/why-script-tags/)
for further reading.

### Using the "code" attribute

By setting the `code` attribute, we can achieve the same as slotting elements.

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-code code="<html>
        <head></head>
        <body>
          Hello World
          <script>
            console.log('Hello World')
          </script>
        </body>
      </html>"
    ></light-code>
  </template>
</light-preview>

## Highlight Lines

Line highlighting accepts 2 syntaxes, the number itself:

`highlight-lines="{1}"` or using a range: `highlight-lines="{1-3}"` and you
can combine ranges and numbers like so:

```html
<light-code highlight-lines="{1, 4-8, 12}"></light-code>
```

Line ranges are **inclusive**. Line numbers are also 1-indexed.

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code highlight-lines="{1-3, 6, 7}">
      <script type="text/plain" slot="code">
        <html>
          <head>
          </head>
          <body>
            <h1>
              Hello World
            </h1>
          </body>
        </html>
      &lt;/script>
    </light-code>
  </script>
</light-preview>

## Writings diffs

### Inserted lines

Inserted lines can be highlighted via `inserted-lines` attribute.

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code inserted-lines="{1-4, 6, 7}">
      <script type="text/plain" slot="code">
        <html>
          <head></head>
          <body>
            HHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello WorldHello World Hello World Hello Worldello World Hello World Hello World

            <script>
              console.log("Hello World")
            &lt;/script>
          </body>
        </html>
      &lt;/script>
    </light-code>
  </script>
</light-preview>

### Deleted lines

Deleted lines can be highlighted via `deleted-lines` attribute.

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code deleted-lines="{1-4, 6, 7}">
      <script type="text/plain" slot="code">
        <html>
          <head>
          </head>
          <body>
            <h1>
              Hello World
            </h1>
          </body>
        </html>
      &lt;/script>
    </light-code>
  </script>
</light-preview>

### Combining inserted and deleted lines

Deleted lines can be highlighted via `deleted-lines` attribute.

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code deleted-lines="{1-2, 6, 7}" inserted-lines="{3, 4, 5}">
      <script type="text/plain" slot="code">
        <html>
          <head>
          </head>
          <body>
            <h1>
              Hello World
            </h1>
          </body>
        </html>
      &lt;/script>
    </light-code>
  </script>
</light-preview>


### Disable Line Numbers

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code disable-line-numbers>
      <script type="text/plain" slot="code">
        <html>
          <head>
          </head>
          <body>
            <h1>
              Hello World
            </h1>
          </body>
        </html>
      &lt;/script>
    </light-code>
  </script>
</light-preview>

### Starting counting lines at a specific index

Sometimes you may not want to start counting lines at `1`, for example, we can start
counting lines at `10` in the following snippet:

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code line-number-start="10">
      <script type="text/plain" slot="code">
        <html>
          <head>
          </head>
          <body>
            <h1>
              Hello World
            </h1>
          </body>
        </html>
      &lt;/script>
    </light-code>
  </script>
</light-preview>
