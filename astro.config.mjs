import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://sarthakv.vercel.app/",
  integrations: [sitemap(), robotsTxt({
    sitemap: ["https://sarthakv.vercel.app//sitemap-index.xml", "https://sarthakv.vercel.app//sitemap-0.xml"]
  }), solidJs(), UnoCSS({
    injectReset: true
  }), icon()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  output: "server",
  adapter: vercel()
});