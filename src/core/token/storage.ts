export interface TokenStorage {
  name: string

  save(token: string): void
  retrieve(): string | null
  clear(): void
}

export class TokenSessionStorage implements TokenStorage {
  name = 'SessionStorage'

  constructor(private key: string) {}

  save(token: string): void {
    window.sessionStorage.save(this.key, token)
  }

  retrieve(): string | null {
    return window.sessionStorage.getItem(this.key)
  }

  clear(): void {
    window.sessionStorage.removeItem(this.key)
  }
}

export class TokenLocalStorage implements TokenStorage {
  name = 'LocalStorage'

  constructor(private key: string) {}

  save(token: string): void {
    window.localStorage.setItem(this.key, token)
  }

  retrieve(): string | null {
    return window.localStorage.getItem(this.key)
  }

  clear(): void {
    return window.localStorage.removeItem(this.key)
  }
}

export const defaultTokenStorage = new TokenLocalStorage('app_token')
