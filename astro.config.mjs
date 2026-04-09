// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { remarkBaseUrl } from "./remark-base-url.mjs";
import rehypeExternalLinks from "rehype-external-links";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://www.matthewyang.io",
  base: "/",
  integrations: [mdx(), sitemap(), react()],
markdown: {
    remarkPlugins: [[remarkBaseUrl, ""]],
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }]
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});