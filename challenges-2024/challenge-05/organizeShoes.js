export function organizeShoes(shoes) {
  const pairs = []

  for (const shoe of shoes) {
    let pair = null
    for (let i = 1; i < shoes.length; i++) {
      if (shoe.type === 'I' && shoes[i].type === 'R' && shoe.size === shoes[i].size) {
        pair = shoe.size
        pairs.push(pair)
        shoes.splice(i, 1)
        break
      } else if (shoe.type === 'R' && shoes[i].type === 'I' && shoe.size === shoes[i].size) {
        pair = shoe.size
        pairs.push(pair)
        shoes.splice(i, 1)
        break
      }
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
