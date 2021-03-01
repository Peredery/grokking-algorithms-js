/*
Remember this binary search work's only if list is already sorted. ex: 1,2,3,4,5
*/

export default (list, item) => {
  let low = 0; // get min index of list
  let high = list[list.length - 1]; // get max index of list
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess === item) return mid;
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};
