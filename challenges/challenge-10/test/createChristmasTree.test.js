import { createChristmasTree } from '../createChristmasTree.js'
describe('Ordenando el almacén', () => {
  test('Test #1', () => {
    const ornaments = '123'
    const height = 4
    const result = createChristmasTree(ornaments, height)

    const SOLUTION = 1

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })
})
