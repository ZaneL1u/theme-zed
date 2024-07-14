import { homedir } from 'node:os'
import { defineConfig } from 'astro/config'
import Unocss from 'unocss/astro'
import AstroHaloThemeIntegration from '@halo-dev/astro-halo-theme-integration'
import AutoImport from 'unplugin-auto-import/astro'
import Icons from 'unplugin-icons/vite'
import solidJs from '@astrojs/solid-js'
import copyFiles from './plugins/copy'

// https://astro.build/config
export default defineConfig({
  outDir: `${homedir}/halo2-dev/themes/theme-zed/templates`,
  build: {
    format: 'file',
    inlineStylesheets: 'never',
  },
  server: {
    port: 4000,
  },
  integrations: [
    solidJs({
      devtools: true,
    }),
    AutoImport({
      imports: ['solid-js'],
      dts: './src/auto-imports.d.ts',
    }),
    Unocss({
      injectReset: true,
    }),
    AstroHaloThemeIntegration(),
    copyFiles(),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
})
