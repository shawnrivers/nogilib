module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["react-hooks"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/prefer-interface": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": "warn",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  env: {
    browser: true,
  },
};
