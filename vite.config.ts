import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const productsProxy = {
  '/api/products': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: () => '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
  },
}

export default defineConfig({
  plugins: [react()],
  server: { proxy: productsProxy },
  preview: { proxy: productsProxy },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
