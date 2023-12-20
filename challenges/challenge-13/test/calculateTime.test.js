import { calculateTime } from '../calculateTime.js'
describe('Calculando el tiempo', () => {
  test('Test #1', () => {
    const result = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
    const SOLUTION = '-02:20:00'

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })

  test('Test #2', () => {
    const result = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
    const SOLUTION = '00:30:00'

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })
})
