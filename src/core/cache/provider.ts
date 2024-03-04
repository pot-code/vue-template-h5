export interface CacheProvider {
  name: string

  set<T>(key: string, value: T): Promise<void>
  get<T>(key: string): Promise<T>
  delete(key: string): Promise<void>
  clear(): Promise<void>
}

export class BrowserSessionStorage implements CacheProvider {
  name = 'BrowserSessionStorage'

  set(key: string, value: any) {
    return Promise.resolve(window.sessionStorage.setItem(key, JSON.stringify(value)))
  }
  get(key: string) {
    const value = window.sessionStorage.getItem(key)
    if (value) return Promise.resolve(JSON.parse(value))
    return Promise.resolve(value)
  }
  delete(key: string) {
    return Promise.resolve(window.sessionStorage.removeItem(key))
  }
  clear() {
    return Promise.resolve(window.sessionStorage.clear())
  }
}

export class BrowserLocalStorage implements CacheProvider {
  name = 'BrowserLocalStorage'

  set(key: string, value: any) {
    return Promise.resolve(window.localStorage.setItem(key, JSON.stringify(value)))
  }
  get(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) return Promise.resolve(JSON.parse(value))
    return Promise.resolve()
  }
  delete(key: string) {
    return Promise.resolve(window.localStorage.removeItem(key))
  }
  clear() {
    return Promise.resolve(window.localStorage.clear())
  }
}
