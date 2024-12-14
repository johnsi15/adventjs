const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A', // incrementa el valor del registro 'a'
]

export function compile(instructions) {
  const register_count = new Map()

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i].split(' ')
    const command = instruction[0]
    const register = instruction[1]
    const value = instruction[2]

    if (!register_count.has(register)) {
      if (/^[A-Za-z]$/.test(register)) {
        register_count.set(register, 0)
      } else if (!isNaN(register)) {
        register_count.set(value, Number(register))
      }
    }

    if (command === 'MOV') {
      if (register_count.has(register) && value === 'A') {
        register_count.set('A', register_count.get(register))
      } else {
        register_count.set(value, +register)
      }
    }

    if (command === 'INC') {
      register_count.set(register, register_count.get(register) + 1)
    }

    if (command === 'JMP') {
      if (register_count.get(register) === 0) {
        i = +value - 1
        continue
      }
    }

    if (command === 'DEC') {
      register_count.set(register, register_count.get(register) - 1)
    }
  }

  return register_count.get('A') ?? undefined
}

const result = compile(instructions) // -> 2
// const result = compile(['INC A', 'INC A', 'DEC A', 'MOV A B']) // -> 1

console.log(result)

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */
