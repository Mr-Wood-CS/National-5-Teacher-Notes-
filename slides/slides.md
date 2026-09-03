---
layout: default
background: white
title: Understanding Slidev Markdown
---

# Core Slidev Markdown syntax 

This presentation explains what each line does in plain English.

<Toc :minDepth="1" :maxDepth="1" />

```python
print("Hello")
```

<arrow v-click="[4, 5]" x1="350" y1="310" x2="195" y2="342" color="#953" width="2" arrowSize="1" />

<v-clicks>

- First point
- Second point
- Third point
- Fourth point

</v-clicks>


<!-- Footer -->

[Learn more](https://sli.dev/features/line-highlighting)


<div class="absolute bottom-6 left-8">

[Learn more](https://sli.dev/features/line-highlighting)

</div>
---

# Magic Move Demo

````md magic-move {lines: true}
```python {all|2|all}
name = "Ada"
age = 12
next_age = age + 1
message = f"{name} is {age} now and will be {next_age} next year."
print(message)
```
````

<v-click>

This shows up when you press <kbd>space</kbd> or <kbd>right</kbd>, or click outside the slide on the right.

```html
<div v-click>This shows up when you trigger a click animation.</div>
```

</v-click>


Use `{monaco-run}` to create an editor that can execute the code directly in the slide:

```python {monaco-run}{autorun:false}

```

---

# Slide 2

Content for the second slide.

**Line-by-line explanation**

- `# Slide 1` creates a large heading on the first slide.
- The blank line adds space and keeps the Markdown easy to read.
- `Content for the first slide.` is ordinary text shown on the first slide.
- `---` on a line by itself finishes one slide and starts the next.
- `# Slide 2` creates a large heading on the second slide.
- `Content for the second slide.` is ordinary text shown on the second slide.

<table>
  <thead>
    <tr>
      <th>Denary</th>
      <th>Binary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5</td>
      <td v-click>0101</td>
    </tr>
    <tr>
      <td>9</td>
      <td v-click>1001</td>
    </tr>
    <tr>
      <td>12</td>
      <td v-click>1100</td>
    </tr>
  </tbody>
</table>
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
