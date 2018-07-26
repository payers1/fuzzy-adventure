function alternatingCharacters(s) {
  return s.split('').reduce((p, c, i) => {
    if (i === 0) {
      return p
    }
    if (c === s[i - 1]) {
      p++
    }
    return p
  }, 0)
}

test('solution works', () => {
  expect(alternatingCharacters('AAAA')).toBe(3)
  expect(alternatingCharacters('BBBBB')).toBe(4)
  expect(alternatingCharacters('ABABABAB')).toBe(0)
  expect(alternatingCharacters('BABABA')).toBe(0)
  expect(alternatingCharacters('AAABBB')).toBe(4)
})
