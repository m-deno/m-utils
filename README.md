# m-utils

## random
```js
import { randomHelper } from "https://deno.land/x/m_utils/mod.ts";

// 获取4位数的最小值和最大值
console.log(randomHelper.getMinMaxInt(4));
// [ 1000, 9999 ]

// 获取1000-9999中的随机值
console.log(randomHelper.getRandomInt(1000, 9999));
// 9460

// 获取4位随机值
console.log(randomHelper.randomCode(4));
// 8791

// 获取5位随机值
console.log(randomHelper.randomCode(5));
// 35658
```
## url
```ts
import { urlHelper, TUrl } from "https://deno.land/x/m_utils/mod.ts";

const obj: TUrl = urlHelper.parseUrl('http://www.baidu.com/a?a=1&b=1&c=1.0&d=111')
// { a: "1", b: "1", c: "1.0", d: "111" }
```

```ts
import { urlHelper } from "https://deno.land/x/m_utils/mod.ts";

const obj = urlHelper.pickParams('http://www.baidu.com?&a=1&b=1&c=1.0&d=111', 'd')

console.log(obj2);
// 111
```

```ts
import { urlHelper } from "https://deno.land/x/m_utils/mod.ts";

console.log(urlHelper.isValidUrl('a=1&b=2') );
// false
```

```ts
const obj: TUrl = urlHelper.getUrlParams('?a=1&b=1&c=1.0&d=111')

console.log(obj3);
// { a: "1", b: "1", c: "1.0", d: "111" }
```

## string
```ts
import { stringHelper } from "https://deno.land/x/m_utils/mod.ts";

stringHelper.splitByOperators('a=1&b=12') 
// { a: "1", b: "12" }

stringHelper.splitByOperators('a#1&b#12', '&', '#') 
// { a: "1", b: "12" }
```
```ts
import { stringHelper } from "https://deno.land/x/m_utils/mod.ts";

stringHelper.getObjectByOperators('b=2&a=1', '&', '=')
// { b: "2", a: "1" }

stringHelper.getObjectByOperators('b=2+d&a=1+c=3', '', '&', '+', '=')
// { b: "2", a: "1", c: "3" }
```

## object
```ts
import { objectHelper } from "https://deno.land/x/m_utils/mod.ts";

objectHelper.isEmpty(null) // true
objectHelper.isEmpty('') // true
objectHelper.isEmpty(undefined) // true
objectHelper.isEmpty({}) // false
```
```ts
import { objectHelperobjectHelper. } from "https://deno.land/x/m_utils/mod.ts";

objectHelper.objectEmpty({}) // true
objectHelper.objectEmpty(null) // true
objectHelper.objectEmpty(1) // true
```
```ts
import { objectHelper } from "https://deno.land/x/m_utils/mod.ts";

objectHelper.hasProperty({a: 1}, 'a') // true
objectHelper.hasProperty({a: 1}, 'b') // false
objectHelper.hasProperty({a: 1}, '') // false
```