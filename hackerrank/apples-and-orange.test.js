import countApplesAndOranges from './apples-and-oranges'

test('solution works (example)', () => {
  const s = 7
  const t = 11
  const a = 5
  const b = 15
  const apples = [-2, 2, 1]
  const oranges = [5, -6]
  expect(countApplesAndOranges(s, t, a, b, apples, oranges)).toEqual([1, 1])
})

test('solution works (empty arrays)', () => {
  const s = 7
  const t = 11
  const a = 5
  const b = 15
  const apples = []
  const oranges = []
  expect(countApplesAndOranges(s, t, a, b, apples, oranges)).toEqual([0, 0])
})
