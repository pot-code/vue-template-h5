export type DictMap = Map<string, DictItem[]>

export interface DictItem {
  label: string
  value: number
}

export interface SysDictVo {
  dictType: string
  dictLabel: string
  dictValue: number
}
