import { findInAgenda } from '../findInAgenda'
describe('Files names', () => {
  test('Should return an object', () => {
    const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

    const result = findInAgenda(agenda, '34-600-123-456')

    expect(result).toBeDefined()
    expect(result).toEqual({ name: 'Juan Perez', address: 'Calle Gran Via 12' })
  })
})
