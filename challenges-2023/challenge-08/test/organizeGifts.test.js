import { organizeGifts } from '../organizeGifts.js'
describe('Ordenando el almacén', () => {
  test('Test #1', () => {
    const gifts = `76a11b`
    const result = organizeGifts(gifts)

    const SOLUTION = `[a]{a}{a}(aaaaaa){b}(b)`

    expect(result).toBeDefined()
    expect(result).toEqual(SOLUTION)
  })

  test('Test #2', () => {
    const gifts = `70b120a4c`
    const result = organizeGifts(gifts)

    const SOLUTION = `[b]{b}{b}[a][a]{a}{a}(cccc)`

    expect(result).toBeDefined()
    expect(result).toEqual(SOLUTION)
  })
})
