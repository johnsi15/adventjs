export function createChristmasTree(ornaments, height) {
  let result = ''
  const length = ornaments.length // 3

  let duplicate = ornaments.repeat(2).split('')
  // 1 2 3 1 2 3
  // position 1 = 1
  // position 2 = 2 3
  // position 3 = 1 2 3
  // position 4 = 1 2 3 1

  // console.log({ duplicate }) // [ '1', '2', '3', '1', '2', '3' ]

  for (let i = 0; i < height; i++) {
    const corte = duplicate.splice(0, i + 1) // Extraer elementos
    console.log({ i, duplicate, corte })

    const line = ' '.repeat(height - i - 1) + corte.join(' ') + '\n'
    result += line

    duplicate.push(...corte) // Agregar elementos al final
  }

  return result + ' '.repeat(height - 1) + '|' + '\n'
}

const result = createChristmasTree('123', 4)
console.log(result)

const result2 = createChristmasTree('x', 3)
console.log(result2)

// const result3 = createChristmasTree('xo', 4)
// console.log(result3)
// "   x
//   o x
//  o x o
// x o x o
//    |
// "
