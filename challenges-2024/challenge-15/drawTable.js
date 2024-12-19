export function drawTable(data) {
  function toUpperCase(input) {
    const firstLetter = input.charAt(0).toUpperCase()
    return firstLetter + input.slice(1)
  }

  const keys = Object.keys(data[0])
  const columnLengths = keys.map(key => key.length)

  const rows = data.map(row => {
    return keys.map((key, index) => {
      const value = row[key].toString()
      columnLengths[index] = Math.max(columnLengths[index], value.length)
      return value
    })
  })

  const line = `+-${columnLengths.map(length => '-'.repeat(length)).join('-+-')}-+`
  const header = `| ${keys
    .map((key, index) => {
      return toUpperCase(key).padEnd(columnLengths[index])
    })
    .join(' | ')} |`

  const body = rows
    .map(row => {
      return `| ${row.map((value, index) => value.padEnd(columnLengths[index])).join(' | ')} |`
    })
    .join('\n')

  return `${line}\n${header}\n${line}\n${body}\n${line}`
}

const result = drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' },
])

console.log(result)
