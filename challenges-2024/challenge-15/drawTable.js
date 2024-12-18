export function drawTable(data) {
  const line = `+${'-'.repeat(10)}+${'-'.repeat(10)}+`
  const keys = Object.keys(data[0])
  const headerKeys = keys.map(key => `| ${key.charAt(0).toUpperCase()}${key.padEnd(9).slice(1)}`).join('') + '|'
  const header = `${line}\n${headerKeys}\n${line}`
  const body = data
    .map(row => {
      return keys.map(key => `| ${row[key].padEnd(9)}`).join('') + '|'
    })
    .join('\n')

  return `${header}\n${body}\n${line}`
}

const result = drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' },
])

console.log(result)
