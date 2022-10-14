module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    window: true,
    module: true,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['off', 2],
    'no-tabs': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-mixed-spaces-and-tabs': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
