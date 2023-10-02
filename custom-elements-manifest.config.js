// @ts-check
// import { myAwesomePlugin } from 'awesome-plugin';
// import ts from 'typescript'

export default {
  /** Globs to analyze */
  globs: ['./{exports,types,internal}/**/*.{ts,js}'],
  /** Globs to exclude */
  exclude: ['./node_modules', './docs'],
  /** Directory to output CEM to */
  outdir: '.',
  /** Run in dev mode, provides extra logging */
  dev: process.argv.includes("--verbose"),
  /** Run in watch mode, runs on file changes */
  watch: process.argv.includes("--watch"),
  /** Include third party custom elements manifests */
  dependencies: false,
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: true,
  /** Enable special handling for litelement */
  litelement: true,
  /** Enable special handling for catalyst */
  catalyst: false,
  /** Enable special handling for fast */
  fast: false,
  /** Enable special handling for stencil */
  stencil: false,
  /** Provide custom plugins */
  plugins: [
    // myAwesomePlugin()
  ],

  /** Overrides default module creation: */
  // overrideModuleCreation: ({ts, globs}) => {
  //   /**
  //    * @type {import("typescript")}
  //    */
  //   const typescript = ts
  //
  //   const program = typescript.createProgram(globs, {});
  //   // const typeChecker = program.getTypeChecker();
  //
  //
  //   return program.getSourceFiles().filter(sf => globs.find(glob => sf.fileName.includes(glob)));
  // },
}
