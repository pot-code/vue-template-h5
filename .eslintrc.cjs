/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['*.config.js', '*.config.mjs'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
