import { randomHelper } from "../mod.ts";

// 获取4位数的最小值和最大值
console.log(randomHelper.getMinMaxInt(4));

// 获取1000-9999中的随机值
console.log(randomHelper.getRandomInt(1000, 9999));

// 获取4位随机值
console.log(randomHelper.randomCode(4));

// 获取5位随机值
console.log(randomHelper.randomCode(5));

