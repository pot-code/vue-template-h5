<script setup lang="ts">
import useLoadMore from '@/hooks/useLoadMore'
import useRefresh from '@/hooks/useRefresh'
import { isEmpty } from 'lodash-es'

const PAGE_BOTTOM_TEXT = '-已经到底了-'

const emit = defineEmits(['load-more', 'refresh'])

const listRef = ref()
const props = withDefaults(
  defineProps<{
    // 要展示的数据
    data: unknown[] | undefined | null
    // 加载状态
    loading: boolean
    // 下拉刷新状态
    refreshing: boolean
    // 是否还有更多数据
    hasMore: boolean | undefined
  }>(),
  {
    loading: true,
  }
)

const { loadMore } = useLoadMore(toRef(props, 'loading'), onLoadMore)
const { refresh } = useRefresh(toRef(props, 'refreshing'), onRefresh)
const finished = computed(() => !props.loading && !props.hasMore)
const noData = computed(() => isEmpty(props.data) && !loadMore.value)

defineExpose({
  list: listRef,
})

function onLoadMore() {
  emit('load-more')
}

function onRefresh() {
  emit('refresh')
}
</script>

<template>
  <van-empty v-if="noData" description="无数据" />
  <div v-else class="p-2" ref="listRef">
    <van-pull-refresh class="min-h-full" v-model="refresh" success-text="刷新成功">
      <van-list
        v-model:loading="loadMore"
        :finished-text="PAGE_BOTTOM_TEXT"
        :finished="finished"
        :offset="32"
      >
        <slot name="list" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
