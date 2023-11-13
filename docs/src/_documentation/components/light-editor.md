---
title: <light-editor>
permalink: /components/light-editor/
component: light-editor
---

<light-editor style="display: none;"></light-editor>

<light-preview inline-preview>
  <template slot='code'>
    <light-editor>
      <template>
        <div>Hello World!</div>fwkfwjkfjkwfjkwefjkefkjewfkjewfkjewfkjefkjewkjfewjkfewjkfewjkfewkjfekwjfjewfjekwfkjewfjekwfkejfjkewjkfwejkfwjk
        kjwjkfwfkjwfkjfkjwefwjkf
        2jkrjkwjkrfw
        wfjkwjfkwfjkw
        wjfwkjfwjkf
        2jkrjkwjkrfw
        wfjkwjfkwfjkw
        wjfwkjfwjkf
        2jkrjkwjkrfw
        wfjkwjfkwfjkw
        wjfwkjfwjkf
        2jkrjkwjkrfw
        wfjkwjfkwfjkw
        wjfwkjfwjkf
      </template>
    </light-editor>
  </template>
</light-preview>


<light-preview inline-preview>
  <template slot="code">
    <light-editor value="<div>Hello World!</div>">
    </light-editor>
  </template>
</light-preview>

## With a template

We can use a `<template>` tag to be able to "slot" in values.

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

## Changing the highlight language to CSS

By default, the highlighter from Highlight.js only supports HTML / CSS / JS.
This is intentional to keep the bundle size low.

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
