import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    ignores: [
      "dist",
      ".astro",
      "node_modules",
      ".vscode",
      ".git",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      ".prettierrc.*",
    ],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ["**/*.{ts,mts,cts}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      parserOptions: {
        project: null,
      },
    },
  },

  {
    files: ["**/*.astro"],
    plugins: { astro },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  tseslint.configs.strict,
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  prettier,
]);
