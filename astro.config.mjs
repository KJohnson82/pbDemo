import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  prefetch: {
    prefetchAll: true,
  },
  build: {
    format: "file",
  },
  integrations: [tailwind(), pagefind()],
});