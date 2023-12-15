import { getIndexsForPalindrome } from '../getIndexsForPalindrome.js'
describe('Ordenando el almacén', () => {
  test('Test #1', () => {
    const word = 'anna'
    const result = getIndexsForPalindrome(word)

    const SOLUTION = []

    expect(result).toBeDefined()
    expect(result).toStrictEqual(SOLUTION)
  })

  test('Test #2', () => {
    const word = 'abab'
    const result = getIndexsForPalindrome(word)

    const SOLUTION = [0, 1]

    expect(result).toBeDefined()
    expect(result).toStrictEqual(SOLUTION)
  })

  test('Test #3', () => {
    const word = 'abac'
    const result = getIndexsForPalindrome(word)

    expect(result).toBeNull()
  })

  test('Test #4', () => {
    const word = 'aaababa'
    const result = getIndexsForPalindrome(word)

    expect(result).toStrictEqual([1, 3])
  })
})
