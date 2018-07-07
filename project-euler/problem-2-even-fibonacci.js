function solve(n) {
  return generateFibNumsLessThanN(n).reduce((p, c) => {
    if (c % 2 === 0) {
      p += c
    }
    return p
  }, 0)
}

function generateFibNumsLessThanN(n) {
  const fibs = [1, 2]
  while (fibs[fibs.length - 1] < n || !ready) {
    const nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2]
    if (nextFib < n) {
      fibs.push(nextFib)
    } else {
      return fibs
    }
  }
  return fibs
}

export default solve
