const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function that uses a call back to iterate through object and return the first key that 
//gets a truthy result from the callback
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

//TEST CODE
const testObject1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 12 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 12 },
  "Akelarre":  { stars: 3 }
};

const testObject2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const testObject3 = {
  "Bad Hotel":            { stars: 0, reviews: 0 },
  "OK Hotel":             { stars: 3, reviews: 8 },
  "Amazing Hotel":        { stars: 6, reviews: 3 },
  "Better than OK Hotel": { stars: 4, reviews: 9 },
  "OK Hotel 2":           { stars: 3, reviews: 55 },
  "Really Good Hotel":    { stars: 5, reviews: 2 }
};

assertEqual(findKey(testObject1, x => x.stars === 2), undefined);
assertEqual(findKey(testObject2, x => x.stars === 2), 'noma');
assertEqual(findKey(testObject3, x => x.reviews > 8), 'Better than OK Hotel');


