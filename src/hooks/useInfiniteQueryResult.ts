import type { HttpPaginationResponse } from '@/types/http'
import type { InfiniteData } from '@tanstack/vue-query'
import { flatten } from 'lodash-es'
import { computed, type Ref } from 'vue'

export default function useInfiniteQueryResult<T>(
  data: Ref<undefined> | Ref<InfiniteData<HttpPaginationResponse<T>>>,
  isLoading: Ref<boolean>,
  isFetching: Ref<boolean>,
  isFetchingNextPage: Ref<boolean>,
  hasNextPage: Ref<boolean | undefined> | undefined
) {
  const dataList = computed(() => flatten(data.value?.pages.map((v) => v.rows)))
  const isFetchingData = computed(() => isLoading.value || isFetchingNextPage.value)
  const isRefreshing = computed(() => !isFetchingData.value && isFetching.value)
  const hasMore = computed(() => Boolean(hasNextPage?.value))

  return { dataList, isFetchingData, isRefreshing, hasMore }
}
