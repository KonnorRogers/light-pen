import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import commonjs from "@rollup/plugin-commonjs"

/**
 * @type {import("rollup").RollupOptions[]}
 */
export default [
  {
    output: { dir: '_site' },
    plugins: [
      html({
        input: [
          'index.html',
        ]

      }),
      nodeResolve(),
      commonjs(),
    ],
  },

  {
    output: { dir: '_site/pages' },
    plugins: [
      html({
        input: [
          './pages/**/*.html',
        ],
        transformHtml: [html => html.replaceAll('%BASE_URL%', process.env.BASE_URL)],

      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: ["./exports/light-pen.js", "./exports/light-preview.js"],
    output: { dir: '_site/exports' },
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  }
]
