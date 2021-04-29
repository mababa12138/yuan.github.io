import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    '@': resolve(__dirname, 'src')
  },
  base: './',
  build: {
    emptyOutDir: '../../'
  }
})
