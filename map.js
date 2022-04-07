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


/*******************************************/
//function that uses a callback to replicate the JS map function
const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const expected1 = ['g','c','t','m','t'];

const words2 = ["123", "234", "345", "456", "6789"];
const results2 = map(words2, words2 => words2[0]);
const expected2 = ['1','2','3','4','6'];

const words3 = [["Abcs", "bcdef"], "And"];
const results3 = map(words3, words3 => words3[0]);
const expected3 = ['Abcs', 'A'];

assertArraysEqual(results1, expected1);
assertArraysEqual(results2, expected2);
assertArraysEqual(results3, expected3);
