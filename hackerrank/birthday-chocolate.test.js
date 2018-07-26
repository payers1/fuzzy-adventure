const sum = arr => arr.reduce((p, c) => p + c)

function solve(s, d, m) {
  return s.reduce((p, c, i) => {
    const slice = s.slice(i, i + m)
    const sliceSum = sum(slice)
    if (sliceSum === d) {
      p++
    }
    return p
  }, 0)
}

test('solution works', () => {
  expect(solve([1, 2, 1, 3, 2], 3, 2)).toBe(2)
})

test('solution works', () => {
  expect(solve([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0)
})

test('solution works', () => {
  expect(solve([4], 4, 1)).toBe(1)
})
