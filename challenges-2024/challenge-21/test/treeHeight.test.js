import { treeHeight } from '../treeHeight'
describe('Challenge 21', () => {
  test('Should return an number', () => {
    const tree = {
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: null,
          right: null,
        },
        right: {
          value: '🎅',
          left: null,
          right: null,
        },
      },
      right: {
        value: '❄️',
        left: null,
        right: {
          value: '🦌',
          left: null,
          right: null,
        },
      },
    }

    const result = treeHeight(tree)

    expect(result).toBeDefined()
    expect(result).toEqual(3)
  })
})
