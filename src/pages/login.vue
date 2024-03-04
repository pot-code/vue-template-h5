<script setup lang="ts">
import { authApi, type LoginPayload } from '@/api/auth'
import useTokenStore from '@/features/auth/useTokenStore'
import { useMutation } from '@tanstack/vue-query'

const formData = reactive<LoginPayload>({
  username: '',
  password: '',
})

const router = useRouter()
const { setToken } = useTokenStore()
const loginMutation = useMutation({
  mutationFn: authApi.login,
  onSuccess({ data }) {
    if (data) {
      setToken(data.access_token)
      router.push({ name: 'home' })
    }
  },
})

function onSubmit(payload: LoginPayload) {
  loginMutation.mutate(payload)
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
          <i-ri-user-fill class="text-neutral-500" />
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
          <i-ri-lock-fill class="text-neutral-500" />
        </template>
      </van-field>
      <div class="p-6">
        <van-button block round :disabled="loginMutation.isPending.value" type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
  <van-toast
    :show="loginMutation.isPending.value"
    forbid-click
    type="loading"
    message="登录中..."
    loading-type="circular"
  />
</template>
