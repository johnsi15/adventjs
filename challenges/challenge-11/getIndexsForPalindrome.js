export function getIndexsForPalindrome(word) {
  const wordList = word.split('')
  const wordReverse = [...wordList].reverse().join('')
  if (word === wordReverse) return []

  let wordGood = ''
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const words = [...wordList]
      const wordNext = words[j]
      const wordNow = words[i]
      // console.log({ wordNow, wordNext })
      words[i] = wordNext // b
      words[j] = wordNow // a
      wordGood = words.join('')
      const wordReverseGood = [...words].reverse().join('')
      // console.log({ wordReverseGood, wordGood })
      if (wordReverseGood === wordGood) return [i, j]
    }
  }

  return null
}

const result = getIndexsForPalindrome('anna')
console.log(result)

const result2 = getIndexsForPalindrome('abab')
console.log(result2)

const result3 = getIndexsForPalindrome('abac')
console.log(result3)

const result4 = getIndexsForPalindrome('aaababa')
console.log(result4)
