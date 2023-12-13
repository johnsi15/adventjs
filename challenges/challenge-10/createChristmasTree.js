export function createChristmasTree(ornaments, height) {
  let result = ''
  ornaments = ornaments.repeat(height).split('')

  for (let i = 0; i < height; i++) {
    const corte = ornaments.splice(0, i + 1)
    result += ' '.repeat(height - i - 1) + corte.join(' ') + '\n'

    ornaments.push(...corte)
  }

  return result + ' '.repeat(height - 1) + '|' + '\n'
}

const result = createChristmasTree('123', 4)
console.log(result)

const result2 = createChristmasTree('x', 3)
console.log(result2)

const result3 = createChristmasTree('xo', 4)
console.log(result3)
