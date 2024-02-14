import { defineConfig } from 'astro/config'

import tailwind from "@astrojs/tailwind"

const site = import.meta.env.VERCEL_URL
  ? "https://" + import.meta.env.VERCEL_URL
  : "http://localhost:4321"

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind()],
  prefetch: {
    defaultStrategy: "viewport",
  },
  redirects: {
    "/contact": "mailto:jacquois@hotmail.co.uk"
  },
})