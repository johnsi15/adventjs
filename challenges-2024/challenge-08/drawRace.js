export function drawRace(indices, length) {
  const road = '~'.repeat(length)

  const race = indices.map((index, i) => {
    const count = i + 1
    const r = road.split('')
    const spaces = ' '.repeat(indices.length - i - 1)

    if (index === 0) return `${spaces}${r.join('')} /${count}`

    r.splice(index, 1, 'r')

    return `${spaces}${r.join('')} /${count}`
  })

  return race.join('\n')
}

const result = drawRace([0, 5, -3], 10)
console.log(result)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/
