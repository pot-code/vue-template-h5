<script setup lang="ts">
// icons 是一个 Record 类型对象，对象的键值是通过 glob 引入的文件名，值是 VueElement 对象
// 所以引用时必须在 name 前加上 ../../assets/icons/ 前缀
const icons = import.meta.glob('../../assets/icons/*.svg', { eager: true })

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

<style scoped>
.icon {
  height: 24px;
  width: 24px;
}
</style>
