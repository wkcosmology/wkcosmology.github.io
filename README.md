# Structure of the project

This is a static site (no build step for the pages themselves) with two kinds
of pages: the `main pages` (sticky top nav, dark theme) and the `blog pages`
(hover-reveal table-of-contents rail, light theme).

-   `index.html`: the homepage — doubles as the About page (bio, experience,
    education, contact)
-   `partials/`
    -   `topnav.html`: shared top-nav markup, fetched client-side by
        `js/sidebar.js` and injected into every main page
-   `about/`
    -   `research.html`: research interests
    -   `publication.html` / `publication.toml`: publication list; the page
        holds only the section scaffolding, entries live in the `.toml` file
        and are parsed and rendered client-side by `js/publication.js`
    -   `resource.html` / `resource.json`: a "resources" page (currently not
        linked from the nav)
    -   `CV.pdf`
-   `presentation/`
    -   `pre_index.html` / `presentation.toml`: talks/seminars list, same
        page-scaffolding + data-file pattern as publication, rendered by
        `js/presentation.js`
-   `blog/`
    -   `blog_index.html`: the blog's landing page (year/category/tag filters)
    -   `blog_header.html`: HTML template used to wrap each generated post
    -   `blog_sidebar.html`: template for the per-post table-of-contents rail
    -   `blog_meta.json`: generated metadata for every post (title, path,
        date, table of contents) — written by `scripts/generate_md.js`
    -   `md/`: **source of truth** — write new posts here as Markdown
    -   `html/`: generated output — one full HTML page per post, produced by
        `scripts/generate_md.js`; do not hand-edit
    -   `image/`: images referenced by blog posts
-   `css/`
    -   `styles.css`: styles for the main pages (top nav, About, Research,
        Publication, Presentation), also shared by the blog pages
    -   `blog_styles.css`: styles specific to the blog pages
    -   `font/`: self-hosted font files used by `styles.css`
-   `js/` — browser-loaded scripts
    -   `sidebar.js`: fetches and injects `partials/topnav.html` into main
        pages, and the blog header/table-of-contents into blog pages
    -   `publication.js` / `presentation.js`: parse their respective `.toml`
        data file and render it into the page
    -   `resource.js`: renders `about/resource.json` on the resources page
    -   `generate_blogs_files.js`: renders the filterable post list on
        `blog/blog_index.html` from `blog/blog_meta.json`
    -   `mathjax.js`: MathJax configuration
    -   `pub_chart.js`: publication chart configuration
-   `scripts/` — Node build tooling (not shipped to the site)
    -   `generate_md.js`: converts `blog/md/*.md` into `blog/html/*.html` and
        regenerates `blog/blog_meta.json`
-   `image/`: site-wide images and icons
-   `CNAME`: custom domain for GitHub Pages
-   `GITHUB-PAGES-SERVER`: present at the repo root; purpose unknown, left
    untouched

# Workflow for writing a blog post

1.  Write the post in Markdown under `blog/md/`.
2.  From `scripts/`, run `node generate_md.js` to regenerate the
    corresponding file(s) in `blog/html/` and `blog/blog_meta.json`.
3.  Stage, commit, and push.
