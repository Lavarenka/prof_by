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
    plugins: [react(),
    tailwindcss(),

    ],
    build: {
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0]
                    }
                }
            }
        }
    },
    server: {
        host: true,
        port: 3000
    }
})
