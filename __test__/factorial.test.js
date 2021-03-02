import factorial from '../03/factorial';

test('factorial', () => {
  expect(factorial(3)).toBe(6);
  expect(factorial(1)).toBe(1);
})
