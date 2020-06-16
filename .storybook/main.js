const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/preset-typescript", "@storybook/addon-knobs"],
  webpackFinal: async config => {
    config.resolve.mainFields = ["browser", "module", "main"];
    config.resolve.alias["client"] = path.resolve(__dirname, "../src/client/");
    config.resolve.alias["storybook"] = path.resolve(__dirname, "libs/");
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, "../src/client"),
        path.resolve(__dirname, "../.storybook"),
      ],
      exclude: [/node_modules\/(?!(gatsby)\/)/],
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
            plugins: [
              require.resolve("@babel/plugin-proposal-class-properties"),
              require.resolve("babel-plugin-remove-graphql-queries"),
            ],
          },
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
