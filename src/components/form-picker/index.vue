<script setup lang="ts">
import type { FieldRule, PickerOption } from 'vant'

const props = defineProps<{
  show: boolean
  label: string
  options: PickerOption[]
  modelValue: unknown
  placeholder?: string
  rules?: FieldRule[]
  loading?: boolean
}>()
const emit = defineEmits(['update:modelValue', 'update:show', 'select', 'click'])

const displayText = computed(() => props.options.find((v) => v.value === props.modelValue)?.text)
const show = computed<boolean>({
  get() {
    return props.show
  },
  set(value) {
    emit('update:show', value)
  },
})

function onConfirm({ selectedValues }: { selectedValues: unknown[] }) {
  const selectedValue = selectedValues[0]

  emit('select', selectedValue)
  emit('update:modelValue', selectedValue)
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
    <van-picker :loading="loading" :columns="options" @confirm="onConfirm" @cancel="onCancel">
      <template #columns-top>
        <slot name="columns-top" />
      </template>
    </van-picker>
  </van-popup>
</template>
