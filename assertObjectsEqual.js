// function that compares two objects and writes the result to the console
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};
//function that compares the values in 2 arrays
const eqArrays = function(arr1, arr2) {
  let result = true;

  if (arr1.length !== arr2.length) {
    result = false;
  }

  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      result = false;
    }
  });

  return result;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = true;

  //Make sure the objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    result = false;
  }

  //if the objects have the same number of keys but tke key values/names are not identical, return false
  for (let key in object1) {
    //if the current key contains an array, use a helper function to compare arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        result = false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        result = false;
      }
    }
  }
  return result;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1"};
// assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2);