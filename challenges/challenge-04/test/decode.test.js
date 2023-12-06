import { decode } from '../decode.js'
describe('Decode message', () => {
  test('Should return a formatted message = hola mundo', () => {
    const text = 'hola (odnum)'
    const result = decode(text)

    expect(result).toBeDefined()
    expect(result).toBe('hola mundo')
  })
})
