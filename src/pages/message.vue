<script setup lang="ts">
const router = useRouter()

function onClick() {
  router.push({ name: 'detail' })
}
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center">
    <van-button type="primary" @click="onClick">Open detail page</van-button>
  </div>
</template>
