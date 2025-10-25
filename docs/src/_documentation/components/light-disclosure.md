---
title: <light-disclosure>
permalink: /components/light-disclosure/
component: light-disclosure
---

## Typical Usage

<light-disclosure style="display: none;"></light-disclosure>

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-disclosure summary="Source Code">
      <code style="background-color: rgba(0,0,0,0.1);">export const x = "hi"</code>
    </light-disclosure>
  </template>
</light-preview>


## Rendering already open

If you want the preview to be rendered in an already open state, you can pass an `open` boolean attribute. This will disable the animation on first connect, and then re-enable animations on subsequent changes to `open`.

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-disclosure summary="Source Code" open="">
      <code style="background-color: rgba(0,0,0,0.1);">export const x = "hi"</code>
    </light-disclosure>
  </template>
</light-preview>


## Disabling animation

Open / close animations can be completely disabled with `no-animation` boolean attribute.

<light-preview preview-mode="shadow-dom">
  <template slot="code">
    <light-disclosure summary="Source Code" no-animation>
      <code style="background-color: rgba(0,0,0,0.1);">export const x = "hi"</code>
    </light-disclosure>
  </template>
</light-preview>



