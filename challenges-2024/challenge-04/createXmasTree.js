export function createXmasTree(height, ornament) {
  const spaces = height - 1

  const base = '_'.repeat(spaces) + '#' + '_'.repeat(spaces)

  const lines = []

  for (let i = 0; i < height; i++) {
    const spaces = '_'.repeat(height - 1 - i)
    const ornaments = ornament.repeat(i * 2 + 1)
    lines.push(spaces + ornaments + spaces)
  }

  lines.push(base, base)

  return lines.join('\n')
}

const tree = createXmasTree(1, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/
