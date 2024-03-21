<script setup lang="ts">
import { type LoginPayload } from '@/api/auth'
import useLogin from '@/features/auth/useLogin'

const formData = reactive<LoginPayload>({
  username: '',
  password: '',
})

const router = useRouter()
const { isPending, login } = useLogin()

function onSubmit(payload: LoginPayload) {
  login(payload).then(() => {
    router.push({ name: 'home' })
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
        <van-button block round :disabled="isPending" type="primary" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>
  </div>
  <van-toast :show="isPending" forbid-click type="loading" message="登录中..." loading-type="circular" />
</template>
