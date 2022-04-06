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

const letterPositions = function(sentence) {
  const results = {};
  const lowerSentence = sentence.toLowerCase().split('');

  // logic to update results here
  lowerSentence.forEach((letter, index) => {
    if (letter !== ' ') {
      if (Object.keys(results).indexOf(letter) < 0) {
        results[letter] = [index];
      } else {
        results[letter].push(index);
      }
    }
  });

  return results;

};
  // We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

let str = "lighthouse in the house";
console.log(letterPositions(str));

  
