import { findNaughtyStep } from '../findNaughtyStep.js'
describe('Naughty elf', () => {
  test('first extra step that has been added or removed in the manufacturing chain -> e', () => {
    const original = 'abcd'
    const modified = 'abcde'
    const firstExtraStep = findNaughtyStep(original, modified)

    expect(firstExtraStep).toBeDefined()
    expect(firstExtraStep).toBe('e')
  })
})
