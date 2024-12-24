import { isRobotBack } from '../isRobotBack'
describe('Files names', () => {
  test('Should return an array or boolean', () => {
    const result = isRobotBack('R')

    expect(result).toBeDefined()
    expect(result).toEqual([1, 0])
  })
})
