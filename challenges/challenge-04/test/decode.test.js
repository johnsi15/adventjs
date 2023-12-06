import { decode } from '../decode.js'
describe('Decode message', () => {
  test('Should return a formatted message = hola mundo', () => {
    const text = 'hola (odnum)'
    const result = decode(text)

    expect(result).toBeDefined()
    expect(result).toBe('hola mundo')
  })

  test('Should return a formatted message = hello world!', () => {
    const text = '(olleh) (dlrow)!'
    const result = decode(text)

    expect(result).toBeDefined()
    expect(result).toBe('hello world!')
  })

  test('Should return a formatted message = santaclaus', () => {
    const text = 'sa(u(cla)atn)s'
    const result = decode(text)

    expect(result).toBeDefined()
    expect(result).toBe('santaclaus')
  })
})
