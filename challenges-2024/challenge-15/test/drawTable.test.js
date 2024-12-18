import { drawTable } from '../drawTable'
describe('Files names', () => {
  test('Should return an string', () => {
    const result = drawTable([
      { name: 'Alice', city: 'London' },
      { name: 'Bob', city: 'Paris' },
      { name: 'Charlie', city: 'New York' },
    ])

    // +---------+-----------+
    // | Name    | City      |
    // +---------+-----------+
    // | Alice   | London    |
    // | Bob     | Paris     |
    // | Charlie | New York  |
    // +---------+-----------+

    expect(result).toBeDefined()
    expect(result).toBe(
      '+---------+-----------+\n| Name    | City      |\n+---------+-----------+\n| Alice   | London    |\n| Bob     | Paris     |\n| Charlie | New York  |\n+---------+-----------+'
    )
  })
})
