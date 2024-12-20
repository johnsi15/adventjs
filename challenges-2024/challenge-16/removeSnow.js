export function removeSnow(s) {
  let result = s

  for (let i = 0; i < result.length; i++) {
    const curr = result[i]
    const next = result[i + 1]

    if (curr === next) {
      result = result.slice(0, i) + result.slice(i + 2)
      i = -1
    }
  }

  return result
}

const result = removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(result)
