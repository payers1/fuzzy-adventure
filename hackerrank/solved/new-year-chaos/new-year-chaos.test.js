import { sampleInput1, sampleInput2 } from './new-year-chaos.data'
import minimumBribes from './new-year-chaos'

test('solution should work', () => {
  const sampleInput = [2, 1, 5, 3, 4]
  expect(minimumBribes(sampleInput)).toBe(3)
})

test('solution should work 1', () => {
  const sampleInput = [2, 5, 1, 3, 4]
  expect(minimumBribes(sampleInput)).toBe('Too chaotic')
})
//
test('solution should work 2', () => {
  const sampleInput = [1, 2, 5, 3, 7, 8, 6, 4]
  expect(minimumBribes(sampleInput)).toBe(7)
})

test('solution should work with large input', () => {
  const sampleInput = sampleInput1
  expect(minimumBribes(sampleInput)).toBe(966)
})

test('solution should work with large input', () => {
  const sampleInput = sampleInput2
  expect(minimumBribes(sampleInput)).toBe(709)
})
