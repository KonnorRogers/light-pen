// @ts-check
import ts from 'typescript'
import path from "path";
import { expandTypesPlugin } from "cem-plugin-expanded-types"

export default {
  /** Globs to analyze */
  globs: ['exports/**/*.js', 'internal/**/*.js', 'types/**/*.d.ts'],
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
    expandTypesPlugin()
  ],

  overrideModuleCreation: ({ts, globs}) => {
    const configFile = ts.findConfigFile(
      process.cwd(),
      ts.sys.fileExists,
      "tsconfig.json"
    );

    if (!configFile) throw "No tsconfig found."

    const { config } = ts.readConfigFile(configFile, ts.sys.readFile);

    const {options, errors} = ts.convertCompilerOptionsFromJson(config.compilerOptions, ".");

    const program = ts.createProgram(globs, options);

    const typeChecker = program.getTypeChecker()

    return program
      .getSourceFiles()
      .filter((sf) => globs.find((glob) => {
        return sf.fileName.includes(glob)
      }))
  },
}
