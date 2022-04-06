// function that compares two arrays and writes the result to the console
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

assertArraysEqual([1,2,3,4,5,6],[1,2,3,4,5,6,7]);