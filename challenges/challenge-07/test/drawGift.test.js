import { drawGift } from '../drawGift.js'
describe('Las cajas en 3D', () => {
  test('Test #1', () => {
    const size = 4
    const symbol = '+'
    const result = drawGift(size, symbol)

    const SOLUTION = `   ####
                        #++##
                       #++#+#
                      ####++#
                      #++#+#
                      #++##
                      ####`

    expect(result).toBeDefined()
    expect(result).toEqual(SOLUTION)
  })
})
