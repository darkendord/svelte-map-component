# Important notes.

This project is part of a job application process and was build mainly on Svelte, TailWind and CSS.
Here I implement a map UI which dynamically shows the location of the componets on the left of the scree, reprecenting realstate rentals.

The locations pinned on the map are clickable and popup the realstate info, based on the data passed between components trough Svelte store

## To the hiring team:

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
