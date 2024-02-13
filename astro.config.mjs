import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  prefetch: {
    defaultStrategy: "viewport",
  },
  redirects: {
    "/contact": "mailto:jacquois@hotmail.co.uk"
  },
});