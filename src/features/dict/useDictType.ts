import { useDictStore } from './useDictStore'

export default function useDictType(dictType: string) {
  const dictStore = useDictStore()
  return dictStore.dictMap.get(dictType)
}
