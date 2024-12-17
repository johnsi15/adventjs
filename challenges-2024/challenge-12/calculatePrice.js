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
    if (prices[ornament] === undefined) return undefined

    const prevOrnament = ornaments[i - 1]
    const currentPrice = prices[ornament]
    const prevPrice = prices[prevOrnament]

    if (prevOrnament && prices[ornament] > prices[prevOrnament]) {
      result += currentPrice - 2 * prevPrice
    } else {
      result += currentPrice
    }
  }

  return result
}

const result = calculatePrice('#@Z')
console.log(result)
