import { type Ref, ref, unref, watch } from 'vue'

export default function useLoadMore(isLoading: Ref<boolean>, onLoadMore: () => void) {
  const loadMore = ref(unref(isLoading))

  watch(
    () => isLoading.value,
    (v) => {
      loadMore.value = v
    },
  )

  watch(loadMore, (v) => {
    if (v) onLoadMore()
  })

  return { loadMore }
}
