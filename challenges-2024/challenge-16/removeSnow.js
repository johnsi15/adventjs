export function removeSnow(s) {
  for (let i = 0; i < s.length; i++) {
    const prev = s[i - 1]
    const curr = s[i]

    if (prev === curr) {
      return removeSnow(s.slice(0, i - 1) + s.slice(i + 1))
    }
  }

  return s
}

const result = removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(result)
