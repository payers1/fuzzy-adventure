function hourglassSum(arr) {
  const sums = []
  for (let row = 0; row < arr.length - 2; row++) {
    const firstRow = arr[row]
    const secondRow = arr[row + 1]
    const thirdRow = arr[row + 2]

    for (let col = 0; col < arr[row].length - 2; col++) {
      const a = firstRow[col]
      const b = firstRow[col + 1]
      const c = firstRow[col + 2]
      const d = secondRow[col + 1]
      const e = thirdRow[col]
      const f = thirdRow[col + 1]
      const g = thirdRow[col + 2]
      const sum = a + b + c + d + e + f + g
      sums.push(sum)
    }
  }

  return Math.max(...sums)
}

export default hourglassSum
