# pauleburlon.github.io

Personal academic website, plain HTML on GitHub Pages.

Styled with **Raw**, a small design system: `assets/css/tokens.css` (colours, type, spacing — generated from the design system's tokens), `assets/css/raw.css` (the element styles, unchanged from the design system) and `assets/css/site.css` (site-only additions). Fonts: Charter and a small supplement, see `assets/fonts/LICENSES.md`.

The footer stamp (commit and build date) is filled in by GitHub Pages' Jekyll build; opened locally, it shows the raw `{{ }}` tags.

When you change a CSS file, bump the `?v=` number on the three stylesheet links in each page, so browsers don't keep an old copy for up to 10 minutes.
