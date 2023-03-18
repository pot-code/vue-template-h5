import type { SysDictVo } from './types'
import { transformSysDictVoToDictMap } from './util'

// generate test for transformSysDictVoToDictMap
describe('transformSysDictVoToDictMap', () => {
  it('should transform SysDictVo array to DictMap', () => {
    const sysDictVoList: SysDictVo[] = [
      {
        dictType: 'dictType1',
        dictLabel: 'dictLabel1',
        dictValue: 1,
      },
      {
        dictType: 'dictType2',
        dictLabel: 'dictLabel2',
        dictValue: 2,
      },
    ]
    const dictMap = transformSysDictVoToDictMap(sysDictVoList)
    expect(dictMap.size).toBe(2)
    expect(dictMap.get('dictType1')?.length).toBe(1)
  })
})
