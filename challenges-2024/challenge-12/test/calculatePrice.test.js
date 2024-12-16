import { calculatePrice } from '../calculatePrice'
describe('Files names', () => {
  test('Should return an string', () => {
    const result = calculatePrice('***') // 3   (1 + 1 + 1)

    expect(result).toBeDefined()
    expect(result).toBe(3)
  })
})
