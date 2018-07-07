function solve(n) {
  return new Array(n - 1)
    .fill(1)
    .map((n, i) => n + i)
    .filter(n => n % 5 === 0 || n % 3 === 0)
    .reduce((p, c) => p + c, 0)
}

test('example solution works', () => {
  expect(solve(10)).toBe(23)
})

test('solution works', () => {
  expect(solve(1000)).toBe(233168)
})
