import type { AstroComponent } from "astro/dist/runtime/server/render/astro";

export { astrosaurusAdvancedMarkdown } from "./markdown/notes";

declare global {
  const astrosaurus: Config;
}

export const defineConfig = (config: Config) => {
  globalThis.astrosaurus = config;
  return config;
};

type Config = {
  site: {
    title: string;
    logo?: string;
    description: string;
    editUrl?: string;
    inviteUrl?: string;
  };

  theme?: {
    colors?: {
      primary?: string;
      secondary?: string;
    };
    extend: {
      nav?: AstroComponent;
      head?: AstroComponent;
      layout?: AstroComponent;
    };
  };

  socials?: {};
};
