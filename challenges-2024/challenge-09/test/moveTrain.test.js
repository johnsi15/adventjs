import { moveTrain } from '../moveTrain'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const board = ['·····', '*····', '@····', 'o····', 'o····']

    const result = moveTrain(board, 'U')

    expect(result).toBeDefined()
    expect(result).toBe('eat')
  })
})
