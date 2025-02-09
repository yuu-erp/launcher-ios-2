import { expect, type ExpectStatic } from 'vitest'
import '@testing-library/jest-dom/vitest' // Matcher DOM cho Vitest

// Mở rộng kiểu `globalThis`
declare global {
  interface GlobalThis {
    expect: ExpectStatic
  }
}

// Dùng `Object.defineProperty` để tránh lỗi TypeScript
Object.defineProperty(globalThis, 'expect', {
  value: expect,
  writable: false,
  configurable: true
})
