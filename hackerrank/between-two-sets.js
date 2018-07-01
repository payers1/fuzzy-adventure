function getTotalX(a, b) {
  const arr = new Array(Math.max(...b)).fill(0).map((item, index) => index + 1)

  const isFactorOfA = item => a.every(itemInA => item % itemInA === 0)
  const isFactorOfB = item => b.every(itemInB => itemInB % item === 0)

  const results = arr.filter(isFactorOfA).filter(isFactorOfB)
  return results.length
}

export default getTotalX
