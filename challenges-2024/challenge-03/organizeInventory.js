const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' },
]

export function organizeInventory(inventory) {
  let result = {}

  for (const items of inventory) {
    const { name, quantity, category } = items

    if (!result.hasOwnProperty(category)) {
      result[category] = {}
    }

    result[category][name] = (result[category][name] || 0) + quantity
  }

  return result
}

organizeInventory(inventary)

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
