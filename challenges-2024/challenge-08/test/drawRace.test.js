import { drawRace } from '../drawRace'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const result = drawRace([0, 5, -3], 10)

    expect(result).toBeDefined()
    expect(result).toBe('abcde')
  })
})
