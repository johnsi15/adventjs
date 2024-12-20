import { removeSnow } from '../removeSnow'
describe('Files names', () => {
  test('Should return an string', () => {
    const result = removeSnow('zxxzoz') // -> "oz"

    expect(result).toBeDefined()
    expect(result).toBe('oz')
  })
})
