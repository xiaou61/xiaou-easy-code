/**
 * @description: 剩余时间
 */
export function getTimeArr(now = new Date()) {
  // const Y = now.getFullYear()
  // const M = now.getMonth() + 1
  // const D = now.getDate()
  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()
  return [
    // ...toArr(Y),
    // ...toArr(M),
    // ...toArr(D),
    ...toArr(h),
    ...toArr(m),
    ...toArr(s)
  ]
}

// 更换数组类型
function toArr(n) {
  return n >= 10 ? ('' + n).split('').map(item => Number(item)) : [0, n]
}
