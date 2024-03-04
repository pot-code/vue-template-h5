<script setup lang="ts">
import { formatToYMD } from '@/utils/date'
import type { FieldRule } from 'vant'
import dayjs from 'dayjs'
import { isEmpty, isNil } from 'remeda'

const MIN_DATE = dayjs('2000-01-01').toDate()

const props = defineProps<{
  show: boolean
  label: string
  start: string
  end: string
  placeholder?: string
  rules?: FieldRule[]
  loading?: boolean
}>()
const emit = defineEmits(['update:start', 'update:end', 'update:show', 'click'])

const defaultDate = computed(() =>
  [props.start, props.end].map((v) => {
    if (isNil(v) || isEmpty(v)) return new Date()
    return dayjs(v).toDate()
  }),
)
const displayText = computed(() => [props.start, props.end].filter((v) => !isNil(v) && !isEmpty(v)).join(' ~ '))
const show = computed<boolean>({
  get() {
    return props.show
  },
  set(value) {
    emit('update:show', value)
  },
})

function onConfirm(values: [Date, Date]) {
  const [start, end] = values
  emit('update:start', formatToYMD(start))
  emit('update:end', formatToYMD(end))
  emit('update:show', false)
}
</script>

<template>
  <van-field
    is-link
    readonly
    label-class="font-bold"
    v-model="displayText"
    :label="label"
    :placeholder="placeholder"
    :rules="rules"
    @click="emit('click')"
  />
  <van-calendar
    type="range"
    v-model:show="show"
    :min-date="MIN_DATE"
    :default-date="defaultDate"
    @confirm="onConfirm"
  />
</template>
