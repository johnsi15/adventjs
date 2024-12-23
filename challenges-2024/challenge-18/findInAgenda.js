export function findInAgenda(agenda, phone) {
  // Code here
  // const regex = /\+\d[\d\-]*\d/

  // const numero = "34-600-123-456"; // Número dinámico
  const regex = new RegExp(phone.replace(/-/g, '\\-'), 'g')

  const text = agenda.split('\n').find(line => regex.test(line))
  // console.log({ text })

  const matches = [...agenda.matchAll(regex)]
  console.log({ matches })
  if (matches.length > 1 || !text) return null

  const name = text.split('<')[1].split('>')[0]
  const address = text.split('<')[0].split(' ').slice(1).join(' ').trim()

  return { name, address }
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

// const result = findInAgenda(agenda, '34-600-123-456')
// console.log(result)

// console.log(findInAgenda(agenda, '600-987'))

console.log(
  findInAgenda(
    `+44-123-456-789 Main Street <Alice Smith>
  +44-123-456-789 Park Avenue <Alice Johnson>`,
    '44-123-456-789'
  )
)
