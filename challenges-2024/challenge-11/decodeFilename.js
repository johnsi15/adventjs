export function decodeFilename(filename) {
  const [_, ...parts] = filename.split('_')

  let result = parts.join('_')

  return result.split('.').slice(0, -1).join('.')
}

const result = decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
// ➞ "sleighDesign.png"

decodeFilename('42_chimney_dimensions.pdf.hack2023')
// ➞ "chimney_dimensions.pdf"

console.log(result)
