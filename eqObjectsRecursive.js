const assertEqual = require('./assertEqual');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjectsRecursive = function(object1, object2) {

  //Make sure the objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  for  (let key in object1) {
    //if the current value is not an object, compare the values
    if (object1[key].entries < 1 && object2[key].entries < 1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    //if the current value is an object, recurse to compare the nested objects
    return true && eqObjectsRecursive(object1[key], object2[key]);
  }
  return true;
};

assertEqual(eqObjectsRecursive({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);// => true
assertEqual(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjectsRecursive({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }), false); // => false

module.exports = { eqObjectsRecursive };

