---
title: Getting Started
permalink: /guides/getting-started/
---

## Installation

```bash
npm install light-pen
```

## Usage

```js
// entrypoint.js
import "light-pen"
```

```html
<!-- Your HTML file -->
<light-pen>
  <template slot="html">
    <!-- HTML -->
  </template>

  <template slot="css">
    <!-- CSS -->
  </template>

  <template slot="js">
    <!-- JS -->
  </template>
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
