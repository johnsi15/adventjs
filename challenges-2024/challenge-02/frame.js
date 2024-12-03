export function createFrame(names) {
  let result = ''
  const maxLength = Math.max(...names.map(n => n.length))

  const topBottom = '*'.repeat(maxLength + 4)

  result = topBottom

  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    result += `\n* ${name.padEnd(maxLength, ' ')} *`
  }

  return (result += `\n${topBottom}`)
}
