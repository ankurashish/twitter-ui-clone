// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',       // since index.html is in /src
  build: {
    outDir: '../dist',  // Vercel needs output dir
    emptyOutDir: true,
  },
});
