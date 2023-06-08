/**
 * 判断值是否为空
 * 
 * @example 
 * ```ts
 *  isEmpty('') // true
 *  isEmpty(null) // true
 *  isEmpty(undefined) // true
 *  isEmpty({}) // false
 * ```
 * 
 * @param {any} value 判断的值
 * @returns {boolean} 是否为空
 */
export function isEmpty(value: any): boolean {
  return !value
}

/**
 * 判断对象是否为空
 * 
 * @example
 * ```ts
 *  objectEmpty({}) // true
 *  objectEmpty(null) // true
 *  objectEmpty(1) // true
 * ```
 * 
 * @param {number} length 生成数据的长度n
 * @returns {boolean} url是否合法
 */
export function objectEmpty(obj: any): boolean {
  if (!obj) {
    return true
  }
  return Object.keys(obj).length === 0;
}

/**
 * 判断对象是否包含某个属性
 * 
 * @example
 * ```ts
 *  hasProperty({a: 1}, 'a') // true
 *  hasProperty({a: 1}, 'b') // false
 *  hasProperty({a: 1}, '') // false
 * ```
 * 
 * @param {any} obj 目标对象
 * @param {string} key 查找的key
 * @returns {boolean} 对象中是否有该属性
 */
export function hasProperty(obj: any, key: string): boolean {
  return obj.hasOwnProperty(key)
}