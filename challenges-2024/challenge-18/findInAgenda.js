export function findInAgenda(agenda, phone) {
  const regex = new RegExp(phone.replace(/-/g, '\\-'), 'g')

  const matches = [...agenda.matchAll(regex)]

  if (matches.length === 0) return null

  const results = matches.map(match => {
    const text = agenda.split('\n').find(line => line.includes(match[0]))
    const name = text.split('<')[1].split('>')[0]
    const address = text.split('<')[0].split(' ').slice(1).join(' ').trim()
    return { name, address }
  })

  if (results.length > 1) return null

  return results[0]
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

const result = findInAgenda(agenda, '34-600-123-456')
console.log(result)
