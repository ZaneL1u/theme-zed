// uno.config.ts
import { defineConfig } from "unocss";
import presetIcons from "@unocss/preset-icons";
import presetAttributify from "@unocss/preset-attributify";
import { presetTypography } from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetTypography(),
    presetIcons({
      autoInstall: true,
    }),
  ],
});
