import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import commonjs from 'vite-plugin-commonjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    commonjs(),
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['chess.js'],
  }
})
