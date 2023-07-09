import type { Storage } from './types'

export class SessionStorage implements Storage {
  save(key: string, value: any): Promise<void> {
    window.sessionStorage.setItem(key, JSON.stringify(value))
    return Promise.resolve()
  }
  get<T>(key: string): Promise<T | null> {
    const value = window.sessionStorage.getItem(key)
    if (value) {
      return Promise.resolve(JSON.parse(value))
    }
    return Promise.resolve(null)
  }
  clear(): Promise<void> {
    window.sessionStorage.clear()
    return Promise.resolve()
  }
  delete(key: string): Promise<Boolean> {
    window.sessionStorage.removeItem(key)
    return Promise.resolve(true)
  }
}

export class LocalStorage implements Storage {
  save(key: string, value: any): Promise<void> {
    window.localStorage.setItem(key, JSON.stringify(value))
    return Promise.resolve()
  }
  get<T>(key: string): Promise<T | null> {
    const value = window.localStorage.getItem(key)
    if (value) {
      return Promise.resolve(JSON.parse(value))
    }
    return Promise.resolve(null)
  }
  clear(): Promise<void> {
    window.localStorage.clear()
    return Promise.resolve()
  }
  delete(key: string): Promise<Boolean> {
    window.localStorage.removeItem(key)
    return Promise.resolve(true)
  }
}
