import { readdirSync } from 'fs'
import * as process from "process"
import * as path from "path"

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)


export default function (plop) {
  const componentPrefix = "light-"

  function tagWithoutPrefix (tag) {
    return tag.replace(new RegExp(`^${componentPrefix}`), '')
  }

  function tagToTitle (tag) {
    const withoutPrefix = plop.getHelper('tagWithoutPrefix');
    const titleCase = plop.getHelper('titleCase');
    return titleCase(withoutPrefix(tag).replace(/-/g, ' '));
  }

  plop.setHelper('tagWithoutPrefix', tagWithoutPrefix);
  plop.setHelper('tagToTitle', tagToTitle);

  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'tag',
        message: `Tag name? (e.g. ${componentPrefix}button)`,
        validate: value => {
          // Start with light- and include only a-z + dashes
          const regex = new RegExp(`^${componentPrefix}[a-z-+]+`)

          if (!(regex.test(value))) {
            console.error(`Tag must start with ${componentPrefix}`)
            return false;
          }

          // No double dashes or ending dash
          if (value.includes('--') || value.endsWith('-')) {
            return false;
          }

          return true;
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../exports/components/{{ tag }}/{{ tag }}-register.js',
        templateFile: 'templates/component-register.hbs'
      },
      {
        type: 'add',
        path: '../../exports/components/{{ tag }}/{{ tag }}-globals.ts',
        templateFile: 'templates/component-globals.hbs'
      },
      {
        type: 'add',
        path: '../../exports/components/{{ tag }}/{{ tag }}.js',
        templateFile: 'templates/component.hbs'
      },
      {
        type: 'add',
        path: '../../exports/components/{{ tag }}/{{ tag }}.styles.js',
        templateFile: 'templates/component-styles.hbs'
      },
      {
        type: 'add',
        path: '../../tests/{{ tag }}.test.js',
        templateFile: 'templates/component-tests.hbs'
      },
      {
        type: 'add',
        path: '../../docs/src/_documentation/components/{{ tag }}.md',
        templateFile: 'templates/component-docs.hbs'
      },
      {
        type: "modify",
        path: "../../exports/index.js",
        transform(fileContents, data) {
          const properCase = plop.getHelper("properCase")
          const directories = getDirectories(path.resolve(process.cwd(), "exports", "components"))
          const contents = directories.sort().map((directoryName) => {
            // const componentPath = tagWithoutPrefix(directoryName)
            const componentPath = directoryName
            return `export { default as ${properCase(directoryName)} } from "./components/${componentPath}/${componentPath}-register.js"`
          })
          return contents.join("\n")
        },
      }
    ]
  });
}
