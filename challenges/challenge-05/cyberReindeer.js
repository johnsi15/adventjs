export function cyberReindeer(road, time) {
  const result = []
  let stop = false
  let count = 0
  for (let i = 0; i <= time; i++) {
    if (i === 0) {
      result.push(road)
    }

    let currentPosition = road.indexOf('S')
    // console.log({ currentPosition })
    let newPosition = currentPosition + 1
    const nextDot = road.indexOf('.', newPosition)

    const barrera = road.indexOf('|')
    const barreraOpen = road.indexOf('*')
    const lastBarreraOpen = road.lastIndexOf('*')
    console.log(currentPosition)

    if (barrera === i + 1) {
      stop = true
    }

    if (nextDot !== -1 && !stop && count === 0) {
      road =
        road.substring(0, currentPosition) +
        '.' +
        road.substring(newPosition, nextDot) +
        'S' +
        road.substring(nextDot + 1)

      currentPosition = nextDot

      result.push(road)
    } else {
      console.log('paso por acá no es punto')
      if (i === 4) {
        const nextDot = road.indexOf('|', newPosition)

        road =
          road.substring(0, currentPosition) +
          '.' +
          road.substring(newPosition, nextDot) +
          'S' +
          road.substring(nextDot + 1)

        road = road.replace('|', '*')

        currentPosition = nextDot

        stop = false
        count++
      }

      if (lastBarreraOpen !== -1 && time === 9) {
        console.log('paso por acá')
        road = '*' + 'S' + road.substring(newPosition, nextDot) + '.' + road.substring(nextDot + 1)

        currentPosition = nextDot
      }
      result.push(road)
    }

    if (barreraOpen !== -1 && count === 1) {
      road =
        road.substring(0, currentPosition) +
        '*' +
        road.substring(newPosition, nextDot) +
        'S' +
        road.substring(nextDot + 1)

      currentPosition = nextDot

      result.push(road)
      count--
    }
  }
  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

console.log(result)
