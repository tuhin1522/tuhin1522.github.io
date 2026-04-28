import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Changed from '/' to './' to ensure relative paths for assets
  base: './', 
  plugins: [react()],
})
