export function inBox(box) {
  const regex = /^#\s*\*\s*#$/

  for (let i = 1; i < box.length - 1; i++) {
    const borde = box[i]

    if (regex.test(borde)) return true
  }

  return false
}

const result = inBox(['###', '#*#', '###']) // -> true
// const result = inBox(['####', '#* #', '#  #', '####'])
// const result = inBox(['#####', '# * #', '#   #', '#####']) // -> true

console.log(result)
