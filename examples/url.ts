import { parseUrl, TUrl, pickParams, getUrlParams } from "../mod.ts";

const obj: TUrl = parseUrl('http://www.baidu.com/a?a=1&b=1&c=1.0&d=111')
console.log('$---', obj);

const obj2 = pickParams('http://www.baidu.com?&a=1&b=1&c=1.0&d=111', 'd')
console.log('$---', obj2);


const obj3: TUrl = getUrlParams('?a=1&b=1&c=1.0&d=111')
console.log('$---', obj3);

const obj4: TUrl = getUrlParams('a=1&b=1&c=1.0&d=111')
console.log('$---', obj4);