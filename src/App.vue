<script setup lang="ts">
import ErrorBoundary from './errors/ErrorBoundary.vue'
</script>

<template>
  <van-config-provider class="h-full">
    <error-boundary>
      <router-view />
    </error-boundary>
  </van-config-provider>
</template>
