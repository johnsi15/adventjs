export function adjustLights(lights) {
  const lightRed = '🔴'
  const lightGreen = '🟢'
  let count = 0

  for (const [i, light] of lights.entries()) {
    count += i % 2 === 0 ? (light === lightRed ? 1 : 0) : light === lightGreen ? 1 : 0
  }

  return Math.min(count, lights.length - count)
}

const result = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
console.log(result)

const result2 = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
console.log(result2)

const result3 = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
console.log(result3)

const result4 = adjustLights(['🔴', '🔴', '🔴'])
console.log(result4)
