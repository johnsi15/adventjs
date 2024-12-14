import { compile } from '../compile'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const instructions = [
      'MOV -1 C', // copia -1 al registro 'C',
      'INC C', // incrementa el valor del registro 'C'
      'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
      'MOV C A', // copia el registro 'C' al registro 'a',
      'INC A', // incrementa el valor del registro 'a'
    ]

    const result = compile(instructions)

    expect(result).toBeDefined()
    expect(result).toBe(2)
  })
})
