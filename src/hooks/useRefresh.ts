import { ref, watch, type Ref } from 'vue'

export default function useRefresh(isFetching: Ref<boolean>, onRefresh: () => void) {
  const refresh = ref()

  watch(refresh, (v) => {
    if (v) onRefresh()
  })

  watch(
    () => isFetching.value,
    (v) => {
      if (!v) refresh.value = false
    },
  )

  return { refresh }
}
