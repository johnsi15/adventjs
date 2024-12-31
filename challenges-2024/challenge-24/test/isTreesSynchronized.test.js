import { isTreesSynchronized } from '../isTreesSynchronized'
describe('Challenge 24', () => {
  test('Should return an array', () => {
    const tree1 = {
      value: '🎄',
      left: { value: '⭐' },
      right: { value: '🎅' },
    }

    const tree2 = {
      value: '🎄',
      left: { value: '🎅' },
      right: { value: '⭐' },
    }

    const result = isTreesSynchronized(tree1, tree2) // [true, '🎄']

    expect(result).toBeDefined()
    expect(result).toEqual([true, '🎄'])
  })
})
