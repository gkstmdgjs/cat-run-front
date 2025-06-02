import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  server: {
    port: 7477,
    strictPort: true
  },
  define: {
    global: 'window'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}) 