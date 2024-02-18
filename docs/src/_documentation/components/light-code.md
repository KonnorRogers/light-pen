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
            Hello World
            <script>
              console.log("Hello World")
            &lt;/script>
          </body>
        </html>
      &lt;/script>
    </light-code>
  </script>
</light-preview>

If you check the source code in the above example, you'll notice a `&lt;/script>`.

For more on why script tags are used, check out [Why script tags](/references/why-script-tags/)
for further reading.

## Using an attribute

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-code deleted-lines="{1-3, 6, 7}" code="<html>
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

## Writings diffs

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code deleted-lines="{1-3, 6, 7}">
      <script type="text/plain" slot="code">
        <html>
          <head></head>
          <body>
            Hello World

            <script>
              console.log("Hello World")
            &lt;/script>
          </body>
        </html>
      &lt;/script>
    </light-code>
  </script>
</light-preview>

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code deleted-lines="{1-3, 6, 7}">
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

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-code highlighted-lines="{1-3, 6, 7}">
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
