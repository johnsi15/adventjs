import { maxGifts } from '../maxGifts.js'
describe('Calculando el tiempo', () => {
  test('Test #1', () => {
    const result = maxGifts([2, 4, 2])
    const SOLUTION = '4 (4)'

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })
})
