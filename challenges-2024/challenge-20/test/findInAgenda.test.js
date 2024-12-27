import { fixGiftList } from '../fixGiftList'
describe('Files names', () => {
  test('Should return an object', () => {
    const result = fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])

    expect(result).toBeDefined()
    expect(result).toEqual({
      missing: { ball: 1 },
      extra: { car: 1 },
    })
  })
})
