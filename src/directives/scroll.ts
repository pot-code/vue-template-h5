import type { DirectiveBinding } from 'vue'

const scrollMap = new Map<string, number>()

// 保存滚动条位置
const vScroll = {
  mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
    const scrollId = binding.value
    if (scrollMap.has(scrollId)) {
      nextTick(() => {
        el.scrollTo({ top: scrollMap.get(scrollId) })
      })
    } else {
      scrollMap.set(scrollId, 0)
    }
  },
  beforeUnmount(el: HTMLElement, binding: DirectiveBinding<string>) {
    const scrollId = binding.value
    scrollMap.set(scrollId, el.scrollTop)
  },
}

export default vScroll
