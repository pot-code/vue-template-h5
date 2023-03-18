import HomeViewVue from '@/views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 首部标题
    title: string
    // 是否支持返回上一页
    backwards: boolean
    // tab 标题
    tab?: string
    icon?: string
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeViewVue,
  },
]
