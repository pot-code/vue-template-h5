import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import useTokenStore from '@/store/useTokenStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
