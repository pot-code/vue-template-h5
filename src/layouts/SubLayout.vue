<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<template>
  <van-nav-bar fixed :left-arrow="route.meta.backwards" :title="route.meta.title" @click-left="goBack" />
  <div class="sub-view-container">
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.view-container {
  height: 100%;
  padding-top: 92px;
  overflow: hidden;
}

.view {
  height: 100%;
  overflow: auto;
}
</style>
