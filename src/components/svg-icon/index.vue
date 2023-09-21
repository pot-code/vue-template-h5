<script setup lang="ts">
import icons from './icons'

const props = defineProps<{
  name: string
}>()

const icon = computed(() => {
  const name = `../../assets/icons/${props.name}.svg`
  return icons[name]
})
</script>

<template>
  <component :is="icon" class="icon" />
</template>
