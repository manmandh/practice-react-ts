import { sum } from './math'

test('Cộng hai số', () => {
  expect(sum(2, 3)).toBe(5)
})

test('Cộng số âm', () => {
  expect(sum(-1, -1)).toBe(-2)
})
