import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';  // ADD THIS

export default defineConfig({
  integrations: [react()],           // ADD THIS
  vite: {
    plugins: [tailwindcss()],
  },
});