import crypto from 'crypto-es'
import type { WordArray } from 'crypto-es/lib/core'

export class AEScbcPkcs7 {
  private key: WordArray
  private iv: WordArray

  constructor(key: string, iv: string) {
    this.key = crypto.enc.Utf8.parse(key)
    this.iv = crypto.enc.Utf8.parse(iv)
  }

  decrypt(ciphertext: string) {
    const decrypted = crypto.AES.decrypt(ciphertext, this.key, {
      iv: this.iv,
    })
    return decrypted.toString(crypto.enc.Utf8)
  }
}
