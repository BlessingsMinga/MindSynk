import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  ssr: {
    // Bundle dependencies into the prerender build so CJS/UMD packages (e.g. gsap) and CSS imports resolve cleanly.
    noExternal: true,
  },
})
