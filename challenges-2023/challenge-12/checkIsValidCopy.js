export function checkIsValidCopy(original, copy) {
  for (let [i, char] of original.split('').entries()) {
    const charValid = /([A-Z])|([a-z])|(\#)|(\+)|(\:)|(\.)|(\s)/g
    const simbolos = [char, char.toLowerCase(), '#', '+', ':', '.', ' ', '']

    const res = simbolos.slice((charValid.exec(char)?.lastIndexOf(char) ?? 1) - 1).includes(copy[i])

    if (!res) return false
  }

  return true
}

const result = checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#') // true
console.log({ result })
// const result2 = checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#') // false (por la p inicial)
// console.log({ result2 })
// const result3 = checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
// console.log({ result3 })
// const result4 = checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)
// console.log({ result4 })

// const result = checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s') // false
// console.log(result)
