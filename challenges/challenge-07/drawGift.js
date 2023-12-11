export function drawGift(size, symbol) {
  const symbolLine = '#'
  let result = ''
  let bodyTop = ''
  let bodyBottom = ''
  let mitad = size - 2
  mitad += +!(mitad + 1)

  for (let i = 0; i < mitad; i++) {
    let line = symbolLine + symbol.repeat(mitad) + symbolLine + symbol.repeat(i) + symbolLine

    bodyTop += ' '.repeat(mitad - i) + line + '\n'
    bodyBottom = line + '\n' + bodyBottom
  }

  const boxMitad = symbolLine.repeat(size) + symbol.repeat(mitad) + symbolLine + '\n'

  const lineStart = ' '.repeat(size - 1) + symbolLine.repeat(size) + '\n'
  const lineEnd = symbolLine.repeat(size) + '\n'

  result = lineStart + (bodyTop + boxMitad + bodyBottom + lineEnd).repeat(+!!(size - 1))
  return result
}

// const result4 = drawGift(2, '*')
// console.log(result4)

// const result5 = drawGift(3, '&')
// console.log(result5)

const result = drawGift(4, '+')
console.log(result)

// const result2 = drawGift(5, '*')
// console.log(result2)

// const result3 = drawGift(1, '^')
// console.log(result3)
