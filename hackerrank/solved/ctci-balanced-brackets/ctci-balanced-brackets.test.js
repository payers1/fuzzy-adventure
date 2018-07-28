const fs = require('fs')
import solve from './ctci-balanced-brackets'

describe('ctci-balanced-brackets', () => {
  const getSampleNumber = sampleNumber => {
    const answers = fs
      .readFileSync(
        `${__dirname}/ctci-balanced-brackets.data-answer-${sampleNumber}.txt`
      )
      .toString()
      .split('\n')

    const [n, ...inputs] = fs
      .readFileSync(
        `${__dirname}/ctci-balanced-brackets.data-${sampleNumber}.txt`
      )
      .toString()
      .split('\n')
    return {
      answers,
      inputs
    }
  }

  test('solution works', () => {
    expect(solve('{[()]}')).toBe('YES')
  })

  test('solution works 1', () => {
    expect(solve('{[(])}')).toBe('NO')
  })

  test('solution works 2', () => {
    expect(solve('{{[[(())]]}}')).toBe('YES')
  })

  test('solution works 3', () => {
    const { answers, inputs } = getSampleNumber('05')
    inputs.forEach((input, index) => expect(solve(input)).toBe(answers[index]))
  })
})
