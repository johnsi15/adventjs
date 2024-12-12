const board = ['·····', '*····', '@····', 'o····', 'o····']

export function moveTrain(board, mov) {
  const directions = {
    U: [-1, 0], // Arriba
    D: [1, 0], // Abajo
    L: [0, -1], // Izquierda
    R: [0, 1], // Derecha
  }

  let startRow, startCol
  for (let i = 0; i < board.length; i++) {
    const col = board[i].indexOf('@')
    if (col !== -1) {
      startRow = i
      startCol = col
      break
    }
  }

  const [rowOffset, colOffset] = directions[mov]
  const newRow = startRow + rowOffset
  const newCol = startCol + colOffset

  if (newRow < 0 || newRow >= board.length) {
    return 'crash'
  }

  const targetCell = board[newRow][newCol]
  if (targetCell === '*') return 'eat'
  if (targetCell === 'o') return 'crash'
  if (targetCell === '.') return 'none'

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
