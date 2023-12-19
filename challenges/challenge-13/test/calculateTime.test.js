import { calculateTime } from '../calculateTime.js'
describe('Calculando el tiempo', () => {
  test('Test #1', () => {
    const result = calculateTime(['00:10:00', '01:00:00', '03:30:00'])

    expect(result).toBeTruthy()
  })
})
