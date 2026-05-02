import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        case_studies: resolve(__dirname, 'case-studies/index.html'),
        pricing: resolve(__dirname, 'pricing/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
})
