import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://harmony-candles.github.io",
  base: "/",
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "file",
  },
  server: {
    port: 3000,
  },
});