# Light(weight) Code(Pen)

## Install

```
npm install light-pen
```

## Getting started

```js
// Auto-register <light-pen>
import "light-pen"

// Registry yourself
import LightPen "light-pen/exports/light-pen.js"

LightPen.define() // Registers `<light-pen>`

// Register under another name
import LightPen "light-pen/exports/light-pen.js"
LightPen.define("other-name")
```

## Usage

```html
<light-pen></light-pen>
```

That's it!


### Slotting in HTML / CSS / JS

```html
<light-pen>
  <template slot="html">
    <div style="color: red;">
      <div>Hi there friends</div>
    </div>

    <p>
      Sup dude
    </p>
  </template>

  <template slot="css">
    p {
      color: green;
    }
  </template>

  <template slot="js">
    console.log("Hi")
  </template>
</light-pen>
```

### Changing the title

```html
<light-pen>
  <div slot="title">My Awesome Editor</div>
</light-pen>
```

More to come for more docs coming on how to change things!

## Roadmap

- [ ] - Implement an extendable `LightPenBase` which includes a pluggable syntax highlighter and theme.
- [ ] - Implement `<textarea>` rendering hooks to add CodeMirror for more robuster setups.
- [ ] - Add vertical resizing of `<textarea>`
- [ ] - More documentation around customization.
- [ ] - Add a console logger
