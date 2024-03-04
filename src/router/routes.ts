import TabLayout from '@/layouts/tab.vue'
import NotFoundError from '@/pages/errors/404.vue'
import LoginView from '@/pages/login.vue'
import type { RouteRecordRaw } from 'vue-router'
import tab from './tab'
import { values } from 'remeda'

const modules = values(import.meta.glob<{ default: RouteRecordRaw }>('./modules/*.ts', { eager: true })).map(
  (v) => v.default,
)

declare module 'vue-router' {
  interface RouteMeta {
    /** 导航标题 */
    title?: string
    /** 是否在导航栏显示返回按钮 */
    backwards?: boolean
    /** tab 标题 */
    label?: string
    /** tab 图标 */
    icon?: string
    /** 是否需要登录 */
    requireAuth?: boolean
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/tab',
    component: TabLayout,
    meta: {
      requireAuth: false,
    },
    children: tab,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  ...modules,
  {
    path: '/:catchAll(.*)',
    component: NotFoundError,
  },
]
