import { organizeShoes } from '../organizeShoes'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const shoes = [
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
      { type: 'I', size: 38 },
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
    ]

    const result = organizeShoes(shoes)

    expect(result).toBeDefined()
    expect(result).toEqual([38, 38])
  })
})
