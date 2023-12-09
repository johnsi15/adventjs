export function cyberReindeer(road, time) {
  const result = [road]
  const regex = /S[\.\*]/
  let step = '.'

  for (let i = 1; i < time; i++) {
    if (i === 5) road = road.replace(/\|/g, '*')

    const index = road.match(regex)?.index
    const newRoad = road.replace(regex, `${step}S`)

    step = road[index + 1] ?? step

    road = newRoad
    result.push(road)
  }

  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

console.log(result)
