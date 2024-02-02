import { defineConfig } from "astro/config";
import Vue from "@astrojs/vue";
import Unocss from "unocss/astro";
import AstroHaloThemeIntegration from "@halo-dev/astro-halo-theme-integration";
import AutoImport from "unplugin-auto-import/astro";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  outDir: "./templates",

  build: {
    format: "file",
    inlineStylesheets: "never",
  },

  server: {
    port: 4000,
  },

  integrations: [
    Vue(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
    }),
    Unocss({
      injectReset: true,
    }),
    AstroHaloThemeIntegration(),
  ],

  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },

  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
  },
});
