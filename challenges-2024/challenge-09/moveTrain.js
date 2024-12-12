const board = ['·····', '*····', '@····', 'o····', 'o····']

export function moveTrain(board, mov) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i]

    for (let j = 0; j < row.length; j++) {
      const cell = row[j]

      if (cell === '@') {
        const nextRow = board[i + 1] || []
        const prevRow = board[i - 1] || []

        const nextCell = nextRow[j]
        const prevCell = prevRow[j]
        const nextCellRight = row[j + 1]
        const prevCellRight = row[j - 1]

        if (mov === 'U') {
          if (prevCell === '*') return 'eat'
          if (!prevCell || prevCell === 'o') return 'crash'
          if (prevCell === '.') return 'none'
        }

        if (mov === 'D') {
          if (nextCell === '*') return 'eat'
          if (!nextCell || nextCell === 'o') return 'crash'
          if (nextCell === '.') return 'none'
        }

        if (mov === 'L') {
          if (prevCellRight === '*') return 'eat'
          if (!prevCellRight || prevCellRight === 'o') return 'crash'
          if (prevCellRight === '.') return 'none'
        }

        if (mov === 'R') {
          if (nextCellRight === '*') return 'eat'
          if (!nextCellRight || nextCellRight === 'o') return 'crash'
          if (nextCellRight === '.') return 'none'
        }
        break
      }
    }
  }

  return 'none'
}

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
