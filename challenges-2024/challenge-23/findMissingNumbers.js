export function findMissingNumbers(nums) {
  const max = Math.max(...nums)

  const result = Array.from({ length: max }, (_, index) => index + 1).filter(num => !nums.includes(num))

  return result
}

const result = findMissingNumbers([1, 2, 4, 6])
console.log({ result })
