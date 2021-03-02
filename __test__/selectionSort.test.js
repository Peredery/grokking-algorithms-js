import selectionSort, { findSmallest } from '../02/selectionSort';

test('findSmallest', () => {
  const arr = [1, 2, 3, 4, 5];
  const arr2 = [4, 6, 9, 2];
  expect(findSmallest(arr)).toBe(0);
  expect(findSmallest(arr2)).toBe(3);
});

test('selectionSort', () => {
  const arr = [5, 4, 2, 1, 3];
  expect(selectionSort(arr)).toStrictEqual([1, 2, 3, 4, 5]);
});
