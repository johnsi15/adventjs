export function calculateTime(deliveries) {
  const limitTime = 3600 * 7
  let time = 0

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(':')
    time += Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)
  }

  const signo = limitTime - time <= 0 ? '' : '-'

  time = Math.abs(limitTime - time)

  const hours = (Math.floor(time / 3600) + '').padStart(2, '0')
  const minutes = (Math.floor((time % 3600) / 60) + '').padStart(2, '0')
  const seconds = ((time % 60) + '').padStart(2, '0')

  return `${signo}${hours}:${minutes}:${seconds}` // HH:mm:ss
}

const result = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'
console.log({ result })

const result2 = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'
console.log({ result2 })

// const result3 = calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']) // '-05:29:00'
// console.log({ result3 })
