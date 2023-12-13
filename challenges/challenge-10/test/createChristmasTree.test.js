import { createChristmasTree } from '../createChristmasTree.js'
describe('Ordenando el almacén', () => {
  test('Test #1', () => {
    const ornaments = '123'
    const height = 4
    const result = createChristmasTree(ornaments, height)

    const SOLUTION = `   1
  2 3
 1 2 3
1 2 3 1
   |
`

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })

  test('Test #2', () => {
    const ornaments = '*@o'
    const height = 3
    const result = createChristmasTree(ornaments, height)

    const SOLUTION = `  *
 @ o
* @ o
  |
`

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })
})
