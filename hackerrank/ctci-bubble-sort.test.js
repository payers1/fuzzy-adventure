function countSwaps(a) {
  let isSorted = false
  let swapsCount = 0
  let unsortedCount = a.length - 1
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < unsortedCount; i++) {
      if (a[i] > a[i + 1]) {
        const temp = a[i]
        a[i] = a[i + 1]
        a[i + 1] = temp
        swapsCount++
        isSorted = false
      }
    }
  }
  return [
    `Array is sorted in ${swapsCount} swaps.`,
    `First Element: ${a[0]}`,
    `Last Element: ${a[a.length - 1]}`
  ]
}

describe('ctci-bubble-sort', () => {
  test('solution works', () => {
    const expected = [
      'Array is sorted in 3 swaps.',
      'First Element: 1',
      'Last Element: 6'
    ]
    expect(countSwaps([6, 4, 1])).toEqual(expected)
  })
})
