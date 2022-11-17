import { defineConfig } from "astro/config";
import astrosaurus from "./config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx({ extendPlugins: "markdown" })],
  legacy: {
    astroFlavoredMarkdown: true,
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "material-ocean",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["bash", "ts"],
    },
  },
  site: `https://astrosaurus.pages.dev`,
  vite: {
    build: {
      rollupOptions: {
        external: ["astrosaurus"],
      },
    },
  },
});
