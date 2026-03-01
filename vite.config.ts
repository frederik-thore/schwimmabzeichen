import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Basis-Pfad für GitHub Pages: https://<user>.github.io/schwimmabzeichen/
  base: '/schwimmabzeichen/',
})
