import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

    plugins: [
        react(),
        tailwindcss(),
    ],
    server: {
        host: true,  // Доступ с других устройств в сети
        port: 3000,
        // proxy: {
        //   '/api': {
        //     target: 'http://web:8000',  // Используем имя сервиса из docker-compose
        //     changeOrigin: true,
        //     secure: false,
        //     rewrite: (path) => path.replace(/^\/api/, '')
        //   },
        //   '/images': {
        //     target: 'http://web:8000',
        //     changeOrigin: true,
        //     secure: false
        //   }
        // }
        
    },
    // Оптимизация для Docker
    preview: {
        port: 3000,
        host: true
    }
});




