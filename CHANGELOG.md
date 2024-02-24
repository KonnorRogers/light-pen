## Next

- Feature: Added `<light-code>` for displaying code.
- Feature: Added line numbers to all code displays.
- Bug Fix: `<script>` tags now properly execute inside of `<light-preview>` and have the scope of their shadow dom bound.
- Improvement: `<light-editor>`, `<light-code>`, and `<light-preview>` all use `<light-code>` internally now.
- Improvement: Use declarative shadow DOM and fallback to polyfill in `<light-preview>`


## 2.3.1 02/13/2024

- Update form associated package

## 2.3.0 02/13/2024

- Added form association to `<light-editor>`
- Added `wrap="soft | hard"` to `<light-preview>` and `<light-editor>`
- Added `preserve-whitespace` to the `<light-pen>` to pass down to `<light-editor>`
- `<light-preview>` now properly creates a second level shadow dom so the preview's shadow dom styles don't leak.

## 2.2.0 12/03/2023

- Switch to a `Prism` fork to play nicely with ESM and allow testing.

## 2.1.0

- Added `initialValue` to the `<light-editor>` to allow for resetting the form input.
- Fixed a bug where we would have Prism running automatically.
- Fixed a bug where `<light-pen>` was no resetting to initial values.

## 2.0.0

- BREAKING_CHANGE: Renamed `inline-preview` to `preview-mode` for `<light-preview>` with options of `"iframe"` or `"shadow-dom"`
- BREAKING_CHANGE: Changed underlying highlighting library from Highlight.JS to PrismJS
- BREAKING_CHANGE: `<light-editor>` and `<light-preview>` No longer attempt to escape / unescape characters in editors and previews.
- BREAKING_CHANGE: `<light-preview>` has renamed `highlightLanguage` property to `language`. `highlight-language` attribute has been renamed to `language`.
- Added `<light-disclosure>`

## 1.2.0

- Added `<light-editor>`
- `<light-pen>` now uses `<light-editor>` under the hood. A number of parts have been moved around for the editor.

## 1.1.2

- Don't use `src` or `srcdoc`, return to using `iframe.contentWindow.writeln(content)` due to fixing
some CORS bugs.

## 1.1.0

- A number of fixes including allowing `<template>` elements to be slotted into `<light-pen>` and `<light-preview>`

## 1.0.2

- fix: issues with `&gt;` and `&lt;`

## 1.0.1

- fix: allow any HTML Element for templating
