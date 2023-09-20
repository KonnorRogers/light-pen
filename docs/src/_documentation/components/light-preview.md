---
title: <light-preview>
permalink: /components/light-preview/
description: |
  A lightweight code previewing component designed to show source code side by side with
  a demo of your code in the browser.
---

## Typical Usage

<light-preview base-url="<%= site.config.base_url %>/">
  <script slot="preview-code" type="text/plain">
    <button>Displaying a super cool button</button>
  </script>
  <script type="text/plain" slot="code">
    <style>
      light-preview::part(iframe) {
        height: 80px;
      }
    </style>

    <light-preview base-url="<%= site.config.base_url %>/">
      <script type="text/plain" slot="code">
        <button>Displaying a super cool button</button>
      &lt;/script>
    </light-preview>

    <script type="module">
      import LightPreview from "light-pen/exports/light-preview.js";
      LightPreview.define()
    &lt;/script>
  </script>
</light-preview>

## Nesting a light-pen inside of a light-pen

<light-preview base-url="<%= site.config.base_url %>/">
  <script type="text/plain" slot="code">
    <style>
      light-preview::part(iframe) {
        height: 80px;
      }
    </style>

    <light-preview base-url="<%= site.config.base_url %>/">
      <script type="text/plain" slot="code">
        <button>Displaying a super cool button</button>
      &lt;/script>
    </light-preview>

    <script type="module">
      import LightPreview from "light-pen/exports/light-preview.js"
      LightPreview.define()
    &lt;/script>
  </script>

  <script type="text/plain" slot="preview-code">
    <style>
      light-preview::part(iframe) {
        height: 80px;
      }
    </style>

    <light-preview base-url="<%= site.config.base_url %>/">
      <script type="text/plain" slot="code">
        <button>Displaying a super cool button</button>
      &lt;/script>
    </light-preview>

    <script type="module">
      import LightPreview from "<%= find_asset "../exports/light-preview.js" %>"
      LightPreview.define()
    &lt;/script>
  </script>
</light-preview>


## Loading inline

<light-preview inline-preview base-url="<%= site.config.base_url %>/">
  <script type="text/plain" slot="code">
    <light-preview inline-preview base-url="<%= site.config.base_url %>/">
      <script type="text/plain" slot="code">
        <style>
          button.button {
            border-color: gray;
          }
        </style>

        <button class="button">Displaying a super cool button not inside an iframe</button>

        <br>
        <p>
          Notice how the button has the same styling as the toggle! That's because its not scoped into an iFrame!
        </p>
      &lt;/script>
    </light-preview>

    <script type="module">
      import LightPreview from "<%= find_asset "../exports/light-preview.js" %>"
      LightPreview.define()
    &lt;/script>
  </script>
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

<light-preview id="additional-buttons" base-url="<%= site.config.base_url %>/">
  <script type="text/plain" slot="code">
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

    <light-preview id="additional-buttons" base-url="<%= site.config.base_url %>/">
      <script type="text/plain" slot="code">
        <div>Showing off more buttons</div>
      &lt;/script>

      <button slot="actions">HTML</button>
      <button slot="actions">Codepen</button>
    </light-preview>

    <script type="module">
      import LightPreview from "<%= find_asset "../exports/light-preview.js" %>"
      LightPreview.define()
    &lt;/script>
  </script>

  <button slot="actions">HTML</button>
  <button slot="actions">Codepen</button>
</light-preview>
