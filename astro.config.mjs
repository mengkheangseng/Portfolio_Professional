import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // We removed the old tailwind() integration completely
  integrations: [react()],
});