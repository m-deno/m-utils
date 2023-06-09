# m-utils

## random
```js
import { getMinMaxInt, randomCode, getRandomInt } from "https://deno.land/x/m_utils/mod.ts";

// 获取4位数的最小值和最大值
console.log(getMinMaxInt(4));
// [ 1000, 9999 ]

// 获取1000-9999中的随机值
console.log(getRandomInt(1000, 9999));
// 9460

// 获取4位随机值
console.log(randomCode(4));
// 8791

// 获取5位随机值
console.log(randomCode(5));
// 35658
```
## url
```ts
import { parseUrl, TUrl } from "https://deno.land/x/m_utils/mod.ts";

const obj: TUrl = parseUrl('http://www.baidu.com/a?a=1&b=1&c=1.0&d=111')
// { a: "1", b: "1", c: "1.0", d: "111" }
```

```ts
import { pickParams } from "https://deno.land/x/m_utils/mod.ts";

const obj = pickParams('http://www.baidu.com?&a=1&b=1&c=1.0&d=111', 'd')

console.log(obj2);
// 111
```

```ts
import { isValidUrl } from "https://deno.land/x/m_utils/mod.ts";

console.log(isValidUrl('a=1&b=2') );
// false
```

```ts
const obj: TUrl = getUrlParams('?a=1&b=1&c=1.0&d=111')

console.log(obj3);
// { a: "1", b: "1", c: "1.0", d: "111" }
```

## string
```ts
import { splitByOperators } from "https://deno.land/x/m_utils/mod.ts";

splitByOperators('a=1&b=12') 
// { a: "1", b: "12" }

splitByOperators('a#1&b#12', '&', '#') 
// { a: "1", b: "12" }
```
```ts
import { getObjectByOperators } from "https://deno.land/x/m_utils/mod.ts";

getObjectByOperators('b=2&a=1', '&', '=')
// { b: "2", a: "1" }

getObjectByOperators('b=2+d&a=1+c=3', '', '&', '+', '=')
// { b: "2", a: "1", c: "3" }
```

## object
```ts
import { isEmpty } from "https://deno.land/x/m_utils/mod.ts";

isEmpty('') // true
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty({}) // false
```
```ts
import { objectEmpty } from "https://deno.land/x/m_utils/mod.ts";

objectEmpty({}) // true
objectEmpty(null) // true
objectEmpty(1) // true
```
```ts
import { hasProperty } from "https://deno.land/x/m_utils/mod.ts";

hasProperty({a: 1}, 'a') // true
hasProperty({a: 1}, 'b') // false
hasProperty({a: 1}, '') // false
```