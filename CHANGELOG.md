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
