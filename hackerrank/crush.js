function arrayManipulation(n, queries) {
  const res = new Array(n).fill(0)
  let sum = 0
  let max = 0

  queries.forEach(query => {
    const [a, b, k] = query
    res[a - 1] += k
    if (b < n) {
      res[b] -= k
    }
  })

  for (let i = 0; i < n; i++) {
    sum += res[i]
    if (sum > max) {
      max = sum
    }
  }
  return max
}

export default arrayManipulation
