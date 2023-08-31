## Initial install

```bash
mkdir -p my-project-name
cd my-project-name
git clone https://github.com/konnorrogers/npm-starter . --depth 1
rm -rf .git
git init
pnpm install -D @web/test-runner @open-wc/testing-helpers @web/test-runner-playwright typescript rimraf
```

## Structure

`exports/` is publicly available files
`internal/` is...well...internal.

`exports` and `internal` shouldn **NOT** write their own `.d.ts` that are co-located.

`types/` is where you place your handwritten `.d.ts` files.
