<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <van-nav-bar fixed :left-arrow="route.meta.backwards" :title="route.meta.title" @click-left="router.back()" />
  <div class="sub-view-container">
    <div class="view">
      <router-view />
    </div>
  </div>
</template>
