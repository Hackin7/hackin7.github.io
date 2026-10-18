# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Publish to GitHub Pages

Pushes to `main`, and manual runs of the **Deploy to GitHub Pages** workflow (`.github/workflows/deploy.yml`), install with `npm ci`, run `vite build`, add `build/.nojekyll`, and publish `build/` to the `gh-pages` branch. GitHub Pages serves that branch.

The workflow sets `HUSKY=0` so the `prepare` script (`husky install`) is skipped. A manual publish still uses the `deploy` script:

```bash
npm run build
npm run deploy
```

That script runs `touch build/.nojekyll && gh-pages -d build -t true`.

Before the first automatic deploy, check:

- **Settings → Actions → General → Workflow permissions** is **Read and write permissions**. The workflow pushes `gh-pages` with `GITHUB_TOKEN`, which needs write access.
- **Settings → Pages → Build and deployment → Source** is **Deploy from a branch**, branch `gh-pages`, folder `/`.

Commits pushed with `GITHUB_TOKEN` do not start a Pages build. If a run is green and `gh-pages` moved but the live site did not, switch **Pages → Source** to **GitHub Actions** and publish with `actions/upload-pages-artifact` plus `actions/deploy-pages` (`permissions: pages: write` and `id-token: write`).
