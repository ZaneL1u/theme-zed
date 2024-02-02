import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import Unocss from "unocss/astro";
import astroHaloThemeIntegration from "@halo-dev/astro-halo-theme-integration";
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
    vue(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
    }),
    Unocss({
      injectReset: true,
    }),
    astroHaloThemeIntegration(),
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
