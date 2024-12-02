export function maxGifts(houses) {
  const len = houses.length
  let maxValue = 0

  if (len === 1) {
    return houses[0]
  }

  let prevMax = houses[0]
  maxValue = Math.max(houses[0], houses[1])

  for (let i = 2; i < len; i++) {
    const temp = maxValue
    maxValue = Math.max(maxValue, prevMax + houses[i])
    prevMax = temp
  }

  return maxValue
}

const result = maxGifts([2, 4, 2]) // 4 (4)
console.log({ result })

const result2 = maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
console.log({ result2 })

const result3 = maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
console.log({ result3 })

// const result4 = maxGifts([1, 3, 1, 3, 100]) // 103
// console.log({ result4 })

// const result5 = maxGifts([100]) // 100
// console.log({ result5 })
