export function findNaughtyStep(original, modified) {
  const [characters1, characters2] = original.length > modified.length ? [original, modified] : [modified, original]

  const result = [...characters1].filter((char, i) => char !== characters2[i])

  return result[0] ?? ''
}

const original = 'abcd'
const modified = 'abcde'
const result = findNaughtyStep(original, modified) // 'e'

console.log(result)
