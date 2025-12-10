/** @type {import("prettier").Config & import("prettier-plugin-astro").PluginOptions} */
const config = {
  // 基本設定
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',

  // Astro用プラグイン
  plugins: ['prettier-plugin-astro'],

  // ファイルタイプ別の設定上書き
  overrides: [],
};

export default config;
