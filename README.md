<p align="center">
  <a href="https://shawnrivers.github.io/nogizaka-lib-redesign/cds/singles">
    <img alt="Gatsby" src="https://raw.githubusercontent.com/shawnrivers/nogizaka-lib-redesign/master/src/assets/images/favicon-512.png" width="60" />
  </a>
</p>
<h1 align="center">
  Nogizaka Lib
</h1>

_[App link](https://shawnrivers.github.io/nogizaka-lib-redesign/cds/singles)_

This is a Gatsby powered web application aiming at showing the information about _[Nogizaka46](http://www.nogizaka46.com/)_ in a user-friendly way.

Currently support languages: _[Japanese](https://shawnrivers.github.io/nogizaka-lib-redesign/cds/singles)_ 🇯🇵, _[English](https://shawnrivers.github.io/nogizaka-lib-redesign/en/cds/singles)_ 🇬🇧 and _[Chinese](https://shawnrivers.github.io/nogizaka-lib-redesign/zh/cds/singles)_ 🇨🇳.

## 🚀 Set Up Dev Environment

1.  **Install necessary packages.**

    ```sh
    npm install
    ```

2.  **Start the dev server.**

    ```sh
    npm run dev
    ```
    Your site is now running at `http://localhost:8000`.

3.  **Build the product.**

    ```sh
    npm run build
    npm run serve
    ```

    Your build result is now running at `http://localhost:9000`.

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

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

4.  **`/src/components`**: Each actual page with data processing and side effects.

5.  **`/src/data`**: Data used in this application.

6.  **`/src/i18n`**: Internationalization and localization related files.

7.  **`/src/layouts`**: Universal part across all pages.

8.  **`/src/pages`**: Entry `index` and `404` page.

9.  **`/src/styles`**: `Sass` variables and templates

10. **`/src/types`**: Global state type definitions.

11. **`/src/utils`**: Common methods used across the app.

12. **`gatsby-config.js`**: This is the main configuration file.

13. **`gatsby-node.js`**: This file holds pages creating customization settings.

##  Data

Profile images and CD artworks © 乃木坂 LLC.
