import { createFrame } from '../frame'
describe('First repeat gift', () => {
  test('Should return an array without duplicates', () => {
    const names = ['midu', 'madeval', 'educalvolpz']
    const frame = createFrame(names)

    expect(frame).toBeDefined()
    expect(frame).toEqual(`***************
* midu        *
* madeval     *
* educalvolpz *
***************`)
  })
})
