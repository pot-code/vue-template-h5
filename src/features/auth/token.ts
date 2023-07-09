import type { Storage } from '@/core/storage/types'

export class TokenStorage {
  constructor(
    private tokenName: string,
    private storage: Storage,
  ) {}

  save(token: string) {
    return this.storage.save(this.tokenName, token)
  }

  get() {
    return this.storage.get<string>(this.tokenName)
  }

  clear() {
    return this.storage.delete(this.tokenName)
  }
}
