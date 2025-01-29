import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-draggable', 'react-rnd'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            '@mui/material',
            'recharts',
          ],
        },
      },
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
  },
  server: {
    preTransformRequests: true,
  },
});

/**
 * Vite configuration for React application with optimized build settings.
 * Includes dependency pre-bundling for drag-and-drop libraries,
 * vendor chunk splitting for core dependencies,
 * and customized build options for improved performance.
 **/
