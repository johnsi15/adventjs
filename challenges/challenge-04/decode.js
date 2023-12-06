export function decode(message) {
  let result = message
  for (let i = 0; i < message.length; i++) {
    const match = /\(([a-zA-Z ]*?)\)/g.exec(result)
    if (!match) break

    const capture = match[1].split('').reverse().join('')
    const before = result.substring(0, match.index)
    const after = result.substring(result.indexOf(')') + 1)
    result = before + capture + after
  }
  return result
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
