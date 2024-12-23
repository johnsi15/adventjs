import { detectBombs } from '../detectBombs'
describe('Files names', () => {
  test('Should return an string', () => {
    const result = detectBombs([
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ])

    expect(result).toBeDefined()
    expect(result).toEqual([
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ])
  })
})
