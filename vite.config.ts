import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is deployed to GitHub Pages under /desktop-update/
// (previously configured via vue.config.js `publicPath`).
export default defineConfig({
  base: '/desktop-update/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
