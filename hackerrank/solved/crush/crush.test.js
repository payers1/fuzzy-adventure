const fs = require('fs')
import arrayManipulation from './crush'

describe('crush', () => {
  test('solution works', () => {
    const sampleInput = [5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]]
    expect(arrayManipulation(...sampleInput)).toBe(200)
  })
  test('solution works with large input', () => {
    const data = fs
      .readFileSync(__dirname + '/crush.data-07.txt')
      .toString()
      .split('\n')
    const [nm, ...queries] = data
    const [n, m] = nm.split(' ')

    const x = queries.map(q => q.split(' ').map(n => parseInt(n, 10)))

    const sampleInput = [parseInt(n, 10), x]
    expect(arrayManipulation(...sampleInput)).toBe(2497169732)
  })
})
