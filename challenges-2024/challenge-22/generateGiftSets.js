export function generateGiftSets(gifts) {
  const result = []
  const stack = [{ path: [gifts[0]], used: Array(gifts.length).fill(false) }]

  gifts.forEach(item => {
    result.push([item])
  })

  console.log(result)

  while (stack.length > 0) {
    const { path, used } = stack.pop()

    result.push(path)
    // if (path.length === gifts.length) {
    //   result.push(path)
    //   continue
    // }

    for (let i = 0; i < gifts.length; i++) {
      if (used[i]) continue

      const newPath = [gifts[i]]
      const newUsed = [...used]

      newUsed[i] = true

      stack.push({ path: newPath, used: newUsed })
    }
  }

  return result
}

const result = generateGiftSets(['car', 'doll', 'puzzle'])

console.log({ result })
