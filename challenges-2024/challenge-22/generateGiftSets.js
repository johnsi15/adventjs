export function generateGiftSets(gifts) {
  const result = []
  const stack = [{ combination: [], start: 0 }]

  while (stack.length > 0) {
    const { combination, start } = stack.shift()

    if (combination.length > 0) {
      result.push([...combination])
    }

    for (let i = start; i < gifts.length; i++) {
      stack.push({
        combination: [...combination, gifts[i]],
        start: i + 1,
      })
    }
  }

  return result
}

const result = generateGiftSets(['car', 'doll', 'puzzle'])

console.log({ result })
