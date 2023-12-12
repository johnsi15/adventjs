import { organizeGifts } from '../organizeGifts.js'
describe('Ordenando el almacén', () => {
  test('Test #1', () => {
    const gifts = `76a11b`
    const result = organizeGifts(gifts)

    const SOLUTION = `[a]{a}{a}(aaaaaa){b}(b)`

    expect(result).toBeDefined()
    expect(result).toEqual(SOLUTION)
  })
})
