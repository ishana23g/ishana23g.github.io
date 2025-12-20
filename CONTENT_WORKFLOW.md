# Content Management Workflow

This document explains how to add new projects and ideas to your portfolio without manually creating HTML files.

## Overview

The site uses a **template-based auto-generation system** to eliminate content duplication:

1. Write content in Markdown files (`.md`)
2. Update the JSON metadata files
3. Run the generation script
4. All HTML pages are automatically created from templates

## Directory Structure

```
content/
├── projects.json          # Project metadata
├── ideas.json            # Idea metadata
├── projects/
│   ├── heat_eq.md        # Project markdown content
│   ├── llm_finetuning.md
│   └── ...
└── ideas/
    ├── music_embeddings.md  # Idea markdown content
    └── ...

projects/
├── _template/
│   └── index.html        # Template for all project pages
├── heat_eq/
│   └── index.html        # Auto-generated from template
└── ...

ideas/
├── _template/
│   └── index.html        # Template for all idea pages
├── music_embeddings/
│   └── index.html        # Auto-generated from template
└── ...

scripts/
├── generate_pages.js     # Auto-generates HTML pages from templates
└── generate_index.js     # Generates content index
```

## Adding a New Project

### Step 1: Create the Markdown File

Create a new file in `content/projects/your_project.md`:

```markdown
# Your Project Title

A brief description of your project.

## Overview

More detailed content here...

## Key Features

- Feature 1
- Feature 2
```

### Step 2: Update projects.json

Add an entry to `content/projects.json`:

```json
{
  "slug": "your_project",
  "title": "Your Project Title",
  "tech": "Python • PyTorch • CUDA",
  "course": "CS 1234",
  "date": "Fall 2024",
  "file": "content/projects/your_project.md",
  "github": "https://github.com/yourusername/repo",
  "excerpt": "A brief one-line description",
  "highlights": [
    "Key achievement 1",
    "Key achievement 2"
  ]
}
```

### Step 3: Generate the HTML Page

Run the generation script:

```bash
node scripts/generate_pages.js
```

This creates `projects/your_project/index.html` from the template.

### Step 4: Commit and Push

```bash
git add .
git commit -m "Add new project: Your Project Title"
git push
```

## Adding a New Idea

The process is identical, but use `content/ideas/` and `ideas.json`:

### Step 1: Create Markdown

Create `content/ideas/your_idea.md`

### Step 2: Update ideas.json

```json
{
  "slug": "your_idea",
  "title": "Your Idea Title",
  "file": "content/ideas/your_idea.md",
  "excerpt": "Brief description"
}
```

### Step 3: Generate Pages

```bash
node scripts/generate_pages.js
```

### Step 4: Commit

```bash
git add .
git commit -m "Add new idea: Your Idea Title"
git push
```

## Modifying Templates

If you want to change the layout or styling of ALL project or idea pages:

1. Edit `projects/_template/index.html` or `ideas/_template/index.html`
2. Run `node scripts/generate_pages.js`
3. All pages will be regenerated with the new template

## Benefits of This System

✅ **No duplication** - Write content once in Markdown
✅ **Easy updates** - Edit one template to update all pages
✅ **Version control friendly** - All content is text-based
✅ **Fast workflow** - Add new content in seconds
✅ **Static site compatible** - Works with GitHub Pages

## Scripts Reference

### `node scripts/generate_pages.js`
- Reads `content/projects.json` and `content/ideas.json`
- For each entry, creates a directory and copies the template
- Automatically creates `projects/{slug}/index.html` and `ideas/{slug}/index.html`

### `node scripts/generate_index.js`
- Scans content directory for `.md` and `.txt` files
- Generates `content/index.json` with metadata

## Troubleshooting

**Q: My new project doesn't show up**
- Make sure you added it to `content/projects.json`
- Run `node scripts/generate_pages.js`
- Check that the `slug` in JSON matches your directory name

**Q: Changes to a project page aren't showing**
- If you edited the HTML directly, it will be overwritten
- Instead, edit the template in `projects/_template/index.html`
- Then regenerate with `node scripts/generate_pages.js`

**Q: How do I customize one specific page?**
- The templates are generic and load content dynamically
- Customize content by editing the Markdown file
- Customize metadata by editing the JSON entry
- To change layout for all pages, edit the template

## Workflow Summary

```
1. Write Markdown file → content/projects/my_project.md
2. Add metadata → content/projects.json
3. Generate pages → node scripts/generate_pages.js
4. Commit & push → git add . && git commit && git push
```

That's it! No more manual HTML file creation. 🎉
