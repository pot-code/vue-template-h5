<script setup lang="ts">
import logo from '@/assets/images/sg-logo.png'
import { authApi } from '@/features/auth/api'
import type { LoginPayload } from '@/features/auth/types'
import { defaultTokenStorage } from '@/lib/token/storage'
import { useMutation } from '@tanstack/vue-query'

const formData = reactive<LoginPayload>({
  username: '',
  password: '',
})
const router = useRouter()
const { mutate, isLoading } = useMutation(authApi.login)

function onSubmit() {
  mutate(formData, {
    onSuccess({ data }) {
      if (data) {
        defaultTokenStorage.save(data.access_token)
        router.replace({ name: 'home' })
      }
    },
  })
}
</script>

<template>
  <div class="h-full">
    <van-form @submit="onSubmit">
      <van-field
        size="large"
        placeholder="请输入用户名"
        v-model="formData.username"
        :rules="[{ required: true, message: '用户名必填' }]"
      >
        <template #left-icon>
          <svg-icon name="username" />
        </template>
      </van-field>
      <van-field
        size="large"
        placeholder="请输入密码"
        type="password"
        v-model="formData.password"
        :rules="[{ required: true, message: '密码必填' }]"
      >
        <template #left-icon>
          <svg-icon name="password" />
        </template>
      </van-field>
      <div class="p-6">
        <van-button block round :disabled="isLoading" type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div>
      <img class="h-4 m-auto" :src="logo" />
    </div>
  </div>
  <van-toast
    :show="isLoading"
    forbid-click
    type="loading"
    message="登录中..."
    loading-type="circular"
  />
</template>
