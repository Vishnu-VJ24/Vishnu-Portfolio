import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Vishnu-Portfolio/', // Add this for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['three'],
  },
  resolve: {
    dedupe: ['three'],
  },
});
