import solve from './problem-2-even-fibonacci'

test('example solution works', () => {
  expect(solve(100)).toBe(44)
})

test('solution works', () => {
  expect(solve(4000000)).toBe(4613732)
})
