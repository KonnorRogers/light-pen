## Next

### Features

- Feature(light-disclosure): Added `noAnimation` / `no-animation` property & attribute respectively to turn off disclosure animations.
- Feature(light-pen): Added re-exported parts for the `<light-disclosure>` which contains html / css / js respectively.

### Bug fixes

- Bug Fix(light-disclosure): Now properly renders on connect in the "open" state.
- Bug Fix(light-pen): Now properly renders disclosures in the `open`

### Deprecations

- Deprecation(light-pen) - `light-pen::part(disclosure-${language})` have been deprecated in favor of `light-pen::part(sandbox-disclosure-${language})` respectively. `disclosure-${language}` will be removed in the next major version as its superseded by `sandbox-disclosure-${language}`. `::part(disclosure)` will remain to be able to target all disclosures.

## 4.3.0 - 07/04/2025

- Security Fix(light-pen / light-preview): Previously, `<iframe>` in these 2 components could reach the parent. With this fix, it now has a default set of sandbox settings as follows: `allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-scripts`
- Bug Fix(light-editor): Fixed a bug with grid setup for soft wrapping
- Feature(light-preview): Added support for `src` attribute for external URLs.

## 4.2.6 - 05/02/2025

- Bug Fix(light-code): Fixed a bug with soft wrapping in light-code
- Bug Fix(light-editor): Fixed a synchronization bug between light-code and light-editor's textarea

## 4.2.5 - 03/11/2025

- Bug Fix(light-editor): Fixed a bug where cursors appeared wrong in `<light-editor>`

## 4.2.4 - 03/07/2025

- Fixed a bug in Safari for being able to select line numbers

## 4.2.3 - 03/07/2025

- Fixed a bug in `dedent` improperly flagging multiple new lines.

## 4.2.1 - 01/02/2025

- Bug Fix(light-code): Fixed lines not spanning the full width of the grid.

## 4.2.1 - 01/02/2025

