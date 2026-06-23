import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  // Vercel handles the base path automatically, so keep it clean
  integrations: [tailwind(), react()],
});