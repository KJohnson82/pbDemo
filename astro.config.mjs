import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import orama from '@orama/plugin-astro'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  prefetch: {
    prefetchAll: true,
  },
  integrations: [tailwind(), orama({
    empdb: {
      pathMatcher: /^(\/corporate|\/plant)\/.+$/,
      language: 'english',
      contentSelectors: ['h4', 'h3']
    },
    retaildb: {
      pathMatcher: /^(\/metalmart|\/servicecenter)\/.+$/,
      language: 'english',
      contentSelectors: ['h4', 'h3', 'span',],
    },
  }),],
});