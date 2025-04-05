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
                target: 'http://localhost:8000', // Теперь указываем localhost с портом
                changeOrigin: true,
                rewrite: (path) => path.replace(8000,/^\/api/, ''),
                secure: false
            }
        }
    },
    // Оптимизация для Docker
    preview: {
        port: 3000,
        host: true
    }
});




