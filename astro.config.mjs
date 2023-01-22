import {defineConfig} from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://hanna.codes',
  integrations: [
    image({serviceEntryPoint: '@astrojs/image/sharp'}),
    sitemap(),
    prefetch()]
});
