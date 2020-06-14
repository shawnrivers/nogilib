<p align="center">
  <a href="https://shawnrivers.github.io/nogizaka-lib-redesign/cds/singles/">
    <img alt="Gatsby" src="https://raw.githubusercontent.com/shawnrivers/nogizaka-lib-redesign/master/src/assets/images/favicon-512.png" width="128" />
  </a>
</p>
<h1 align="center">
  Nogizaka Lib
</h1>

**[App link](https://shawnrivers.github.io/nogizaka-lib-redesign/cds/singles/)**

**Nogizaka Lib** (**Nogilib**) is a web application for showing the information about [Nogizaka46](http://www.nogizaka46.com/) in a user-friendly way.

## Multi-language Support

- [Japanese](https://shawnrivers.github.io/nogizaka-lib-redesign/cds/singles/) 🇯🇵
- [English](https://shawnrivers.github.io/nogizaka-lib-redesign/en/cds/singles/) 🇬🇧
- [Chinese](https://shawnrivers.github.io/nogizaka-lib-redesign/zh/cds/singles/) 🇨🇳

## 🚀 Set Up Dev Environment

1.  **Install necessary packages.**

    ```sh
    yarn install
    ```

2.  **(Optional) Generate the latest data.**

    ```sh
    yarn generate-data
    ```

    Data will be generated in `src/data`.

3.  **Start the dev server.**

    ```sh
    yarn dev
    ```

    Your site is now running at `http://localhost:8000`.

4.  **Build the product.**

    ```sh
    yarn build
    yarn serve
    ```

    Your build result is now running at `http://localhost:9000`.

## 📚 Technologies

- Framework: `Gatsby`
- Language: `TypeScript`
- CSS preprocessor: `Sass`
- Animation: `framer-motion`

## 🧐 Directories

    .
    ├── src
    ├──── assets
    ├──── data
    ├──── server
    ├──── client
    ├──── pages
    ├──── utils

- **`src/assets`**
  - Images in the app
- **`src/data`**
  - Data to statically generate the app
- **`src/server`**
  - Codes for generating data
  - Data will be generated in `src/data`
- **`src/client`**
  - Client side codes
- **`src/pages`**
  - Gatsby pages
- **`src/utils`**
  - Utility methods used across the whole app

## Data Source

Profile images and CD artworks © [乃木坂 46LLC](https://www.nogizaka46.com/).

Most information in this project is from [Nogizaka46 official website](https://www.nogizaka46.com/) and [Wikipedia](https://ja.wikipedia.org/wiki/乃木坂46).
