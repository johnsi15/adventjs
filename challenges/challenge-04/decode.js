export function decode(message) {
  let result
  while ((result = /\(([a-zA-Z ]*?)\)/g.exec(message))) {
    const capture = result[1].split('').reverse().join('')
    const before = message.substring(0, result.index)
    const after = message.substring(result.index + result[0].length)
    message = before + capture + after
  }
  return message
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
