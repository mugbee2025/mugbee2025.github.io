// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mugbee2025.github.io",
  integrations: [mdx(), sitemap()],
  // WSL2でのホットリロード対応
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
