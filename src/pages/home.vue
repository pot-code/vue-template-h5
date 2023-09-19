<script setup lang="ts">
import { showDialog } from 'vant'

function onClick() {
  showDialog({ message: 'it works!' })
}
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center">
    <p class="text-base text-success">Home, sweet home</p>
    <van-button type="primary" @click="onClick">Show Dialog</van-button>
  </div>
</template>
