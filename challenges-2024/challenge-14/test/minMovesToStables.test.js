import { minMovesToStables } from '../minMovesToStables'
describe('Files names', () => {
  test('Should return an string', () => {
    const result = minMovesToStables([2, 6, 9], [3, 8, 5]) // 3

    expect(result).toBeDefined()
    expect(result).toBe(3)
  })
})
