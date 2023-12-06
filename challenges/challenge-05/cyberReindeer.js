export function cyberReindeer(road, time) {
  const result = []
  let count = 0
  let count2 = 0
  let count3 = 0
  let camino = road.split('')
  for (let i = 0; i <= time; i++) {
    if (i === 0) {
      result.push(road)
    }

    if (i === 3 || i === 4) {
      result.push(camino.join(''))
    }

    if (i >= 1 && i <= 2) {
      camino = camino.map(c => {
        if (c === '|') return '|'

        if (c === 'S') {
          count++
          return '.'
        }

        if (count > 0) {
          count--
          return 'S'
        }

        return '.'
      })

      console.log({ camino })
      result.push(camino.join(''))
    }

    if (i === 6) {
      camino = camino.map(c => {
        if (c === '|' && count2 === 0) {
          count2++
          return 'S'
        }

        if (c === '|') return '*'

        return '.'
      })
      result.push(camino.join(''))
    }

    if (i > 6) {
      camino = camino.map(c => {
        if (c === 'S' && count3 === 0) {
          count3 = 1
          return '*'
        }

        if (count3 === 1) {
          count3 = 2
          return 'S'
        }

        if (c === 'S') {
          count++
          return '.'
        }

        if (count > 0) {
          count--
          return 'S'
        }

        if (c === '*') return '*'

        return '.'
      })
      result.push(camino.join(''))
    }
  }
  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

console.log(result)
