export function detectBombs(grid) {
  const result = []
  // console.log(grid.length)
  for (let i = 0; i < grid.length; i++) {
    const counts = []

    for (let j = 0; j < grid.length; j++) {
      // const isBorder = (i === 0 || i === grid.length - 1 || j === 0 || j === grid[i].length - 1);
      const isBorderTop = i === 0
      const isBorderBottom = i === grid.length - 1
      const isBorderLeft = j === 0
      const isBorderRight = j === grid[i].length - 1

      if (isBorderTop && isBorderLeft) {
        // const crr = grid[i][j]
        const next = grid[i][j + 1]
        const bottom = grid[i + 1][j]
        const diagonal = grid[i + 1][j + 1]

        let count = [next, bottom, diagonal].filter(Boolean).length
        counts.push(count)
      } else if (isBorderTop && isBorderRight) {
        // const crr = grid[i][j]
        const prev = grid[i][j - 1]
        const bottom = grid[i + 1][j]
        const diagonal = grid[i + 1][j - 1]

        let count = [prev, bottom, diagonal].filter(Boolean).length
        counts.push(count)
      } else if (isBorderBottom && isBorderLeft) {
        // const crr = grid[i][j]
        const next = grid[i][j + 1]
        const top = grid[i - 1][j]
        const diagonal = grid[i - 1][j + 1]

        let count = [next, top, diagonal].filter(Boolean).length
        counts.push(count)
      } else if (isBorderTop) {
        // const crr = grid[i][j]
        const prev = grid[i][j - 1]
        const next = grid[i][j + 1]
        const diagonal = grid[i - 1][j - 1]

        let count = [prev, next, diagonal].filter(Boolean).length
        counts.push(count)
      } else if (isBorderBottom) {
        // const crr = grid[i][j]
        const prev = grid[i][j - 1]
        const next = grid[i][j + 1]
        const diagonal = grid[i - 1][j + 1]

        let count = [prev, next, diagonal].filter(Boolean).length
        counts.push(count)
      } else if (isBorderLeft) {
        // const crr = grid[i][j]
        const next = grid[i][j + 1]
        const top = grid[i - 1][j]
        const bottom = grid[i + 1][j]
        const diagonal = grid[i + 1][j + 1]
        const diagonalTop = grid[i - 1][j + 1]

        let count = [next, top, bottom, diagonal, diagonalTop].filter(Boolean).length
        counts.push(count)
      } else if (isBorderRight) {
        // const crr = grid[i][j]
        const prev = grid[i][j - 1]
        const top = grid[i - 1][j]
        const bottom = grid[i + 1][j]
        const diagonal = grid[i + 1][j - 1]
        const diagonalTop = grid[i - 1][j - 1]

        let count = [prev, top, bottom, diagonal, diagonalTop].filter(Boolean).length
        counts.push(count)
      } else {
        // const crr = grid[i][j]
        const next = grid[i][j + 1]
        const prev = grid[i][j - 1]
        const bottom = grid[i + 1][j]
        const top = grid[i - 1][j]
        const diagonal = grid[i + 1][j + 1]
        const diagonalTop = grid[i - 1][j + 1]
        const diagonalBottom = grid[i + 1][j - 1]
        const diagonalTopLeft = grid[i - 1][j - 1]

        let count = [next, prev, bottom, top, diagonal, diagonalTop, diagonalBottom, diagonalTopLeft].filter(
          Boolean
        ).length
        counts.push(count)
      }
      break
    }
    console.log(counts)

    // result.push(counts)
  }
}

const result = detectBombs([
  [true, false, false],
  [false, true, false], // diagonal tiene una bomba
  [false, false, false],
])

console.log(result)
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

// detectBombs([
//   [true, false],
//   [false, false],
// ])
// [
//   [0, 1],
//   [1, 1]
// ]
