import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alexysge.github.io',
  base: '/portafolio',
  integrations: [tailwind()],
});