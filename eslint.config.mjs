export default {
  root: true, // Đảm bảo ESLint không tìm kiếm file cấu hình khác
  ignorePatterns: ['dist', 'node_modules'], // Bỏ qua các thư mục build
  env: {
    browser: true, // Hỗ trợ biến môi trường của trình duyệt
    es2021: true, // Cho phép sử dụng ES6+
    node: true // Hỗ trợ biến môi trường Node.js
  },
  extends: [
    'eslint:recommended' // Bộ quy tắc mặc định cho JavaScript
  ],
  parserOptions: {
    ecmaVersion: 2021, // Hỗ trợ cú pháp ES6+
    sourceType: 'module' // Hỗ trợ import/export
  },
  plugins: ['prettier'], // Kết hợp với Prettier để format code
  rules: {
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always', // Luôn dùng dấu ngoặc đơn cho arrow function
        semi: false, // Không dùng dấu chấm phẩy
        trailingComma: 'none', // Không có dấu phẩy cuối cùng
        tabWidth: 2, // Dùng 2 spaces thay vì tab
        endOfLine: 'auto', // Không gây lỗi với CRLF/LF
        useTabs: false, // Không dùng tab
        singleQuote: true, // Sử dụng dấu nháy đơn
        printWidth: 120, // Giới hạn độ dài dòng
        jsxSingleQuote: true // Dùng nháy đơn trong JSX
      }
    ],
    'no-console': 'warn', // Cảnh báo khi dùng console.log
    'no-unused-vars': 'warn', // Cảnh báo khi có biến không sử dụng
    eqeqeq: 'error', // Bắt buộc dùng === thay vì ==
    'no-var': 'error', // Cấm sử dụng var, chỉ dùng let/const
    'prefer-const': 'warn' // Cảnh báo nếu có thể thay let bằng const
  }
}
