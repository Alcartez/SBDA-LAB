import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (or vue, etc.)

export default defineConfig({
  // CHANGE THIS LINE:
  base: '/', // Change from '/SBDA-website/' to just '/'
  
  plugins: [react()],
  // ... rest of your config
})
