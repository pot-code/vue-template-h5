export interface Storage {
  save(key: string, value: any): Promise<void>
  get<T>(key: string): Promise<T | null>
  clear(): Promise<void>
  delete(key: string): Promise<Boolean>
}
