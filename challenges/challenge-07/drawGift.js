export function drawGift(size, symbol) {
  // const codigoASCII = symbol.charCodeAt(0)
  // console.log({ codigoASCII })
  const symbolLine = '#'
  let result = ''
  let bodyUp = ''
  let bodyDown = ''

  for (let i = 1; i <= size; i++) {
    // let line = ' '.repeat(size - i) + symbolLine.repeat(i)
    let line = ' '.repeat(size - i)

    if (i > 1) {
      line += symbol.repeat((i - 2) * 2 + 1) + symbolLine
    }

    // console.log(line)
    bodyUp += line + '\n'
  }

  console.log('--'.repeat(20))

  for (let i = size - 1; i > 0; i--) {
    let line = ' '.repeat(size - i) + symbolLine.repeat(i)

    if (i > 1) {
      line += symbol.repeat((i - 2) * 2 + 1) + symbolLine
    }
    bodyDown += line + '\n'
  }

  const lineStart = ' '.repeat(size - 1) + symbolLine.repeat(size) + '\n'
  const lineEnd = symbolLine.repeat(size) + '\n'

  result = lineStart + bodyUp + bodyDown + lineEnd
  return result
}

const result = drawGift(4, '+')

console.log(result)
