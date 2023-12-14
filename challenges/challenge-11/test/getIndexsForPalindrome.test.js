import { getIndexsForPalindrome } from '../getIndexsForPalindrome.js'
describe('Ordenando el almacén', () => {
  test('Test #1', () => {
    const word = 'anna'
    const result = getIndexsForPalindrome(word)

    const SOLUTION = []

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })
})
