import { adjustLights } from '../adjustLights.js'
describe('Ordenando el almacén', () => {
  test('Test #1', () => {
    const result = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])

    const SOLUTION = 1

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })

  test('Test #2', () => {
    const result = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])

    const SOLUTION = 2

    expect(result).toBeDefined()
    expect(result).toBe(SOLUTION)
  })
})
