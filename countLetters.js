const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  const lowerSentence = sentence.toLowerCase();

  for (let letter of lowerSentence) {
    Object.keys(results).indexOf(letter) < 0 ? results[letter] = 1 : results[letter] ++;
  }
  console.log(results);
  return results;
};

let mySentence = "aabbccdddDeghi";
countLetters(mySentence);