import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    react(),
    purgecss({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx,html}',
      ],
      // Puedes agregar una safelist si es necesario
    }),
    tailwindcss(),
  ],
  base: "./",
});
