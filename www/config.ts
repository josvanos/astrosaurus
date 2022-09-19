import { defineConfig } from "astrosaurus";

export const astrosaurus = defineConfig({
  site: {
    title: "Astrosaurus",
    logo: "🦕",
    description: "Your website description.",
    editUrl: `https://github.com/withastro/astro/tree/main/examples/docs`,
    inviteUrl: "https://github.com/withastro/astro",
  },
  socials: {
    github: "<YOUR GITHUB LINK>",
    discord: "<YOUR DISCORD LINK>",
    twitter: "<YOUR TWITTER LINK>",
  },
});

// export type Sidebar = Record<
//   typeof KNOWN_LANGUAGE_CODES[number],
//   Record<string, { text: string; link: string }[]>
// >;
// export const SIDEBAR: Sidebar = {
//   en: {
//     "Section Header": [
//       { text: "Introduction", link: "en/introduction" },
//       { text: "Page 2", link: "en/page-2" },
//       { text: "Page 3", link: "en/page-3" },
//     ],
//     "Another Section": [{ text: "Page 4", link: "en/page-4" }],
//   },
// };
