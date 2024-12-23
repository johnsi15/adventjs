export function detectBombs(grid) {
  const result = []
  const positions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  for (let i = 0; i < grid.length; i++) {
    const counts = []
    const row = grid[i]

    for (let j = 0; j < row.length; j++) {
      const validPositions = positions.filter(([rowOffset, colOffset]) => {
        const newRow = i + rowOffset
        const newCol = j + colOffset
        return newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[i].length && grid[newRow][newCol]
      })

      counts.push(validPositions.length)
    }

    result.push(counts)
  }

  return result
}

// const result = detectBombs([
//   [true, false, false],
//   [false, true, false], // diagonal tiene una bomba
//   [false, false, false],
// ])

// console.log(result)
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

const result = detectBombs([
  [true, true],
  [true, true],
  [false, false],
])
console.log(result)
// [
//   [0, 1],
//   [1, 1]
// ]
