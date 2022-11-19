import { defineAuthor, defineConfig } from "astrosaurus";

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
  menu: {
    docs: "/docs/introduction",
    blog: "/blog",
  },
});

export const mathew = defineAuthor({
  key: "Mathew",
  name: "Mathew",
  picture:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
});
