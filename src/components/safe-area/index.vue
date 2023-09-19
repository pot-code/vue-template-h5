<script setup lang="ts">
defineProps<{
  top?: boolean
  bottom?: boolean
}>()
</script>

<template>
  <div :class="['safe-area', 'bg-background', { 'safe-area--top': top }, { 'safe-area--bottom': bottom }]">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.safe-area {
  height: 100vh;
  overflow: hidden;
}

.safe-area--top {
  padding-top: 46px;
}

.safe-area--bottom {
  padding-bottom: 50px;
}
</style>
