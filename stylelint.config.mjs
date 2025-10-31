/** @type {import("stylelint").Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-html',
    'stylelint-config-html/astro',
    'stylelint-config-prettier-scss',
  ],
  plugins: [],
  rules: {
    'color-function-alias-notation': 'with-alpha',
    'color-function-notation': 'modern',
  },
  overrides: [],
};
