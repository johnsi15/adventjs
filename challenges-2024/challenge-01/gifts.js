export function prepareGifts(gifts) {
  const giftsUnit = new Set()

  for (const gift of gifts) {
    giftsUnit.add(gift)
  }

  return [...giftsUnit].sort((a, b) => a - b)
}
