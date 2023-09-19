<script setup lang="ts">
import { tabs } from '@/router/routes'
import { ref } from 'vue'
import { useRoute, useRouter, type RouteRecordRaw } from 'vue-router'

interface NavTabItem {
  label: string
  icon: string
  route: string
}

function routeToTabItem(route: RouteRecordRaw): NavTabItem {
  return {
    label: route.meta!.label!,
    route: route.name!.toString(),
    icon: route.meta!.icon!,
  }
}

const tabItems = tabs.map(routeToTabItem)

const route = useRoute()
const router = useRouter()
const activeRoute = ref(route.name?.toString())
</script>

<template>
  <van-nav-bar fixed :left-arrow="route.meta.backwards" :title="route.meta.title" @click-left="router.back()" />
  <safe-area top bottom>
    <div class="h-full">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </safe-area>
  <van-tabbar v-model="activeRoute">
    <van-tabbar-item v-for="item in tabItems" :key="item.label" :name="item.route" :to="{ name: item.route }">
      {{ item.label }}
      <template #icon="{ active }">
        <svg-icon :name="`${item.icon}${active ? '-active' : ''}`" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
