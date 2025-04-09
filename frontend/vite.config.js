import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://backend:8000', // Используем имя сервиса из docker-compose
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false
      },
      '/images': { // Прокси для изображений
        target: 'http://backend:8000',
        changeOrigin: true,
        secure: false
      }
    },
    host: true, // Доступ с других устройств в сети
    port: 3000
  },
  preview: {
    port: 3000,
    host: true
  }
})