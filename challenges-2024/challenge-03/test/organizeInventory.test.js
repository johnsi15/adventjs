import { organizeInventory } from '../organizeInventory'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const inventary = [
      { name: 'doll', quantity: 5, category: 'toys' },
      { name: 'car', quantity: 3, category: 'toys' },
      { name: 'ball', quantity: 2, category: 'sports' },
      { name: 'car', quantity: 2, category: 'toys' },
      { name: 'racket', quantity: 4, category: 'sports' },
    ]
    const result = organizeInventory(inventary)

    expect(result).toBeDefined()
    expect(result).toEqual({ toys: { doll: 5, car: 5 }, sports: { ball: 2, racket: 4 } })
  })
})
