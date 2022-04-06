const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arrFull) {

  if (arrFull.length < 2) {
    return [];
  } else {
    return arrFull.slice(1,arrFull.length);
  }
};

console.log(tail([1,2,3,4]));

