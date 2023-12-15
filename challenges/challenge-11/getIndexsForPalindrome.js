export function getIndexsForPalindrome(word) {
  const wordList = word.split('')
  if (word === [...wordList].reverse().join('')) return []

  for (const [i] of wordList.entries()) {
    let j = i + 1
    while (j < wordList.length) {
      const words = [...wordList]
      const wordNext = words[j]
      const wordNow = words[i]
      // console.log({ wordNow, wordNext })
      words[i] = wordNext
      words[j] = wordNow

      const wordsReverse = [...words].reverse().join('')
      if (words.join('') === wordsReverse) return [i, j]
      j++
    }
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
