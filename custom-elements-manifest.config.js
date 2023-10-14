// @ts-check

// import { defaultCompilerOptions } from './compilerOptions.js';
// import { myPlugin } from './my-plugin.js';
// import { expandTypes } from './expandTypes'
// import ts from "typescript"

// let typeChecker = null

export default {
  /** Globs to analyze */
  globs: ['./exports/**/*.js', './internal/**/*.js', './types/**/*.d.ts'],
  /** Globs to exclude */
  exclude: ['./node_modules', './docs'],
  /** Directory to output CEM to */
  outdir: '.',
  /** Run in dev mode, provides extra logging */
  dev: process.argv.includes("--verbose"),
  /** Run in watch mode, runs on file changes */
  watch: process.argv.includes("--watch"),
  /** Include third party custom elements manifests */
  dependencies: true,
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
  // overrideModuleCreation: ({globs}) => {
  //   const program = ts.createProgram(globs, {target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext, allowJs: true, checkJs: true});
  //   typeChecker = program.getTypeChecker();
  //
  //   return program.getSourceFiles().filter(sf => globs.find(glob => sf.fileName.includes(glob)));
  // },
  /** Provide custom plugins */
  // plugins: [
  //   /** You can now pass the typeChecker to your plugins */
  //   expandTypes(typeChecker)
  // ],
}
