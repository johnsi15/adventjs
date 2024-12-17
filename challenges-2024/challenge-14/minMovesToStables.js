export function minMovesToStables(reindeer, stables) {
  const stablesSort = stables.sort((a, b) => a - b)
  const reindeerSort = reindeer.sort((a, b) => a - b)

  let result = 0

  for (let i = 0; i < reindeer.length; i++) {
    const rein = reindeerSort[i]
    const stable = stablesSort[i]

    result += Math.abs(rein - stable)
  }

  return result
}

const result = minMovesToStables([1, 1, 3], [1, 8, 4])
console.log({ result })
