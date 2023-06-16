/**
 * 判断值是否为空
 * 
 * @example 
 * ```ts
 *  objectHelper.isEmpty('') // true
 *  objectHelper.isEmpty(null) // true
 *  objectHelper.isEmpty(undefined) // true
 *  objectHelper.isEmpty({}) // false
 * ```
 * 
 * @param {any} value 判断的值
 * @returns {boolean} 是否为空
 */
export function isEmpty(value: unknown): boolean {
  return !value
}

/**
 * 判断对象是否为空
 * 
 * @example
 * ```ts
 *  objectHelper.objectEmpty({}) // true
 *  objectHelper.objectEmpty(null) // true
 *  objectHelper.objectEmpty(1) // true
 * ```
 * 
 * @param {number} obj 目标值
 * @returns {boolean} url是否合法
 */
export function objectEmpty(obj: unknown): boolean {
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
 *  objectHelper.hasProperty({a: 1}, 'a') // true
 *  objectHelper.hasProperty({a: 1}, 'b') // false
 *  objectHelper.hasProperty({a: 1}, '') // false
 * ```
 * 
 * @param {any} obj 目标对象
 * @param {string} key 查找的key
 * @returns {boolean} 对象中是否有该属性
 */
export function hasProperty(obj: Record<string, unknown>, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * 任意值转boolean(true|false) 
 * 
 * @example 
 * ```ts
 *  objectHelper.toBoolean(null) // false
 * 
 *  objectHelper.toBoolean(undefined) // false
 * 
 *  objectHelper.toBoolean('True') // true
 * 
 *  objectHelper.toBoolean('tRUE') // true
 * 
 *  objectHelper.toBoolean('False') // false
 * 
 *  objectHelper.toBoolean('FALSE') // false
 * ``` 
 *
 * @export
 * @param {unknown} val
 * @return {*}  {boolean}
 */
export function toBoolean(val: unknown): boolean {
  // boolean
  if (typeof val === 'boolean') {
    return val
  }
  // 非boolean
  if (val) {
    try {
      const result = JSON.parse((val as string).toLowerCase())
      return typeof result === 'boolean' ? result : false
    } catch {
      return false
    }
  }
  return false
}