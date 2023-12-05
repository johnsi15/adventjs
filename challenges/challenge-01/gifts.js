export function findFirstRepeated(gifts) {
  const repeatGifts = new Set()

  for (let i = 0; i < gifts.length; i++) {
    if (repeatGifts.has(gifts[i])) return gifts[i]

    repeatGifts.add(gifts[i])
  }

  return -1
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
