export function calculatePrice(ornaments) {
  const prices = {
    '*': 1,
    o: 5,
    '^': 10,
    '#': 50,
    '@': 100,
  }

  let result = 0

  for (let i = 0; i < ornaments.length; i++) {
    const ornament = ornaments[i]
    const currentPrice = prices[ornament]

    if (currentPrice === undefined) return undefined

    const prevOrnament = ornaments[i - 1]
    const prevPrice = prices[prevOrnament]

    console.log({ prevPrice, prevOrnament, currentPrice })

    if (currentPrice > prevPrice) {
      result += currentPrice - 2 * prevPrice
    } else {
      result += currentPrice
    }
  }

  return result
}

const result = calculatePrice('***')
console.log(result)
