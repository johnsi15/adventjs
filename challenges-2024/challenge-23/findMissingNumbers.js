export function findMissingNumbers(nums) {
  const max = Math.max(...nums)
  const newNums = Array.from({ length: max }, (_, index) => index + 1)
  const result = []

  newNums.forEach(num => {
    const isFound = nums.find(item => item === num)
    if (!isFound) result.push(num)
  })

  return result
}

const result = findMissingNumbers([1, 2, 4, 6])
console.log({ result })
