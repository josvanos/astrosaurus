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
