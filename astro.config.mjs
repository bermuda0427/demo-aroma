import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bermuda0427.github.io',
  base: '/demo-aroma',
  vite: {
    plugins: [tailwindcss()],
  },
});