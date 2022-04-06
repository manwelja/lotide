const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objToScan, itemToFind) {

  for (const key in objToScan) {
    if (objToScan[key] === itemToFind) {
      return key;
    }
  }
  return undefined;

};
//TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);