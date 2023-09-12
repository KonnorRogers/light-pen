import rollupCommonjs from '@rollup/plugin-commonjs';
import { fromRollup } from '@web/dev-server-rollup';

const commonjs = fromRollup(rollupCommonjs)

const corsPlugin = () => {
  return {
    name: 'my-plugin',
    transform(context) {
      context.set('Access-Control-Allow-Origin', '*');
    }
  }
}

/** @type {import("@web/dev-server").DevServerConfig} */
export default {
  rootDir: '.',
  nodeResolve: true,
  open: true,
  http2: true,
  watch: process.argv.includes("--watch"),
  plugins: [
    corsPlugin(),
    commonjs(),
  ]
}
