// uno.config.ts
import { defineConfig, transformerDirectives } from "unocss";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import presetTagify from "@unocss/preset-tagify";
import presetMini from "@unocss/preset-mini";
import presetAttributify from "@unocss/preset-attributify";
import presetTypography from "@unocss/preset-typography";

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetTagify(),
    presetMini(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      autoInstall: true,
    }),
  ],
});
