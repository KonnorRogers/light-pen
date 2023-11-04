---
title: <light-editor>
permalink: /components/light-editor/
component: light-editor
---

<light-editor style="display: none;"></light-editor>

<light-preview inline-preview>
  <template slot="code">
    <light-editor value="<div>Hello World!</div>">
    </light-editor>
  </template>
</light-preview>

## With a template

<light-preview inline-preview>
  <template slot="code">
    <light-editor>
      <template>
        <div>
          <div>Hello World</div>
          <div>What's up dude</div>
        </div>

        <template>
          A template in a template?!!?!?
        </template>

        This is madness!!
      </template>
    </light-editor>
  </template>
</light-preview>

## Changing the language

<light-preview inline-preview>
  <template slot="code">
    <light-editor language="css">
      <template>
        html, body {
          min-height: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
        }

        light-pen {
          height: 100%;
        }
      </template>
    </light-editor>
  </template>
</light-preview>
