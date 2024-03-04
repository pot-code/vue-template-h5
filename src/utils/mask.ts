/**
 * 数据脱敏
 * @param value 要进行脱敏的字符串
 * @param from 脱敏开始位置
 * @param to 脱敏结束位置
 * @returns
 */
export function mask(value: string, from: number, to: number) {
  return `${value.substring(0, from)}${'*'.repeat(to - from)}${value.substring(to)}`
}

/**
 * 姓名脱敏
 * @param name 姓名
 * @returns
 */
export function maskName(name?: string) {
  if (!name) return ''

  if (name.length === 2) {
    return `${name[0]}*`
  }
  return mask(name, 1, name.length - 1)
}

/**
 * 身份证号脱敏
 * @param idCard 身份证号
 * @returns
 */
export function maskIdCard(idCard?: string) {
  return idCard ? mask(idCard, 6, 15) : ''
}

/**
 * 手机号脱敏
 * @param mobile 手机号
 * @returns
 */
export function maskMobileNumber(mobile?: string) {
  return mobile ? mask(mobile, 3, 7) : ''
}
