# Project Website

This is a Jekyll-ified version of the [Nerfies website](https://nerfies.github.io). All content lives in Markdown; HTML is only needed for advanced layouts.

Here is an [example website](https://shunzh.github.io/project_website/).

## Getting started

1) Install [Jekyll](https://jekyllrb.com/docs/installation/).
2) Install the bundle once: `bundle install`.
3) Run locally: `bundle exec jekyll serve`.
4) Open `http://127.0.0.1:4000` (or the forwarded port in Codespaces).

## Site config

Update `_config.yml` with your `url` and `baseurl` (if hosted in a subpath). Defaults set `layout: default` for pages, so only override when needed.

## Writing content (index.md)

Front matter fields supported by the layout:
- `title` (string)
- `authors` (list of strings or objects with `name`/`url`)
- `affiliations` (list of strings)
- `paper`, `video`, `code`, `colab`, `demo`, `slides`, `data` (URLs for the buttons)
- `links` (optional list of `{label, url, icon}` to add more buttons)
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
affiliations:
  - King's College, Cambridge
paper: https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf
video: https://www.youtube.com/results?search_query=turing+machine
code: https://github.com/topics/turing-machines
data: https://huggingface.co/docs/datasets
colab: https://colab.research.google.com/
demo: https://example.com/demo
slides: https://example.com/slides.pdf
links:
  - label: Extra link
    url: https://example.com/extra
    icon: fas fa-link
---
```

Write the body of the page in Markdown below the front matter. You can also embed small HTML snippets if needed.

## Carousel from Markdown

Add a `carousel` list to front matter and include it where you want it to appear:
```yaml
carousel:
  - image: /static/image/Turing_machine.png
    caption: Turing machine diagram
  - image: https://picsum.photos/seed/paper/960/540
    caption: External image works too
```

Place it in the page with:
```
{% raw %}{% include carousel.html items=page.carousel slides_to_show=2 autoplay=true autoplay_speed=2500 %}{% endraw %}
```
Parameters:
- `slides_to_show` (default 3)
- `autoplay` (true/false, default false)
- `autoplay_speed` in ms (default 3000)

The carousel uses [bulma-carousel](https://github.com/Wikiki/bulma-carousel) via CDN; no extra setup required.
