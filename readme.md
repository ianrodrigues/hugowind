# Tailwind Simple Blog

_Tailwind Simple Blog_ is a minimalist theme for [Hugo](https://gohugo.io) using [Tailwind CSS](https://tailwindcss.com).

It uses [Chroma](https://gohugo.io/content-management/syntax-highlighting/) for the syntaxic coloration of code snippets.

Demo is available [here](https://ianrodrigues.github.io/hugowind-demo/).

## Installation

Please refer to the [Hugo documentation](https://gohugo.io/themes/installing/).

## Configuration

A few parameters should be adjusted in the site config:

```toml
baseURL = "http://example.org/"

title = "Hugowind Demo"
theme = "hugowind"

enableEmoji = true
pygmentsCodeFences = true
pygmentsUseClasses = true

paginate = 2

[[menu.main]]
  name = "About"
  url = "/about"
[[menu.main]]
  name = "Author"
  url = "https://ianrodrigues.dev"
[[menu.main]]
  name = "Source"
  url = "https://github.com/ianrodrigues/hugowind"

[params]
  author = "Hugowind"
  avatar = "images/hugo-icon.png"
  twitter = "ianrdgs"
  github = "ianrodrigues"
  linkedin = "ianrdgs"

[markup]
  defaultMarkdownHandler = "blackfriday"

[languages]
  [languages.en]
    description = "Hugowind is a minimalist blog theme for Hugo using Tailwind CSS that focus on your content."
    tagline = "Hugowind is a minimalist blog theme for Hugo using Tailwind CSS that focus on your content."
    languageCode = "en-us"
    languageName = "English"
    weight = 1

  [languages.pt-br]
    description = "Hugowind é um tema de blog minimalista para Hugo usando Tailwind CSS que se concentra no seu conteúdo."
    tagline = "Hugowind é um tema de blog minimalista para Hugo usando Tailwind CSS que se concentra no seu conteúdo."
    languageCode = "pt-br"
    languageName = "Português"
    weight = 2

  [languages.es]
    description = "Hugowind es un tema de blog minimalista para Hugo usando Tailwind CSS que se enfoca en tu contenido."
    tagline = "Hugowind es un tema de blog minimalista para Hugo usando Tailwind CSS que se enfoca en tu contenido."
    languageCode = "es"
    languageName = "Español"
    weight = 3
```
