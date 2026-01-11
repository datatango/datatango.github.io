// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { remarkBaseUrl } from "./remark-base-url.mjs";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  site: "https://datatango.github.io",
  base: "/site-test",
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  markdown: {
    remarkPlugins: [[remarkBaseUrl, "/site-test"]],
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }]
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
