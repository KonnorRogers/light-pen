import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import commonjs from "@rollup/plugin-commonjs"
import serve from "rollup-plugin-serve"

/**
 * @type {import("rollup").RollupOptions[]}
 */
export default [
  {
    output: { dir: '_site' },
    external: [],
    plugins: [
      html({
        input: [
          'index.html',
        ],
        transformHtml: [html => html.replaceAll('%BASE_URL%', process.env.BASE_URL || "http://localhost:4000/_site/")],
      }),
      nodeResolve(),
      commonjs(),
    ],
  },

  {
    output: { dir: '_site/pages' },
    external: [],
    plugins: [
      html({
        input: [
          './pages/**/*.html',
        ],
        transformHtml: [html => html.replaceAll('%BASE_URL%', process.env.BASE_URL || "http://localhost:4000/_site/")],

      }),
      nodeResolve(),
      commonjs(),
      serveBundle()
    ],
  },
  {
    input: ["./exports/light-pen.js", "./exports/light-preview.js"],
    output: { dir: '_site/exports' },
    external: [],
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  }
]

function serveBundle () {
  return serve({
    // Launch in browser (default: false)
    open: true,

    // Page to navigate to when opening the browser.
    // Will not do anything if open=false.
    // Remember to start with a slash.
    openPage: '/_site/index.html',

    // Show server address in console (default: true)
    verbose: false,

    // Folder to serve files from
    // contentBase: '',

    // Multiple folders to serve from
    contentBase: ['.'],

    // Set to true to return index.html (200) instead of error page (404)
    historyApiFallback: false,

    // Path to fallback page
    historyApiFallback: '/200.html',

    // Options used in setting up server
    host: 'localhost',
    port: 4000,

    // By default server will be served over HTTP (https: false). It can optionally be served over HTTPS
    // https: {
    //   key: fs.readFileSync('/path/to/server.key'),
    //   cert: fs.readFileSync('/path/to/server.crt'),
    //   ca: fs.readFileSync('/path/to/ca.pem')
    // },

    //set headers
    headers: {
      'Access-Control-Allow-Origin': '*',
    },

    // execute function after server has begun listening
    onListening: function (server) {
      const address = server.address()
      const host = address.address === '::' ? 'localhost' : address.address
      // by using a bound function, we can access options as `this`
      const protocol = this.https ? 'https' : 'http'
      console.log(`Server listening at ${protocol}://${host}:${address.port}/`)
    }
  })
}
