<p align="center">
  <a href="https://shawnrivers.github.io/nogizaka-lib-redesign/">
    <img alt="Gatsby" src="https://raw.githubusercontent.com/shawnrivers/nogizaka-lib-redesign/master/src/assets/images/favicon-512.png" width="128" />
  </a>
</p>
<h1 align="center">
  Nogizaka Lib
</h1>

_[App link](https://shawnrivers.github.io/nogizaka-lib-redesign/)_

This is a Gatsby powered web application aiming at showing the information about _[Nogizaka46](http://www.nogizaka46.com/)_ in a user-friendly way.

Current supported languages: _[Japanese](https://shawnrivers.github.io/nogizaka-lib-redesign/)_ 🇯🇵, _[English](https://shawnrivers.github.io/nogizaka-lib-redesign/en/)_ 🇬🇧 and _[Chinese](https://shawnrivers.github.io/nogizaka-lib-redesign/zh/)_ 🇨🇳.

## 🚀 Set Up Dev Environment

1.  **Install necessary packages.**

    ```sh
    yarn install
    ```

2.  **Start the dev server.**

    ```sh
    yarn dev
    ```

    Your site is now running at `http://localhost:8000`.

3.  **Build the product.**

    ```sh
    yarn build
    yarn serve
    ```

    Your build result is now running at `http://localhost:9000`.

## 📚 Technologies

- Static Page Generator: `Gatsby`
- JavaScript: `TypeScript`
- CSS: `Sass`, `CSS modules`
- Animation: `framer-motion`

## 🧐 What's inside?

    .
    ├── src
    ├──── assets
    ├──── components
    ├──── containers
    ├──── data
    ├──── i18n
    ├──── layouts
    ├──── pages
    ├──── styles
    ├──── types
    ├──── utils
    ├── gatsby-config.js
    ├── gatsby-node.js

1.  **`/src`**: All _"source code"_ comes here.

2.  **`/src/assets`**: This folder has images like favicons.

3.  **`/src/components`**: The components structure based on _[Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/)_.

4.  **`/src/containers`**: Each actual page with data processing and side effects.

5.  **`/src/data`**: Data used in this application.

6.  **`/src/i18n`**: Internationalization and localization related files.

7.  **`/src/layouts`**: Universal part across all pages.

8.  **`/src/pages`**: Entry `index` and `404` page.

9.  **`/src/styles`**: `Sass` variables and templates

10. **`/src/types`**: Global state type definitions.

11. **`/src/utils`**: Common methods used across the app.

12. **`gatsby-config.js`**: This is the main configuration file.

13. **`gatsby-node.js`**: This file holds pages creating customization settings.

## Data

Profile images and CD artworks © [乃木坂46LLC](https://www.nogizaka46.com/).

Most information in this project is from [Nogizaka46 official website](https://www.nogizaka46.com/) and [Wikipedia](https://ja.wikipedia.org/wiki/乃木坂46).
