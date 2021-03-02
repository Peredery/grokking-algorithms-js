import binarySearch from '../01/binarySearch';

test('Binary Search', () => {
  const list1 = [0, 1, 2, 3, 4, 5, 6, 7];
  const emptyList = [];
  expect(binarySearch(emptyList, 1)).toBe(null);
  expect(binarySearch(list1, 4)).toBe(4);
  expect(binarySearch(list1, 6)).toBe(6);
})
