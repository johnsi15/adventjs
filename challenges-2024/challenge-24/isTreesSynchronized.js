export function isTreesSynchronized(tree1, tree2) {
  const stack1 = [tree1]
  const stack2 = [tree2]

  while (stack1.length > 0 || stack2.length > 0) {
    const data1 = stack1.pop()
    const data2 = stack2.pop()

    if (data1 == null && data2 == null) continue
    if (data1 == null || data2 == null) return [false, tree1.value]

    if (data2.value !== data1.value) {
      return [false, tree1.value]
    }

    stack1.push(data1.right)
    stack1.push(data1.left)
    stack2.push(data2.left)
    stack2.push(data2.right)
  }

  return [true, tree1.value]
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' },
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
}

// const tree3 = {
//   value: '🎄',
//   left: { value: '🎅' },
//   right: { value: '🎁' },
// }

const result = isTreesSynchronized(tree1, tree2)
console.log({ result })
