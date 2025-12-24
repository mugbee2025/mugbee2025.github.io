// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mugbee2025.github.io",
  vite: {
    server: {
      watch: {
        usePolling: true, // WSL2環境での変更検知安定化
      },
    },
  },
});
