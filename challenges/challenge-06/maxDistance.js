export function maxDistance(movements) {
  let maxDistance = 0
  let main = movements[0]

  movements.split('').forEach(m => {
    if (main === '*') {
      main = m
    }

    if (main === m) {
      maxDistance++
    } else if (m === '*') {
      maxDistance++
    } else {
      Math.abs(maxDistance--)
    }
  })

  return maxDistance
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
