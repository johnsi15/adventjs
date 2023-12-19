export function calculateTime(deliveries) {
  let limitTime = '07:00:00' // HH:mm:ss

  let hoursTotal = 0
  let minutesTotal = 0
  let secondsTotal = 0

  for (const delivery of deliveries) {
    // console.log(delivery)
    const hours = Number(delivery.split(':')[0])
    const minutes = Number(delivery.split(':')[1])
    const seconds = Number(delivery.split(':')[2])
    console.log({ hours })
    hoursTotal += hours
    minutesTotal += minutes
    secondsTotal += seconds
  }

  if (secondsTotal >= 60) {
    secondsTotal = secondsTotal - 60
    minutesTotal++
  }

  if (minutesTotal >= 60) {
    minutesTotal = minutesTotal - 60
    hoursTotal++
  }

  console.log({ hoursTotal, minutesTotal, secondsTotal })

  let limitHours = Number(limitTime.split(':')[0])
  let limitMinutes = Number(limitTime.split(':')[1])
  let limitSeconds = Number(limitTime.split(':')[2])

  hoursTotal = limitHours - hoursTotal
  minutesTotal = limitMinutes - minutesTotal
  secondsTotal = limitSeconds - secondsTotal
  console.log(limitMinutes, minutesTotal)

  if (secondsTotal < 0) {
    secondsTotal = 60 + secondsTotal
    minutesTotal--
  }

  if (minutesTotal < 0) {
    minutesTotal = 60 + minutesTotal
    hoursTotal--
  }
  console.log({ hoursTotal, minutesTotal, secondsTotal })

  if (minutesTotal <= 0 && hoursTotal <= 0 && secondsTotal <= 0) {
    return '00:00:00'
  }

  hoursTotal = hoursTotal < 0 ? '00' : `-0${hoursTotal}`
  minutesTotal = minutesTotal < 0 ? '00' : minutesTotal

  return `${hoursTotal}:${minutesTotal}:${secondsTotal}0`
}

// const result = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// // '-02:20:00'
// console.log({ result })

// const result2 = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// // '00:30:00'
// console.log({ result2 })

// const result3 = calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']) // '-05:29:00'
// console.log({ result3 })

const result4 = calculateTime(['01:01:01', '09:59:59', '01:01:01'])
// "05:02:01"
console.log({ result4 })
