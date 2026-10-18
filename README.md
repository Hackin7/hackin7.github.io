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

Pushes to `main`, and manual runs of the **Deploy to GitHub Pages** workflow (`.github/workflows/deploy.yml`), build the site and deploy it with GitHub Pages Actions. The build job uses Node 22, `npm ci`, and `npm run build`, adds `build/.nojekyll`, and uploads `build/` with `actions/upload-pages-artifact`. The deploy job publishes that artifact with `actions/deploy-pages`.

`HUSKY=0` skips the `prepare` script (`husky install`).

**Settings → Pages → Build and deployment → Source** must be **GitHub Actions**.

The `gh-pages` branch is not the publishing source. `npm run deploy` still pushes a local `build/` to that branch (`touch build/.nojekyll && gh-pages -d build -t true`) and does not update the live site.
