import { cyberReindeer } from '../cyberReindeer.js'
describe('Cyber truck de santa', () => {
  test('Test #1 - "S..|...|.."', () => {
    const road = 'S..|...|..'
    const time = 10 // unidades de tiempo
    const result = cyberReindeer(road, time)

    const SOLUTION = [
      'S..|...|..', // estado inicial
      '.S.|...|..', // avanza el trineo la carretera
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // el trineo para en la barrera
      '..S|...|..', // el trineo para en la barrera
      '...S...*..', // se abre la barrera, el trineo avanza
      '...*S..*..', // avanza el trineo la carretera
      '...*.S.*..', // avanza el trineo la carretera
      '...*..S*..', // avanza el trineo la carretera
      '...*...S..', // avanza por la barrera abierta
    ]

    expect(result).toBeDefined()
    expect(result).toStrictEqual(SOLUTION)
  })

  test('Test #2 - "S.|."', () => {
    const road = 'S.|.'
    const time = 4 // unidades de tiempo
    const result = cyberReindeer(road, time)

    const SOLUTION = ['S.|.', '.S|.', '.S|.', '.S|.']

    expect(result).toBeDefined()
    expect(result).toStrictEqual(SOLUTION)
  })
})
