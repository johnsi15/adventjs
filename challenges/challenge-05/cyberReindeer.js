export function cyberReindeer(road, time) {
  const result = [road]
  let step = '.'
  let a = 0
  for (let i = 1; i < time; i++) {
    if (i == 5) road = road.replace(/\|/g, '*')
    const newRoad = road.replace(/S[\.\*]/, `${step}S`)

    if (newRoad != road) {
      a++
      step = road[a]
    }

    road = newRoad
    result.push(road)
  }
  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

console.log(result)
