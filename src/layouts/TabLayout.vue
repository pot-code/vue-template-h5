<script setup lang="ts">
import { tabs } from '@/router/routes'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { routeToTabItem } from './util'

const route = useRoute()
const router = useRouter()
const active = ref(route.name?.toString())

const tabItems = tabs.map(routeToTabItem)

function goBack() {
  router.go(-1)
}
</script>

<template>
  <van-nav-bar
    fixed
    :left-arrow="route.meta.backwards"
    :title="route.meta.title"
    @click-left="goBack"
  />
  <div class="tab-view-container">
    <div class="view">
      <router-view />
    </div>
  </div>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in tabItems"
      :key="item.label"
      :name="item.route"
      :to="{ name: item.route }"
    >
      {{ item.label }}
      <template #icon="{ active }">
        <svg-icon :name="`${item.icon}-${active ? 'active' : 'inactive'}`" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
