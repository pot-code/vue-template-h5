<script setup lang="ts">
import ErrorBoundary from './features/errors/ErrorBoundary.vue'
</script>

<template>
  <van-config-provider class="h-full">
    <router-view />
    <error-boundary />
  </van-config-provider>
</template>
