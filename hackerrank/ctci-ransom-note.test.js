function checkMagazine(magazine, note) {
  const sMag = magazine.split(' ')
  const sNote = note.split(' ')

  const map = sMag.reduce((p, c) => {
    if (!p[c]) {
      p[c] = 1
    } else {
      p[c] = p[c] + 1
    }
    return p
  }, {})

  const answer = sNote.reduce((p, word) => {
    if (map[word] && map[word] > 0) {
      map[word] -= 1
    } else if (!map[word]) {
      p = 'No'
    }
    return p
  }, 'Yes')

  return answer
}

describe('ransom note', () => {
  test('solution works', () => {
    const magazine = 'give me one grand today night'
    const note = 'give one grand today'
    expect(checkMagazine(magazine, note)).toBe('Yes')
  })

  test('solution works', () => {
    const magazine = 'two times three is not four'
    const note = 'two times two is four'
    expect(checkMagazine(magazine, note)).toBe('No')
  })
})
