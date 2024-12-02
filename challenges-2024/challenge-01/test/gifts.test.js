import { prepareGifts } from '../gifts.js'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const giftIds = [2, 1, 3, 5, 3, 2]
    const arrayWithOutDuplicate = prepareGifts(giftIds)

    expect(arrayWithOutDuplicate).toBeDefined()
    expect(arrayWithOutDuplicate).toBe([1, 2, 3, 4, 5])
  })
})
