---
title: <light-preview>
permalink: /components/light-preview/
component: light-preview
---

## Typical Usage

<light-preview>
  <script type="text/plain" slot="preview-html">
    <button>Displaying a super cool button</button>
  </script>
  <script type="text/plain" slot="code">
    <style>
      light-preview::part(iframe) {
        height: 80px;
      }
    </style>

    <light-preview>
      <template slot="code">
        <button>Displaying a super cool button</button>
      </template>
    </light-preview>

    <script type="module">
      import LightPreview from "./exports/light-preview.js";
      LightPreview.define()
    &lt;/script>
  </script>
</light-preview>

## Nesting a light-pen inside of a light-pen

<light-preview>
  <template slot="code">
    <style>
      light-preview::part(iframe) {
        height: 80px;
      }
    </style>

    <light-preview>
      <template slot="code">
        <button>Displaying a super cool button</button>
      </template>
    </light-preview>

    <script type="module">
      import LightPreview from "light-pen/exports/light-preview.js"
      LightPreview.define()
    </script>
  </template>

  <template slot="preview-html">
    <style>
      light-preview::part(iframe) {
        height: 80px;
      }
    </style>

    <light-preview>
      <template slot="code">
        <button>Displaying a super cool button</button>
      </template>
    </light-preview>

    <script type="module">
      import LightPreview from "<%= find_asset "../exports/light-preview.js" %>"
      LightPreview.define()
    </script>
  </template>
</light-preview>


## Loading inside a shadow DOM

By default, previews are loaded inside an `<iframe>` for true "encapsulation". This may not always be desirable.
For not as strict encapsulation you can use `preview-mode="shadow-dom"`

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-preview preview-mode="shadow-dom">
      <template slot="code">
        <style>
          button.button {
            border-color: gray;
          }
        </style>

        <button class="light-button">Displaying a super cool button not inside an iframe</button>

        <br>
        <p>
          This button lives in a "Shadow DOM" and not inside an iframe!!
        </p>
      </template>
    </light-preview>

    <script type="module">
      import LightPreview from "<%= find_asset "../exports/light-preview.js" %>"
      LightPreview.define()
    </script>
  </template>
</light-preview>


## Additional buttons


<style>
  #additional-buttons button {
    appearance: none;
    -webkit-appearance: none;
    background-color: inherit;
    padding: 0.4em 0.6em;
    color: inherit;
    border: 1px solid lightgray;
    border-bottom-color: transparent;
    border-right-color: transparent;
    height: 100%;
    border-radius: 0;
  }


  #additional-buttons button:focus-visible {
    outline: 2px solid hsl(203, 77%, 43%);
  }

  @supports not selector(:focus-visible) {
    #additional-buttons button:focus-within {
      outline: 2px solid hsl(203, 77%, 43%);
    }
  }

  #additional-buttons button:hover {
    cursor: pointer;
    color: hsla(203, 77%, 43%);
    background-color: hsla(203, 77%, 43%, 0.1);
  }
</style>

<light-preview id="additional-buttons">
  <template slot="code">
    <style>
      #additional-buttons button {
        appearance: none;
        -webkit-appearance: none;
        background-color: inherit;
        padding: 0.4em 0.6em;
        color: inherit;
        border: 1px solid lightgray;
        border-bottom-color: transparent;
        border-right-color: transparent;
        height: 100%;
        border-radius: 0;
      }

      #additional-buttons button:focus-visible {
        outline: 2px solid hsl(203, 77%, 43%);
      }

      @supports not selector(:focus-visible) {
        #additional-buttons button:focus-within {
          outline: 2px solid hsl(203, 77%, 43%);
        }
      }

      #additional-buttons button:hover {
        cursor: pointer;
        color: hsla(203, 77%, 43%);
        background-color: hsla(203, 77%, 43%, 0.1);
      }

      light-preview::part(iframe) {
        height: 80px;
      }

    </style>

    <light-preview id="additional-buttons">
      <template slot="code">
        <div>Showing off more buttons</div>
      </template>

      <button class="light-button" slot="actions">HTML</button>
      <button class="light-button" slot="actions">Codepen</button>
    </light-preview>

    <script type="module">
      import LightPreview from "<%= find_asset "../exports/light-preview.js" %>"
      LightPreview.define()
    </script>
  </template>

  <button slot="actions">HTML</button>
  <button slot="actions">Codepen</button>
</light-preview>

## Escaping nested script tags

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

## Highlight Lines

<light-preview preview-mode="shadow-dom">
  <script type="text/plain" slot="code">
    <light-preview preview-mode="shadow-dom" highlight-lines="{1}">
      <script type="text/plain" slot="preview-html">
        View Source code for more.
      </script>
      <script type="text/plain" slot="code">
        const foo = "bar"
        console.log(foo)
      &lt;/script>
    </light-preview>
  </script>
</light-preview>


If you check the source code in the above example, you'll notice a `&lt;/script>`.

For more on why script tags are used, check out [Why script tags](/references/why-script-tags/)
for further reading.


