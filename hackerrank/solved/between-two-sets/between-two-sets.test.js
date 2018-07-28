import getTotalX from './between-two-sets'

test('solution 0 should be correct', () => {
  expect(getTotalX([2, 4], [16, 32, 96])).toBe(3)
})

test('solution 1 should be correct', () => {
  expect(getTotalX([1], [100])).toBe(9)
})
