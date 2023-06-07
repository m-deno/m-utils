/**
 * 随机生成四位数字作为验证码 9999-1000
 * @example
 * randomCode(4)
 * randomCode(5)
 * @param {number} length 要生成的随机数的长度
 * @returns {num } 随机数
 */
export function randomCode(length=4): number {
  let max = 9;
  let min = 1;
  for (let i=1; i< length; i++) {
    min = min * 10
    max = max * 10 + 9
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
