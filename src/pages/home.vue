<script setup lang="ts">
import { useAuthorizedHttpClient } from '@/hooks/useHttpClient'
import { showDialog } from 'vant'

const client = useAuthorizedHttpClient()

function onClick() {
  showDialog({ message: 'it works!' })
}

onMounted(() => {
  client.get('/home')
})
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center">
    <p class="text-base text-success">Home, sweet home</p>
    <van-button type="primary" @click="onClick">Show Dialog</van-button>
  </div>
</template>
