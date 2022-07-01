let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  }

  return array.concat(number);
};

console.log(addToBatch([], 8));
