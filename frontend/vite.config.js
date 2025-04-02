import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
// export default defineConfig({
//     plugins: [
//         react(),
//         tailwindcss(),

//     ],
//     server:{
//         watch:{
//             usePolling: true,
//         },
//         host: true,
//         strictPort: true,
//         port: 8080,
//     },

// })



export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    server: {
        host: true,
        port: 3000,
        // proxy: {
        //     '/api': {
        //         target: 'http://127.0.0.1:8000',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     }
        proxy: {
            '/api': 'http://127.0.0.1:8000',
            '/images': 'http://127.0.0.1:8000'
        }
        
    },

})
