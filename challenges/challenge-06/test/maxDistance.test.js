import { maxDistance } from '../maxDistance.js'
describe('Cyber truck de santa', () => {
  test('Test #1', () => {
    const movements = '>>*<'
    const result = maxDistance(movements)

    const SOLUTION = 2

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })

  test('Test #2', () => {
    const movements = '<<<>'
    const result = maxDistance(movements)

    const SOLUTION = 2

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })

  test('Test #3', () => {
    const movements = '>***>'
    const result = maxDistance(movements)

    const SOLUTION = 5

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })

  test('Test #4', () => {
    const movements = '***<<<<>>>>>***'
    const result = maxDistance(movements)

    const SOLUTION = 5

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })

  test('Test #4', () => {
    const movements = '<<**>>'
    const result = maxDistance(movements)

    const SOLUTION = 2

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })
})
