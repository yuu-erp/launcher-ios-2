import { defineConfig } from 'vite'
import path from 'path'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslint()],
  base: './',
  server: {
    host: '0.0.0.0',
    open: true
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
})
