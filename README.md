# Paper Website
This is a template for creating simple websites for research papers. Making such accompanying websites becomes increasingly common to showcase code, data, videos, and demos related to the paper. It offers a possibility to present your work in a more engaging way than just the static PDF and can help increase visibility and impact. The website does not have to be a full replica of the paper, but rather a hub to highlight key aspects and provide easy access to resources. Before using this template, make sure to check the copyright and sharing policies of the conference or journal where your paper is published. Often one retains ownership of the auther versions (manuscript, preprint), but not of the publisher's formatted/typeset version. This means you typically can reuse your content, figures, etc on your paper website, but you must not upload the publisher's PDF. Rather, use the `paper` button (see below) to link to the official version on the publisher's site. 

The template is a Jekyll-ified version of the [Nerfies website](https://nerfies.github.io). All content lives in Markdown; HTML is only needed for advanced layouts. Core assets (Bulma, Font Awesome, Academicons, bulma-carousel, fonts) are self-hosted for reliability.

Here is an [example website](https://frdedynamics.github.io/paper_website/) that is created from this template.

## Getting started

1) Click “Use this template” on the repo page.  
2) Name the repo after your paper (e.g., `my-paper`), remember that the repo name will become the URL path (e.g., `https://<username>.github.io/my-paper/`). It should be descriptive yet concise.
3) Clone your repo: `git clone https://github.com/<you>/my-paper.git`  
4) `cd my-paper`  
5) Install [Jekyll](https://jekyllrb.com/docs/installation/) if you don't have it already.  
5) Install deps: `bundle install`  
6) Run locally: `bundle exec jekyll serve`  
8) Open `http://127.0.0.1:4000` (or the forwarded port in Codespaces).

## Site config

- In `_config.yml` set `url` to your origin (e.g., `https://<username>.github.io`). As a default the `url` is set to `https://frdedynamics.github.io`, which is correct if you created your repo in our organization. If you create the repo in your own account, change it accordingly.

Deployment (GitHub Pages via Actions):
- The repo includes `.github/workflows/pages.yml`. On push to `main`, it builds and deploys to GitHub Pages automatically.
- To enable this in your repo, on Github go to Settings → Pages, and set Source to “GitHub Actions.”

## Writing content (`index.md`)
All content is in `index.md`. The template supports various front matter fields to populate buttons, authors, affiliations, abstract, and a carousel.
Front matter fields supported by the layout:
- `title` (string; title of the paper)
- `authors` (list of strings or objects with `name`/`url`/`affils`; `affils` is a list of ids)
- `affiliations` (list of strings or objects with `id`/`name`; `id` is used for superscripts)
- `paper`, `video`, `code`, `colab`, `demo`, `slides`, `data`, `arxiv` (URLs for the built-in buttons)
- `links` (optional list of `{label, url, icon}` to add more buttons)
- `abstract` (multi-line text; use `|` to start a block)
- `carousel` (optional list of slides, see below)

Example front matter:
```yaml
---
layout: project_page
permalink: /
title: On Computable Numbers, with an Application to the Entscheidungsproblem
authors:
  - name: A. M. Turing
    url: https://en.wikipedia.org/wiki/Alan_Turing
    affils: [1]
  - name: John Doe
    url: https://example.com/johndoe
    affils: [1,2]
affiliations:
  - id: 1
    name: King's College, Cambridge
  - id: 2
    name: Example University
paper: https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf
video: https://www.youtube.com/results?search_query=turing+machine
code: https://github.com/topics/turing-machines
data: https://huggingface.co/docs/datasets
colab: https://colab.research.google.com/
demo: https://example.com/demo
slides: https://example.com/slides.pdf
arxiv: https://arxiv.org/abs/1234.56789
links:
  - label: Extra link
    url: https://example.com/extra
    icon: fas fa-link
abstract: |
  The "computable" numbers may be described briefly as the real
  numbers whose expressions as a decimal are calculable by finite means.
---
```

Write the body of the page in Markdown below the front matter. You can also embed small HTML snippets if needed.

### Carousel from Markdown

Add a `carousel` list to front matter and include it where you want it to appear:
```yaml
carousel:
  - image: /static/image/Turing_machine.png
    caption: Turing machine diagram
  - image: https://picsum.photos/seed/paper/960/540
    caption: External image works too
```

Place it in the page with:
```liquid
{% include carousel.html items=page.carousel slides_to_show=2 autoplay=true autoplay_speed=2500 %}
```
Parameters:
- `slides_to_show` (default 3)
- `autoplay` (true/false, default false)
- `autoplay_speed` in ms (default 3000)

### Images and paths

Use `relative_url` to make image links work with `baseurl`:
```
![Alt text]({{ '/static/image/example.png' | relative_url }})
```
Carousel items already run through `relative_url`, so `/static/...` works there.

### Videos

Embed YouTube/Vimeo with Markdown links, or add `video:` in front matter to show the button. For inline embeds, paste the iframe HTML into Markdown if needed. For local videos, put the file under `static/` and use a video tag, e.g.:
```html
<video controls width="100%">
  <source src="{{ '/static/video/demo.mp4' | relative_url }}" type="video/mp4">
</video>
```

### Equations

MathJax is enabled. Use `$…$` for inline and `$$…$$` for display equations.

### Buttons

Built-in buttons show when the corresponding field is set: `paper`, `video`, `code`, `colab`, `demo`, `slides`, `data`, `arxiv`. Use `links` for any extras and supply an icon class (Font Awesome or Academicons).
