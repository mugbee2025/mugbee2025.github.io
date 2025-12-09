// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://mugbee2025.github.io',
  integrations: [
    partytown(),
    sitemap({
      filter: (page) => {
        return !(page.includes('/taxonomy/') || page.includes('/info'));
      },
    }),
  ],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
