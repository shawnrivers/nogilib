module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next',
  ],
  plugins: ['react-hooks', 'import'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': 'warn',
    'no-console': 'warn',
    'prefer-const': 'off',
    '@next/next/no-img-element': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.tsx', '.ts'],
      },
      alias: {
        map: [
          ['client', './src/client'],
          ['storybook', './.storybook/libs'],
        ],
        extensions: ['.tsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: [
    '**/__tests__/**/*.ts',
    '**/*.test.ts',
    'README.md',
    'scripts/**/*',
  ],
};
