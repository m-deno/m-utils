import { urlHelper, TUrl } from "../mod.ts";

const obj: TUrl = urlHelper.parseUrl('http://www.baidu.com/a?a=1&b=1&c=1.0&d=111')
console.log('$---', obj);

const obj2 = urlHelper.pickParams('http://www.baidu.com?&a=1&b=1&c=1.0&d=111', 'd')
console.log('$---', obj2);


const obj3: TUrl = urlHelper.getUrlParams('?a=1&b=1&c=1.0&d=111')
console.log('$---', obj3);

const obj4: TUrl = urlHelper.getUrlParams('a=1&b=1&c=1.0&d=111')
console.log('$---', obj4);