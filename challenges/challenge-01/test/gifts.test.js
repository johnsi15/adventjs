import { findFirstRepeated } from '../gifts.js'
describe('First repeat gift', () => {
  test('Should return first repeated id = 3', () => {
    const giftIds = [2, 1, 3, 5, 3, 2]
    const firstRepeatedId = findFirstRepeated(giftIds)

    expect(firstRepeatedId).toBeDefined()
    expect(firstRepeatedId).toBe(3)
  })

  test('Should return first repeated id = -1', () => {
    const giftIds = [1, 2, 3, 4]
    const firstRepeatedId = findFirstRepeated(giftIds)

    expect(firstRepeatedId).toBeDefined()
    expect(firstRepeatedId).toBe(-1)
  })
})
