import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Base path matcht de GitHub Pages project-URL: https://<username>.github.io/paard-ipsum/
export default defineConfig({
  base: '/paard-ipsum/',
  plugins: [react()],
})
