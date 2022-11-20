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
      theme: "material-ocean",
      langs: ["bash", "ts"],
    },
  },
  site: `https://astrosaurus.pages.dev`,
  vite: {
    // build: {
    //   rollupOptions: {
    //     external: ["astrosaurus"],
    //   },
    // },
  },
});
