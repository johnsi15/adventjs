import { prepareGifts } from '../gifts.js'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const giftIds = [3, 1, 2, 3, 4, 2, 5]
    const arrayWithOutDuplicate = prepareGifts(giftIds)

    expect(arrayWithOutDuplicate).toBeDefined()
    expect(arrayWithOutDuplicate).toEqual([1, 2, 3, 4, 5])
  })
})
