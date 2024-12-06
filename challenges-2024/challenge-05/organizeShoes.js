export function organizeShoes(shoes) {
  const pairs = []
  const shoesMatched = new Set()

  // const boot_counts = new Map()

  for (const shoe of shoes) {
    if (shoesMatched.has(shoe)) continue

    const pair = shoes.find(s => s.size === shoe.size && s.type !== shoe.type && !shoesMatched.has(s))

    if (pair) {
      pairs.push(shoe.size)
      shoesMatched.add(shoe)
      shoesMatched.add(pair)
    }
  }

  return pairs
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
]

const result = organizeShoes(shoes)
console.log(result)
// [38, 42]
