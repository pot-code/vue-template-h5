import type { HttpPaginationResponse } from '@/core/http/types'
import type { InfiniteData } from '@tanstack/vue-query'
import { flatten } from 'lodash-es'
import { computed, type Ref } from 'vue'

/**
 * Returns a reactive object that contains the flattened data list, a boolean indicating whether the data is being fetched, a boolean indicating whether the data is being refreshed, and a boolean indicating whether there is more data to fetch.
 *
 * @param {Ref<undefined> | Ref<InfiniteData<HttpPaginationResponse<T>>>} data A reactive reference to the data returned by an infinite query.
 * @param {Ref<boolean>} isLoading A reactive reference to a boolean indicating whether the initial data is being loaded.
 * @param {Ref<boolean>} isFetching A reactive reference to a boolean indicating whether the data is being fetched.
 * @param {Ref<boolean>} isFetchingNextPage A reactive reference to a boolean indicating whether the next page of data is being fetched.
 * @param {Ref<boolean | undefined> | undefined} hasNextPage A reactive reference to a boolean indicating whether there is more data to fetch.
 * @returns {{ dataList: ComputedRef<unknown[]>; isFetchingData: ComputedRef<boolean>; isRefreshing: ComputedRef<boolean>; hasMore: ComputedRef<boolean>; }} The reactive object containing the flattened data list, a boolean indicating whether the data is being fetched, a boolean indicating whether the data is being refreshed, and a boolean indicating whether there is more data to fetch.
 */
export default function useInfiniteQueryResult<T>(
  data: Ref<undefined> | Ref<InfiniteData<HttpPaginationResponse<T>>>,
  isLoading: Ref<boolean>,
  isFetching: Ref<boolean>,
  isFetchingNextPage: Ref<boolean>,
  hasNextPage: Ref<boolean | undefined> | undefined,
) {
  const dataList = computed(() => flatten(data.value?.pages.map((v) => v.data)))
  const isFetchingData = computed(() => isLoading.value || isFetchingNextPage.value)
  const isRefreshing = computed(() => !isFetchingData.value && isFetching.value)
  const hasMore = computed(() => Boolean(hasNextPage?.value))

  return { dataList, isFetchingData, isRefreshing, hasMore }
}
