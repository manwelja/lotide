const eqArrays = function(arr1, arr2) {
  let equFlag = true;

  //if the arrays are not the same length, they are not equal
  if (arr1.length !== arr2.length) {
    equFlag = false;
  }

  //if the arrays are the same length, compare each element for equality
  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      equFlag = false;
    }
  });

  return equFlag;
};

//refactored eqArrays to use recursion
const eqArraysRecursive = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // console.log(arr1, arr2);
  for (let i = 0; i < arr1.length; i++) {
    //if the current array element is not an array, straight up comparison
    if (!Array.isArray(arr1[i])) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } else {
      //if the current array element is also an array, append the rest of the array to the current element and recurse
      return true && eqArraysRecursive(arr1[i].concat(arr1.slice(i + 1)), arr2[i].concat(arr2.slice(i + 1)));
    }
  }
  return true;
};

// assertEqual(eqArraysRecursive(["1", [["2","4"],"2"], "3", ["1", "2", "3"]], ["1", [["2","3"],"2"], "3", ["1", "2", "3"]]), false);

module.exports = eqArrays;