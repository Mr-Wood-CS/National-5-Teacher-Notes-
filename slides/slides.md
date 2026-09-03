---
layout: default
background: white
title: Understanding Slidev Markdown
---

# Core Slidev Markdown syntax

This presentation explains what each line does in plain English.

---

## Slide separator

```md
# Slide 1

Content for the first slide.

---

# Slide 2

Content for the second slide.
```

**Line-by-line explanation**

- `# Slide 1` creates a large heading on the first slide.
- The blank line adds space and keeps the Markdown easy to read.
- `Content for the first slide.` is ordinary text shown on the first slide.
- `---` on a line by itself finishes one slide and starts the next.
- `# Slide 2` creates a large heading on the second slide.
- `Content for the second slide.` is ordinary text shown on the second slide.

---

## Presentation settings (headmatter)

```md
---
theme: default
title: My Presentation
---

# First slide
```

**Line-by-line explanation**

- The first `---` starts the presentation settings.
- `theme: default` chooses Slidev's standard appearance.
- `title: My Presentation` gives the presentation a name.
- The second `---` finishes the presentation settings.
- The blank line separates the settings from the visible content.
- `# First slide` creates the large heading shown on the first slide.

The settings block must be the very first thing in `slides.md`.

---

## Settings for one slide

```md
---
layout: center
background: /image.jpg
class: text-white
---

# A configured slide
```

**Line-by-line explanation**

- The first `---` also acts as the separator that starts a new slide.
- `layout: center` places the slide content in the centre.
- `background: /image.jpg` uses `image.jpg` as the slide background.
- `class: text-white` makes the text white.
- The second `---` closes the settings for this slide.
- `# A configured slide` is the large heading displayed on the slide.

These settings affect only this slide, not the whole presentation.

---

## Block frontmatter

````md
```yaml
layout: center
background: /image.jpg
```

# Slide content
````

**Line-by-line explanation**

- `` ```yaml `` starts a YAML settings block.
- `layout: center` centres the content on this slide.
- `background: /image.jpg` selects the background image.
- `` ``` `` closes the YAML settings block.
- `# Slide content` creates the slide's large heading.

This is another way to write settings for one slide.

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

**Line-by-line explanation**

- `# Slide title` creates the heading the audience can see.
- `Visible content` is also shown to the audience.
- `<!--` starts a hidden HTML comment.
- The text inside the comment becomes presenter notes.
- `-->` closes the hidden comment.

Presenter notes appear in Presenter Mode but not on the normal slide.
