import { defineConfig } from 'vitest/config' // 🔥 Đúng: Import từ "vitest/config"
import path from 'path'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslint()],
  test: {
    globals: true, // Cho phép sử dụng test mà không cần import
    environment: 'jsdom', // Giả lập DOM
    setupFiles: './src/setupTests.ts' // Chạy trước mỗi test
  },
  base: './',
  server: {
    host: '0.0.0.0',
    open: true
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@core/application': path.resolve(__dirname, 'src/core/application'),
      '@core/domain': path.resolve(__dirname, 'src/core/domain'),
      '@core/infrastructure': path.resolve(__dirname, 'src/core/infrastructure'),
      '@core/helpers': path.resolve(__dirname, 'src/core/helpers'),
      '@core/exceptions': path.resolve(__dirname, 'src/core/exceptions')
    }
  }
})
