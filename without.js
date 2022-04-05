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

const without = function(sourceArray, itemsToRemoveArray) {
  const modifiedArray = [];
  //make a flat copy of the source array as to not modify the original
  modifiedArray.push(...sourceArray);

  //remove all instances of the itemsToRemoveArray elements from the copy of the source array
  for (let element of itemsToRemoveArray) {
    while (modifiedArray.indexOf(element) >= 0) {
      modifiedArray.splice(modifiedArray.indexOf(element),1);
    }
  }
  
  return modifiedArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

