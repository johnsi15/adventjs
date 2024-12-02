import { manufacture } from '../manufacture.js'
describe('Gift list', () => {
  test('Should return gift list-> ["tren", "oso"]', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'
    const giftList = manufacture(gifts, materials)

    expect(giftList).toBeDefined()
    expect(giftList).toHaveLength(2)
    expect(giftList).toContain('tren')
  })

  test('Should return gift list-> [ ]', () => {
    const gifts = ['libro', 'ps5']
    const materials = 'psli'
    const giftList = manufacture(gifts, materials)

    expect(giftList).toBeDefined()
    expect(giftList).toBeInstanceOf(Array)
    expect(giftList).toHaveLength(0)
  })
})
