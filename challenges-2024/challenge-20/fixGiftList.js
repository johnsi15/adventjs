export function fixGiftList(received, expected) {
  const receivedCount = new Map()

  received.forEach(item => {
    if (receivedCount.has(item)) {
      receivedCount.set(item, receivedCount.get(item) + 1)
    } else {
      receivedCount.set(item, 1)
    }
  })

  const missing = {}

  expected.forEach(item => {
    if (receivedCount.has(item)) {
      const count = receivedCount.get(item)
      if (count > 1) {
        receivedCount.set(item, count - 1)
      } else {
        receivedCount.delete(item)
      }
    } else {
      missing[item] = (missing[item] || 0) + 1
    }
  })

  const extra = Object.fromEntries(receivedCount)

  return {
    missing,
    extra,
  }
}

const result = fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
console.log(result)
