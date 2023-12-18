import { checkIsValidCopy } from '../checkIsValidCopy.js'
describe('¿Es una copia válida?', () => {
  test('Test #1', () => {
    const result = checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')

    expect(result).toBeTruthy()
  })

  test('Test #2', () => {
    const result = checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')

    expect(result).toBeFalsy()
  })

  test('Test #3', () => {
    const result = checkIsValidCopy('Santa Claus', 's#+:.#c:. s')

    expect(result).toBeFalsy()
  })

  test('Test #4', () => {
    const result = checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')

    expect(result).toBeFalsy()
  })

  test('Test #5', () => {
    const result = checkIsValidCopy('Santa Claus', 's#+:. c:. s')

    expect(result).toBeTruthy()
  })
})
