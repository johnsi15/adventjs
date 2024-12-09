function fixPackages(packages) {
  const regex = /\([^()]*\)/
  console.log(regex.exec(packages))
  while (regex.test(packages)) {
    const match = regex.exec(packages)
    const reverse = match[0].slice(1, -1).split('').reverse().join('')
    packages = packages.replace(match[0], reverse)
  }

  return packages
}

// const result = fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis
const result = fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"
console.log(result)
