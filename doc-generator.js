// @ts-check
import ts from "typescript";
import { globSync } from "glob";
import * as fs from "fs";
import path from "path";

/** @typedef {{
  name?: string;
  fileName?: string;
  documentation?: string;
  type?: string;
  constructors?: DocEntry[];
  parameters?: DocEntry[];
  returnType?: string;
}} DocEntry */

// Build a program using the set of root file names in fileNames
// let program = ts.createProgram(fileNames, options);

const configPath = ts.findConfigFile(
  /*searchPath*/ "./",
  ts.sys.fileExists,
  "tsconfig.json"
);

const compilerOptions = JSON.parse(fs.readFileSync(/** @type {string} */ (configPath), { encoding: "utf-8" }))

const rootNames = globSync("./exports/**/*.js").map(str => path.resolve("./", str))

// console.log({
//   compilerOptions,
//   configPath
// })
let program = ts.createProgram({
  rootNames,
  options: compilerOptions,
})

/**
 * Generate documentation for all classes in a set of .ts files
 * @param {string[]} fileNames
 * @param {ts.CompilerOptions} options
 * @return {void}
 */

/** */
function generateDocumentation() {
  /**
   * visit nodes finding exported classes
   * @param {ts.Node} node
   */
  function visit(node) {
    // Only consider exported nodes
    if (!isNodeExported(node)) {
      return;
    }

    if (ts.isClassDeclaration(node) && node.name) {
      // This is a top level class, get its symbol
      let symbol = checker.getSymbolAtLocation(node.name);
      if (symbol) {
        output.push(serializeClass(symbol));
      }
      // No need to walk any further, class expressions/inner declarations
      // cannot be exported
    } else if (ts.isModuleDeclaration(node)) {
      // This is a namespace, visit its children
      ts.forEachChild(node, visit);
    }
  }

  /**
   * Serialize a symbol into a json object
   * @param {ts.Symbol} symbol
   * @return {DocEntry}
   */
  function serializeSymbol(symbol) {
    return {
      name: symbol.getName(),
      documentation: ts.displayPartsToString(symbol.getDocumentationComment(checker)),

      type: checker.typeToString(
        checker.getTypeOfSymbolAtLocation(symbol, /** @type {ts.Declaration} */ (symbol.valueDeclaration))
      )
    };
  }

  /**
   * Serialize a class symbol information
   * @param {ts.Symbol} symbol
   */
  function serializeClass(symbol) {
    let details = serializeSymbol(symbol);

    // Get the construct signatures
    let constructorType = checker.getTypeOfSymbolAtLocation(
      symbol,
      /** @type {ts.Declaration} */ (symbol.valueDeclaration)
    );
    details.constructors = constructorType
      .getConstructSignatures()
      .map(serializeSignature);
    return details;
  }

  /**
   * Serialize a signature (call or construct)
   * @param {ts.Signature} signature
   */
  function serializeSignature(signature) {
    return {
      parameters: signature.parameters.map(serializeSymbol),
      returnType: checker.typeToString(signature.getReturnType()),
      documentation: ts.displayPartsToString(signature.getDocumentationComment(checker))
    };
  }

  /**
   * True if this is visible outside this file, false otherwise
   * @param {ts.Node} node
   * @return {boolean}
   */
  function isNodeExported(node) {
    return (
      (ts.getCombinedModifierFlags(/** @type {ts.Declaration} */ (node)) & ts.ModifierFlags.Export) !== 0 ||
      (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
    );
  }
  // Get the checker, we will use it to find more about classes
  let checker = program.getTypeChecker();
  /** @type {DocEntry[]} */
  let output = [];

  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree to search for classes
      ts.forEachChild(sourceFile, visit);
    }
  }

  // print out the doc
  fs.writeFileSync("classes.json", JSON.stringify(output, undefined, 4));

  return;
}

generateDocumentation()
