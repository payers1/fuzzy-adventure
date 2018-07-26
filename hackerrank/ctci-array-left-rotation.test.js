function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    const first = a.shift()
    a.push(first)
  }
  return a
}

test('solution works', () => {
  const sampleInputArray = [1, 2, 3, 4, 5]
  const sampleInputRotations = 2
  const expected = [3, 4, 5, 1, 2]
  expect(rotLeft(sampleInputArray, sampleInputRotations)).toEqual(expected)
})
