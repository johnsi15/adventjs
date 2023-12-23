import { maxGifts } from '../maxGifts.js'
describe('Calculando el tiempo', () => {
  test('Test #1', () => {
    const result = maxGifts([2, 4, 2])
    const SOLUTION = 4

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })

  test('Test #2', () => {
    const result = maxGifts([5, 1, 1, 5])
    const SOLUTION = 10

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })
})
