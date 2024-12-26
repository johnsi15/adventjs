export function isRobotBack(moves) {
  const modifiedMoves = {
    '*': 1,
    L: 'R',
    R: 'L',
    U: 'D',
    D: 'U',
  }

  const movesDictionary = {
    R: 0,
    L: 0,
    U: 1,
    D: 1,
  }

  const ejes = [0, 0]

  const steps = moves.split('')
  const stepsHistory = new Set()

  let diff = true
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i]
    let stepNext = steps[i + 1]
    stepsHistory.add(step)

    if (step === '*') {
      ejes[movesDictionary[stepNext]] = ejes[movesDictionary[stepNext]] + 1
    }

    if (step === '!') {
      steps[i + 1] = modifiedMoves[stepNext]
    }

    if (step === '?') {
      const nextStep = steps[i + 1]

      if (stepsHistory.has(nextStep)) {
        diff = false
      } else {
        diff = true
      }
    }

    if (diff) {
      if (step === 'R' || step === 'U') {
        ejes[movesDictionary[step]] += 1
      } else if (step === 'L' || step === 'D') {
        ejes[movesDictionary[step]] -= 1
      }
    }
  }

  return ejes.some(eje => eje > 0 || eje < 0) ? ejes : true
}

const result = isRobotBack('*RU')

console.log(result)
