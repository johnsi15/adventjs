import { checkIsValidCopy } from '../checkIsValidCopy.js'
describe('Ordenando el almacén', () => {
  test('Test #1', () => {
    const word = 'anna'
    const result = checkIsValidCopy(word)

    const SOLUTION = []

    expect(result).toBeDefined()
    expect(result).toStrictEqual(SOLUTION)
  })
})
