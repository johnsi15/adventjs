export function drawGift(size, symbol) {
  if (size <= 1) return '#\n'

  const symbolLine = '#'
  let result = ''
  let body = ''
  const mitad = size - 2
  console.log({ mitad })

  for (let i = 1; i <= mitad; i++) {
    let line = ' '.repeat(size - i - 1) + symbolLine
    line += symbol.repeat(mitad) + symbolLine + symbol.repeat(i - 1)
    line += symbolLine
    body += line + '\n'
  }

  let boxMitad = ''
  if (size > 2) {
    boxMitad = symbolLine.repeat(size) + symbol.repeat(mitad) + symbolLine
  } else {
    boxMitad = symbolLine.repeat(size + 1)
  }

  const bodyDown = body.split('\n').reverse().join('\n') + '\n'
  let bodyDownClean = bodyDown.replaceAll(' ', '')

  const lineStart = ' '.repeat(size - 1) + symbolLine.repeat(size) + '\n'
  const lineEnd = symbolLine.repeat(size) + '\n'

  result = lineStart + body + boxMitad + bodyDownClean + lineEnd
  return result
}

const result4 = drawGift(3, '&')
console.log(result4)

const result = drawGift(4, '+')
console.log(result)

const result2 = drawGift(5, '*')
console.log(result2)

const result3 = drawGift(1, '^')
console.log(result3)
