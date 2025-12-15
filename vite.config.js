import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/animated-portfolio/',   // 👈 ADD THIS LINE
  plugins: [react()],
})

