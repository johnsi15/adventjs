export function organizeGifts(gifts) {
  const regex = /([0-9]+)([a-zA-Z]+)/g
  const match = gifts.matchAll(regex)
  let result = ''

  for (const gift of match) {
    // console.log({ gift }) // '76a'
    const [_, quantity, letter] = gift
    console.log({ quantity, letter })

    const numBox = Math.floor(quantity / 10)
    const numPales = numBox / 5
    const restoGift = (quantity / 10) % 1 !== 0 && quantity.split('')[1]
    console.log({ numBox, numPales, restoGift })

    if (numBox >= 5 && numPales >= 1) {
      result += `[${letter}]`.repeat(numPales)
      result += `{${letter}}`.repeat(numBox - 5)
    } else if (quantity > 10) {
      result += `{${letter}}`.repeat(numBox)
    }

    if (restoGift >= 1) result += `(${letter.repeat(restoGift)})`
  }

  return result
}

const result1 = organizeGifts(`76a11b`)
console.log(result1) // '[a]{a}{a}(aaaaaa){b}(b)'

// const result2 = organizeGifts('20a')
// console.log(result2) // "{a}{a}"

// const result3 = organizeGifts('70b120a4c')
// console.log(result3) // "[b]{b}{b}[a][a]{a}{a}(cccc)"

const result3 = organizeGifts('19d51e')
console.log(result3) // "{d}(ddddddddd)[e](e)"
