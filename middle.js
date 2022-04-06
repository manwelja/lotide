const eqArrays = function(arr1, arr2) {
  let equFlag = true;

  if (arr1.length !== arr2.length) {
    equFlag = false;
  }

  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      equFlag = false;
    }
  });

  return equFlag;
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(inputArray) {
  let numToSlice = 0;
  let startIndex = 0;

  //ensure that the input parameter is a non-empty array
  if (!Array.isArray(inputArray) || inputArray.length < 3) {
    return [];
  }
  
  //if even num elements, need to pull an extra element out of the array
  inputArray.length % 2 === 0 ? numToSlice = 2 : numToSlice = 1;
  startIndex = Math.ceil(inputArray.length / 2) - 1;
  
  //return the middle element(s) of the input array
  return inputArray.slice(startIndex, startIndex + numToSlice);
};

assertArraysEqual(middle('[]'),[], true);
assertArraysEqual(middle([1]),[], true);
assertArraysEqual(middle([1, 2]), [], true);
assertArraysEqual(middle([1, 2, 3]), [2], true);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true);