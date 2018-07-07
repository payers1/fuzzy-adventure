const fs = require('fs')
import solve from './frequency-queries'

describe('frequency-queries', () => {
  const getSampleNumber = sampleNumber => {
    const answer = fs
      .readFileSync(
        `${__dirname}/frequency-queries.data-answer-${sampleNumber}.txt`
      )
      .toString()
      .split('\n')
      .map(n => parseInt(n))

    const [n, ...queries] = fs
      .readFileSync(`${__dirname}/frequency-queries.data-${sampleNumber}.txt`)
      .toString()
      .split('\n')
      .map(n =>
        n
          .trim()
          .split(' ')
          .map(n => Number(n))
      )
    return {
      answer,
      queries
    }
  }
  test('solution works', () => {
    const queries = [
      [1, 5],
      [1, 6],
      [3, 2],
      [1, 10],
      [1, 10],
      [1, 6],
      [2, 5],
      [3, 2]
    ]
    expect(solve(queries)).toEqual([0, 1])
  })
  test('solution works 1', () => {
    const queries = [[1, 1], [2, 2], [3, 2], [1, 1], [1, 1], [2, 1], [3, 2]]
    expect(solve(queries)).toEqual([0, 1])
  })

  test('solution works 2', () => {
    const queries = [[3, 4], [2, 1003], [1, 16], [3, 1]]
    expect(solve(queries)).toEqual([0, 1])
  })

  test('solution works 04', () => {
    console.time('A')
    const { queries, answer } = getSampleNumber('04')
    expect(solve(queries)).toEqual(answer)
    console.timeEnd('A')
  })

  test('solution works 08', () => {
    console.time('A')
    const { queries, answer } = getSampleNumber('08')
    expect(solve(queries)).toEqual(answer)
    console.timeEnd('A')
  })

  test('solution works 09', () => {
    const { queries, answer } = getSampleNumber('09')
    expect(solve(queries)).toEqual(answer)
  })

  test('solution works 10', () => {
    const { queries, answer } = getSampleNumber('10')
    expect(solve(queries)).toEqual(answer)
  })
})
