//function to determine if 2 arrays are identical
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

//function to log to the console the result of comparing 2 arrays for equality
const assertArraysEqual = function(compArr1, compArr2) {

  if (eqArrays(compArr1, compArr2)) {
    console.log(`👍 Assertion Passed: ${compArr1} === ${compArr2}`);
  } else {
    console.log(`👎 Assertion Failed: ${compArr1} !== ${compArr2}`);
  }
};

const flatten = function(nestedArray) {
  const flatArray = [];
  //iterate through each element of the array
  nestedArray.forEach((element) => {
    //check if the current element is an array, if so flatten it before appending it to the new array    
    Array.isArray(element) ? element.forEach((subElement) => {flatArray.push(subElement);}) : flatArray.push(element);
  
});

  return flatArray;
}
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten(['a', 'b', ['c', 'd'], 'e', ['fghi']])) 