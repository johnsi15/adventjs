export function isRobotBack(moves) {
  // Code here
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

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i]
    let stepNext = steps[i + 1]

    // const especialStep = modifiedMoves[step]
    // console.log({ especialStep })

    if (step === '*') {
      ejes[movesDictionary[stepNext]] = ejes[movesDictionary[stepNext]] + 1
    }

    if (step === '!') {
      steps[i + 1] = modifiedMoves[stepNext]
    }

    if (step === 'R') {
      ejes[0] = ejes[0] + 1
    }

    if (step === 'L') {
      ejes[0] = ejes[0] - 1
    }

    if (step === 'U') {
      ejes[1] = ejes[1] + 1
    }

    if (step === 'D') {
      ejes[1] = ejes[1] - 1
    }
  }

  return ejes.some(eje => eje > 0 || eje < 0) ? ejes : true
}

const result = isRobotBack('LLL!R')

console.log(result)
