<script setup lang="ts">
import logo from '@/assets/images/sg-logo.png'
import type { LoginPayload } from '@/features/auth/types'
import useAuth from '@/features/auth/useAuth'

const formData = reactive<LoginPayload>({
  username: '',
  password: '',
})
const { login, isLoggingIn } = useAuth()

function onSubmit() {
  login(toRaw(formData))
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
          <local-icon name="username" />
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
          <local-icon name="password" />
        </template>
      </van-field>
      <div class="p-6">
        <van-button block round :disabled="isLoggingIn" type="primary" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div>
      <img class="h-4 m-auto" :src="logo" />
    </div>
  </div>
  <van-toast :show="isLoggingIn" forbid-click type="loading" message="登录中..." loading-type="circular" />
</template>
