import { defineConfig, transformerDirectives } from "unocss";
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
  ],
});
