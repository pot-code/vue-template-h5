<script setup lang="ts">
import { DemoService } from '@/gen/api'
import { useQuery } from '@tanstack/vue-query'

const pickerValue = ref(0)
const pickerVisible = ref(false)
const datePickerValue = ref('2023-08-08')
const datePickerVisible = ref(false)

const { isPending, data } = useQuery({
  queryKey: ['hello'],
  queryFn: DemoService.getHello,
})
</script>

<template>
  <div>
    <van-cell-group>
      <van-cell title="Vue H5 template" :label="data?.data" />
      <form-picker
        label="选择器"
        v-model:show="pickerVisible"
        v-model="pickerValue"
        :options="[
          {
            text: '选项1',
            value: 0,
          },
          {
            text: '选项2',
            value: 1,
          },
        ]"
        @click="pickerVisible = true"
      />
      <form-date-picker
        label="日期选择器"
        v-model:show="datePickerVisible"
        v-model="datePickerValue"
        @click="datePickerVisible = true"
      />
    </van-cell-group>
    <van-toast overlay type="loading" :show="isPending" message="加载中..." />
  </div>
</template>
