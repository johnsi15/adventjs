export function getIndexsForPalindrome(word) {
  const wordList = word.split('')
  const index = wordList.findIndex((letter, i) => letter !== word.at(-i - 1))

  if (index === -1) return []

  const len = word.length - 1 - index

  for (let i = index + 1; i < len; i++) {
    const words = [...wordList]
    words[index] = word.at(i)
    words[i] = word.at(index)

    const wordsReverse = [...words].reverse().join('')
    // console.log({ words: words.join(''), wordsReverse })
    if (words.join('') === wordsReverse) return [index, i]

    words[index] = word.at(index)
    words[i] = word.at(len)
    words[len] = word.at(i)

    // console.log({ words: words.join(' ') })
    if (words.every((l, i) => l == words.at(words.length - 1 - i))) return [index + i, len]
  }

  return null
}

// const result = getIndexsForPalindrome('anna')
// console.log(result)

// const result2 = getIndexsForPalindrome('abab')
// console.log(result2)

// const result3 = getIndexsForPalindrome('abac')
// console.log(result3)

const result4 = getIndexsForPalindrome('aaababa')
console.log(result4) // [1, 3]

const result5 = getIndexsForPalindrome('rotaratov')
console.log(result5) // [4, 8]
