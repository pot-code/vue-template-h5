import DetailView from '@/pages/detail.vue'
import DefaultLayout from '@/layouts/default.vue'

import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/detail',
  component: DefaultLayout,
  children: [
    {
      path: '',
      name: 'detail',
      component: DetailView,
      meta: {
        title: '组件展示',
        backwards: true,
      },
    },
  ],
} as RouteRecordRaw
