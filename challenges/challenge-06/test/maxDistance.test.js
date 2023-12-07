import { maxDistance } from '../maxDistance.js'
describe('Cyber truck de santa', () => {
  test('Test #1 - ">>*<"', () => {
    const movements = '>>*<'
    const result = maxDistance(movements)

    const SOLUTION = 2

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })
})
