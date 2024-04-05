// https://www.robinwieruch.de/vite-eslint/
import eslint from 'vite-plugin-eslint'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`Vite running in mode ${mode}`)

  return {
    plugins: [eslint()]
  }
})
