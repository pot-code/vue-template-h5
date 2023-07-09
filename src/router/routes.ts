import HomeViewVue from '@/views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import TabLayout from '@/layouts/TabLayout.vue'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 导航标题
    title?: string
    // 是否支持返回上一页
    backwards?: boolean
    // tab 标题
    tab?: string
    // tab 图标
    icon?: string
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
      requireAuth: true,
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
      requireAuth: true,
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
      requireAuth: true,
    },
  },
]

// 子视图
export const subs: RouteRecordRaw[] = []

export const routes: RouteRecordRaw[] = [
  {
    path: '/tab',
    component: TabLayout,
    children: tabs,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginViewVue,
  },
]
