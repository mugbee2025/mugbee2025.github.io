/** @type {import("stylelint").Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "stylelint-config-html",
    "stylelint-config-html/astro",
    "stylelint-config-prettier-scss",
  ],

  plugins: [],

  rules: {
    "color-function-alias-notation": "with-alpha",
    "color-function-notation": "modern",

    "selector-class-pattern": [
      "^[a-z][a-z0-9-]*(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$",
      {
        message:
          "Expected class selector to be BEM-style (block__element--modifier)",
      },
    ],
  },

  overrides: [
    {
      files: ["**/*.astro"],
      rules: {
        "no-descending-specificity": null,
      },
    },
  ],
};
