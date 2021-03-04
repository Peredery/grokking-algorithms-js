const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const lessThanPivot = arr.filter((el) => el < pivot);
  const greaterThanPivot = arr.filter((el) => el > pivot);
  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
};

const euclideanAlgorithm = (a, b) => {
  if (a === 0 || b === 0) return a + b;
  return a > b ? euclideanAlgorithm(a % b, b) : euclideanAlgorithm(a, b % a);
};

const recursiveBinarySearch = (list, item) => {
  const low = 0;
  const high = list.length - 1;
  const mid = Math.floor((low + high) / 2);
  if (list[mid] === item) return list[mid];
  if (list.length === 1) return null;
  return mid < item
    ? recursiveBinarySearch(list.slice(mid + 1, -1), item)
    : recursiveBinarySearch(list.slice(low, mid), item);
};

const max = (list) => {
  if (list.length === 0) return -Infinity;
  const next = max(list.slice(1));
  return list[0] > next ? list[0] : next;
};

const sumOfEl = (arr) => {
  if (arr.length === 1) return 1;
  return 1 + sumOfEl(arr.slice(1));
};

const sum = (arr) => {
  if (arr.length === 1) return arr[0];
  return arr[0] + sum(arr.slice(1));
};

export {
  sum,
  sumOfEl,
  max,
  recursiveBinarySearch,
  euclideanAlgorithm,
  quickSort,
};
