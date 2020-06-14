module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/react",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["react-hooks", "import"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "import/order": "warn",
    "no-console": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".tsx", ".ts"],
      },
      alias: {
        map: [
          ["client", "./src/client"],
          ["storybook", "./.storybook/libs"],
        ],
        extensions: [".tsx"],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ["**/__tests__/**/*.ts", "**/*.test.ts"],
};
