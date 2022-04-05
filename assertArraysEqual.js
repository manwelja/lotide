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

const assertArraysEqual = function(compArr1, compArr2) {

  if (eqArrays(compArr1, compArr2)) {
    console.log(`👍 Assertion Passed: ${compArr1} === ${compArr2}`);
  } else {
    console.log(`👎 Assertion Failed: ${compArr1} !== ${compArr2}`);
  }
};

assertArraysEqual([1,2,3,4,5,6,7],[1,2,3,4,5,6]);