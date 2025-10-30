import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";

export default [
  // 無視するファイル・ディレクトリ
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
      ".prettierrc.mjs",
    ],
  },

  // JavaScript基本設定
  js.configs.recommended,

  // TypeScript設定
  ...tseslint.configs.recommended,

  // JavaScript/TypeScriptファイルの設定
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },

  // Astro設定
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],

  // Prettier（最後に配置してフォーマットルールを上書き）
  prettier,
];
