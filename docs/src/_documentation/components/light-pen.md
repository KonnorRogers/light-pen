---
title: <light-pen>
permalink: /components/light-pen/
component: light-pen
---

## Typical Usage

<light-pen style="padding: 8px; height: 100%;" resize-position="30" open-languages="js,html,css">
  <script type="text/plain" slot="html">
    <light-pen>
      <script type="text/plain" slot="html">
        <div>
          This is kind of wild huh? We have a <code>&lt;light-pen&gt;</code>
          component running inside of a <code>&lt;light-pen&gt;</code> component!!
        </div>
      &lt;/script>

      <script type="text/plain" slot="css">
        code {
          padding: 2px 6px;
          display: inline-block;
          font-size: 0.9em;
          background-color: rgba(0,0,0,0.05);
          border-radius: 4px;
        }
      &lt;/script>
    </light-pen>
  </script>

  <script type="text/plain" slot="css">
    html, body {
      height: 100%;
      min-height: 100%;
      width: 100%;
      margin: 0;
    }

    light-pen {
      height: 100%;
    }
  </script>

  <script type="text/plain" slot="js">
    import LightPen from "./exports/light-pen.js";

    LightPen.define()
  </script>
</light-pen>
