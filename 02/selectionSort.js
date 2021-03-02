const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

export default (arr) => {
  const newArr = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i += 1) {
    const smallestI = findSmallest(arr);
    newArr.push(arr.splice(smallestI, 1)[0]);
  }
  return newArr;
};

export {
  findSmallest,
};
