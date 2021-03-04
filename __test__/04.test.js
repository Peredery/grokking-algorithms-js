import {
  sum, sumOfEl, max, recursiveBinarySearch, euclideanAlgorithm
} from '../04/04';

test('sum', () => {
  const arr = [1, 2, 3, 4];
  const arr2 = [5];
  const arr3 = [5, 5];
  expect(sum(arr)).toBe(10);
  expect(sum(arr2)).toBe(5);
  expect(sum(arr3)).toBe(10);
});

test('sumOfElem', () => {
  const arr = [0, 0, 0];
  const arr2 = [0];
  expect(sumOfEl(arr)).toBe(3);
  expect(sumOfEl(arr2)).toBe(1);
});

test('max', () => {
  const arr = [1, 2, 3];
  const arr2 = [1, 2, 3, 99, 12];
  expect(max(arr)).toBe(3);
  expect(max(arr2)).toBe(99);
});

test('Recursive binary search', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(recursiveBinarySearch(arr, 8)).toBe(8);
  expect(recursiveBinarySearch(arr, 12)).toBe(null);
});

test('euclideanAlgorithm', () => {
  expect(euclideanAlgorithm(1680, 640)).toBe(80);
});
