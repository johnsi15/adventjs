export function maxGifts(houses) {
  console.log(houses)
  const len = houses.length

  let maxValue = Math.max(...houses)
  console.log({ maxValue })

  for (let i = 1; i <= len; i++) {
    console.log({ i, gifts: houses[i] })
    if (len === 3 && i === 1) {
      console.log('paso -> ' + i + ' - ' + houses[i - 1])
      maxValue += houses[i - 1]
    }

    if (i > 3 && i % 2 === 0) {
      console.log('paso -> ' + i + ' - ' + houses[i - 1])
      maxValue += houses[i - 1]
    }
  }

  return maxValue
}

// const result = maxGifts([2, 4, 2]) // 4 (4)
// console.log({ result })

// const result2 = maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
// console.log({ result2 })

// const result3 = maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
// console.log({ result3 })

// const result4 = maxGifts([1, 3, 1, 3, 100]) // 103
// console.log({ result4 })

const result5 = maxGifts([3, 4, 5]) // maxGifts([1, 1, 1]) // 2
console.log({ result5 })
