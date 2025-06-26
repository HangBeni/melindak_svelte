// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercelAdapter from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercelAdapter({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  integrations: [react(), mdx()],
});
