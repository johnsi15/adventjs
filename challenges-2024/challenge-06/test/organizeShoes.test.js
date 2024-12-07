import { inBox } from '../inBox'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const box = ['###', '#*#', '###']

    const result = inBox(box)

    expect(result).toBeDefined()
    expect(result).toBeTruthy()
  })
})
