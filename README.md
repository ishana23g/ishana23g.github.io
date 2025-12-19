# Personal Website

A minimal, static personal website for GitHub Pages.

## Setup

1. Create a new GitHub repository named `yourusername.github.io`
2. Upload the repository contents to the new repo
3. Go to Settings → Pages → Enable GitHub Pages from the `main` branch
4. Your site will be live at `https://yourusername.github.io`

## Customization

Update contact info and placeholders in `index.html` as needed. Replace the placeholder text wrapped in `[brackets]` with your content.

## Adding content (Markdown / text)

You can add simple Markdown (`.md`) or text (`.txt`) files to the `content/` folder and the home page will automatically list and let you preview them.

Recommended workflow locally:

1. Add files to `content/` (for example `content/my-note.md`).
2. Run the manifest generator to update `content/index.json`:

```bash
node scripts/generate_index.js
```

This scans `content/` for `.md` and `.txt` files, extracts a title (first `# Heading` if present), a short excerpt, and the file's modification date, then writes `content/index.json` which the site consumes at runtime.

On GitHub Pages: commit the new files including the updated `content/index.json`. The site (client-side) will fetch `content/index.json` and build the list and previews. If `content/index.json` is missing the site will show a friendly instruction message.

Notes:

- You can also edit `content/index.json` manually for custom titles, order, or excerpts.
- The preview rendering uses a small client-side Markdown renderer (marked) loaded from a CDN.

## Structure

- `index.html` — main site
- `styles.css` — styling
- `script.js` — page interactions (animations)
- `content/` — put `.md` or `.txt` files here and generate `content/index.json`
- `scripts/generate_index.js` — Node helper to create `content/index.json`

Additional pages:

- `list.html` — used to render a list of content items (optionally filtered by `?category=`).
- `view.html` — full-page view for a single content file; pass `?file=content/your-file.md` to open it.

Generator front-matter support

If you add YAML front-matter at the top of your markdown files (between `---` markers), the generator will use keys like `title`, `date`, `category`, and `slug` when present. Example:

```md
---
title: My Thought
date: 2025-12-18
category: thoughts
slug: my-thought
---

# My Thought

Content...
```

When you push changes to GitHub Pages include `content/index.json` (generated) so the site can list and link the files.

## License & notes

This is a minimal template. Feel free to adapt it for your needs.
