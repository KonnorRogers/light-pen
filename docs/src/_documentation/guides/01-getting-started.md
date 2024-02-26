---
title: Getting Started
permalink: /guides/getting-started/
---

## Installation

```bash
npm install light-pen

# If supporting older browsers
npm install element-internals-polyfill
```

## NPM Usage

```js
// entrypoint.js
import "element-internals-polyfill" // Optional polyfill for ElementInternals() for older browsers.
import "light-pen"
```

## CDN usage

```html
<script type="module">
  import "https://esm.run/element-internals-polyfill"
  import "https://esm.run/light-pen"

  // Loading a version range. This will load the latest >= 3 and < 4 of light-pen.
  import "https://esm.run/light-pen@^3.0.0"

  // Loading a specific version. This will only load v3.0.0
  import "https://esm.run/light-pen@3.0.0"
</script>
```

```html
<!-- Your HTML file -->
<light-pen>
  <script type="text/plain" slot="html">
    <!-- HTML -->
  </script>

  <script type="text/plain" slot="css">
    <!-- CSS -->
  </script>

  <script type="text/plain" slot="js">
    <!-- JS -->
  </script>
</light-pen>
```

## Polyfills

<%= render Alert.new(type: :danger) do %>
  This library makes use of [ElementInternals](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals)
  for "Form Association". If you support older browsers, it's recommended you download the [element-internals-polyfill](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals).


  <https://caniuse.com/?search=element%20internals>
<% end %>

For additional components and how to use them, check out their component pages.

<!-- <%%= component_list %> -->
