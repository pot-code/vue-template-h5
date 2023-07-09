import HomeViewVue from '@/views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import AuthGuard from '@/features/auth/AuthGuard.vue'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 首部标题
    title: string
    // 是否支持返回上一页
    backwards: boolean
    // tab 标题
    tab?: string
    // tab 图标
    icon?: string
  }
}

// 页签视图
export const tabs: RouteRecordRaw[] = []

// 子视图
export const subs: RouteRecordRaw[] = []

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AuthGuard,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeViewVue,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginViewVue,
  },
]
