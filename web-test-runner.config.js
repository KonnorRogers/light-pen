import { playwrightLauncher } from '@web/test-runner-playwright';
// import { esbuildPlugin } from '@web/dev-server-esbuild';

/** @type {import("@web/test-runner").TestRunnerConfig} */
export default {
  rootDir: '.',
  files: ['./tests/**/*.test.js'], // "default" group
  concurrentBrowsers: 3,
  nodeResolve: true,
  testFramework: {
    config: {
      ui: 'tdd',
      timeout: 3000,
      retries: 1
    }
  },
  plugins: [

  ],
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      launchOptions: {
        headless: Boolean(process.env.DEBUG)
      }
    }),
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'webkit' })
  ],
  testRunnerHtml: testFramework => `
    <html lang="en-US">
      <head></head>
      <body>
        <script>
          window.process = {env: { NODE_ENV: "production" }}
        </script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>
  `,
}
