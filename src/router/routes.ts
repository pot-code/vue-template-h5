import type { RouteRecordRaw } from 'vue-router'
import TabLayout from '@/layouts/tab.vue'
import DefaultLayout from '@/layouts/default.vue'
import HomeView from '@/pages/home.vue'
import MessageView from '@/pages/message.vue'
import DetailIndexView from '@/pages/details/index.vue'
import LoginView from '@/pages/login.vue'
import NotFoundError from '@/pages/errors/404.vue'

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

// 页签视图
export const tabs: RouteRecordRaw[] = [
  {
    path: 'home',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
      icon: 'home',
      label: 'Home',
    },
  },
  {
    path: 'message',
    name: 'message',
    component: MessageView,
    meta: {
      title: 'Message',
      icon: 'message',
      label: 'Message',
    },
  },
]

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/tab',
    component: TabLayout,
    meta: {
      requireAuth: true,
    },
    children: tabs,
  },
  {
    path: '/detail',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'detail',
        component: DetailIndexView,
        meta: {
          title: 'Secret',
          backwards: true,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundError,
  },
]
