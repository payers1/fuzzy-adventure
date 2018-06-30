import hourglassSum from './2d-array'

describe('2d-array', () => {
  test('solution works', () => {
    const sampleInput = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 9, 2, -4, -4, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, -1, -2, -4, 0]
    ]
    expect(hourglassSum(sampleInput)).toBe(13)
  })

  test('solution works 1', () => {
    const sampleInput = [
      [-9, -9, -9, 1, 1, 1],
      [0, -9, 0, 4, 3, 2],
      [-9, -9, -9, 1, 2, 3],
      [0, 0, 8, 6, 6, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, 1, 2, 4, 0]
    ]
    expect(hourglassSum(sampleInput)).toBe(28)
  })

  test('solution works 2', () => {
    const sampleInput = [
      [-1, 1, -1, 0, 0, 0],
      [0, -1, 0, 0, 0, 0],
      [-1, -1, -1, 0, 0, 0],
      [0, -9, 2, -4, -4, 0],
      [-7, 0, 0, -2, 0, 0],
      [0, 0, -1, -2, -4, 0]
    ]
    expect(hourglassSum(sampleInput)).toBe(0)
  })
})
