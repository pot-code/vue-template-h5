<script setup lang="ts">
import { useUserStore } from '@/features/auth/useUserStore'

const router = useRouter()
const userStore = useUserStore()

const unsubscribe = userStore.$onAction(({ name, after }) => {
  if (name === 'logout') {
    after(() => {
      router.replace({ name: 'login' })
    })
  }
})

onBeforeUnmount(() => {
  unsubscribe()
})
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center">
    <local-icon name="heart" />
    <h1 class="text-base">Hello H5</h1>
  </div>
</template>
