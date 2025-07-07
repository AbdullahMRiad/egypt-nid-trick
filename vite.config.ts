import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  base: "/egypt-nid-trick/",
  plugins: [
    tailwindcss(),
    ghPages()
  ],
})