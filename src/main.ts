import App from './App.vue';
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import type { UserPlugin } from './types'
import generatedRoutes from '~pages'


const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserPlugin }>('./plugins/*.ts', { eager: true }))
      .map(i => i.install?.(ctx))
  },
)
