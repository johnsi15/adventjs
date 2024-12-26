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

    if (step === 'R' && diff) {
      ejes[0] = ejes[0] + 1
    }

    if (step === 'L' && diff) {
      ejes[0] = ejes[0] - 1
    }

    if (step === 'U' && diff) {
      ejes[1] = ejes[1] + 1
    }

    if (step === 'D' && diff) {
      ejes[1] = ejes[1] - 1
    }
  }

  return ejes.some(eje => eje > 0 || eje < 0) ? ejes : true
}

const result = isRobotBack('U?D?U')

console.log(result)
