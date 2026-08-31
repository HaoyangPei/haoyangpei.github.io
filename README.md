# Haoyang Pei — academic website

This repository contains my Jekyll-based personal academic website. The design is intentionally lightweight: a concise research-focused home page, chronological publication and talk archives, a readable CV, and reusable layouts for individual research pages.

## Local development

1. Run `bundle install`.
2. Start the preview with `bundle exec jekyll serve`.
3. Open `http://127.0.0.1:4000`.

Run `JEKYLL_ENV=production bundle exec jekyll build` before publishing. GitHub Actions performs the same build for pushes and pull requests.

## Content

- Update the home page in `_pages/about.md`.
- Add publications to `_publications/` and talks to `_talks/`.
- Edit profile details and links in `_config.yml`.
- The site-wide visual system lives in `_sass/_academic.scss`.
