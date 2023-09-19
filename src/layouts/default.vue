<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <van-nav-bar fixed :left-arrow="route.meta.backwards" :title="route.meta.title" @click-left="router.back()" />
  <safe-area top>
    <div class="h-full overflow-auto">
      <router-view />
    </div>
  </safe-area>
</template>
