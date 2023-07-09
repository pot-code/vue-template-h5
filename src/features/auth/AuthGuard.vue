<script setup lang="ts">
import useAuth from './useAuth'

const router = useRouter()
const { isAuthenticated } = useAuth()

watch(isAuthenticated, (v) => {
  if (!v) router.push({ name: 'login' })
})

onMounted(() => {
  if (!isAuthenticated.value) router.push({ name: 'login' })
})
</script>

<template>
  <router-view v-if="isAuthenticated" />
</template>
