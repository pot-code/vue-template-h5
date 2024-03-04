import HomeView from '@/pages/home.vue'
import MessageView from '@/pages/message.vue'

import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: 'home',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页',
      icon: 'home',
      label: '首页',
    },
  },
  {
    path: 'message',
    name: 'message',
    component: MessageView,
    meta: {
      title: '示例',
      icon: 'message',
      label: '示例',
    },
  },
] as RouteRecordRaw[]
