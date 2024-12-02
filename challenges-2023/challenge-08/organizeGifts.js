export function organizeGifts(gifts) {
  const regex = /([0-9]+)([a-zA-Z]+)/g
  const match = gifts.matchAll(regex)
  let result = ''

  for (const gift of match) {
    const [_, quantity, letter] = gift
    let numBox = Math.floor(quantity / 10)
    const numPallets = Math.floor(numBox / 5)
    const resGift = quantity - numBox * 10

    if (numPallets >= 1) {
      result += `[${letter}]`.repeat(numPallets)
      numBox -= numPallets * 5
      result += `{${letter}}`.repeat(numBox)
    } else {
      result += `{${letter}}`.repeat(numBox)
    }

    if (resGift >= 1) result += `(${letter.repeat(resGift)})`
  }

  return result
}

const result1 = organizeGifts(`76a11b`)
console.log(result1) // '[a]{a}{a}(aaaaaa){b}(b)'

const result2 = organizeGifts('20a')
console.log(result2) // "{a}{a}"

const result3 = organizeGifts('70b120a4c')
console.log(result3) // "[b]{b}{b}[a][a]{a}{a}(cccc)"
