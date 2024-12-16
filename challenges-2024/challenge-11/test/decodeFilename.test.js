import { decodeFilename } from '../decodeFilename'
describe('First repeat gift', () => {
  test('Should return an string', () => {
    const result = decodeFilename('2023122512345678_sleighDesign.png.grinchwa')

    expect(result).toBeDefined()
    expect(result).toBe('sleighDesign.png')
  })
})
