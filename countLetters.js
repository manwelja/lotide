const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const countObject = {};
  const lowerSentence = sentence.toLowerCase();

  for (let letter of lowerSentence) {
    Object.keys(countObject).indexOf(letter) < 0 ? countObject[letter] = 1 : countObject[letter] ++;
  }
  console.log(countObject);
  return countObject;
};

let mySentence = "aabbccdddDeghi";
countLetters(mySentence);