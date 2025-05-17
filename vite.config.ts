// This file defines a React functional component that renders social media links.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration file for React project
export default defineConfig({
    plugins: [react()], // Enable React plugin for Vite
    base: '/', // Set base path for Netlify deployment
    build: {
        outDir: 'dist', // Output directory for the build
        assetsDir: 'assets', // Directory for static assets
        rollupOptions: {
            output: {
                // Naming pattern for entry JS files
                entryFileNames: 'assets/[name].[hash].js',
                // Naming pattern for code-split chunk files
                chunkFileNames: 'assets/[name].[hash].js',
                // Naming pattern for other asset files (e.g., images, CSS)
                assetFileNames: 'assets/[name].[hash].[ext]',
            },
        },
    },
});
