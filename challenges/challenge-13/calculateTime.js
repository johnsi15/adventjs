export function calculateTime(deliveries) {
  // const startTime = '00:00:00' // HH:mm:ss
  let limitTime = '07:00:00' // HH:mm:ss

  // let timeTotal = ''
  let hoursTotal = 0
  let minutesTotal = 0
  let secondsTotal = 0

  // 06:50:00
  // 05:50:00
  // -02:20:00

  for (const delivery of deliveries) {
    console.log(delivery)
    const hours = Number(delivery.split(':')[0])
    const minutes = Number(delivery.split(':')[1])
    const seconds = Number(delivery.split(':')[2])

    const limitHours = Number(limitTime.split(':')[0])
    const limitMinutes = Number(limitTime.split(':')[1])
    const limitSeconds = Number(limitTime.split(':')[2])

    // console.log({ hoursTotal, limitHours, hours })
    hoursTotal = hours === 7 ? hours : limitHours - hours
    secondsTotal = limitSeconds - seconds === 0 ? `00` : limitSeconds - seconds

    if (limitMinutes === 0) {
      minutesTotal = 60 - minutes
      hoursTotal = hoursTotal - 1
    } else {
      minutesTotal = limitMinutes - minutes
    }

    // if (hoursTotal === 0) {
    //   hoursTotal = 24
    // }

    limitTime = `0${hoursTotal}:${minutesTotal}:${secondsTotal}`
    // console.log({ hoursTotal, minutesTotal, secondsTotal })
  }

  console.log(limitTime)

  return '' // HH:mm:ss
}

const result = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'
console.log({ result })

// const result2 = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// // '00:30:00'
// console.log({ result2 })