- Bug Fix(light-code): Make `dedent` from slotted tags not suck [#]

## 4.2.0 - 11/04/2024

- Styles(light-code): Default line wrapping of `<light-code>` is now `"hard"`

## 4.1.1 - 11/03/2024

- Bug Fix(light-preview): Fixed a bug in Safari with vertical resizing.

## 4.1.0 - 08/03/2024

- Feature(light-preview): Added the `after-actions`, `above-expanded-code`, and `after-expanded-code` slots and parts. [#24]
- Bug Fix(light-preview): now properly listens to changes to `unescapeBehavior` / `unescape-behavior` [#24]
- Bug Fix(light-editor): Properly insert new lines. [#25]

## 4.0.0 - 08/01/2024

- BREAKING_CHANGE: All components are now scoped under `exports/components/<component-name>/<component-name>.js`

## v3.1.2 - 07/18/2024

- Bug Fix(light-code): `wrap="none"` properly renamed to `wrap="hard"` [#22](https://github.com/KonnorRogers/light-pen/pull/22)
- Bug Fix(light-code): Fixes wrapping in light-editor, and adjusts the `wrap` values to align with `<light-pen>` [#22](https://github.com/KonnorRogers/light-pen/pull/22)
- Bug Fix(light-code) Line highlights now work properly when using `wrap="hard"` [#22](https://github.com/KonnorRogers/light-pen/pull/22)
- Bug Fix(light-code): Added cursor syncing due to line numbers obstructing view of text [#22](https://github.com/KonnorRogers/light-pen/pull/22)

## v3.1.1 - 06/01/2024

- Bug Fix(light-code): Fixed a bug that caused LineNumberPlugin to run before the Prism `afterTokenize` hooks.

- Styles(light-code): `<light-code>` refactored to use CSS variables for easier initial styling.

- Dependencies: Upgraded Lit and `form-associated-helpers`

## v3.1.0 - 05/28/2024

- Feature: Add `src` attribute for loading remote content into `<light-editor>`
- Feature: Added `highlighter` property to `<light-code>`, `<light-preview>`, and `<light-editor>` for customizing the Prism instance.

- Bug Fix: `required` is not a proper boolean on `<light-editor>`

- Styles(light-code): `<light-code>` (and `<light-preview>` / `<light-editor>`) got updates to their default theme and now have a number of syntax tokens to use for easy themeing.

- Docs: Added documentation on how to extend the Prism instance.

## v3.0.6 - 04/04/2024

- Bug Fix: `<light-editor>` now properly scrolls. [#15](https://github.com/KonnorRogers/light-pen/pull/15)

## v3.0.5 - 04/04/2024

- Bug Fix: gutter now behaves appropriately when scrolling on `wrap="hard"` [#14](https://github.com/KonnorRogers/light-pen/pull/14)

## v3.0.4 - 03/31/2024

- Bug Fix: No longer wipe away state when resizing a `<light-preview>` [#13](https://github.com/KonnorRogers/light-pen/pull/13/files)

## v3.0.3 03/28/2024

- Bug Fix: Fixed `gutter` in `<light-code>` not extending the entire height of the element.
- Bug Fix: Make `<iframe>` max-width: 100%; so it doesn't overflow preview container.

## v3.0.2 - 03/11/2024

- Styles: `overflow: auto;` moved to `[part~="base"]` in `<light-preview>`
- Bug Fix: `disable-highlight` and `disable-line-numbers` now works as expected in `<light-preview>`
- Bug Fix: `<light-preview>` fixes `unescapeBehavior` attribute to `unescape-behavior`
- Bug Fix: `<light-code>` now properly supports `wrap="hard"`.

## v3.0.1 - 02/27/2024

- Bug Fix: Properly add `sandbox-settings` for `<light-preview>` and `<light-pen>`

## v3.0.0 - 02/26/2024

Bug Fix: `<light-preview>` now correctly passes the `wrap` property down to `<light-code>`

## v3.0.0 - 02/27/2024

- BREAKING_CHANGE: The default entrypoint now registers all elements.
- BREAKING_CHANGE: `previewCode` has changed to `previewHtml` property and `preview-html` attribute for `<light-preview>`.
- Feature: Added `lineNumberStart` for counting indexes starting at a specific number.
- Feature: `code` and `preview-code` attributes are now supported on `<light-preview>`
- Feature: Added `<light-code>` for displaying code.
- Feature: Added line numbers to all code displays.
- Bug Fix: `<script>` tags now properly execute inside of `<light-preview>` and have the scope of their shadow dom bound.
- Improvement: `<light-editor>`, `<light-code>`, and `<light-preview>` all use `<light-code>` internally now.
- Improvement: Use declarative shadow DOM and fallback to polyfill in `<light-preview>`

## v2.3.1 - 02/13/2024

- Update form associated package

## v2.3.0 - 02/13/2024

- Added form association to `<light-editor>`
- Added `wrap="soft | hard"` to `<light-preview>` and `<light-editor>`
- Added `preserve-whitespace` to the `<light-pen>` to pass down to `<light-editor>`
- `<light-preview>` now properly creates a second level shadow dom so the preview's shadow dom styles don't leak.

## v2.2.0 - 12/03/2023

- Switch to a `Prism` fork to play nicely with ESM and allow testing.

## v2.1.0

- Added `initialValue` to the `<light-editor>` to allow for resetting the form input.
- Fixed a bug where we would have Prism running automatically.
- Fixed a bug where `<light-pen>` was no resetting to initial values.

## v2.0.0

- BREAKING_CHANGE: Renamed `inline-preview` to `preview-mode` for `<light-preview>` with options of `"iframe"` or `"shadow-dom"`
- BREAKING_CHANGE: Changed underlying highlighting library from Highlight.JS to PrismJS
- BREAKING_CHANGE: `<light-editor>` and `<light-preview>` No longer attempt to escape / unescape characters in editors and previews.
- BREAKING_CHANGE: `<light-preview>` has renamed `highlightLanguage` property to `language`. `highlight-language` attribute has been renamed to `language`.
- Added `<light-disclosure>`

## v1.2.0

- Added `<light-editor>`
- `<light-pen>` now uses `<light-editor>` under the hood. A number of parts have been moved around for the editor.

## v1.1.2

- Don't use `src` or `srcdoc`, return to using `iframe.contentWindow.writeln(content)` due to fixing
  some CORS bugs.

## v1.1.0

- A number of fixes including allowing `<template>` elements to be slotted into `<light-pen>` and `<light-preview>`

## v1.0.2

- fix: issues with `&gt;` and `&lt;`

## v1.0.1

- fix: allow any HTML Element for templating
