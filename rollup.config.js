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
          './pages/**/*.html'
        ]

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
