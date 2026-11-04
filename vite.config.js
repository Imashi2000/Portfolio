import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // The live site is served from imashi2000.github.io/Portfolio/
  base: command === 'build' ? '/Portfolio/' : '/',
  server: {
    port: 5175
  }
}))
