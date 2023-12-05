import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import Unocss from "unocss/astro";
import astroHaloThemeIntegration from "@halo-dev/astro-halo-theme-integration";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    Unocss({
      injectReset: true,
    }),
    astroHaloThemeIntegration(),
  ],
  outDir: "./templates",
  build: {
    format: "file",
    inlineStylesheets: "never",
  },
  server: {
    port: 4000,
  },
});
