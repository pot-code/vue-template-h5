import useTokenStore from '@/features/auth/useTokenStore'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.requireAuth) {
    const { isAuthenticated } = useTokenStore()
    if (!isAuthenticated) return { name: 'login' }
  }
  return true
})

export default router
