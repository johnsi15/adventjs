import { fixPackages } from '../fixPackages'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const result = fixPackages('a(cb)de')

    expect(result).toBeDefined()
    expect(result).toBe('abcde')
  })
})
