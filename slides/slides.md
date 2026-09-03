~~~md
---
layout: default
background: white
---
~~~

# 1. Core Slidev Markdown syntax

## Slide separator

```md
# Slide 1

Content

---

# Slide 2

Content
```

**Annotation**
- `---` on its own line separates one slide from the next.
- The first `--- ... ---` block at the very start of the file is headmatter.
- Later `--- ... ---` blocks immediately after a separator are per-slide frontmatter.

---

## Headmatter

```md

theme: default
title: My Presentation


# First slide
```

**Annotation**
- The first frontmatter block is called **headmatter**.
- It configures the whole presentation.

---

## Per-slide frontmatter

```md

layout: center
background: /image.jpg
class: text-white


# A configured slide
```

**Annotation**
- Per-slide frontmatter changes one slide only.
- It can set layout, background, transition, click count, zoom and other slide-level settings.

---

## Block frontmatter

```md
```yaml
layout: center
background: /image.jpg
```

# Slide content
```

**Annotation**
- A YAML code block can be used as frontmatter.
- This exists for better compatibility with Markdown formatters.

---

## Presenter notes

```md
# Slide title

Visible content

<!--
These are presenter notes.
They are not part of the normal slide content.
-->
```

---