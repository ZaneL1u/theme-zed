import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import Unocss from "unocss/astro";
import astroHaloThemeIntegration from "@halo-dev/astro-halo-theme-integration";
import AutoImport from "unplugin-auto-import/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
    }),
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
