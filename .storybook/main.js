const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/preset-typescript", "@storybook/addon-knobs"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, "../src/client"),
        path.resolve(__dirname, "../.storybook"),
      ],
      use: [
        {
          loader: "babel-loader",
        },
      ],
    });
    config.resolve.alias["client"] = path.resolve(__dirname, "../src/client/");
    config.resolve.alias["storybook"] = path.resolve(__dirname, "libs/");
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
