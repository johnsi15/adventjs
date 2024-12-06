export function organizeShoes(shoes) {
  const pairs = []
  const boot_counts = new Map()

  for (const shoe of shoes) {
    const size = shoe.size
    const type = shoe.type

    if (!boot_counts.has(size)) {
      boot_counts.set(size, { I: 0, R: 0 })
    }

    boot_counts.get(size)[type]++
  }

  for (const [size, counts] of boot_counts) {
    const { I, R } = counts
    const min = Math.min(I, R)

    if (min > 0) {
      pairs.push(...new Array(min).fill(size))
    }
  }

  return pairs
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 },
]

const result = organizeShoes(shoes)
console.log(result)
// [38, 42]
