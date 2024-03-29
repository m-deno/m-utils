import { isEmpty } from "./object.ts";

/**
 * 根据拆分符号列表对数据进行拆分
 * 
 * @example
 * ```ts
 *  getObjectByOperators('b=2&a=1', '&', '=')
 *  // { b: "2", a: "1" }
 * 
 *  getObjectByOperators('b=2+d&a=1+c=3', '', '&', '+', '=')
 *  // { b: "2", a: "1", c: "3" }
 * ```
 * 
 * @param {string} urlParamsString 参数字符串
 * @returns {object|null} 包装后的对象
 */
export function getObjectByOperators(str: string, ...operators: string[]): Record<string, unknown>|null {
  // 存放解析后数据的结果
  const ret = Object.create(null);
  if (!str) {
    return ret
  }
  // 存放解析后的数据
  let retArr = Array<string>()
  // 遍历操作符
  for (const operator of operators) {
    if (!operator) {
      continue
    }
    // 首次解析
    if (retArr.length === 0) {
      retArr = str.split(operator)
      continue
    }
    // n次解析
    let tmpArr = Array<string>()
    for (const urlParam of retArr) {
      if (urlParam === "") {
        continue;
      }
      const tmpSplits = urlParam.split(operator)
      const [_, value] = tmpSplits
      // 无效键值对
      if (!isEmpty(value)) {
        tmpArr = tmpArr.concat(tmpSplits)
      }
    }
    retArr = tmpArr
  }
  // 拼装结果
  for(let i=0; i<retArr.length; i+=2) {
    Object.assign(ret, {[retArr[i]]: retArr[i+1]})
  }
  return ret
}

/**
 * 根据指定拆分字符将数据转为对象
 * 
 * @example
 * ```ts
 * splitByOperators('a=1&b=12') 
 * // { a: "1", b: "12" }
 * 
 * splitByOperators('a#1&b#12', '&', '#') 
 * // { a: "1", b: "12" }
 * ```
 * 
 * @param {string} str 目标字符串
 * @param {string} operatorTor 参数分割符
 * @param {string} assignTor 赋值分隔符
 */
export function splitByOperators(str: string, operatorTor='&', assignTor='=') {
  const ret = Object.create(null);
  for (const urlParam of str.split(operatorTor)) {
    if (urlParam === "") {
      continue;
    }
    const [key, value] = urlParam.split(assignTor);
    if (value) {
      Object.assign(ret, {[key]: value})
    }
  }
  return Object.keys(ret).length === 0 ? null : ret
}


/**
 * 字符串根据拆分符号转为数字数组
 *
 * @example
 * 
 * ```ts
 *  splitToNumbers('100x100', 'x') // [100, 100]
 * 
 *  splitToNumbers('100ax100', 'x') // []
 * ```
 * 
 * @param {string} str 字符串
 * @param {string} [operator='x'] 拆分字符
 * @return {*}  {number[]}
 */
export function splitToNumbers(str: string, operator='x'):number[] {
  // 拆分字符串
  const splitArray = str.split(operator).map(Number)
  // 判断数组种数据是否合法， 不合法返回][]
  for (let i = 0; i <= splitArray.length; i++) {
    if (!Number.isFinite(splitArray[i])) {
      return []
    }
  }
  return splitArray
}