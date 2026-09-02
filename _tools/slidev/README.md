# Slidev presentation tool

This directory contains a reusable Slidev setup for the MkDocs project. Slidev
and MkDocs remain separate tools: Slidev creates a static presentation, which
can then be published inside the MkDocs `docs/slides/` directory.

## First-time setup

Node.js 20.12 or newer is required. From this directory, run:

```bash
npm install
```

## Create and preview slides

Edit `slides.md`, then start the Slidev development server:

```bash
npm run dev
```

The presentation is normally available at <http://localhost:3030>.

To keep several presentations, place Markdown files in a `decks` directory and
pass the required file to Slidev:

```bash
npm run dev -- decks/lesson-1.md
```

## Publish a presentation through MkDocs

Build it into the MkDocs documentation tree. The base path must match the final
URL:

```bash
npm run build -- slides.md \
  --base /slides/lesson-1/ \
  --out ../../docs/slides/lesson-1
```

For a named deck:

```bash
npm run build -- decks/lesson-1.md \
  --base /slides/lesson-1/ \
  --out ../../docs/slides/lesson-1
```

Link to it from an MkDocs page with:

```markdown
[Open the presentation](slides/lesson-1/){ .md-button .md-button--primary }
```

If the whole MkDocs site is hosted below another URL segment, include that
segment in `--base`. For example, use
`--base /my-site/slides/lesson-1/`.

