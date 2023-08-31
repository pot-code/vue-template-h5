import HomeViewVue from '@/views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import TabLayout from '@/layouts/TabLayout.vue'
import type { RouteRecordRaw } from 'vue-router'
import SubLayout from '@/layouts/SubLayout.vue'

declare module 'vue-router' {
  interface RouteMeta {
    /** 导航标题 */
    title?: string
    /** 是否在导航栏显示返回按钮 */
    backwards?: boolean
    /** tab 标题 */
    tab?: string
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
    component: HomeViewVue,
    meta: {
      title: 'Home',
      icon: 'heart',
      tab: 'made',
    },
  },
  {
    path: 'home',
    name: 'home',
    component: HomeViewVue,
    meta: {
      title: 'Home',
      icon: 'heart',
      tab: 'with',
    },
  },
  {
    path: 'home',
    name: 'home',
    component: HomeViewVue,
    meta: {
      title: 'Home',
      icon: 'heart',
      tab: 'love',
    },
  },
]

// 子视图
export const subs: RouteRecordRaw[] = []

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
    path: '/sub',
    component: SubLayout,
    children: subs,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginViewVue,
  },
]
