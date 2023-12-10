export function drawGift(size, symbol) {
  // const codigoASCII = symbol.charCodeAt(0)
  // console.log({ codigoASCII })
  const symbolLine = '#'
  let result = ''
  let body = ''

  for (let i = 1; i <= size; i++) {
    // let line = ' '.repeat(size - i) + symbolLine.repeat(i)
    let line = ' '.repeat(size - i)

    if (i > 1) {
      line += symbol.repeat((i - 2) * 2 + 1) + symbolLine
    }

    // console.log(line)
    body += line + '\n'
  }

  const bodyDown = body.split('\n').reverse().join('\n') + '\n'

  const lineStart = ' '.repeat(size - 1) + symbolLine.repeat(size) + '\n'
  const lineEnd = symbolLine.repeat(size) + '\n'

  result = lineStart + body + bodyDown + lineEnd
  return result
}

const result = drawGift(4, '+')

console.log(result)
