import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: "https://augustglassdesigns.co.uk",
  integrations: [tailwind()],
  prefetch: {
    defaultStrategy: "viewport",
  },
  redirects: {
    "/contact": "mailto:jacquois@hotmail.co.uk"
  },
})