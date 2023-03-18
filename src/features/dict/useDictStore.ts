import { defineStore } from 'pinia'
import type { DictMap } from './types'

export const useDictStore = defineStore('dict', () => {
  const dictMap = ref<DictMap>(new Map())

  function setDictMap(map: DictMap) {
    dictMap.value = map
  }

  return {
    dictMap,
    setDictMap,
  }
})
