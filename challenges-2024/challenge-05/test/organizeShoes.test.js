import { createXmasTree } from '../organizeShoes'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const tree = `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`
    const result = createXmasTree(5, '*')

    expect(result).toBeDefined()
    expect(result).toEqual(tree)
  })
})
