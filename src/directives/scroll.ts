import type { DirectiveBinding } from 'vue'

const scrollMap = new Map<string, number>()

// 保存滚动条位置
const scroll = {
  mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
    const id = binding.value
    if (scrollMap.has(id)) {
      nextTick(() => {
        el.scrollTo({ top: scrollMap.get(id) })
      })
    } else {
      scrollMap.set(id, 0)
    }
  },
  beforeUnmount(el: HTMLElement, binding: DirectiveBinding<string>) {
    const scrollId = binding.value
    scrollMap.set(scrollId, el.scrollTop)
  },
}

export default scroll
