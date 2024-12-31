import { findMissingNumbers } from '../findMissingNumbers'
describe('Challenge 23', () => {
  test('Should return an array', () => {
    const result = findMissingNumbers([1, 2, 4, 6])

    expect(result).toBeDefined()
    expect(result).toEqual([3, 5])
  })
})
