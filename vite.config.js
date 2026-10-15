import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js loads outside the normal module graph, so import.meta.env
// isn't populated here the way it is in app code; loadEnv + assigning into
// process.env lets src/lib/site.js's process.env fallback see the same
// VITE_SITE_URL/VITE_BASE values (from the shell or a .env file) that the
// client and SSR builds see via import.meta.env.
export default defineConfig(async ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  const { BASE } = await import('./src/lib/site.js')

  return {
    plugins: [react()],
    base: BASE,
  }
})
