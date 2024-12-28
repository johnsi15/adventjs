export function treeHeight(tree) {
  if (tree == null) return 0

  let depth = 1

  while (tree.left || tree.right) {
    tree = tree.left ?? tree.right
    depth++
  }

  return depth
}

const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null,
    },
    right: {
      value: '🎅',
      left: null,
      right: null,
    },
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null,
    },
  },
}

const result = treeHeight(tree)
console.log(result)
