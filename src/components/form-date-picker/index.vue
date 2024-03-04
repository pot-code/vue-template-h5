<script setup lang="ts">
import type { DatePickerColumnType, FieldRule } from 'vant'

const props = defineProps<{
  show: boolean
  label: string
  modelValue?: string
  placeholder?: string
  rules?: FieldRule[]
  columnsType?: DatePickerColumnType[]
}>()
const emit = defineEmits(['update:modelValue', 'update:show', 'select', 'click'])

const displayText = computed(() => props.modelValue)
const currentDate = computed(() => props.modelValue?.split('-'))
const show = computed<boolean>({
  get() {
    return props.show
  },
  set(value) {
    emit('update:show', value)
  },
})

function onConfirm({ selectedValues }: { selectedValues: string[] }) {
  const formattedDate = selectedValues.join('-')

  emit('select', formattedDate)
  emit('update:modelValue', formattedDate)
  emit('update:show', false)
}

function onCancel() {
  emit('update:show', false)
}
</script>

<template>
  <van-field
    is-link
    readonly
    v-model="displayText"
    label-class="font-bold"
    :label="label"
    :placeholder="placeholder"
    :rules="rules"
    @click="emit('click')"
  />
  <van-popup v-model:show="show" round position="bottom">
    <van-date-picker v-model="currentDate" :columns-type="columnsType" @confirm="onConfirm" @cancel="onCancel">
      <template #columns-top>
        <slot name="columns-top" />
      </template>
    </van-date-picker>
  </van-popup>
</template>
