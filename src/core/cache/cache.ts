import type { CacheProvider } from './provider'

export class LocalCache<T = any> {
  /**
   * 创建缓存实例
   * @param key 缓存键值
   * @param provider 缓存后端
   */
  constructor(
    private readonly key: string,
    private readonly provider: CacheProvider,
  ) {}

  get = () => this.provider.get<T>(this.key)

  set = (value: T) => this.provider.set(this.key, value)

  clear = () => this.provider.delete(this.key)
}
