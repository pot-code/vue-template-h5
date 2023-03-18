import type { SysDictVo, DictMap, DictItem } from './types'

// transform SysDictVo array to DictMap
export function transformSysDictVoToDictMap(sysDictVoList: SysDictVo[]): DictMap {
  const dictMap: DictMap = new Map()
  sysDictVoList.forEach((sysDictVo: SysDictVo) => {
    const dictItem = dictMap.get(sysDictVo.dictType)
    if (dictItem) {
      dictItem.push({
        label: sysDictVo.dictLabel,
        value: sysDictVo.dictValue,
      })
    } else {
      dictMap.set(sysDictVo.dictType, [
        {
          label: sysDictVo.dictLabel,
          value: sysDictVo.dictValue,
        },
      ])
    }
  })
  return dictMap
}

// search DictItem from DictItem array by value and return its label if exists, use Array.find
export function searchDictItemByValue(dictItemList: DictItem[], value: number): string | undefined {
  return dictItemList.find((dictItem: DictItem) => dictItem.value === value)?.label
}
