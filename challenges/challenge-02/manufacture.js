export function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    const make = gift.split('').every(char => {
      return materials.match(new RegExp(char, 'g'))?.length > 0
    })

    return make
  })
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

const result = manufacture(gifts, materials) // ["tren", "oso"]

console.log(result)
