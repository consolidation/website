# Robo website

Source of [robo.li](https://robo.li/), the documentation website for
[Robo](https://github.com/consolidation/robo), a modern and simple PHP task runner.

The site is a static [VitePress](https://vitepress.dev/) site. On every push to
`main`, GitHub Actions builds it and publishes it to the `gh-pages` branch, which
GitHub Pages serves under the `robo.li` domain. The deployed site also hosts the
downloadable `robo.phar` at <https://robo.li/robo.phar>.

## Repository layout

```
docs/                     Markdown sources of the site
  index.md                Landing page
  getting-started.md      User guide
  collections.md          Collection builders, rollbacks, temporary objects
  extending.md            Writing and including task extensions
  framework.md            Using Robo as a framework for your own CLI app
  links.md                Plain index of all documentation pages
  tasks/*.md              Reference for the built-in task groups
  public/                 Static assets copied as-is (favicons, logo)
  .vitepress/config.ts    Site config: navigation, sidebar, search, footer
  .vitepress/theme/       Default theme plus custom brand colours
release/robo.phar         Robo release served at https://robo.li/robo.phar
.github/workflows/        Build-and-deploy workflow and Dependabot config
```

## Requirements

- Node.js 22 (the version CI uses; newer versions also work)
- npm

## Building locally

Install the dependencies exactly as pinned in `package-lock.json`:

```sh
npm ci
```

Start the development server with hot reload (it serves at http://localhost:5173 by default):

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

The output is written to `docs/.vitepress/dist/`. To preview the production build locally:

```sh
npm run preview
```

## Deployment

`.github/workflows/build.yml` runs on every push to `main` and on every pull request:

1. `npm ci` and `npm run build`
2. Writes a `CNAME` file (`robo.li`) into `docs/.vitepress/dist/`
3. Copies `release/robo.phar` into `docs/.vitepress/dist/`
4. Only on `main`: force-pushes `docs/.vitepress/dist/` to the `gh-pages` branch

Pull requests therefore only check that the site builds.

To publish a new Robo phar on the site, replace `release/robo.phar` and merge the change into `main`.

## Editing content

- Pages are plain Markdown under `docs/`. VitePress fails the build on dead
  internal links, so run `npm run build` before you open a pull request.
- When you add a page, also add it to `nav` and `sidebar` in
  `docs/.vitepress/config.ts`, and to `docs/links.md`.
- The pages under `docs/tasks/` mirror the task documentation in the
  [Robo repository](https://github.com/consolidation/robo), which generates
  them from the task classes' docblocks. Fix errors there as well, or the next
  regeneration will bring them back.
