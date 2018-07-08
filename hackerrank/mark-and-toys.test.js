function maximumToys(prices, k) {
  const sorted = prices.sort((a, b) => a - b)
  let totalSpent = 0
  let toys = 0
  let maxReached = false
  while (k > totalSpent && !maxReached) {
    if (totalSpent + sorted[toys] > k) {
      maxReached = true
    } else {
      totalSpent += sorted[toys]
      toys++
    }
  }
  return toys
}

describe('mark-and-toys', () => {
  test('solution works', () => {
    expect(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)).toBe(4)
  })
})
