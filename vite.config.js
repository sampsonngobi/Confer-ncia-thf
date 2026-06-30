import { defineConfig } from 'vite'

export default defineConfig({
    base: '/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './index.html',
                jovens: './src/pages/jovens.html',
                lideres: './src/pages/lideres.html',
                pais: './src/pages/pais.html'
            }
        }
    },
    server: {
        middlewareMode: false,
    }
})
