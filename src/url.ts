import { splitByOperators } from "./string.ts";

export type TUrl = Pick<URL, 'origin'|'protocol'|'host'|'pathname'|'hash'> & {
  params: {
    string: unknown
  }
} 

/**
 * 判断一个字符串是否为url
 * 
 * @example
 * Example1
 * ```ts
 *  isValidUrl('http://www.baidu.com') // true
 * ```
 * Example2
 * ```ts
 * isValidUrl('a=1&b=2') // false
 * ```
 * 
 * @param {number} length 生成数据的长度n
 * @returns {boolean} url是否合法
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  } 
}

/**
 * 解析url返回解析后的对象
 * 
 * @example
 * 解析url及参数
 * ```ts
 *  const obj: TUrl = parseUrl('http://www.baidu.com/a?a=1&b=1&c=1.0&d=111')
 *  // output 
 *  [Object: null prototype] {
 *     origin: "http://www.baidu.com",
 *     protocol: "http:",
 *     host: "www.baidu.com",
 *     pathname: "/a",
 *     hash: "",
 *     params: [Object: null prototype] { a: "1", b: "1", c: "1.0", d: "111" }
 *   }
 *   
 * const obj1: TUrl = parseUrl('http://www.baidu.com/#/a?a=1&b=1&c=1.0&d=111')
 * // output  
 * [Object: null prototype] {
 *   origin: "http://www.baidu.com",
 *   protocol: "http:",
 *   host: "www.baidu.com",
 *   pathname: "/",
 *   hash: "#/a",
 *   params: [Object: null prototype] { a: "1", b: "1", c: "1.0", d: "111" }
 * }
 * 
 * const obj2: TUrl = parseUrl('a')
 * if (obj2 && obj2.params) {
 *   console.log(obj2.params['a']);
 * }
 * // output
 * {}
 * ```
 * 
 * @param {number} length 生成数据的长度n
 * @returns {[min, max]} n位数对应的最大值和最小值
 */
export function parseUrl(url: string): TUrl {
  const obj: TUrl = Object.create(null);
  // 判断url是否合法
  if (isValidUrl(url)) {
    const _URL = new URL(url)
    const _obj: TUrl = Object.create(null);
    if (_URL.search) {
      // url?a=1&b=1 search
      // 拆分重组url参数 -> a=1&b=1 -> {a:1, b: 1}
      const urlParamsString = _URL.search.replace('?', '')
      const _objParams = splitByOperators(urlParamsString)
      _obj['params'] = _objParams
    }

    if (_URL.hash) {
      // url/#/a?/a=1&b=1 hash部分参数
      const [hashParamsString, urlParamsString] = _URL.hash.split('?')
      const _objParams = splitByOperators(urlParamsString)
      // 合并params
      _obj['params'] = Object.assign({}, _obj.params, _objParams)
      _obj['hash'] = hashParamsString
    }
    Object.assign(obj, 
      {
        origin: _URL.origin,
        protocol: _URL.protocol,
        host: _URL.host,
        pathname: _URL.pathname,
        hash: _URL.hash
      },
      _obj
    )
    return obj
  }
  // 非正常url
  // a=1&b=1
  const _objParams = splitByOperators(url)
  if (_objParams) {
    obj['params'] = _objParams
  }
  return obj
}

/**
 * 通过正则匹配url中的参数
 * 
 * @example 
 * ```ts
 *  getUrlParams('?a=1&b=1&c=1.0&d=111')
 *  // { a: "1", b: "1", c: "1.0", d: "111" }
 * 
 *  getUrlParams('a=1&b=1&c=1.0&d=111')
 *  // { a: "1", b: "1", c: "1.0", d: "111" }
 * ```
 * 
 * @param {string } url url字符串
 * @returns {object} 参数对象
 */
export function getUrlParams (url: string) {
  const _url = `&${url}`
  const obj = Object.create(null)
  const reg = /[?&][^?&]+=[^?&]+/g
  const arr = _url.match(reg)
  if (!arr) {
    return obj
  }
  arr.forEach(function (item) {
    const tempArr = item.substring(1).split('=');
    const [key, value] = tempArr
    obj[key] = value;
  });
  return obj;
}

/**
 * 获取url中指定参数的值
 * 
 * @example 
 * ```ts
 *  pickParams('http://www.baidu.com?&a=1&b=1&c=1.0&d=111', 'd')
 *  // 111
 * ```
 * 
 * @param {string } url url字符串
 * @param {string } name 获取参数的key
 * @returns {any} 获取参数key对应的value
 */
export function pickParams(url: string, name: string) {
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  const regexS = `[\\?&]${name}=([^&#]*)`;
  const regex = new RegExp(regexS);
  const results = regex.exec(url);
  if (results == null || results == undefined) { 
    return ''; 
  }
  return results[1]; 
}