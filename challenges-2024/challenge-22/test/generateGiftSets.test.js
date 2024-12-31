import { generateGiftSets } from '../generateGiftSets'
describe('Challenge 22', () => {
  test('Should return an array', () => {
    const expectResult = [
      ['car'],
      ['doll'],
      ['puzzle'],
      ['car', 'doll'],
      ['car', 'puzzle'],
      ['doll', 'puzzle'],
      ['car', 'doll', 'puzzle'],
    ]

    const result = generateGiftSets(['car', 'doll', 'puzzle'])

    expect(result).toBeDefined()
    expect(result).toEqual(expectResult)
  })
})
