# pauleburlon.github.io

Personal academic website, plain HTML on GitHub Pages.

Styled with **Raw**, a small design system: `assets/css/tokens.css` and `assets/css/fonts.css` (the design system's `css/tokens.css` and `css/fonts.css`), `assets/css/raw.css` (its `components/bundle.css`, unchanged) and `assets/css/site.css` (site-only additions). To update Raw, copy those files over from the design system. Fonts: Charter and a small supplement, see `assets/fonts/LICENSES.md`.

The footer stamp (commit and build date) is filled in by GitHub Pages' Jekyll build; opened locally, it shows the raw `{{ }}` tags.

When you change a CSS file, bump the `?v=` number on the four stylesheet links in each page, so browsers don't keep an old copy for up to 10 minutes.
